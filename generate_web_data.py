"""Build `questions_data.js` for the multi-subject practice web application.

1. Builds the full "DBMS — SQL & PL/SQL" subject (632 questions) with faculty Keep/Selective/Remove
   classifications and syllabus mappings from `Resource/`.
2. Automatically discovers any additional `*_questions.json` files in the workspace (e.g. `python_questions.json`,
   `os_questions.json`) and adds them as selectable subjects in the UI.
"""
from __future__ import annotations

import csv
import json
import re
import xml.etree.ElementTree as ET
import zipfile
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def map_to_syllabus_topic(sf_topic: str, syl_detail: str, qid: int) -> str:
    """Map each DBMS question to its consolidated Master Syllabus Topic from Syllabus_TOPICS.txt."""
    if qid in (618, 619, 622, 624, 626):
        return "2. SQL Fundamentals (DDL, DML, DCL)"
    if qid in (620, 621, 630):
        return "7. SQL Constructs & Functions"
    if qid == 623:
        return "Out of Scope"
    if qid == 625:
        return "5. SQL Joins"
    if qid == 627:
        return "10. Views"
    if qid in (628, 629):
        return "11. PL-SQL & Triggers"
    if qid in (631, 632):
        return "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)"

    if sf_topic == "SQL Database":
        return "1. DBMS Fundamentals"
    if sf_topic in (
        "SQL Select Statement",
        "SQL Syntax",
        "SQL Insert Into Statement",
        "SQL Insert Into Select",
        "SQL Update Statement",
        "SQL Delete Statement",
        "SQL Create Table",
        "SQL Alter Table",
        "SQL Drop Table",
        "SQL Drop DB",
    ):
        return "2. SQL Fundamentals (DDL, DML, DCL)"
    if sf_topic == "PL/SQL Transactions":
        return "3. Transactions (ACID, COMMIT, ROLLBACK)"
    if sf_topic in (
        "SQL Group By",
        "SQL Having Clause",
        "SQL Order By Clause",
        "SQL Like Operator",
        "SQL Wildcards",
        "SQL Count Function",
    ):
        return "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)"
    if sf_topic in (
        "SQL Joins",
        "SQL Inner Join",
        "SQL Left Join",
        "SQL Right Join",
        "SQL Full Join",
        "SQL Self Join",
    ):
        return "5. SQL Joins"
    if sf_topic in (
        "SQL Subqueries",
        "SQL Exists",
        "SQL Any & All",
        "SQL In Operator",
    ):
        return "6. SQL Subqueries"
    if sf_topic in (
        "SQL Aliases",
        "SQL And, Or, Not",
        "SQL Avg & Sum Functions",
        "SQL Between Operator",
        "SQL Dates",
        "SQL Min and Max Functions",
        "SQL Null Functions",
        "SQL Null Values",
        "SQL Operators",
        "SQL Select Distinct",
        "SQL Select Top Clause",
        "SQL Union",
        "SQL Where Clause",
    ):
        return "7. SQL Constructs & Functions"
    if sf_topic in (
        "SQL Constraints",
        "SQL Data Types",
        "SQL Default Constraint",
        "SQL Foreign Key",
        "SQL Not Null",
        "SQL Primary Key",
        "SQL Unique Constraint",
        "SQL Auto Increment",
    ):
        return "8. Database Design, Data Types & Constraints"
    if sf_topic == "SQL Views":
        return "10. Views"
    if sf_topic == "PL/SQL Conditions":
        return "12. Advanced SQL & CASE / Conditions"
    if sf_topic == "SQL Index":
        return "13. Optimization & Indexing"
    if sf_topic == "SQL Comments" or sf_topic.startswith("PL/SQL"):
        return "11. PL-SQL & Triggers"
    if sf_topic in ("SQL Hosting", "SQL Injection"):
        return "Out of Scope"
    return "2. SQL Fundamentals (DDL, DML, DCL)"


