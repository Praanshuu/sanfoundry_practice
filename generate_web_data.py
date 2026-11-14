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
from typing import Any

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

JAVA_SYLLABUS_MD = """# Java Programming — PGCP-BDA (ACTS, Pune)
**Duration:** 90 Hours (34 Theory + 36 Lab + 20 Self Learning)  
**Evaluation:** Theory Exam – 40%, Lab Exam – 40%, Internal Assessment – 20%  
**Programming Standard:** Java 17 (LTS)  
**Text Book:** *Java for Dummies*, 7th Edition, Barry Burd / Wiley  
**Reference Books:**
1. *Java: The Complete Reference*, 9th Edition, Herbert Schildt / McGraw Hill
2. *Murach's Java Programming*, 4th Edition, Joel Murach
3. *Head First Java*, 3rd Edition, Kathy Sierra, Bert Bates, Trisha Gee / SPD

---

## Sessions 1 & 2: Getting Started with Java (4T + 2L + 2SL)
- Overview of Java, Features of Java, JVM Overview, JDK and its usage
- Working with Data Types: Structure of a Java Class, Importing Packages, Difference between object reference variables and primitive variables
- Operators and Control Statements (if, if-else, for, while, switch, do-while, break and continue, ternary constructs)
- **Lab:** Simple calculator application (+, -, *, /) using operators and control statements (if-else/switch), handling edge cases like division by zero

## Session 3: Introduction to OOP (2T + 2L + 2SL)
- Packages and classpath
- Arrays
- Object Oriented Programming Concepts
- Object's lifecycle (creation, reassignment, garbage collection: `new`, `finalize`)
- **Lab:** Real-world entity class (Employee/Student/Product) with 5–6 attributes, multiple instances, reference reassignment, garbage collection, and wrapper classes for numeric attributes

## Session 4: Pillars of OOP (2T + 4L + 2SL)
- Methods and Encapsulation: Methods, Access Modifiers, Method Overloading, Passing Data, Creating Constructors, Immutable Classes
- Class Inheritance, Abstract Classes, Inner Classes, Interface and Implementation classes
- Understanding Polymorphism: Object vs Reference, Object Casting, Virtual Methods, Method Overriding
- **Lab:** Inheritance hierarchy (`Employee` → `Manager`/`Developer`), abstract method override, inner class, polymorphism via parent reference, and anonymous inner class

## Session 5: Exception Handling (2T + 2L + 2SL)
- Exception-Handling: Basics, Role of Exceptions, Types
- Using `try` and `catch`, Multiple Catch, Nested `try` (`throw`, `throws`, `finally`)
- Built-in Exceptions, Runtime Exceptions, Checked Exceptions, Errors
- Creating own Exception Subclasses
- **Lab:** Custom checked exceptions (`RecordNotFoundException`, `InvalidDataException`), search/validation methods, `try-catch-finally`, checked vs unchecked exceptions

## Session 6: Strings (2T + 2L + 2SL)
- `String` Class and methods, String Immutability in Java
- `StringBuilder` and `StringBuffer` class
- **Lab:** String literal vs `String` object, String constant pool & `intern()`, text analyzer (vowels, consonants, special characters), Regular Expressions (regex) for pattern matching

## Sessions 7 & 8: Generics and Collections (4T + 4L + 4SL)
- Introduction to Generics and Wildcards
- Introduction to Collection Framework
- `List` Interface and implementation classes (`ArrayList` vs `LinkedList`)
- `Set` Interface and implementation classes (`HashSet` vs `TreeSet`)
- `Map` Interface and implementation classes (`HashMap` vs `TreeMap`)
- **Lab:** Generic repository `EntityManager<T>`, CRUD operations with `List`/`Set`/`Map`, performance comparison, generic methods for searching/filtering

## Session 9: Enums and Wrapper Class (2T + 4L)
- Enumerations, Autoboxing / Unboxing, Annotations
- `java.util`, `java.lang` package (`Arrays`, `Collections`, `Comparable`, `Comparator`, `Date`, `Random`, `Math`)
- Wrapper classes (`Boolean`, `Double`, and `Integer`)
- **Lab:** Custom enums (`EmployeeType` with salary multipliers, `DaysOfWeek` with `isWeekend()`/`isWeekday()`), autoboxing with `ArrayList`, wrapper methods (`parseInt`, `valueOf`, `compareTo`), sorting/searching with `Comparable`/`Comparator`

## Sessions 10 & 11: Functional Programming (4T + 2L + 2SL)
- Functional Programming Overview, Functional Interfaces
- `java.util.function` package: `Predicate`, `Function`/Map, `Consumer`, `Supplier`
- Lambda Expressions & Impact of Functional Programming upon Collection Framework
- **Lab:** Refactor entity filtering and sorting operations using lambda expressions

## Sessions 12 & 13: Java Streams & Date-Time API (4T + 6L + 2SL)
- Introduction to Streams, Streams vs. Collections, `java.util.stream.Stream` API
- Types of Primitive Streams: `IntStream`, `LongStream`, `DoubleStream` & its API
- Stream operations: `filter`, `map`, `reduce`, `sorted`, `flatMap`, `anyMatch`, `count`, boxing, `collect`, `forEach`
- Overview of Java 8/17 Date-Time API
- **Lab:** Process collections with Stream API (filter, map, reduce sum/average, multi-attribute sort, flatMap, terminal operations) and date calculations (age calculation, `Period` between dates)

## Session 14: Multithreading (2T + 2L)
- Java Concurrency: Using threads in Java, Life cycle of a thread
- `Thread` class, thread groups, `Runnable` interface
- Synchronization (`synchronized` methods/blocks)
- **Lab:** Multi-threaded bank transaction / producer-consumer simulation with shared queue using `Thread` extension, `Runnable`, and synchronization to prevent race conditions

## Session 15: File Handling & Serialization (2T + 2L)
- The `java.io` Package, Files, Byte & Character Streams
- Persistence of objects, Object Serialization Methods (`ObjectOutputStream`, `ObjectInputStream`, `transient`)
- **Lab:** Save/load entity objects via serialization, mark `transient` fields, backup/restore entity collections, handle `IOException`s

## Sessions 16 & 17: Java Database Connectivity — JDBC (4T + 4L + 2SL)
- Introduction of JDBC API, JDBC Architecture, JDBC Drivers
- `Driver`, `Connection`, `Statement`, `PreparedStatement`, and `ResultSet` interfaces
- **Lab:** Database schema creation, DAO pattern with CRUD operations using `Statement`, `PreparedStatement`, `ResultSet`, connection pooling, `SQLException` handling, and `try-with-resources` (`AutoCloseable`)
"""


