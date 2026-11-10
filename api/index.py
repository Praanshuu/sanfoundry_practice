"""Vercel Serverless Function handler for `/api/progress` and `/api/status`."""
from __future__ import annotations

import http.server
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from db import Storage

STORAGE = Storage()


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

    def _send_json(self, data: dict, status: int = 200) -> None:
        raw = json.dumps(data, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self) -> None:
        if "/api/status" in self.path:
            self._send_json(
                {
                    "mongo_connected": STORAGE.mongo_connected,
                    "db_name": STORAGE.db_name if STORAGE.mongo_connected else None,
                    "backend": "mongodb" if STORAGE.mongo_connected else "local_storage",
                }
            )
            return
        self._send_json(STORAGE.get_progress())

    def do_POST(self) -> None:
        length = int(self.headers.get("Content-Length", "0"))
        body = self.rfile.read(length) if length > 0 else b"{}"
        try:
            payload = json.loads(body.decode("utf-8"))
        except json.JSONDecodeError:
            self._send_json({"ok": False, "error": "Invalid JSON"}, status=400)
            return
        res = STORAGE.save_progress(payload)
        self._send_json(res)

