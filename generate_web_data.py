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


PYTHON_SYLLABUS_MD = """# Python Programming — PGCP-BDA (ACTS, Pune)
**Duration:** 120 Hours (36 Theory + 44 Lab + 40 Self Learning — Python: 28T + 36L)  
**Evaluation:** Theory Exam – 40%, Lab Exam – 40%, Internal Assessment – 20%  
**Text Book:** *Python for Everybody*, 1st Edition, Charles R. Severance / Shroff  
**Reference Books:**
1. *Data Wrangling Using Python*, Jacqueline Kazil, Katharine Jarmul
2. *Introduction to Computer Science Using Python*, Charles / Wiley
3. *Learn Python the Hard Way*, 2018 Edition, Zed A. Shaw / Pearson

---

## Session 1: Python Fundamentals, Data Types, Operators & Control Flow (2T + 4L + 2SL)
- Introduction to Python, PVM Bytecode Execution, Basic Syntax, Data Types, Variables, Operators, Input/Output (`input()`, `print()`)
- Flow of Control: `if`, `if-else`, `if-elif-else`, Nested `if-else`, `match-case` (Python 3.10+)
- Looping: `for`, `while`, Nested Loops, `for-else` & `while-else` constructs, Uses of `break`, `continue`, and `pass`
- Bitwise Operators (`<<`, `>>`, `&`, `|`, `^`, `~`), Operator Precedence & Associativity, Boolean Truthiness
- **Faculty Materials:** `Day_01a_Intro_PVM_and_Operators.pdf`, `Day_01b_Syntax_DataTypes_IfElse_and_Print.pdf`, `Day_02_Bitwise_and_Loops_For_While.pdf`, `loopdemo.py`, `Assignment_01_Loops`, `Assignment_02_If_Statements`
- **Lab:** Compute `0!` to `10!` using `for` loop and `while` loop (`< 2 billion`)

## Session 2: Strings, Slicing, String Methods & String Formatting (2T + 2L + 2SL)
- Strings and Tuples, Accessing Strings, Basic Operations, Assigning Multiple Values at Once
- String Slices (`s[start:stop:step]`, `s[::-1]`), String Immutability
- String Methods (`find`, `rfind`, `index`, `rindex`, `strip`, `lstrip`, `rstrip`, `split`, `join`, `replace`, `count`, `isalnum`, `isalpha`, `isdigit`, `isdecimal`, `partition`, `translate`, `maketrans`)
- Formatting Strings (`%` formatting, `str.format()`, f-strings, alignment & precision specifiers)
- **Faculty Materials:** `Day_03_MatchCase_Functions_Math_and_Strings.pdf`, `stringdemo.py`, `Assignment_03_Strings`
- **Lab:** Monthly calendar generator, integer `histogram()`, phrase palindrome recognizer, pangram checker

## Session 3: Dictionaries, Dictionary Comprehension & Sets (2T + 2L + 2SL)
- Defining Dictionaries, Modifying Dictionaries, Deleting Items (`del`, `pop`, `popitem`, `clear`)
- Dictionary Methods (`get`, `setdefault`, `update`, `fromkeys`, `keys`, `values`, `items`, `copy`) & `collections` (`Counter`, `defaultdict`, `OrderedDict`)
- Dictionary Comprehension (`{k: v for ...}`)
- Sets & `frozenset`: Set Operations & Venn Diagrams (`add`, `update`, `remove` vs `discard`, `union` `|`, `intersection` `&`, `difference` `-`, `symmetric_difference` `^`, `issubset`, `issuperset`, `isdisjoint`, Set Comprehensions)
- **Faculty Materials:** `Day_06_Sets_and_Dictionaries.pdf`, `dictinarydemo.py`, `setdemo.py`, `SLA_Consolidated_Lab_Questions.pdf`
- **Lab:** ROT-13 Caesar cipher encoder/decoder using dictionary mapping

## Session 4: Lists, List Operations, Shallow/Deep Copy & List Comprehension (2T + 2L + 2SL)
- Defining Lists, Declaring, Assigning, and Retrieving Values from Lists, Accessing & Slicing Lists
- Operations on Lists: `append`, `extend`, `insert`, `index`, `pop`, `remove`, `reverse`, `sort(key=..., reverse=...)`, `copy()`
- Object Identity (`id()`, `is`), Aliasing vs Shallow Copy (`list.copy()`, `[:]`) vs Deep Copy (`copy.deepcopy()`)
- Searching Lists, Deleting List Elements, Joining Lists & Splitting Strings (`split`, `join`)
- Mapping Lists & List Comprehension (`[expr for x in iterable if cond]`, nested/2D matrix comprehensions)
- **Faculty Materials:** `Day_04_Lists_and_Tuples.pdf`, `listdemos.py`, `listdemo1.py`, `coursemgntsystem_full.py`
- **Lab:** Find largest and smallest number in a list; create and manipulate multiple lists

## Session 5: Functions, Argument Passing, Lambda/Map/Filter, Built-ins & Modules (2T + 4L + 4SL)
- Defining and Calling Functions, Types of Functions, Function Arguments (Positional, Default, Keyword, `*args`, `**kwargs`)
- Argument Passing (Pass-by-Object-Reference, Mutable Default Argument Trap `def f(x=[])`)
- Global and Local Variables (`global`, `nonlocal`, LEGB Namespace Order), Recursion
- Anonymous Functions & Functional Tools (`lambda`, `map()`, `filter()`, `functools.reduce()`, `zip()`, `enumerate()`, `sorted()`, `reversed()`)
- Built-In Functions (`type`, `str`, `dir`, `id`, `len`, `sum`, `min`, `max`, `all`, `any`, `round`, `pow`, `divmod`, `eval`, `chr`, `ord`, `hex`, `oct`)
- Concepts of Modules & Packages (`import`, `from ... import`, `math` module, `datetime` module, `sys.argv`), Pickling (`pickle` serialization)
- **Faculty Materials:** `Day_03_MatchCase_Functions_Math_and_Strings.pdf`, `Day_05_Iterables_Lambda_Filter_Reduce.pdf`, `functiondemo.py`, `filtermapdemo.py`, `zipenumeratedemo.py`, `03_Modules_and_Packages`, `Assignment_04_Functions_and_Lists`
- **Lab:** Student favourite colours dictionary manipulation, Swedish "rövarspråket" translator, factorial table `1..20`, recursive `sum(1..x)`, `overlapping()`, `find_longest_word()`, `filter_long_words()`, `correct()` spacing, `make_ing_form()`

## Session 6: Tuples (2T + 2L + 2SL)
- Introducing Tuples, Single-Element Tuple Syntax `(x,)`, Tuple Packing & Unpacking (`x, y, z = a`)
- Accessing & Slicing Tuples, Tuple Immutability, Returning Multiple Values from Functions, `zip()` with Tuples
- **Faculty Materials:** `Day_04_Lists_and_Tuples.pdf`, `tupledemo1.py`, `coursemgntsystem_full.py`
- **Lab:** Find repeated items of a tuple, sort a list of tuples by float element, count elements in a list until an element is a tuple, element-wise sum of tuples using `zip()`

## Sessions 7 & 8: Advanced Python — OOP, Inheritance, Polymorphism, Regex, Generators & Decorators (4T + 4L + 5SL)
- OOP Concepts: Class and Object, `__init__` constructor, `__str__` & `__repr__`, Object References, `@staticmethod`, Class/Static Variables
- Encapsulation & Data Hiding: Private (`__var`), Name Mangling (`_ClassName__var`), Protected (`_var`), Getters & Setters
- Attributes & Inheritance: Single, Multilevel, Multiple, Hierarchical Inheritance, `super().__init__()`, `isinstance()`, `issubclass()`, Abstract Base Classes (`abc.ABC`, `@abstractmethod`)
- Polymorphism: Duck Typing, Method Overriding, Operator Overloading (`__add__`, `__eq__`, `__lt__`, `__floordiv__`, `__or__`, `__invert__`, `__format__`)
- Regular Expressions Using Python (`re.search`, `re.match`, `re.findall`, `re.finditer`, `re.sub`, `re.split`, `re.compile`, Greedy `.*` vs Non-Greedy `.*?`, Capturing Groups `m.group()`, Flags `re.I|re.M`)
- Generators (`yield`, `next()`, generator expressions) & Decorators (`@decorator`, higher-order function wrappers)
- **Faculty Materials:** `Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf`, `studentclass_basic.py`, `studentclass_static_id.py`, `accountclass.py`, `bankmgntsystem.py`, `regexpdemo.py`, `Assignment_05_OOP`
- **Lab:** Menu-driven `Student` class with marks dictionary & GPA calculation, `NumberSeries` even-number generator, `@log_method_call` decorator

## Session 9: Exception Handling & Logging (2T + 2L + 2SL)
- Operations Exception, Exception Handling (`try`, `except`, multiple `except (E1, E2)`, `else`, `try-finally`, `raise`, `assert`)
- Built-in Exceptions (`IndexError`, `NameError`, `TypeError`, `ValueError`, `KeyError`, `ZeroDivisionError`, `IOError`) & User-Defined Exceptions
- Logging in Python (`logging` module)
- **Faculty Materials:** `Assignment_05_OOP` (Custom Exceptions)

## Sessions 10 & 11: Data Analysis, Web Scraping & Visualization — NumPy, Pandas, Pillow, BeautifulSoup, Matplotlib, Seaborn & Plotly (4T + 8L + 4SL)
- Working with NumPy (`ndarray`, `ndim`, `shape`, `dtype`, `arange`, `reshape`, `zeros`, `ones`, `eye`, `dot`, boolean filtering, `where`, `sum`/`mean` with `axis`, `hstack`/`vstack`, `flip`, `linspace`) & Pillow (`PIL.Image`)
- Working & Data Wrangling with Pandas (`Series`, `DataFrame`, `iloc`, `loc`, `info`, `describe`, `groupby`, `merge`, `concat`, `fillna`, `dropna`, `interpolate`, `replace`)
- Working with BeautifulSoup & Visualizing Using Matplotlib, Seaborn, ggplot, and Plotly
- **Faculty Materials:** `06_NumPy_and_Pillow_Images/numpydemoall.py`, `07_Pandas_Data_Wrangling/pandasdemo1.py`, `08_Data_Visualization/`, `Assignment_07_NumPy_and_Movie_Analysis`

## Session 12: File Handling, CSV, JSON & Context Managers (2T + 2L + 3SL)
- File Handling: `open()`, Modes (`r`, `w`, `a`, `r+`, `w+`, `rb`, `wb`, `wb+`), `read()`, `readline()`, `readlines()`, `write()`, `writelines()`, `flush()`, `close()`
- File Pointer Navigation: `seek(offset, whence)`, `tell()`, `truncate()`, File Attributes (`name`, `mode`, `closed`), `os.rename()`, `os.remove()`
- Working with Text, CSV, and JSON Files; Context Managers (`with open(...) as f:`)
- **Faculty Materials:** `Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf`, `Assignment_06_File_Handling_and_OOP`

## Session 13: Virtual Environments, Database Connectivity (PyMongo / SQL) & FastAPI (4T + 4L + 4SL)
- Creation of Python Virtual Environments (`venv`, `conda`, `pip`)
- Connecting & Manipulating Databases with Python (`pymongo.MongoClient` CRUD operations: `insert_one`, `find`, `update_one`, `delete_many`)
- Introduction to FastAPI, Creating REST APIs, Path & Query Parameters, Request/Response Models, Postman/Swagger UI
- **Faculty Materials:** `Setup_Virtual_Environments_Conda_Venv.pdf`, `05_Database_MongoDB/mongodbpython.py`
"""