def consolidate_java_syllabus_topic(raw_syl: str, sf_topic: str, category: str) -> str:
    """Map detailed Java session labels into the consolidated PGCP-BDA Syllabus Session groups."""
    if category == "REMOVE" or raw_syl.startswith("Excluded"):
        return "Excluded / Out of Syllabus (Recursion, Networking, Servlets, Hibernate & JUnit)"
    s = raw_syl.lower()
    if "session 16" in s or "sessions 16" in s or "jdbc" in s:
        return "Sessions 16 & 17: Java Database Connectivity — JDBC"
    if "session 15" in s or "sessions 15" in s or "java.io" in s or "serialization" in s or "file" in s:
        return "Session 15: File Handling & Object Serialization (java.io)"
    if "session 14" in s or "multithreading" in s or "thread" in s or "concurrency" in s:
        return "Session 14: Multithreading & Concurrency"
    if "sessions 12" in s or "stream" in s or "date time api" in s:
        return "Sessions 12 & 13: Java Streams & Date-Time API"
    if "sessions 10" in s or "session 10" in s or "functional" in s or "lambda" in s:
        return "Sessions 10 & 11: Functional Programming & Lambda Expressions"
    if "session 9" in s or "wrapper" in s or "enum" in s or "annotation" in s:
        return "Session 9: Enums, Wrapper Classes, Annotations & java.lang / java.util"
    if "sessions 7" in s or "session 7" in s or "collection" in s or "generic" in s or "wildcard" in s or "map" in s or "list" in s or "set" in s:
        return "Sessions 7 & 8: Generics & Collections Framework"
    if "session 6" in s or "string" in s or "regular expression" in s:
        return "Session 6: Strings, StringBuffer/Builder & Regular Expressions"
    if "session 5" in s or "exception" in s:
        return "Session 5: Exception Handling"
    if sf_topic == "Type Conversions, Promotions and Castings":
        return "Sessions 1 & 2: Getting Started with Java (JVM, JDK, Data Types, Operators & Control Statements)"
    if sf_topic in ("Arrays Revisited & Keyword static", "Class Fundamentals & Declaring Objects", "OOPs Concepts", "Java Arrays"):
        return "Session 3: Introduction to OOP (Classes, Objects, Packages, Arrays & GC)"
    if "session 4" in s or "inheritance" in s or "interface" in s or "overriding" in s or "overloading" in s or "access" in s:
        return "Session 4: Pillars of OOP (Methods, Encapsulation, Inheritance, Interfaces & Polymorphism)"
    if "session 3" in s or "sessions 1–3" in s or "oop" in s or "array" in s or "garbage" in s:
        return "Session 3: Introduction to OOP (Classes, Objects, Packages, Arrays & GC)"
    return "Sessions 1 & 2: Getting Started with Java (JVM, JDK, Data Types, Operators & Control Statements)"