def load_excel_mapping(xlsx_path: Path) -> tuple[dict[int, dict], list[dict]]:
    ns = "{http://schemas.openxmlformats.org/spreadsheetml/2006/main}"
    question_meta: dict[int, dict] = {}
    topic_meta: list[dict] = []

    with zipfile.ZipFile(xlsx_path) as z:
        root2 = ET.fromstring(z.read("xl/worksheets/sheet2.xml"))
        rows2 = [["".join(c.itertext()) for c in r] for r in root2.iter(f"{ns}row")][1:]
        for r in rows2:
            if len(r) >= 6:
                rec_raw = r[2].strip()
                cat = "KEEP" if rec_raw == "KEEP" else ("SELECTIVE" if "SELECTIVE" in rec_raw else "REMOVE")
                topic_meta.append(
                    {
                        "topic": r[0].strip(),
                        "count": int(r[1]),
                        "category": cat,
                        "reason": r[3].strip(),
                        "faculty_alignment": r[4].strip(),
                    }
                )

        root3 = ET.fromstring(z.read("xl/worksheets/sheet3.xml"))
        rows3 = [["".join(c.itertext()) for c in r] for r in root3.iter(f"{ns}row")][1:]
        for r in rows3:
            if len(r) >= 5:
                qid = int(r[0])
                rec_raw = r[2].strip()
                cat = "KEEP" if rec_raw == "KEEP" else ("SELECTIVE" if "SELECTIVE" in rec_raw else "REMOVE")
                question_meta[qid] = {
                    "sanfoundry_topic": r[1].strip(),
                    "category": cat,
                    "reason": r[3].strip(),
                    "faculty_alignment": r[4].strip(),
                }

    return question_meta, topic_meta


def build_dbms_subject() -> dict:
    raw_questions = json.loads((ROOT / "sql_questions.json").read_text(encoding="utf-8"))["questions"]
    csv_rows = {
        int(r["Question ID"]): r
        for r in csv.DictReader(
            (ROOT / "Resource" / "DBMS_Sanfoundry_632_Question_Syllabus_Mapping.csv").open(encoding="utf-8-sig")
        )
    }
    excel_q_meta, topic_meta = load_excel_mapping(
        ROOT / "Resource" / "DBMS_Sanfoundry_Faculty_Aligned_Mapping.xlsx"
    )
    syllabus_markdown = (ROOT / "Resource" / "Syllabus_TOPICS.txt").read_text(encoding="utf-8")

    enriched_questions = []
    for q in raw_questions:
        qid = int(q["id"])
        ex = excel_q_meta[qid]
        cr = csv_rows[qid]
        sf_topic = ex["sanfoundry_topic"]
        syl_detail = cr["Syllabus Mapping"].strip()
        syl_topic = map_to_syllabus_topic(sf_topic, syl_detail, qid)

        warning = None
        if sf_topic == "SQL Comments":
            warning = (
                "SQL Comments contains stored-procedure questions — do not discard blindly."
            )
        elif sf_topic in ("PL/SQL Procedure", "PL/SQL Function", "PL/SQL Triggers"):
            warning = (
                "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers."
            )

        enriched_questions.append(
            {
                "id": qid,
                "topic": sf_topic,
                "category": ex["category"],
                "syllabus_topic": syl_topic,
                "syllabus_detail": syl_detail,
                "reason": ex["reason"],
                "faculty_alignment": ex["faculty_alignment"],
                "warning": warning,
                "question": q["question"],
                "options": q["options"],
                "correct_answer": q["correct_answer"],
                "explanation": q["explanation"],
                "source_url": q["source_url"],
            }
        )

    return {
        "id": "dbms-sql",
        "name": "DBMS — SQL & PL/SQL",
        "has_priority_categories": True,
        "has_syllabus_mapping": True,
        "total_questions": len(enriched_questions),
        "counts": {
            "KEEP": sum(1 for q in enriched_questions if q["category"] == "KEEP"),
            "SELECTIVE": sum(1 for q in enriched_questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in enriched_questions if q["category"] == "REMOVE"),
        },
        "topics": topic_meta,
        "syllabus_markdown": syllabus_markdown,
        "questions": enriched_questions,
    }


