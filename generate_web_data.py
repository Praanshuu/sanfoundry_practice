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


HADOOP_SYLLABUS_MD = """# Big Data Technologies — PGCP-BDA (ACTS, Pune)
**Duration:** 180 Hours (66 Theory + 84 Lab + 30 Self Learning)  
**Evaluation:** Theory Exam – 40%, Lab Exam – 40%, Internal Assessment – 20%  
**Reference Books:**
1. *Hadoop: The Definitive Guide*, 4th Edition, Tom White / O'Reilly
2. *Spark: The Definitive Guide*, Bill Chambers, Matei Zaharia / O'Reilly

---

## Sessions 1 & 2: Big Data Overview (4T + 2SL)
- Big Data - Beyond the Hype, Skills & Sources of Big Data, Big Data Adoption
- Data Repositories, Data Sharing & Reuse Practices, Repository Data Curation

## Session 3: Introduction to Hadoop (2T + 2L)
- A Brief History & Evolution of Hadoop
- Introduction to Hadoop and its components (HDFS, YARN, MapReduce, Hive, HBase, Spark, Kafka)
- Comparison with Other Systems, Hadoop Releases, Distributions and Vendors

## Sessions 4, 5 & 8: Hadoop Distributed File System — HDFS (6T + 6L)
- Core components of HDFS, HDFS Daemons (NameNode, Secondary NameNode, DataNode)
- HDFS Architecture, Scaling & Rebalancing, Replication, Rack Awareness, Data Pipelining
- Node Failure Management & HDFS High Availability (NameNode)
- HDFS Data Storage Process, Anatomy of Reading & Writing Files in HDFS, Handling Read/Write Failures
- HDFS User & Admin Commands, Web Interface, Java Interfaces to HDFS & HDFS Java API Overview

## Sessions 6 & 7: Hadoop Cluster, Configuration, Security & Architecture (4T + 6L + 2SL)
- Hadoop Operation Modes, Setting up Single & Multi-Node Clusters
- Hadoop Configuration, Security in Hadoop, Administering Hadoop
- HDFS Monitoring & Maintenance, Hadoop Benchmarks, Hadoop in the Cloud
- Common Hadoop Shell Commands, Analyzing Data with Hadoop

## Session 9: MapReduce (2T + 2L + 2SL)
- Hadoop MapReduce Paradigm, Map and Reduce Tasks
- Shuffle and Sort, Task Execution (Conceptual Overview), MapReduce Features

## Session 10: HBase (2T + 2L)
- Overview of HBase, HBase Architecture, Comparison with Traditional RDBMS

## Sessions 11, 12, 13 & 14: Apache Hive & HiveQL (8T + 10L + 6SL)
- Introduction to Hive, Hive Architecture & Metastore, Comparison with Traditional Databases
- HiveQL Datatypes, Operators, Functions, Managed & External Tables, Partitions & Bucketing
- Sorting, Indexing, Storage Formats, Altering & Dropping Tables
- Querying with HiveQL: Sorting, Aggregating, MapReduce Scripts, Joins (Inner, Outer, Map-side, Reduce-side), Subqueries, Views
- Data Manipulation with Hive, UDFs, Appending Data, Writing HQL Scripts

## Sessions 15, 16, 17 & 18: Data Warehousing, Data Lakes & Apache Airflow (8T + 10L + 2SL)
- Data Warehousing & Data Lakes for ETL Pipelines, ETL vs ELT
- Fundamentals of Apache Airflow (DAGs, Operators, Scheduler, Sensors, Hooks, Connections)
- Automating Data Pipelines with Airflow / Informatica, Running Airflow on Cloud

## Sessions 19, 20, 21, 22, 23 & 24: Apache Spark & PySpark EDA (12T + 16L + 2SL)
- Apache Spark APIs, Initializing Spark, RDDs vs DataFrames vs Datasets
- DataFrame Operations, Structured Spark Streaming, Key-Value Pairs & Shuffle Operations
- Job Optimization: Partitioning, Caching/Persistence, Broadcast Variables, Shared Variables
- MapReduce with Spark, Spark with/without Hadoop, PySpark Data Preprocessing & EDA

## Sessions 25, 26, 27 & 28: Apache Kafka & Spark Streaming (8T + 12L + 4SL)
- Introduction to Kafka, Kafka Producer & Consumer, Kafka Connect API
- Working with Kafka using Spark, Spark Streaming Architecture & APIs, Managed Cloud Kafka

## Sessions 29, 30, 31 & 32: Spark SQL, Spark MLlib & Cloud Deployment (8T + 14L + 8SL)
- Spark SQL & Window Functions
- Spark MLlib & Predictive Analysis
- Deploying Spark on the Cloud (Databricks, AWS EMR), Cluster Autoscaling & Cost Considerations
"""


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
    is_hadoop = "hadoop" in subj_id or "big-data" in subj_id

    url_syllabus_map: dict[str, dict[str, str]] = {}
    topic_name_map: dict[str, dict[str, str]] = {}
    if is_hadoop:
        subj_id = "hadoop"
        subj_name = "Big Data — Hadoop, Hive, HBase, Spark & Kafka"
        try:
            from open_hadoop_pages import TOPIC_SYLLABUS_MAP

            url_syllabus_map = TOPIC_SYLLABUS_MAP
            for u, m in TOPIC_SYLLABUS_MAP.items():
                topic_name_map[m["topic"].lower()] = m
        except Exception:
            pass

    questions = []
    topic_counts: Counter[str] = Counter()
    topic_info: dict[str, dict[str, str]] = {}

    for idx, q in enumerate(data["questions"], start=1):
        src_url = str(q.get("source_url") or "").strip()
        norm_url = (src_url.rstrip("/") + "/") if src_url.startswith("http") else ""
        raw_topic = str(q.get("topic") or "General").strip()

        mapped = url_syllabus_map.get(norm_url) or topic_name_map.get(raw_topic.lower()) or {}

        topic = mapped.get("topic") or raw_topic
        cat = str(q.get("category") or mapped.get("category") or "KEEP").upper()
        if cat not in ("KEEP", "SELECTIVE", "REMOVE"):
            cat = "KEEP"
        syl = str(q.get("syllabus_topic") or mapped.get("syllabus_topic") or topic).strip()
        reason = str(q.get("reason") or mapped.get("reason") or "")

        topic_counts[topic] += 1
        topic_info[topic] = {"category": cat, "reason": reason, "syllabus_topic": syl}

        questions.append(
            {
                "id": int(q.get("id") or idx),
                "topic": topic,
                "category": cat,
                "syllabus_topic": syl,
                "syllabus_detail": str(q.get("syllabus_detail") or syl),
                "reason": reason,
                "faculty_alignment": q.get("faculty_alignment") or syl,
                "warning": q.get("warning"),
                "question": q.get("question") or "",
                "options": q.get("options") or {},
                "correct_answer": q.get("correct_answer"),
                "explanation": q.get("explanation"),
                "source_url": src_url,
            }
        )

    topics = [
        {
            "topic": t,
            "count": c,
            "category": topic_info.get(t, {}).get("category", "KEEP"),
            "reason": topic_info.get(t, {}).get("reason", ""),
            "faculty_alignment": topic_info.get(t, {}).get("syllabus_topic", ""),
        }
        for t, c in sorted(topic_counts.items())
    ]

    return {
        "id": subj_id,
        "name": subj_name,
        "has_priority_categories": is_hadoop or any(q["category"] != "KEEP" for q in questions),
        "has_syllabus_mapping": is_hadoop or any(q["syllabus_topic"] != q["topic"] for q in questions),
        "total_questions": len(questions),
        "counts": {
            "KEEP": sum(1 for q in questions if q["category"] == "KEEP"),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "topics": topics,
        "syllabus_markdown": data.get("syllabus_markdown") or (HADOOP_SYLLABUS_MD if is_hadoop else ""),
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