def infer_java_warning(question_text: str, sf_topic: str) -> str | None:
    """Attach a helpful Java 17 LTS note when a Sanfoundry question uses older/deprecated Java APIs."""
    if re.search(r"\bnew\s+(?:Integer|Double|Float|Long|Short|Byte|Character|Boolean)\s*\(", question_text):
        return (
            "Java 17 LTS Note: Wrapper constructors like new Integer(x) are deprecated since Java 9; "
            "understand them for MCQs, and use valueOf() or autoboxing in lab code."
        )
    if "finalize(" in question_text or "finalize()" in question_text.lower():
        return (
            "Java 17 LTS Note: Object.finalize() is deprecated since Java 9; "
            "prefer try-with-resources (AutoCloseable) for deterministic cleanup."
        )
    if sf_topic in ("StringBuffer Class", "StringBuffer Methods"):
        return (
            "Syllabus Tip: StringBuffer is synchronized (thread-safe), whereas StringBuilder (Session 6) "
            "has the same API methods but is faster for single-threaded string manipulation."
        )
    return None


def build_java_questions_json() -> Path | None:
    """Extract all saved HTML pages in `JavaSaved/`, map them to the PGCP-BDA Java syllabus, and write `java_questions.json`."""
    java_dir = ROOT / "JavaSaved"
    if not java_dir.is_dir():
        return None
    html_files = sorted(java_dir.glob("*.html"))
    if not html_files:
        return None

    from open_java_pages import HUB_HTML, TOPIC_SYLLABUS_MAP, get_ordered_topics
    from parser import parse_page
    from scraper import normalize_text

    # Parse all saved topic HTML files and index by normalized canonical URL
    pages_by_url: dict[str, Any] = {}
    hub_page = None
    for f in html_files:
        parsed = parse_page(f.read_bytes(), url=f.as_posix())
        if not parsed.questions:
            continue
        if f.name == HUB_HTML.name:
            hub_page = parsed
            continue
        norm_u = (parsed.url or "").rstrip("/") + "/"
        pages_by_url[norm_u] = parsed

    ordered_urls = [item["url"] for item in get_ordered_topics() if item["url"] in pages_by_url]
    for u in sorted(pages_by_url.keys()):
        if u not in ordered_urls:
            ordered_urls.append(u)

    raw_records: list[dict[str, Any]] = []
    seen_exact: set[tuple[str, str]] = set()
    seen_loose: set[tuple[str, frozenset[str]]] = set()

    def register_question(
        q_obj: Any,
        *,
        src_url: str,
        sf_topic: str,
        cat: str,
        raw_syl: str,
        reason: str,
    ) -> None:
        exact_sig = (
            q_obj.question.strip(),
            "|".join(f"{k}:{normalize_text(v)}" for k, v in sorted(q_obj.options.items())),
        )
        loose_q = re.sub(r"\bthe\b", " ", normalize_text(q_obj.question))
        loose_q = re.sub(r"\s+", " ", loose_q).strip()
        loose_sig = (loose_q, frozenset(normalize_text(v) for v in q_obj.options.values()))

        if exact_sig in seen_exact:
            return
        seen_exact.add(exact_sig)
        seen_loose.add(loose_sig)

        syl_group = consolidate_java_syllabus_topic(raw_syl, sf_topic, cat)
        raw_records.append(
            {
                "topic": sf_topic,
                "category": cat,
                "syllabus_topic": syl_group,
                "syllabus_detail": raw_syl,
                "reason": reason,
                "faculty_alignment": raw_syl,
                "warning": infer_java_warning(q_obj.question, sf_topic),
                "question": q_obj.question,
                "options": q_obj.options,
                "correct_answer": q_obj.correct_answer,
                "explanation": q_obj.explanation,
                "source_url": src_url,
            }
        )

    # 1. Process all 79 saved topic pages in chronological PGCP-BDA syllabus order
    for norm_u in ordered_urls:
        page = pages_by_url[norm_u]
        meta = TOPIC_SYLLABUS_MAP.get(norm_u, {})
        base_topic = meta.get("topic") or page.topic or "Core Java"
        base_cat = meta.get("category", "KEEP")
        base_syl = meta.get("syllabus_topic", base_topic)
        base_reason = meta.get("reason", "")

        for q in page.questions:
            q_topic = base_topic
            q_cat = base_cat
            q_syl = base_syl
            q_reason = base_reason

            # Question-level syllabus refinement for mixed Sanfoundry pages
            if norm_u == "https://www.sanfoundry.com/advanced-java-questions-answers-annotations/":
                if q.number in (5, 6):
                    q_cat = "REMOVE"
                    q_syl = "Excluded (Hibernate)"
                    q_reason = "Hibernate ORM annotations (@Entity, @GeneratedValue) are outside the Core Java / JDBC syllabus."
                elif q.number in (7, 8, 9):
                    q_cat = "REMOVE"
                    q_syl = "Excluded (JUnit)"
                    q_reason = "JUnit testing annotations are not in the PGCP-BDA Core Java syllabus."
            elif norm_u == "https://www.sanfoundry.com/java-mcqs-java-util-bitset-date-class/":
                if q.number in (4, 9):
                    q_cat = "KEEP"
                    q_syl = "Session 9 Lab: Date class / Sessions 12–13: Date-Time API"
                    q_reason = "Date class methods explicitly listed in Session 9 lab."
                else:
                    q_cat = "SELECTIVE"
                    q_syl = "Session 9: java.util (BitSet optional)"
                    q_reason = "Date is in Session 9 lab; BitSet questions on the same Sanfoundry page are optional extra practice."
            elif norm_u == "https://www.sanfoundry.com/java-questions-answers-java8-features/":
                if q.number in (2, 3, 4, 10):
                    q_cat = "KEEP"
                    q_syl = "Sessions 10 & 11: Functional Interfaces, java.util.function & Lambda Expressions"
                    q_reason = "Directly covers Functional Interfaces (SAM, BooleanSupplier), Lambdas, and forEach."
                elif q.number in (1, 5, 7, 8):
                    q_cat = "KEEP"
                    q_syl = "Sessions 12 & 13: Java Streams & Java 8/17 APIs"
                    q_reason = "Covers sequential/parallel Streams, Files.lines stream, and Optional."
                else:
                    q_cat = "SELECTIVE"
                    q_syl = "Sessions 10–14: Java 8 Extras (ForkJoinPool & Nashorn)"
                    q_reason = "Extra Java 8 runtime features beyond core Lambdas/Streams."

            register_question(
                q,
                src_url=norm_u.rstrip("/"),
                sf_topic=q_topic,
                cat=q_cat,
                raw_syl=q_syl,
                reason=q_reason,
            )

    # 2. Process unique questions from the 1000 Java MCQ hub page (skipping any duplicate of topic pages)
    if hub_page and hub_page.questions:
        hub_url = (hub_page.url or "https://www.sanfoundry.com/java-questions-answers-freshers-experienced/").rstrip("/")
        hub_q_map: dict[int, tuple[str, str, str, str]] = {
            1: ("Overview of Java & JDK", "KEEP", "Sessions 1 & 2: Overview of Java", "Covers Java creator and history (Sessions 1 & 2)."),
            2: ("Overview of Java & JDK", "KEEP", "Sessions 1 & 2: Features of Java", "Platform independence of Java (Sessions 1 & 2)."),
            3: ("JDK, JRE, JIT & JVM", "KEEP", "Sessions 1 & 2: JDK and its usage", "JDK for compiling, debugging, and executing Java programs."),
            4: ("Overview of Java & JDK", "KEEP", "Sessions 1 & 2: Features of Java", "Core features of Java (no explicit pointers)."),
            5: ("Literals & Variables", "KEEP", "Sessions 1 & 2: Working with Data Types & Variables", "Java identifier and keyword rules."),
            8: ("Overview of Java & JDK", "KEEP", "Sessions 1 & 2: JDK usage / Session 3: Classpath", "Environment variables PATH and CLASSPATH."),
            9: ("Integer and Floating Data Types", "KEEP", "Sessions 1 & 2: Working with Data Types & Division by Zero Lab", "Floating-point division by zero (Infinity / NaN) relevant to Session 1–2 calculator lab."),
            10: ("OOPs Concepts", "KEEP", "Session 3: Object Oriented Programming Concepts", "Four pillars/concepts of OOP in Java."),
            11: ("Class Fundamentals & Declaring Objects", "KEEP", "Session 3 & Session 4: Classes, Objects & 'this' keyword", "Usage of the 'this' reference in constructors and methods."),
            14: ("Method Overriding", "KEEP", "Session 4: Understanding Polymorphism", "Compile-time vs runtime polymorphism in Java."),
            16: ("Class Fundamentals & Declaring Objects", "KEEP", "Session 3: Creating Objects with new", "Instantiating a class and accessing fields via object reference."),
            17: ("Type Conversions, Promotions and Castings", "KEEP", "Sessions 1 & 2: Type Casting & Truncation", "Truncation when casting floating-point values to integer types."),
            18: ("Java Arrays", "KEEP", "Session 3: Arrays", "Array indexing and loop bounds with array.length."),
            19: ("Command Line Arguments", "SELECTIVE", "Sessions 1 & 2: JDK & main(String[] args)", "Command-line argument array handling in main()."),
            21: ("Exception Types", "KEEP", "Session 5: Built-in Exceptions & Errors (OutOfMemoryError)", "JVM Error hierarchy in Session 5."),
            22: ("String Handling Basics", "KEEP", "Session 6: String Class Constructors", "Constructing a String from a char[] array."),
            24: ("Recursion (Excluded)", "REMOVE", "Excluded (Recursion)", "Recursion is not listed in the PGCP-BDA Java syllabus."),
            27: ("StringBuffer Methods", "KEEP", "Session 6: StringBuilder and StringBuffer class", "StringBuffer.reverse() mutates and returns the buffer."),
            28: ("Byte & Short Wrappers", "KEEP", "Session 9: Wrapper classes (Integer.byteValue)", "Wrapper conversion methods in Session 9."),
            30: ("Object Class", "KEEP", "Session 4: Object vs Reference (java.lang.Object)", "Object is the root superclass of all classes in Java."),
            31: ("Object & Math Class", "KEEP", "Session 9 Lab: Math class from java.lang", "Math.ceil() and explicit casting."),
            32: ("Networking (Excluded)", "REMOVE", "Excluded (Networking)", "java.net.URL and URLConnection are not in the PGCP-BDA syllabus."),
            33: ("Overview of Java & JDK", "SELECTIVE", "Sessions 1 & 2: JVM Profiling & Tooling", "JVM profiling tools (extra)."),
            34: ("Networking (Excluded)", "REMOVE", "Excluded (Networking)", "java.net.URL is not in the PGCP-BDA syllabus."),
            35: ("ArrayList Class", "KEEP", "Sessions 7 & 8: List Interface & ArrayList", "Positional insertion with ArrayList.add(index, element)."),
            36: ("Exception Types", "KEEP", "Session 5: Errors in java.lang (StackOverflowError)", "Built-in Errors in java.lang."),
            38: ("Multithreading Basics", "KEEP", "Session 14: Thread lifecycle (start vs run)", "Thread execution lifecycle in Session 14."),
            39: ("Exception Handling Basics", "KEEP", "Session 5: Using try and catch", "The try keyword for exception monitoring."),
            44: ("Networking (Excluded)", "REMOVE", "Excluded (Networking)", "ServerSocket networking is not in the PGCP-BDA syllabus."),
            45: ("Overloading Methods & Argument Passing", "KEEP", "Session 4: Method Overloading & Constructors", "Overloaded add(int, int) vs add(double, double) methods."),
            46: ("Servlets (Excluded)", "REMOVE", "Excluded (Servlets)", "Java EE Servlets are not in the Core Java syllabus."),
        }
        for q in hub_page.questions:
            loose_q = re.sub(r"\bthe\b", " ", normalize_text(q.question))
            loose_q = re.sub(r"\s+", " ", loose_q).strip()
            loose_sig = (loose_q, frozenset(normalize_text(v) for v in q.options.values()))
            if loose_sig in seen_loose:
                continue
            qnum = int(q.number or 0)
            t_name, cat, raw_syl, reason = hub_q_map.get(
                qnum,
                ("Overview of Java & JDK", "KEEP", "Sessions 1 & 2: Getting started with Java", "Core Java overview question."),
            )
            register_question(
                q,
                src_url=hub_url,
                sf_topic=t_name,
                cat=cat,
                raw_syl=raw_syl,
                reason=reason,
            )

    # Sort questions by consolidated syllabus session order so IDs 1..N follow Sessions 1 -> 17 -> Excluded
    session_order_list = [
        "Sessions 1 & 2: Getting Started with Java (JVM, JDK, Data Types, Operators & Control Statements)",
        "Session 3: Introduction to OOP (Classes, Objects, Packages, Arrays & GC)",
        "Session 4: Pillars of OOP (Methods, Encapsulation, Inheritance, Interfaces & Polymorphism)",
        "Session 5: Exception Handling",
        "Session 6: Strings, StringBuffer/Builder & Regular Expressions",
        "Sessions 7 & 8: Generics & Collections Framework",
        "Session 9: Enums, Wrapper Classes, Annotations & java.lang / java.util",
        "Sessions 10 & 11: Functional Programming & Lambda Expressions",
        "Sessions 12 & 13: Java Streams & Date-Time API",
        "Session 14: Multithreading & Concurrency",
        "Session 15: File Handling & Object Serialization (java.io)",
        "Sessions 16 & 17: Java Database Connectivity — JDBC",
        "Excluded / Out of Syllabus (Recursion, Networking, Servlets, Hibernate & JUnit)",
    ]
    order_index = {name: i for i, name in enumerate(session_order_list)}
    cat_order = {"KEEP": 0, "SELECTIVE": 1, "REMOVE": 2}

    raw_records.sort(
        key=lambda r: (
            order_index.get(r["syllabus_topic"], 99),
            cat_order.get(r["category"], 9),
        )
    )

    topic_counts: Counter[str] = Counter()
    topic_meta_map: dict[str, dict[str, str]] = {}
    questions: list[dict[str, Any]] = []

    for idx, rec in enumerate(raw_records, start=1):
        rec_with_id = {"id": idx, **rec}
        questions.append(rec_with_id)
        t = rec["topic"]
        topic_counts[t] += 1
        if t not in topic_meta_map or rec["category"] == "KEEP":
            topic_meta_map[t] = {
                "category": rec["category"],
                "reason": rec["reason"],
                "faculty_alignment": rec["syllabus_detail"],
                "syllabus_topic": rec["syllabus_topic"],
            }

    topics = [
        {
            "topic": t,
            "count": c,
            "category": topic_meta_map[t]["category"],
            "syllabus_topic": topic_meta_map[t]["syllabus_topic"],
            "reason": topic_meta_map[t]["reason"],
            "faculty_alignment": topic_meta_map[t]["faculty_alignment"],
        }
        for t, c in sorted(topic_counts.items())
    ]

    java_json_data = {
        "subject": "Java Programming — Core Java, OOP, Collections, Streams, Multithreading, I/O & JDBC",
        "syllabus": "PGCP-BDA (ACTS, Pune) — Java Programming (Java 17 LTS)",
        "source": "Sanfoundry",
        "total_questions": len(questions),
        "counts": {
            "KEEP": sum(1 for q in questions if q["category"] == "KEEP"),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "topics": topics,
        "syllabus_markdown": JAVA_SYLLABUS_MD,
        "questions": questions,
    }

    out_path = ROOT / "java_questions.json"
    out_path.write_text(json.dumps(java_json_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return out_path


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
    is_java = json_path.name == "java_questions.json" or subj_id.startswith("java")

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
    elif is_java:
        subj_id = "java"
        subj_name = "Java Programming — Core Java, OOP, Collections, Streams, Multithreading, I/O & JDBC"

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
    java_out = build_java_questions_json()
    if java_out:
        print(f"Built {java_out.name} from JavaSaved/ HTML files.")

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