def build_generic_subject(json_path: Path) -> dict | None:
    """Convert any scraper output `*_questions.json` file into a subject entry."""
    try:
        data = json.loads(json_path.read_text(encoding="utf-8"))
    except Exception:
        return None
    if not isinstance(data, dict) or "questions" not in data or not isinstance(data["questions"], list):
        return None

    subj_name = str(data.get("subject") or json_path.stem.replace("_questions", "").title()).strip()
    subj_id = re.sub(r"[^a-z0-9]+", "-", subj_name.lower()).strip("-") or json_path.stem

    questions = []
    topic_counts: Counter[str] = Counter()
    for idx, q in enumerate(data["questions"], start=1):
        topic = str(q.get("topic") or "General").strip()
        cat = str(q.get("category") or "KEEP").upper()
        if cat not in ("KEEP", "SELECTIVE", "REMOVE"):
            cat = "KEEP"
        syl = str(q.get("syllabus_topic") or topic).strip()
        topic_counts[topic] += 1
        questions.append(
            {
                "id": int(q.get("id") or idx),
                "topic": topic,
                "category": cat,
                "syllabus_topic": syl,
                "syllabus_detail": str(q.get("syllabus_detail") or topic),
                "reason": q.get("reason") or "",
                "faculty_alignment": q.get("faculty_alignment") or "",
                "warning": q.get("warning"),
                "question": q.get("question") or "",
                "options": q.get("options") or {},
                "correct_answer": q.get("correct_answer"),
                "explanation": q.get("explanation"),
                "source_url": q.get("source_url") or "",
            }
        )

    topics = [
        {"topic": t, "count": c, "category": "KEEP", "reason": "", "faculty_alignment": ""}
        for t, c in sorted(topic_counts.items())
    ]

    return {
        "id": subj_id,
        "name": subj_name,
        "has_priority_categories": any(q["category"] != "KEEP" for q in questions),
        "has_syllabus_mapping": any(q["syllabus_topic"] != q["topic"] for q in questions),
        "total_questions": len(questions),
        "counts": {
            "KEEP": sum(1 for q in questions if q["category"] == "KEEP"),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "topics": topics,
        "syllabus_markdown": data.get("syllabus_markdown") or "",
        "questions": questions,
    }


def main() -> None:
    subjects = [build_dbms_subject()]
    seen_ids = {"dbms-sql"}

    # Auto-discover any other `*_questions.json` files in the root or `subjects/` directory
    search_paths = list( sorted(ROOT.glob("*_questions.json")))
    subjects_dir = ROOT / "subjects"
    if subjects_dir.is_dir():
        search_paths.extend(sorted(subjects_dir.glob("*.json")))

    for path in search_paths:
        if path.name == "sql_questions.json":
            continue
        subj = build_generic_subject(path)
        if subj and subj["id"] not in seen_ids and subj["questions"]:
            seen_ids.add(subj["id"])
            subjects.append(subj)

    bank = {"subjects": subjects}
    js_content = "window.PRACTICE_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";\n"
    (ROOT / "questions_data.js").write_text(js_content, encoding="utf-8")
    print(f"Generated questions_data.js with {len(subjects)} subject(s):")
    for s in subjects:
        print(
            f"  - [{s['id']}] {s['name']}: {s['total_questions']} questions "
            f"(KEEP={s['counts']['KEEP']}, SELECTIVE={s['counts']['SELECTIVE']}, REMOVE={s['counts']['REMOVE']})"
        )

    try:
        from db import Storage

        storage = Storage()
        if storage.sync_bank_to_mongo(bank):
            print(f"Synced all subjects and questions to MongoDB ({storage.safe_uri} | db: {storage.db_name}).")
        else:
            print("MongoDB not reachable; saved to questions_data.js only.")
    except Exception as exc:
        print(f"Note: Could not sync to MongoDB ({exc}); questions_data.js is up to date.")


if __name__ == "__main__":
    main()
