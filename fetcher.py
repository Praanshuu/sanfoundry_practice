"""HTTP client for fetching Sanfoundry pages politely.

Uses standard HTTP requests with an honest User-Agent, respects robots.txt, spaces out requests,
and reports actual HTTP errors. If Cloudflare or another anti-bot challenge is encountered, it raises
BlockedError immediately so the scraper stops gracefully without attempting to bypass protections.
"""
from __future__ import annotations

import random
import time
import urllib.robotparser
from urllib.parse import urlparse

import requests

ALLOWED_HOSTS = ("sanfoundry.com", "www.sanfoundry.com")
USER_AGENT = "Mozilla/5.0 (compatible; SanfoundryQuestionScraper/1.0; +https://www.sanfoundry.com)"

DEFAULT_DELAY_SECONDS = 2.0
DEFAULT_TIMEOUT_SECONDS = 25
DEFAULT_MAX_RETRIES = 3


class BlockedError(Exception):
    """Raised when the website serves a Cloudflare or anti-bot challenge."""


class FetchError(Exception):
    """Raised when a page cannot be accessed due to an HTTP or network error."""


def is_challenge_response(resp: requests.Response) -> bool:
    """Detect Cloudflare or similar anti-bot challenge responses."""
    if resp.headers.get("cf-mitigated", "").lower() == "challenge":
        return True
    head = resp.text[:6000].lower() if resp.content else ""
    markers = (
        "just a moment",
        "cf-chl",
        "challenge-platform",
        "enable javascript and cookies",
        "attention required! | cloudflare",
        "verify you are human",
    )
    return any(marker in head for marker in markers)


class Fetcher:
    def __init__(
        self,
        delay: float = DEFAULT_DELAY_SECONDS,
        timeout: int = DEFAULT_TIMEOUT_SECONDS,
        max_retries: int = DEFAULT_MAX_RETRIES,
        session: requests.Session | None = None,
    ):
        self.session = session or requests.Session()
        self.session.headers.update(
            {
                "User-Agent": USER_AGENT,
                "Accept": "text/html,application/xhtml+xml",
                "Accept-Language": "en-US,en;q=0.9",
            }
        )
        self.delay = max(0.0, float(delay))
        self.timeout = timeout
        self.max_retries = max(1, int(max_retries))
        self._last_request = 0.0
        self._robots: dict[str, urllib.robotparser.RobotFileParser] = {}

    def _wait_turn(self) -> None:
        if self._last_request > 0 and self.delay > 0:
            wait = self._last_request + self.delay + random.uniform(0, 0.3) - time.time()
            if wait > 0:
                time.sleep(wait)
        self._last_request = time.time()

    def _check_robots(self, url: str) -> None:
        parsed = urlparse(url)
        origin = f"{parsed.scheme}://{parsed.netloc}"
        rp = self._robots.get(origin)
        if rp is None:
            rp = urllib.robotparser.RobotFileParser()
            try:
                r = self.session.get(f"{origin}/robots.txt", timeout=self.timeout)
                if r.status_code == 200 and not is_challenge_response(r):
                    rp.parse(r.text.splitlines())
                    crawl_delay = rp.crawl_delay(USER_AGENT) or rp.crawl_delay("*")
                    if crawl_delay:
                        self.delay = max(self.delay, float(crawl_delay))
                else:
                    rp.parse([])
            except requests.RequestException:
                rp.parse([])
            self._robots[origin] = rp

        if not rp.can_fetch(USER_AGENT, url):
            raise FetchError(f"Access disallowed by robots.txt for URL: {url}")

    def get(self, url: str) -> bytes:
        parsed = urlparse(url)
        if parsed.scheme not in ("http", "https"):
            raise FetchError(f"Unsupported URL scheme {parsed.scheme!r} for URL: {url}")
        if parsed.netloc.lower() not in ALLOWED_HOSTS:
            raise FetchError(f"Refusing to fetch non-Sanfoundry host: {parsed.netloc}")

        self._check_robots(url)

        last_err = "Unknown error"
        for attempt in range(1, self.max_retries + 1):
            self._wait_turn()
            try:
                resp = self.session.get(url, timeout=self.timeout)
            except requests.RequestException as exc:
                last_err = f"{exc.__class__.__name__}: {exc}"
                if attempt < self.max_retries:
                    time.sleep(min(2 ** attempt, 10) if self.delay > 0 else 0)
                continue

            if is_challenge_response(resp):
                raise BlockedError(
                    f"HTTP {resp.status_code}: Anti-bot challenge (Cloudflare) detected at {url}. "
                    "Stopping gracefully without attempting to bypass access protections."
                )

            if resp.status_code == 200:
                return resp.content

            reason = resp.reason or "Error"
            last_err = f"HTTP {resp.status_code} ({reason})"

            if resp.status_code == 429 and attempt < self.max_retries:
                retry_after = resp.headers.get("Retry-After", "")
                wait = float(retry_after) if retry_after.isdigit() else (5 * attempt if self.delay > 0 else 0)
                if wait > 0:
                    time.sleep(wait)
                continue

            if resp.status_code >= 500 and attempt < self.max_retries:
                if self.delay > 0:
                    time.sleep(min(2 ** attempt, 10))
                continue

            raise FetchError(f"Failed to fetch {url}: {last_err}")

        raise FetchError(f"Failed to fetch {url} after {self.max_retries} attempts: {last_err}")

