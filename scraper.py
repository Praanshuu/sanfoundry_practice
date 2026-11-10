"""Minimal Sanfoundry Question Scraper.

Usage:
    python scraper.py https://www.sanfoundry.com/1000-python-questions-answers/ -o questions.json
    python scraper.py tests/fixtures/mapreduce_dev_2.html -o questions.json
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
import unicodedata
from collections import deque
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any
from urllib.parse import urlparse
from urllib.request import url2pathname

from fetcher import (
     DEFAULT_DELAY_SECONDS,
    DEFAULT_MAX_RETRIES,
    DEFAULT_TIMEOUT_SECONDS,
    BlockedError,
    Fetcher,
    FetchError,
)
from parser import infer_subject, parse_page


def normalize_text(text: str | None) -> str:
    """Normalize text for duplicate detection (lowercase, NFKC, collapse non-word chars)."""
    s = unicodedata.normalize("NFKC", text or "").lower()
    return re.sub(r"[\W_]+", " ", s).strip()


def dedupe_key(question: str, options: dict[str, str], source_url: str | None = None) -> str:
    """Compute a deterministic hash key from normalized question text and option values."""
    opt_part = "|".join(f"{k.upper()}:{normalize_text(v)}" for k, v in sorted(options.items()))
    parts = [normalize_text(question), opt_part]
    if not options and source_url:
        parts.append(normalize_text(source_url))
    return hashlib.sha1("||".join(parts).encode("utf-8")).hexdigest()


def _resolve_local_path(target: str) -> Path | None:
    """Return a Path if `target` refers to an existing local file or file:// URL, else None."""
    if target.startswith("file://"):
        parsed = urlparse(target)
        return Path(url2pathname(parsed.path))
    p = urlparse(target)
    if p.scheme in ("http", "https"):
        return None
    path = Path(target)
    if path.exists():
        return path
    return None


def _is_remote_url(target: str) -> bool:
    return urlparse(target).scheme in ("http", "https")


@dataclass
class ScrapeResult:
    subject: str
    questions: list[dict[str, Any]] = field(default_factory=list)
    pages_processed: int = 0
    duplicates_skipped: int = 0
    errors: list[str] = field(default_factory=list)
    blocked: bool = False

    def to_dict(self) -> dict[str, Any]:
        return {
            "subject": self.subject,
            "source": "Sanfoundry",
            "total_questions": len(self.questions),
            "questions": self.questions,
        }


def scrape(
    targets: str | list[str],
    *,
    subject: str | None = None,
    max_pages: int | None = 500,
    max_questions: int | None = None,
    follow_pagination: bool = True,
    same_topic_only: bool = False,
    delay: float = DEFAULT_DELAY_SECONDS,
    fetcher: Fetcher | None = None,
) -> ScrapeResult:
    """Scrape questions from one or more Sanfoundry URLs or local HTML files."""
    if isinstance(targets, str):
        target_list = [targets]
    else:
        target_list = list(targets)

    http_fetcher = fetcher or Fetcher(delay=delay)
    queue: deque[tuple[str, bool]] = deque()

    for t in target_list:
        t = t.strip()
        if not t:
            continue
        local = _resolve_local_path(t)
        if local is not None and local.is_dir():
            for html_file in sorted(local.glob("*.html")):
                queue.append((str(html_file), True))
        elif local is not None:
            queue.append((str(local), True))
        elif _is_remote_url(t):
            queue.append((t, False))
        else:
            # Non-existent local path or invalid URL
            queue.append((t, True))

    inferred_subject: str | None = (subject or "").strip() or None
    result = ScrapeResult(subject=inferred_subject or "Unknown")

    visited: set[str] = set()
    records_by_key: dict[str, dict[str, Any]] = {}

    while queue:
        if max_pages is not None and result.pages_processed >= max_pages:
            break
        if max_questions is not None and len(result.questions) >= max_questions:
            break

        current_target, is_local = queue.popleft()
        visit_id = (
             str(Path(current_target).resolve())
            if is_local and os.path.exists(current_target)
            else current_target
        )
        if visit_id in visited:
            continue
        visited.add(visit_id)

        try:
            if is_local:
                local_path = _resolve_local_path(current_target)
                if local_path is None or not local_path.is_file():
                    raise FetchError(f"Local HTML file not found: {current_target}")
                html_bytes = local_path.read_bytes()
                page_url = local_path.as_posix()
            else:
                html_bytes = http_fetcher.get(current_target)
                page_url = current_target
        except BlockedError as exc:
            result.blocked = True
            result.errors.append(str(exc))
            break
        except FetchError as exc:
            result.errors.append(str(exc))
            continue
        except OSError as exc:
            result.errors.append(f"Failed to read {current_target}: {exc}")
            continue

        page = parse_page(html_bytes, url=page_url)
        effective_source_url = page.url or page_url
        result.pages_processed += 1

        if not inferred_subject and page.subject:
            inferred_subject = page.subject
            result.subject = inferred_subject

        if page.questions:
            for q in page.questions:
                if max_questions is not None and len(result.questions) >= max_questions:
                    break

                key = dedupe_key(q.question, q.options, effective_source_url)
                existing = records_by_key.get(key)
                if existing is not None:
                    result.duplicates_skipped += 1
                    if existing["correct_answer"] is None and q.correct_answer is not None:
                        existing["correct_answer"] = q.correct_answer
                    if existing["explanation"] is None and q.explanation is not None:
                        existing["explanation"] = q.explanation
                    if existing["topic"] is None and page.topic is not None:
                        existing["topic"] = page.topic
                    continue

                record = {
                    "id": len(result.questions) + 1,
                    "topic": page.topic,
                    "question": q.question,
                    "options": q.options,
                    "correct_answer": q.correct_answer,
                    "explanation": q.explanation,
                    "source_url": effective_source_url,
                }
                records_by_key[key] = record
                result.questions.append(record)

            if follow_pagination and page.next_url:
                if same_topic_only and page.series_key and page.next_series_key != page.series_key:
                    pass
                else:
                    _enqueue_link(queue, visited, page.next_url, parent_is_local=is_local, front=True)
        elif follow_pagination and page.topic_links:
            for link in reversed(page.topic_links):
                _enqueue_link(queue, visited, link, parent_is_local=is_local, front=True)

    if not inferred_subject and target_list:
        for t in target_list:
            guessed = infer_subject(None, t)
            if guessed:
                result.subject = guessed
                break

    return result


