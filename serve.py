"""Local server for PracticeHub backed by MongoDB (with automatic fallback to local JSON).

Supports CORS so that even if you open `index.html` via `file://` or `127.0.0.1` or `localhost`,
all your progress and bookmark notes automatically sync to the same MongoDB database!

Usage:
    python serve.py
"""
from __future__ import annotations

import http.server
import json
import sys
import webbrowser
from pathlib import Path

from db import Storage

PORT = 8000
ROOT = Path(__file__).resolve().parent
STORAGE = Storage()


class PracticeRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format: str, *args) -> None:
        pass

    def end_headers(self) -> None:
        # Allow requests from file://, http://127.0.0.1:8000, and http://localhost:8000
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def _send_json(self, data: dict, status: int = 200) -> None:
        raw = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self) -> None:
        if self.path.startswith("/api/progress"):
            self._send_json(STORAGE.get_progress())
            return
        if self.path.startswith("/api/status"):
            self._send_json(
                {
                    "mongo_connected": STORAGE.mongo_connected,
                    "db_name": STORAGE.db_name if STORAGE.mongo_connected else None,
                    "backend": "mongodb" if STORAGE.mongo_connected else "local_json",
                }
            )
            return
        super().do_GET()

    def do_POST(self) -> None:
        if self.path.startswith("/api/progress"):
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


class NoReuseThreadingHTTPServer(http.server.ThreadingHTTPServer):
    allow_reuse_address = False


def main() -> None:
    no_browser = "--no-browser" in sys.argv
    backend_str = (
        f"MongoDB ({STORAGE.safe_uri}{STORAGE.db_name})"
        if STORAGE.mongo_connected
        else "Local JSON fallback (progress.json)"
    )

    try:
        httpd = NoReuseThreadingHTTPServer(("127.0.0.1", PORT), PracticeRequestHandler)
    except OSError:
        print(f"Server is already running on http://localhost:{PORT} (Storage: {backend_str})")
        if not no_browser:
            try:
                webbrowser.open(f"http://localhost:{PORT}")
            except Exception:
                pass
        return

    with httpd:
        url = f"http://localhost:{PORT}"
        print(f"PracticeHub running at {url} | Storage: {backend_str}")
        if not no_browser:
            try:
                webbrowser.open(url)
            except Exception:
                pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")


if __name__ == "__main__":
    main()
