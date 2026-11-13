"""Interactive helper to open Sanfoundry Hadoop/Big Data topic pages in batches for quick Ctrl+S saving.

Mapped against: `HadoopSaved/Big_Data_Technologies_Syllabus.pdf` (PGCP-BDA, ACTS Pune)
Source hub page: `HadoopSaved/HadoophomeSanfoundry.html`

Usage:
  python open_hadoop_pages.py                  # Opens missing KEEP (core syllabus) pages in batches of 5
  python open_hadoop_pages.py --scope selective # Opens missing SELECTIVE pages in batches of 5
  python open_hadoop_pages.py --scope all       # Opens all 82 unique pages (KEEP + SELECTIVE + REMOVE)
  python open_hadoop_pages.py --batch 10        # Open 10 tabs per batch
  python open_hadoop_pages.py --status          # Just show which pages are already saved vs missing
"""
from __future__ import annotations

import argparse
import re
import time
import webbrowser
from pathlib import Path
from typing import Any
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
HADOOP_DIR = ROOT / "HadoopSaved"
HUB_HTML = HADOOP_DIR / "HadoophomeSanfoundry.html"

# Syllabus mapping based on `HadoopSaved/Big_Data_Technologies_Syllabus.pdf` (PGCP-BDA)
TOPIC_SYLLABUS_MAP: dict[str, dict[str, str]] = {
    # --- CHAPTER 1: Basics of Hadoop (Sessions 1, 2 & 3) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-history-hadoop/": {
        "topic": "History of Hadoop",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Introduction to Hadoop",
        "reason": "Directly covers A Brief History of Hadoop, Evolution of Hadoop, and Hadoop Releases.",
    },
    "https://www.sanfoundry.com/bigdata-questions-answers/": {
        "topic": "Big Data",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Big Data Overview",
        "reason": "Covers Big Data Overview, Sources of Big Data, and Big Data Adoption.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-ecosystem/": {
        "topic": "Hadoop Ecosystem",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Introduction to Hadoop",
        "reason": "Covers Introduction to Hadoop and its components (HDFS, YARN, MapReduce, Hive, HBase, Spark, Kafka).",
    },
    # --- CHAPTER 2: MapReduce (Sessions 7 & 9) ---
    "https://www.sanfoundry.com/mapreduce-questions-answers/": {
        "topic": "Introduction to MapReduce",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Covers Hadoop MapReduce paradigm, Map and Reduce tasks.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-analyzing-data-hadoop/": {
        "topic": "Analyzing Data with Hadoop",
        "category": "KEEP",
        "syllabus_topic": "Session 7: Hadoop Architecture",
        "reason": "Explicitly listed in Session 7: Analyzing the Data with Hadoop.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-scaling-out-hadoop/": {
        "topic": "Scaling out in Hadoop",
        "category": "KEEP",
        "syllabus_topic": "Session 5: HDFS & Session 9: MapReduce",
        "reason": "Covers Scaling and Rebalancing, Data Flow, and Combiner functions.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-streaming/": {
        "topic": "Hadoop Streaming",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce & Session 13: HiveQL Scripts",
        "reason": "Covers Hadoop Streaming and custom MapReduce scripts.",
    },
    # --- CHAPTER 3: HDFS (Sessions 4, 5 & 8) ---
    "https://www.sanfoundry.com/hadoop-filesystem-hdfs-questions-answers/": {
        "topic": "Introduction to HDFS",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Hadoop Distributed File System",
        "reason": "Covers Distributed File System, Core components of HDFS, NameNode, Secondary NameNode, DataNode.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-java-interface/": {
        "topic": "Java Interface",
        "category": "KEEP",
        "syllabus_topic": "Session 8: HDFS Data Storage",
        "reason": "Explicitly listed in Session 8: Java Interfaces to HDFS and HDFS Java API Overview.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-data-flow/": {
        "topic": "Data Flow",
        "category": "KEEP",
        "syllabus_topic": "Session 8: HDFS Data Storage",
        "reason": "Explicitly covers Anatomy of writing and reading file in HDFS, Data Pipelining, and Read/Write failures.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-archives/": {
        "topic": "Hadoop Archives",
        "category": "KEEP",
        "syllabus_topic": "Session 7: Hadoop Architecture & Shell Commands",
        "reason": "Covers HDFS tools, HAR archives, and common Hadoop commands.",
    },
    # --- CHAPTER 4: Hadoop I/O (SELECTIVE - Session 8 & 12 Storage Formats) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-io/": {
        "topic": "Hadoop I/O",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 8: HDFS Data Storage",
        "reason": "Low-level Hadoop I/O; useful background for HDFS read/write integrity and storage.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-compression/": {
        "topic": "Compression",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12: HiveQL Storage Formats & HDFS",
        "reason": "Codec and compression concepts useful for Hive Storage Formats and MapReduce.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-data-integrity/": {
        "topic": "Data Integrity",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 8: HDFS Data Storage",
        "reason": "Covers checksums and handling read/write corruption in HDFS.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-serialization/": {
        "topic": "Serialization",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: MapReduce & Session 12: Storage Formats",
        "reason": "Writable interface and serialization concepts used in MapReduce and Hive.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-avro-1/": {
        "topic": "Avro-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12: HiveQL (Storage Formats)",
        "reason": "Avro storage format is relevant to Session 12 (Storage Formats in Hive/Hadoop).",
    },
    "https://www.sanfoundry.com/arvo-interview-questions-answers/": {
        "topic": "Avro-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12: HiveQL (Storage Formats)",
        "reason": "Secondary questions on Avro serialization and schema evolution.",
    },
    # --- CHAPTER 5: Developing a MapReduce Application (Session 9) ---
    "https://www.sanfoundry.com/hadoop-interview-questions-answers/": {
        "topic": "MapReduce Development-1",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Core MapReduce development, driver/mapper/reducer setup.",
    },
    "https://www.sanfoundry.com/hadoop-mapreduce-questions-answers/": {
        "topic": "MapReduce Development-2",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Core MapReduce execution, MRUnit, local runner, and cluster testing.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-freshers/": {
        "topic": "MapReduce Features-1",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Explicitly in Session 9: MapReduce features – brief overview (Counters, Side Data).",
    },
    "https://www.sanfoundry.com/mapreduce-interview-questions-answers/": {
        "topic": "MapReduce Features-2",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Explicitly in Session 9: Shuffle and Sort, sorting and joining in MapReduce.",
    },
    # --- CHAPTER 6: Working of MapReduce (Sessions 6, 7 & 9) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-configuration/": {
        "topic": "Hadoop Configuration",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Hadoop Cluster & Configuration",
        "reason": "Explicitly in Session 6: Setting up a Hadoop Cluster, Hadoop Configuration.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-security-hadoop/": {
        "topic": "Security in Hadoop",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Hadoop Cluster & Configuration",
        "reason": "Explicitly in Session 6: Hadoop Configuration, Security in Hadoop, Administering Hadoop.",
    },
    "https://www.sanfoundry.com/hadoop-interview-questions-answers-freshers/": {
        "topic": "MapReduce Job-1",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Explicitly in Session 9: Task execution – conceptual overview, Job anatomy.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-mapreduce-job-2/": {
        "topic": "MapReduce Job-2",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Covers Shuffle and Sort, task execution, speculative execution, and failures.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-yarn-1/": {
        "topic": "YARN-1",
        "category": "KEEP",
        "syllabus_topic": "Session 3 & Session 7: Hadoop Architecture (YARN)",
        "reason": "Covers YARN architecture, ResourceManager, NodeManager, and ApplicationMaster.",
    },
    # --- CHAPTER 7: MapReduce Types and Formats (Session 9) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-experienced/": {
        "topic": "MapReduce Types",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce",
        "reason": "Covers Map and Reduce input/output types, Partitioner, and Combiner.",
    },
    "https://www.sanfoundry.com/hadoop-interview-questions-answers-experienced/": {
        "topic": "MapReduce Formats",
        "category": "KEEP",
        "syllabus_topic": "Session 9: MapReduce & Session 12: Storage Formats",
        "reason": "Covers InputFormat, InputSplit, RecordReader, TextInputFormat, SequenceFile.",
    },
    # --- CHAPTER 8: Administering Hadoop (Sessions 5, 6 & 8) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-hdfs-administration/": {
        "topic": "HDFS Administration",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Administering Hadoop & Session 8: HDFS Admin Commands",
        "reason": "Explicitly in Session 6 (Administering Hadoop) & Session 8 (HDFS user and admin commands).",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hdfs-maintenance/": {
        "topic": "HDFS Maintenance",
        "category": "KEEP",
        "syllabus_topic": "Session 6: HDFS Monitoring & Maintenance",
        "reason": "Explicitly in Session 6: HDFS – Monitoring & Maintenance, Fsck, Balancer.",
    },
    # --- CHAPTER 9: Pig (REMOVE - Not in PGCP-BDA Syllabus) ---
    "https://www.sanfoundry.com/pig-questions-answers/": {
        "topic": "Introduction to Pig",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Pig)",
        "reason": "Apache Pig is not part of the PGCP-BDA Big Data Technologies syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-pig-latin/": {
        "topic": "Pig Latin",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Pig)",
        "reason": "Apache Pig is not part of the PGCP-BDA Big Data Technologies syllabus.",
    },
    "https://www.sanfoundry.com/pig-interview-questions-answers/": {
        "topic": "User-defined functions in Pig",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Pig)",
        "reason": "Apache Pig is not part of the PGCP-BDA Big Data Technologies syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-data-processing-operators-pig/": {
        "topic": "Data processing operators in Pig",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Pig)",
        "reason": "Apache Pig is not part of the PGCP-BDA Big Data Technologies syllabus.",
    },
    # --- CHAPTER 10: Hive and HBase (Sessions 10, 11, 12, 13 & 14) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-hive/": {
        "topic": "Introduction to Hive",
        "category": "KEEP",
        "syllabus_topic": "Session 11: Hive",
        "reason": "Explicitly in Session 11: Introduction to Hive, Hive architecture, Metastore, Comparison with RDBMS.",
    },
    "https://www.sanfoundry.com/hive-questions-answers/": {
        "topic": "HiveQL-1",
        "category": "KEEP",
        "syllabus_topic": "Session 12: HiveQL",
        "reason": "Explicitly in Session 12: Datatypes, Operators, Functions, Managed & External Tables, Partitions.",
    },
    "https://www.sanfoundry.com/hive-interview-questions-answers/": {
        "topic": "Querying data with HiveQL-1",
        "category": "KEEP",
        "syllabus_topic": "Session 13: Querying with HiveQL & Session 14: Hive UDFs",
        "reason": "Explicitly in Sessions 13 & 14: Sorting, Aggregating, Joins, Views, UDFs.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-hbase/": {
        "topic": "Introduction to HBase",
        "category": "KEEP",
        "syllabus_topic": "Session 10: HBase",
        "reason": "Explicitly in Session 10: Overview of HBase, HBase architecture, Comparison with RDBMS.",
    },
    "https://www.sanfoundry.com/hbase-questions-answers/": {
        "topic": "Schema Design in HBase",
        "category": "KEEP",
        "syllabus_topic": "Session 10: HBase",
        "reason": "Covers HBase tables, column families, row keys, and shell operations.",
    },
    # --- CHAPTER 11: ZooKeeper, Sqoop and Cassandra ---
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-zookeeper/": {
        "topic": "Introduction to Zookeeper",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (ZooKeeper)",
        "reason": "Standalone ZooKeeper internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/zookeeper-interview-questions-answers/": {
        "topic": "The ZooKeeper Service-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (ZooKeeper)",
        "reason": "Standalone ZooKeeper internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-multiple-choice-questions-answers/": {
        "topic": "The ZooKeeper Service-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (ZooKeeper)",
        "reason": "Standalone ZooKeeper internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-sqoop/": {
        "topic": "Introduction to Sqoop",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12 & 15: Data Ingestion / ETL",
        "reason": "Useful context for RDBMS-to-HDFS/Hive ingestion alongside ETL pipelines.",
    },
    "https://www.sanfoundry.com/sqoop-interview-questions-answers/": {
        "topic": "Sqoop with Hadoop-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12 & 15: Data Ingestion / ETL",
        "reason": "Secondary questions on Sqoop imports/exports with Hive and HDFS.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-cassandra/": {
        "topic": "Introduction to Cassandra",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Cassandra)",
        "reason": "Cassandra is not in the PGCP-BDA syllabus (HBase is the covered NoSQL store).",
    },
    "https://www.sanfoundry.com/cassandra-interview-questions-answers/": {
        "topic": "Cassandra with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Cassandra)",
        "reason": "Cassandra is not in the PGCP-BDA syllabus.",
    },
    # --- CHAPTER 12: Incubator Projects, Chukwa, Ambari, Knox, HDT (REMOVE) ---
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-incubators-1/": {
        "topic": "Hadoop Incubators-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Incubator Projects)",
        "reason": "Legacy Apache Incubator subprojects are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-incubators-2/": {
        "topic": "Hadoop Incubators-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Incubator Projects)",
        "reason": "Legacy Apache Incubator subprojects are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-incubators-3/": {
        "topic": "Hadoop Incubators-3",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Incubator Projects)",
        "reason": "Legacy Apache Incubator subprojects are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-chuckwa-hadoop-1/": {
        "topic": "Chuckwa with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Chukwa)",
        "reason": "Apache Chukwa is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-ambari-hadoop/": {
        "topic": "Ambari with Hadoop",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Ambari)",
        "reason": "Apache Ambari is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-knox-hadoop/": {
        "topic": "Knox with Hadoop",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Knox)",
        "reason": "Apache Knox is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hdt-hadoop/": {
        "topic": "HDT with Hadoop",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (HDT)",
        "reason": "Hadoop Development Tools (HDT) is not in the syllabus.",
    },
    # --- CHAPTER 13: Spark, Flume, Lucene, Hama, HCatalog, Mahout, Drill, Crunch, Thrift ---
    "https://www.sanfoundry.com/hadoop-questions-answers-spark-hadoop-1/": {
        "topic": "Spark with Hadoop-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 19–23: Apache Spark & Spark with Hadoop",
        "reason": "Directly covers Apache Spark APIs, RDDs, and Working with Spark with Hadoop.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-flume-hadoop/": {
        "topic": "Flume with Hadoop",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Flume)",
        "reason": "Apache Flume is not in the syllabus (Kafka is used for streaming ingestion).",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-lucene-hadoop-1/": {
        "topic": "Lucene with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Lucene)",
        "reason": "Apache Lucene is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hama-hadoop-1/": {
        "topic": "Hama with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Hama)",
        "reason": "Apache Hama is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-introduction-hcatalog/": {
        "topic": "Introduction to HCatalog",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 11 & 12: Hive Metastore / Tables",
        "reason": "Useful metadata/table management context for Hive.",
    },
    "https://www.sanfoundry.com/basic-hadoop-questions-answers/": {
        "topic": "HCatalog with Hadoop-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 11 & 12: Hive Metastore / Tables",
        "reason": "Includes general Hadoop & HCatalog questions.",
    },
    "https://www.sanfoundry.com/hcatalog-interview-questions-answers/": {
        "topic": "HCatalog with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (HCatalog Deep Dive)",
        "reason": "Deep HCatalog specifics outside core Hive syllabus.",
    },
    "https://www.sanfoundry.com/advanced-hadoop-questions-answers/": {
        "topic": "Mahout with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Mahout)",
        "reason": "Apache Mahout is not in the syllabus (Spark MLlib is covered in Sessions 30 & 31).",
    },
    "https://www.sanfoundry.com/tricky-hadoop-questions-answers/": {
        "topic": "Drill with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Drill)",
        "reason": "Apache Drill is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-crunch-hadoop-1/": {
        "topic": "Crunch with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Crunch)",
        "reason": "Apache Crunch is not in the syllabus.",
    },
    "https://www.sanfoundry.com/crunch-interview-questions-answers/": {
        "topic": "Crunch with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Crunch)",
        "reason": "Apache Crunch is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-thrift-hadoop-1/": {
        "topic": "Thrift with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Thrift)",
        "reason": "Apache Thrift is not in the syllabus.",
    },
    "https://www.sanfoundry.com/thrift-interview-questions-answers/": {
        "topic": "Thrift with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Thrift)",
        "reason": "Apache Thrift is not in the syllabus.",
    },
    # --- CHAPTER 14: Oozie, Orchestration, Kafka, Cloud, Libraries & Utilities ---
    "https://www.sanfoundry.com/hadoop-questions-answers-oozie-hadoop-1/": {
        "topic": "Oozie with Hadoop-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Oozie)",
        "reason": "Apache Oozie is not in the syllabus (Apache Airflow/Informatica is covered in Sessions 15–18).",
    },
    "https://www.sanfoundry.com/oozie-interview-questions-answers/": {
        "topic": "Oozie with Hadoop-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Oozie)",
        "reason": "Apache Oozie is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-oozie-interview-questions-answers/": {
        "topic": "Oozie with Hadoop-3",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Oozie)",
        "reason": "Apache Oozie is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-orchestration-hadoop/": {
        "topic": "Orchestration in Hadoop",
        "category": "KEEP",
        "syllabus_topic": "Sessions 15–18: ETL Data Pipelines & Orchestration",
        "reason": "Covers workflow orchestration concepts in Hadoop ecosystems.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-bigtop/": {
        "topic": "BigTop",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache BigTop)",
        "reason": "Apache BigTop is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-impala/": {
        "topic": "Impala",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Impala)",
        "reason": "Apache Impala is not in the syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-storm/": {
        "topic": "Storm",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Apache Storm)",
        "reason": "Apache Storm is not in the syllabus (Spark Streaming & Kafka are covered).",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-kafka-hadoop-1/": {
        "topic": "Kafka with Hadoop-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 25–28: Apache Kafka & Spark Streaming",
        "reason": "Explicitly in Sessions 25–28: Introduction to Kafka, Kafka Producer/Consumer, Kafka Connect.",
    },
    "https://www.sanfoundry.com/kafka-interview-questions-answers/": {
        "topic": "Kafka with Hadoop-2",
        "category": "KEEP",
        "syllabus_topic": "Sessions 25–28: Apache Kafka & Spark Streaming",
        "reason": "Explicitly in Sessions 25–28: Kafka architecture, topics, partitions, brokers, and consumers.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-libraries-1/": {
        "topic": "Hadoop Libraries-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 3 & 7: Hadoop Architecture & Ecosystem",
        "reason": "General Hadoop libraries and ecosystem utilities.",
    },
    "https://www.sanfoundry.com/hadoop-libraries-interview-questions-answers/": {
        "topic": "Hadoop Libraries-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Miscellaneous Libraries)",
        "reason": "Niche third-party libraries outside the core syllabus.",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-utilities-1/": {
        "topic": "Hadoop Utilities-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 6 & 7: Hadoop Commands & Benchmarks",
        "reason": "Covers DistCp, Hadoop benchmarks, and command-line utilities.",
    },
    "https://www.sanfoundry.com/tough-hadoop-questions-answers/": {
        "topic": "Hadoop Utilities-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 6 & 7: Hadoop Commands & Utilities",
        "reason": "Additional general Hadoop utility questions.",
    },
    "https://www.sanfoundry.com/cloudera-questions-answers/": {
        "topic": "Local Hadoop Cloudera",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Hadoop Distributions & Session 6: Cluster Setup",
        "reason": "Explicitly in Session 3 (Hadoop Distributions and Vendors) & Session 6 (Cluster Setup).",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-hadoop-microsoft-azure/": {
        "topic": "Hadoop on Microsoft Azure",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Hadoop in the Cloud & Session 32: Cloud Platforms",
        "reason": "Covers Hadoop in the cloud (Session 6) and cloud Big Data platforms (Session 32).",
    },
    "https://www.sanfoundry.com/amazon-elastic-mapreduce-questions-answers/": {
        "topic": "Amazon Elastic MapReduce",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Hadoop in the Cloud & Session 32: AWS EMR",
        "reason": "Explicitly named in Session 32: Overview of cloud platforms (e.g. Databricks, AWS EMR).",
    },
    "https://www.sanfoundry.com/hadoop-questions-answers-amazon-ec2-s3-services/": {
        "topic": "Amazon EC2/S3 services",
        "category": "KEEP",
        "syllabus_topic": "Session 6: Hadoop in the Cloud & Session 32: Cloud Platforms",
        "reason": "Covers running Hadoop on AWS EC2/S3 cloud storage (Sessions 6 & 32).",
    },
}


def get_saved_urls(directory: Path) -> set[str]:
    """Scan all `.html` files in `HadoopSaved` and return the canonical Sanfoundry URLs already saved."""
    saved: set[str] = set()
    if not directory.is_dir():
        return saved
    for html_file in directory.glob("*.html"):
        if html_file.name == "HadoophomeSanfoundry.html":
            continue
        try:
            text = html_file.read_text(encoding="utf-8", errors="ignore")
            # Check canonical link or og:url or saved-from comment
            m_canon = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', text, re.I)
            if m_canon:
                saved.add(m_canon.group(1).rstrip("/") + "/")
                continue
            m_og = re.search(r'<meta[^>]+property=["\']og:url["\'][^>]+content=["\']([^"\']+)["\']', text, re.I)
            if m_og:
                saved.add(m_og.group(1).rstrip("/") + "/")
                continue
            m_comment = re.search(r"saved from url=\(\d+\)(https?://[^\s>\"']+)", text, re.I)
            if m_comment:
                saved.add(m_comment.group(1).rstrip("/") + "/")
        except Exception:
            pass
    return saved


def get_ordered_topics() -> list[dict[str, Any]]:
    """Return the ordered list of unique topic links from `HadoophomeSanfoundry.html` with syllabus mapping."""
    items: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    if HUB_HTML.is_file():
        soup = BeautifulSoup(HUB_HTML.read_text(encoding="utf-8", errors="ignore"), "html.parser")
        content = soup.select_one(".entry-content") or soup
        for a in content.find_all("a", href=True):
            href = a["href"].strip()
            if "sanfoundry.com" not in href or "#" in href or "1000-hadoop-questions-answers" in href:
                continue
            norm_url = href.rstrip("/") + "/"
            if norm_url not in TOPIC_SYLLABUS_MAP or norm_url in seen_urls:
                continue
            seen_urls.add(norm_url)
            meta = TOPIC_SYLLABUS_MAP[norm_url]
            items.append({"url": norm_url, **meta})

    # Fallback if hub HTML wasn't parsed
    for url, meta in TOPIC_SYLLABUS_MAP.items():
        if url not in seen_urls:
            seen_urls.add(url)
            items.append({"url": url, **meta})

    return items


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Open Sanfoundry Hadoop/Big Data topic pages in batches for saving to HadoopSaved/."
    )
    parser.add_argument(
        "--scope",
        choices=["keep", "selective", "keep+selective", "remove", "all"],
        default="keep",
        help="Which syllabus priority category to open (default: keep = 36 core syllabus pages).",
    )
    parser.add_argument(
        "--batch",
        type=int,
        default=5,
        help="Number of browser tabs to open at once per batch (default: 5).",
    )
    parser.add_argument(
        "--status",
        action="store_true",
        help="Only print status of saved vs remaining pages without opening browser tabs.",
    )
    args = parser.parse_args()

    all_topics = get_ordered_topics()
    saved_urls = get_saved_urls(HADOOP_DIR)

    if args.scope == "keep":
        allowed = {"KEEP"}
    elif args.scope == "selective":
        allowed = {"SELECTIVE"}
    elif args.scope == "keep+selective":
        allowed = {"KEEP", "SELECTIVE"}
    elif args.scope == "remove":
        allowed = {"REMOVE"}
    else:
        allowed = {"KEEP", "SELECTIVE", "REMOVE"}

    scoped_topics = [t for t in all_topics if t["category"] in allowed]
    missing_topics = [t for t in scoped_topics if t["url"] not in saved_urls]
    already_saved = [t for t in scoped_topics if t["url"] in saved_urls]

    print("=" * 78)
    print(f" PGCP-BDA Big Data Technologies — Sanfoundry Topic Opener (Scope: {args.scope.upper()})")
    print("=" * 78)
    print(f" Total in scope : {len(scoped_topics)} pages")
    print(f" Already saved  : {len(already_saved)} pages in {HADOOP_DIR}")
    print(f" Remaining      : {len(missing_topics)} pages to save")
    print("=" * 78)

    if args.status:
        for idx, t in enumerate(scoped_topics, start=1):
            mark = "[SAVED]" if t["url"] in saved_urls else "[TODO] "
            print(f"{idx:2d}. {mark} [{t['category']:9s}] {t['topic']:32s} -> {t['syllabus_topic']}")
        return

    if not missing_topics:
        print("\nAll pages in this scope are already saved in HadoopSaved/!")
        return

    batch_size = max(1, args.batch)
    total_batches = (len(missing_topics) + batch_size - 1) // batch_size

    print(f"\nOpening {len(missing_topics)} remaining pages in {total_batches} batch(es) of {batch_size} tabs.")
    print("Tip: In your browser, press Ctrl+S on each tab and save it into:")
    print(f"     {HADOOP_DIR}\n")

    for b_idx in range(total_batches):
        start = b_idx * batch_size
        batch = missing_topics[start : start + batch_size]
        print(f"--- Batch {b_idx + 1}/{total_batches} ({len(batch)} tabs) ---")
        for i, item in enumerate(batch, start=start + 1):
            print(f"  [{i}/{len(missing_topics)}] {item['topic']} ({item['syllabus_topic']})")
            print(f"        {item['url']}")
            webbrowser.open_new_tab(item["url"])
            time.sleep(0.35)

        if b_idx + 1 < total_batches:
            ans = input("\nPress [Enter] when ready for the next batch (or 'q' to stop): ").strip().lower()
            if ans in ("q", "quit", "exit"):
                saved_now = len(get_saved_urls(HADOOP_DIR))
                print(f"\nStopped. Currently detected {saved_now} saved topic pages in HadoopSaved/.")
                print("Run `python open_hadoop_pages.py` again anytime to resume where you left off!")
                return

    print("\nAll batches opened! Once you finish pressing Ctrl+S on the open tabs,")
    print("let me know and I will extract & map all the questions into your PracticeHub bank.")


if __name__ == "__main__":
    main()

