"""Vercel Serverless Function handler for PracticeHub (serves UI assets + `/api/progress` and `/api/status`)."""
from __future__ import annotations

import http.server
import json
import sys
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from db import Storage

STORAGE = Storage()

STATIC_FILES: dict[str, tuple[str, str]] = {
    "/": ("index.html", "text/html; charset=utf-8"),
    "/index.html": ("index.html", "text/html; charset=utf-8"),
    "/styles.css": ("styles.css", "text/css; charset=utf-8"),
    "/app.js": ("app.js", "application/javascript; charset=utf-8"),
    "/questions_data.js": ("questions_data.js", "application/javascript; charset=utf-8"),
    "/progress.json": ("progress.json", "application/json; charset=utf-8"),
}


class handler(http.server.BaseHTTPRequestHandler):
    def log_message(self, format: str, *args) -> None:
        pass

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def _resolve_path(self) -> str:
        parsed = urlparse(self.path)
        qs = parse_qs(parsed.query)
        if "__path" in qs and qs["__path"]:
            p = unquote(qs["__path"][0]).strip()
            if not p.startswith("/"):
                p = "/" + p
            return p

        for hdr in ("x-invoke-path", "x-matched-path"):
            val = self.headers.get(hdr)
            if val and not val.startswith("/api/index"):
                return val

        raw_path = parsed.path or "/"
        if raw_path in ("/api/index.py", "/api/index"):
            return "/"
        return raw_path

    def _send_json(self, data: dict, status: int = 200) -> None:
        raw = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def _send_static(self, filename: str, content_type: str) -> None:
        file_path = ROOT / filename
        if not file_path.is_file():
            self._send_json({"ok": False, "error": f"File not found: {filename}"}, status=404)
            return
        raw = file_path.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "public, max-age=60")
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self) -> None:
        clean_path = self._resolve_path()

        if clean_path.startswith("/api/status"):
            if not STORAGE.mongo_connected:
                STORAGE._connect()
            self._send_json(
                {
                    "mongo_connected": STORAGE.mongo_connected,
                    "db_name": STORAGE.db_name if STORAGE.mongo_connected else None,
                    "backend": "mongodb" if STORAGE.mongo_connected else "local_json",
                    "error": STORAGE.last_error,
                }
            )
            return

        if clean_path.startswith("/api/progress"):
            self._send_json(STORAGE.get_progress())
            return

        if clean_path in STATIC_FILES:
            fname, ctype = STATIC_FILES[clean_path]
            self._send_static(fname, ctype)
            return

        # Default fallback to index.html for root/SPA navigation
        self._send_static("index.html", "text/html; charset=utf-8")

    def do_POST(self) -> None:
        clean_path = self._resolve_path()
        if clean_path.startswith("/api/progress") or clean_path == "/":
            length = int(self.headers.get("Content-Length", "0"))
            body = self.rfile.read(length) if length > 0 else b"{}"
            try:
                payload = json.loads(body.decode("utf-8"))
            except json.JSONDecodeError:
                self._send_json({"ok": False, "error": "Invalid JSON"}, status=400)
                return
            res = STORAGE.save_progress(payload)
            self._send_json(res)
            return
        self._send_json({"ok": False, "error": "Not found"}, status=404)
