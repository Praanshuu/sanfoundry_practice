"""HTML parser for Sanfoundry question pages and subject/category hub pages.

Handles both raw server HTML (where `.collapseomatic_content` is nested inside `<p>`) and
browser-saved DOM HTML (where `.collapseomatic_content` is a sibling after `<p>`).
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from typing import Iterable
from urllib.parse import urldefrag, urljoin, urlparse

from bs4 import BeautifulSoup, NavigableString, Tag

from fetcher import ALLOWED_HOSTS

SELECTORS = {
    "content": "div.entry-content",
    "title": "h1.entry-title, h1",
    "answer_toggle": "span.collapseomatic",
    "answer_block": ".collapseomatic_content",
    "junk": (
        ".sf-mobile-ads, .sf-desktop-ads, ._ap_apex_ad, "
        "[id^='sf-ads-'], [data-aa-adunit], [data-aaad], "
        "script, style, noscript"
    ),
    "next_link": "a[rel=next]",
    "hub_links": "div.sf-2col-tbl a[href]",
    "hub_links_fallback": "div.entry-content a[href]",
}

HUB_LINK_EXCLUDE_PATH_PREFIXES = (
    "/1000-",
    "/contact",
    "/training",
    "/best-reference-books",
    "/about",
    "/tag/",
    "/category/",
)

QUESTION_START = re.compile(r"^\s*(\d{1,4})\s*[\.\)]\s+(\S.*)$", re.S)
OPTION_LINE = re.compile(r"^\s*\(?([a-hA-H])[\)\.]\s*(.*)$", re.S)
ANSWER_RE = re.compile(r"Answer\s*[:\-]\s*(.+?)(?:\n|$)", re.I)
EXPLANATION_RE = re.compile(r"Explanation\s*[:\-]\s*(.*)$", re.I | re.S)
SEP = r"[\u2013\u2014\-\u00ef\u00bf\u00bd\ufffd:|]"


@dataclass
class ParsedQuestion:
    number: int | None
    question: str
    options: dict[str, str]          # {"A": "...", "B": "...", "C": "...", "D": "..."}
    correct_answer: str | None       # "A", "B", "A,C", or None
    explanation: str | None          # Explanation string or None
    answer_raw: str | None = None


@dataclass
class ParsedPage:
    url: str
    title: str | None = None
    subject: str | None = None
    topic: str | None = None
    series_key: str | None = None
    questions: list[ParsedQuestion] = field(default_factory=list)
    next_url: str | None = None
    next_series_key: str | None = None
    topic_links: list[str] = field(default_factory=list)


def _clean(s: str | None) -> str:
    return re.sub(r"\s+", " ", (s or "")).strip()


def clean_topic(raw: str | None) -> str | None:
    """Extract clean topic name, e.g. 'Hadoop Questions and Answers – Mapreduce Development – 2' -> 'Mapreduce Development'."""
    if not raw:
        return None
    s = _clean(raw)
    s = re.sub(r"^\s*Next\s*" + SEP + r"\s*", "", s, flags=re.I)
    m = re.match(
        r"^.*?(?:Questions?\s*(?:and|&|&amp;)\s*Answers?|MCQs?|Question\s*Bank|Interview\s*Questions?(?:\s*(?:and|&)\s*Answers?)?)\s*"
        + SEP
        + r"+\s*(.+)$",
        s,
        re.I,
    )
    if m:
        s = m.group(1)
    s = re.sub(r"\s*" + SEP + r"+\s*\d+\s*$", "", s)
    if re.search(r"[A-Za-z]\s+\d+\s*$", s):
        s = re.sub(r"\s+\d+\s*$", "", s)
    s = _clean(s)
    return s or None


def infer_subject(title: str | None, url: str | None = None) -> str | None:
    """Infer subject name from page title or URL."""
    if title:
        s = _clean(title)
        s = re.sub(r"^\s*1000\+?\s+", "", s, flags=re.I)
        m = re.match(
            r"^(.+?)\s+(?:Multiple\s+Choice\s+Questions|Questions?\s*(?:and|&|&amp;)\s*Answers?|MCQs?|Question\s*Bank|Interview\s*Questions?)\b",
            s,
            re.I,
        )
        if m:
            subj = _clean(m.group(1).strip(" -–—:|"))
            if subj:
                return subj

    if url:
        parsed = urlparse(url)
        slug = parsed.path.strip("/").split("/")[0] if parsed.path else ""
        slug = re.sub(r"^1000-", "", slug, flags=re.I)
        m = re.match(
            r"^([a-z0-9\-]+?)-(?:multiple-choice-questions|questions-answers|mcqs?|question-bank|interview-questions)\b",
            slug,
            re.I,
        )
        if m:
            subj = m.group(1).replace("-", " ").strip()
            if subj:
                return subj.title()
    return None


def series_key(raw: str | None) -> str | None:
    t = clean_topic(raw)
    return re.sub(r"[^a-z0-9]+", "", t.lower()) if t else None


def normalize_answer(raw: str | None, option_labels: Iterable[str] | None = None) -> str | None:
    """Normalize raw answer key to uppercase option letter(s) ('A', 'B', 'A,C'), or None if unavailable/invalid."""
    if not raw:
        return None
    s = raw.strip().lower()
    s = re.sub(r"^(option|answer|ans)\s*[:\-]?\s*", "", s)

    result: str | None = None
    if re.fullmatch(r"\(?[a-h]\)?(?:\s*(?:,|;|&|/|and)\s*\(?[a-h]\)?)+", s):
        out: list[str] = []
        for letter in re.findall(r"[a-h]", re.sub(r"\band\b", " ", s)):
            up = letter.upper()
            if up not in out:
                out.append(up)
        result = ",".join(out)
    else:
        m = re.match(r"^\(?([a-h])\)?(?:[\.\)\s]|$)", s)
        if m:
            result = m.group(1).upper()

    if result and option_labels:
        valid = {lbl.upper() for lbl in option_labels}
        if valid and any(part not in valid for part in result.split(",")):
            return None
    return result


def _text_lines(tag: Tag) -> list[str]:
    """Extract visible text lines from a tag, turning <br> into newlines and preserving <pre> whitespace."""
    preserve = tag.name == "pre" or tag.find("pre") is not None
    for br in tag.find_all("br"):
        br.replace_with(NavigableString("\n"))
    text = tag.get_text()
    lines: list[str] = []
    for ln in text.replace("\r", "").split("\n"):
        ln = ln.replace("\xa0", " ")
        ln = ln.rstrip() if preserve else ln.strip()
        if ln.strip() or (preserve and lines):
            lines.append(ln)
    while lines and not lines[-1].strip():
        lines.pop()
    return lines


class _DraftQuestion:
    def __init__(self, number: int, first_line: str):
        self.number = number
        self.q_lines: list[str] = [first_line]
        self.options: list[list] = []  # [[label_upper, [lines]], ...]
        self.answer_raw: str | None = None
        self.explanation: str | None = None
        self.closed = False

    def expected_label(self) -> str:
        return chr(ord("A") + len(self.options))

    def add_lines(self, lines: list[str]) -> None:
        for ln in lines:
            m = OPTION_LINE.match(ln)
            if m and m.group(1).upper() == self.expected_label():
                initial = m.group(2).strip()
                self.options.append([m.group(1).upper(), [initial] if initial else []])
            elif self.options:
                self.options[-1][1].append(ln.strip())
            else:
                self.q_lines.append(ln)

    def build(self) -> ParsedQuestion:
        question_text = "\n".join(self.q_lines).strip()
        opts = {label: "\n".join(text_lines).strip() for label, text_lines in self.options}
        correct = normalize_answer(self.answer_raw, opts.keys()) if self.answer_raw else None
        return ParsedQuestion(
            number=self.number,
            question=question_text,
            options=opts,
            correct_answer=correct,
            explanation=self.explanation,
            answer_raw=self.answer_raw,
        )


def _parse_answer_block(block: Tag) -> tuple[str | None, str | None]:
    lines = _text_lines(block)
    text = "\n".join(lines)
    am = ANSWER_RE.search(text)
    answer_raw = _clean(am.group(1)) if am else None
    em = EXPLANATION_RE.search(text)
    explanation = em.group(1).strip() if em else None
    if explanation == "":
        explanation = None
    if not am and not em and text.strip():
        answer_raw = None
        explanation = text.strip()
    return answer_raw, explanation


def _strip_trailing_number(s: str) -> str | None:
    s = _clean(s)
    s = re.sub(r"\s*" + SEP + r"+\s*\d+\s*$", "", s)
    return s or None


def _matches(tag: Tag, selector: str) -> bool:
    parent = tag.parent
    return parent is not None and tag in parent.select(selector)


def _extract_hub_links(soup: BeautifulSoup, base_url: str) -> list[str]:
    anchors = soup.select(SELECTORS["hub_links"]) or soup.select(SELECTORS["hub_links_fallback"])
    seen: set[str] = set()
    out: list[str] = []
    base_path = urlparse(base_url).path
    for a in anchors:
        href = (a.get("href") or "").strip()
        if not href or href.startswith(("#", "mailto:", "javascript:")):
            continue
        full = urldefrag(urljoin(base_url, href))[0]
        p = urlparse(full)
        if p.scheme in ("http", "https"):
            if p.netloc.lower() not in ALLOWED_HOSTS:
                continue
            if p.path == base_path or p.path.startswith(HUB_LINK_EXCLUDE_PATH_PREFIXES) or p.path.count("/") < 2:
                continue
        if full not in seen:
            seen.add(full)
            out.append(full)
    return out


def _extract_canonical_url(soup: BeautifulSoup) -> str | None:
    link = soup.find("link", rel="canonical")
    if link and link.get("href"):
        return str(link["href"]).strip()
    og = soup.find("meta", property="og:url")
    if og and og.get("content"):
        return str(og["content"]).strip()
    return None


def parse_page(html: bytes | str, url: str = "") -> ParsedPage:
    """Parse a Sanfoundry HTML page into questions, topic metadata, and pagination/hub links."""
    soup = BeautifulSoup(html, "html.parser")
    effective_url = url
    if not url or urlparse(url).scheme not in ("http", "https"):
        canonical = _extract_canonical_url(soup)
        if canonical:
            effective_url = canonical
    page = ParsedPage(url=effective_url)

    h1 = soup.select_one(SELECTORS["title"])
    page.title = _clean(h1.get_text()) if h1 else (_clean(soup.title.get_text()) if soup.title else None)
    page.subject = infer_subject(page.title, effective_url)

    content = soup.select_one(SELECTORS["content"])
    if content is None:
        return page

    # Extract next-page pagination link if available
    nl = soup.select_one(SELECTORS["next_link"])
    if nl and nl.get("href"):
        next_href = nl["href"].strip()
        if next_href and not next_href.startswith(("#", "javascript:")):
            page.next_url = urldefrag(urljoin(url, next_href))[0]
            page.next_series_key = series_key(nl.get_text())

    # Extract topic from intro sentence ("focuses on “X”") or fallback to cleaned title
    intro = _clean(content.get_text(" ", strip=True)[:600])
    m = re.search(r"focuses on\s+[\u201c\"“'](.+?)[\u201d\"”']", intro, re.I)
    page.series_key = series_key(page.title)
    if m:
        page.topic = _strip_trailing_number(m.group(1))
    else:
        page.topic = clean_topic(page.title)
    if not page.series_key and page.topic:
        page.series_key = re.sub(r"[^a-z0-9]+", "", page.topic.lower())

    # Remove advertisements, inline ad labels, and promo banners before parsing question blocks
    for junk in content.select(SELECTORS["junk"]):
        junk.decompose()
    for div in list(content.find_all("div")):
        if div.parent is None:
            continue
        txt = _clean(div.get_text())
        if txt.lower() == "advertisement":
            div.decompose()
        elif div.find("a", href=re.compile(r"sanfoundry\.com/study-abroad", re.I)) and len(txt) < 300:
            div.decompose()

    drafts: list[_DraftQuestion] = []
    current: _DraftQuestion | None = None

    def finalize() -> None:
        nonlocal current
        if current is not None:
            drafts.append(current)
            current = None

    def handle_text_block(tag: Tag) -> None:
        nonlocal current
        lines = _text_lines(tag)
        if not lines:
            return
        first = lines[0]
        m_q = QUESTION_START.match(first)
        starts_new = bool(m_q) and (
            current is None
            or current.closed
            or len(current.options) >= 2
            or int(m_q.group(1)) == current.number + 1
        )
        if starts_new and m_q:
            finalize()
            current = _DraftQuestion(int(m_q.group(1)), m_q.group(2).strip())
            rest = lines[1:]
        else:
            if current is None or current.closed:
                return
            m_opt = OPTION_LINE.match(first)
            starts_expected_option = bool(m_opt and m_opt.group(1).upper() == current.expected_label())
            has_pre = tag.name == "pre" or tag.find("pre") is not None
            waiting_for_option_body = bool(current.options and not current.options[-1][1])
            if (
                len(current.options) >= 2
                and not starts_expected_option
                and not has_pre
                and not waiting_for_option_body
            ):
                return
            rest = lines
        current.add_lines(rest)

    def handle_answer(block: Tag) -> None:
        nonlocal current
        if current is None or current.closed:
            return
        ans, expl = _parse_answer_block(block)
        current.answer_raw = ans
        current.explanation = expl
        current.closed = True

    ans_sel = SELECTORS["answer_block"]
    for child in list(content.children):
        if not isinstance(child, Tag):
            continue
        if child.select_one(ans_sel) is not None or _matches(child, ans_sel):
            if _matches(child, ans_sel):
                handle_answer(child)
                continue
            answers = child.select(ans_sel)
            for a in answers:
                a.extract()
            for t in child.select(SELECTORS["answer_toggle"]):
                t.decompose()
            handle_text_block(child)
            for a in answers:
                handle_answer(a)
        else:
            for t in child.select(SELECTORS["answer_toggle"]):
                t.decompose()
            if child.name in ("p", "pre", "div", "blockquote", "ul", "ol"):
                handle_text_block(child)
    finalize()

    # Keep only valid questions (at least 2 options or an explicit answer block)
    page.questions = [d.build() for d in drafts if len(d.options) >= 2 or d.answer_raw]

    if not page.questions:
        page.topic_links = _extract_hub_links(soup, url)

    return page