# Question-level curation for all 78 core Sanfoundry Python topic pages:
# - "must_practice": Top ~325 Must-Practice Shortlist (assigned category="KEEP") across Basic, Moderate, and Hard levels
# - "basic" / "moderate" / "hard": Explicit per-question difficulty classification
PYTHON_PAGE_CURATION: dict[str, dict[str, set[int]]] = {
    # --- Session 1: Fundamentals, Variables, Operators, Bitwise, Boolean, Loops ---
    "https://www.sanfoundry.com/python-questions-answers-variable-names/": {
        "must_practice": {1, 4, 6, 9},
        "basic": {1, 2, 4, 7, 8, 10},
        "moderate": {3, 5, 6},
        "hard": {9},
    },
    "https://www.sanfoundry.com/python-mcqs-basic-operators/": {
        "must_practice": {1, 2, 3, 6},
        "basic": {1, 2, 4, 5, 8, 9, 10},
        "moderate": {3, 7},
        "hard": {6},
    },
    "https://www.sanfoundry.com/python-mcqs-core-datatypes/": {
        "must_practice": {1, 2, 7, 11},
        "basic": {1, 2, 3, 4, 5, 9, 10, 13, 15},
        "moderate": {6, 7, 8, 12, 14},
        "hard": {11},
    },
    "https://www.sanfoundry.com/python-questions-answers-numeric-types/": {
        "must_practice": {1, 4, 9, 10},
        "basic": {2, 3},
        "moderate": {4, 5, 6, 8, 10},
        "hard": {1, 9},
    },
    "https://www.sanfoundry.com/python-questions-answers-precedence-associativity-1/": {
        "must_practice": {4, 8, 9},
        "basic": {2, 3, 7},
        "moderate": {1, 4, 5, 6, 9, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-precedence-associativity-2/": {
        "must_practice": {4, 8},
        "basic": {1, 5, 7, 10},
        "moderate": {2, 3, 4, 6, 9},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-bitwise-1/": {
        "must_practice": {1, 5, 6, 7},
        "basic": {1, 2, 4, 8, 9},
        "moderate": {3, 5, 6, 10},
        "hard": {7},
    },
    "https://www.sanfoundry.com/python-questions-answers-bitwise-2/": {
        "must_practice": {5, 7, 8, 10},
        "basic": {2, 3, 4},
        "moderate": {1, 5, 6, 7, 10},
        "hard": {8, 9},
    },
    "https://www.sanfoundry.com/python-questions-answers-boolean/": {
        "must_practice": {1, 2, 5, 6},
        "basic": {3, 7, 8, 10},
        "moderate": {1, 2, 4, 5, 9},
        "hard": {6},
    },
    "https://www.sanfoundry.com/tough-python-questions-answers/": {  # While & For Loops - 3
        "must_practice": {1, 3, 7, 10},
        "basic": {2, 3, 4},
        "moderate": {1, 5, 6, 7, 8, 9},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-questions-answers-freshers/": {  # While & For Loops - 4
        "must_practice": {1, 2, 4, 7, 10},
        "basic": {1, 2, 4, 5, 6, 9, 11},
        "moderate": {3, 8},
        "hard": {7, 10},
    },
    "https://www.sanfoundry.com/python-questions-answers-experienced/": {  # While & For Loops - 5
        "must_practice": {1, 5, 9},
        "basic": {2, 5, 7, 8},
        "moderate": {1, 3, 4, 6},
        "hard": {9, 10},
    },
    "https://www.sanfoundry.com/python-technical-questions-answers/": {  # While & For Loops - 6
        "must_practice": {1, 2, 4, 7},
        "basic": {3, 5, 6},
        "moderate": {1, 2, 9, 10},
        "hard": {4, 7, 8},
    },
    # --- Session 2: Strings & Formatting ---
    "https://www.sanfoundry.com/python-mcqs-strings-1/": {
        "must_practice": {2, 6, 9},
        "basic": {1, 2, 4, 5, 9},
        "moderate": {3, 6, 7, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/advanced-python-interview-questions-answers/": {  # Strings - 2
        "must_practice": {1, 4, 7, 8},
        "basic": {3, 5, 6, 7},
        "moderate": {4, 8, 9, 10},
        "hard": {1, 2},
    },
    "https://www.sanfoundry.com/python-technical-interview-questions-answers/": {  # Strings - 3
        "must_practice": {2, 4, 7},
        "basic": {1, 4, 5, 6, 7, 10},
        "moderate": {2, 3, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-coding-questions-answers/": {  # Strings - 4
        "must_practice": {1, 4, 7},
        "basic": {1, 3, 9},
        "moderate": {2, 4, 5, 6, 10},
        "hard": {7, 8},
    },
    "https://www.sanfoundry.com/basic-python-questions-answers/": {  # Strings - 5
        "must_practice": {2, 6, 10},
        "basic": {1, 3, 4},
        "moderate": {2, 5, 6, 7, 8, 9},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-quiz/": {  # Strings - 6
        "must_practice": {1, 3, 7},
        "basic": {1, 8, 9},
        "moderate": {2, 3, 4, 5, 7, 10},
        "hard": {6},
    },
    "https://www.sanfoundry.com/python-quiz-online/": {  # Strings - 7
        "must_practice": {4, 8, 10},
        "basic": {5, 6, 7, 9},
        "moderate": {1, 2, 3, 8, 10},
        "hard": {4},
    },
    "https://www.sanfoundry.com/python-multiple-choice-questions-answers/": {  # Strings - 8
        "must_practice": {2, 4, 6, 7},
        "basic": {1, 5},
        "moderate": {3, 4, 6, 7, 8},
        "hard": {2, 9, 10},
    },
    "https://www.sanfoundry.com/python-mcqs/": {  # Strings - 9
        "must_practice": {2, 3, 6, 7},
        "basic": {3, 5, 8},
        "moderate": {1, 2, 4, 6, 9, 10},
        "hard": {7},
    },
    "https://www.sanfoundry.com/python-test/": {  # Strings - 10
        "must_practice": {1, 5, 9},
        "basic": {2, 4, 8, 10},
        "moderate": {3, 5, 6, 7, 9},
        "hard": {1},
    },
    "https://www.sanfoundry.com/python-online-test/": {  # Strings - 11
        "must_practice": {4, 5, 8},
        "basic": {2, 3},
        "moderate": {1, 6, 7, 8, 9, 10},
        "hard": {4, 5},
    },
    "https://www.sanfoundry.com/python-problems/": {  # Strings - 12
        "must_practice": {3, 6, 8},
        "basic": {3, 4, 5},
        "moderate": {1, 2, 7, 8, 10},
        "hard": {6, 9},
    },
    "https://www.sanfoundry.com/python-question-bank/": {  # Strings - 13
        "must_practice": {1, 2, 8, 10},
        "basic": {2, 3, 4, 9},
        "moderate": {1, 5, 6, 7, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-formatting-1/": {
        "must_practice": {4, 5, 8},
        "basic": {4, 7, 8},
        "moderate": {1, 2, 3, 5, 9},
        "hard": {6, 10},
    },
    "https://www.sanfoundry.com/python-questions-answers-formatting-2/": {
        "must_practice": {5, 7, 12},
        "basic": {9, 10, 13, 15},
        "moderate": {1, 2, 4, 6, 7, 11, 12, 14},
        "hard": {3, 5, 8},
    },
    "https://www.sanfoundry.com/python-questions-answers-advanced-formatting/": {
        "must_practice": {2, 7, 8},
        "basic": {5, 6},
        "moderate": {1, 2, 3, 4, 7, 10, 12},
        "hard": {8, 9, 11},
    },
    # --- Session 3: Dictionaries & Sets ---
    "https://www.sanfoundry.com/python-mcqs-dictionary-1/": {
        "must_practice": {1, 3, 7, 10},
        "basic": {1, 2, 3, 4, 6, 7, 8, 9},
        "moderate": {5, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-2/": {
        "must_practice": {3, 4, 5, 7, 8, 12, 13},
        "basic": {1, 3, 10, 11, 14, 15},
        "moderate": {2, 4, 5, 6, 7, 8, 9, 12, 13},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-3/": {
        "must_practice": {3, 4, 9, 11, 12},
        "basic": {1, 2, 3, 7, 10},
        "moderate": {4, 5, 6, 8, 11, 12, 13},
        "hard": {9, 14, 15},
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-4/": {
        "must_practice": {2, 4, 5, 6, 7, 9, 12},
        "basic": {3, 4, 5, 10, 11},
        "moderate": {2, 6, 8, 9, 12, 13, 15},
        "hard": {1, 7, 14},
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-1/": {
        "must_practice": {1, 2, 5, 7, 10, 11, 14, 15},
        "basic": {1, 3, 5, 8, 13, 14},
        "moderate": {2, 4, 6, 7, 9, 10, 11, 12},
        "hard": {15},
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-2/": {
        "must_practice": {1, 3, 5, 7, 8, 9, 12},
        "basic": {1, 2, 4, 14, 15},
        "moderate": {3, 5, 6, 7, 8, 10, 11, 12, 13},
        "hard": {9},
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-3/": {
        "must_practice": {2, 8, 10},
        "basic": {1, 3, 5, 6, 7},
        "moderate": {2, 4, 8, 9},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-4/": {
        "must_practice": {3, 4, 8, 9},
        "basic": {1, 2, 5, 10},
        "moderate": {3, 6, 7, 8, 9},
        "hard": {4},
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-5/": {
        "must_practice": {3, 5, 8, 10},
        "basic": {3, 4, 6, 7, 9},
        "moderate": {1, 2, 5, 8, 10},
        "hard": set(),
    },
    # --- Session 4: Lists & List Comprehension ---
    "https://www.sanfoundry.com/python-mcqs-lists-1/": {
        "must_practice": {2, 4, 9, 10},
        "basic": {1, 2, 3, 4, 5, 6, 9},
        "moderate": {7, 8, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-coding-interview-questions-answers/": {  # Lists - 2
        "must_practice": {1, 2, 5, 7, 8, 9},
        "basic": {3, 4, 6, 8, 9, 10},
        "moderate": {1, 5, 7},
        "hard": {2},
    },
    "https://www.sanfoundry.com/python-programming-questions-answers/": {  # Lists - 3
        "must_practice": {1, 2, 3, 5, 8, 10},
        "basic": {1, 2, 3, 4, 5, 6},
        "moderate": {7, 9, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-programming-interview-questions-answers/": {  # Lists - 4
        "must_practice": {1, 4, 7, 8},
        "basic": {2, 5, 6},
        "moderate": {3, 4, 7, 8, 9, 10},
        "hard": {1},
    },
    "https://www.sanfoundry.com/python-question-papers/": {  # Lists - 5
        "must_practice": {1, 5, 8, 10},
        "basic": {8},
        "moderate": {1, 2, 3, 4, 5, 6, 7, 10},
        "hard": {9},
    },
    "https://www.sanfoundry.com/python-questions-answers-lists-6/": {
        "must_practice": {1, 2, 3, 8, 9, 10},
        "basic": {6},
        "moderate": {2, 4, 5, 7, 9, 10},
        "hard": {1, 3, 8},
    },
    "https://www.sanfoundry.com/python-questions-answers-lists-7/": {
        "must_practice": {1, 2, 4, 5, 6, 7, 10, 12, 14, 15},
        "basic": {1, 2, 15},
        "moderate": {3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14},
        "hard": {5},
    },
    "https://www.sanfoundry.com/python-questions-answers-list-comprehension/": {
        "must_practice": {2, 4, 7, 8, 9, 10},
        "basic": {4, 6},
        "moderate": {1, 3, 5, 7, 8, 10},
        "hard": {2, 9},
    },
    "https://www.sanfoundry.com/python-questions-answers-list-comprehension-1/": {
        "must_practice": {1, 2, 3, 4, 6, 8},
        "basic": {3, 7},
        "moderate": {1, 2, 4, 5, 6, 9, 10},
        "hard": {8},
    },
    # --- Session 5: Functions, Argument Passing, Global/Local, Built-ins, Modules ---
    "https://www.sanfoundry.com/python-mcqs-function-1/": {
        "must_practice": {5, 6, 7, 8},
        "basic": {1, 2, 3, 4, 7, 9, 10},
        "moderate": {5, 6, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-questions-entrance-exams/": {  # Function - 2
        "must_practice": {4, 5, 10},
        "basic": {1, 2, 3, 4, 5, 6, 7, 8},
        "moderate": {9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-questions-campus-interview/": {  # Function - 3 (Lambda)
        "must_practice": {1, 2, 4, 8, 9, 10},
        "basic": {1, 2, 3, 7},
        "moderate": {4, 5, 6, 9, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-function-4/": {
        "must_practice": {3, 4, 5, 6, 7, 8, 10},
        "basic": {1, 2, 8, 9},
        "moderate": {3, 5, 6, 7, 10},
        "hard": {4},
    },
    "https://www.sanfoundry.com/python-puzzles/": {  # Argument Passing - 1
        "must_practice": {3, 6, 7, 8, 9, 10},
        "basic": {1, 4, 5},
        "moderate": {2, 3, 6, 7, 9},
        "hard": {8, 10},
    },
    "https://www.sanfoundry.com/tricky-python-questions-answers/": {  # Argument Passing - 2
        "must_practice": {1, 4, 5, 8, 10},
        "basic": {2, 4, 5, 6, 7, 9},
        "moderate": {1, 3, 8},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-questions-answers-global-local-variables-1/": {
        "must_practice": {1, 5, 6, 7, 10, 12},
        "basic": {1, 3, 9, 13},
        "moderate": {2, 4, 7, 8, 10, 11, 12},
        "hard": {5, 6},
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-1/": {
        "must_practice": {1, 3, 4, 6, 8, 10},
        "basic": {1, 2, 6, 7},
        "moderate": {3, 4, 5, 8, 9},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-2/": {
        "must_practice": {1, 4, 7, 8},
        "basic": {1, 2, 3, 4, 7, 10},
        "moderate": {5, 6, 9},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-3/": {
        "must_practice": {2, 4, 7, 10},
        "basic": {1, 4, 7, 8, 9},
        "moderate": {2, 3, 5, 6, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-objective-questions-answers/": {  # Math Module - 1
        "must_practice": {1, 2, 5, 7, 9},
        "basic": {1, 2, 4, 7},
        "moderate": {3, 5, 6, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-questions-answers-datetime-module-1/": {
        "must_practice": {1, 2, 8},
        "basic": {1, 3, 4},
        "moderate": {5, 6, 7, 8, 9, 10},
        "hard": {2},
    },
    # --- Session 6: Tuples ---
    "https://www.sanfoundry.com/python-mcqs-tuples/": {  # Tuples - 1
        "must_practice": {1, 2, 4, 7, 8, 9, 10},
        "basic": {1, 2, 3, 6, 7, 9},
        "moderate": {4, 5, 8},
        "hard": {10},
    },
    "https://www.sanfoundry.com/python-questions-answers-tuples-2/": {
        "must_practice": {1, 4, 6, 7, 8, 10},
        "basic": {2, 5, 8},
        "moderate": {1, 3, 4, 6, 7, 9, 10},
        "hard": set(),
    },
    # --- Sessions 7 & 8: Advanced Python (OOP, Inheritance, Polymorphism, Encapsulation, Decorators, Regex) ---
    "https://www.sanfoundry.com/python-questions-answers-classes-objects-1/": {
        "must_practice": {2, 3, 4, 5, 7, 9, 11, 12},
        "basic": {1, 2, 3, 4, 5, 8, 10},
        "moderate": {6, 7, 11, 12},
        "hard": {9},
    },
    "https://www.sanfoundry.com/python-questions-answers-encapsulation/": {
        "must_practice": {2, 3, 5, 6, 8, 10, 13},
        "basic": {1, 2, 5, 7, 9, 10},
        "moderate": {3, 4, 6, 11, 12, 13, 14},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-inheritance-1/": {
        "must_practice": {1, 2, 4, 8, 10, 14, 15},
        "basic": {1, 2, 5, 11, 12, 13, 15},
        "moderate": {6, 7, 8, 9, 10},
        "hard": {3, 4, 14},
    },
    "https://www.sanfoundry.com/python-questions-answers-inheritance-2/": {
        "must_practice": {1, 3, 6, 8, 9, 10, 13},
        "basic": {1, 2, 6, 8},
        "moderate": {3, 4, 5, 7, 9, 10, 11, 12},
        "hard": {13},
    },
    "https://www.sanfoundry.com/python-questions-answers-polymorphism/": {
        "must_practice": {1, 3, 4, 6, 8, 9, 12, 14},
        "basic": {1, 2, 3, 6, 7, 15},
        "moderate": {4, 5, 10, 13, 14},
        "hard": {8, 9, 11, 12},
    },
    "https://www.sanfoundry.com/python-interview-questions-answers-experienced/": {  # Operator Overloading
        "must_practice": {1, 2, 3, 5, 8, 10},
        "basic": {3, 5, 9, 10},
        "moderate": {1, 2, 4, 6, 7},
        "hard": {8},
    },
    "https://www.sanfoundry.com/python-questions-answers-decorators/": {
        "must_practice": {1, 3, 5, 7, 8, 9, 13, 14, 15},
        "basic": {2, 3, 6, 11},
        "moderate": {1, 4, 5, 7, 9, 10, 12, 13, 14},
        "hard": {8, 15},
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-1/": {
        "must_practice": {1, 2, 3, 5, 6, 7, 10},
        "basic": {1, 2, 3, 10},
        "moderate": {4, 5, 7, 8, 9},
        "hard": {6},
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-3/": {
        "must_practice": {1, 2, 3, 5, 6, 8, 13},
        "basic": {2, 3, 6, 10},
        "moderate": {4, 7, 9, 11, 12},
        "hard": {1, 5, 8, 13},
    },
    # --- Session 9: Exception Handling & Generators ---
    "https://www.sanfoundry.com/python-questions-answers-exception-handling/": {
        "must_practice": {2, 3, 5, 6, 7, 9},
        "basic": {1, 3, 4, 6, 8, 10},
        "moderate": {2, 5},
        "hard": {7, 9},
    },
    "https://www.sanfoundry.com/python-questions-answers-exception-handling-2/": {
        "must_practice": {2, 3, 4, 5, 6, 7, 8, 10},
        "basic": {1, 9},
        "moderate": {2, 3, 4, 7, 10},
        "hard": {5, 6, 8},
    },
    "https://www.sanfoundry.com/python-questions-answers-exception-handling-3/": {
        "must_practice": {2, 3, 4, 5, 7, 8, 13, 14},
        "basic": {2, 3, 4, 11, 12, 13, 14, 15},
        "moderate": {1, 5, 6, 7, 9, 10},
        "hard": {8},
    },
    # --- Session 12: File Handling ---
    "https://www.sanfoundry.com/python-mcqs-files-1/": {
        "must_practice": {1, 4, 5, 6, 7, 8, 10},
        "basic": {1, 2, 3, 5, 6, 8, 9, 10},
        "moderate": {4},
        "hard": {7},
    },
    "https://www.sanfoundry.com/python-certification-questions-answers/": {  # Files - 2
        "must_practice": {4, 5, 8, 9, 10},
        "basic": {1, 2, 6, 7},
        "moderate": {3, 4, 5, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-scripting-questions-answers/": {  # Files - 3
        "must_practice": {4, 5, 6, 8, 9},
        "basic": {1, 4, 5, 6, 7},
        "moderate": {2, 3, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-scripting-interview-questions-answers/": {  # Files - 4
        "must_practice": {10},
        "basic": {1, 2, 3, 4, 5, 6, 7, 8, 9},
        "moderate": {10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/python-written-test-questions-answers/": {  # Files - 5
        "must_practice": {1, 2, 4, 7, 8, 9},
        "basic": {3, 5, 6, 7, 8},
        "moderate": {1, 4, 9, 10},
        "hard": {2},
    },
}


def consolidate_python_syllabus_topic(raw_syl: str, sf_topic: str, category: str) -> str:
    """Map detailed Python session labels into consolidated PGCP-BDA Syllabus Session groups."""
    if category == "REMOVE" or raw_syl.startswith("Excluded"):
        return "Excluded / Out of Syllabus (Turtle Graphics, Low-Level OS Calls & Python 2 Obsolete)"
    s = raw_syl.lower()
    if "session 13" in s or "virtual environment" in s or "pip" in s:
        return "Session 13: Virtual Environments, PIP, Database Connectivity (PyMongo) & Packaging"
    if "session 12" in s or sf_topic.startswith("Files"):
        return "Session 12: File Handling (Read, Write, Seek, Tell, Modes & Context Managers)"
    if "session 9" in s or sf_topic.startswith("Exception Handling"):
        return "Session 9: Exception Handling, Assertions, Generators & Standard Exceptions"
    if (
        "sessions 7 & 8" in s
        or "sessions 7–8" in s
        or sf_topic in ("Classes & Objects-1", "Classes & Objects-2", "Encapsulation", "Inheritance-1", "Inheritance-2", "Polymorphism", "Operator Overloading", "Decorators")
        or sf_topic.startswith("Regular Expressions")
    ):
        return "Sessions 7 & 8: Advanced Python — OOP, Inheritance, Polymorphism, Regex & Decorators"
    if "session 6" in s or sf_topic.startswith("Tuples"):
        return "Session 6: Tuples, Tuple Packing/Unpacking & Zip Operations"
    if (
        "session 5" in s
        or sf_topic.startswith("Functions")
        or sf_topic.startswith("Argument Passing")
        or sf_topic.startswith("Global vs Local")
        or sf_topic.startswith("Built-in Functions")
        or sf_topic.startswith("Math Module")
        or sf_topic.startswith("Datetime Module")
    ):
        return "Session 5: Functions, Argument Passing, Lambda/Map/Filter, Built-ins & Modules"
    if "session 4" in s or sf_topic.startswith("Lists") or sf_topic.startswith("List Comprehension"):
        return "Session 4: Lists, List Operations, Shallow/Deep Copy & List Comprehension"
    if "session 3" in s or sf_topic.startswith("Dictionary") or sf_topic.startswith("Sets"):
        return "Session 3: Dictionaries, Dictionary Comprehension & Sets"
    if "session 2" in s or sf_topic.startswith("Strings") or sf_topic.startswith("Formatting") or sf_topic == "Advanced Formatting":
        return "Session 2: Strings, Slicing, String Methods & String Formatting"
    return "Session 1: Python Fundamentals, Data Types, Operators & Control Flow (If-Else, Loops)"


def infer_python_warning(question_text: str, sf_topic: str) -> str | None:
    """Attach a helpful Python 3.10+ / Faculty Study Note where relevant."""
    if "cmp(" in question_text:
        return (
            "Python 3 Note: Built-in cmp(a, b) was removed in Python 3; use (a > b) - (a < b) or relational operators."
        )
    if "round(" in question_text:
        return (
            "Python 3 Note: round() uses round-half-to-even (banker's rounding) in Python 3, e.g. round(0.5) == 0 and round(1.5) == 2."
        )
    if sf_topic.startswith("Encapsulation") or "__" in question_text and "class " in question_text and "__init__" in question_text:
        if re.search(r"self\.__[a-zA-Z0-9]+\b", question_text):
            return (
                "Faculty OOP Note (studentclass_basic.py / accountclass.py): Attributes prefixed with __ (like self.__sid) "
                "are private via name mangling (_ClassName__attr) and accessed via getters/setters."
            )
    if "match" in sf_topic.lower() or "re.match" in question_text or "re.search" in question_text:
        return (
            "Faculty Regex Note (regexpdemo.py): re.match() checks only at the beginning of the string (index 0), "
            "whereas re.search() scans anywhere in the string."
        )
    return None


def build_python_questions_json() -> Path | None:
    """Extract all saved HTML pages in `PythonSaved/`, map them to the PGCP-BDA Python syllabus,
    short-pick the best Must-Practice MCQs across Basic/Moderate/Hard levels, and write `python_questions.json`."""
    python_dir = ROOT / "PythonSaved"
    if not python_dir.is_dir():
        return None
    html_files = sorted(python_dir.glob("*.html"))
    if not html_files:
        return None

    from open_python_pages import HUB_HTML, TOPIC_SYLLABUS_MAP, get_ordered_topics
    from parser import parse_page
    from scraper import normalize_text

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
        difficulty: str,
    ) -> None:
        exact_sig = (
            q_obj.question.strip(),
            "|".join(f"{k}:{normalize_text(v)}" for k, v in sorted(q_obj.options.items())),
        )
        loose_q = re.sub(r"\bthe\b", " ", normalize_text(q_obj.question))
        loose_q = re.sub(r"\s+", " ", loose_q).strip()
        loose_sig = (loose_q, frozenset(normalize_text(v) for v in q_obj.options.values()))

        if exact_sig in seen_exact or loose_sig in seen_loose:
            return
        seen_exact.add(exact_sig)
        seen_loose.add(loose_sig)

        syl_group = consolidate_python_syllabus_topic(raw_syl, sf_topic, cat)
        raw_records.append(
            {
                "topic": sf_topic,
                "category": cat,
                "difficulty": difficulty,
                "must_practice": cat == "KEEP",
                "syllabus_topic": syl_group,
                "syllabus_detail": raw_syl,
                "reason": reason,
                "faculty_alignment": raw_syl,
                "warning": infer_python_warning(q_obj.question, sf_topic),
                "question": q_obj.question,
                "options": q_obj.options,
                "correct_answer": q_obj.correct_answer,
                "explanation": q_obj.explanation,
                "source_url": src_url,
            }
        )

    # 1. Process all 80 saved topic pages in chronological PGCP-BDA syllabus order
    for norm_u in ordered_urls:
        page = pages_by_url[norm_u]
        meta = TOPIC_SYLLABUS_MAP.get(norm_u, {})
        base_topic = meta.get("topic") or page.topic or "Core Python"
        base_cat = meta.get("category", "SELECTIVE")
        base_syl = meta.get("syllabus_topic", base_topic)
        base_reason = meta.get("reason", "")
        curation = PYTHON_PAGE_CURATION.get(norm_u)

        for q in page.questions:
            qnum = int(q.number or 0)
            q_topic = base_topic
            q_syl = base_syl
            q_reason = base_reason

            # Determine difficulty (Basic / Moderate / Hard)
            if curation:
                if qnum in curation["hard"]:
                    diff = "Hard"
                elif qnum in curation["moderate"]:
                    diff = "Moderate"
                else:
                    diff = "Basic"
            else:
                diff = "Moderate" if "\n" in q.question else "Basic"

            # Determine category (KEEP = Must-Practice Shortlist, SELECTIVE = Priority 2 Extra Practice, REMOVE = Excluded)
            if base_cat == "REMOVE":
                if norm_u == "https://www.sanfoundry.com/python-exam-questions-answers/" and qnum in (1, 7, 9):
                    q_cat = "SELECTIVE"
                    q_syl = "Session 12: File & Directory Handling (os.name, os.getcwd, os.mkdir)"
                    q_reason = "os.getcwd() and os.mkdir() are useful directory operations alongside Session 12 File Handling."
                    diff = "Basic"
                else:
                    q_cat = "REMOVE"
            elif norm_u == "https://www.sanfoundry.com/python-questions-answers-numeric-types/" and qnum == 7:
                q_cat = "REMOVE"
                q_syl = "Excluded (Python 2 Obsolete cmp() function)"
                q_reason = "Built-in cmp(3, 1) was removed in Python 3."
                diff = "Basic"
            elif curation:
                if qnum in curation["must_practice"]:
                    q_cat = "KEEP"
                    q_reason = f"[Must-Practice {diff} MCQ] {base_reason}"
                else:
                    q_cat = "SELECTIVE"
                    q_reason = f"[Extra Practice — {diff}] {base_reason}"
            else:
                q_cat = base_cat

            register_question(
                q,
                src_url=norm_u.rstrip("/"),
                sf_topic=q_topic,
                cat=q_cat,
                raw_syl=q_syl,
                reason=q_reason,
                difficulty=diff,
            )

    # 2. Process unique questions from the 1000 Python MCQ hub page
    if hub_page and hub_page.questions:
        hub_url = (hub_page.url or "https://www.sanfoundry.com/1000-python-questions-answers/").rstrip("/")
        # qnum -> (topic, category, difficulty, syllabus_detail, reason)
        hub_q_map: dict[int, tuple[str, str, str, str, str]] = {
            1: ("Python Overview & PVM", "KEEP", "Basic", "Session 1 & Day 1a Notes: Introduction to Python", "[Must-Practice Basic MCQ] Creator of Python (Guido van Rossum) — Day 1a Notes."),
            2: ("Python Overview & PVM", "KEEP", "Basic", "Session 1 & Day 1a Notes: Features of Python", "[Must-Practice Basic MCQ] Python supports procedural, OOP, and functional programming."),
            4: ("Python Overview & PVM", "SELECTIVE", "Basic", "Session 1: Python File Extension (.py)", "[Extra Practice — Basic] Standard .py source file extension."),
            5: ("Python Overview & PVM", "KEEP", "Moderate", "Session 1 & Day 1a Notes: PVM Bytecode Compilation & Interpretation", "[Must-Practice Moderate MCQ] Python is both compiled (.pyc bytecode) and interpreted by PVM (Day 1a Notes)."),
            7: ("Precedence & Associativity-1", "SELECTIVE", "Basic", "Session 1: Operator Precedence", "[Extra Practice — Basic] Modulo % has higher precedence than addition +."),
            8: ("Core Data Types", "KEEP", "Basic", "Session 1 & Day 1b Notes: Indentation for Code Blocks", "[Must-Practice Basic MCQ] Python uses indentation to define code blocks (Day 1b Notes)."),
            9: ("Functions-1", "SELECTIVE", "Basic", "Session 5: Defining Functions with def", "[Extra Practice — Basic] The def keyword defines a function."),
            10: ("Python Overview & PVM", "SELECTIVE", "Basic", "Session 1: Comments in Python (#)", "[Extra Practice — Basic] Single-line comments use #."),
            11: ("While & For Loops-3", "KEEP", "Moderate", "Session 1: while Loop & Compound Assignment (+=)", "[Must-Practice Moderate MCQ] Space inside '+ =' raises SyntaxError."),
            12: ("Python Overview & PVM", "SELECTIVE", "Basic", "Session 5: sys.version", "[Extra Practice — Basic] Checking Python version via sys.version."),
            14: ("Basic Operators", "SELECTIVE", "Basic", "Session 1: PEMDAS Operator Precedence", "[Extra Practice — Basic] Parentheses -> Exponential -> Multiplication/Division -> Addition/Subtraction."),
            16: ("Virtual Environments & PIP", "KEEP", "Basic", "Session 13 & Setup Notes: pip Package Installer", "[Must-Practice Basic MCQ] pip (Preferred Installer Program) used in Session 13 Virtual Environments."),
            19: ("Basic Operators", "SELECTIVE", "Basic", "Session 1: Floor / Truncation Division (//)", "[Extra Practice — Basic] // is the floor/truncation division operator."),
            23: ("Decorators", "SELECTIVE", "Moderate", "Sessions 7 & 8: Decorator Wrapper (*args, **kwargs)", "[Extra Practice — Moderate] *args and **kwargs allow a decorator to accept any number of parameters."),
            25: ("Core Data Types", "SELECTIVE", "Basic", "Session 1: Core Data Types vs User Class", "[Extra Practice — Basic] Class is a user-defined type, not a built-in core data type."),
            26: ("Formatting-1", "SELECTIVE", "Basic", "Session 2: %.2f Rounding in String Formatting", "[Extra Practice — Basic] %.2f rounds 56.236 to 56.24."),
            27: ("Modules & Packages", "KEEP", "Basic", "Session 5 & 03_Modules_and_Packages: Python Packages", "[Must-Practice Basic MCQ] Definition of a Python package (folder containing modules and __init__.py)."),
            30: ("Global vs Local Variables-1", "KEEP", "Moderate", "Session 5: LEGB Namespace Lookup Order", "[Must-Practice Moderate MCQ] Python resolves identifiers in Local -> Enclosing -> Global -> Built-in order."),
            33: ("Operator Overloading", "SELECTIVE", "Moderate", "Sessions 7 & 8: format(obj) invokes __format__()", "[Extra Practice — Moderate] Built-in format() dispatches to __format__()."),
            34: ("Variable Names", "SELECTIVE", "Basic", "Session 1: Python Keywords vs Built-in eval()", "[Extra Practice — Basic] pass, assert, and nonlocal are keywords; eval is a built-in function."),
            36: ("Argument Passing-2", "SELECTIVE", "Moderate", "Session 5: In-Place List Mutation Preserves id(x)", "[Extra Practice — Moderate] Mutating list elements in-place keeps the same object identity id(x)."),
            38: ("Sets-4", "SELECTIVE", "Moderate", "Session 3: set.add() vs set.update()", "[Extra Practice — Moderate] add() inserts a single element; update() iterates over an iterable."),
            39: ("Strings-1", "SELECTIVE", "Basic", "Session 2: String Operators (+ and * allowed, - invalid)", "[Extra Practice — Basic] Strings support + concatenation and * repetition, but not - subtraction."),
            41: ("Sets-1", "SELECTIVE", "Basic", "Session 3: Creating an Empty Set with set()", "[Extra Practice — Basic] set() creates an empty set ({} creates an empty dictionary)."),
            42: ("List Comprehension-2", "KEEP", "Hard", "Session 4: Chained List Comprehension Filtering", "[Must-Practice Hard MCQ] Traces two-stage list comprehension filtering non-overlapping elements."),
            43: ("Lists-2", "SELECTIVE", "Basic", "Session 4: list.append()", "[Extra Practice — Basic] append() adds a single element to the end of a list."),
            46: ("Functions-1", "SELECTIVE", "Basic", "Session 5: Purpose of Functions", "[Extra Practice — Basic] Functions provide reusable, modular code blocks."),
            47: ("Lists-5", "KEEP", "Basic", "Session 4: 2D Matrix Indexing A[1][2]", "[Must-Practice Basic MCQ] 0-based row and column indexing in a 2D nested list."),
            48: ("Variable Names", "SELECTIVE", "Basic", "Session 1: Identifier Length Rules", "[Extra Practice — Basic] Python identifiers can be of unlimited length."),
            49: ("While & For Loops-6", "KEEP", "Moderate", "Session 1 & Day 2 Notes: while-else with break", "[Must-Practice Moderate MCQ] The else block of a while loop is skipped when the loop terminates via break."),
            51: ("Functions-2", "SELECTIVE", "Basic", "Session 5: Built-in vs User-Defined Functions", "[Extra Practice — Basic] Two main categories of functions in Python."),
            52: ("Lists-4", "SELECTIVE", "Moderate", "Session 4 & Session 5: In-Place += on List Parameter", "[Extra Practice — Moderate] listParam += [1] mutates the caller's list in-place."),
            56: ("Functions-1", "SELECTIVE", "Basic", "Session 5: Python Docstrings (__doc__)", "[Extra Practice — Basic] Docstrings document functions/classes and are accessed via __doc__."),
            58: ("Math Module-1", "KEEP", "Moderate", "Session 5 & Day 3 Notes: math.pow(3, 2) Returns Float", "[Must-Practice Moderate MCQ] Unlike built-in 3**2 (int 9), math.pow(3, 2) always returns a float (9.0)."),
            59: ("Core Data Types", "SELECTIVE", "Basic", "Session 1 & Day 3 Notes: id() Object Identity", "[Extra Practice — Basic] id() returns the unique memory identity of an object."),
            60: ("Lists-7", "KEEP", "Hard", "Session 4, Session 5 & Session 6: map(str, x), join() & Single-Element Tuple", "[Must-Practice Hard MCQ] Combines map(str, [[0], [1]]), ' '.join(), and trailing-comma tuple syntax ('[0] [1]',)."),
            61: ("Files-3 & Pickling", "KEEP", "Basic", "Session 5: Pickling (Object Serialization)", "[Must-Practice Basic MCQ] Pickling converts a Python object hierarchy into a byte stream (explicitly in Session 5)."),
        }
        for q in hub_page.questions:
            qnum = int(q.number or 0)
            t_name, cat, diff, raw_syl, reason = hub_q_map.get(
                qnum,
                ("Python Overview & PVM", "SELECTIVE", "Basic", "Session 1: Introduction to Python", "Core Python overview question."),
            )
            register_question(
                q,
                src_url=hub_url,
                sf_topic=t_name,
                cat=cat,
                raw_syl=raw_syl,
                reason=reason,
                difficulty=diff,
            )

    # Sort questions by consolidated syllabus session order -> priority (KEEP -> SELECTIVE -> REMOVE) -> difficulty (Basic -> Moderate -> Hard)
    session_order_list = [
        "Session 1: Python Fundamentals, Data Types, Operators & Control Flow (If-Else, Loops)",
        "Session 2: Strings, Slicing, String Methods & String Formatting",
        "Session 3: Dictionaries, Dictionary Comprehension & Sets",
        "Session 4: Lists, List Operations, Shallow/Deep Copy & List Comprehension",
        "Session 5: Functions, Argument Passing, Lambda/Map/Filter, Built-ins & Modules",
        "Session 6: Tuples, Tuple Packing/Unpacking & Zip Operations",
        "Sessions 7 & 8: Advanced Python — OOP, Inheritance, Polymorphism, Regex & Decorators",
        "Session 9: Exception Handling, Assertions, Generators & Standard Exceptions",
        "Session 12: File Handling (Read, Write, Seek, Tell, Modes & Context Managers)",
        "Session 13: Virtual Environments, PIP, Database Connectivity (PyMongo) & Packaging",
        "Excluded / Out of Syllabus (Turtle Graphics, Low-Level OS Calls & Python 2 Obsolete)",
    ]
    order_index = {name: i for i, name in enumerate(session_order_list)}
    cat_order = {"KEEP": 0, "SELECTIVE": 1, "REMOVE": 2}
    diff_order = {"Basic": 0, "Moderate": 1, "Hard": 2}

    raw_records.sort(
        key=lambda r: (
            order_index.get(r["syllabus_topic"], 99),
            cat_order.get(r["category"], 9),
            diff_order.get(r["difficulty"], 9),
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

    keep_qs = [q for q in questions if q["category"] == "KEEP"]
    python_json_data = {
        "subject": "Python Programming — Fundamentals, Data Structures, Functional, Regex, OOP, Exceptions & File I/O",
        "syllabus": "PGCP-BDA (ACTS, Pune) — Python Programming (Sessions 1–13)",
        "source": "Sanfoundry",
        "total_questions": len(questions),
        "counts": {
            "KEEP": len(keep_qs),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "difficulty_counts": {
            "ALL": {
                "Basic": sum(1 for q in questions if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in questions if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in questions if q["difficulty"] == "Hard"),
            },
            "KEEP": {
                "Basic": sum(1 for q in keep_qs if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in keep_qs if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in keep_qs if q["difficulty"] == "Hard"),
            },
        },
        "topics": topics,
        "syllabus_markdown": PYTHON_SYLLABUS_MD,
        "questions": questions,
    }

    out_path = ROOT / "python_questions.json"
    out_path.write_text(json.dumps(python_json_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Also write the standalone Must-Practice Shortlist CSV and Markdown study guide in Resource/
    res_dir = ROOT / "Resource"
    res_dir.mkdir(parents=True, exist_ok=True)
    csv_path = res_dir / "Python_Must_Practice_Shortlist.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["Question ID", "Difficulty", "Syllabus Session", "Sanfoundry Topic", "Question Stem", "Correct Answer", "Faculty Alignment"])
        for q in keep_qs:
            stem_one_line = " | ".join(ln.strip() for ln in q["question"].splitlines() if ln.strip())
            writer.writerow([q["id"], q["difficulty"], q["syllabus_topic"], q["topic"], stem_one_line, q["correct_answer"], q["syllabus_detail"]])

    return out_path


LINUX_CLOUD_SYLLABUS_MD = """# Linux Programming & Cloud Computing — PGCP-BDA (ACTS, Pune)
**Duration:** 60 Hours (28 Theory + 22 Lab + 10 Self Learning — Linux: 8T + 10L + 2SL, Cloud: 20T + 12L + 8SL)  
**Evaluation:** Theory Exam – 40%, Lab Exam – 40%, Internal Assessment – 20%  
**Reference Books:**
1. *Operating System Concepts*, Global Edition, Abraham Silberschatz, Peter B. Galvin, Greg Gagne / Wiley
2. *Pro Git*, 2nd Edition, Scott Chacon, Ben Straub / O'Reilly
3. *Docker Deep Dive*, 2020 Edition, Nigel Poulton / O'Reilly

---

# I. Linux Programming (8T + 10L + 2SL)

## Linux Session 1: Linux Fundamentals and Basic Commands (2T + 4L)
- Linux History and Operations
- Installing and Configuring Linux (Ubuntu): Installation & Media Types, Custom Linux Server Installation, Run Levels (`0–6`, `S`, `/etc/inittab`, `init` PID 1) & Startup/Shutdown Sequence, Logging In & Out (`su`, `sudo`, `who`, `whoami`, `passwd`, `/etc/passwd`, `/etc/shadow`)
- Basic Commands: `ls`, `cp`, `mv`, `sort`, `grep`, `cat`, `head`, `tail`, `man`, `locate`, `find`, `diff`, `file`, `rm`, `mkdir`, `rmdir`, `cd`, `pwd`, `ln` and `ln -s` (Hard vs Symbolic Links & Inodes), `gzip` and `gunzip`, `zip` and `unzip`, `tar` and its variants, `touch`, `echo`, `who`, `whoami`, `ps`, `kill`, `makefile` (`make`), etc.
- **Lab:** Getting acquainted with the Linux environment; as `root`, create directory `dbda/test` and create 100 files `file1..file100` using a single command (`mkdir -p dbda/test && touch dbda/test/file{1..100}`)

## Linux Session 2: Linux File Management and Permissions (2T + 2L)
- Gaining Confidence with Linux: Access Control Lists (`setfacl`, `getfacl`) and `chmod` (octal `764`, `755`, symbolic `u/g/o/a`, `umask`, SUID `4000`, SGID `2000`, Sticky Bit `1000`/`+t`), `chown` and `chgrp` commands
- Remote Commands: `telnet`, `ftp`, `ssh`, and `sftp`
- Basics of I/O System with `mount` and `unmount` (`df`, `du`, `/etc/fstab`, `ext4` journaling, `/dev`, `/mnt`, `/media`)
- `vi` / `vim` / `gedit` Editor: Features & modes of `vi` (Command, Insert, Ex/Last-line), editing, find and replace (`/` and `?`, `:s`), cut-copy-paste (`yy`, `dd`, `p`, `x`, `X`), `:set nu`, `:set ai`, `:wq`, `:q!`
- **Lab:** Create `/tmp/acl_file`; allow Larry and Curly `rwx`, deny Moe (`---`), and allow group `stooges` (except Moe) `rw-` using ACLs

## Linux Sessions 3 & 4: Shell Programming (4T + 4L + 2SL)
- Introduction to Shells: Types of Linux shells, Bourne Again Shell (`bash`), Shell variables (environment `env`/`export` and user-defined), Shell startup files (`.bashrc`, `.profile`, `.bash_profile`, `.bash_logout`, `/etc/profile`), Positional parameters (`$0`, `$1..$9`, `$#`, `$*`, `$@`, `$?`, `$$`, `$!`)
- Simple Scripts: User variables, single vs double quotes, `expr` arithmetic, multiple commands, Wildcards (`*` and `?`), Command-line arguments, `read` and `echo` commands, `tput` command
- Taking Decisions & Loops: `if-then-fi`, `if-then-else-fi`, Nested `if-else`, `test` / `[ ... ]` command (file tests `-e`, `-f`, `-d`; string tests `-n`, `-z`, `=`; numeric tests `-eq`, `-gt`, `-lt`), `case` control structure, `while`, `until`, and `for` loops, `break` and `continue` statements
- Advanced Shell Features: Shell metacharacters & I/O redirection (`>`, `>>`, `<`, `2>`, `2>&1`, `/dev/null`, `|`), Command-line expansion, Directory stacks manipulation (`dirs`, `pushd`, `popd`), Job control, history, and processes (`bg`, `fg`, `&`, `jobs`, `wait`, `nohup`, `kill`), Built-ins (`alias`, `export`, `eval`, `exec`, `type`, `ulimit`) and Shell functions
- **Lab:** Change shell of `user3` to `nologin` and test `su - user3`; create `dbda/filewithacl` with ACLs so only `user5` has `rw` access

---

# II. Cloud Computing & DevOps (20T + 12L + 8SL)

## Cloud Session 1: Git and GitHub Fundamentals (2T + 2L + 1SL)
- Introduction to Version Control Systems (VCS)
- Creating a GitHub repository, Using Git & Git CLI workflow (`git init`, `git status`, `git add .`, `git add -u`, `git commit -m`, `git log`, `git diff`, `git branch`, `git checkout -b`, `git merge`, `git rebase`, `git push`, `git clone`, GitHub Forking)
- **Lab:** Local Git repo creation, staging/committing, branch creation/switching/merging, conflict resolution, pushing & cloning with GitHub

## Cloud Session 2: Introduction to Cloud Computing (2T)
- Introduction to Cloud paradigms, Definition, Characteristics and Components (On-demand self-service, Broad network access, Resource pooling, Rapid elasticity, Measured / Pay-as-you-go utility service)
- Benefits & Limitations (CapEx to OpEx shift, TCO, SLAs, WAN latency, security/privacy)
- Understanding Cloud Vendors (AWS, Microsoft Azure, Google Cloud Platform) & Deployment Models (Public, Private, Community, Hybrid)

## Cloud Sessions 3 & 4: Cloud Service Models and Virtualization (4T + 1SL)
- Service Models (SPI Model):
  - **SaaS:** Introduction, Pros & Cons, Traditional Packaged Software vs SaaS, Multi-tenancy, Subscription licensing, Examples (Salesforce, Google Workspace, Dropbox)
  - **PaaS:** Introduction, Development frameworks, Vendor lock-in considerations, Examples (AWS Elastic Beanstalk, Google App Engine, Heroku, Azure)
  - **IaaS:** Introduction, Virtualized compute/storage/network, Workloads & Availability Zones, Examples (AWS EC2, Rackspace, DigitalOcean)
- Virtualization & Hypervisors:
  - Introduction to Virtualization, Types & Uses (Hardware/Full Virtualization, Paravirtualization, Emulation, OS/Container Virtualization, Storage/Network Virtualization)
  - Hypervisors (VMM): Type 1 Bare-Metal (Xen, KVM, VMware ESXi, Microsoft Hyper-V) vs Type 2 Hosted (VirtualBox, VMware Player)
  - Virtual Machine Provisioning (AMIs, OVF Virtual Appliances) & VM Live Migration Services (VMware VMotion, Storage VMotion)
  - Private Cloud Deployment, Challenges of Cloud Environment, Comparisons of Web Services (`REST` vs `SOAP`/`WSDL`), Organizational Scenarios

## Cloud Sessions 5 & 6: Cloud Services and Application Deployment (4T + 4L + 1SL)
- Administering & Monitoring Cloud Services (Capacity planning, baseline metrics, load testing, CloudWatch, Ganglia/Zabbix, SLAs/QoS)
- Benefits and Limitations, Deploying Applications over the Cloud (Application attributes, LAMP stack AMIs, virtual appliances/containers)
- Comparison among SaaS, PaaS, and IaaS; Cloud Products, Compute & Storage Solutions (Managed vs Unmanaged storage, Point-in-time snapshots, 3-2-1 backup rule)

## Cloud Session 7: Cloud Architecture (2T + 1SL)
- Overview of Cloud Architecture (Front-end client vs Back-end cloud stack, stateless composable services)
- Key Architectural Principles: Scalability (Horizontal Scale-Out vs Vertical Scale-Up), High Availability, Fault Tolerance & Redundancy ($1 - (1 - r)^n$)
- Multi-tier Architecture in Cloud, Serverless vs Microservices vs Monolithic Architecture
- Cloud Design Patterns: Load Balancing (ADC, weighted load balancing, Elastic Load Balancing), Auto-Scaling, Caching (CDN)
- Shared Responsibility Model & Security Service Boundary across IaaS, PaaS, and SaaS

## Cloud Sessions 8 & 9: AWS & Microsoft Azure (4T + 4L + 2SL)
- **Amazon Web Services (AWS):**
  - Elastic Compute Cloud (**EC2**): AMIs, Instance types (`Micro`, `Small`, `High-CPU`, `High-Memory`), Launching & accessing Linux and Windows Server VMs
  - **Virtual Private Cloud (VPC)** setup, Subnets, Security Groups, Regions & Availability Zones
  - AWS Core Services: **EC2**, **AWS Lambda** (Serverless), **Amazon S3** (Object Storage), **EBS** (Elastic Block Store), **RDS**, **CloudFront** (CDN), **Auto Scaling**, **CloudWatch**, **SQS/SNS**, **EMR** (Hadoop on EC2)
- **Introduction to Microsoft Azure:**
  - Azure Platform Overview (Compute Web Role & Worker Role, Fabric Controller)
  - Azure Data Services (**SQL Azure** relational database)
  - **Azure Storage** (Blobs, Tables, Queues — 3x replication, Azure CDN) & **Azure Functions**
- **Lab:** Create AWS EC2 instance, AWS Lambda, Amazon S3 bucket, AWS VPC, and deploy an application on AWS using GitHub

## Cloud Session 10: Introduction to DevOps & Docker (2T + 2L + 2SL)
- DevOps Lifecycle Overview (`Plan` → `Code` → `Build` → `Test` → `Deploy` → `Monitor`), Agile vs DevOps, Introduction to CI/CD
- Introduction to Containerization (**Docker**): Images vs Containers, `Dockerfile`, Basic Docker commands (`docker build`, `docker run`, `docker stop`, `docker ps`, `docker pull`, `docker push`, `docker exec`)
- **Lab:** Set up Docker, write a `Dockerfile` for an ML application, build image, run container & test ML API endpoint, push image to Docker Hub
"""


# Question-level curation for all core Linux & Cloud Sanfoundry pages:
# - "must_practice": Hand-picked Must-Practice Shortlist (assigned category="KEEP") across Basic, Moderate, and Hard levels
# - "basic" / "moderate" / "hard": Explicit per-question difficulty classification
# - "remove": Broken figure-dependent questions (with blank A/B/C options) or out-of-scope questions on otherwise good pages
LINUX_CLOUD_PAGE_CURATION: dict[str, dict[str, set[int]]] = {
    # =========================================================================
    # PART I: LINUX PROGRAMMING (Sessions 1–4)
    # =========================================================================
    # --- Linux Session 1: Linux Fundamentals, Boot/Run Levels & Basic Commands ---
    "https://www.sanfoundry.com/linux-administration-questions-startup-shutdown/": {
        "must_practice": {1, 2, 3, 6, 7, 10, 11, 12},
        "basic": {3, 4, 5, 7, 11},
        "moderate": {1, 2, 6, 8, 9, 10, 12},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-filesystem-hierarchy-questions-answers-1/": {
        "must_practice": {1, 2, 3, 4, 5, 7, 9},
        "basic": {3, 5, 8, 9, 10},
        "moderate": {1, 2, 4, 6, 7},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-filesystem-hierarchy-questions-answers-2/": {
        "must_practice": {2, 3, 4, 5, 6, 8, 10},
        "basic": {1, 2, 3, 6},
        "moderate": {4, 5, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-administration-multiple-choice-questions-2/": {
        "must_practice": {1, 3, 4, 6, 7, 8, 9, 10},
        "basic": {4, 5, 7, 8},
        "moderate": {1, 2, 3, 6, 10},
        "hard": {9},
    },
    "https://www.sanfoundry.com/linux-administration-questions-freshers/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 10, 11},
        "basic": {1, 8, 9, 11},
        "moderate": {2, 3, 5, 6, 7, 10},
        "hard": {4},
    },
    "https://www.sanfoundry.com/linux-administration-quiz-file-types/": {
        "must_practice": {1, 2, 5, 6, 7, 8, 9},
        "basic": {2, 4, 6, 9, 12},
        "moderate": {1, 3, 5, 7, 10, 11},
        "hard": {8},
    },
    "https://www.sanfoundry.com/linux-administration-questions-process-mgmt/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12},
        "basic": {2, 3, 4, 5},
        "moderate": {1, 6, 7, 8, 10, 11, 12},
        "hard": {9},
    },
    "https://www.sanfoundry.com/linux-administration-questions-account-mgmt/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 9, 11, 12},
        "basic": {2, 6, 7, 8},
        "moderate": {1, 3, 4, 5, 9, 10, 11},
        "hard": {12},
    },
    "https://www.sanfoundry.com/linux-questions-search-pattern-matching/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},
        "basic": {1, 11, 12},
        "moderate": {2, 3, 4, 5, 6, 7, 8, 10},
        "hard": {9},
    },
    "https://www.sanfoundry.com/makefile-questions-answers-1/": {
        "must_practice": {1, 2, 3, 6, 7, 10},
        "basic": {1, 3, 5},
        "moderate": {2, 4, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-interview-questions-experienced/": {
        "must_practice": {1, 3, 4, 5, 10, 11},
        "basic": {1, 4},
        "moderate": {2, 3, 5, 7, 10, 11, 12, 13},
        "hard": {6, 8, 9},
    },
    "https://www.sanfoundry.com/unix-internals-interview-questions/": {
        "must_practice": {1, 2, 4, 5, 6, 13, 15},
        "basic": {1, 2},
        "moderate": {3, 4, 5, 6, 7, 8, 9, 13, 15},
        "hard": {10, 11, 12, 14},
    },
    "https://www.sanfoundry.com/unix-interview-questions-answers/": {
        "must_practice": {2, 3, 4, 5, 6, 10},
        "basic": {2, 3, 10},
        "moderate": {1, 4, 5, 6, 7, 8, 9},
        "hard": {11},
    },

    # --- Linux Session 2: File Management, Permissions (chmod/umask/ACL) & Vi Editor ---
    "https://www.sanfoundry.com/linux-questions-file-modes-permissions/": {
        "must_practice": {1, 2, 3, 4, 5, 8, 9, 10, 11},
        "basic": {1, 2, 11},
        "moderate": {3, 4, 5, 8, 9, 10},
        "hard": {6, 7},
    },
    "https://www.sanfoundry.com/linux-dumps-redhat-ubuntu-suse/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11},
        "basic": {3, 4, 5, 6, 8},
        "moderate": {1, 2, 7, 11},
        "hard": {9, 10},
    },
    "https://www.sanfoundry.com/linux-questions-file-systems/": {
        "must_practice": {1, 2, 5, 6, 7, 8},
        "basic": {1, 6, 7},
        "moderate": {2, 3, 4, 5, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-questions-answers-vi-editor/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 10},
        "basic": {1, 2, 4, 7, 10},
        "moderate": {3, 5, 6, 8, 9},
        "hard": set(),
    },

    # --- Linux Sessions 3 & 4: Shell Programming (Bash, Redirection, Variables, Loops) ---
    "https://www.sanfoundry.com/linux-administration-questions-bash-shell/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8},
        "basic": {1, 7, 8},
        "moderate": {2, 3, 4, 5, 6},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-shell-environment-mcq-2/": {
        "must_practice": {2, 4, 5, 6, 7, 8},
        "basic": {4, 5, 7},
        "moderate": {1, 2, 3, 6, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-administration-interview-questions-shell/": {
        "must_practice": {1, 2, 3, 4, 5, 8},
        "basic": {1, 4, 5},
        "moderate": {3, 6, 7, 8},
        "hard": {2, 9},
    },
    "https://www.sanfoundry.com/unix-administration-interview-questions-shell/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {4, 5, 6, 8},
        "moderate": {1, 2, 3, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/linux-shell-programming-mcq-1/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12},
        "basic": {2, 4, 5},
        "moderate": {1, 3, 6, 8, 11, 12},
        "hard": {7, 9, 10},
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-1/": {
        "must_practice": {1, 4, 5, 8, 9},
        "basic": {1, 4, 8},
        "moderate": {2, 3, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-2/": {
        "must_practice": {1, 2, 4, 5, 7, 8, 9},
        "basic": {1, 4, 8, 9},
        "moderate": {2, 3, 5, 6, 7, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-3/": {
        "must_practice": {1, 2, 4, 5, 6, 7, 8, 9, 10},
        "basic": {1, 4, 7, 8},
        "moderate": {2, 3, 6, 9, 10},
        "hard": {5},
    },
    "https://www.sanfoundry.com/linux-questions-answers-sed-editor/": {
        "must_practice": {1, 6, 7, 8, 9},
        "basic": {1, 3, 4, 5},
        "moderate": {2, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-basics/": {
        "must_practice": {4, 5, 7, 10},
        "basic": {1, 2, 4, 5, 7},
        "moderate": {3, 6, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-variables-array/": {
        "must_practice": {1, 2},
        "basic": {1, 2},
        "moderate": {3, 4, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },

    # =========================================================================
    # PART II: CLOUD COMPUTING & DEVOPS (Sessions 1–10)
    # =========================================================================
    # --- Cloud Session 1: Git and GitHub Fundamentals ---
    "https://www.sanfoundry.com/data-science-questions-answers-cli-git-workflow-1/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 9, 10},
        "basic": {1, 2, 3, 4, 6, 7, 8, 9, 10},
        "moderate": {5},
        "hard": set(),
    },
    "https://www.sanfoundry.com/data-science-interview-questions-answers/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {1, 2, 4, 5, 6, 10},
        "moderate": {3, 7, 8, 9},
        "hard": set(),
    },

    # --- Cloud Session 2: Introduction to Cloud Computing ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-introduction/": {
        "must_practice": {1, 3, 4, 5, 6, 9, 10},
        "basic": {1, 3, 6, 9, 10},
        "moderate": {2, 4, 5, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-attributes/": {
        "must_practice": {1, 2, 4, 6, 7, 8, 9, 10},
        "basic": {1, 4, 8},
        "moderate": {2, 3, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-benefits-drawbacks/": {
        "must_practice": {3, 4, 6, 7, 8, 10},
        "basic": {4, 8},
        "moderate": {1, 2, 3, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-types-1/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8},
        "basic": {1, 3, 4, 6},
        "moderate": {2, 5, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-interview-questions-answers/": {
        "must_practice": {2, 5, 8, 9, 10},
        "basic": {8, 9, 10},
        "moderate": {1, 2, 3, 4, 5, 6, 7},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-entrance-exams/": {
        "must_practice": {1, 3, 4, 5, 6, 7, 8, 10},
        "basic": {1, 3, 4, 6, 7, 10},
        "moderate": {2, 5, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-laws-cloudonomics/": {
        "must_practice": {1, 8, 10},
        "basic": {1},
        "moderate": {2, 3, 4, 5, 6, 7, 9, 10},
        "hard": {8},
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-computing-costs-1/": {
        "must_practice": {2, 8, 10},
        "basic": {8, 10},
        "moderate": {1, 2, 3, 4, 5, 6, 7, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-freshers/": {
        "must_practice": {1, 3, 6, 7, 9},
        "basic": {3, 6, 9},
        "moderate": {1, 2, 4, 5, 7, 8, 10},
        "hard": set(),
    },

    # --- Cloud Sessions 3 & 4: Cloud Service Models (SaaS, PaaS, IaaS) & Virtualization ---
    "https://www.sanfoundry.com/cloud-computing-saas-interview-questions-answers/": {
        "must_practice": {1, 2, 4, 6, 8, 9, 10},
        "basic": {1, 4, 9},
        "moderate": {2, 3, 5, 6, 7, 8, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-paas-interview-questions-answers/": {
        "must_practice": {1, 2, 3, 4, 5, 7, 8, 10},
        "basic": {1, 4, 8, 10},
        "moderate": {2, 3, 5, 6, 7, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-iaas-interview-questions-answers/": {
        "must_practice": {1, 3, 6, 7, 8},
        "basic": {1, 6, 7},
        "moderate": {2, 3, 4, 5, 8, 9},
        "hard": set(),
        "remove": {10},  # Blank image-only options
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-experienced/": {
        "must_practice": {2, 6, 8, 10},
        "basic": {6, 10},
        "moderate": {1, 2, 3, 4, 5, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-challenges-obstacles/": {
        "must_practice": {1, 2, 4, 7, 9, 10},
        "basic": {1, 9, 10},
        "moderate": {2, 3, 4, 5, 6, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-virtualization-technologies/": {
        "must_practice": {2, 3, 4, 5, 6, 7, 9},
        "basic": {3, 4},
        "moderate": {2, 5, 6, 7, 8, 9, 10},
        "hard": set(),
        "remove": {1},  # Blank image-only options
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-hypervisors-1/": {
        "must_practice": {2, 3, 4, 5, 6, 7, 8, 9},
        "basic": {3, 4, 6},
        "moderate": {1, 2, 5, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-test/": {
        "must_practice": {2, 3, 4, 5, 6, 8, 9, 10},
        "basic": {4, 6},
        "moderate": {1, 2, 3, 7, 8, 9, 10},
        "hard": {5},
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-machine-imaging/": {
        "must_practice": {1, 3, 4, 6, 7, 8, 9, 10},
        "basic": {3, 6, 8},
        "moderate": {1, 2, 4, 5, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-caas-interview-questions-answers/": {
        "must_practice": {7, 10},
        "basic": {7, 10},
        "moderate": {1, 2, 3, 4, 5, 6, 8, 9},
        "hard": set(),
    },

    # --- Cloud Sessions 5 & 6: Cloud Services & Application Deployment ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-computing-stack-1/": {
        "must_practice": {2, 3, 4, 7, 8, 9},
        "basic": {7, 8},
        "moderate": {1, 2, 3, 4, 5, 6, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-interviews-questions-answers-freshers/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 10},
        "basic": {1, 3, 4},
        "moderate": {2, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-connecting-cloud/": {
        "must_practice": {1, 3, 8, 10},
        "basic": {3, 8},
        "moderate": {1, 2, 4, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-application-attributes/": {
        "must_practice": {1, 2, 3, 5, 8},
        "basic": {1, 3},
        "moderate": {2, 4, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-applications-clouds/": {
        "must_practice": {1, 3, 6},
        "basic": {1, 3},
        "moderate": {2, 4, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-campus-interviews/": {
        "must_practice": {1, 2, 4, 7, 8},
        "basic": {1, 4},
        "moderate": {2, 3, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-porting-applications/": {
        "must_practice": {2, 6, 7, 9, 10},
        "basic": {9, 10},
        "moderate": {1, 2, 3, 4, 5, 6, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-capacity-planning/": {
        "must_practice": {2, 4, 6, 8, 9},
        "basic": {4, 8},
        "moderate": {1, 2, 3, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-baseline-measurements/": {
        "must_practice": {3, 7, 10},
        "basic": {3, 10},
        "moderate": {1, 2, 4, 5, 6, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-resource-ceilings/": {
        "must_practice": {1, 4, 5},
        "basic": {1, 4},
        "moderate": {2, 3, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },

    # --- Cloud Session 7: Cloud Architecture & Shared Responsibility Model ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-network-capacity/": {
        "must_practice": {2, 6, 7, 8, 10},
        "basic": {6, 8, 10},
        "moderate": {1, 2, 3, 4, 5, 7, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-online-test/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 8},
        "basic": {1, 6, 8},
        "moderate": {2, 3, 4, 5, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-security/": {
        "must_practice": {1, 2, 3, 7, 8},
        "basic": {1, 3, 8},
        "moderate": {2, 4, 5, 6, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-securing-data/": {
        "must_practice": {1, 2, 3, 6},
        "basic": {1, 3, 6},
        "moderate": {2, 4, 5, 7, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-virtual-storage-containers/": {
        "must_practice": {1, 5, 6},
        "basic": {1},
        "moderate": {2, 3, 4, 5, 6, 7, 8, 9, 10},
        "hard": set(),
    },

    # --- Cloud Sessions 8 & 9: AWS & Microsoft Azure ---
    "https://www.sanfoundry.com/cloud-computing-mcqs/": {
        "must_practice": {2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {3, 6, 7, 10},
        "moderate": {2, 4, 5, 8, 9},
        "hard": set(),
        "remove": {1},  # Blank image-only options
    },
    "https://www.sanfoundry.com/cloud-computing-aws-interview-questions-answers/": {
        "must_practice": {2, 3, 4, 5, 6, 10},
        "basic": {3, 4, 10},
        "moderate": {1, 2, 5, 6, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-server-instance-types/": {
        "must_practice": {2, 4, 7, 10},
        "basic": {4, 10},
        "moderate": {1, 2, 3, 5, 7, 8, 9},
        "hard": set(),
        "remove": {6},  # Blank image-only options
    },
    "https://www.sanfoundry.com/cloud-computing-windows-azure-interview-questions-answers/": {
        "must_practice": {1, 3, 4, 6, 7, 8, 9},
        "basic": {1, 4, 8, 9},
        "moderate": {2, 3, 5, 6, 7, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-azure-content-delivery-network/": {
        "must_practice": {1, 3, 6, 9, 10},
        "basic": {1, 3, 6, 9},
        "moderate": {2, 4, 5, 7, 8, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-windows-azureapp-fabric/": {
        "must_practice": {5, 6, 7, 8},
        "basic": {7},
        "moderate": {1, 2, 3, 4, 5, 6, 8, 9, 10},
        "hard": set(),
    },

    # --- Secondary Storage / Backup / Identity Pages ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-provisioning-cloud-storage-1/": {
        "must_practice": {1, 9},
        "basic": {1, 9},
        "moderate": {2, 3, 4, 5, 6, 7, 8, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-aptitude-test/": {
        "must_practice": {2, 6, 7, 8},
        "basic": {6, 8},
        "moderate": {1, 2, 3, 4, 5, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-backup-solutions/": {
        "must_practice": {1, 7, 9, 10},
        "basic": {1, 7, 10},
        "moderate": {2, 4, 5, 6, 8, 9},
        "hard": set(),
        "remove": {3},  # Blank image-only options
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-backup-types/": {
        "must_practice": {3, 9, 10},
        "basic": {3, 10},
        "moderate": {1, 2, 4, 5, 6, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-backup-features/": {
        "must_practice": {2, 3, 7},
        "basic": {3, 7},
        "moderate": {1, 2, 4, 5, 6, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-identity-protocol-standards/": {
        "must_practice": {1, 4, 6, 8},
        "basic": {1, 8},
        "moderate": {2, 3, 4, 5, 6, 7, 9, 10},
        "hard": set(),
    },
}


def consolidate_linux_cloud_syllabus_topic(raw_syl: str, sf_topic: str, category: str) -> str:
    """Map detailed Linux & Cloud session labels into consolidated PGCP-BDA Syllabus Session groups."""
    if category == "REMOVE" or raw_syl.startswith("Excluded"):
        return "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)"
    s = raw_syl.lower()
    if "cloud session 10" in s or "devops" in s or "docker" in s:
        return "Cloud Session 10: Introduction to DevOps, CI/CD & Containerization (Docker)"
    if "cloud sessions 8 & 9" in s or "cloud sessions 8" in s or "aws" in s or "azure" in s or "ec2" in s:
        return "Cloud Sessions 8 & 9: AWS (EC2, VPC, S3, EBS, RDS, CloudWatch, EMR) & Microsoft Azure"
    if "cloud session 7" in s or "shared responsibility" in s or "security boundary" in s or "horizontal scaling" in s:
        return "Cloud Session 7: Cloud Architecture, Scaling, Load Balancing, Security & Shared Responsibility"
    if "cloud sessions 5" in s or "deploying applications" in s or "capacity planning" in s or "cloud backup" in s or "cloud storage provisioning" in s:
        return "Cloud Sessions 5 & 6: Cloud Services, Application Deployment, Monitoring & Cloud Storage"
    if "cloud sessions 3" in s or "saas" in s or "paas" in s or "iaas" in s or "hypervisor" in s or "virtualization" in s:
        return "Cloud Sessions 3 & 4: Cloud Service Models (SaaS, PaaS, IaaS), Virtualization & Hypervisors"
    if "cloud session 2" in s or "cloud economics" in s or "characteristics & benefits" in s:
        return "Cloud Session 2: Introduction to Cloud Computing (Paradigms, Characteristics, Benefits & Types)"
    if "cloud session 1" in s or "git" in s:
        return "Cloud Session 1: Git & GitHub Fundamentals (Version Control & CLI Workflow)"
    if "linux sessions 3 & 4" in s or "linux sessions 1–4" in s or "shell" in s or "awk" in s or "sed" in s:
        return "Linux Sessions 3 & 4: Shell Programming (Bash Environment, Variables, Redirection, Loops & Filters)"
    if "linux session 2" in s or "permission" in s or "vi/vim" in s or "mount" in s:
        return "Linux Session 2: Linux File Management, Permissions (chmod/umask/ACL), Mounting & Vi Editor"
    return "Linux Session 1: Linux Fundamentals, Boot/Run Levels, FHS, Users, Processes & Basic Commands"


def infer_linux_cloud_warning(question_text: str, sf_topic: str, syl_group: str) -> str | None:
    """Attach a helpful PGCP-BDA Exam / Lab Tip where relevant."""
    ql = question_text.lower()
    if "umask" in ql or "sticky" in ql or "4744" in ql or "2754" in ql or "1755" in ql:
        return (
            "Linux Session 2 Permission Tip: Default base permissions are 666 for regular files and 777 for directories "
            "(subtract umask). Special bits: SUID = 4000 (s on user), SGID = 2000 (s on group), Sticky Bit = 1000 (+t on dir)."
        )
    if "hard link" in ql or "soft link" in ql or "softlink" in ql or "ln " in ql:
        return (
            "Linux Session 1 Link Tip: Hard links (ln) share the same inode number and cannot cross filesystem partitions; "
            "Symbolic/soft links (ln -s) have a new inode, point to the filename path, and can span across partitions."
        )
    if "2>&1" in question_text or "2>" in question_text or "/dev/null" in question_text:
        return (
            "Bash Redirection Tip (Sessions 3 & 4): File descriptors are 0 (stdin), 1 (stdout), and 2 (stderr). "
            "Use 'cmd > file 2>&1' to send both stdout and stderr to 'file', and '2> /dev/null' to discard errors."
        )
    if "git " in ql or "github" in ql:
        return (
            "Cloud Session 1 Git Lab Tip: 'git add .' stages new/modified files, 'git commit -m' records a snapshot locally, "
            "'git checkout -b <branch>' creates and switches to a new branch, and 'git push' uploads commits to GitHub."
        )
    if "hypervisor" in ql or "paravirtualization" in ql or "type 1" in ql or "type 2" in ql:
        return (
            "Cloud Sessions 3 & 4 Virtualization Tip: Type 1 (bare-metal) hypervisors run directly on hardware (Xen, KVM, ESXi, Hyper-V); "
            "Type 2 (hosted) hypervisors run on top of a host OS (VirtualBox, VMware Workstation/Player)."
        )
    if "security boundary" in ql or "least amount of built in security" in ql or "highest level of service" in ql:
        return (
            "Cloud Session 7 Shared Responsibility Tip: SaaS provides the most built-in vendor security/management; "
            "in PaaS the vendor manages up to the runtime/middleware; in IaaS the customer secures the OS, middleware, and app."
        )
    return None


def build_linux_cloud_questions_json() -> Path | None:
    """Extract all saved HTML pages in `LinuxSaved/` and `LinuxSaved/cloud/`, map them to the PGCP-BDA
    Linux Programming & Cloud Computing syllabus, curate the Must-Practice shortlist, and write `linux_cloud_questions.json`."""
    linux_dir = ROOT / "LinuxSaved"
    if not linux_dir.is_dir():
        return None
    cloud_dir = linux_dir / "cloud"
    html_files = sorted(linux_dir.glob("*.html")) + (sorted(cloud_dir.glob("*.html")) if cloud_dir.is_dir() else [])
    if not html_files:
        return None

    from open_linux_cloud_pages import CLOUD_HUB_HTML, LINUX_HUB_HTML, TOPIC_SYLLABUS_MAP, get_ordered_topics
    from parser import parse_page
    from scraper import normalize_text

    pages_by_url: dict[str, Any] = {}
    linux_hub_page = None
    cloud_hub_page = None

    for f in html_files:
        parsed = parse_page(f.read_bytes(), url=f.as_posix())
        if not parsed.questions:
            continue
        if f.name == LINUX_HUB_HTML.name:
            linux_hub_page = parsed
            continue
        if f.name == CLOUD_HUB_HTML.name:
            cloud_hub_page = parsed
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
        difficulty: str,
    ) -> None:
        exact_sig = (
            q_obj.question.strip(),
            "|".join(f"{k}:{normalize_text(v)}" for k, v in sorted(q_obj.options.items())),
        )
        loose_q = re.sub(r"\bthe\b", " ", normalize_text(q_obj.question))
        loose_q = re.sub(r"\s+", " ", loose_q).strip()
        loose_sig = (loose_q, frozenset(normalize_text(v) for v in q_obj.options.values()))

        if exact_sig in seen_exact or loose_sig in seen_loose:
            return
        seen_exact.add(exact_sig)
        seen_loose.add(loose_sig)

        syl_group = consolidate_linux_cloud_syllabus_topic(raw_syl, sf_topic, cat)
        raw_records.append(
            {
                "topic": sf_topic,
                "category": cat,
                "difficulty": difficulty,
                "must_practice": cat == "KEEP",
                "syllabus_topic": syl_group,
                "syllabus_detail": raw_syl,
                "reason": reason,
                "faculty_alignment": raw_syl,
                "warning": infer_linux_cloud_warning(q_obj.question, sf_topic, syl_group),
                "question": q_obj.question,
                "options": q_obj.options,
                "correct_answer": q_obj.correct_answer,
                "explanation": q_obj.explanation,
                "source_url": src_url,
            }
        )

    # 1. Process all 128 topic pages in chronological PGCP-BDA syllabus order
    for norm_u in ordered_urls:
        page = pages_by_url[norm_u]
        meta = TOPIC_SYLLABUS_MAP.get(norm_u, {})
        base_topic = meta.get("topic") or page.topic or "Linux & Cloud"
        base_cat = meta.get("category", "SELECTIVE")
        base_syl = meta.get("syllabus_topic", base_topic)
        base_reason = meta.get("reason", "")
        curation = LINUX_CLOUD_PAGE_CURATION.get(norm_u)

        for q in page.questions:
            qnum = int(q.number or 0)
            q_topic = base_topic
            q_syl = base_syl
            q_reason = base_reason

            # Determine difficulty (Basic / Moderate / Hard)
            if curation:
                if qnum in curation.get("hard", set()):
                    diff = "Hard"
                elif qnum in curation.get("moderate", set()):
                    diff = "Moderate"
                else:
                    diff = "Basic"
            else:
                diff = "Moderate" if "\n" in q.question else "Basic"

            # Check if options are blank (missing image options in Cloud HTML)
            empty_opts = [k for k, v in q.options.items() if not v.strip()]
            if empty_opts or (curation and qnum in curation.get("remove", set())):
                q_cat = "REMOVE"
                q_syl = "Excluded (Image-Only Options Missing in Saved HTML)"
                q_reason = "Original Sanfoundry question used image-only options (A/B/C) that are not text-searchable."
            elif base_cat == "REMOVE":
                # Rescue specific syllabus-relevant questions from otherwise excluded pages
                if norm_u == "https://www.sanfoundry.com/gcc-compiler-questions-answers-stages-of-compilation-2/" and qnum == 2:
                    q_cat = "KEEP"
                    q_topic = "File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1"
                    q_syl = "Linux Session 2: File Permissions (chmod +x and chmod 777 executable permissions)"
                    diff = "Basic"
                    q_reason = "[Must-Practice Basic MCQ] Providing executable permissions with chmod +x and chmod 777 (Linux Session 2)."
                elif norm_u == "https://www.sanfoundry.com/cloud-computing-idaas-interview-questions-answers/" and qnum == 1:
                    q_cat = "KEEP"
                    q_topic = "SaaS — Software as a Service"
                    q_syl = "Cloud Sessions 3 & 4: SaaS Examples (Salesforce CRM)"
                    diff = "Basic"
                    q_reason = "[Must-Practice Basic MCQ] Salesforce.com is the largest SaaS provider of CRM software (Cloud Sessions 3 & 4)."
                elif norm_u == "https://www.sanfoundry.com/cloud-computing-questions-answers-open-cloud-computing-interface/" and qnum == 10:
                    q_cat = "SELECTIVE"
                    q_topic = "Provisioning Cloud Storage-1"
                    q_syl = "Cloud Sessions 5 & 6: Thin Provisioning of On-Demand Storage"
                    diff = "Moderate"
                    q_reason = "[Extra Practice — Moderate] Thin provisioning provides storage on demand from a shared storage pool."
                else:
                    q_cat = "REMOVE"
            elif curation:
                if qnum in curation["must_practice"]:
                    q_cat = "KEEP"
                    q_reason = f"[Must-Practice {diff} MCQ] {base_reason}"
                else:
                    q_cat = "SELECTIVE"
                    q_reason = f"[Extra Practice — {diff}] {base_reason}"
            else:
                q_cat = base_cat

            register_question(
                q,
                src_url=norm_u.rstrip("/"),
                sf_topic=q_topic,
                cat=q_cat,
                raw_syl=q_syl,
                reason=q_reason,
                difficulty=diff,
            )

    # 2. Process unique questions from the 1000 Linux MCQ hub page (44 foundational Linux command MCQs!)
    if linux_hub_page and linux_hub_page.questions:
        hub_url = (linux_hub_page.url or "https://www.sanfoundry.com/technical-interview-questions/").rstrip("/")
        # Every single one of the 44 questions on the Linux hub page is a clean foundational Linux MCQ!
        linux_hub_map: dict[int, tuple[str, str, str, str, str]] = {
            1: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Linux History and Operations", "[Must-Practice Basic MCQ] Linux is an open-source operating system."),
            2: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Linux History (Linus Torvalds)", "[Must-Practice Basic MCQ] Creator of the Linux kernel (Linus Torvalds)."),
            3: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Linux Open-Source Operations", "[Extra Practice — Basic] Linux is an open-source operating system."),
            4: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Installing and Configuring Linux (Ubuntu)", "[Must-Practice Basic MCQ] Ubuntu is the Linux distribution specified in Session 1."),
            5: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Role of the Linux Kernel", "[Must-Practice Basic MCQ] The Linux kernel manages system resources and hardware communication."),
            6: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (uname -r)", "[Must-Practice Basic MCQ] uname -r displays the running Linux kernel version."),
            7: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Installing and Configuring Ubuntu (apt-get update)", "[Must-Practice Basic MCQ] apt-get update refreshes the package index on Debian/Ubuntu systems."),
            8: ("User Account Management (who, passwd, /etc/passwd)", "KEEP", "Basic", "Linux Session 1: Root User Privileges (Lab)", "[Must-Practice Basic MCQ] The root user is the system administrator with full privileges."),
            9: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (ls -a hidden files)", "[Must-Practice Basic MCQ] ls -a lists all files including hidden dot-files."),
            10: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (cd)", "[Must-Practice Basic MCQ] cd changes the current working directory."),
            11: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Basic Commands (ls)", "[Extra Practice — Basic] ls lists files and directories."),
            12: ("File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1", "KEEP", "Basic", "Linux Session 2: chown Command (File Ownership)", "[Must-Practice Basic MCQ] chown changes the ownership of a file in Linux (explicitly in Session 2)."),
            13: ("User Account Management (who, passwd, /etc/passwd)", "KEEP", "Basic", "Linux Session 1: /etc/passwd User List", "[Must-Practice Basic MCQ] /etc/passwd contains the list of users in a Linux system."),
            14: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (pwd)", "[Must-Practice Basic MCQ] pwd displays the current working directory."),
            15: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Basic Commands (cp)", "[Extra Practice — Basic] cp copies files in Linux."),
            16: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (cat)", "[Must-Practice Basic MCQ] cat displays and concatenates file contents."),
            17: ("Search & Pattern Matching (grep, sort, uniq, cut, comm)", "KEEP", "Basic", "Linux Session 1: Basic Commands (grep)", "[Must-Practice Basic MCQ] grep searches for a specific text pattern in a file."),
            18: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (cd ~)", "[Must-Practice Basic MCQ] cd ~ changes to the user's home directory."),
            19: ("File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1", "SELECTIVE", "Basic", "Linux Session 2: chmod Command", "[Extra Practice — Basic] chmod changes file permissions."),
            20: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (mkdir — Lab)", "[Must-Practice Basic MCQ] mkdir creates a new directory (used in Session 1 dbda/test lab)."),
            21: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (tail)", "[Must-Practice Basic MCQ] tail displays the last lines of a file."),
            22: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (gzip compression)", "[Must-Practice Basic MCQ] gzip compresses files in Linux (explicitly listed in Session 1)."),
            23: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (man pages)", "[Must-Practice Basic MCQ] man displays the manual page for a command."),
            24: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Ubuntu Package Installation (apt-get)", "[Extra Practice — Basic] apt-get installs packages in Debian/Ubuntu distributions."),
            25: ("Filesystem Overview (mount, df, /etc/fstab, ext4)", "SELECTIVE", "Basic", "Linux Session 2: df Command (Free Disk Space)", "[Extra Practice — Basic] df displays free disk space on mounted filesystems."),
            26: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Basic Commands (rm)", "[Extra Practice — Basic] rm removes files in Linux."),
            27: ("Process Management & Job Control (ps, kill, bg, fg)", "SELECTIVE", "Basic", "Linux Session 1: Basic Commands (ps)", "[Extra Practice — Basic] ps shows currently running processes."),
            28: ("Linux Startup & Shutdown (Run Levels)", "KEEP", "Moderate", "Linux Session 1: Boot Loader Configuration (/boot/grub/grub.cfg)", "[Must-Practice Moderate MCQ] /boot/grub/grub.cfg holds the GRUB bootloader configuration."),
            29: ("Process Management & Job Control (ps, kill, bg, fg)", "KEEP", "Basic", "Linux Session 1: Real-Time Process Monitoring (top)", "[Must-Practice Basic MCQ] top monitors real-time system processes and CPU/memory usage."),
            30: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (ls -l long listing)", "[Must-Practice Basic MCQ] ls -l views directory contents in detailed long format (permissions, links, owner, size)."),
            31: ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Ubuntu Distribution", "[Extra Practice — Basic] Ubuntu is a Linux distribution."),
            32: ("Bash Shell Environment-1", "KEEP", "Basic", "Linux Sessions 3 & 4: Default Linux Shell (bash)", "[Must-Practice Basic MCQ] bash (Bourne Again Shell) is the default shell for most Linux distributions."),
            33: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1 & Session 2: Network Connectivity (ping)", "[Must-Practice Basic MCQ] ping checks network connectivity to a host."),
            34: ("User Account Management (who, passwd, /etc/passwd)", "KEEP", "Basic", "Linux Session 1: sudo Command (Superuser Execution)", "[Must-Practice Basic MCQ] sudo executes a command with superuser privileges."),
            35: ("Linux Fundamentals & Hub Essentials", "KEEP", "Basic", "Linux Session 1: Basic Commands (gunzip decompression)", "[Must-Practice Basic MCQ] gunzip decompresses .gz files (explicitly listed in Session 1)."),
            36: ("Bash Shell Environment-1", "KEEP", "Moderate", "Linux Sessions 3 & 4: System-Wide Environment Variable Files (/etc/environment, /etc/profile, /etc/bashrc)", "[Must-Practice Moderate MCQ] System-wide environment variables are configured in /etc/environment, /etc/profile, and /etc/bashrc."),
            37: ("Process Management & Job Control (ps, kill, bg, fg)", "SELECTIVE", "Basic", "Linux Session 1: Basic Commands (kill)", "[Extra Practice — Basic] kill terminates processes by sending signals."),
            38: ("Filesystem Overview (mount, df, /etc/fstab, ext4)", "KEEP", "Basic", "Linux Session 1 & Session 2: Disk Usage (du vs df)", "[Must-Practice Basic MCQ] du displays disk usage of files and directories (whereas df shows free filesystem space)."),
            39: ("Linux Filesystem Hierarchy (FHS)-1", "SELECTIVE", "Basic", "Linux Session 1: /etc Configuration Directory", "[Extra Practice — Basic] /etc contains system configuration files."),
            40: ("User Account Management (who, passwd, /etc/passwd)", "SELECTIVE", "Basic", "Linux Session 1: su Command", "[Extra Practice — Basic] su switches to the root user."),
            41: ("User Account Management (who, passwd, /etc/passwd)", "KEEP", "Basic", "Linux Session 1: User Account Management (useradd, adduser, usermod)", "[Must-Practice Basic MCQ] useradd, adduser, and usermod manage user accounts in Linux."),
            42: ("Process Management & Job Control (ps, kill, bg, fg)", "SELECTIVE", "Moderate", "Linux Session 1: Performance Monitoring (vmstat, top, htop)", "[Extra Practice — Moderate] vmstat, top, and htop monitor system performance and resource usage."),
            43: ("Process Management & Job Control (ps, kill, bg, fg)", "KEEP", "Moderate", "Linux Session 1 & Sessions 3–4: Task Scheduling (at and cron)", "[Must-Practice Moderate MCQ] at and cron schedule one-time and recurring tasks in Linux."),
            44: ("Linux Filesystem Hierarchy (FHS)-2", "KEEP", "Basic", "Linux Session 1: System Log Directory (/var/log)", "[Must-Practice Basic MCQ] /var/log contains system event log files in Linux."),
        }
        for q in linux_hub_page.questions:
            qnum = int(q.number or 0)
            t_name, cat, diff, raw_syl, reason = linux_hub_map.get(
                qnum,
                ("Linux Fundamentals & Hub Essentials", "SELECTIVE", "Basic", "Linux Session 1: Linux Fundamentals", "Core Linux overview question."),
            )
            register_question(
                q,
                src_url=hub_url,
                sf_topic=t_name,
                cat=cat,
                raw_syl=raw_syl,
                reason=reason,
                difficulty=diff,
            )

    # 3. Process unique questions from the 1000 Cloud Computing MCQ hub page (41 Cloud overview MCQs)
    if cloud_hub_page and cloud_hub_page.questions:
        chub_url = (cloud_hub_page.url or "https://www.sanfoundry.com/1000-cloud-computing-questions-answers/").rstrip("/")
        cloud_hub_map: dict[int, tuple[str, str, str, str, str]] = {
            1: ("Introduction to Cloud Computing", "KEEP", "Basic", "Cloud Session 2: Definition of Cloud Computing", "[Must-Practice Basic MCQ] Cloud computing provides on-demand services (storage, servers, databases, networking) over the Internet."),
            2: ("Introduction to Cloud Computing", "SELECTIVE", "Basic", "Cloud Session 2: Cloud Computing History (J.C.R. Licklider)", "[Extra Practice — Basic] J.C.R. Licklider pioneered the ARPANET/intergalactic computer network vision behind cloud computing."),
            3: ("Cloud Models & Types-1 (Deployment vs Service Models, NIST)", "KEEP", "Basic", "Cloud Session 2: Types of Cloud Servers (Public, Private, Dedicated)", "[Must-Practice Basic MCQ] Public, Private, and Dedicated are cloud server types ('Merged Cloud Servers' is invalid)."),
            4: ("Attributes & Characteristics of Cloud Computing", "KEEP", "Basic", "Cloud Session 2: Features of Cloud Computing (Security, Availability, Large Network Access)", "[Must-Practice Basic MCQ] Core features of cloud computing."),
            5: ("SaaS — Software as a Service", "KEEP", "Basic", "Cloud Sessions 3 & 4: Software-as-a-Service (SaaS)", "[Must-Practice Basic MCQ] SaaS stands for Software-as-a-Service."),
            6: ("SaaS — Software as a Service", "SELECTIVE", "Basic", "Cloud Sessions 3 & 4: Cloud Applications (G Suite, Adobe, PayPal)", "[Extra Practice — Basic] Real-world cloud computing applications."),
            7: ("Introduction to Cloud Computing", "SELECTIVE", "Basic", "Cloud Session 2: Cloud Examples (AWS, Dropbox, WebEx)", "[Extra Practice — Basic] Examples of cloud platforms and services."),
            9: ("PaaS — Platform as a Service", "KEEP", "Basic", "Cloud Sessions 3 & 4: PaaS Examples (Heroku, AWS Elastic Beanstalk, Windows Azure)", "[Must-Practice Basic MCQ] Heroku, AWS Elastic Beanstalk, and Windows Azure are classic PaaS offerings."),
            10: ("IaaS — Infrastructure as a Service-1", "KEEP", "Basic", "Cloud Sessions 3 & 4: IaaS Examples (DigitalOcean, Linode, Rackspace)", "[Must-Practice Basic MCQ] DigitalOcean, Linode, and Rackspace are IaaS cloud providers."),
            36: ("SaaS — Software as a Service", "KEEP", "Basic", "Cloud Sessions 3 & 4: SaaS Examples (Google Workspace, Dropbox, Salesforce)", "[Must-Practice Basic MCQ] Google Workspace, Dropbox, and Salesforce are classic SaaS examples."),
            41: ("Cloud Models & Types-2 (Public, Private, Community, Hybrid)", "KEEP", "Moderate", "Cloud Session 7: Cloud Bursting (Hybrid Cloud Overflow)", "[Must-Practice Moderate MCQ] Cloud bursting handles transaction overflow from a private system into a public cloud."),
        }
        for q in cloud_hub_page.questions:
            qnum = int(q.number or 0)
            t_name, cat, diff, raw_syl, reason = cloud_hub_map.get(
                qnum,
                ("Introduction to Cloud Computing", "SELECTIVE", "Moderate", "Cloud Session 2: Cloud Computing Overview", "[Extra Practice — Moderate] Cloud computing overview question."),
            )
            register_question(
                q,
                src_url=chub_url,
                sf_topic=t_name,
                cat=cat,
                raw_syl=raw_syl,
                reason=reason,
                difficulty=diff,
            )

    # Sort questions by consolidated syllabus session order -> priority (KEEP -> SELECTIVE -> REMOVE) -> difficulty (Basic -> Moderate -> Hard)
    session_order_list = [
        "Linux Session 1: Linux Fundamentals, Boot/Run Levels, FHS, Users, Processes & Basic Commands",
        "Linux Session 2: Linux File Management, Permissions (chmod/umask/ACL), Mounting & Vi Editor",
        "Linux Sessions 3 & 4: Shell Programming (Bash Environment, Variables, Redirection, Loops & Filters)",
        "Cloud Session 1: Git & GitHub Fundamentals (Version Control & CLI Workflow)",
        "Cloud Session 2: Introduction to Cloud Computing (Paradigms, Characteristics, Benefits & Types)",
        "Cloud Sessions 3 & 4: Cloud Service Models (SaaS, PaaS, IaaS), Virtualization & Hypervisors",
        "Cloud Sessions 5 & 6: Cloud Services, Application Deployment, Monitoring & Cloud Storage",
        "Cloud Session 7: Cloud Architecture, Scaling, Load Balancing, Security & Shared Responsibility",
        "Cloud Sessions 8 & 9: AWS (EC2, VPC, S3, EBS, RDS, CloudWatch, EMR) & Microsoft Azure",
        "Cloud Session 10: Introduction to DevOps, CI/CD & Containerization (Docker)",
        "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
    ]
    order_index = {name: i for i, name in enumerate(session_order_list)}
    cat_order = {"KEEP": 0, "SELECTIVE": 1, "REMOVE": 2}
    diff_order = {"Basic": 0, "Moderate": 1, "Hard": 2}

    raw_records.sort(
        key=lambda r: (
            order_index.get(r["syllabus_topic"], 99),
            cat_order.get(r["category"], 9),
            diff_order.get(r["difficulty"], 9),
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

    keep_qs = [q for q in questions if q["category"] == "KEEP"]
    linux_cloud_json_data = {
        "subject": "Linux Programming & Cloud Computing — Bash, Commands, Permissions, Vi, Git, Virtualization, AWS & Azure",
        "syllabus": "PGCP-BDA (ACTS, Pune) — Linux Programming (Sessions 1–4) & Cloud Computing (Sessions 1–10)",
        "source": "Sanfoundry",
        "total_questions": len(questions),
        "counts": {
            "KEEP": len(keep_qs),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "difficulty_counts": {
            "ALL": {
                "Basic": sum(1 for q in questions if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in questions if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in questions if q["difficulty"] == "Hard"),
            },
            "KEEP": {
                "Basic": sum(1 for q in keep_qs if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in keep_qs if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in keep_qs if q["difficulty"] == "Hard"),
            },
        },
        "topics": topics,
        "syllabus_markdown": LINUX_CLOUD_SYLLABUS_MD,
        "questions": questions,
    }

    out_path = ROOT / "linux_cloud_questions.json"
    out_path.write_text(json.dumps(linux_cloud_json_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Write standalone Must-Practice Shortlist CSV and Markdown study guide in Resource/
    res_dir = ROOT / "Resource"
    res_dir.mkdir(parents=True, exist_ok=True)
    csv_path = res_dir / "Linux_Cloud_Must_Practice_Shortlist.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["Question ID", "Difficulty", "Syllabus Session", "Sanfoundry Topic", "Question Stem", "Correct Answer", "Syllabus Alignment"])
        for q in keep_qs:
            stem_one_line = " | ".join(ln.strip() for ln in q["question"].splitlines() if ln.strip())
            writer.writerow([q["id"], q["difficulty"], q["syllabus_topic"], q["topic"], stem_one_line, q["correct_answer"], q["syllabus_detail"]])

    # Also build Resource/Linux_Cloud_Must_Practice_Shortlist.md
    md_lines = [
        "# Linux Programming & Cloud Computing — Must-Practice MCQ Shortlist (PGCP-BDA)",
        "",
        f"- **Total Unique Questions Extracted:** `{len(questions)}` (from 130 saved HTML pages in `LinuxSaved/` and `LinuxSaved/cloud/`)",
        f"- **Must-Practice Shortlist (`KEEP`):** `{len(keep_qs)}` hand-picked high-yield MCQs (`{linux_cloud_json_data['difficulty_counts']['KEEP']['Basic']}` Basic • `{linux_cloud_json_data['difficulty_counts']['KEEP']['Moderate']}` Moderate • `{linux_cloud_json_data['difficulty_counts']['KEEP']['Hard']}` Hard)",
        f"- **Extra Practice (`SELECTIVE`):** `{linux_cloud_json_data['counts']['SELECTIVE']}` secondary/variation drills (`sed`, `awk`, `/proc`, cloud backup/storage extras)",
        f"- **Excluded (`REMOVE`):** `{linux_cloud_json_data['counts']['REMOVE']}` out-of-syllabus questions (C system call debugging `malloc`/`pthread`/`fork`/`socket`, kernel `sysfs` internals, `gdb`/`gcc`, discontinued 2010 Windows Live / Google consumer apps, and broken image-only questions)",
        "",
        "## Session-Wise Shortlist Breakdown",
        "",
        "| Syllabus Session | Total | Shortlist (`KEEP`) | Basic | Moderate | Hard | Extra (`SELECTIVE`) |",
        "|---|---:|---:|---:|---:|---:|---:|",
    ]
    for s_name in session_order_list:
        s_all = [q for q in questions if q["syllabus_topic"] == s_name]
        if not s_all:
            continue
        s_keep = [q for q in s_all if q["category"] == "KEEP"]
        s_sel = [q for q in s_all if q["category"] == "SELECTIVE"]
        b_cnt = sum(1 for q in s_keep if q["difficulty"] == "Basic")
        m_cnt = sum(1 for q in s_keep if q["difficulty"] == "Moderate")
        h_cnt = sum(1 for q in s_keep if q["difficulty"] == "Hard")
        md_lines.append(f"| {s_name} | {len(s_all)} | **{len(s_keep)}** | {b_cnt} | {m_cnt} | {h_cnt} | {len(s_sel)} |")

    md_lines.extend(["", "---", ""])
    for s_name in session_order_list:
        s_keep = [q for q in keep_qs if q["syllabus_topic"] == s_name]
        if not s_keep:
            continue
        md_lines.append(f"## {s_name} ({len(s_keep)} Must-Practice MCQs)")
        md_lines.append("")
        for diff_label in ("Basic", "Moderate", "Hard"):
            d_qs = [q for q in s_keep if q["difficulty"] == diff_label]
            if not d_qs:
                continue
            id_badges = ", ".join(f"`#{q['id']}`" for q in d_qs)
            md_lines.append(f"### {diff_label} Level ({len(d_qs)} Qs): {id_badges}")
            md_lines.append("")
            for q in d_qs:
                stem_short = " // ".join(ln.strip() for ln in q["question"].splitlines() if ln.strip())
                if len(stem_short) > 140:
                    stem_short = stem_short[:137] + "..."
                md_lines.append(f"- **#{q['id']}** *({q['topic']})*: {stem_short} — **Ans: `{q['correct_answer']}`**")
            md_lines.append("")

    (res_dir / "Linux_Cloud_Must_Practice_Shortlist.md").write_text("\n".join(md_lines) + "\n", encoding="utf-8")
    return out_path


R_SYLLABUS_MD = """# R Programming — PGCP-BDA (ACTS, Pune)
**Module:** II. R-Programming (Sessions 14 to 17 — 8 Theory + 8 Lab + 8 Self Learning = 24 Hours)  
**Course:** Suggested Teaching Guidelines for *Python and R Programming* (PGCP-BDA, August 2026)  
**Evaluation:** Theory Exam – 40%, Lab Exam – 40%, Internal Assessment – 20%

---

## Session 14: R Project, Installation, Basics, Help, R GUI/RStudio & Basic Arithmetic (2T + 2L + 2SL)
- The R project for Statistical Computing (History of R & S language, Ross Ihaka & Robert Gentleman, GNU GPL, R Foundation, CRAN)
- Introduction & Installation of R (Base packages vs Recommended packages vs Contributed packages)
- R Basics, Finding Help (`?func`, `help(func)`, `help.search()`, `??`, `args()`, `example()`), Case Sensitivity, Prompts (`>` and `+`), Comments (`#`), Assignment (`<-`), Auto-printing vs Explicit `print()`
- Code Editors for R (Script Editors, `.R` script files, Emacs with ESS)
- Exploring R GUI & R Commander (`Rcmdr` point-and-click interface)
- Exploring RStudio (`.Rproj` projects, Console, Environment/Workspace, `View()`, `options(digits=...)`)
- Basic Mathematical & Vectorized Arithmetic Operations in R (`+`, `-`, `*`, `/`, vector recycling, element-wise matrix multiplication `*` vs `%*%`, integer sequences `:`, `seq()`, `rep()`, `sqrt()`, `log()`, Date/Time arithmetic `Date`, `POSIXct`, `POSIXlt`, `strptime()`)
- **Lab:**
  1. Read Introduction to R, R basics and Scope of R.
  2. Explore R GUI and RStudio.

## Session 15: Data Objects (Data Types & Structures), Packages, Workspace & Importing/Exporting Data (2T + 2L + 2SL)
- Data Objects — Data Types & Data Structures:
  - 6 Atomic vector classes: `logical`, `integer` (explicit `L` suffix, e.g. `5L`), `numeric` (double precision), `complex`, `character`, `raw`
  - Inspecting objects: `class()`, `typeof()`, `mode()`, `length()`, `attributes()`, `names()`, `dim()`, `dimnames()`, `nrow()`, `ncol()`, `rownames()`, `colnames()`, `row.names()`
  - Implicit Coercion hierarchy (`logical` → `integer` → `numeric` → `character`) & Explicit Coercion (`as.numeric()`, `as.integer()`, `as.logical()`, `as.character()`, `as.matrix()`, `as.factor()`, `as.list()`, `as.Date()`, `unclass()`)
  - Missing & Special Values: `NA` vs `NaN` vs `Inf` vs `NULL` (`is.na()`, `is.nan()`, `is.null()`)
  - Data Structures: Homogeneous (`vector` via `c()`/`vector()`, `matrix` via `matrix()`/`diag()`/`cbind()`/`rbind()`, multi-dimensional `array` via `array()`) vs Heterogeneous (`list` via `list()`, `data.frame` via `data.frame()`) and categorical `factor` (`factor()`, levels, ordered factors, `table()`)
- Packages in R & Working with Packages (`install.packages()`, `depends = TRUE`, `library()`, `require()`, `.libPaths()`, `search()`, `getOption("defaultPackages")`)
- Handling Data in R Workspace (`ls()`, `objects()`, `rm(x)`, `rm(list = ls())`, `source()`, `sink()`, `save()`, `save.image()`, `load()`, `.RData`/`.rda`, `dput()`, `dget()`, `dump()`, `serialize()`, `unserialize()`)
- Reading & Importing Data from Text files, Excel files & Databases (`read.table()`, `read.csv()`, `readLines()`, `scan()`, connections `file()`, `gzfile()`, `bzfile()`, `url()`, `DBI`, built-in datasets `data()`, `airquality`, `iris`, `diamonds`, `ChickWeight`)
- Exporting Data from R (`write.table()`, `write.csv()`, `writeLines()`, `writexl` package)
- **Lab:**
  1. Write R program to compute `sum`, `mean` and `product` (`prod`) of a given vector elements.
  2. Write R program to call the (built-in) dataset `airquality`.
  3. Write R program to create a list of dataframes.
  4. Access each of those data frames from the list (`[`, `[[`, `$`).
  5. Write R Program to create dataframe:
     - Get the statistical summary (`summary()`, `str()`) and nature of the data of dataframe.
     - Add new column in dataframe.
     - Sort dataframe using multiple columns (`order()`).
     - Export Dataframe to Excel file using `writexl` package.

## Session 16: Tidyverse (dplyr, ggplot2, reshape2), Data Frame Manipulation, Subsetting & Visualization (2T + 2L + 2SL)
- Introduction to Tidyverse (group of packages: `dplyr`, `ggplot2`, `tidyr`/`reshape2`, `stringr`, `lubridate`, `data.table`)
- Manipulating and Processing Data in R with `dplyr`:
  - Core verbs: `select()` (and column exclusion `select(-col)`), `filter()`, `arrange()` (and `desc()`), `rename()`, `mutate()` (and `transmute()`), `group_by()`, `summarize()`
  - Pipeline operator `%>%` for chaining left-to-right data transformations
- Creating, Accessing and Sorting Data Frames:
  - 3 Indexing/Subsetting operators: `[` (returns same class), `[[` (extracts single element, supports computed variable names `x[[name]]` and nested indices `x[[c(1, 3)]]`), `$` (extracts by literal name with partial matching)
  - Matrix & Data Frame subsetting: `x[i, j]`, `drop = FALSE` to preserve dimensions, negative indices `old[-n, ]` / `old[, -c(i, j)]`, logical subsetting, `subset()`, `complete.cases()`, `%in%`, sorting rows with `x[order(x$B), ]` and `rev()`
- Extracting, Combining, Merging & Reshaping Data Frames:
  - Row/Column binding (`rbind()`, `cbind()`), merging (`merge()`), matrix/dataframe transpose (`t()`), `reshape2` (`melt()` wide-to-long, `dcast()` long-to-wide), grouping split (`split()`)
- Data Visualization (Base Graphics, Lattice & `ggplot2`):
  - Base Graphics: high-level (`plot()`, `hist()`, `boxplot()`, `barplot()`, `pie()`, `mosaicplot()`) vs low-level annotation (`lines()`, `points()`, `text()`, `title()`, `legend()`), `par()` parameters (`pch`, `col`, `main`, `mfrow`, `omi`, `fin`, `din`, `ask`, `new`)
  - `ggplot2` Grammar of Graphics (`geom`, `theme_minimal()`, `theme_classic()`, `ggsave()`, `cut_interval()`, `cut_number()`) & Lattice (`xyplot()`, `bwplot()`, `dotplot()`, `stripplot()`, `panel.abline()`)
  - Graphics Devices: vector (`pdf()`, `svg()`) vs bitmap (`png()`, `jpeg()`), `quartz()`, `dev.copy2pdf()`, `dev.off()`
- **Lab:**
  1. Load one XML file and one JSON file in RStudio, print the data in both files one by one and get statistical summary of data.
  2. Extract Data from any website using R packages.
  3. Call the built-in dataset `"diamonds"` in R and plot Pie chart and Bar graph.
  - Examine the tidy data philosophy and why it simplifies data analysis.
  - Compare traditional base R data manipulation with tidyverse-style pipelines (`%>%`).
  - Reflect on why reshaping and merging data is often more critical than modeling itself.

## Session 17: Functions, Control Flow, Loop Functions (apply Family), Built-in Functions & R Markdown (2T + 2L + 2SL)
- Functions in R:
  - Defining functions with `function()`, first-class function objects (`class(f) == "function"`), empty return `NULL`, implicit last-expression return, `invisible()`
  - Formal arguments (`formals()`, `args()`), default argument values, positional & keyword matching, exact matching required after `...`, lazy evaluation
  - Lexical Scoping & Environments: free variables resolved in the environment where the function was defined, function closures, parent/empty environment, `search()` path, `with()`, `by()`
  - Control Flow inside Functions: `if-else`, `for`, `while`, `repeat`, `break`, `next`, `switch()` (positional & named dispatch)
- Built-in Functions in R:
  - **Numeric:** `sqrt()`, `log()`, `cumsum()`, `cumprod()`, `cummax()`, `cummin()`, `seq()`, `seq_len()`, `seq_along()`, `rep()`, `rev()`, `as.integer()`
  - **Character & Date/Time:** `paste()`, `cat()`, `nchar()`, `as.Date()`, `Sys.Date()`, `Sys.time()`, `date()`, `weekdays()`, `months()`, `quarters()`, `strptime()`, `POSIXct`, `POSIXlt`
  - **Statistical & Loop (`apply` Family):** `lapply()`, `sapply()`, `vapply()`, `apply(X, MARGIN, FUN)`, `tapply()`, `mapply()`, `split()`, `rowSums()`, `colMeans()`, `rowsum()`, `which.min()`, `which.max()`, `mean()`, `sd()`, `var()`, `max(..., na.rm=TRUE)`, `quantile()`, `table()`, `prop.table()`, `addmargins()`, `xtabs()`, `cut()`, `ecdf()`, `rnorm()`, `runif()`, `rbinom()`, `dnorm()`, `pnorm()`, `qnorm()`, `pchisq()`, `chisq.test()`, `t.test()`, `fisher.test()`, `qqline()`, `anova()`, `lm()`
- Interactive Reporting with R Markdown (`knitr`, combining data, code & results into a single reproducible document, package vignettes) & Function Debugging (`traceback()`, `debug()`, `browser()`, `trace()`, `recover()`)
- **Lab (Case Study — `ChickWeight` Dataset with `split()`):**
  1. Examine the built-in `ChickWeight` data (`?ChickWeight`). Use `split()` and a script to:
     - Construct a plot of `weight` against `Time` for chick number `34`.
     - For chicks in diet group `4`, display box plots (`boxplot()`) for each time point.
     - Compute the mean weight for chicks in group `4` for each time point and plot against time.
     - Repeat the mean computation for group `2` and add the curve to the existing plot (`lines()`).
     - Add a legend (`legend()`) and a title (`title()` / `main`).
     - Copy and paste the graph into Word.
"""


# Per-page and per-question curation for all 60 saved R Programming HTML pages in RSaved/
# - "must_practice": Curated high-yield Must-Do Shortlist (assigned category="KEEP")
# - "basic" / "moderate" / "hard": Per-question difficulty tier
# - "remove": Out-of-syllabus questions or Sanfoundry answer-key errata that have a clean twin elsewhere
R_PAGE_CURATION: dict[str, dict[str, set[int]]] = {
    # --- SESSION 14: History, Overview, Basics, Console Input & Vectorized Operations ---
    "https://www.sanfoundry.com/r-programming-questions-answers-history/": {
        "must_practice": {1, 4, 10},
        "basic": {1, 4, 5, 6, 9, 10},
        "moderate": {2, 3, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-history-2/": {
        "must_practice": {3, 5, 6, 7, 10},
        "basic": {2, 3, 4, 5, 6, 10},
        "moderate": {1, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-overview/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 10},
        "basic": {1, 2, 3, 4, 10},
        "moderate": {5, 6, 7, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics/": {
        "must_practice": {3, 5, 6, 7, 8, 10},
        "basic": {1, 3, 4, 6, 8},
        "moderate": {2, 5, 7, 9, 10},
        "hard": set(),
        "remove": {2},  # Sanfoundry erratum: marks "q() is used to quit the R program" as wrong statement
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-3/": {
        "must_practice": {1, 2, 3, 7, 8, 9},
        "basic": {1, 2, 3, 4, 5},
        "moderate": {7, 8, 9, 10},
        "hard": set(),
        "remove": {6},  # Erratum duplicate of Overview-1 Q3 (marks Functions instead of Packages)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-4/": {
        "must_practice": {2, 3, 4, 5, 8, 9, 10, 15, 16},
        "basic": {1, 3, 4, 5, 7, 10, 11, 13, 14, 15},
        "moderate": {2, 6, 8, 9, 12, 16},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-console-input-evaluation/": {
        "must_practice": {1, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {1, 3, 4, 8, 10},
        "moderate": {2, 5, 6, 7, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-console-input-evaluation-2/": {
        "must_practice": {1, 2, 3, 5, 6, 7, 8, 9, 10},
        "basic": {2, 3, 4, 7, 9, 10},
        "moderate": {5, 6, 8},
        "hard": {1},
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-vectorized-operations/": {
        "must_practice": {1, 2, 3, 4, 5, 7, 8, 9, 10},
        "basic": {1, 2, 3, 6, 9},
        "moderate": {4, 5, 7, 8, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-interview-questions-answers-experienced/": {  # Vectorized Operations - 2
        "must_practice": {1, 2, 4, 5, 7},
        "basic": {1},
        "moderate": {2, 3, 4, 5, 7},
        "hard": {6, 8},
    },

    # --- SESSION 15: Data Types & Structures, Packages, Workspace & Importing/Exporting Data ---
    "https://www.sanfoundry.com/r-programming-questions-answers-overview-2/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {2, 4, 5, 6, 7, 8},
        "moderate": {1, 3, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-overview-3/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {2, 3, 7, 8, 9, 10},
        "moderate": {1, 4, 5, 6},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-2/": {
        "must_practice": {2, 5, 6, 7, 8, 9, 10},
        "basic": {1, 3, 4, 6, 9, 10},
        "moderate": {2, 5, 7},
        "hard": {8},
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types/": {
        "must_practice": {2, 3, 4, 5, 6, 8, 9, 10},
        "basic": {1, 3, 4, 7, 10},
        "moderate": {2, 5, 6, 8, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-4/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8},
        "basic": {1, 2, 4, 5, 6, 9, 10},
        "moderate": {3, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-5/": {
        "must_practice": {1, 2, 3, 4, 7, 8, 10, 14},
        "basic": {1, 2, 3, 5, 7, 11, 12, 13, 14, 15},
        "moderate": {4, 8, 9, 10},
        "hard": set(),
        "remove": {6},  # Typo in Sanfoundry option B ("Function()" instead of "factor()"); covered by Reading Datasets-1 Q6
    },
    "https://www.sanfoundry.com/r-programming-exam-questions-answers/": {  # Data Types - 6
        "must_practice": {1, 2, 4, 5, 6, 7, 8},
        "basic": {1, 2, 3, 4, 5, 8},
        "moderate": {6, 7, 9, 10, 11},
        "hard": set(),
        "remove": {9, 10, 11},  # References unshown external 3D iris array/snames script
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-7/": {
        "must_practice": {1, 2, 4, 8, 9, 10},
        "basic": {1, 2, 3, 4, 5, 6, 7, 9, 10},
        "moderate": {8, 11, 12, 13, 14, 15},
        "hard": set(),
        "remove": {12, 13, 14, 15},  # Obscure spline()/locator() list-return trivia (Q15 erroneously equates spline with density)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-reading-datasets/": {
        "must_practice": {2, 3, 4, 6, 7, 8, 10},
        "basic": {2, 4, 6, 9},
        "moderate": {3, 5, 7, 8, 10},
        "hard": set(),
        "remove": {1},  # Sanfoundry erratum: marks copy() instead of paste()
    },
    "https://www.sanfoundry.com/r-programming-interviews-questions-answers-freshers/": {  # Reading Datasets - 2
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {1, 3, 4, 9, 10},
        "moderate": {2, 5, 6, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats/": {
        "must_practice": {1, 3, 4, 5, 6, 7, 8, 10},
        "basic": {1, 4, 6, 7},
        "moderate": {3, 5, 8, 10},
        "hard": {2, 9},
        "remove": {2},  # Sanfoundry erratum: asks for "wrong statement" when all 3 statements A, B, C are true
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats-2/": {
        "must_practice": {1, 2, 3, 6, 8, 9, 10, 11, 15},
        "basic": {8, 9, 10, 11, 14, 15},
        "moderate": {1, 2, 3, 4, 6, 7, 12, 13},
        "hard": set(),
        "remove": {5},  # Sanfoundry erratum: marks dput() for deparsing multiple objects (dump() is for multiple objects, as in Q6/Q7)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-connections-interfaces/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 9},
        "basic": {1, 4, 6, 7, 8, 9, 10},
        "moderate": {2, 3, 5},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-commands/": {
        "must_practice": {1, 2, 3, 4, 5, 7, 9, 10},
        "basic": {3, 4, 5, 8, 9, 10},
        "moderate": {1, 2, 6, 7},
        "hard": set(),
        "remove": {8},  # Obscure legacy Mac GUI menu command browse.workspace
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages/": {
        "must_practice": {4, 5, 6, 8, 9},
        "basic": {4, 5},
        "moderate": {2, 3, 6, 7, 8, 9},
        "hard": set(),
        "remove": {1},  # Sanfoundry erratum: marks plyr instead of sqldf for SQL queries on R data frames
    },
    "https://www.sanfoundry.com/tough-r-programming-questions/": {  # Packages - 2
        "must_practice": {1, 2, 3},
        "basic": {1, 2, 3},
        "moderate": {5},
        "hard": set(),
        "remove": {4, 6, 7, 8, 9, 10},  # Obscure alphabetical CRAN packages (abc, accelerometry, avas, adegenet, aCRM, bayesclust)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages-4/": {
        "must_practice": {1},
        "basic": {1, 3, 5},
        "moderate": {4, 7},
        "hard": set(),
        "remove": {2, 6, 8, 9, 10},  # CRAN package authoring internals (.Rbuildignore, source vs bundle)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages-5/": {
        "must_practice": {2, 3},
        "basic": {2, 3},
        "moderate": set(),
        "hard": set(),
        "remove": {1, 4, 5, 6, 7, 8, 9, 10, 11, 12},  # CRAN package authoring internals (DESCRIPTION, DCF Debian Control Format, CRAN licensing)
    },

    # --- SESSION 16: Tidyverse (dplyr, ggplot2), Subsetting & Data Visualization ---
    "https://www.sanfoundry.com/r-programming-questions-answers-subsetting/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 9, 10},
        "basic": {1, 2, 3, 4, 10},
        "moderate": {5, 6, 7, 8},
        "hard": {9},
        "remove": {5},  # Sanfoundry erratum: claims "$ operator is used to extract elements of a list or a data frame" is a wrong statement
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-experienced/": {  # Subsetting - 2
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9},
        "basic": {1, 2, 9},
        "moderate": {3, 4, 6, 7},
        "hard": {5, 8},
    },
    "https://www.sanfoundry.com/tricky-r-programming-questions-answers/": {  # Commands - 2
        "must_practice": {2, 3, 4, 5, 7, 8, 9, 10},
        "basic": {5, 7, 9},
        "moderate": {2, 3, 4, 6, 8, 10},
        "hard": set(),
        "remove": {1},  # Sanfoundry erratum: asks to drop nth column but marks old[-n,] (which drops nth row)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-dplyr-basics/": {
        "must_practice": {1, 2, 4, 6, 7, 9, 10},
        "basic": {1, 2, 4, 6, 7, 9},
        "moderate": {5, 8, 10},
        "hard": set(),
        "remove": {3},  # Sanfoundry erratum: marks rename instead of filter (covered accurately by dplyr-2 Q3)
    },
    "https://www.sanfoundry.com/r-programming-test/": {  # dplyr - 2
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 9},
        "basic": {1, 3, 4, 6, 7},
        "moderate": {2, 5, 8, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-exploratory-data-analysis/": {
        "must_practice": {2, 3, 4, 5, 9, 10},
        "basic": {2, 4, 5},
        "moderate": {1, 3, 6, 8, 9, 10},
        "hard": set(),
        "remove": {7},  # Sanfoundry erratum: marks high-level boxplot() instead of low-level lines() for adding elements to an existing plot
    },
    "https://www.sanfoundry.com/advanced-r-programming-questions-answers/": {  # Exploratory Data Analysis - 2
        "must_practice": {1, 2, 3, 6, 8},
        "basic": {1, 2, 6, 8},
        "moderate": {3, 4, 5, 7, 9, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-graphics-2/": {
        "must_practice": {6, 7, 8, 9, 10},
        "basic": {6, 7, 8, 9, 10},
        "moderate": {1, 2, 3, 4, 5},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-ggplot2/": {
        "must_practice": {1, 3, 5},
        "basic": {1},
        "moderate": {2, 3, 5},
        "hard": set(),
        "remove": {4, 6, 7, 8, 9, 10},  # Defunct ggplot2 v0.8 internals removed in 2012 (translate_qplot_*, ggfluctuation, ggmissing, ggorder)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-1/": {
        "must_practice": {2, 5, 6, 7, 8, 9, 10},
        "basic": {2, 5, 7, 9},
        "moderate": {6, 8, 10},
        "hard": set(),
        "remove": {1, 3, 4},  # Sanfoundry errata: Q1 marks data() instead of rep(); Q3 marks read instead of xtabs; Q4 obscure psych::factor.model
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-2/": {
        "must_practice": {4, 5, 6, 7, 8, 9, 10},
        "basic": {5, 7, 9},
        "moderate": {4, 6, 8, 10},
        "hard": set(),
        "remove": {1, 2, 3},  # Sanfoundry errata: Q1 marks prop.table instead of addmargins; Q2 marks quantile instead of names; Q3 marks pnorm instead of pchisq
    },

    # --- SESSION 17: Control Structures, Functions, Scoping, Loop Functions, Built-ins & Debugging ---
    "https://www.sanfoundry.com/r-programming-questions-answers-control-structures/": {
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 10},
        "basic": {1, 3, 5, 6, 7, 8, 10},
        "moderate": {2, 4, 9},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-quiz/": {  # Control Structures - 2
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 10},
        "basic": {2, 3, 5, 6, 8, 9},
        "moderate": {1, 4, 7, 10},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-mcqs/": {  # Control Structures - 3
        "must_practice": {1, 3, 4, 5, 6, 7, 8, 9, 10},
        "basic": {2, 5, 8, 9, 10},
        "moderate": {1, 3, 4, 7},
        "hard": {6},
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions/": {
        "must_practice": {2, 3, 4, 5, 6, 7, 8},
        "basic": {2, 3, 5, 6, 7},
        "moderate": {1, 4, 8, 9},
        "hard": set(),
        "remove": {9},  # Sanfoundry arithmetic erratum: nchar("Hello, world!\n") * 3 is 14 * 3 = 42, but key marks A (32) instead of B (42)
    },
    "https://www.sanfoundry.com/r-programming-multiple-choice-questions-answers/": {  # Functions - 2
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 9},
        "basic": {2, 3, 6, 9},
        "moderate": {4, 7, 8},
        "hard": {1, 10},
        "remove": {5},  # Sanfoundry erratum: marks true statement A as wrong while explanation states C is the wrong statement
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-3/": {
        "must_practice": {1, 2, 3, 6, 7, 8, 9, 10},
        "basic": {1, 3, 4, 7, 10},
        "moderate": {5, 6, 8, 9},
        "hard": {2},
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-4/": {
        "must_practice": {1, 4, 7, 8, 10},
        "basic": {1, 4, 10},
        "moderate": {2, 7, 8},
        "hard": set(),
        "remove": {3, 5, 6, 9},  # Q3 generic CS sorting, Q5/Q6 Hadoop HDFS/Oozie/Pig, Q9 obscure Adegenet genomics package
    },
    "https://www.sanfoundry.com/r-programming-question-papers/": {  # Functions - 5
        "must_practice": {1, 2, 5, 6, 8, 10},
        "basic": {1, 2, 5},
        "moderate": {3, 4, 6, 7, 8, 10},
        "hard": set(),
        "remove": {9},  # Generic ML definition (K-Nearest Neighbour vs Travelling Salesman / N-Queen) with no R content
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-6/": {
        "must_practice": {4, 7, 8, 10},
        "basic": {7, 8, 9, 10},
        "moderate": {1, 4, 5, 6},
        "hard": set(),
        "remove": {2, 3, 9},  # Q2 & Q3 swap lapply/sapply in answer key (covered accurately in Loop Functions-1/2); Q9 claims every line of R code must start with #
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-scoping-rules/": {
        "must_practice": {1, 2, 3, 4, 5, 6, 7, 8, 10},
        "basic": {1, 2, 6, 8},
        "moderate": {3, 4, 5, 7, 9},
        "hard": {10},
    },
    "https://www.sanfoundry.com/r-programming-online-test/": {  # Scoping Rules - 2
        "must_practice": {2, 5, 10},
        "basic": {3},
        "moderate": {1, 2, 5},
        "hard": {10},
        "remove": {4, 6, 7, 8, 9},  # Q4 marks non-existent opt() instead of optimize(); Q6–Q9 depend on unprovided make.NegLogLik(normals) dataset
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-loop-functions/": {
        "must_practice": {2, 3, 4, 6, 7, 10},
        "basic": {2, 3, 6, 7},
        "moderate": {4, 9, 10},
        "hard": set(),
        "remove": {1, 5, 8},  # Sanfoundry errata: Q1 marks apply() instead of lapply() for lists; Q5 marks None when A/B/C are true; Q8 marks 4 args while explanation lists 3
    },
    "https://www.sanfoundry.com/r-programming-quiz-online/": {  # Loop Functions - 2
        "must_practice": {1, 2, 3, 4, 6, 7, 8, 10},
        "basic": {7},
        "moderate": {1, 2, 3, 4, 5, 8, 9, 10},
        "hard": {6},
    },
    "https://www.sanfoundry.com/tough-r-programming-questions-answers/": {  # Commands - 3
        "must_practice": {1, 3, 4, 5, 7, 9, 10},
        "basic": {1, 9, 10},
        "moderate": {3, 4, 5, 6, 7, 8},
        "hard": set(),
        "remove": {2},  # Erroneous duplicate of Q7 on the same page (marks rowMeans instead of rowsum)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-debugging-tools/": {
        "must_practice": {1, 2, 4, 5, 6},
        "basic": {1, 7},
        "moderate": {2, 4, 5, 6},
        "hard": set(),
        "remove": {3},  # Erratum duplicate of Q1: log(c(-1, 2)) produces a Warning, not an Error
    },
    "https://www.sanfoundry.com/r-programming-questions-bank/": {  # Debugging Tools - 2
        "must_practice": {1, 5, 6, 7},
        "basic": {1, 2, 3},
        "moderate": {4, 5, 6, 7, 8},
        "hard": set(),
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression/": {
        "must_practice": {4, 6, 8},
        "basic": {4, 6},
        "moderate": {2, 7},
        "hard": {8},
        "remove": {1, 3, 5},  # Obscure psych package psychometric functions (phi2poly, count.pairwise, correct.cor)
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression-2/": {
        "must_practice": {6},
        "basic": {6},
        "moderate": {3, 7},
        "hard": set(),
        "remove": {1, 2, 4, 5, 8},  # Pure regression/statistics theory without R programming content
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression-3/": {
        "must_practice": set(),
        "basic": {5},
        "moderate": set(),
        "hard": set(),
        "remove": {1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15},  # Pure regression theory without R code
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-neural-networks/": {
        "must_practice": set(),
        "basic": set(),
        "moderate": set(),
        "hard": set(),
        "remove": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},  # 100% Out of Syllabus (Biological/ANN trivia)
    },
    "https://www.sanfoundry.com/r-programming-puzzles/": {  # Packages - 3
        "must_practice": set(),
        "basic": set(),
        "moderate": set(),
        "hard": set(),
        "remove": {1, 2, 3, 4, 5, 6, 7, 8, 9, 10},  # 100% Out of Syllabus (Obscure CRAN domain packages)
    },
}


def consolidate_r_syllabus_topic(raw_syl: str, sf_topic: str, category: str) -> str:
    """Map detailed R session labels into the 5 consolidated PGCP-BDA R-Programming Syllabus Session groups."""
    if category == "REMOVE" or raw_syl.startswith("Excluded"):
        return "Excluded / Out of Syllabus (Neural Networks, Obscure CRAN Packages, Package Authoring Internals & Errata)"
    s = raw_syl.lower()
    t = sf_topic.lower()
    if any(k in t for k in ("control structures", "functions-", "scoping rules", "loop functions", "commands-3", "debugging", "linear regression")):
        return "Session 17: Functions, Control Flow, Loop Functions (apply Family), Built-in Functions & R Markdown (2T + 2L + 2SL)"
    if any(k in t for k in ("subsetting", "dplyr", "exploratory data analysis", "graphics with r", "ggplot2", "visualizing data", "commands-2")):
        return "Session 16: Tidyverse (dplyr, ggplot2, reshape2), Data Frame Manipulation, Subsetting & Visualization (2T + 2L + 2SL)"
    if any(k in t for k in ("data types", "reading datasets", "textual data formats", "connection interfaces", "commands-1", "packages-", "overview of r-2", "overview of r-3", "basics-2")):
        return "Session 15: Data Objects (Data Types & Structures), Packages, Workspace & Importing/Exporting Data (2T + 2L + 2SL)"
    if "session 17" in s and "session 14" not in s and "session 15" not in s and "session 16" not in s:
        return "Session 17: Functions, Control Flow, Loop Functions (apply Family), Built-in Functions & R Markdown (2T + 2L + 2SL)"
    if "session 16" in s and "session 15" not in s:
        return "Session 16: Tidyverse (dplyr, ggplot2, reshape2), Data Frame Manipulation, Subsetting & Visualization (2T + 2L + 2SL)"
    if "session 15" in s and "session 14" not in s:
        return "Session 15: Data Objects (Data Types & Structures), Packages, Workspace & Importing/Exporting Data (2T + 2L + 2SL)"
    return "Session 14: R Project, Installation, Basics, Help, R GUI/RStudio & Basic Arithmetic (2T + 2L + 2SL)"


def infer_r_warning(question_text: str, sf_topic: str, syl_group: str) -> str | None:
    """Attach a concise R exam tip for classic R gotchas (1-based indexing, typeof vs class, [ vs [[ vs $, NA vs NaN, dplyr verbs, apply family)."""
    q_low = question_text.lower()
    if "typeof(" in q_low and "mode(" in q_low:
        return (
            "R Exam Gotcha: For x <- 1:3, typeof(x) and class(x) return 'integer', whereas mode(x) returns 'numeric'! "
            "For x <- 4 (without L), typeof(x), mode(x), and class(x) are all 'double'/'numeric'."
        )
    if "is.na(" in q_low or "is.nan(" in q_low:
        return (
            "R Exam Gotcha: Every NaN ('Not a Number', e.g. 0/0 or log(-1)) is also treated as NA by is.na() "
            "(so is.na(c(NA, NaN)) is TRUE TRUE), whereas is.nan(NA) is FALSE!"
        )
    if "[[" in question_text or "x$" in question_text or "drop = false" in q_low:
        return (
            "Subsetting Tip: '[' returns the same class as the original object (e.g. a sublist); '[[' and '$' extract a single component. "
            "Use '[[' for computed variable names (x[[name]]), and use drop = FALSE when slicing a matrix row/column to keep it as a 2D matrix."
        )
    if any(k in q_low for k in ("lapply", "sapply", "vapply", "tapply", "mapply")):
        return (
            "Loop Functions Tip: lapply() ALWAYS returns a list; sapply() simplifies the result to a vector/matrix if possible; "
            "vapply() requires an explicit FUN.VALUE output template for type safety; tapply() applies a function over vector subsets grouped by a factor."
        )
    if "dplyr" in sf_topic.lower() or "%>%" in question_text:
        return (
            "Tidyverse (dplyr) Tip: select() picks columns (select(df, -col) drops columns), filter() picks rows by condition, "
            "arrange(df, desc(col)) sorts rows, mutate() adds/transforms columns, and group_by() + summarize() computes grouped aggregations via %>%."
        )
    return None


def build_r_questions_json() -> Path | None:
    """Extract all 60 saved HTML pages in `RSaved/`, map and curate them against the PGCP-BDA R syllabus, and write `r_questions.json`."""
    r_dir = ROOT / "RSaved"
    if not r_dir.is_dir():
        return None
    html_files = sorted(r_dir.glob("*.html"))
    if not html_files:
        return None

    from open_r_pages import TOPIC_SYLLABUS_MAP, get_ordered_topics
    from parser import parse_page
    from scraper import normalize_text

    pages_by_url: dict[str, Any] = {}
    for f in html_files:
        parsed = parse_page(f.read_bytes(), url=f.as_posix())
        if not parsed.questions:
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

    # Specific explanation notes for removed/erratum questions so students inspecting REMOVE know the exact reason
    errata_reasons: dict[tuple[str, int], tuple[str, str]] = {
        ("https://www.sanfoundry.com/r-programming-questions-answers-basics/", 2): (
            "Excluded: Sanfoundry answer-key erratum (marks 'q() is used to quit the R program' as wrong, even though q() IS the standard R quit function).",
            "Sanfoundry Erratum: q() (or quit()) IS the standard function to terminate an R session.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-basics-3/", 6): (
            "Excluded: Duplicate of Overview-1 Q3 with a wrong answer key (marks 'Functions' instead of 'Packages').",
            "Sanfoundry Erratum: R functionality is divided into Packages (correctly answered in Overview of R-1 Q3).",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-data-types-5/", 6): (
            "Excluded: Sanfoundry option typo ('Function()' printed instead of 'factor()'); covered accurately by Reading Datasets-1 Q6.",
            "Sanfoundry Typo: Factors are created using factor(), not Function().",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-reading-datasets/", 1): (
            "Excluded: Sanfoundry answer-key erratum (marks copy() instead of paste() for concatenating strings); covered accurately by Functions-2 Q9 and Console Input-2 Q5.",
            "Sanfoundry Erratum: paste() concatenates arguments into character strings, not copy().",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats/", 2): (
            "Excluded: Sanfoundry erratum (asks for the 'wrong statement' when all three statements about write.table, writeLines, and dump are true).",
            "Sanfoundry Erratum: All three statements (write.table, writeLines, dump) are true.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats-2/", 5): (
            "Excluded: Sanfoundry answer-key erratum (marks dput() instead of dump() for deparsing multiple R objects at once; see Textual Data Formats-1 Q3 & Q10).",
            "Sanfoundry Erratum: dput() deparses a single R object, whereas dump() deparses multiple R objects at once.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-packages/", 1): (
            "Excluded: Sanfoundry answer-key erratum (marks plyr instead of sqldf for running SQL queries on R data frames, contradicting its own explanation).",
            "Sanfoundry Erratum: sqldf (Option A) runs SQL queries on R data frames; plyr is for split-apply-combine.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-subsetting/", 5): (
            "Excluded: Sanfoundry erratum (marks '$ operator is used to extract elements of a list or a data frame' as wrong, contradicting Subsetting-2 Q2).",
            "Sanfoundry Erratum: The $ operator DOES extract named elements from a list or data frame.",
        ),
        ("https://www.sanfoundry.com/tricky-r-programming-questions-answers/", 1): (
            "Excluded: Sanfoundry answer-key erratum (asks how to drop the nth column but marks old[-n,] which drops the nth row; old[,-n] drops the nth column).",
            "Sanfoundry Erratum: old[, -n] (Option B) drops the nth column; old[-n, ] drops the nth row.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-dplyr-basics/", 3): (
            "Excluded: Sanfoundry answer-key erratum (marks rename instead of filter for extracting rows by logical condition; covered accurately by dplyr-2 Q3).",
            "Sanfoundry Erratum: dplyr::filter() (Option B) extracts rows matching a logical condition; rename() renames columns.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-exploratory-data-analysis/", 7): (
            "Excluded: Sanfoundry answer-key erratum (marks high-level boxplot() instead of low-level lines() for adding elements to an existing base plot).",
            "Sanfoundry Erratum: lines(), points(), and text() are low-level functions that add elements to an existing plot; boxplot() starts a new plot.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-1/", 1): (
            "Excluded: Sanfoundry answer-key erratum (marks data() instead of rep() for making a vector of repeated values; covered accurately by Data Types-6 Q4).",
            "Sanfoundry Erratum: rep() (Option A) creates a vector of repeated values; data() loads built-in datasets.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-1/", 3): (
            "Excluded: Sanfoundry answer-key erratum (marks read instead of xtabs for formula-based cross-tabulation).",
            "Sanfoundry Erratum: xtabs() (Option C) cross-tabulates tables using formulas.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-2/", 1): (
            "Excluded: Sanfoundry answer-key erratum (marks prop.table() instead of addmargins() for adding marginal sums to a table).",
            "Sanfoundry Erratum: addmargins() (Option C) adds marginal sums to an existing table; prop.table() computes proportions.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-2/", 2): (
            "Excluded: Sanfoundry answer-key erratum (marks quantile() instead of names() for listing variable names in a data.frame).",
            "Sanfoundry Erratum: names() (Option B) lists the variable names of a data.frame.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-2/", 3): (
            "Excluded: Sanfoundry answer-key erratum (marks pnorm instead of pchisq() for chi-square distributions).",
            "Sanfoundry Erratum: pchisq() (Option A) is the distribution function for chi-square; pnorm() is for the normal distribution.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-functions/", 9): (
            "Excluded: Sanfoundry arithmetic erratum (nchar('Hello, world!\\n') is 14, so 14 * 3 = 42, Option B, but key marks Option A = 32; see Functions-2 Q4 where num=1 gives 14).",
            "Sanfoundry Erratum: 'Hello, world!\\n' has 14 characters, so f(3) returns 14 * 3 = 42 (Option B), not 32.",
        ),
        ("https://www.sanfoundry.com/r-programming-multiple-choice-questions-answers/", 5): (
            "Excluded: Sanfoundry answer-key erratum (marks statement A as wrong even though its own explanation states C is the wrong statement).",
            "Sanfoundry Erratum: Statement C ('The value returned by the call to function is not a function') is the wrong statement.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-functions-6/", 2): (
            "Excluded: Sanfoundry answer-key erratum (marks lapply instead of sapply for returning a vector/data frame, contradicting its own explanation).",
            "Sanfoundry Erratum: sapply() (Option B) simplifies output to a vector/matrix, whereas lapply() returns a list.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-functions-6/", 3): (
            "Excluded: Sanfoundry answer-key erratum (marks sapply instead of lapply for returning a list, contradicting its own explanation).",
            "Sanfoundry Erratum: lapply() (Option A) always returns a list, whereas sapply() returns a simplified vector/matrix.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-functions-6/", 9): (
            "Excluded: Poorly worded question ('The line of code in R language should begin with a Hash symbol' — # starts a comment line, not executable code).",
            "Note: In R, '#' starts a comment line (covered accurately in Console Input-1 Q2 and Basics-1 Q8).",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-loop-functions/", 1): (
            "Excluded: Sanfoundry answer-key erratum (marks apply() instead of lapply() for looping over a list; covered accurately by Loop Functions-1 Q2 & Loop Functions-2 Q1).",
            "Sanfoundry Erratum: lapply() (Option B) loops over a list and evaluates a function on each element; apply() operates on array/matrix margins.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-loop-functions/", 5): (
            "Excluded: Sanfoundry answer-key erratum (marks 'None of the mentioned' when statements A, B, and C about lapply() are all true).",
            "Sanfoundry Erratum: Statements A, B, and C about lapply() are all true.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-loop-functions/", 8): (
            "Excluded: Sanfoundry answer-key erratum (marks 'four' arguments while its own explanation states lapply(X, FUN, ...) takes three arguments).",
            "Sanfoundry Erratum: lapply(X, FUN, ...) takes 3 arguments (Option B), as stated in the explanation.",
        ),
        ("https://www.sanfoundry.com/tough-r-programming-questions-answers/", 2): (
            "Excluded: Duplicate of Commands-3 Q7 on the same page with a wrong answer key (marks rowMeans instead of rowsum).",
            "Sanfoundry Erratum: rowsum(x, group) (Option D, covered in Q7) computes row sums by grouping variable.",
        ),
        ("https://www.sanfoundry.com/r-programming-questions-answers-debugging-tools/", 3): (
            "Excluded: Sanfoundry erratum (marks 'Error in log(c(-1, 2)): NaNs produced' when R actually issues a Warning, as shown in Q1).",
            "Sanfoundry Erratum: log(c(-1, 2)) returns c(NaN, 0.6931472) with a Warning message ('NaNs produced'), not a fatal Error.",
        ),
    }

    for norm_u in ordered_urls:
        page = pages_by_url[norm_u]
        meta = TOPIC_SYLLABUS_MAP.get(norm_u, {})
        base_topic = meta.get("topic") or page.topic or "R Programming"
        base_cat = meta.get("category", "SELECTIVE")
        base_syl = meta.get("syllabus_topic", base_topic)
        base_reason = meta.get("reason", "")
        curation = R_PAGE_CURATION.get(norm_u)

        for q in page.questions:
            qnum = int(q.number or 0)
            # Repair missing Answer: a on Functions-3 Q6 (knitr single document for reproducible research)
            if norm_u == "https://www.sanfoundry.com/r-programming-questions-answers-functions-3/" and qnum == 6 and not q.correct_answer:
                q.correct_answer = "A"

            exact_sig = (
                q.question.strip(),
                "|".join(f"{k}:{normalize_text(v)}" for k, v in sorted(q.options.items())),
            )
            loose_q = re.sub(r"\bthe\b", " ", normalize_text(q.question))
            loose_q = re.sub(r"\s+", " ", loose_q).strip()
            loose_sig = (loose_q, frozenset(normalize_text(v) for v in q.options.values()))

            if exact_sig in seen_exact or loose_sig in seen_loose:
                continue
            seen_exact.add(exact_sig)
            seen_loose.add(loose_sig)

            if curation:
                if qnum in curation.get("hard", set()):
                    diff = "Hard"
                elif qnum in curation.get("moderate", set()):
                    diff = "Moderate"
                else:
                    diff = "Basic"
            else:
                diff = "Moderate" if "\n" in q.question else "Basic"

            custom_warn = None
            if (norm_u, qnum) in errata_reasons:
                q_cat = "REMOVE"
                q_syl = "Excluded (Sanfoundry Answer-Key Erratum / Covered by Clean Twin)"
                q_reason, custom_warn = errata_reasons[(norm_u, qnum)]
            elif curation and qnum in curation.get("remove", set()):
                q_cat = "REMOVE"
                q_syl = "Excluded / Out of PGCP-BDA R-Programming Syllabus"
                q_reason = f"[Excluded — Out of Syllabus] Outside PGCP-BDA R Programming Sessions 14–17 ({base_topic})."
            elif base_cat == "REMOVE":
                if norm_u == "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression-3/" and qnum == 5:
                    q_cat = "SELECTIVE"
                    q_syl = "Session 17: Built-in Statistical Functions — Analysis of Variance (anova)"
                    q_reason = "[Extra Practice — Basic] ANOVA stands for Analysis of Variance (computed in R with anova() / aov())."
                else:
                    q_cat = "REMOVE"
                    q_syl = base_syl
                    q_reason = base_reason
            elif curation:
                if qnum in curation.get("must_practice", set()):
                    q_cat = "KEEP"
                    q_syl = base_syl
                    q_reason = f"[Must-Practice {diff} MCQ] {base_reason}"
                else:
                    q_cat = "SELECTIVE"
                    q_syl = base_syl
                    q_reason = f"[Extra Practice — {diff}] {base_reason}"
            else:
                q_cat = base_cat
                q_syl = base_syl
                q_reason = base_reason

            syl_group = consolidate_r_syllabus_topic(q_syl, base_topic, q_cat)
            warn_msg = custom_warn or infer_r_warning(q.question, base_topic, syl_group)

            raw_records.append(
                {
                    "topic": base_topic,
                    "category": q_cat,
                    "difficulty": diff,
                    "must_practice": q_cat == "KEEP",
                    "syllabus_topic": syl_group,
                    "syllabus_detail": q_syl,
                    "reason": q_reason,
                    "faculty_alignment": q_syl,
                    "warning": warn_msg,
                    "question": q.question,
                    "options": q.options,
                    "correct_answer": q.correct_answer,
                    "explanation": q.explanation,
                    "source_url": norm_u.rstrip("/"),
                }
            )

    session_order_list = [
        "Session 14: R Project, Installation, Basics, Help, R GUI/RStudio & Basic Arithmetic (2T + 2L + 2SL)",
        "Session 15: Data Objects (Data Types & Structures), Packages, Workspace & Importing/Exporting Data (2T + 2L + 2SL)",
        "Session 16: Tidyverse (dplyr, ggplot2, reshape2), Data Frame Manipulation, Subsetting & Visualization (2T + 2L + 2SL)",
        "Session 17: Functions, Control Flow, Loop Functions (apply Family), Built-in Functions & R Markdown (2T + 2L + 2SL)",
        "Excluded / Out of Syllabus (Neural Networks, Obscure CRAN Packages, Package Authoring Internals & Errata)",
    ]
    order_index = {name: i for i, name in enumerate(session_order_list)}
    cat_order = {"KEEP": 0, "SELECTIVE": 1, "REMOVE": 2}
    diff_order = {"Basic": 0, "Moderate": 1, "Hard": 2}

    raw_records.sort(
        key=lambda r: (
            order_index.get(r["syllabus_topic"], 99),
            cat_order.get(r["category"], 9),
            diff_order.get(r["difficulty"], 9),
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

    keep_qs = [q for q in questions if q["category"] == "KEEP"]
    r_json_data = {
        "subject": "R Programming — Data Objects, Subsetting, Workspace/File I/O, Tidyverse (dplyr/ggplot2), Functions & apply Family",
        "syllabus": "PGCP-BDA (ACTS, Pune) — R Programming (Sessions 14–17: 8T + 8L + 8SL)",
        "source": "Sanfoundry",
        "total_questions": len(questions),
        "counts": {
            "KEEP": len(keep_qs),
            "SELECTIVE": sum(1 for q in questions if q["category"] == "SELECTIVE"),
            "REMOVE": sum(1 for q in questions if q["category"] == "REMOVE"),
        },
        "difficulty_counts": {
            "ALL": {
                "Basic": sum(1 for q in questions if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in questions if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in questions if q["difficulty"] == "Hard"),
            },
            "KEEP": {
                "Basic": sum(1 for q in keep_qs if q["difficulty"] == "Basic"),
                "Moderate": sum(1 for q in keep_qs if q["difficulty"] == "Moderate"),
                "Hard": sum(1 for q in keep_qs if q["difficulty"] == "Hard"),
            },
        },
        "topics": topics,
        "syllabus_markdown": R_SYLLABUS_MD,
        "questions": questions,
    }

    out_path = ROOT / "r_questions.json"
    out_path.write_text(json.dumps(r_json_data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    # Write standalone Must-Practice Shortlist CSV and Markdown study guide in Resource/
    res_dir = ROOT / "Resource"
    res_dir.mkdir(parents=True, exist_ok=True)
    csv_path = res_dir / "R_Programming_Must_Practice_Shortlist.csv"
    with csv_path.open("w", encoding="utf-8-sig", newline="") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["Question ID", "Difficulty", "Syllabus Session", "Sanfoundry Topic", "Question Stem", "Correct Answer", "Syllabus Alignment"])
        for q in keep_qs:
            stem_one_line = " | ".join(ln.strip() for ln in q["question"].splitlines() if ln.strip())
            writer.writerow([q["id"], q["difficulty"], q["syllabus_topic"], q["topic"], stem_one_line, q["correct_answer"], q["syllabus_detail"]])

    md_lines = [
        "# R Programming — Must-Practice MCQ Shortlist & LLM Question Varieties Guide (PGCP-BDA)",
        "",
        f"- **Total Unique Questions Extracted:** `{len(questions)}` (from 60 saved HTML pages in `RSaved/`)",
        f"- **Must-Practice Shortlist (`KEEP`):** `{len(keep_qs)}` hand-picked high-yield MCQs (`{r_json_data['difficulty_counts']['KEEP']['Basic']}` Basic • `{r_json_data['difficulty_counts']['KEEP']['Moderate']}` Moderate • `{r_json_data['difficulty_counts']['KEEP']['Hard']}` Hard)",
        f"- **Extra Practice (`SELECTIVE`):** `{r_json_data['counts']['SELECTIVE']}` secondary/variation drills (R history trivia, Lattice plot options, POSIX date extras, interactive debugger tools)",
        f"- **Excluded (`REMOVE`):** `{r_json_data['counts']['REMOVE']}` out-of-syllabus or broken-key questions (biological Neural Networks, obscure CRAN domain packages like `paleoTS`/`satin`/`adegenet`, CRAN package authoring `.Rbuildignore`/`DCF` internals, defunct 2010 `ggplot2` v0.8 functions, pure regression theory without R code, and Sanfoundry answer-key errata)",
        "",
        "## Session-Wise Shortlist Breakdown",
        "",
        "| Syllabus Session | Total | Shortlist (`KEEP`) | Basic | Moderate | Hard | Extra (`SELECTIVE`) |",
        "|---|---:|---:|---:|---:|---:|---:|",
    ]
    for s_name in session_order_list:
        s_all = [q for q in questions if q["syllabus_topic"] == s_name]
        if not s_all:
            continue
        s_keep = [q for q in s_all if q["category"] == "KEEP"]
        s_sel = [q for q in s_all if q["category"] == "SELECTIVE"]
        b_cnt = sum(1 for q in s_keep if q["difficulty"] == "Basic")
        m_cnt = sum(1 for q in s_keep if q["difficulty"] == "Moderate")
        h_cnt = sum(1 for q in s_keep if q["difficulty"] == "Hard")
        md_lines.append(f"| {s_name} | {len(s_all)} | **{len(s_keep)}** | {b_cnt} | {m_cnt} | {h_cnt} | {len(s_sel)} |")

    md_lines.extend(["", "---", ""])
    for s_name in session_order_list:
        s_keep = [q for q in keep_qs if q["syllabus_topic"] == s_name]
        if not s_keep:
            continue
        md_lines.append(f"## {s_name} ({len(s_keep)} Must-Practice MCQs)")
        md_lines.append("")
        for diff_label in ("Basic", "Moderate", "Hard"):
            d_qs = [q for q in s_keep if q["difficulty"] == diff_label]
            if not d_qs:
                continue
            id_badges = ", ".join(f"`#{q['id']}`" for q in d_qs)
            md_lines.append(f"### {diff_label} Level ({len(d_qs)} Qs): {id_badges}")
            md_lines.append("")
            for q in d_qs:
                stem_short = " // ".join(ln.strip() for ln in q["question"].splitlines() if ln.strip())
                if len(stem_short) > 140:
                    stem_short = stem_short[:137] + "..."
                md_lines.append(f"- **#{q['id']}** *({q['topic']})*: {stem_short} — **Ans: `{q['correct_answer']}`**")
            md_lines.append("")

    md_lines.extend([
        "---",
        "",
        "## 12 High-Yield Question Varieties to Practice & Generate from LLMs",
        "",
        "Sanfoundry's R pages are heavily theoretical or based on Roger Peng's Coursera book. For your **PGCP-BDA Theory & Lab Exams**, make sure you generate and practice these **12 high-yield code-output & scenario varieties**:",
        "",
        "1. **Atomic Coercion Hierarchy & `typeof()` vs `mode()` vs `class()` Traps** (`logical` → `integer` → `numeric` → `character`, `5` vs `5L`, `c(TRUE, 2L, 3.5)`, `c(1, 'a', FALSE)`, `as.numeric(c('12', 'abc'))` producing `NA` with warning).",
        "2. **Vector Recycling & Element-Wise Matrix Arithmetic** (`c(3, 2, 4) * c(1, 2)` recycling with warning, element-wise `A * B` vs true matrix multiplication `A %*% B`, `1:4 + 6:9`, `sum()`, `mean()`, `prod()` with `na.rm = TRUE`).",
        "3. **Missing & Special Values Quartet (`NA`, `NaN`, `Inf`, `NULL`)** (`is.na(c(1, NA, NaN))` returning `FALSE TRUE TRUE` vs `is.nan(c(1, NA, NaN))` returning `FALSE FALSE TRUE`, `length(NULL) == 0` vs `length(NA) == 1`, `if (x > 0)` throwing an error when `x` is `NA`).",
        "4. **1-Based Subsetting & List vs Data Frame Extraction (`[` vs `[[` vs `$`)** (`x[1]` returning a 1-element sublist vs `x[[1]]` extracting the object itself; computed variable names `x[[name]]` vs literal `x$name`; partial matching `x$a` and `x[['a', exact=FALSE]]`; nested list indexing `x[[c(1, 3)]]`; negative indexing `df[-n, ]` vs `df[, -c(i, j)]`; `m[1, , drop = FALSE]`).",
        "5. **Matrix Construction & Reshaping (`byrow`, `rbind`/`cbind`, `t()`, `reshape2::melt` & `dcast`)** (Default column-wise fill `matrix(1:6, nrow = 2, ncol = 3)` vs `byrow = TRUE`; `dim(x) <- c(3, 2)`; wide-to-long `melt()` vs long-to-wide `dcast()`).",
        "6. **Factors (`factor()`, `levels`, `table()`, `unclass()`)** (Alphabetical default level ordering vs explicit `levels = c('yes', 'no')`; `as.numeric(factor(c('10', '20')))` returning internal level codes `1, 2` instead of `10, 20`).",
        "7. **Data Frame Manipulation & Multi-Column Sorting (Base R vs `dplyr` Tidyverse Pipelines)** (`df[order(df$col1, -df$col2), ]`, `subset()`, `complete.cases(df)`, and `dplyr` pipelines `df %>% filter(...) %>% select(-col) %>% mutate(...) %>% group_by(...) %>% summarize(...) %>% arrange(desc(...))`).",
        "8. **Workspace, File Connections & Data Import/Export (`read.table`, `read.csv`, `writexl`, `jsonlite`, `xml2`)** (`read.table()` vs `read.csv()` default `header` and `sep`; `save()`/`save.image()`/`load()` vs `dput()`/`dget()` vs `dump()`/`source()`; `writexl::write_xlsx()` from Session 15 Lab; XML/JSON loading from Session 16 Lab).",
        "9. **Function Arguments, Lazy Evaluation & `...` Exact Matching** (Default arguments, unused parameters throwing no error until evaluated due to lazy evaluation, arguments after `...` in `paste(..., sep=':', collapse=',')` requiring exact full names, `invisible()`, `switch()` multi-branch dispatch).",
        "10. **Lexical Scoping & Function Closures** (Free variables resolved in the environment where the function was *defined*, not where it was called; constructor functions like `make.power(n)`).",
        "11. **The `apply` Family & `split()` Grouping Paradigm (Session 17 `ChickWeight` Lab)** (`lapply` always returning a `list`, `sapply` simplifying to vector/matrix, `vapply` enforcing output type signature, `apply(m, 1, sum)` row-wise vs `apply(m, 2, max)` column-wise, `tapply(vec, factor, mean)`, and `split(ChickWeight, ChickWeight$Diet)`).",
        "12. **Base Graphics vs `ggplot2` & Built-in Datasets (`airquality`, `diamonds`, `ChickWeight`)** (High-level `plot()`, `hist()`, `boxplot()`, `barplot()`, `pie()` vs low-level `lines()`, `points()`, `text()`, `title()`, `legend()`; `par(mfrow=c(2,2), pch=19, col='red')`; `ggplot(diamonds, aes(...)) + geom_bar()`).",
    ])

    (res_dir / "R_Programming_Must_Practice_Shortlist.md").write_text("\n".join(md_lines) + "\n", encoding="utf-8")
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
    is_python = json_path.name == "python_questions.json" or subj_id.startswith("python")
    is_linux_cloud = json_path.name == "linux_cloud_questions.json" or subj_id.startswith("linux")
    is_r = json_path.name == "r_questions.json" or subj_id.startswith("r-programming")

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
    elif is_python:
        subj_id = "python"
        subj_name = "Python Programming — Fundamentals, Data Structures, Functional, Regex, OOP, Exceptions & File I/O"
    elif is_linux_cloud:
        subj_id = "linux-cloud"
        subj_name = "Linux Programming & Cloud Computing — Bash, Commands, Permissions, Vi, Git, Virtualization, AWS & Azure"
    elif is_r:
        subj_id = "r-programming"
        subj_name = "R Programming — Data Objects, Subsetting, Workspace/File I/O, Tidyverse (dplyr/ggplot2), Functions & apply Family"

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
        diff = q.get("difficulty")

        topic_counts[topic] += 1
        topic_info[topic] = {"category": cat, "reason": reason, "syllabus_topic": syl}

        q_entry: dict[str, Any] = {
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
        if diff:
            q_entry["difficulty"] = str(diff)
        if "must_practice" in q:
            q_entry["must_practice"] = bool(q["must_practice"])
        questions.append(q_entry)

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

    has_diff = any(q.get("difficulty") for q in questions)
    subj_obj: dict[str, Any] = {
        "id": subj_id,
        "name": subj_name,
        "has_priority_categories": is_hadoop or any(q["category"] != "KEEP" for q in questions),
        "has_syllabus_mapping": is_hadoop or any(q["syllabus_topic"] != q["topic"] for q in questions),
        "has_difficulty_levels": has_diff,
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
    if has_diff:
        subj_obj["difficulty_counts"] = {
            "ALL": {
                "Basic": sum(1 for q in questions if q.get("difficulty") == "Basic"),
                "Moderate": sum(1 for q in questions if q.get("difficulty") == "Moderate"),
                "Hard": sum(1 for q in questions if q.get("difficulty") == "Hard"),
            },
            "KEEP": {
                "Basic": sum(1 for q in questions if q["category"] == "KEEP" and q.get("difficulty") == "Basic"),
                "Moderate": sum(1 for q in questions if q["category"] == "KEEP" and q.get("difficulty") == "Moderate"),
                "Hard": sum(1 for q in questions if q["category"] == "KEEP" and q.get("difficulty") == "Hard"),
            },
        }
    return subj_obj


def main() -> None:
    java_out = build_java_questions_json()
    if java_out:
        print(f"Built {java_out.name} from JavaSaved/ HTML files.")

    python_out = build_python_questions_json()
    if python_out:
        print(f"Built {python_out.name} from PythonSaved/ HTML files.")

    linux_cloud_out = build_linux_cloud_questions_json()
    if linux_cloud_out:
        print(f"Built {linux_cloud_out.name} from LinuxSaved/ and LinuxSaved/cloud/ HTML files.")

    r_out = build_r_questions_json()
    if r_out:
        print(f"Built {r_out.name} from RSaved/ HTML files.")

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
