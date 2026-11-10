"""MongoDB storage layer (with automatic fallback to local `progress.json`).

Database: `sanfoundry_practice` (configurable via `MONGO_URI` / `MONGO_DB` env vars)
Collections:
  - `subjects`: Subject metadata, topic lists, counts, and syllabus markdown
  - `questions`: Individual question documents with options, answers, explanations, and live attempt/bookmark/note fields
  - `progress`: Consolidated user progress state (`attempts`, `marked`, `notes`, `theme`) per subject
"""
from __future__ import annotations

import json
import os
import re
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import quote_plus, unquote

ROOT = Path(__file__).resolve().parent
LOCAL_PROGRESS_FILE = ROOT / "progress.json"
ENV_FILE = ROOT / ".env"


def _load_dotenv() -> None:
    """Load key=value pairs from local `.env` if present without overriding existing env vars."""
    if not ENV_FILE.exists():
        return
    try:
        for raw_line in ENV_FILE.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, val = line.split("=", 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = val
    except Exception:
        pass


def _normalize_mongo_uri(uri: str) -> str:
    """Ensure passwords containing raw `@` or special characters are RFC-3986 percent-encoded."""
    if not uri or "://" not in uri:
        return uri
    scheme, rest = uri.split("://", 1)
    if "@" not in rest:
        return uri
    # Split on the LAST `@` because the hostname never contains `@`, whereas a raw password might
    userinfo, hostpart = rest.rsplit("@", 1)
    if ":" not in userinfo:
        return uri
    user, raw_pass = userinfo.split(":", 1)
    safe_user = quote_plus(unquote(user))
    safe_pass = quote_plus(unquote(raw_pass))
    return f"{scheme}://{safe_user}:{safe_pass}@{hostpart}"


def _mask_uri(uri: str) -> str:
    """Mask credentials in a MongoDB URI so passwords are never printed in logs."""
    return re.sub(r"(mongodb(?:\+srv)?://)([^@/]+)@", r"\1***@", uri or "")


_load_dotenv()
MONGO_URI = _normalize_mongo_uri(os.environ.get("MONGO_URI", "mongodb://127.0.0.1:27017/"))
MONGO_DB_NAME = os.environ.get("MONGO_DB", "sanfoundry_practice")


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _merge_subject_progress(existing: dict[str, Any], incoming: dict[str, Any]) -> dict[str, Any]:
    """Merge two `bySubject` dictionaries so existing attempts, bookmarks, and notes are never lost by an empty load."""
    merged: dict[str, Any] = {}
    all_sids = set(existing.keys()) | set(incoming.keys())
    for sid in all_sids:
        ex = existing.get(sid) or {}
        inc = incoming.get(sid) or {}
        merged[sid] = {
            "attempts": {**(ex.get("attempts") or {}), **(inc.get("attempts") or {})},
            "marked": {**(ex.get("marked") or {}), **(inc.get("marked") or {})},
            "notes": {**(ex.get("notes") or {}), **(inc.get("notes") or {})},
        }
    return merged


class Storage:
    def __init__(self, uri: str = MONGO_URI, db_name: str = MONGO_DB_NAME):
        self.uri = _normalize_mongo_uri(uri)
        self.safe_uri = _mask_uri(self.uri)
        self.db_name = db_name
        self.client = None
        self.db = None
        self.mongo_connected = False
        self.last_error: str | None = None
        self._connect()

    def _connect(self) -> None:
        if os.environ.get("VERCEL") and not os.environ.get("MONGO_URI"):
            self.client = None
            self.db = None
            self.mongo_connected = False
            self.last_error = "MONGO_URI environment variable is not set in Vercel project settings"
            return
        try:
            import pymongo

            timeout_ms = 5000 if "+srv" in self.uri else 2000
            client = pymongo.MongoClient(self.uri, serverSelectionTimeoutMS=timeout_ms)
            client.admin.command("ping")
            self.client = client
            self.db = client[self.db_name]
            self.mongo_connected = True
            self.last_error = None
            self._ensure_indexes()
        except Exception as exc:
            self.last_error = _mask_uri(str(exc))
            print(f"[db] Primary MongoDB unavailable ({self.last_error}).")
            # If a cloud URI failed while running locally, try local MongoDB (127.0.0.1:27017) before JSON fallback
            local_uri = "mongodb://127.0.0.1:27017/"
            if not os.environ.get("VERCEL") and self.uri != local_uri:
                try:
                    import pymongo

                    client = pymongo.MongoClient(local_uri, serverSelectionTimeoutMS=1500)
                    client.admin.command("ping")
                    self.uri = local_uri
                    self.safe_uri = local_uri
                    self.client = client
                    self.db = client[self.db_name]
                    self.mongo_connected = True
                    self._ensure_indexes()
                    print(f"[db] Connected to local MongoDB fallback ({local_uri}).")
                    return
                except Exception:
                    pass
            print("[db] Using local JSON fallback (progress.json).")
            self.client = None
            self.db = None
            self.mongo_connected = False

    def _ensure_indexes(self) -> None:
        if not self.mongo_connected or self.db is None:
            return
        self.db.questions.create_index([("subject_id", 1), ("id", 1)], unique=True)
        self.db.questions.create_index([("subject_id", 1), ("category", 1)])
        self.db.questions.create_index([("subject_id", 1), ("topic", 1)])
        self.db.questions.create_index([("subject_id", 1), ("syllabus_topic", 1)])
        self.db.questions.create_index([("subject_id", 1), ("bookmarked", 1)])

    def sync_bank_to_mongo(self, bank: dict[str, Any]) -> bool:
        """Upsert all subjects and questions from `bank` into MongoDB."""
        if not self.mongo_connected:
            self._connect()
        if not self.mongo_connected or self.db is None:
            return False

        import pymongo

        progress = self.get_progress()
        by_subject = progress.get("bySubject", {})

        for subj in bank.get("subjects", []):
            sid = subj["id"]
            subj_doc = {k: v for k, v in subj.items() if k != "questions"}
            subj_doc["_id"] = sid
            subj_doc["updated_at"] = now_iso()
            self.db.subjects.replace_one({"_id": sid}, subj_doc, upsert=True)

            s_prog = by_subject.get(sid, {})
            attempts = s_prog.get("attempts", {})
            marked = s_prog.get("marked", {})
            notes = s_prog.get("notes", {})

            ops = []
            for q in subj.get("questions", []):
                qid = int(q["id"])
                qid_str = str(qid)
                doc_id = f"{sid}:{qid}"
                user_ans = attempts.get(qid_str)
                is_bookmarked = bool(marked.get(qid_str))
                user_note = notes.get(qid_str, "")
                q_doc = {
                    "_id": doc_id,
                    "subject_id": sid,
                    **q,
                    "user_answer": user_ans,
                    "is_attempted": user_ans is not None,
                    "is_correct": (user_ans == q.get("correct_answer")) if user_ans else None,
                    "bookmarked": is_bookmarked,
                    "user_note": user_note,
                }
                ops.append(pymongo.ReplaceOne({"_id": doc_id}, q_doc, upsert=True))
            if ops:
                self.db.questions.bulk_write(ops, ordered=False)

        return True

    def get_progress(self) -> dict[str, Any]:
        """Return merged user progress from MongoDB and local `progress.json` so nothing is ever lost."""
        mongo_data: dict[str, Any] = {}
        local_data: dict[str, Any] = {}

        if not self.mongo_connected:
            self._connect()

        if self.mongo_connected and self.db is not None:
            try:
                doc = self.db.progress.find_one({"_id": "default"})
                if doc:
                    mongo_data = {
                        "theme": doc.get("theme", "light"),
                        "bySubject": doc.get("bySubject", {}),
                    }
            except Exception:
                pass

        if LOCAL_PROGRESS_FILE.is_file():
            try:
                raw = json.loads(LOCAL_PROGRESS_FILE.read_text(encoding="utf-8"))
                if isinstance(raw, dict):
                    local_data = {
                        "theme": raw.get("theme", "light"),
                        "bySubject": raw.get("bySubject", {}),
                    }
            except Exception:
                pass

        merged_by_subject = _merge_subject_progress(
            local_data.get("bySubject", {}),
            mongo_data.get("bySubject", {}),
        )
        theme = mongo_data.get("theme") or local_data.get("theme") or "light"

        return {
            "theme": theme,
            "bySubject": merged_by_subject,
            "backend": "mongodb" if self.mongo_connected else "local_json",
        }

    def save_progress(self, payload: dict[str, Any]) -> dict[str, Any]:
        """Save progress to both MongoDB (if connected) and local `progress.json` backup.

        If `payload.get("replace")` is False (default), merges with existing stored progress so a
        fresh browser tab cannot accidentally wipe existing progress. When `replace` is True (used
        for explicit deletions like Retry or Reset), writes the exact `bySubject` dictionary sent.
        """
        if not self.mongo_connected:
            self._connect()

        replace_exact = bool(payload.get("replace", False))
        incoming_by_subj = payload.get("bySubject") or {}

        if replace_exact:
            final_by_subj = {}
            for sid, sdata in incoming_by_subj.items():
                final_by_subj[sid] = {
                    "attempts": sdata.get("attempts") or {},
                    "marked": sdata.get("marked") or {},
                    "notes": sdata.get("notes") or {},
                }
        else:
            current = self.get_progress()
            final_by_subj = _merge_subject_progress(current.get("bySubject", {}), incoming_by_subj)

        clean = {
            "theme": payload.get("theme", "light"),
            "bySubject": final_by_subj,
            "updated_at": now_iso(),
        }

        # 1. Always write local `progress.json` immediately
        try:
            LOCAL_PROGRESS_FILE.write_text(
                json.dumps(clean, indent=2, ensure_ascii=False) + "\n",
                encoding="utf-8",
            )
        except Exception as exc:
            print(f"[db] Warning: failed writing progress.json: {exc}")

        # 2. Save to MongoDB `progress` and sync `questions` collection fields
        if self.mongo_connected and self.db is not None:
            try:
                import pymongo

                self.db.progress.replace_one(
                    {"_id": "default"},
                    {"_id": "default", **clean},
                    upsert=True,
                )

                if replace_exact:
                    self.db.questions.update_many(
                        {},
                        {
                            "$set": {
                                "user_answer": None,
                                "is_attempted": False,
                                "is_correct": None,
                                "bookmarked": False,
                                "user_note": "",
                            }
                        },
                    )

                for sid, sdata in final_by_subj.items():
                    attempts = sdata.get("attempts") or {}
                    marked = sdata.get("marked") or {}
                    notes = sdata.get("notes") or {}

                    touched_ids = set(attempts.keys()) | set(marked.keys()) | set(notes.keys())
                    if not touched_ids:
                        continue

                    int_ids = [int(k) for k in touched_ids if str(k).isdigit()]
                    q_docs = list(
                        self.db.questions.find(
                            {"subject_id": sid, "id": {"$in": int_ids}},
                            {"_id": 1, "id": 1, "correct_answer": 1},
                        )
                    )
                    ops = []
                    for q_doc in q_docs:
                        qid_str = str(q_doc["id"])
                        u_ans = attempts.get(qid_str)
                        b_mark = bool(marked.get(qid_str))
                        u_note = str(notes.get(qid_str) or "")
                        ops.append(
                            pymongo.UpdateOne(
                                {"_id": q_doc["_id"]},
                                {
                                    "$set": {
                                        "user_answer": u_ans,
                                        "is_attempted": u_ans is not None,
                                        "is_correct": (u_ans == q_doc.get("correct_answer")) if u_ans else None,
                                        "bookmarked": b_mark,
                                        "user_note": u_note,
                                    }
                                },
                            )
                        )
                    if ops:
                        self.db.questions.bulk_write(ops, ordered=False)

                return {"ok": True, "backend": "mongodb", "bySubject": final_by_subj}
            except Exception as exc:
                print(f"[db] MongoDB write error: {exc}")
                return {"ok": True, "backend": "local_json", "warning": str(exc), "bySubject": final_by_subj}

        return {"ok": True, "backend": "local_json", "bySubject": final_by_subj}