def _enqueue_link(
    queue: deque[tuple[str, bool]],
    visited: set[str],
    link: str,
    *,
    parent_is_local: bool,
    front: bool = False,
) -> None:
    if parent_is_local:
        if _is_remote_url(link):
            # Do not make unexpected live network calls when parsing local HTML files
            return
        local_path = _resolve_local_path(link)
        if local_path is None or not local_path.is_file():
            return
        visit_id = str(local_path.resolve())
        item = (str(local_path), True)
    else:
        if not _is_remote_url(link):
            return
        visit_id = link
        item = (link, False)

    if visit_id in visited or item in queue:
        return
    if front:
        queue.appendleft(item)
    else:
        queue.append(item)


def save_json(data: dict[str, Any], output_path: str | Path) -> Path:
    """Write extracted question data as formatted JSON."""
    out = Path(output_path)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return out


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(
        description="Minimal Sanfoundry Question Scraper: extracts MCQs and saves them to JSON."
    )
    ap.add_argument(
        "targets",
        nargs="+",
        help="Sanfoundry subject/topic URL(s) or locally saved HTML file/directory path(s).",
    )
    ap.add_argument(
        "-o",
        "--output",
        default="questions.json",
        help="Output JSON file path (default: questions.json).",
    )
    ap.add_argument(
        "-s",
        "--subject",
        default=None,
        help="Subject name override (inferred automatically from page title/URL if omitted).",
    )
    ap.add_argument(
        "--max-pages",
        type=int,
        default=500,
        help="Maximum number of pages to process (default: 500).",
    )
    ap.add_argument(
        "--max-questions",
        type=int,
        default=None,
        help="Maximum number of unique questions to extract (default: no limit).",
    )
    ap.add_argument(
        "--delay",
        type=float,
        default=DEFAULT_DELAY_SECONDS,
        help=f"Polite delay in seconds between HTTP requests (default: {DEFAULT_DELAY_SECONDS}).",
    )
    ap.add_argument(
        "--no-pagination",
        action="store_true",
        help="Do not follow pagination or hub topic links.",
    )
    ap.add_argument(
        "--same-topic-only",
        action="store_true",
        help="Only follow next-page links that belong to the same topic series.",
    )
    args = ap.parse_args(argv)

    result = scrape(
        args.targets,
        subject=args.subject,
        max_pages=args.max_pages,
        max_questions=args.max_questions,
        follow_pagination=not args.no_pagination,
        same_topic_only=args.same_topic_only,
        delay=args.delay,
    )

    for err in result.errors:
        print(f"[ERROR] {err}", file=sys.stderr)

    if result.questions or not result.errors:
        out_path = save_json(result.to_dict(), args.output)
        print(
            f"Saved {len(result.questions)} question(s) from {result.pages_processed} page(s) "
            f"({result.duplicates_skipped} duplicate(s) skipped) to {out_path}"
        )

    if result.blocked or (not result.questions and result.errors):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

