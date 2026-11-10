"""Unit and integration tests for the Sanfoundry Question Scraper.

Run from the repository root:
    python -m unittest discover -s tests -v
"""
from __future__ import annotations

import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import MagicMock

from bs4 import BeautifulSoup
import requests

ROOT = Path(__file__).resolve().parent.parent
FIXTURES = Path(__file__).resolve().parent / "fixtures"
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from fetcher import BlockedError, Fetcher, FetchError  # noqa: E402
from parser import clean_topic, infer_subject, normalize_answer, parse_page  # noqa: E402
from scraper import dedupe_key, save_json, scrape  # noqa: E402


class FakeFetcher:
    """In-memory fetcher for testing pagination, hub pages, loops, and error handling."""

    def __init__(self, pages: dict[str, bytes | Exception]):
        self.pages = pages
        self.calls: list[str] = []

    def get(self, url: str) -> bytes:
        self.calls.append(url)
        val = self.pages.get(url)
        if val is None:
            raise FetchError(f"Failed to fetch {url}: HTTP 404 (Not Found)")
        if isinstance(val, Exception):
            raise val
        return val


class ScraperTestSuite(unittest.TestCase):
    # 1. Questions are extracted correctly from representative HTML fixtures
    # 2. All four options are extracted correctly where four options exist
    # 3. Correct answers are extracted when present
    def test_extract_questions_options_and_answers_from_fixtures(self):
        page = parse_page(
            (FIXTURES / "mapreduce_dev_2.html").read_bytes(),
            "https://www.sanfoundry.com/hadoop-questions-answers-mapreduce-development-2/",
        )
        self.assertEqual(page.subject, "Hadoop")
        self.assertEqual(page.topic, "Mapreduce Development")
        self.assertEqual(len(page.questions), 10)

        q1 = page.questions[0]
        self.assertEqual(
            q1.question,
            "The Mapper implementation processes one line at a time via _________ method.",
        )
        self.assertEqual(
            q1.options,
            {
                "A": "map",
                "B": "reduce",
                "C": "mapper",
                "D": "reducer",
            },
        )
        self.assertEqual(q1.correct_answer, "A")
        self.assertEqual(
            q1.explanation,
            "The Mapper outputs are sorted and then partitioned per Reducer.",
        )

        for q in page.questions:
            self.assertEqual(list(q.options.keys()), ["A", "B", "C", "D"])
            self.assertTrue(all(v.strip() for v in q.options.values()))
            self.assertIn(q.correct_answer, ["A", "B", "C", "D"])
            self.assertIsNotNone(q.explanation)
            self.assertNotIn("View Answer", q.question)
            for opt_text in q.options.values():
                self.assertNotIn("View Answer", opt_text)

        # Verify all other real HTML fixtures also extract all 10 questions and 4 options each
        for fixture_name in ("avro_1.html", "yarn_2.html"):
            p = parse_page((FIXTURES / fixture_name).read_bytes(), "https://www.sanfoundry.com/x/")
            self.assertEqual(len(p.questions), 10, fixture_name)
            for q in p.questions:
                self.assertEqual(list(q.options.keys()), ["A", "B", "C", "D"])
                self.assertIn(q.correct_answer, ["A", "B", "C", "D"])

    def test_browser_saved_dom_variant(self):
        """Verify parsing when 'Save Page As' places div.collapseomatic_content as a sibling of <p>."""
        soup = BeautifulSoup((FIXTURES / "mapreduce_dev_2.html").read_bytes(), "html.parser")
        for div in soup.select("div.collapseomatic_content"):
            p_tag = div.find_parent("p")
            div.extract()
            p_tag.insert_after(div)
        parsed = parse_page(str(soup), "https://www.sanfoundry.com/x/")
        self.assertEqual(len(parsed.questions), 10)
        self.assertEqual(parsed.questions[1].correct_answer, "D")
        self.assertIsNotNone(parsed.questions[1].explanation)

    # 4. Missing answers and explanations are handled correctly (null, not invented)
    def test_missing_and_invalid_answers_handled_as_none(self):
        html = """
        <article>
          <h1 class="entry-title">Python Questions and Answers – Basics</h1>
          <div class="entry-content">
            <p>1. Which of the following is mutable?<br/>
            a) tuple<br/>
            b) str<br/>
            c) list<br/>
            d) int</p>
            <p>2. Question with unparseable answer key?<br/>
            a) yes<br/>
            b) no<br/>
            <span class="collapseomatic">View Answer</span>
            <div class="collapseomatic_content">Answer: unknown</div></p>
            <p>3. Question with answer but no explanation?<br/>
            a) alpha<br/>
            b) beta<br/>
            <span class="collapseomatic">View Answer</span>
            <div class="collapseomatic_content">Answer: b</div></p>
          </div>
        </article>
        """
        parsed = parse_page(html, "https://www.sanfoundry.com/python-questions-answers-basics/")
        self.assertEqual(len(parsed.questions), 3)

        # Q1: no answer block at all
        self.assertEqual(parsed.questions[0].options, {"A": "tuple", "B": "str", "C": "list", "D": "int"})
        self.assertIsNone(parsed.questions[0].correct_answer)
        self.assertIsNone(parsed.questions[0].explanation)

        # Q2: invalid answer key 'unknown' -> None (not invented)
        self.assertIsNone(parsed.questions[1].correct_answer)
        self.assertIsNone(parsed.questions[1].explanation)

        # Q3: answer 'B', no explanation -> explanation is None
        self.assertEqual(parsed.questions[2].correct_answer, "B")
        self.assertIsNone(parsed.questions[2].explanation)

    # 5. Pagination works without infinite loops (including hub pages and circular next links)
    def test_pagination_and_cycle_prevention(self):
        url1 = "https://www.sanfoundry.com/python-questions-answers-1/"
        url2 = "https://www.sanfoundry.com/python-questions-answers-2/"
        # Page 1 links to Page 2, and Page 2 links back to Page 1 (cycle)
        page1_html = f"""
        <h1 class="entry-title">Python Questions and Answers – Variables – 1</h1>
        <div class="entry-content">
          <p>1. First question?<br/>a) Opt 1<br/>b) Opt 2<br/>c) Opt 3<br/>d) Opt 4<br/>
          <div class="collapseomatic_content">Answer: a<br/>Explanation: Exp 1</div></p>
        </div>
        <div class="sf-nav-next-bottom"><a rel="next" href="{url2}">Next</a></div>
        """.encode("utf-8")

        page2_html = f"""
        <h1 class="entry-title">Python Questions and Answers – Variables – 2</h1>
        <div class="entry-content">
          <p>1. Second question?<br/>a) Opt A<br/>b) Opt B<br/>c) Opt C<br/>d) Opt D<br/>
          <div class="collapseomatic_content">Answer: c<br/>Explanation: Exp 2</div></p>
        </div>
        <div class="sf-nav-next-bottom"><a rel="next" href="{url1}">Next</a></div>
        """.encode("utf-8")

        fake = FakeFetcher({url1: page1_html, url2: page2_html})
        res = scrape(url1, fetcher=fake, max_pages=10)
        self.assertEqual(res.pages_processed, 2)
        self.assertEqual(fake.calls, [url1, url2])
        self.assertEqual(len(res.questions), 2)
        self.assertEqual([q["id"] for q in res.questions], [1, 2])
        self.assertEqual(res.questions[0]["correct_answer"], "A")
        self.assertEqual(res.questions[1]["correct_answer"], "C")

    def test_hub_page_discovers_topic_pages(self):
        hub_url = "https://www.sanfoundry.com/1000-hadoop-questions-answers/"
        topic_url = "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-ecosystem/"
        hub_bytes = (FIXTURES / "hadoop_hub.html").read_bytes()
        topic_bytes = (FIXTURES / "avro_1.html").read_bytes()

        parsed_hub = parse_page(hub_bytes, hub_url)
        self.assertEqual(parsed_hub.questions, [])
        self.assertIn(topic_url, parsed_hub.topic_links)

        fake = FakeFetcher({hub_url: hub_bytes, topic_url: topic_bytes})
        res = scrape(hub_url, fetcher=fake, max_pages=2)
        self.assertEqual(res.subject, "Hadoop")
        self.assertEqual(res.pages_processed, 2)
        self.assertEqual(len(res.questions), 10)

    # 6. Duplicate questions are not repeated
    def test_duplicate_questions_not_repeated(self):
        url1 = "https://www.sanfoundry.com/python-mcqs-1/"
        url2 = "https://www.sanfoundry.com/python-mcqs-2/"

        # Page 1 has Q1 without an explanation and Q2
        p1 = f"""
        <h1 class="entry-title">Python Questions and Answers – Data Types</h1>
        <div class="entry-content">
          <p>1. Which of the following is a Python data type?<br/>
          a) int<br/>b) float<br/>c) list<br/>d) All of the above<br/>
          <div class="collapseomatic_content">Answer: d</div></p>
          <p>2. Unique question on page 1?<br/>
          a) True<br/>b) False</p>
        </div>
        <a rel="next" href="{url2}">Next</a>
        """.encode("utf-8")

        # Page 2 repeats Q1 (with minor punctuation/case difference and an explanation) + has a new Q3
        p2 = """
        <h1 class="entry-title">Python Questions and Answers – Data Types – 2</h1>
        <div class="entry-content">
          <p>1. which of the following is a python data type<br/>
          a) int<br/>b) float<br/>c) list<br/>d) All of the above<br/>
          <div class="collapseomatic_content">Answer: d<br/>Explanation: All of these are standard built-in types.</div></p>
          <p>2. Unique question on page 2?<br/>
          a) One<br/>b) Two</p>
        </div>
        """.encode("utf-8")

        fake = FakeFetcher({url1: p1, url2: p2})
        res = scrape(url1, fetcher=fake)
        self.assertEqual(len(res.questions), 3)
        self.assertEqual(res.duplicates_skipped, 1)
        self.assertEqual([q["id"] for q in res.questions], [1, 2, 3])
        # Explanation gap from page 1 was filled by the duplicate on page 2 without duplicating the entry
        self.assertEqual(
            res.questions[0]["explanation"],
            "All of these are standard built-in types.",
        )

    # 7. JSON output is valid and matches the expected schema
    def test_json_output_structure_and_cli(self):
        with tempfile.TemporaryDirectory() as tmp:
            out_file = Path(tmp) / "output.json"
            proc = subprocess.run(
                [
                    sys.executable,
                    str(ROOT / "scraper.py"),
                    str(FIXTURES / "mapreduce_dev_2.html"),
                    "-o",
                    str(out_file),
                ],
                cwd=str(ROOT),
                capture_output=True,
                text=True,
                timeout=30,
            )
            self.assertEqual(proc.returncode, 0, proc.stderr)
            self.assertTrue(out_file.is_file())

            data = json.loads(out_file.read_text(encoding="utf-8"))
            self.assertEqual(
                set(data.keys()),
                {"subject", "source", "total_questions", "questions"},
            )
            self.assertEqual(data["subject"], "Hadoop")
            self.assertEqual(data["source"], "Sanfoundry")
            self.assertEqual(data["total_questions"], 10)
            self.assertEqual(len(data["questions"]), 10)

            first = data["questions"][0]
            self.assertEqual(
                set(first.keys()),
                {
                    "id",
                    "topic",
                    "question",
                    "options",
                    "correct_answer",
                    "explanation",
                    "source_url",
                },
            )
            self.assertEqual(first["id"], 1)
            self.assertEqual(first["topic"], "Mapreduce Development")
            self.assertEqual(first["options"], {"A": "map", "B": "reduce", "C": "mapper", "D": "reducer"})
            self.assertEqual(first["correct_answer"], "A")

    # 8. Failed requests and Cloudflare challenges are handled gracefully
    def test_failed_requests_and_cloudflare_challenge_handling(self):
        # Test 404 reporting in Fetcher
        mock_session = MagicMock()
        robots_resp = MagicMock(status_code=200, text="", content=b"", headers={})
        not_found_resp = MagicMock(
            status_code=404,
            reason="Not Found",
            text="Not Found",
            content=b"Not Found",
            headers={},
        )
        mock_session.get.side_effect = [robots_resp, not_found_resp]

        fetcher = Fetcher(delay=0, max_retries=1, session=mock_session)
        with self.assertRaises(FetchError) as ctx:
            fetcher.get("https://www.sanfoundry.com/missing-page/")
        self.assertIn("HTTP 404", str(ctx.exception))

        # Test Cloudflare challenge detection in Fetcher
        cf_resp = MagicMock(
            status_code=403,
            reason="Forbidden",
            text="<html><head><title>Just a moment...</title></head></html>",
            content=b"<html><head><title>Just a moment...</title></head></html>",
            headers={"cf-mitigated": "challenge"},
        )
        mock_session.get.side_effect = [cf_resp]
        with self.assertRaises(BlockedError) as cf_ctx:
            fetcher.get("https://www.sanfoundry.com/1000-python-questions-answers/")
        self.assertIn("HTTP 403", str(cf_ctx.exception))

        # Test scrape() continues past a failed page when other pages succeed
        good_url = "https://www.sanfoundry.com/avro-1/"
        bad_url = "https://www.sanfoundry.com/missing/"
        fake = FakeFetcher(
            {
                bad_url: FetchError("Failed to fetch https://www.sanfoundry.com/missing/: HTTP 404 (Not Found)"),
                good_url: (FIXTURES / "avro_1.html").read_bytes(),
            }
        )
        res = scrape([bad_url, good_url], fetcher=fake, follow_pagination=False)
        self.assertEqual(len(res.errors), 1)
        self.assertIn("HTTP 404", res.errors[0])
        self.assertEqual(len(res.questions), 10)

        # Test scrape() stops immediately and gracefully on BlockedError
        blocked_fake = FakeFetcher(
            {
                bad_url: BlockedError("HTTP 403: Anti-bot challenge (Cloudflare) detected."),
                good_url: (FIXTURES / "avro_1.html").read_bytes(),
            }
        )
        blocked_res = scrape([bad_url, good_url], fetcher=blocked_fake)
        self.assertTrue(blocked_res.blocked)
        self.assertEqual(blocked_res.pages_processed, 0)
        self.assertEqual(blocked_fake.calls, [bad_url])

    def test_helpers(self):
        self.assertEqual(
            clean_topic("Hadoop Questions and Answers – Mapreduce Development – 2"),
            "Mapreduce Development",
        )
        self.assertEqual(
            infer_subject("1000 Python MCQs (Multiple Choice Questions)", None),
            "Python",
        )
        self.assertEqual(
            infer_subject(None, "https://www.sanfoundry.com/1000-python-questions-answers/"),
            "Python",
        )
        self.assertEqual(normalize_answer("d", ["A", "B", "C", "D"]), "D")
        self.assertEqual(normalize_answer("a and c", ["A", "B", "C", "D"]), "A,C")
        self.assertIsNone(normalize_answer("e", ["A", "B", "C", "D"]))


if __name__ == "__main__":
    unittest.main()

