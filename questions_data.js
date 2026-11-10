window.PRACTICE_BANK = {
  "subjects": [
    {
      "id": "dbms-sql",
      "name": "DBMS — SQL & PL/SQL",
      "has_priority_categories": true,
      "has_syllabus_mapping": true,
      "total_questions": 632,
      "counts": {
        "KEEP": 446,
        "SELECTIVE": 118,
        "REMOVE": 68
      },
      "topics": [
        {
          "topic": "PL/SQL Arrays",
          "count": 5,
          "category": "REMOVE",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "PL/SQL Basics",
          "count": 6,
          "category": "KEEP",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8"
        },
        {
          "topic": "PL/SQL Collections",
          "count": 10,
          "category": "REMOVE",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate"
        },
        {
          "topic": "PL/SQL Conditions",
          "count": 10,
          "category": "KEEP",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8"
        },
        {
          "topic": "PL/SQL Constants and Literals",
          "count": 7,
          "category": "SELECTIVE",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations"
        },
        {
          "topic": "PL/SQL Cursors",
          "count": 10,
          "category": "REMOVE",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "PL/SQL DBMS Output",
          "count": 7,
          "category": "REMOVE",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output"
        },
        {
          "topic": "PL/SQL Data Types",
          "count": 10,
          "category": "SELECTIVE",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8"
        },
        {
          "topic": "PL/SQL Date and Time",
          "count": 7,
          "category": "SELECTIVE",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals"
        },
        {
          "topic": "PL/SQL Exceptions",
          "count": 10,
          "category": "SELECTIVE",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes"
        },
        {
          "topic": "PL/SQL Function",
          "count": 7,
          "category": "KEEP",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8"
        },
        {
          "topic": "PL/SQL Loops",
          "count": 10,
          "category": "KEEP",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8"
        },
        {
          "topic": "PL/SQL Operators",
          "count": 5,
          "category": "SELECTIVE",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic"
        },
        {
          "topic": "PL/SQL Packages",
          "count": 10,
          "category": "REMOVE",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "PL/SQL Procedure",
          "count": 10,
          "category": "KEEP",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8"
        },
        {
          "topic": "PL/SQL Records",
          "count": 10,
          "category": "REMOVE",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "PL/SQL Strings",
          "count": 10,
          "category": "SELECTIVE",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module"
        },
        {
          "topic": "PL/SQL Syntax",
          "count": 5,
          "category": "KEEP",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax"
        },
        {
          "topic": "PL/SQL Transactions",
          "count": 7,
          "category": "KEEP",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment"
        },
        {
          "topic": "PL/SQL Triggers",
          "count": 10,
          "category": "KEEP",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8"
        },
        {
          "topic": "PL/SQL Variables",
          "count": 6,
          "category": "KEEP",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters"
        },
        {
          "topic": "SQL Aliases",
          "count": 9,
          "category": "KEEP",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5"
        },
        {
          "topic": "SQL Alter Table",
          "count": 11,
          "category": "KEEP",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6"
        },
        {
          "topic": "SQL And, Or, Not",
          "count": 7,
          "category": "KEEP",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7"
        },
        {
          "topic": "SQL Any & All",
          "count": 7,
          "category": "KEEP",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries"
        },
        {
          "topic": "SQL Auto Increment",
          "count": 7,
          "category": "SELECTIVE",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent"
        },
        {
          "topic": "SQL Avg & Sum Functions",
          "count": 10,
          "category": "KEEP",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1"
        },
        {
          "topic": "SQL Between Operator",
          "count": 10,
          "category": "KEEP",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5"
        },
        {
          "topic": "SQL Comments",
          "count": 10,
          "category": "SELECTIVE",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8"
        },
        {
          "topic": "SQL Constraints",
          "count": 6,
          "category": "KEEP",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes"
        },
        {
          "topic": "SQL Count Function",
          "count": 10,
          "category": "KEEP",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1"
        },
        {
          "topic": "SQL Create Table",
          "count": 10,
          "category": "KEEP",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes"
        },
        {
          "topic": "SQL Data Types",
          "count": 10,
          "category": "KEEP",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes"
        },
        {
          "topic": "SQL Database",
          "count": 6,
          "category": "SELECTIVE",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL"
        },
        {
          "topic": "SQL Dates",
          "count": 10,
          "category": "KEEP",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions"
        },
        {
          "topic": "SQL Default Constraint",
          "count": 5,
          "category": "KEEP",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6"
        },
        {
          "topic": "SQL Delete Statement",
          "count": 10,
          "category": "KEEP",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes"
        },
        {
          "topic": "SQL Drop DB",
          "count": 7,
          "category": "SELECTIVE",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes"
        },
        {
          "topic": "SQL Drop Table",
          "count": 7,
          "category": "KEEP",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes"
        },
        {
          "topic": "SQL Exists",
          "count": 10,
          "category": "KEEP",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries"
        },
        {
          "topic": "SQL Foreign Key",
          "count": 8,
          "category": "KEEP",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1"
        },
        {
          "topic": "SQL Full Join",
          "count": 4,
          "category": "KEEP",
          "reason": "Outer joins are explicit in syllabus; FULL OUTER JOIN is a subtype.",
          "faculty_alignment": "Assignment 7; Views & Indexes"
        },
        {
          "topic": "SQL Group By",
          "count": 9,
          "category": "KEEP",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1"
        },
        {
          "topic": "SQL Having Clause",
          "count": 6,
          "category": "KEEP",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1"
        },
        {
          "topic": "SQL Hosting",
          "count": 5,
          "category": "REMOVE",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "SQL In Operator",
          "count": 8,
          "category": "KEEP",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7"
        },
        {
          "topic": "SQL Index",
          "count": 10,
          "category": "KEEP",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7"
        },
        {
          "topic": "SQL Injection",
          "count": 10,
          "category": "REMOVE",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material"
        },
        {
          "topic": "SQL Inner Join",
          "count": 5,
          "category": "KEEP",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1"
        },
        {
          "topic": "SQL Insert Into Select",
          "count": 7,
          "category": "KEEP",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6"
        },
        {
          "topic": "SQL Insert Into Statement",
          "count": 10,
          "category": "KEEP",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6"
        },
        {
          "topic": "SQL Joins",
          "count": 8,
          "category": "KEEP",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1"
        },
        {
          "topic": "SQL Left Join",
          "count": 4,
          "category": "KEEP",
          "reason": "Outer joins are explicitly in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes"
        },
        {
          "topic": "SQL Like Operator",
          "count": 10,
          "category": "KEEP",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4"
        },
        {
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "count": 15,
          "category": "SELECTIVE",
          "reason": "Mixed-topic questions; retain only those testing syllabus concepts and avoid duplicates/off-syllabus trivia.",
          "faculty_alignment": "Mixed; individually screened"
        },
        {
          "topic": "SQL Min and Max Functions",
          "count": 10,
          "category": "KEEP",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1"
        },
        {
          "topic": "SQL Not Null",
          "count": 7,
          "category": "KEEP",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6"
        },
        {
          "topic": "SQL Null Functions",
          "count": 15,
          "category": "SELECTIVE",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions"
        },
        {
          "topic": "SQL Null Values",
          "count": 10,
          "category": "KEEP",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins"
        },
        {
          "topic": "SQL Operators",
          "count": 10,
          "category": "KEEP",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries"
        },
        {
          "topic": "SQL Order By Clause",
          "count": 10,
          "category": "KEEP",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1"
        },
        {
          "topic": "SQL Primary Key",
          "count": 7,
          "category": "KEEP",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1"
        },
        {
          "topic": "SQL Right Join",
          "count": 4,
          "category": "KEEP",
          "reason": "Outer joins are explicit in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes"
        },
        {
          "topic": "SQL Select Distinct",
          "count": 7,
          "category": "KEEP",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries"
        },
        {
          "topic": "SQL Select Statement",
          "count": 10,
          "category": "KEEP",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments"
        },
        {
          "topic": "SQL Select Top Clause",
          "count": 10,
          "category": "SELECTIVE",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions"
        },
        {
          "topic": "SQL Self Join",
          "count": 6,
          "category": "KEEP",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join"
        },
        {
          "topic": "SQL Subqueries",
          "count": 9,
          "category": "KEEP",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7"
        },
        {
          "topic": "SQL Syntax",
          "count": 10,
          "category": "KEEP",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments"
        },
        {
          "topic": "SQL Union",
          "count": 12,
          "category": "SELECTIVE",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept"
        },
        {
          "topic": "SQL Unique Constraint",
          "count": 5,
          "category": "KEEP",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6"
        },
        {
          "topic": "SQL Update Statement",
          "count": 8,
          "category": "KEEP",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML"
        },
        {
          "topic": "SQL Views",
          "count": 10,
          "category": "KEEP",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7"
        },
        {
          "topic": "SQL Where Clause",
          "count": 10,
          "category": "KEEP",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments"
        },
        {
          "topic": "SQL Wildcards",
          "count": 9,
          "category": "KEEP",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4"
        }
      ],
      "syllabus_markdown": "# Complete DBMS syllabus — Session-wise\n\n## 1. Introduction to DBMS\n\nSession 1\n\n- Database Concepts\n- Database Storage Structure\n  - Table Space\n  - Control File\n  - Data File\n- Structured and Unstructured Data\n- OLTP vs OLAP\n- Introduction to Data Collection\n- Tools used for Gathering Data in a Systematic Fashion\n\nSource: Page 1\n\n## 2. SQL Fundamentals and Transaction Management\n\nSessions 2 & 3\n\n- Introduction to SQL\n- DDL Commands\n- DML Commands\n- DCL Commands\n- ACID Properties\n- Transaction Management\n\nPractical topics:\n\n- CREATE, ALTER, DROP\n- GRANT, REVOKE\n- SELECT, INSERT, UPDATE, DELETE, TRUNCATE\n- ROLLBACK, COMMIT\n- Creating database users\n- Granting and revoking privileges\n- Verifying user privileges through DML queries\n- Table creation\n- Data types\n- Constraints\n- Primary Key\n- SAVEPOINT\n- Transaction control and data consistency\n\nSource: Pages 1–2\n\n## 3. Grouping, Sorting and Subqueries\n\nSession 4\n\n- GROUP BY\n- HAVING\n- ORDER BY\n- Advanced Subqueries\n  - Correlated Subqueries\n  - Outer Joins\n\nPractical topics:\n\n- GROUP BY with HAVING\n- Counting records per group\n- LIKE pattern matching\n- Start/end character patterns\n- Subqueries\n- Correlated Queries\n- OUTER JOIN\n- Matching and unmatched records (NULL)\n\nSource: Page 2\n\n## 4. SQL Constructs, CTE and Database Design\n\nSessions 5 & 6\n\n- Constructs in SQL\n- Common Table Expressions (CTE)\n- Non-recursive CTEs\n- Recursive CTEs\n- Data Collection\n- Designing Database Schema\n- Normal Forms\n- ER Diagram\n- Relational Database Modelling\n- Gathering Data in Systematic Fashion\n\nPractical topics:\n\n- GROUP BY and HAVING\n- LIKE pattern matching\n- OUTER JOIN on related tables\n\nSource: Pages 2–3\n\n## 5. Views, PL-SQL, Window Functions and Optimization\n\nSession 7\n\n- Views\n- Introduction to PL-SQL\n  - Triggers\n- Window Functions\n- CASE Statement\n- Indexing Strategies\n- Query Optimization Concepts\n\nPractical topics:\n\n- Creating Views\n- Finding the top record in each group\n- Joining lookup tables\n- Aggregate conditions\n- Maximum count of related records\n- Ranking records within groups using Window Functions\n\nSource: Page 3\n\n## 6. Data Warehousing\n\nSessions 8 & 9\n\n- Data Warehousing Concepts\n- Tools Related to Data Warehousing\n- Different Algorithms Related to Data Warehouse\n- Importance and Applications of Data Warehousing\n- Slowly Changing Dimensions (SCD)\n\nPractical topics:\n\n- Slowly Changing Dimension Type 2\n- Tracking historical changes\n- Effective-date columns\n\nSource: Page 3\n\n## 7. Introduction to NoSQL\n\nSession 10\n\n- Introduction to NoSQL\n- Difference between RDBMS and NoSQL Database\n- Understanding Storage Architecture\n- Working with Column-Oriented Databases\n- Document Store Internals\n\nSource: Page 3\n\n## 8. Practical Design of NoSQL\n\nSession 11\n\n- Practical Design of NoSQL\n- NoSQL\n  - Schema Structure for Oracle NoSQL Database\n  - Changing Document Databases\n  - Schema Evolution in Column-Oriented Databases\n  - Data Evolution in Key/Value Stores\n\nPractical topics:\n\n- Schema Design\n- Schema Evolution in Column-Oriented Databases\n\nSource: Page 4\n\n## 9. MongoDB Fundamentals and Database Connectivity\n\nSession 12\n\n- Introduction to MongoDB (NoSQL)\n- CRUD Operations\n- Creating Records\n- Accessing Data\n- Updating Data\n- Deleting Data\n- Working with Language Bindings\n- Querying NoSQL Stores\n- Similarities Between SQL and MongoDB Query Features\n- Accessing Data from Column-Oriented Databases Like HBase\n- Querying Redis Data Stores\n\nPractical topics:\n\n\\- CRUD Operations on MongoDB Collections\n\nSource: Page 4\n\n## 10. MongoDB Internals and Indexing\n\nSessions 13 & 14\n\n- Introduction to MongoDB\n- MongoDB Internals\n- Essential Concepts Behind a Database Index\n- Indexing and Ordering in MongoDB\n- Creating and Using Indexes in MongoDB\n\nPractical topics:\n\n- Creating MongoDB Indexes\n- Using Indexes\n- Comparing Query Performance With and Without Indexes\n\nSource: Page 4\n\n## 11. MongoDB Queries and Aggregation\n\nSession 15\n\n\\- MongoDB Queries\n\n- Create Operations\n- Read Operations\n- Data Aggregation Operations\n- Update Operations\n\nExplicit practical topics:\n\n- Insert\n- Find\n- FindOne\n- Logical Operators\n- Distinct\n- Group\n- Upsert\n- Update\n- Remove\n- Creating Databases\n- Creating Collections\n- Numeric Comparison Operators (e.g. `$gt`)\n- Negation Operators (`$ne`, `$nin`)\n- Multiple AND Conditions\n- Range Conditions\n- Exclusion and Equality Conditions\n- Sorting Results in Descending Order\n\nSource: Page 5\n\n## 12. Data Engineering and Data Lakes\n\nSession 16\n\n- Introduction to Data Engineering\n- Data Lakes\n  - Introduction to Data Lake\n  - Need for Data Lakes\n  - Data Lake vs Data Warehouse\n  - Data Lake Architecture\n  - Storage Layers:\n    - Raw Zone\n    - Curated Zone\n    - Refined Zone\n  - Common Use Cases\n  - Challenges:\n    - Data Swamps\n    - Governance\n\nSource: Page 5\n\n## 13. Lakehouse Platform\n\nSession 17\n\n- Lakehouse Platform\n- Lakehouse Architecture\n  - Combining Data Lake Flexibility with Data Warehouse Reliability\n- Open Table Formats\n- ACID Transactions on Lake Storage\n- Overview of Popular Lakehouse Platforms\n- Data Lake vs Data Warehouse vs Lakehouse\n\nPractical topics:\n\n- Exploring a Lakehouse Platform\n- Loading Sample Datasets into Lake Storage\n- Basic Read/Query Operations\n- Comparing Lake Table Queries with Traditional Warehouse Table Queries\n\nSource: Page 5\n\n## 14. Snowflake Architecture\n\nSession 18\n\n- Introduction to Snowflake\n- Snowflake Architecture\n  - Storage Layer\n  - Compute Layer (Virtual Warehouses)\n  - Cloud Services Layer\n- Snowflake vs Traditional RDBMS\n- Snowflake vs Traditional Data Warehouse\n- Data Sharing\n- Scalability Concepts\n\nPractical topics:\n\n- Snowflake Account Setup\n- Virtual Warehouse Setup\n- Database Creation\n- Schema Creation\n- Running SQL Queries in Snowflake Worksheet\n\nSource: Page 6\n\n## 15. Snowflake Data Loading and Querying\n\nSession 19\n\n- Staging Data\n- Bulk Loading Data into Snowflake Tables\n- Querying Loaded Data\n- Filtering Loaded Data\n- Aggregating Loaded Data\n- Cost Considerations\n- Performance Considerations\n  - Warehouse Sizing\n  - Auto-Suspend\n\nPractical topics:\n\n- Loading Data Using a Stage\n- Analytical SQL Queries\n  - GROUP BY\n  - JOIN\n  - CTE\n- Resizing Virtual Warehouses\n- Observing Query Execution Time\n\nSource: Page 6\n\n## 16. Apache Cassandra\n\nSession 20\n\n- Introduction to Cassandra\n- Comparison Between Cassandra and MongoDB\n\nSource: Page 6\n\n## 17. Connecting Databases with Python\n\nSession 21\n\n- Python Database Connectivity Libraries\n  - DB-API\n  - PyMongo\n- Connecting to Relational Databases\n- Connecting to NoSQL Databases\n- Executing Queries from Python\n- Handling Query Results from Python\n\nPractical topics:\n\n- Python Script for Database Connectivity\n- SELECT Query Execution\n- INSERT Query Execution\n- Printing Query Results\n\nSource: Page 6\n\n## 18. Data-Driven Decisions and Enterprise Data Management\n\nSession 22\n\n- Data-Driven Decisions\n- Enterprise Data Management\n\nPractical topics:\n\n- Working with Raw/Sample Datasets\n- Identifying Required Fields\n- Basic Data Transformations\n- Preparing Data for Analysis\n- Summarizing Data Preparation Steps\n\nSource: Page 7\n\n# Master topic index for Sanfoundry mapping\n\nThis is the consolidated index. Use it to classify extracted questions, including questions that appear under multiple related syllabus topics.\n\n| No. | Major subject          | Topics to map                                                                                                      |\n| --- | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |\n| 1   | DBMS Fundamentals      | Database concepts, storage structure, tablespace, control file, data file, structured/unstructured data, OLTP/OLAP |\n| 2   | SQL Fundamentals       | SQL, DDL, DML, DCL                                                                                                 |\n| 3   | Transactions           | ACID, transaction management, COMMIT, ROLLBACK, SAVEPOINT                                                          |\n| 4   | SQL Clauses            | GROUP BY, HAVING, ORDER BY, LIKE                                                                                   |\n| 5   | SQL Joins              | Outer joins                                                                                                        |\n| 6   | SQL Subqueries         | Subqueries, correlated subqueries                                                                                  |\n| 7   | SQL Constructs         | SQL constructs, CTE, recursive and non-recursive CTE                                                               |\n| 8   | Database Design        | Schema design, data types, constraints, primary key, ER diagrams, relational modelling                             |\n| 9   | Normalization          | Normal forms                                                                                                       |\n| 10  | Views                  | SQL Views                                                                                                          |\n| 11  | PL-SQL                 | Introduction to PL-SQL, triggers                                                                                   |\n| 12  | Advanced SQL           | Window functions, CASE statement                                                                                   |\n| 13  | Optimization           | Indexing strategies, query optimization                                                                            |\n| 14  | Data Warehousing       | Concepts, tools, algorithms, importance, applications, SCD                                                         |\n| 15  | NoSQL Fundamentals     | RDBMS vs NoSQL, storage architecture                                                                               |\n| 16  | NoSQL Database Types   | Column-oriented databases, document stores, key/value stores                                                       |\n| 17  | NoSQL Design           | Oracle NoSQL schema, schema design, schema evolution, data evolution                                               |\n| 18  | MongoDB Fundamentals   | CRUD, language bindings, SQL vs MongoDB, MongoDB internals                                                         |\n| 19  | MongoDB Indexing       | Database indexes, indexing, ordering, query performance                                                            |\n| 20  | MongoDB Queries        | Create, Read, Update, Delete, logical operators, comparison operators                                              |\n| 21  | MongoDB Aggregation    | Aggregation, Distinct, Group, filtering, sorting, Upsert                                                           |\n| 22  | Other NoSQL Stores     | HBase, Redis                                                                                                       |\n| 23  | Data Engineering       | Introduction to Data Engineering                                                                                   |\n| 24  | Data Lakes             | Architecture, zones, use cases, data swamps, governance                                                            |\n| 25  | Lakehouse              | Architecture, open table formats, ACID, platforms                                                                  |\n| 26  | Snowflake              | Architecture, storage, compute, cloud services, data sharing, scalability                                          |\n| 27  | Snowflake Operations   | Staging, bulk loading, querying, filtering, aggregation, warehouse sizing, auto-suspend                            |\n| 28  | Cassandra              | Fundamentals, comparison with MongoDB                                                                              |\n| 29  | Python DB Connectivity | DB-API, PyMongo, query execution, result handling                                                                  |\n| 30  | Enterprise Data        | Data-driven decisions, enterprise data management, data preparation                                                |\n\n## Important: Lab topics are part of the syllabus too\n\nDon't overlook these while mapping Sanfoundry questions:\n\n1. DDL, DML and DCL practical commands.\n2. User privileges: GRANT and REVOKE.\n3. Transactions: SAVEPOINT, COMMIT and ROLLBACK.\n4. GROUP BY, HAVING, LIKE and OUTER JOIN.\n5. Views, Window Functions and ranking.\n6. SCD Type 2 implementation.\n7. NoSQL schema design and evolution.\n8. MongoDB CRUD and indexing.\n9. MongoDB filtering, logical operators, aggregation and sorting.\n10. Lakehouse data loading and querying.\n11. Snowflake setup, staging, analytical queries and warehouse sizing.\n12. Python database connectivity.\n13. Data preparation and transformations.\n",
      "questions": [
        {
          "id": 1,
          "topic": "PL/SQL Arrays",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "In PL/SQL, which of the following data-structure can be used to store a fixed number of elements of same datatype?",
          "options": {
            "A": "ARRAY",
            "B": "NARRAY",
            "C": "VARRAY",
            "D": "CARRAY"
          },
          "correct_answer": "C",
          "explanation": "In PL/SQL, the VARRAY data structure can be used to store a fixed number of elements of same datatype to form an array. It is used to store an ordered collection of data.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-arrays/"
        },
        {
          "id": 2,
          "topic": "PL/SQL Arrays",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct basic syntax for creating a VARRAY type within a PL/SQL block?",
          "options": {
            "A": "TYPE varray_name IS VARRAY(n) <element_type>",
            "B": "TYPE varray_name IS VARRAY(n) of <element_type>",
            "C": "TYPE varray_name VARRAY(n) of <element_type>",
            "D": "varray_name IS VARRAY(n) of <element_type>"
          },
          "correct_answer": "B",
          "explanation": "The correct basic syntax for creating a VARRAY type within a PL/SQL block is –\nTYPE varray_name IS VARRAY(n) OF <element_type>\nWhere, varray_name is a valid identifier name.\n\nn is the maximum number of elements in the array.\n\n<element_type> is the datatype of elements in the array.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-arrays/"
        },
        {
          "id": 3,
          "topic": "PL/SQL Arrays",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "What is the index number for the starting element in VARRAY?",
          "options": {
            "A": "0",
            "B": "1",
            "C": "-1",
            "D": "2"
          },
          "correct_answer": "B",
          "explanation": "In PL/SQL, the starting element in the VARRAY has an index number of 1 which is different from the usual starting index number of array i.e. 0.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-arrays/"
        },
        {
          "id": 4,
          "topic": "PL/SQL Arrays",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following command can be used to change the maximum size of a VARRAY?",
          "options": {
            "A": "ALTER TYPE",
            "B": "ALTER VARRAY",
            "C": "ALTER ARRAY",
            "D": "Maximum size of a VARRAY cannot be changed"
          },
          "correct_answer": "A",
          "explanation": "The ALTER TYPE command can be used to change the maximum size of a VARRAY. It’s syntax is –\nALTERTYPE varray_name IS VARRAY(n) OF <element_type>",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-arrays/"
        },
        {
          "id": 5,
          "topic": "PL/SQL Arrays",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "VARRAY/array types are not in supplied PL/SQL notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Arrays in other languages becomes VARRAYS in PL/SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The concept of arrays in other languages is the same as of VARRAY in PL/SQL. The only difference that comes is in the starting index number which is 0 for arrays and 1 for VARRAY.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-arrays/"
        },
        {
          "id": 6,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "A collection is a group of elements of different datatypes.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "A collection is an ordered group of elements having the same data type. Each element has a unique id that tells about its position in the collection.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 7,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "How many types of collections are provided by PL/SQL?",
          "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
          },
          "correct_answer": "C",
          "explanation": "There are 3 different types of collections provided by PL/SQL – Index-by Tables or Associative Arrays, Nested Table, Variable-size Array or Varrays. Index-by Tables and Nested Tables comes under the category of Tables and Varray is a type of array.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 8,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Associative Arrays are also called as Index-by Tables.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Associative Arrays are also called as Index-by Tables as every element present inside the array has a subscript number to define the position of the element inside the table. These subscript numbers can be called as Indexes.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 9,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following collection is always a dense collection type?",
          "options": {
            "A": "Varray",
            "B": "Associative Arrays",
            "C": "Nested Tables",
            "D": "All collections in PL/SQL are dense in nature"
          },
          "correct_answer": "A",
          "explanation": "Varray is a dense collection type. A dense collection has no gaps between elements—every element between the first and last element is defined and has a value (the value can be NULL unless the element has a NOT NULL constraint). Associative Arrays can also be a dense collection about it is not guaranteed every time.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 10,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following syntax is correct to create an Associative Array?",
          "options": {
            "A": "👉 Join Sanfoundry classes at Telegram or Youtube\nTABLE OF element_type [NOT NULL] INDEX BY subscript_type;\nTABLE_NAME type_name;",
            "B": "TYPE type_name IS TABLE OF element_type [NOT NULL] INDEX BY subscript_type;\nTABLE_NAME type_name;",
            "C": "TYPE type_name IS TABLE OF element_type [NOT NULL];\nTABLE_NAME type_name;",
            "D": "TYPE type_name [NOT NULL] INDEX BY subscript_type;\nTABLE_NAME type_name;"
          },
          "correct_answer": "B",
          "explanation": "The correct syntax to create an Associative array is –\nTYPE type_name IS TABLE OF element_type [NOT NULL] INDEX BY subscript_type;\nTABLE_NAME type_name;\nHere, TYPE, IS TABLE OF and INDEX BY are keywords. NOT NULL is not mandatory to use and type_name, element_type, subscript_type and table_name depends on the user.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 11,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following syntax is correct to create a Nested Array?",
          "options": {
            "A": "TABLE OF element_type [NOT NULL];\nTABLE_NAME type_name;",
            "B": "TYPE type_name IS TABLE OF element_type [NOT NULL];\nTABLE_NAME;",
            "C": "TYPE type_name [NOT NULL];\nTABLE_NAME type_name;",
            "D": "TYPE type_name IS TABLE OF element_type [NOT NULL];\nTABLE_NAME type_name;"
          },
          "correct_answer": "D",
          "explanation": "The correct syntax to create a Nested Array is –\nTYPE type_name IS TABLE OF element_type [NOT NULL];\nTABLE_NAME type_name;\nThis declaration is similar to the declaration of an Associative array, but there is no INDEX BY clause.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 12,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following collection exception is raised when a subscript exceeds the number of elements in a collection?",
          "options": {
            "A": "VALUE_ERROR",
            "B": "COLLECTION_IS_NULL",
            "C": "SUBSCRIPT_BEYOND_COUNT",
            "D": "SUBSCRIPT_OUTSIDE_LIMIT"
          },
          "correct_answer": "C",
          "explanation": "The SUBSCRIPT_BEYOND_COUNT exception is raised when a subscript exceeds the number of elements in a collection. The SUBSCRIPT_BEYOND_COUNT error is where the in-limit of a subscript was greater than that of the count of a varray or was too large for a nested table.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 13,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following collection exception is raised when a subscript assigns an element that was deleted, or a non-existent element of an associative array?",
          "options": {
            "A": "NO_DATA_FOUND",
            "B": "COLLECTION_IS_NULL",
            "C": "VALUE_ERROR",
            "D": "SUBSCRIPT_OUTSIDE_LIMIT"
          },
          "correct_answer": "A",
          "explanation": "The NO_DATA_FOUND exception is raised when a subscript assigns an element that was deleted. The NO_DATA_FOUND exception is raised when the FETCH statement is not able to find the relevant data that has been asked.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 14,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following collection method checks if the specified element is present in the collection or not?",
          "options": {
            "A": "EXTEND",
            "B": "NEXT",
            "C": "COUNT",
            "D": "EXISTS"
          },
          "correct_answer": "D",
          "explanation": "The EXISTS(n) method is used to check if the specified element (n) is present in the collection or not. It Returns TRUE if the nth element in a collection exists, otherwise it returns FALSE.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 15,
          "topic": "PL/SQL Collections",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL collection types are not covered; do not confuse these with Cassandra set/list/map collections.",
          "faculty_alignment": "No matching PL/SQL material; Cassandra collections are separate",
          "warning": null,
          "question": "Which of the following method is used to remove n number of elements from the end of a collection?",
          "options": {
            "A": "TRIM",
            "B": "TRIM(n)",
            "C": "DELETE",
            "D": "DELETE(n)"
          },
          "correct_answer": "B",
          "explanation": "The TRIM(n) method is used to remove n number of elements from the end of a collection. The TRIM method only removes 1 element from the end of a collection. The DELETE method removes all elements from a collection. The DELETE(n) method is used to remove the nth element from an associative array with a numeric key or a nested table.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-collections/"
        },
        {
          "id": 16,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Which of the following part of the IF-THEN statement gets executed if the condition is false or NULL?",
          "options": {
            "A": "IF",
            "B": "THEN",
            "C": "ELSE",
            "D": "IF statement does nothing"
          },
          "correct_answer": "D",
          "explanation": "In IF-THEN statement, if the given condition evaluates to true, then the block of code inside the if statement will be executed. If the expression evaluates to false, then the first set of code after the end of the if statement (IF statement does nothing) will be executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 17,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Consider the PL/SQL code below and select the appropriate output –\nDECLARE\n     n NUMBER(3) := 100;\nBEGIN\n     n:= 100;\n     IF( n<50 ) THEN\n         dbms_output.put_line('n is less than 50 ' );\n     END IF;\n         dbms_output.put_line('value of n is : ' || n);\nEND;\n/",
          "options": {
            "A": "n IS less than 50",
            "B": "n IS less than 50\nVALUE OF n IS : 100\nPL/SQL PROCEDURE successfully completed.",
            "C": "VALUE OF n IS : 100\nPL/SQL PROCEDURE successfully completed.",
            "D": "n IS less than 50\nVALUE OF n IS : 100"
          },
          "correct_answer": "C",
          "explanation": "The output of the given PL/SQL code will be –\nVALUE OF n IS : 100\nPL/SQL procedure successfully completed.\n\nSince, the given condition is false so, the IF-THEN statement will be not executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 18,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Which of the following part of the IF-THEN-ELSE statement gets executed if the condition is false or NULL?",
          "options": {
            "A": "IF",
            "B": "THEN",
            "C": "ELSE",
            "D": "END IF"
          },
          "correct_answer": "C",
          "explanation": "In IF-THEN-ELSE statement, if the given condition evaluates to true, then the block of code inside the if statement will be executed. If the expression evaluates to false, then the block of code inside the else statement will be executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 19,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Consider the PL/SQL code below and select the appropriate output.\nDECLARE\n     n NUMBER(3) := 100;\nBEGIN\n     n:= 100;\n     IF( n < 50 ) THEN\n         dbms_output.put_line('n is less than 50 ' );\n     ELSE\n         dbms.output.put_line(‘n IS greater than 50’);\n     END IF;\n         dbms_output.put_line('value of n is : ' || n);\nEND;\n/",
          "options": {
            "A": "n IS less than 50\nn IS greater than 50",
            "B": "n IS greater than 50\nVALUE OF n IS : 100\nPL/SQL PROCEDURE successfully completed.",
            "C": "VALUE OF n IS : 100\nPL/SQL PROCEDURE successfully completed.",
            "D": "n IS less than 50\nVALUE OF n IS : 100"
          },
          "correct_answer": "B",
          "explanation": "The output of the given PL/SQL code will be –\nn IS greater than 50\nVALUE OF n IS : 100\nPL/SQL procedure successfully completed.\n\nSince, the given condition is false so, the ELSE statement will be executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 20,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "How many ELSIF’s can an IF-THEN-ELSIF statement contain in PL/SQL?",
          "options": {
            "A": "1",
            "B": "5",
            "C": "100",
            "D": "No specified limit"
          },
          "correct_answer": "D",
          "explanation": "An IF-THEN-ELSIF statement can have zero to many numbers of ELSIF’s but they must come before the ELSE part.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 21,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Consider the PL/SQL code below and select the appropriate output.\nDECLARE\n     n NUMBER(2) := 40;\nBEGIN\n     IF( n = 10 ) THEN\n         dbms_output.put_line('Value of n is 10 ' );\n     ELSE IF ( n = 20 ) THEN\n         dbms_output.put_line('Value of n is 20' );\n     ELSE IF ( n = 30 ) THEN\n         dbms_output.put_line('Value of n is 30' );\n     ELSE IF ( n = 40 ) THEN\n         dbms_output.put_line('Value of n is 40' );\n     ELSE\n         dbms.output.put_line(‘VALUE OF n NOT known’);\n     END IF;\n         dbms_output.put_line('value of n is : ' || n);\nEND;\n/",
          "options": {
            "A": "VALUE OF n IS 40\nVALUE OF n IS : 40\nPL/SQL PROCEDURE successfully completed.",
            "B": "VALUE OF n NOT known\nVALUE OF n IS : 40\nPL/SQL PROCEDURE successfully completed.",
            "C": "VALUE OF n IS 10\nPL/SQL PROCEDURE successfully completed.",
            "D": "VALUE OF n IS 40\nVALUE OF n IS : 40"
          },
          "correct_answer": "A",
          "explanation": "The output of the given PL/SQL code will be –\nVALUE OF n IS 40\nVALUE OF n IS : 40\nPL/SQL procedure successfully completed.\n\nSince, the given condition is matched by the last ELSIF so, the corresponding ELSIF statement will be executed. Also, the statement after the END IF will be executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 22,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "What is the expression called which is used by the CASE statement to select one statement to execute from the given statements.",
          "options": {
            "A": "Boolean Expression",
            "B": "Selector",
            "C": "Condition",
            "D": "Relation"
          },
          "correct_answer": "B",
          "explanation": "The CASE statement uses a selector rather than multiple Boolean expressions. A selector is an expression, the value of which is used to select one of several alternatives.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 23,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "Which of the following is the correct syntax for the CASE statement?",
          "options": {
            "A": "CASE selector\nIF 'value1' THEN Statement1;\nIF 'value2' THEN Statement2;\nIF 'value3' THEN Statement3;\n...\nELSE Statementn;\nEND CASE;",
            "B": "CASE selector\nWHEN 'value1' Statement1;\nWHEN 'value2' Statement2;\nWHEN 'value3' Statement3;\n...\nELSE Statementn;\nEND CASE;",
            "C": "CASE selector\nWHEN 'value1' THEN Statement1;\nWHEN 'value2' THEN Statement2;\nWHEN 'value3' THEN Statement3;\n...\nELSE Statementn;\nEND CASE;",
            "D": "CASE selector\n'value1' THEN Statement1;\n'value2' THEN Statement2;\n'value3' THEN Statement3;\n...\nELSE Statementn;\nEND CASE;"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax for the CASE statement is-\nCASE selector\n   WHEN 'value1' THEN Statement1;\n   WHEN 'value2' THEN Statement2;\n   WHEN 'value3' THEN Statement3;\n   ...\n   ELSE Statementn;\nEND CASE;\nThe WHEN and THEN keywords are used with the CASE statement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 24,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "What is the CASE statement called when it has no selector and the WHEN clause of the statement contain search conditions.",
          "options": {
            "A": "Un-CASE statement",
            "B": "Conditional CASE statement",
            "C": "Unsearched CASE statement",
            "D": "Searched CASE statement"
          },
          "correct_answer": "D",
          "explanation": "The Searched CASE statement has no selector and the WHEN clauses of the statement contain search conditions that give Boolean values which helps the statement to decide which of the given statement is to be printed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 25,
          "topic": "PL/SQL Conditions",
          "category": "KEEP",
          "syllabus_topic": "12. Advanced SQL & CASE / Conditions",
          "syllabus_detail": "CASE statement / PL-SQL introduction",
          "reason": "IF/ELSE and CASE logic are covered in class material/assignments.",
          "faculty_alignment": "Day 7 procedural notes; Assignment 8",
          "warning": null,
          "question": "We can use nested IF-ELSE statements in PL/SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Nested IF-ELSE statements can be used in PL/SQL. Nested IF-ELSE statement means using one IF or ELSE IF statement inside another IF or ELSE IF statement/statements.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-conditions/"
        },
        {
          "id": 26,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "How many types of literals are present in PL/SQL?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "D",
          "explanation": "There are 5 types of literals present in PL/SQL. They include – Numeric Literals, Character Literals, String Literals, Boolean Literals, Date and Time Literals.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 27,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "In PL/SQL we can change the value of a constant later on in the program.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "A PL/SQL constant hold a value that does not change during the whole execution of the program, the value which must be assigned to a constant when it is declared. You can’t give it later.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 28,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "A literal is an explicit numeric, character, string, or boolean value not represented by an identifier.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, a literal is equivalent to a constant. They are case-sensitive. A literal is a value that is not represented by an identifier; it is simply a value.  For example, TRUE, 100, NULL, ‘sanfoundry’ are all literals.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 29,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "In PL/SQL, the string literals are always enclosed within which symbol?",
          "options": {
            "A": "()",
            "B": "‘’",
            "C": "“”",
            "D": "{}"
          },
          "correct_answer": "B",
          "explanation": "In PL/SQL, the string literals are always enclosed within a pair of single quotes (‘’). For example – ‘Sanfoundry’ or ’28-December-2020’.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 30,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "In PL/SQL, a numeric literal can hold up-to how many digits?",
          "options": {
            "A": "12",
            "B": "24",
            "C": "38",
            "D": "56"
          },
          "correct_answer": "C",
          "explanation": "In PL/SQL, Numeric literals can be up to 38 digits. These literals can be either positive or negative numbers. Also, it can be integer or float. For example – 031, -25, 4.679.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 31,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "Which of the following function is used to convert a literal into a date?",
          "options": {
            "A": "TO_DATE()",
            "B": "DATE()",
            "C": "CONVERT_DATE()",
            "D": "INTO_DATE()"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, when dealing with date values, we will have to use the TO_DATE() function to convert a literal to a date. For example –\nSELECT TO_DATE (‘2020/12/28’, ‘yyyy/mm/dd’) FROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 32,
          "topic": "PL/SQL Constants and Literals",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic constants/literals are peripheral; retain foundational declaration questions only if time permits.",
          "faculty_alignment": "Peripheral variable declarations",
          "warning": null,
          "question": "In PL/SQL, we can also use digits in place of characters for character literals.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, Character literals are string literals consisting of only single characters. They are enclosed within single quotes (‘’) and we can use digits and symbols in place of characters as long as the digit and the symbol is individual.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-constants-literals/"
        },
        {
          "id": 33,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "In PL/SQL, a cursor is a pointer to which of the following area?",
          "options": {
            "A": "Content Area",
            "B": "Contest Area",
            "C": "Context Area",
            "D": "Contact Area"
          },
          "correct_answer": "C",
          "explanation": "In PL/SQL, Oracle creates a memory area known as Context area. This area contains all the information required to execute a statement. A cursor acts as a pointer to this context area and Oracle controls this area with the help of a cursor.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 34,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "How many types of cursors are present in PL/SQL?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, there are 2 types of cursors. These are implicit cursor and explicit cursor. Implicit cursors are the cursors which are automatically created by the Oracle wherever needed. Explicit cursors are the programmer defined cursors.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 35,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "An explicit cursor is associated with an INSERT, UPDATE or DELETE statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "An implicit cursor is associated with an INSERT, UPDATE or DELETE statement. Whenever a DML statement is invoked, an implicit cursor is automatically made by Oracle if there is no explicit cursor available.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 36,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following implicit cursor returns true if an INSERT, UPDATE or DELETE statement affects one or more rows?",
          "options": {
            "A": "%FOUND",
            "B": "%NOTFOUND",
            "C": "%ISOPEN",
            "D": "%ROWCOUNT"
          },
          "correct_answer": "A",
          "explanation": "%FOUND is the implicit cursor that returns true if an INSERT, UPDATE or DELETE statement affects one or more rows. It also returns true if a SELECT INTO statement returns one or more rows. In all other cases it returns false.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 37,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following implicit cursor returns the count of rows affected by an INSERT, UPDATE or DELETE statement?",
          "options": {
            "A": "%FOUND",
            "B": "%NOTFOUND",
            "C": "%ISOPEN",
            "D": "%ROWCOUNT"
          },
          "correct_answer": "D",
          "explanation": "%ROWCOUNT is the implicit cursor that returns the count of rows affected by an INSERT, UPDATE or DELETE statement. It also returns the number of rows returned by a SELECT INTO statement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 38,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct syntax to access a SQL cursor attribute?",
          "options": {
            "A": "select%attribute_name",
            "B": "oracle%attribute_name",
            "C": "sql%attribute_name",
            "D": "%attribute_name"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax to access a SQL cursor attribute is – sql%attribute_name. The attribute name is preceded by a % sign and SQL. For example – SQL%ROWCOUNT.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 39,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct syntax for creating an explicit cursor?",
          "options": {
            "A": "cursor_name IS column_name;",
            "B": "CURSOR cursor_name IS SELECT_statement;",
            "C": "cursor_name CURSOR IS SELECT_statement;",
            "D": "CURSOR cursor_name IS column_name;"
          },
          "correct_answer": "B",
          "explanation": "The correct syntax for creating an explicit cursor is –\n\n\nCURSOR cursor_name IS SELECT_statement;\nHere, CURSOR and IS are keywords.\n\ncursor_name is the name of the cursor that the user wants to put.\n\nSELECT_statement is a simple select statement which tells us the columns and the table that has been used by the cursor. For Example –\nCURSOR mycursor IS SELECT id, name, rollno FROM students;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 40,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "How many steps are associated when working with an explicit cursor?",
          "options": {
            "A": "3",
            "B": "4",
            "C": "5",
            "D": "6"
          },
          "correct_answer": "B",
          "explanation": "There are 4 steps associated when working with an explicit cursor. They are –\nDeclaring the cursor, Opening the cursor, Fetching the cursor and Closing the cursor.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 41,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct syntax to FETCH the cursor in PL/SQL?",
          "options": {
            "A": "FETCH cursor_name INTO variable_list;",
            "B": "FETCH cursor_name IN variable_list;",
            "C": "FETCH cursor_name AS variable_list;",
            "D": "FETCH cursor_name variable_list;"
          },
          "correct_answer": "A",
          "explanation": "The correct syntax to FETCH the cursor in PL/SQL is –\nFETCH cursor_name INTO variable_list;\nHere, cursor_name is the name of the cursor.\n\nvariable_list is the list of variables in which you want to store the cursor result set.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 42,
          "topic": "PL/SQL Cursors",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Cursor lifecycle/attributes are not present in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following action is used with an explicit cursor to clears the active set of rows and frees the memory area used for the cursor?",
          "options": {
            "A": "DECLARE",
            "B": "OPEN",
            "C": "FETCH",
            "D": "CLOSE"
          },
          "correct_answer": "D",
          "explanation": "Closing the cursor clears the active set of rows and frees the memory area used by the cursor. Its syntax is –\nCLOSE cursor_name",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-cursors/"
        },
        {
          "id": 43,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "Which of the following is not a category of datatype in PL/SQL?",
          "options": {
            "A": "Scalar",
            "B": "Vector",
            "C": "Composite",
            "D": "Reference"
          },
          "correct_answer": "B",
          "explanation": "In PL/SQL, there are four main categories of datatypes – Scalar, LOB, Composite, Reference.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 44,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "The Numeric datatype comes under the category of Scalar datatypes in PL/SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The Numeric category of datatypes contains subcategories like Numeric, Character, Boolean and Datetime. These subcategories also have various subcategories inside them. For ex – Integer inside Numeric.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 45,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "Which of the following datatype is not within the subcategory of Character datatypes?",
          "options": {
            "A": "VARCHAR2",
            "B": "NCHAR",
            "C": "NVARCHAR2",
            "D": "NCAHR2"
          },
          "correct_answer": "D",
          "explanation": "The NCHAR2 datatype does not belong in the Character datatype category. The VARCHAR2 datatype is used for Variable-length character string with maximum size of 32,767 bytes. The NCHAR datatype is used for Fixed-length national character string with maximum size of 32,767 bytes. The NVARCAHR2 datatype is used for Variable-length national character string with maximum size of 32,767 bytes.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 46,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "In PL/SQL, the logical values are the Boolean values 0 and 1 and the value NULL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The BOOLEAN data type stores logical values that are used in logical operations. The logical values are the Boolean values TRUE and FALSE and the value NULL.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 47,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "Which of the following is the correct date range for the DATETIME datatype in PL/SQL?",
          "options": {
            "A": "January 1, 4712 BC to December 31, 4712 AD",
            "B": "January 1, 9999 BC to December 31, 9999 AD",
            "C": "January 1, 4712 BC to December 31, 9999 AD",
            "D": "-Infinity to +Infinity"
          },
          "correct_answer": "C",
          "explanation": "The DATE datatype is used to store fixed-length datetimes, which include the time of day in seconds since midnight. Valid dates range from January 1, 4712 BC to December 31, 9999 AD.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 48,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "Which of the following is the correct full-form for the LOB datatype category in PL/SQL?",
          "options": {
            "A": "Long Objects",
            "B": "Large Objects",
            "C": "Lexical Objects",
            "D": "Lengthy Objects"
          },
          "correct_answer": "B",
          "explanation": "LOB stands for large objects. Large Object (LOB) data types refer to large data items such as text, graphic images, video clips etc.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 49,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "In PL/SQL, which of the following datatype is used to store large blocks of character data in the database?",
          "options": {
            "A": "NCLOB",
            "B": "BFILE",
            "C": "BLOB",
            "D": "CLOB"
          },
          "correct_answer": "D",
          "explanation": "The CLOB datatype is used to store large blocks of character data in the database. The NCLOB, BFILE and BLOB datatypes are used to store large blocks of NCHAR data in the database, store large binary objects in operating system files outside the database and store large binary objects in the database respectively.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 50,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "The NULL in PL/SQL is represented by which of the following symbol?",
          "options": {
            "A": "NULL",
            "B": "/0",
            "C": "\\0",
            "D": "0"
          },
          "correct_answer": "A",
          "explanation": "PL/SQL NULL values represent missing or unknown data and they are not an integer, a character, or any other specific data type. The NULL value cannot be equated with anything or any value.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 51,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "Which of the following statement can be used to define a user defined datatype in PL/SQL?",
          "options": {
            "A": "SUBTYPE userdefined_datatype_name (value) IS datatype",
            "B": "SUBTYPE datatype (value) IS userdefined_datatype_name",
            "C": "SUBTYPE userdefined_datatype_name IS datatype (value)",
            "D": "SUBTYPE userdefined_datatype_name datatype (value)"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to define a user defined a user defined datatype in PL/SQL is –\nSUBTYPE userdefined_datatype_name IS datatype (VALUE)\nHere SUBTYPE and IS are keywords. userdefined_datatype_name is the name of datatype that the user wants to keep.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 52,
          "topic": "PL/SQL Data Types",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction; database data types",
          "reason": "Keep basic variable/parameter data types; skip exhaustive Oracle datatype trivia not used in class.",
          "faculty_alignment": "Day 7 parameter/variable declarations; Assignment 8",
          "warning": null,
          "question": "In PL/SQL, how many bytes does each character in the AL16UTF16 encoding takes?",
          "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
          },
          "correct_answer": "B",
          "explanation": "In PL/SQL, the AL16UTF16 encoding comes with a fixed size that is 2 bytes. They are used when the storage requirement is high otherwise the bytes get wasted.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-data-types/"
        },
        {
          "id": 53,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "How many classes of date and time related data types are present in PL/SQL?",
          "options": {
            "A": "2",
            "B": "4",
            "C": "5",
            "D": "3"
          },
          "correct_answer": "A",
          "explanation": "There are two classes of date and time related data types that are present in PL/SQL. They are – Datetime datatypes and Interval datatypes. Each of these classes has different datatypes within them.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 54,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "Which of the following datatypes is not part of the Datetime datatypes class?",
          "options": {
            "A": "TIMESTAMP",
            "B": "DATE",
            "C": "TIMESTAMP WITH TIMEZONE",
            "D": "INTERVAL YEAR TO MONTH"
          },
          "correct_answer": "D",
          "explanation": "The datatype which is not part of the datetime datatype class is INTERVAL YEAR TO MONTH. This datatype belongs to the Interval datatypes class. The other datatype which is part of the Interval class is INTERVAL DAY TO SECOND.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 55,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "How many datatypes are present within the Datetime datatype class?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "C",
          "explanation": "The datetime datatype class contains 4 different datatypes. These are – DATE, TIMESTAMP, TIMESTAMP WITH TIMEZONE and TIMESTAMP WITH LOCAL TIMEZONE.  Each of these datatypes have their different functions.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 56,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "What is the valid datetime value for theHOUR field in the datetime datatypes?",
          "options": {
            "A": "01 to 24",
            "B": "00 to 23",
            "C": "00 to 11",
            "D": "01 to 12"
          },
          "correct_answer": "B",
          "explanation": "The datetime data types consist of fields. The values of these fields determine the value of the data type. The valid datetime value for the HOUR field in the datetime datatypes is 00 to 23.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 57,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "Which of the following datetime datatype includes a time-zone region name in its value?",
          "options": {
            "A": "DATE",
            "B": "TIMESTAMP",
            "C": "TIMESTAMP WITH TIMEZONE",
            "D": "TIMESTAMP WITH LOCAL TIMEZONE"
          },
          "correct_answer": "C",
          "explanation": "TIMESTAMP WITH TIME ZONE is a variant of TIMESTAMP that includes a time zone region name or a time zone offset in its value. The time zone offset is the difference (in hours and minutes) between local time and UTC.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 58,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "Which of the followingdatetime function is used to return the time value from a time zone specified by the user?",
          "options": {
            "A": "SYSDATE ()",
            "B": "ROUND ()",
            "C": "NEXT_DAY ()",
            "D": "NEW_TIME"
          },
          "correct_answer": "D",
          "explanation": "The NEW_TIME function is used to return the time or day value from a time zone specified by the user. SYSDATE () is sued to return the current date time of the system. NEXT_DAY (x, day) is used to Returns the datetime of the next day after x.ROUND (x, [unit]) is used to round off x.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 59,
          "topic": "PL/SQL Date and Time",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Date values/functions are covered in SQL assignments, but Oracle-specific PL/SQL datetime datatype trivia is not a focus.",
          "faculty_alignment": "Assignment 3 covers SQL dates, not Oracle PL/SQL datetime internals",
          "warning": null,
          "question": "Which of the following interval function is used to convert a number x to an INTERVAL YEAR TO MONTH?",
          "options": {
            "A": "NUMTODSINTERVAL(x, interval_unit);",
            "B": "NUMTOYMINTERVAL(x, interval_unit);",
            "C": "TO_DSINTERVAL(x);",
            "D": "TO_YMINTERVAL(x);"
          },
          "correct_answer": "B",
          "explanation": "The function NUMTOYMINTERVAL(x, interval_unit); is used to convert a number x to an INTERVAL YEAR TO MONTH. NUMTODSINTERVAL(x, interval_unit); function is used to convert the number x to an INTERVAL DAY TO SECOND.TO_DSINTERVAL(x); function is used to convert the string x to an INTERVAL DAY TO SECOND. TO_YMINTERVAL(x); function is used to convert the string x to an INTERVAL YEAR TO MONTH.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-date-time/"
        },
        {
          "id": 60,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "DBMS_OUTPUT is a built-in package.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "DBMS_OUTPUT is a built-in package. It provides the capability to send messages to a message buffer, or get messages from the message buffer. It is also used to display outputs and debugging information.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 61,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "Which of the following function is not supported by the DBMS_OUTPUT package?",
          "options": {
            "A": "Display Output",
            "B": "Display Debugging Information",
            "C": "Display Exception Information",
            "D": "Send Messages"
          },
          "correct_answer": "C",
          "explanation": "DBMS_OUTPUT is a predefined package that enables us to display output, debugging information, and send messages from PL/SQL blocks, subprograms, packages and triggers.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 62,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nDECLARE\n    a NUMBER (2) := 10;\n    b NUMBER (2) := 10;\nBEGIN\n    IF (a >= b) THEN\n        dbms_output.put_line(a);\n    END IF;\n    IF (b >= a) THEN\n        dbms_output.put_line(a);\n    END IF;\n    IF (a = b) THEN\n        dbms_output.put_line(‘Equal’);\n    END IF;\nEND;",
          "options": {
            "A": "10",
            "B": "Equal",
            "C": "Error",
            "D": "No Output"
          },
          "correct_answer": "B",
          "explanation": "The output of the given PL/SQL code will be – Equal. As the values for a and b fulfils the third IF condition which in turn executes the dbms_output.put_line inside it. Anything that is written inside the put_line function will be printed if the function gets executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 63,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nDECLARE\n    a NUMBER(2) := 25;\nBEGIN\n    IF (a < 10 ) THEN\n        dbms_output.put_line('Value of a is less than 10' );\n    ELSEIF (a < 20) THEN\n        dbms_output.put_line('Value of a is less than 20' );\n    ELSE\n        dbms_output.put_line('Value of a is  greater than 20');\n    END IF;\n        dbms_output.put_line('Value of a is: '|| a );\nEND;",
          "options": {
            "A": "VALUE OF a IS less than 10\nVALUE OF a IS 25",
            "B": "📌 Limited Seats! Register Now - Free AI-ML Certification (November 2026)\nVALUE OF a IS less than 20\nVALUE OF a IS 25",
            "C": "Error",
            "D": "VALUE OF a IS greater than 20\nVALUE OF a IS 25"
          },
          "correct_answer": "D",
          "explanation": "The output of the given PL/SQL code will be –\nVALUE OF a IS greater than 20\nVALUE OF a IS 25\nAs the value for a fulfils the ELSE condition which in turn executes the dbms_output.put_line inside it.  The last dbms_output.put_line function will be executed every time the program executes properly. Anything that is  written inside the put_line function will be printed if the function gets executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 64,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nDECLARE\n    a NUMBER(2) := 100;\nBEGIN\n    IF (a < 50) THEN\n        dbms_output.put_line('Value of a is less than 50' );\n    ELSEIF (a < 75) THEN\n        dbms_output.put_line('Value of a is less than 75' );\n    ELSE\n        dbms_output.put_line('Value of a is  greater than 75');\n    END IF;\n        dbms_output.put_line('Value of a is: '|| a );\nEND;",
          "options": {
            "A": "VALUE OF a IS less than 50\nVALUE OF a IS 100",
            "B": "VALUE OF a IS less than 75\nVALUE OF a IS 100",
            "C": "Error",
            "D": "VALUE OF a IS greater than 75\nVALUE OF a IS 100"
          },
          "correct_answer": "C",
          "explanation": "The output of the given PL/SQL code will result in an error because the size for the datatype number for a is 2 but the value assigned to a is 100 which is of size 3. This will result in an error.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 65,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "Which of the following DBMS_OUTPUT procedure is used to put an end-of-line marker?",
          "options": {
            "A": "DBMS_OUTPUT.GET_LINES();",
            "B": "DBMS_OUTPUT.PUT_LINE(item IN VARCHAR2);",
            "C": "DBMS_OUTPUT.PUT(item IN VARCHAR2);",
            "D": "DBMS_OUTPUT.NEW_LINE;"
          },
          "correct_answer": "D",
          "explanation": "DBMS_OUTPUT.NEW_LINE procedure is used to put an end-of-line marker. Every call to the PUT_LINE Procedure or NEW_LINE Procedure generates a line that is returned by GET_LINE(S). It’s syntax is –\nDBMS_OUTPUT.NEW_LINE;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 66,
          "topic": "PL/SQL DBMS Output",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "DBMS_OUTPUT is Oracle-specific; class material uses MySQL routines and SELECT output, not DBMS_OUTPUT.",
          "faculty_alignment": "No matching material; class uses MySQL routines/SELECT output",
          "warning": null,
          "question": "Which of the following is the correct syntax for the DBMS_OUTPUT.GET_LINE procedure?",
          "options": {
            "A": "DBMS_OUTPUT.GET_LINE (\nlineOUT VARCHAR2,\nstatusOUT INTEGER);",
            "B": "DBMS_OUTPUT.GET_LINE (\nline IN VARCHAR2,\nSTATUS IN INTEGER);",
            "C": "DBMS_OUTPUT_GET_LINE (\nline OUT VARCHAR2,\nSTATUS OUT INTEGER);",
            "D": "DBMS_OUTPUT.GET_LINE (\nlineOUT  INTEGER,\nSTATUS OUT VARCHAR2);"
          },
          "correct_answer": "A",
          "explanation": "The correct syntax for the DBMS_OUTPUT.GET_LINE procedure is –\nDBMS_OUTPUT.GET_LINE (\nline OUT VARCHAR2,\nSTATUS  OUT INTEGER);\nThis procedure retrieves a single line of buffered information. Here, line returns a single line of buffered information, excluding the final newline character. If the call completes successfully, then the status is 0. If there are no more lines in the buffer, then the status is 1.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-dbms-output/"
        },
        {
          "id": 67,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "How many types of exceptions are present in PL/SQL?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "A",
          "explanation": "There are two types of exceptions present in PL/SQL. They are – System-defined exceptions and User-defined exceptions. PL/SQL offers users to tackle such exceptions through exception handling.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 68,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Exception handling can be performed under which of the following PL/SQL program block?",
          "options": {
            "A": "DECLARE",
            "B": "BEGIN",
            "C": "EXCEPTION",
            "D": "END"
          },
          "correct_answer": "C",
          "explanation": "Exception handling is performed under the EXCEPTION block of a PL/SQL program. This block is not mandatory and depends on the user if he/she wants to include it or not. It comes after the BEGIN block.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 69,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following is the correct is the correct syntax for exception handling?",
          "options": {
            "A": "WHEN exception1 THEN {\nexception1_handling_statement};\nWHEN exception2 THEN {\nexception2_handling_statement};\n........\nWHEN others THEN{\nException_handling_statement};",
            "B": "👉 Join Sanfoundry classes at Telegram or Youtube\nWHEN exception1 THEN\nexception1_handling_statement\nWHEN exception2 THEN\nexception2_handling_statement\n........\nWHEN others THEN\nException_handling_statement",
            "C": "WHEN exception1\nexception1_handling_statement\nWHEN exception2\nexception2_handling_statement\n........\nWHEN others\nException_handling_statement",
            "D": "exception1 THEN\nexception1_handling_statement\nexception2 THEN\nexception2_handling_statement\n........\nothers THEN\nException_handling_statement"
          },
          "correct_answer": "B",
          "explanation": "The correct syntax for exception handling is –\nWHEN exception1 THEN\n    exception1_handling_statement\nWHEN exception2 THEN\n    exception2_handling_statement\n........\nWHEN others THEN\n    Exception_handling_statement\nThe default exception will be handled using WHEN others THEN. Other than that, all user-defined exceptions will be handled by their corresponding statements.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 70,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following command can be used to raise an exception explicitly by a user?",
          "options": {
            "A": "RISED",
            "B": "RAISED",
            "C": "RISE",
            "D": "RAISE"
          },
          "correct_answer": "D",
          "explanation": "The RAISE command can be used to explicitly raise an exception by a user. Exceptions are usually raised by the database server automatically whenever there is any internal database error but they can also be done manually.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 71,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Raising an exception can be performed under which of the following PL/SQL program block?",
          "options": {
            "A": "DECLARE",
            "B": "BEGIN",
            "C": "EXCEPTION",
            "D": "END"
          },
          "correct_answer": "B",
          "explanation": "If we are manually/explicitly raising any exception then it should come under the BEGIN block of a PL/SQL program. It is done before any exception handling process and the EXCEPTION block.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 72,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following syntax is correct for raising an exception explicitly?",
          "options": {
            "A": "IF condition THEN\nRAISE exception_name;\nEND IF;",
            "B": "IF condition\nRAISE exception_name;\nEND IF;",
            "C": "IF condition THEN{\nRAISE exception_name};\nEND IF;",
            "D": "IF condition THEN(\nRAISE exception_name);\nEND IF;"
          },
          "correct_answer": "A",
          "explanation": "The correctsyntax for raising an exception explicitly is –\nIF condition THEN\nRAISE exception_name;\nEND IF;\nHere, RAISE is the command used and exception_name is the name of the exception to be raised.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 73,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "A user-defined exception is not automatically raised by the database server.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A user defined exception is not automatically raised by the database server and must be declared first and then raised explicitly by the user through the RAISE command.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 74,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following is raised when a null object is automatically assigned a value?",
          "options": {
            "A": "NO_DATA_FOUND",
            "B": "COLLECTION_IS_NULL",
            "C": "CASE_NOT_FOUND",
            "D": "ACCESS_INTO_NULL"
          },
          "correct_answer": "D",
          "explanation": "The ACCESS_INTO_NULL exception is raised when a null object is automatically assigned a value. Oracle error for no data found exception is ORA –06530 and it’s SQL code is -6530. If we attempt to assign a value into a null object then this exception is invoked. We need to define the object first in which any value has to be saved.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 75,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following is raised when a SELECT INTO statement returns no rows?",
          "options": {
            "A": "CASE_NOT_FOUND",
            "B": "NOT_LOGGED_ON",
            "C": "NO_DATA_FOUND",
            "D": "ACCESS_INTO_NULL"
          },
          "correct_answer": "C",
          "explanation": "The NO_DATA_FOUND exception is raised when a SELECT INTO statement returns no rows. Oracle error for no data found exception is ORA – 01403 and it’s SQL code is 100. If the SELECT statement cannot find any matching record according to the specified condition then this exception is invoked.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 76,
          "topic": "PL/SQL Exceptions",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Exception handlers are in class notes; keep concepts/basic syntax, but Sanfoundry Oracle syntax differs from MySQL handlers/SIGNAL taught.",
          "faculty_alignment": "Day 7 exception-handler notes",
          "warning": null,
          "question": "Which of the following is raised when PL/SQL ran out of memory or memory was corrupted?",
          "options": {
            "A": "VALUE_ERROR",
            "B": "TOO_MANY_ROWS",
            "C": "NO_DATA_FOUND",
            "D": "STORAGE_ERROR"
          },
          "correct_answer": "D",
          "explanation": "The STORAGE_ERROR exception is raised when PL/SQL ran out of memory or memory was corrupted. Oracle error for storage error exception is ORA –06500 and it’s SQL code is -6500. It is usually invoked when the memory in which the result has to be saved in is full or has been corrupted. Due to the large memory size available now-days, this exception is not so frequent.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-exceptions/"
        },
        {
          "id": 77,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following is the main difference between a function and a procedure in PL/SQL?",
          "options": {
            "A": "Function is user-defined, Procedure is pre-defined",
            "B": "Function returns a value, Procedure does not return any value",
            "C": "Function uses only actual parameters, Procedures uses only formal parameters",
            "D": "Function and Procedure do not have any differences"
          },
          "correct_answer": "B",
          "explanation": "A function is same as a procedure except that it returns a value. So, all the properties of a procedure are applied on a function in PL/SQL.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 78,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following is the correct syntax for creating a function in PL/SQL?",
          "options": {
            "A": "CREATE [OR REPLACE] FUNCTION function_name\n[(parameter_name [IN | OUT | IN OUT] TYPE [, ...])]\nRETURN return_value\n{IS | AS}\nBEGIN\n<function_body>\nEND [function_name];",
            "B": "CREATE [OR REPLACE] FUNCTION function_name\n[(parameter_name [IN | OUT | IN OUT] TYPE [, ...])\n{IS | AS}\nBEGIN\n<function_body>\nEND [function_name];",
            "C": "🎓 Register Today for Free C++ Certification - November 2026\nCREATE [OR REPLACE] FUNCTION\n[(parameter_name [IN | OUT | IN OUT] TYPE [, ...])]\nRETURN return_value\nBEGIN\n<function_body>\nEND [function_name];",
            "D": "REPLACE FUNCTION function_name\n[(parameter_name [IN | OUT | IN OUT] TYPE [, ...])]\nRETURN return_value\n{IS | AS}\nBEGIN\n<function_body>\nEND [function_name];"
          },
          "correct_answer": "A",
          "explanation": "The correct syntax for creating a function in PL/SQL is –\nCREATE [OR REPLACE] FUNCTION function_name\n[(parameter_name [IN | OUT | IN OUT] TYPE [, ...])]\nRETURN return_value\n{IS | AS}\nBEGIN\n    <function_body>\nEND [function_name];\nHere, all the statements written inside the square brackets [ ] are optional and their use depends on the user and its requirement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 79,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "The “ OR REPLACE” option in the definition of a function in PL/SQL is used to modify an existing function.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The “OR REPLACE” option is an optional part in the definition of a function in PL/SQL. It is used to modify an existing function.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 80,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "The ‘IS’ keyword is used instead of the ‘AS’ keyword when creating a standalone function in PL/SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The ‘AS’ keyword is used instead of the ‘IS’ keyword when creating a standalone function in PL/SQL. A standalone function is a function that performs a specific function and does not take/return a value from/to any other function.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 81,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "In PL/SQL, a function is called inside which of the following code blocks?",
          "options": {
            "A": "EXCEPTION",
            "B": "END",
            "C": "BEGIN",
            "D": "DECLARE"
          },
          "correct_answer": "C",
          "explanation": "A function is called inside the BEGIN block of a PL/SQL code. For calling a function, we need to pass the required parameters along with the function name and if the function returns a value, then we can store the returned value in any variable of same datatype as of the returned value.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 82,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following keyword is a must have when creating a function in PL/SQL?",
          "options": {
            "A": "REPLACE",
            "B": "IN",
            "C": "AS",
            "D": "RETURN"
          },
          "correct_answer": "D",
          "explanation": "The RETURN keyword is a mandatary keyword while creating a function in PL/SQL. Since functions are made to return any particular value, so a RETURN keyword should always be present to state which value is to be returned.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 83,
          "topic": "PL/SQL Function",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Functions are explicitly taught and assigned.",
          "faculty_alignment": "Day 7 functions; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following statement is true?",
          "options": {
            "A": "Actual and Formal arguments must have same names",
            "B": "Actual and Formal arguments must have different names",
            "C": "Actual parameters are declared in the calling environment and Formal parameters are declared in the function",
            "D": "Formal parameters are declared in the calling environment and Actual parameters are declared in the function"
          },
          "correct_answer": "C",
          "explanation": "The statement which is true amongst the given statements is –\nActual parameters are declared in the calling environment and Formal parameters are declared in the function.\nActual parameters are the values on which the function has to be performed and they could be provided by the user. Formal parameters are just placeholders for the actual parameters and take their value when a function needs them.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-function/"
        },
        {
          "id": 84,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following symbol is used to label a loop in PL/SQL?",
          "options": {
            "A": "()",
            "B": "<>",
            "C": "“”",
            "D": "<<>>"
          },
          "correct_answer": "D",
          "explanation": "In PL/SQL, the loops can be labelled. The label should be enclosed between a pair of twin angular brackets (<< and >>) and should appear before the loop starts.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 85,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following statement is used to come out of the loop when encountered and pass the program control to the statement following the loop?",
          "options": {
            "A": "BREAK",
            "B": "CONTINUE",
            "C": "EXIT",
            "D": "GOTO"
          },
          "correct_answer": "C",
          "explanation": "The EXIT statement is used to exit the loop after being encountered and pass the program control to the statement following the loop. When used in a nested loop, it will stop the execution of only the innermost loop and start executing the next statement after the loop.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 86,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following statement is used to skip the remaining part of the loop when encountered and forces the next iteration of the loop to take place?",
          "options": {
            "A": "BREAK",
            "B": "CONTINUE",
            "C": "EXIT",
            "D": "GOTO"
          },
          "correct_answer": "B",
          "explanation": "The CONTINUE statement is used to skip the part of the loop when encountered and then forces the next iteration of loop to take place and skip anything in between.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 87,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following is the correct syntax for the basic loop statement in PL/SQL?",
          "options": {
            "A": "LOOP\nSEQUENCE OF statements;\nEND;",
            "B": "LOOP\nSEQUENCE OF statements;",
            "C": "LOOP\nSEQUENCE OF statements;\nEND LOOP;",
            "D": "SEQUENCE OF statements;\nEND LOOP;"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax for the basic loop statement in PL/SQL is –\n\n\nLOOP\nSEQUENCE OF statements;\nEND LOOP;\nBasic loop structure encloses sequence of statements in between the LOOP and END LOOP statements.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 88,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nDECLARE\n    x NUMBER := 1;\nBEGIN\n    LOOP\n        dbms_output.put_line(x);\n        x := x + 1;\n        IF x > 3 THEN\n            exit;\n        END IF;\n    END LOOP;\n    dbms_output.put_line('After Exit x is: ' || x);\nEND;\n/",
          "options": {
            "A": "1\n2\n3\nAfter Exit x IS: 3\nPL/SQL PROCEDURE successfully completed.",
            "B": "1\n2\n3\n4\nAfter Exit x IS: 4\nPL/SQL PROCEDURE successfully completed.",
            "C": "1\n2\n3\nAfter Exit x IS: 4",
            "D": "1\n2\n3\nAfter Exit x IS: 4\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "D",
          "explanation": "The correct output for the given PL/SQL code will be –\n1\n2\n3\nAfter Exit x IS: 4\nPL/SQL PROCEDURE successfully completed.\nThe code will run till value 4 but print the number sequence only till 3, 4 will be printed with the statement – “After Exit x is:”.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 89,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following is the correct syntax for the for-loop statement in PL/SQL?",
          "options": {
            "A": "FOR initial_value .. final_value\nLOOP\nsequence_of_statements;\nEND LOOP;",
            "B": "FOR counter IN initial_value .. final_value\nLOOP\nsequence_of_statements;\nEND LOOP;",
            "C": "FOR counter IN initial_value .. final_value\nsequence_of_statements;\nEND LOOP;",
            "D": "FOR counter IN initial_value .. final_value\nLOOP\nsequence_of_statements;"
          },
          "correct_answer": "B",
          "explanation": "The correct syntax for the FOR-Loop statement in PL/SQL is –\nFOR counter IN initial_value .. final_value\nLOOP\nsequence_of_statements;\nEND LOOP;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 90,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "We can reverse the for loop using the REVERSE keyword.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "We can reverse this order by using the REVERSE keyword. In this case, iteration proceeds the opposite way. After each iteration, the loop counter is decreased.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 91,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "What will be the correct output for the following PL/SQL code?\nDECLARE\n    a NUMBER(1) := 1;\nBEGIN\n    WHILE a <5 LOOP\n        dbms_output.put_line('value of a: ' || a);\n        a := a + 1;\n    END LOOP;\nEND;\n/",
          "options": {
            "A": "VALUE OF a: 1\nVALUE OF a:2\nVALUE OF a:3\nVALUE OF a: 4\nPL/SQL PROCEDURE successfully completed.",
            "B": "VALUE OF a: 1\nVALUE OF a: 2\nVALUE OF a: 3\nVALUE OF a: 4",
            "C": "VALUE OF a: 1\nVALUE OF a: 2\nVALUE OF a: 3\nVALUE OF a: 4\nVALUE OF a: 5\nPL/SQL PROCEDURE successfully completed.",
            "D": "VALUE OF a: 1\nVALUE OF a: 2\nVALUE OF a: 3\nVALUE OF a: 4\nVALUE OF a: 5"
          },
          "correct_answer": "A",
          "explanation": "The correct output of the given PL/SQL code will be –\nVALUE OF a: 1\nVALUE OF a: 2\nVALUE OF a: 3\nVALUE OF a: 4\nPL/SQL PROCEDURE successfully completed.\nThe loop will be printed till value 4 because of the given condition (a<5). The last line PL/SQL procedure successfully completed, will always be printed after execution of any program.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 92,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "What is the correct syntax for the NESTED LOOP Statements in PL/SQL?",
          "options": {
            "A": "LOOP\nLOOP\nSEQUENCE OF statements1\nSEQUENCE OF statements2\nEND LOOP;\nEND LOOP;",
            "B": "LOOP\nSEQUENCE OF statements1\nEND LOOP;\nLOOP\nSEQUENCE OF statements2\nEND LOOP;",
            "C": "LOOP\nSEQUENCE OF statements1\nLOOP\nSEQUENCE OF statements2\nEND LOOP;\nEND LOOP;",
            "D": "LOOP\nSEQUENCE OF statements1\nLOOP\nSEQUENCE OF statements2\nEND LOOP;"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax for the NESTED LOOP statements in PL/SQL is –\nLOOP\n    SEQUENCE OF statements1\n    LOOP\n        SEQUENCE OF statements2\n    END LOOP;\nEND LOOP;\nNested loops allow use of one loop inside another loop. The nested loop statements will use 2 LOOP and 2 END LOOP keywords.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 93,
          "topic": "PL/SQL Loops",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Loops are in the faculty assignment.",
          "faculty_alignment": "Assignment 8",
          "warning": null,
          "question": "Which of the following statements is used to provide an unconditional jump from the statement to any specified label in the same subprogram?",
          "options": {
            "A": "CONTINUE",
            "B": "BREAK",
            "C": "EXIT",
            "D": "GOTO"
          },
          "correct_answer": "D",
          "explanation": "The GOTO statement is used to provide an unconditional jump from the GOTO statement to any specified label in the same subprogram. But it is not recommended in any programming language because it makes it difficult to trace the control flow of a program, making the program hard to understand and hard to modify.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-loops/"
        },
        {
          "id": 94,
          "topic": "PL/SQL Operators",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic",
          "warning": null,
          "question": "In PL/SQL which of the following operator is used to raise the power of an operand exponentially?",
          "options": {
            "A": "*",
            "B": "^",
            "C": "**",
            "D": "Power"
          },
          "correct_answer": "C",
          "explanation": "In PL/SQL, ** operator is used to perform exponentiation operation which means the first operand raised to the power the second operand. Example – a = 3, b = 2, a**b = 9.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-operators/"
        },
        {
          "id": 95,
          "topic": "PL/SQL Operators",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic",
          "warning": null,
          "question": "Relational operators returns their result in form of true and false.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Relational operators are used to compare two values and return the result in the form of boolean value(true or false). They are mostly used in conditions where some sort of comparison is required.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-operators/"
        },
        {
          "id": 96,
          "topic": "PL/SQL Operators",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic",
          "warning": null,
          "question": "Which of the following operator is used to match a single character or group of characters (string) to a given string?",
          "options": {
            "A": "SELECT",
            "B": "LIKE",
            "C": "IN",
            "D": "BETWEEN"
          },
          "correct_answer": "B",
          "explanation": "The LIKE operator is used to match a single character or group of characters(string). There are two wildcard characters which are used for the purpose of matching. % is used to match a string of any characters and _ is used to match a single character.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-operators/"
        },
        {
          "id": 97,
          "topic": "PL/SQL Operators",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic",
          "warning": null,
          "question": "Which of the following operator is used to see if the operand value is null or not?",
          "options": {
            "A": "NULL",
            "B": "IS NULL",
            "C": "IS NOT NULL",
            "D": "NOT NULL"
          },
          "correct_answer": "B",
          "explanation": "The IS NULL is used to see if the operand value is null or not operator. It returns true if the operand value is NULL otherwise it returns false.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-operators/"
        },
        {
          "id": 98,
          "topic": "PL/SQL Operators",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic operators support IF/conditions, but advanced PL/SQL-specific operator trivia is low priority.",
          "faculty_alignment": "Day 7 conditions/procedural logic",
          "warning": null,
          "question": "What will be the output of the following PL/SQL statement?\n📌 Limited Seats! Register Now - Free AI-ML Certification (November 2026)\nSELECT * FROM student WHERE city NOT IN ('Delhi','Mumbai','Chennai');",
          "options": {
            "A": "Returns student’s data whose city is Delhi, Mumbai or Chennai",
            "B": "Returns student’s data whose city is Delhi but not Mumbai or Chennai",
            "C": "Returns student’s data whose city is Mumbai but not Delhi or Chennai",
            "D": "Returns student’s data whose city is not Delhi, Mumbai or Chennai"
          },
          "correct_answer": "D",
          "explanation": "The IN operator is used when any value is required to be compared to a given list of values. It returns true if the value is present in the given list otherwise it returns false. Since, NOT is attached in front of IN, so the statement will return the record of the students whose city is not Delhi, Mumbai or Chennai.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-operators/"
        },
        {
          "id": 99,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Packages are schema objects.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A Package is a schema object that groups logically related PL/SQL types, variables, and subprograms. A schema is a collection of logical structures of data, or schema objects. A schema object can be created and manipulated via SQL.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 100,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "A package is divided into how many parts?",
          "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
          },
          "correct_answer": "B",
          "explanation": "A package consists of 2 parts – Package specification and Package definition/body. Package specification is just the interface of the package and is used to just define the package and its subparts. The package body contains the working of various parts of the package.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 101,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following parts are mandatory to include in a package?",
          "options": {
            "A": "Package Specification",
            "B": "Package Definition",
            "C": "Neither package specification nor package definition",
            "D": "Both package specification and package definition"
          },
          "correct_answer": "D",
          "explanation": "Both parts of a package i.e. Package specification and Package definition are mandatory to include when creating a package in PL/SQL.Package specification is like the interface for the package and the package definition contains the working of the objects.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 102,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "All objects placed within the package specification are known as which objects?",
          "options": {
            "A": "Private Objects",
            "B": "Protected Objects",
            "C": "Public Objects",
            "D": "Normal Objects"
          },
          "correct_answer": "C",
          "explanation": "All objects placed within the package specification are known as public objects. Package specification only contains information about the package and no actual code for subprograms, so, these objects are just used for declaration purpose.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 103,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "All objects placed within the package definition are known as which objects?",
          "options": {
            "A": "Private Objects",
            "B": "Protected Objects",
            "C": "Public Objects",
            "D": "Normal Objects"
          },
          "correct_answer": "A",
          "explanation": "All objects placed within the package definition are known as private objects. Package definition contains the actual code for the subprograms, so, these objects are used for defining the purpose of the subprogram.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 104,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is correct syntax to create a package specification in PL/SQL?",
          "options": {
            "A": "CREATE package_name AS\n-- Package Objects\nEND package_name;\n/",
            "B": "CREATE PACKAGE package_name\n-- Package Objects\nEND package_name;\n/",
            "C": "CREATE PACKAGE package_name AS\n-- Package Objects\nEND;\n/",
            "D": "CREATE PACKAGE package_name AS\n-- Package Objects\nEND package_name;\n/"
          },
          "correct_answer": "D",
          "explanation": "The correct syntax for creating a package specification is –\nCREATE PACKAGE package_name AS\n-- Package Objects\nEND package_name;\n/\nThe CREATE command is used along with the PACKAGE and AS keywords. The package name is decided by the user. The package objects space contains all the declaration for the objects that will be part of the package.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 105,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "The public elements of a package can be accessed using which of the following symbol?",
          "options": {
            "A": "*",
            "B": "=",
            "C": ".",
            "D": "->"
          },
          "correct_answer": "C",
          "explanation": "The public elements of a package can be accessed using the dot (.) symbol. The package elements consist of the functions, procedures, and variables. These elements are declared and defined in the specification and definition part of the package respectively before they can be accessed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 106,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following syntax is the correct way to access a package element?",
          "options": {
            "A": "package.element_name;",
            "B": "element_name.package;",
            "C": "element_name.package_name;",
            "D": "package_name.element_name;"
          },
          "correct_answer": "D",
          "explanation": "The correct syntax which is used to access a package element is –\npackage_name.element_name;\nThe package name depends on the user and the element name is the name of the element which is to be accessed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 107,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is not an advantage of a PL/SQL package?",
          "options": {
            "A": "Modularity",
            "B": "Abstraction",
            "C": "Easier Application Design",
            "D": "No Encapsulation"
          },
          "correct_answer": "D",
          "explanation": "A PL/SQL package is used to get advantages like modularity, abstraction and easier application design. A package provides the feature of encapsulation that means to combine all the things into a one single thing.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 108,
          "topic": "PL/SQL Packages",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Packages are not covered in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following package lets you use database triggers to alert an application when specific database values change?",
          "options": {
            "A": "DBMS_OUTPUT",
            "B": "DBMS_ALERT",
            "C": "DBMS_PIPE",
            "D": "DBMS_INPUT"
          },
          "correct_answer": "B",
          "explanation": "The DBMS_ALERT package let us use the database triggers to alert an application when specific database values change. It helps in the asynchronous notification of the database events. The DBMS_ALERT uses the constants.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-packages/"
        },
        {
          "id": 109,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following method is defined as combining different sub-programs to make a larger program?",
          "options": {
            "A": "Modular Programming",
            "B": "Sub-program Programming",
            "C": "Brute Force Programming",
            "D": "Divide and Conquer Programming"
          },
          "correct_answer": "A",
          "explanation": "The method of combining different sub-programs to form a larger program is known as Modular Programming. A sub-program is basically a part of the program that performs only a particular function.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 110,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following statement can be used to create a sub-program at a schema level?",
          "options": {
            "A": "CREATE TABLE",
            "B": "CREATE PROCEDURE",
            "C": "CREATE SUBPROGRAM",
            "D": "CREATE PROGRAM"
          },
          "correct_answer": "B",
          "explanation": "The CREATE PROCEDURE or the CREATE FUNCTION statements are used to create a sub-program at a schema level. At schema level, a sub-program is created and stored in the database and can be deleted by using the DROP PROCEDURE or the DROP function statement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 111,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "What is a sub-program called when it is created inside a package?",
          "options": {
            "A": "Packaged program",
            "B": "Packaged sub-program",
            "C": "Packed program",
            "D": "Packed sub-program"
          },
          "correct_answer": "B",
          "explanation": "A sub-program is called as a packaged sub-program when it is created inside a package. It is stored in the database and can be deleted only when the package is deleted using the DROP PACKAGE statement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 112,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "A sub-program is called as which of the following when it does not return any value directly?",
          "options": {
            "A": "Package",
            "B": "Functions",
            "C": "Modules",
            "D": "Procedures"
          },
          "correct_answer": "D",
          "explanation": "Procedures are those sub-programs that does not directly return any value and are used to perform some action. Functions are those sub-programs that directly return any value and are used to perform some computation.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 113,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "In how many parts does a PL/SQL sub-program is divided into?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "B",
          "explanation": "Every PL/SQL sub-program has a name and every named block has the following 3 parts – Declarative Part, Executable Part and Exception handling Part. From these, only the Executable part is mandatory to write.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 114,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following are the 3 parameter modes for a procedure in PL/SQL?",
          "options": {
            "A": "IN, OUT, IN OUT",
            "B": "LOCAL, GLOBAL, LOCAL GLOBAL",
            "C": "READ, WRITE, APPEND",
            "D": "CUT, COPY, PASTE"
          },
          "correct_answer": "A",
          "explanation": "Parameters are optional part of a procedure definition. IN represents the value that will be passed from inside and OUT represents the parameter that will be used to return a value outside of the procedure. IN OUT is a mixture of both.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 115,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following keyword is used to call a standalone procedure?",
          "options": {
            "A": "RUN",
            "B": "CALL",
            "C": "START",
            "D": "EXECUTE"
          },
          "correct_answer": "D",
          "explanation": "A standalone procedure can be called using the EXECUTE keyword. Its syntax is – EXECUTE procedure_name. A standalone procedure can also be called from another PL/SQL block.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 116,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following is the correct syntax for deleting a procedure?",
          "options": {
            "A": "DELETE PROCEDURE procedure_name;",
            "B": "DELETE procedure_name;",
            "C": "DROP PROCEDURE procedure_name;",
            "D": "DROP procedure_name;"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax for deleting a procedure is –\nDROP PROCEDURE procedure_name;\nThe DROP & PROCEDURE keyword is used followed by the name of the procedure that has to be deleted.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 117,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following is a default mode for a parameter when it’s mode is not specified?",
          "options": {
            "A": "IN",
            "B": "OUT",
            "C": "IN OUT",
            "D": "Parameter mode must always be specified"
          },
          "correct_answer": "A",
          "explanation": "IN is the default mode of parameter passing. It lets you pass a value to the subprogram. It is a read-only parameter. We can pass a constant, literal, initialized variable, or expression as an IN parameter.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 118,
          "topic": "PL/SQL Procedure",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Procedures, IN/OUT/INOUT parameters, creation and execution are central class topics.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following symbol is used in the Named Notation method for passing parameters?",
          "options": {
            "A": "==",
            "B": "=",
            "C": "=>",
            "D": "⬄"
          },
          "correct_answer": "C",
          "explanation": "The => symbol is used in the Named Notation method for passing parameters. The actual parameter is associated with the formal parameter using the arrow symbol ( => ). For Example –\nProcedure_name(a => z, b => y, c => x);",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-procedure/"
        },
        {
          "id": 119,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "What is the full form of PL in PL/SQL?",
          "options": {
            "A": "Programming Language",
            "B": "Procedural Language",
            "C": "Programming Logic",
            "D": "Procedural Logic"
          },
          "correct_answer": "B",
          "explanation": "PL in PL/SQL stands for Procedural Language. It is a block structured language that enables developers to combine the power of SQL with procedural language.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 120,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "PL/SQL can execute a number of queries in one single block using a single command.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Yes, PL/SQL can execute a number of queries in one single block using a single command. All the statements in the block are passed to the oracle engine all at once to increase the processing speed and reduce traffic.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 121,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "Which of the following feature is provided by PL/SQL to handle the exceptions occurred in the PL/SQL block?",
          "options": {
            "A": "Error Handling Block",
            "B": "Error Removing Block",
            "C": "Exception Handling Block",
            "D": "Exception Removing Block"
          },
          "correct_answer": "C",
          "explanation": "The Exception handling block is the feature that helps the user to find and remove any exceptions that are found in the PL/SQL block.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 122,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "PL/SQL cannot contain SQL code inside it.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Since, PL/SQL is an extension of SQL so it can contain the SQL code inside it. But, the vice-versa is not true as SQL cannot contain the PL/SQL code inside it.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 123,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "Which of the following option represent the correct structure of a block in PL/SQL?",
          "options": {
            "A": "👉 Join Sanfoundry classes at Telegram or Youtube\nDECLARE\nEXCEPTIONS\nBEGIN\nEND",
            "B": "EXCEPTIONS\nDECLARE\nBEGIN\nEND",
            "C": "BEGIN\nDECLARE\nEXCEPTIONS\nEND",
            "D": "DECLARE\nBEGIN\nEXCEPTIONS\nEND"
          },
          "correct_answer": "D",
          "explanation": "The basic unit in PL/SQL is a block. A block has the following structure –\nDECLARE – declaration statements\nBEGIN – executable statements\nEXCEPTIONS – exception handling statements\nEND",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 124,
          "topic": "PL/SQL Basics",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Foundational procedural concepts are in class notes.",
          "faculty_alignment": "Day 6/Day 7 notes; Assignment 8",
          "warning": null,
          "question": "Which of the following pair of block structures is mandatory to include in a PL/SQL block?",
          "options": {
            "A": "BEGIN, END",
            "B": "DECLARE, END",
            "C": "EXCEPTIONS, BEGIN",
            "D": "EXCEPTIONS, END\n7. Which of the following operator is used to assign values to a variable in PL/SQL?\na) =\nb) ==\nc) :=\nd) =:\n8. Which of the following command is used to direct the PL/SQL output to a screen?\na) dbms_output.line\nb) dbms_output.put\nc) dbms_output.put_line\nd) utl_file.put_line\n9. “PL/SQL procedure successfully completed” is printed when the code is compiled and executed successfully.\na) True\nb) False\n10. Which of the following symbol is used to denote a single line comment in PL/SQL?\na) /* – – – */\nb) */ – – – */\nc) //\nd) – –\nSanfoundry Global Education & Learning Series – PL/SQL.\nTo practice all areas of PL/SQL,  here is complete set of 1000+ Multiple Choice Questions and Answers.\n👉 For weekly sql practice, exam, and certification updates, join\nSanfoundry’s official WhatsApp & Telegram channels\n← Previous - SQL Questions and Answers – SQL Data TypesNext - PL/SQL Questions and Answers – PL/SQL Syntax →"
          },
          "correct_answer": "A",
          "explanation": "The BEGIN and END keywords are mandatory to include in a PL/SQL block. They are included within the execution section of the block which is a mandatory section to write. In this section the program logic is written to perform any task like loops and conditional statements.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-basics/"
        },
        {
          "id": 125,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "A record is a data-structure that can contain data items of same type.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In PL/SQL, a record is a data structure that can contain data items of different types. Records consists of a combination of different fields, same as a table which is a collection of different rows.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 126,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "How many types of records are supported by PL/SQL?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "B",
          "explanation": "PL/SQL supports 3 different kinds of records. They are – Table-based records, Cursor-based records and User-defined records.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 127,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following attribute enables us to create the table-based and cursor-based records?",
          "options": {
            "A": "%ROWTYPE",
            "B": "%COLUMNTYPE",
            "C": "%RECORDTYPE",
            "D": "%TABLETYPE"
          },
          "correct_answer": "A",
          "explanation": "The %ROWTYPE attribute is used to create the table-based and cursor-based records. The syntax for table-based record is – record_name table_name%ROWTYPE. The syntax for cursor-based record is –\n\n\nrecord_name cursor_name%ROWTYPE\n In the later, a cursor should already be created on the needed table before making a record.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 128,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct syntax for defining a record type in a programmer-defined record?",
          "options": {
            "A": "TYPE RECORD IS record_type (\nfield_name1 data_type1 [[NOT NULL] := | DEFAULT default_value],\nfield_name2 data_type2 [[NOT NULL] := | DEFAULT default_value],\n...\n);",
            "B": "TYPE record_type IS RECORD (\ndata_type1 field_name1 [[NOT NULL] := | DEFAULT default_value],\ndata_type2 field_name2  [[NOT NULL] := | DEFAULT default_value],\n...\n);",
            "C": "TYPE record_type IS RECORD (\nfield_name1 data_type1 [[NOT NULL] := | DEFAULT default_value],\nfield_name2 data_type2 [[NOT NULL] := | DEFAULT default_value],\n...\n);",
            "D": "TYPE record_type RECORD (\nfield_name1 data_type1 [[NOT NULL] := | DEFAULT default_value],\nfield_name2 data_type2 [[NOT NULL] := | DEFAULT default_value],\n...\n);"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax for defining a record type in programmer-defined record is –\nTYPE record_type IS RECORD (\nfield_name1 data_type1 [[NOT NULL] := | DEFAULT default_value],\nfield_name2 data_type2 [[NOT NULL] := | DEFAULT default_value],\n...\n);\nThe fields inside the square brackets [] is not compulsory to write and depends upon the programmer’s need.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 129,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is the correct syntax to declare a record based upon a pre-defined record-type?",
          "options": {
            "A": "record_name record_type;",
            "B": "record_type record_name;",
            "C": "record_name IS record_type;",
            "D": "record_type IS record_name;"
          },
          "correct_answer": "A",
          "explanation": "The correct syntax to declare a record based upon a pre-defined record-type is –\nrecord_name record_type;\nHere, record_name is the name of the record that the user wants to give.\n\nrecord_type is the name of the pre-defined record type.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 130,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following symbol can be used to refer a record’s field in PL/SQL?",
          "options": {
            "A": ":",
            "B": "->",
            "C": ".",
            "D": "="
          },
          "correct_answer": "C",
          "explanation": "The dot (.) symbol can be used to refer a record’s field in PL/SQL. Its syntax is –\nrecord_name.field_name\n The field name should be of the field contained inside the record.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 131,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "You cannot compare two records of the same type via comparison operator.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "It is true. You cannot compare two records of the same type via comparison operator (=). We need to first compare the individual fields of the records instead to check whether the records are similar or not.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 132,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following symbol is used to assign a record to another record?",
          "options": {
            "A": "=",
            "B": "=>",
            "C": "==",
            "D": ":="
          },
          "correct_answer": "D",
          "explanation": "The := symbol is used to assign a record to another record. For example –\nrecord_name1 := record_name2\n This will transfer all the data in record 2 to record 1. This symbol can also be used to assign a value to an individual field in a record.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 133,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "To update a row from a %ROWTYPE record, which of the following keyword can be used?",
          "options": {
            "A": "INSERT ROW",
            "B": "UPDATE ROW",
            "C": "SET ROW",
            "D": "CREATE ROW"
          },
          "correct_answer": "C",
          "explanation": "The SET ROW keyword is used to update a row from a %ROWTYPE record. Its syntax is –\nUPDATE cursor_name\nSET ROW = record_name\nWHERE condition;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 134,
          "topic": "PL/SQL Records",
          "category": "REMOVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "PL/SQL record types are not in supplied notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "We can use a nested record in PL/SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A nested record is a record that contains a field which is another record. Nesting records is a powerful way to structure your program data and hide complexity in your code.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-records/"
        },
        {
          "id": 135,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "How many different types of strings are found in PL/SQL?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "B",
          "explanation": "PL/SQL offers 3 different types of strings. These are Fixed length strings, Variable length strings and Character large objects.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 136,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "In PL/SQL, a variable or a literal is called as a string if it is placed inside which of the following symbol?",
          "options": {
            "A": "Round Brackets ()",
            "B": "Curly Brackets {}",
            "C": "Single Quotes (‘’)",
            "D": "Double Quotes (“”)"
          },
          "correct_answer": "C",
          "explanation": "In PL/SQL, strings could be either variables or literals. A string literal is enclosed within a pair of single quotes (‘’). For example, ‘Sanfoundry’, ‘123’.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 137,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Which of the following method can be used to include a single quote inside a string in PL/SQL?",
          "options": {
            "A": "Place single quote inside curly brackets to consider them",
            "B": "Place single quote inside round brackets to consider them",
            "C": "A double quote has to be placed where a single quote has to be considered",
            "D": "Single quotes cannot be included in the strings"
          },
          "correct_answer": "C",
          "explanation": "To include a single quote inside a string literal, you need to type two single quotes next to one another. For example, ‘This isn’’t Ram’’s book’.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 138,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Which of the following datatype can be used to declare a fixed-length string in PL/SQL?",
          "options": {
            "A": "CHAR",
            "B": "VARCHAR2",
            "C": "CLOB",
            "D": "NCLOB"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, to declare a fixed-length string, we can use the CHAR datatype. For this datatype we do not have to specify a maximum length for a fixed-length variable. If we leave off the length constraint, Database automatically uses the maximum length required.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 139,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "In PL/SQL, the ASCII(x) function is used to return the character with the ASCII value x.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The ASCII(x) function is used to return the ASCII value of the character x. Whereas, the CHR(x) function is used to return the character with the ASCII value x.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 140,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Select the correct output for the following PL/SQL code.\nDECLARE\n   var1 varchar2(20) := 'hello sanfoundry';\nBEGIN\n   dbms_output.put_line(INITCAP(var1));\nEND;\n/",
          "options": {
            "A": "HELLO SANFOUNDRY\nPL/SQL PROCEDURE successfully completed.",
            "B": "Hello sanfoundry\nPL/SQL PROCEDURE successfully completed.",
            "C": "Hello Sanfoundry\nPL/SQL PROCEDURE successfully completed.",
            "D": "HELLO sanfoundry\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "C",
          "explanation": "The correct output of the given PL/SQL code would be –\nHello Sanfoundry\nPL/SQL PROCEDURE successfully completed.\nThe INITCAP() function is used to convert starting letter of each word in the string to capital form. The statement PL/SQL procedure successfully completed will be printed after the code will be perfectly executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 141,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Select the correct output for the following PL/SQL code.\nDECLARE\n   var1 varchar2(20) := 'hello sanfoundry';\nBEGIN\n   dbms_output.put_line(INSTR(var1, ‘s’));\nEND;\n/",
          "options": {
            "A": "6\nPL/SQL PROCEDURE successfully completed.",
            "B": "16\nPL/SQL PROCEDURE successfully completed.",
            "C": "20\nPL/SQL PROCEDURE successfully completed.",
            "D": "7\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "D",
          "explanation": "The correct output of the given PL/SQL code would be –\n7\nPL/SQL PROCEDURE successfully completed.\nThe INSTR(x, ‘y’) function is used to find the specified string(y) in the string x and returns the position of y at which it occurs in x. The statement PL/SQL procedure successfully completed will be printed after the code will be perfectly executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 142,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Select the correct output for the following PL/SQL code.\nDECLARE\n   var1 varchar2(30) := '????hello sanfoundry????';\nBEGIN\n   dbms_output.put_line(TRIM(‘?’ FROM var1));\nEND;\n/",
          "options": {
            "A": "hello sanfoundry\nPL/SQL PROCEDURE successfully completed.",
            "B": "????hello sanfoundry\nPL/SQL PROCEDURE successfully completed.",
            "C": "hello sanfoundry????\nPL/SQL PROCEDURE successfully completed.",
            "D": "????hello sanfoundry????\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "A",
          "explanation": "The correct output of the given PL/SQL code would be –\nhello sanfoundry\nPL/SQL PROCEDURE successfully completed.\nThe TRIM() function is used to trim the specified character from the left and right of the given string. The statement PL/SQL procedure successfully completed will be printed after the code will be perfectly executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 143,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "Select the correct output for the following PL/SQL code.\nDECLARE\n   var1 varchar2(20) := 'hello sanfoundry';\nBEGIN\n   dbms_output.put_line(SUBSTR (var1, 8, 4));\nEND;\n/",
          "options": {
            "A": "nfou\nPL/SQL PROCEDURE successfully completed.",
            "B": "hell\nPL/SQL PROCEDURE successfully completed.",
            "C": "anfo\nPL/SQL PROCEDURE successfully completed.",
            "D": "ndry\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "C",
          "explanation": "The correct output of the given PL/SQL code would be –\nanfo\nPL/SQL PROCEDURE successfully completed.\nThe SUBSTR(string, value1, value2) function is used to return the substring from the given string that begins at the position specified by value1 and has a length specified by value2. The statement PL/SQL procedure successfully completed will be printed after the code will be perfectly executed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 144,
          "topic": "PL/SQL Strings",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Keep basic string handling only if it overlaps functions taught; Oracle PL/SQL string datatype trivia is not a priority.",
          "faculty_alignment": "Day 3 string functions; no PL/SQL string-specific module",
          "warning": null,
          "question": "In PL/SQL, the UPPER(x) function is used to convert the string x to uppercase and return it as output.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, the UPPER(x) function is used to convert the string x to uppercase and return it as output. For example – UPPER(‘sanfoundry’) will return SANFOUNDRY as output.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-strings/"
        },
        {
          "id": 145,
          "topic": "PL/SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax",
          "warning": null,
          "question": "Which of the following syntax is correct way to declare a variable in PL/SQL?",
          "options": {
            "A": "datatype variable_name [NOT NULL := value ];",
            "B": "variable_name datatype [NOT NULL := value ];",
            "C": "variable_name datatype;",
            "D": "variable_name datatype (NOT NULL := value );"
          },
          "correct_answer": "B",
          "explanation": "The correct way to declare a variable in PL/SQL is – variable_name\n\ndatatype [NOT NULL := VALUE];\nDatatype is written after the variable name and the NOT NULL constraint and the value is optional in the declaration part of the variable.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-syntax/"
        },
        {
          "id": 146,
          "topic": "PL/SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax",
          "warning": null,
          "question": "Which of the following statement is used to initialise a variable in PL/SQL?",
          "options": {
            "A": "variable_name datatype := value;",
            "B": "datatype variable_name := value;",
            "C": "variable_name datatype = value;",
            "D": "datatype variable_name = value;"
          },
          "correct_answer": "A",
          "explanation": "The statement which is used to initialise a variable in PL/SQL is –\nvariable_name datatype := VALUE;\nThe datatype is after the variable name and the value is assigned using := (assignment operator).",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-syntax/"
        },
        {
          "id": 147,
          "topic": "PL/SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax",
          "warning": null,
          "question": "Which of the following statement is used to take input from the user in PL/SQL?",
          "options": {
            "A": "variable_name datatype = &variable_name;",
            "B": "datatype variable_name := &variable_name;",
            "C": "datatype variable_name = &variable_name;",
            "D": "variable_name datatype := &variable_name;"
          },
          "correct_answer": "D",
          "explanation": "The statement which is used to take input from the user in PL/SQL is –\n\n\nvariable_name datatype := &variable_name;\nThe assignment operator (:=) is followed by &variable_name to take input from the user.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-syntax/"
        },
        {
          "id": 148,
          "topic": "PL/SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nSQL> SET SERVEROUTPUT ON;\nSQL> DECLARE\n    a varchar2(20) := 'Sanfoundry' ;\nBEGIN\n    dbms_output.put_line(a);\nEND;\n/",
          "options": {
            "A": "Sanfoundry\nprocedure successfully completed.",
            "B": "PL/SQL procedure successfully completed.",
            "C": "Sanfoundry\nPL/SQL procedure successfully completed.",
            "D": "Sanfoundry"
          },
          "correct_answer": "C",
          "explanation": "The output of the following code is –\nSanfoundry\nPL/SQL PROCEDURE successfully completed.\nThe statement PL/SQL procedure successfully completed is always printed after a successful compilation and execution of a PL/SQL code.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-syntax/"
        },
        {
          "id": 149,
          "topic": "PL/SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Basic block/variable syntax supports procedural topics.",
          "faculty_alignment": "Day 7 procedure/function syntax",
          "warning": null,
          "question": "The slash (/) tells the SQL*Plus to execute the block written.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The slash (/) at the end of any Pl/SQL code block tells the SQL*Plus to execute the written block. SQL Plus is a Oracle Database utility, with a basic command-line interface, commonly used by users and administrators to administer a database.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-syntax/"
        },
        {
          "id": 150,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following is an atomic unit of work that may consist of one or more related SQL statements?",
          "options": {
            "A": "Collections",
            "B": "Transactions",
            "C": "Packages",
            "D": "Exceptions"
          },
          "correct_answer": "B",
          "explanation": "PL/SQL Transaction is an atomic unit of work that may consist of one or more related SQL statements. It is called atomic because all the SQL statements that constitute a transaction can be either committed or rolled back collectively using a single statement.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 151,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following event starts a transaction?",
          "options": {
            "A": "A commit statement is issued",
            "B": "User disconnects with the database",
            "C": "The first SQL statement is performed after connecting to a database",
            "D": "A DDL statement such as, CREATE command is issued"
          },
          "correct_answer": "C",
          "explanation": "The event that starts a transaction is the first SQL statement which is performed after connecting to a database. Another event which starts a transaction is the execution of a new SQL statement after a transaction is completed.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 152,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "In SQL*PLUS a commit is automatically performed.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL*PLUS a commit is automatically performed and you do not have to do this explicitly using the COMMIT command. A user can exit form SQL*PLUS by using the EXIT command. A ROLLBACK command is also automatically performed if SQL*PLUS terminates abnormally.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 153,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following command is used to make the changes done in a database, permanent in PL/SQL?",
          "options": {
            "A": "COMMIT",
            "B": "ROLLBACK",
            "C": "SAVE",
            "D": "EXIT"
          },
          "correct_answer": "A",
          "explanation": "The COMMIT command is used to make the changes permanent in PL/SQL. The general syntax for committing changes is just to right the commit keyword – COMMIT;\nWithout committing the changes, they can be reverted back or undone.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 154,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following command is used to undo the changes done to the database in PL/SQL?",
          "options": {
            "A": "REVERT",
            "B": "ROLLBACK",
            "C": "UNDO",
            "D": "EXIT"
          },
          "correct_answer": "B",
          "explanation": "The ROLLBACK command is used to undo the changes done to the database in PL/SQL. The general syntax for committing changes is just to right the rollback keyword – ROLLBACK; If there is any save point available in the transaction than the rollback process will happen only till the specified save point otherwise the whole transaction will be undone.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 155,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following syntax is correct for creating a savepoint in PL/SQL?",
          "options": {
            "A": "SAVEPOINT;",
            "B": "<savepoint_namecc;",
            "C": "<savepoint_name> SAVEPOINT;",
            "D": "SAVEPOINT <savepoint_name>;"
          },
          "correct_answer": "D",
          "explanation": "Save points are a sort of checkpoints that helps the user to roll back to their chosen save point in case of long transactions. The correct syntax for creating a savepoint is –\nSAVEPOINT <savepoint_name>;\nThe save point name is user depended.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 156,
          "topic": "PL/SQL Transactions",
          "category": "KEEP",
          "syllabus_topic": "3. Transactions (ACID, COMMIT, ROLLBACK)",
          "syllabus_detail": "ACID properties / Transaction Management",
          "reason": "COMMIT/ROLLBACK/SAVEPOINT are explicit in syllabus, notes and assignments.",
          "faculty_alignment": "Day 6 TCL; Views & Indexes assignment",
          "warning": null,
          "question": "Which of the following environment variable is set to execute a COMMIT automatically whenever a DML command is executed?",
          "options": {
            "A": "SELFCOMMIT",
            "B": "AUTOSAVEPOINT",
            "C": "AUTOCOMMIT",
            "D": "AUTOROLLBACK"
          },
          "correct_answer": "C",
          "explanation": "The AUTOCOMMIT environment variable is set to execute a COMMIT automatically whenever a DML command like INSERT, UPDATE or DELETE is executed. To turn on the AUTOCOMMIT variable we use – SET AUTOCOMMIT ON;\nTo turn off the AUTOCOMMIT variable we use – SET AUTOCOMMIT OFF;",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-transactions/"
        },
        {
          "id": 157,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Triggers are automatically executed.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, Triggers are already stored program that are automatically invoked or called when a specified event occurs. Triggers can be defined over a table, view, database etc. with which the event is associated.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 158,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following can execute a trigger in PL/SQL?",
          "options": {
            "A": "User",
            "B": "Oracle server",
            "C": "Both user and oracle server",
            "D": "Neither user nor oracle server"
          },
          "correct_answer": "B",
          "explanation": "A trigger is automatically executed by the Oracle server whenever a specified event occurs. A user can create and store a trigger and specify when to execute it but the its execution is done by the server automatically.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 159,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following syntax is correct way to create a trigger in PL/SQL?",
          "options": {
            "A": "CREATE [OR REPLACE] TRIGGER trigger_name\n{BEFORE | AFTER | INSTEAD OF}\n{INSERT [OR] | UPDATE [OR] | DELETE}\n[OF TABLE_NAME]\nON row_name\n[REFERENCING OLD AS o NEW AS n]\n[FOR EACH ROW]\nWHEN (condition)",
            "B": "CREATE [OR REPLACE] TRIGGER\n{BEFORE | AFTER | INSTEAD OF}\n{INSERT [OR] | UPDATE [OR] | DELETE}\n[OF column_name]\nTABLE_NAME\n[REFERENCING OLD AS o NEW AS n]\n[FOR EACH ROW]\nWHEN (condition)",
            "C": "CREATE [OR REPLACE] TRIGGER trigger_name\n{BEFORE | AFTER | INSTEAD OF}\n{INSERT [OR] | UPDATE [OR] | DELETE}\n[OF column_name]\nON TABLE_NAME\n[REFERENCING OLD AS o NEW AS n]\n[FOR EACH ROW]\nWHEN (condition)",
            "D": "CREATE [OR REPLACE] trigger_name\n{BEFORE | AFTER | INSTEAD OF}\n{INSERT [OR] | UPDATE [OR] | DELETE}\n[OF column_name]\nON TABLE_NAME\n[REFERENCING OLD AS o NEW AS n]\n[FOR EACH ROW]\n(condition)"
          },
          "correct_answer": "C",
          "explanation": "The correct syntax used for creating a trigger in PL/SQL is –\nCREATE [OR REPLACE] TRIGGER trigger_name\n{BEFORE | AFTER | INSTEAD OF}\n{INSERT [OR] | UPDATE [OR] | DELETE}\n[OF column_name]\nON TABLE_NAME\n[REFERENCING OLD AS o NEW AS n]\n[FOR EACH ROW]\nWHEN (condition)\nThe CREATE OR REPLACE keyword is sued to create or replace a trigger. {BEFORE | AFTER | INSTEAD OF} is used to specify when the trigger will execute. {INSERT [OR] | UPDATE [OR] | DELETE} states the DML operation. Column name tells which column is to be updated. Table name is the name of the table on which trigger is formed. [FOR EACH ROW] is used to tell whether the trigger is row-level or table-level. At last the condition is stated when will execute the trigger. The entries inside the square brackets [] are not mandatory to write.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 160,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following types of statement can trigger a trigger execution?",
          "options": {
            "A": "Only DML statements",
            "B": "Only DDL statements",
            "C": "Only DCL statements",
            "D": "Both DML & DDL statements"
          },
          "correct_answer": "D",
          "explanation": "Both the DML statements (DELETE, INSERT, UPDATE) and the DDL statements (CREATE, ALTER, DROP) are used to trigger a trigger execution. Triggers are written to be executed in response to any of these events including any database operation like LOGON, LOGOFF, SHUTDOWN etc.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 161,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which keyword is used to recreate a trigger if it already exists?",
          "options": {
            "A": "Create",
            "B": "Replace",
            "C": "Recreate",
            "D": "Respawn"
          },
          "correct_answer": "B",
          "explanation": "The Replace keyword is used to recreate a trigger if it already exists. The previous trigger will be deleted and the new one will take its place. The Create keyword is used to create a trigger if it is not already available.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 162,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following statement does not execute a trigger?",
          "options": {
            "A": "INSERT",
            "B": "UPDATE",
            "C": "SELECT",
            "D": "CREATE"
          },
          "correct_answer": "C",
          "explanation": "The SELECT command does not execute a trigger. A trigger is only executed automatically by a DDL (CREATE, ALTER, DROP) statement or a DML (DELETE, INSERT, UPDATE) statement and since SELECT does not comes under any of this category, hence it does not execute a trigger.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 163,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following statement is false regarding Triggers?",
          "options": {
            "A": "Triggers does not accept parameters",
            "B": "Triggers does not return any value",
            "C": "Triggers are executed automatically",
            "D": "Triggers accept parameters"
          },
          "correct_answer": "D",
          "explanation": "The statement which is false about Triggers is that they accept parameters. Triggers do not accept any kind of parameters. It only takes time of execution and on which statement, DDL or DML, it has to start execution.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 164,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "How many times does a statement/table level trigger is executed for each transaction?",
          "options": {
            "A": "1",
            "B": "3",
            "C": "5",
            "D": "infinite times"
          },
          "correct_answer": "A",
          "explanation": "A statement/table-level trigger is executed whenever the specified event occurs on a table regardless of how many rows are affected. In other words, a statement-level trigger executes once for each transaction. We can create a statement trigger by omitting the FOR EACH ROW clause form the CREATE TRIGGER command.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 165,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Which of the following clause is used to create a row level trigger?",
          "options": {
            "A": "FOR ALL ROW",
            "B": "FOR EVERY ROW",
            "C": "FOR EACH ROW",
            "D": "FOR THIS ROW"
          },
          "correct_answer": "C",
          "explanation": "The FOR EACH ROW clause is used to create a row level trigger. A row level trigger is a kind of trigger which is executed every time whenever an affected row is updated, inserted or deleted. The FOR EACH ROW is used in conjunction with the CREATE TRIGGER command.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 166,
          "topic": "PL/SQL Triggers",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL-SQL: Triggers",
          "reason": "Triggers are explicit in syllabus and a dedicated faculty assignment.",
          "faculty_alignment": "Day 7 triggers; Assignment 8",
          "warning": "Retain your faculty's exact MySQL syntax when practising procedures, functions, and triggers.",
          "question": "Triggers can be used to prevent invalid transactions.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In PL/SQL, Triggers have various uses. One such use is to prevent invalid transaction. The user creates and stores a trigger such that whenever any invalid action is performed then the execution of trigger takes place which in-turn issues a warning or terminates the current invalid action.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-triggers/"
        },
        {
          "id": 167,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "Which of the following variable name is valid in PL/SQL?",
          "options": {
            "A": "_person123",
            "B": "person",
            "C": "person@123",
            "D": "11person"
          },
          "correct_answer": "B",
          "explanation": "The name of a PL/SQL variable should start with a letter, optionally followed by letters, numerals, dollar signs and underscores.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 168,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "Which of the following is an incorrect variable declaration in PL/SQL?",
          "options": {
            "A": "var_number varchar2(10);",
            "B": "var_text number (10);",
            "C": "var_char char (1) := ‘Y’;",
            "D": "var_text varchar2(10) := ‘hello world’;"
          },
          "correct_answer": "D",
          "explanation": "The incorrect variable declaration is – var_text varchar2(10) := ‘hello world’;\nAs the “hello world” string exceeds the word limit of 10 characters while declaring the variable.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 169,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "Which of the following is not a valid variable type in PL/SQL?",
          "options": {
            "A": "VARCHAR1",
            "B": "VARCHAR2",
            "C": "CHAR",
            "D": "NUMBER"
          },
          "correct_answer": "A",
          "explanation": "There is no variable type named VARCHAR1 in PL/SQL. VARCHAR2 is used to store strings. CHAR is used to store single character and NUMBER is used to store numeric values in variables.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 170,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "Which of the following is the DEFAULT value of an uninitialized variable in PL/SQL?",
          "options": {
            "A": "0",
            "B": "/0",
            "C": "NULL",
            "D": "\\0"
          },
          "correct_answer": "C",
          "explanation": "Whenever we declare a variable, PL/SQL assigns it a default value of NULL. If we want to initialize a variable with a value other than the NULL value then we can do it by using the assignment operator or the DEFAULT keyword during the variable’s declaration.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 171,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "Which of the following variable is declared in the outermost block or package of PL/SQL?",
          "options": {
            "A": "Local Variable",
            "B": "Global Variable",
            "C": "Reference Variable",
            "D": "Static Variable"
          },
          "correct_answer": "B",
          "explanation": "Global variables are the variables that are declared in the outermost block or a package and can be accessible to the whole package. Local variables are the variables that are declared in an inner block and are not accessible to outer blocks.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 172,
          "topic": "PL/SQL Variables",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "PL/SQL introduction",
          "reason": "Variables/declarations are necessary for procedures/functions and covered in class.",
          "faculty_alignment": "Day 7 variables and parameters",
          "warning": null,
          "question": "What will be the output of the following PL/SQL code?\nDECLARE\n   a INTEGER := 30;\n   b INTEGER := 40;\n   c INTEGER;\n   d REAL;\nBEGIN\n   c := a + b;\n   dbms_output.put_line('Value of c: ' || c);\n   d := 70.0/3.0;\n   dbms_output.put_line('Value of d: ' || d);\nEND;\n/",
          "options": {
            "A": "VALUE OF c: 70\nVALUE OF d: 23.333333333333333333",
            "B": "VALUE OF c: 70\nVALUE OF d: 23.333333333333333333\nPL/SQL PROCEDURE successfully completed.",
            "C": "VALUE OF c: 70\nVALUE OF d: 23\nPL/SQL PROCEDURE successfully completed.",
            "D": "VALUE OF c: 70.000000000000000000\nVALUE OF d: 23.333333333333333333\nPL/SQL PROCEDURE successfully completed."
          },
          "correct_answer": "B",
          "explanation": "The correct output of the given code would be –\nVALUE OF c: 70\nVALUE OF d: 23.333333333333333333\nPL/SQL PROCEDURE successfully completed.\nAfter every successful PL/SQL code execution, “PL/SQL procedure successfully completed” is printed. Since, d has real as it’s datatype so it will return the output in decimal form.",
          "source_url": "https://www.sanfoundry.com/pl-sql-questions-answers-pl-sql-variables/"
        },
        {
          "id": 173,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "Temporary names given to a table or a column for the purpose of a particular SQL query are known as __________",
          "options": {
            "A": "Aliases",
            "B": "Temp",
            "C": "Temporary",
            "D": "Rename"
          },
          "correct_answer": "A",
          "explanation": "The use of table aliases is to rename a table in a specific SQL statement. SQL ALIASES can be used to create a temporary name for columns or tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 174,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "An SQL ALIAS exists even after the execution of a query.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Using SQL ALIAS we can rename a column or a table temporarily. An alias exists only during the execution of the query. After its execution those temporary names cannot be used as the changes are not permanent in the database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 175,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "Which of the following is used to rename a table or a column in a specific SQL statement?",
          "options": {
            "A": "Rename",
            "B": "Change",
            "C": "Alias",
            "D": "Modify"
          },
          "correct_answer": "C",
          "explanation": "The alias is used to rename a table or a column in a specific SQL statement. The renaming is a temporary change and the actual table name or column name does not change in the database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 176,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "What is the basic syntax for a column alias?",
          "options": {
            "A": "SELECT column_name AS alias_name\nFROM TABLE_NAME;",
            "B": "⚡ Claim Your Free Java Certification - November 2026\nSELECT column_name ALIAS alias_name\nFROM TABLE_NAME;",
            "C": "SELECT column_name COLUMN ALIAS alias_name\nFROM TABLE_NAME;",
            "D": "SELECT column_name COLUMN AS alias_name\nFROM TABLE_NAME;"
          },
          "correct_answer": "A",
          "explanation": "Aliases are the temporary names given to table or column for the purpose of a particular SQL query. Basic syntax for a column alias is:\nSELECT column_name AS alias_name\nFROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 177,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "What is the basis syntax for a table alias?",
          "options": {
            "A": "SELECT column_name\nFROM TABLE_NAME ALIAS alias_name;",
            "B": "SELECT column_name\nFROM TABLE_NAME TABLE AS alias_name;",
            "C": "SELECT column_name\nFROM TABLE_NAME AS alias_name;",
            "D": "SELECT column_name\nFROM TABLE_NAME TABLE ALIAS alias_name;"
          },
          "correct_answer": "C",
          "explanation": "SQL ALIASES can be used to create a temporary name for columns or tables. Basic syntax for a table alias is:\nSELECT column_name\nFROM TABLE_NAME AS alias_name;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 178,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "Alias name should not contain any spaces.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "It is acceptable to use spaces in an alias name. If the alias name contains spaces, we must enclose the alias name in double quotes or square brackets. This alias name is only valid within the scope of the SQL statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 179,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "ALIAS can be used with which of the following clause(s)?",
          "options": {
            "A": "Insert",
            "B": "Update",
            "C": "Select",
            "D": "Delete"
          },
          "correct_answer": "C",
          "explanation": "Aliases are the temporary names given to table or column for the purpose of a particular SQL query. It can be used with SELECT clause of a query. We cannot use ALIAS with insert, update or delete clauses.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 180,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "When creating table aliases _______",
          "options": {
            "A": "It is not necessary to create aliases for all of the tables listed in the FROM clause",
            "B": "It is necessary to create aliases for at least two of the tables listed in the FROM clause",
            "C": "It is necessary to create aliases for all of the tables listed in the FROM clause",
            "D": "It is necessary to create aliases for at least three of the tables listed in the FROM clause"
          },
          "correct_answer": "A",
          "explanation": "When creating table aliases, it is not necessary to create aliases for all of the tables listed in the FROM clause. We can choose to create aliases on any or all of the tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 181,
          "topic": "SQL Aliases",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "Core SQL query construction; directly in Worker assignment.",
          "faculty_alignment": "Assignment 2 (Worker); Assignment 5",
          "warning": null,
          "question": "During the execution of a query, the temporary names of columns or tables can be used for ______",
          "options": {
            "A": "Only one time",
            "B": "Specified number of times",
            "C": "Any number of times",
            "D": "Maximum three times"
          },
          "correct_answer": "C",
          "explanation": "The temporary names of columns or tables can be used for any number of times within the specified query.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-aliases/"
        },
        {
          "id": 182,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following command is used to modify the structure of a table in SQL?",
          "options": {
            "A": "CREATE",
            "B": "DROP",
            "C": "ALTER",
            "D": "INSERT"
          },
          "correct_answer": "C",
          "explanation": "The ALTER command is used to modify the structure of a table in SQL. The CREATE command is used to create a table or database. The DROP command is used to delete the structure of a table or database. The INSERT command is used to insert data inside the tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 183,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, the ALTER command can be put under which of the following category?",
          "options": {
            "A": "DDL (Data Definition Language)",
            "B": "DML (Data Manipulation Language)",
            "C": "DCL (Data Control Language)",
            "D": "TCL (Transaction Control Language)"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the ALTER command comes under the category of DDL (Data Definition Language) which is used to define the structure of the table. DML (Data Manipulation Language) is used to manipulate the data inside the table. DCL (Data Control Language) is used by the database administrator to configure security access to relational databases. TCL (Transaction Control Language) is used to commit or rollback the changes made by DML commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 184,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, the ALTER command cannot be used to perform which of the following task?",
          "options": {
            "A": "Add Column",
            "B": "Drop Column",
            "C": "Modify Column",
            "D": "Restore Column"
          },
          "correct_answer": "D",
          "explanation": "In SQL, the ALTER command cannot be used to perform the restore column function. The ALTER command is used to add, drop or modify an existing column in a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 185,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to add a column to an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD column_name datatype;",
            "B": "ALTER TABLE_NAME\nADD column_name datatype;",
            "C": "ALTER TABLE TABLE_NAME\ncolumn_name datatype;",
            "D": "👉 Join Sanfoundry classes at Telegram or Youtube\nALTER TABLE\nADD column_name datatype;"
          },
          "correct_answer": "A",
          "explanation": "The syntax used to add a new column to an existing table using the ALTER command is –\n\n\nALTER TABLE TABLE_NAME\nADD column_name datatype;\nADD keyword is always present in the statement with the ALTER and the TABLE keyword and the table name and the column name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 186,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to drop a column from an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE_NAME\nDROP COLUMN column_name;",
            "B": "ALTER TABLE TABLE_NAME\nDROP column_name;",
            "C": "ALTER TABLE TABLE_NAME\nDROP COLUMN column_name;",
            "D": "ALTER TABLE\nDROP COLUMN column_name;"
          },
          "correct_answer": "C",
          "explanation": "The syntax used to drop a column from an existing table using the ALTER command is –\nALTER TABLE TABLE_NAME\nDROP COLUMN column_name;\nDROP keyword is always present in the statement with the ALTER and the TABLE keyword and the table name and the column name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 187,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to modify a column in an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nMODIFY COLUMN column_name datatype;",
            "B": "ALTER TABLE_NAME\nMODIFY COLUMN column_name datatype;",
            "C": "ALTER TABLE TABLE_NAME\nMODIFY COLUMN datatype;",
            "D": "ALTER TABLE TABLE_NAME\nCOLUMN column_name datatype;"
          },
          "correct_answer": "A",
          "explanation": "The syntax used to drop a column from an existing table using the ALTER command is –\nALTER TABLE TABLE_NAME\nMODIFY COLUMN column_name datatype;\nMODIFY keyword is always present in the statement with the ALTER, the TABLE and the COLUMN keyword and the table name and the column name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 188,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, the ALTER command can be used to add and drop various constraints on an existing table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the ALTER command can be used to add and drop various constraints to an existing table. This can be done by using the MODIFY or DROP version of the command.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 189,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to add a constraint in an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name (condition/column_name);",
            "B": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name constraint_type (condition/column_name);",
            "C": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_type (condition/column_name);",
            "D": "ALTER TABLE TABLE_NAME\nADD constraint_name constraint_type (condition/column_name);"
          },
          "correct_answer": "B",
          "explanation": "The syntax used to add a constraintto an existing table using the ALTER command is –\nALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name constraint_type (condition/column_name);\nFor example –\nALTER TABLE Employee\nADD CONSTRAINT MyConstraint UNIQUE (column1, column3);\nHere, constraint_name is a name given to the constraint used by the user.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 190,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to drop a constraint from an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nDROP CONSTRAINT/INDEX constraint_name;",
            "B": "ALTER TABLE TABLE_NAME\nCONSTRAINT/INDEX constraint_name;",
            "C": "ALTER TABLE TABLE_NAME\nDROP CONSTRAINT/INDEX;",
            "D": "ALTER TABLE TABLE_NAME\nDROP CONSTRAINT/INDEX constraint_type;"
          },
          "correct_answer": "A",
          "explanation": "The syntax used to drop a constraint from an existing table using the ALTER command is\nALTER TABLE TABLE_NAME\nDROP CONSTRAINT/INDEX constraint_name;\nFor example –\nALTER TABLE Employee\nDROP CONSTRAINT MyConstraint;\nINDEX is used rather than CONSTRAINT in MySQL when removing INDEX based constraint such as UNIQUE. Here, MyConstraint is a name given to UNIQUE constraint added to the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 191,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to rename an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE\nRENAME TO new_table_name;",
            "B": "ALTER TABLE_NAME\nRENAME TO new_table_name;",
            "C": "ALTER TABLE TABLE_NAME\nRENAME new_table_name;",
            "D": "ALTER TABLE TABLE_NAME\nRENAME TO new_table_name;"
          },
          "correct_answer": "D",
          "explanation": "The syntax used to rename an existing table using the ALTER command is –\nALTER TABLE TABLE_NAME\nRENAME TO new_table_name;\nRENAME TO keyword is always present in the statement with the ALTER and the TABLE keyword and the table name and the new table name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 192,
          "topic": "SQL Alter Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "DDL/ALTER TABLE is explicitly in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to rename a column in an existing table using the ALTER command?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nRENAME COLUMN TO new_name;",
            "B": "ALTER column_name\nRENAME TO new_column_name;",
            "C": "ALTER TABLE TABLE_NAME\nRENAME new_column_name;",
            "D": "ALTER TABLE TABLE_NAME\nRENAME COLUMN old_name TO new_name;"
          },
          "correct_answer": "D",
          "explanation": "The syntax used to rename an existing table using the ALTER command is –\nALTER TABLE TABLE_NAME\nRENAME COLUMN old_name TO new_name;\nRENAME TO keyword is always present in the statement with the ALTER, the TABLE and the COLUMN keyword and the table name, the old column name and the new column name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-alter-table/"
        },
        {
          "id": 193,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "ANY and ALL operators are used with which of the following clauses in SQL?",
          "options": {
            "A": "Where, select",
            "B": "Select, having",
            "C": "Where, having",
            "D": "Group by, where"
          },
          "correct_answer": "C",
          "explanation": "The ANY and ALL operators are used with a WHERE or HAVING clause in SQL. ALL can be used with SELECT clause whereas ANY cannot be used with it. ANY and ALL cannot be used with GROUP BY.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 194,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "ANY operator returns true if ______",
          "options": {
            "A": "any one of the subquery values doesn’t meet the condition",
            "B": "any one of the subquery values meets the condition",
            "C": "all the subquery values don’t meet the condition",
            "D": "all the subquery values meet the condition"
          },
          "correct_answer": "B",
          "explanation": "ANY operator compares a value with the values in a list or results of a subquery and evaluates to true if the result of sub query contains at least one row.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 195,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "ALL operator returns true if  ______",
          "options": {
            "A": "All of the sub queries values satisfy the condition",
            "B": "All of the sub queries values doesn’t satisfies the condition",
            "C": "Any one of the sub queries values doesn’t satisfies the condition",
            "D": "Any one of the sub queries values satisfies the condition"
          },
          "correct_answer": "A",
          "explanation": "ALL operator is used to compare a value to every value in another value set or result from a subquery. It returns true if all of the subquery values meet the condition.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 196,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "ANY and ALL operators must be preceded by which of the following in SQL?",
          "options": {
            "A": "Arithmetic operators",
            "B": "Bitwise operators",
            "C": "Logical operators",
            "D": "Comparison operators"
          },
          "correct_answer": "D",
          "explanation": "The ALL and ANY operators must be preceded by comparison operators like =, < >, !=, >, >=, <, <=.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 197,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "What is the correct syntax for using ALL operator in SQL?",
          "options": {
            "A": "⚡ Claim Your Free Java Certification - November 2026\nSELECT column_list\nFROM TABLE_NAME\nWHERE column_name ALL (subquery);",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name comparison_opearator ALL (subquery);",
            "C": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name NOT ALL (subquery);",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name ALL subquery;"
          },
          "correct_answer": "B",
          "explanation": "Syntax for using ALL operator in SQL is:\nSELECT column_list\nFROM TABLE_NAME\nWHERE column_name comparison_opeartor ALL (subquery);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 198,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "If subquery of a query with ALL operator returns zero rows then the condition evaluates to be _______",
          "options": {
            "A": "Null",
            "B": "Undetermined",
            "C": "True",
            "D": "False"
          },
          "correct_answer": "C",
          "explanation": "If a subquery of ALL operator returns zero rows, the condition evaluates to TRUE. If the subquery returns zero rows, it means the whole expression x > ALL (zero rows) evaluates to TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 199,
          "topic": "SQL Any & All",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Advanced subquery operators; aligns with subquery practice.",
          "faculty_alignment": "Assignment 7; Day 5 advanced subqueries",
          "warning": null,
          "question": "If a subquery of ANY operator returns zero rows then the condition evaluates to be _______",
          "options": {
            "A": "Null",
            "B": "True",
            "C": "False",
            "D": "Undetermined"
          },
          "correct_answer": "C",
          "explanation": "If subquery of a query with ANY operator returns zero rows, the condition evaluates to FALSE. If the subquery returns zero rows, it means the whole expression x > ANY (zero rows) evaluates to FALSE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-any-all/"
        },
        {
          "id": 200,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "Which of the following is used to generate a unique number whenever a new row is entered in a table in SQL?",
          "options": {
            "A": "UNIQUE",
            "B": "PRIMARY KEY",
            "C": "AUTO INCREMENT",
            "D": "INDEX"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the AUTO INCREMENT field is used to generate a unique number whenever a new row is added in a table. Most probably the primary key column of a table should be the one where the auto increment field should be applied.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 201,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to apply the AUTO INCREMENT field on a column?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME AUTO_INCREMENT (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT);",
            "B": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT AUTOINCREMENT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT);",
            "C": "🔥 Enroll for Free Data Structure Certification - November 2026\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nAUTO_INCREMENT (column_name));",
            "D": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT AUTO_INCREMENT,\ncolumn2 datatype CONSTRAINT,\n….\ncolumnn datatype CONSTRAINT);"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to apply the AUTO INCREMENT field on a column is –\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT AUTO_INCREMENT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT);\nThe AUTO_INCREMENT keyword is used while using the CREATE command after the column name on which it has to applied.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 202,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "What is the default value by which a record will be increased when the AUTO INCREMENT field is applied on it?",
          "options": {
            "A": "1",
            "B": "Specified by the user",
            "C": "10",
            "D": "0"
          },
          "correct_answer": "A",
          "explanation": "By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 203,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "We can change the default value of the AUTO INCREMENT field by which a record will be increased?",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "We can change the default value of the AUTO INCREMENT field by which a record is increased. By default, the value is 1 but we can change the value as according to our need.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 204,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "Which of the following statement is used to change the default value of the AUTO INCREMENT field?",
          "options": {
            "A": "ALTER table_name AUTO_INCREMENT=100;",
            "B": "ALTER TABLE table_name AUTO_INCREMENT=100;",
            "C": "CHANGE TABLE table_name AUTO_INCREMENT=100;",
            "D": "ALTER TABLE table_name AUTO_INCREMENT (100);"
          },
          "correct_answer": "B",
          "explanation": "The statement that can be used to change the default value of the AUTO INCREMENT field is –\nALTER TABLE TABLE_NAME AUTO_INCREMENT=100;\nWe use the ALTER command and assign the needed value to the AUTO INCREMENT filed through an equals sign.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 205,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "We have to insert a new record into a table, we will have to specify a value for the column on which the AUTO INCREMENT field is applied.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "We do not have to enter a value for the column on which the AUTO INCREMENT field is applied when we are entering a new record. This entry for the column will be automatically generated and filled.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 206,
          "topic": "SQL Auto Increment",
          "category": "SELECTIVE",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / data types",
          "reason": "AUTO_INCREMENT is not explicitly in syllabus or assignments; know the basic concept, but low priority.",
          "faculty_alignment": "No explicit assignment; schema design adjacent",
          "warning": null,
          "question": "Which of the following statement is used to apply the AUTO INCREMENT field on a column with a starting value other than 1?",
          "options": {
            "A": "column_name datatype constraint AUTOINCREMENT;",
            "B": "column_name datatype constraint AUTOINCREMENT = 10,5;",
            "C": "column_name datatype constraint AUTOINCREMENT (10,5);",
            "D": "column_name datatype constraint (10,5) AUTOINCREMENT;"
          },
          "correct_answer": "C",
          "explanation": "The statement that is used to apply the AUTO INCREMENT field on a column with a starting value other than 1 is –\ncolumn_name datatype CONSTRAINT AUTOINCREMENT (10,5);\nHere, the starting value for the column would be 10 and it would be automatically increased by 5 every time a new record is added to the column. Also, we use the AUTOINCREMENT keyword in SQL Server rather than the AUTO_INCREMENT keyword which is used in MySQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-auto-increment/"
        },
        {
          "id": 207,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which function returns the average value of a numeric expression?",
          "options": {
            "A": "Average( )",
            "B": "Avg( )",
            "C": "Ave( )",
            "D": "Average Num( )"
          },
          "correct_answer": "B",
          "explanation": "Avg( ) function is used to calculate the average value of a specified numeric expression. This expression can be a column name or an arithmetic expression.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 208,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following function returns the total sum of a numeric column?",
          "options": {
            "A": "Add( )",
            "B": "Addition( )",
            "C": "Sum( )",
            "D": "Total sum( )"
          },
          "correct_answer": "C",
          "explanation": "Sum is an aggregate function. This function calculates and returns the total sum of a specified numeric column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 209,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "If one or more columns are there in a SELECT statement in addition to the SUM or AVG function, these columns need to be a part of _______",
          "options": {
            "A": "Having clause",
            "B": "Group By clause",
            "C": "Order By clause",
            "D": "Where clause"
          },
          "correct_answer": "B",
          "explanation": "It is possible to have one or more columns in addition to the SUM or AVG function in the SELECT statement. In those cases, these columns need to be part of the GROUP BY clause as well.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 210,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Arithmetic operations cannot be used inside SUM function.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The SUM function can be used to calculate the total for an expression. This expression can be a column name or an arithmetic expression. An arithmetic operation can include more than one column, such as (column1 – column2).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 211,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following is a correct syntax for sum( ) function?",
          "options": {
            "A": "Select SUM( ) from table_name;",
            "B": "Select SUM(expression) from table_name;",
            "C": "Select SUM ( ) expression from table_name;",
            "D": "Select expression SUM( ) from table_name;"
          },
          "correct_answer": "B",
          "explanation": "The SQL SUM function is used to return the sum of an expression in a SELECT statement. Syntax for SUM function in SQL is:\n\nSELECT SUM(expression) FROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 212,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following cannot be used as an argument for SUM function? ( Column1 and column2 are numeric fields of a table)",
          "options": {
            "A": "Column1*4",
            "B": "*",
            "C": "Column1 + Column2",
            "D": "Column1"
          },
          "correct_answer": "B",
          "explanation": "Column names or arithmetic expressions can be used as arguments for SUM( ) function, whereas *,all cannot be used. This is because the SUM( ) function calculates the sum of any specified column, not the entire records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 213,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "What is the syntax for basic SQL AVG function?",
          "options": {
            "A": "Select AVG(expression) from table;",
            "B": "Select Average(expression) from table;",
            "C": "Select AVG( ) expression from table;",
            "D": "Select expression AVG( ) from table;"
          },
          "correct_answer": "A",
          "explanation": "The AVG function in SQL is used to return the average of an expression in a SELECT statement. The syntax for the AVG function in SQL is:\nSELECT AVG(expression) FROM TABLE;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 214,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "How many arguments does AVG and SUM have?",
          "options": {
            "A": "Only one",
            "B": "Specified by user",
            "C": "Two",
            "D": "Three"
          },
          "correct_answer": "A",
          "explanation": "SUM and AVG are aggregate functions which calculate sum and average of specified numeric field columns. They have only one argument.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 215,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "AVG and SUM functions returns average and sum of numeric fields only.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "AVG and SUM functions returns average and sum respectively of numeric fields only. If character fields are passed as arguments for those functions, query displays error.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 216,
          "topic": "SQL Avg & Sum Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used throughout GROUP BY assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "AVG and SUM can be used with which of the following clause(s)?",
          "options": {
            "A": "Select, Group By",
            "B": "Order By, Group By",
            "C": "Having, Order By",
            "D": "Update, Having"
          },
          "correct_answer": "A",
          "explanation": "AVG and SUM functions can be used with select, Group by, having and distinct clauses. Order By cannot be used with these functions.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-avg-sum-functions/"
        },
        {
          "id": 217,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "Which of the following operator is used to retrieve values within a given range?",
          "options": {
            "A": "In",
            "B": "Like",
            "C": "Between",
            "D": "Range"
          },
          "correct_answer": "C",
          "explanation": "BETWEEN operator allows us to easily test if an expression is within a range of values. This operator allows us to select only those rows that are within a specific range.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 218,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "BETWEEN operator in SQL _____",
          "options": {
            "A": "Excludes starting and ending values",
            "B": "Includes starting value excludes ending value",
            "C": "Excludes starting value includes ending value",
            "D": "Includes starting and ending values"
          },
          "correct_answer": "D",
          "explanation": "The BETWEEN operator selects values within a given range. This operator is inclusive, i.e. it includes both begin and end values of given range.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 219,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "Which of the following operator has to be paired with BETWEEN in SQL?",
          "options": {
            "A": "Or",
            "B": "And",
            "C": "With",
            "D": "In"
          },
          "correct_answer": "B",
          "explanation": "BETWEEN has to be paired with the AND operator in SQL to retrieve values that fall in a given specific range. Other than AND, no operator can be used with BETWEEN.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 220,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "SQL BETWEEN operator is used with which of the following clause(s)?",
          "options": {
            "A": "Select",
            "B": "Where",
            "C": "Insert",
            "D": "Update"
          },
          "correct_answer": "B",
          "explanation": "BETWEEN has to be paired with AND operator. It is always used in WHERE clause. It cannot be used with any other clauses in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 221,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "BETWEEN operator can be used as a shorthand for which of the following operations?",
          "options": {
            "A": ">= AND <=",
            "B": "> AND <",
            "C": ">= OR <=",
            "D": "> OR <"
          },
          "correct_answer": "A",
          "explanation": "BETWEEN is a logical operator which is used to return values that fall within a given range. This operator is inclusive, i.e. it includes both starting and ending values. It can be used as a shorthand for >= AND <=.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 222,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "NOT BETWEEN is not a valid operator in SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "NOT BETWEEN is a valid operator in SQL. We can use the NOT BETWEEN operator to exclude a specific range of values from a database table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 223,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "Which of the following is a correct syntax for using BETWEEN operator?",
          "options": {
            "A": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name BETWEEN value1, value2;",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name BETWEEN value1 AND value2;",
            "C": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name BETWEEN value1 OR value2;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name BETWEEN value1 AND value2 AND value3;"
          },
          "correct_answer": "B",
          "explanation": "AND operator must be used with BETWEEN operator in SQL. No other comparison or logical operators can be used with BETWEEN. Range between any two values can be given at a time.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 224,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "Consider the following query:\nSELECT column_list\nFROM TABLE_NAME\nWHERE column_name BETWEEN max_value AND min_value;\nThis query returns which of the following records?",
          "options": {
            "A": "No records",
            "B": "Those records whose column_name values are >=min_value and <=max_value",
            "C": "Those records whose column_name values are >min_value and <max_value",
            "D": "Those records whose column_name values are >=min_value or <=max_value"
          },
          "correct_answer": "A",
          "explanation": "BETWEEN a AND b in SQL implies the values which are >=a and <=b. In the given query a is max_value and b is min_value. So it has to return those records whose value is >=max_value and <=min_value, which is impossible. So, the query doesn’t return any records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 225,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "DATE values cannot be used with BETWEEN operators.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Numeric, text and date values can be used with BETWEEN operators in SQL. Using date fields with BETWEEN is similar to those of numeric and text field values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 226,
          "topic": "SQL Between Operator",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Range filtering appears repeatedly in faculty assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5",
          "warning": null,
          "question": "Which of the following operator is used to exclude those records whose values fall in a given specific range of values?",
          "options": {
            "A": "Between",
            "B": "Not between",
            "C": "Not in",
            "D": "In"
          },
          "correct_answer": "B",
          "explanation": "NOT BETWEEN is used to exclude the records whose values fall in a given specific range. In is used to specify multiple values in a WHERE clause. Not in is used to retrieve those records whose values are not in the specified list.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-between-operator/"
        },
        {
          "id": 227,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "Which of the following correctly defines a stored procedure in SQL?",
          "options": {
            "A": "A prepared SQL code which cannot be saved",
            "B": "A code that cannot be reused again",
            "C": "A code that can be saved and reused over and over again",
            "D": "A code that can be stored but cannot be reused"
          },
          "correct_answer": "C",
          "explanation": "A stored procedure is a prepared SQL code that can be saved, so that the code can be reused over and over again.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 228,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "If we have an SQL query that we write over and over again, which of the following is a better idea to make it less complex?",
          "options": {
            "A": "Use logical operators",
            "B": "Save it as a stored procedure",
            "C": "Write the query as many number of times as we want to execute",
            "D": "simplify it by using loops"
          },
          "correct_answer": "B",
          "explanation": "If we have an SQL query that we write over and over again we can save it as a stored procedure and then just call it to execute the query to make the program less complex.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 229,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "We cannot pass parameters to a stored procedure.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "We can pass parameters to a stored procedure, so that the stored procedure executes based on the parameter value that is passed.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 230,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "What is the syntax to create a stored procedure?",
          "options": {
            "A": "CREATE PROCEDURE procedure_name\nAS\nSql_statements\nGO;",
            "B": "👉 Apply Now for Free C Certification - November 2026\nCREATE PROCEDURE\nAS\nSql_statements\nGO;",
            "C": "CREATE PROCEDURE procedure_name\nSql_statements\nGO;",
            "D": "CREATE PROCEDURE procedure_name\nAS\nSql_statements;"
          },
          "correct_answer": "A",
          "explanation": "The correct syntax for a stored procedure is:\nCREATE PROCEDURE procedure_name\nAS\nSql_statements\nGO;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 231,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "Which of the following statement(s) is used to execute a stored procedure?",
          "options": {
            "A": "EXECUTE procedure_name;",
            "B": "EXE procedure_name;",
            "C": "EXEC procedure_name;",
            "D": "EXE PROCEDURE procedure_name;"
          },
          "correct_answer": "C",
          "explanation": "The syntax to execute a stored procedure is:\nEXEC procedure_name;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 232,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "A stored procedure is able to call another stored procedure.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A stored procedure can be called from any other stored procedure, just as we execute a stored procedure in a separate SQL query.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 233,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "How many parameters can be passed to a stored procedure in SQL?",
          "options": {
            "A": "Only one",
            "B": "Two",
            "C": "Three",
            "D": "Any number"
          },
          "correct_answer": "D",
          "explanation": "We can pass any number of parameters to a stored procedure. It may have zero parameters when the user doesn’t require passing any parameters to the procedure.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 234,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "Where the stored procedures are stored in a database?",
          "options": {
            "A": "Database data dictionary",
            "B": "Database meta data",
            "C": "Database server",
            "D": "SQL server"
          },
          "correct_answer": "A",
          "explanation": "Stored Procedure can be available to applications accessing a relational database system. They are actually stored in the database data dictionary.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 235,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "Which of the following statements creates a stored procedure ‘MONEY’ with a parameter ‘note’?",
          "options": {
            "A": "CREATE PROCEDURE money\nAS\nSql_statements\nGO;",
            "B": "CREATE PROCEDURE money note varchar2(10)\nAS\nSql_statements\nGO;",
            "C": "CREATE PROCEDURE money @note varchar2(10)\nAS\nSql_statements\nGO;",
            "D": "CREATE money @note varchar2(10)\nAS\nSql_statements\nGO;"
          },
          "correct_answer": "C",
          "explanation": "Any parameter added to a stored procedure must be preceded with @ symbol and must end with the data type of the parameter.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 236,
          "topic": "SQL Comments",
          "category": "SELECTIVE",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Mislabelled topic: these questions are about stored procedures, not comments. Procedure creation/calling/parameters are taught and assigned.",
          "faculty_alignment": "Day 7 procedures; Assignment 8",
          "warning": "SQL Comments contains stored-procedure questions — do not discard blindly.",
          "question": "How many SQL statements can be written in a stored procedure?",
          "options": {
            "A": "One",
            "B": "Two",
            "C": "Three",
            "D": "Any number"
          },
          "correct_answer": "D",
          "explanation": "We can use multiple select statements in a stored procedure SQL server. So, any number of SQL statements can be written in a stored procedure.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-comments/"
        },
        {
          "id": 237,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "SQL constraints are rules used to limit the type of data that is entered in a table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "SQL constraints are the rules which are used to limit the type of data that is entered in a table. They are used to maintain the integrity and accuracy of the data present inside the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 238,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "How many types of constraints are present in SQL?",
          "options": {
            "A": "4",
            "B": "5",
            "C": "7",
            "D": "6"
          },
          "correct_answer": "C",
          "explanation": "In SQL, there are 7 types of constraints – UNIQUE, NOT NULL, CHECK, PRIMARY KEY, FOREIGN KEY, DEFAULT and INDEX.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 239,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, constraints can be divided into which of the following level?",
          "options": {
            "A": "Database level",
            "B": "Row level",
            "C": "Table level",
            "D": "Data level"
          },
          "correct_answer": "C",
          "explanation": "In SQL, constraints can be divided into two types – Table level and Column level. The table level constraints are used to limit whole table data and the column level constraints are used to limit the column data.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 240,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following is a constraint in SQL?",
          "options": {
            "A": "Candidate Key",
            "B": "Foreign Key",
            "C": "Alternate Key",
            "D": "Super Key"
          },
          "correct_answer": "B",
          "explanation": "In SQL, Foreign key is a constraint used to join two different tables. It is used to restrict those actions or data which would destroy the link between the two tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 241,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following statement can be used to apply column level constraints to a table in SQL?",
          "options": {
            "A": "🎓 Register Today for Free C++ Certification - November 2026\nCREATE TABLE TABLE_NAME(\ncolumn1 data_type(SIZE) CONSTRAINT,\ncolumn2 data_type(SIZE) CONSTRAINT,\n...\ncolumnn data_type(SIZE) CONSTRAINT);",
            "B": "CREATE TABLE TABLE_NAME(\nCONSTRAINT column1 data_type(SIZE),\nCONSTRAINT column2 data_type(SIZE),\n...\nCONSTRAINT columnn data_type(SIZE));",
            "C": "CREATE TABLE TABLE_NAME (\ncolumn1 data_type(SIZE),\ncolumn2 data_type(SIZE),\n...\ncolumnn data_type(SIZE),\nCONSTRAINT (column1,column2…columnn));",
            "D": "CREATE TABLE TABLE_NAME(\ncolumn1 data_type(SIZE),\ncolumn2 data_type(SIZE),\n...\ncolumnn data_type(SIZE));"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the syntax used to apply column level constraint to a table is –\nCREATE TABLE TABLE_NAME(\ncolumn1 data_type(SIZE) CONSTRAINT,\ncolumn2 data_type(SIZE) CONSTRAINT,\n...\ncolumnn data_type(SIZE) CONSTRAINT);\nThe constraint which is to be applied at the column is placed after the datatype used by the column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 242,
          "topic": "SQL Constraints",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "Schema design and constraints are explicit in syllabus and Assignment 6.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, which of the following constraint cannot be applied at the table level?",
          "options": {
            "A": "UNIQUE",
            "B": "PRIMARY KEY",
            "C": "CHECK",
            "D": "NOT NULL"
          },
          "correct_answer": "D",
          "explanation": "In SQL, the NOT NULL constraint cannot be applied at the table level. Constraints that can be applied at the table level are – UNIQUE, PRIMARY KEY, CHECK and FOREIGN KEY. The NOT NULL and DEFAULT constraints can be applied at the column level.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-constraints/"
        },
        {
          "id": 243,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which function is used to get the number of rows that matches specified criteria?",
          "options": {
            "A": "Number( )",
            "B": "Count( )",
            "C": "Total( )",
            "D": "Calculate( )"
          },
          "correct_answer": "B",
          "explanation": "COUNT( ) is an aggregate function. This function returns the number of rows in a table satisfying the criteria specified in the WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 244,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "The SQL COUNT function is used to count the number of rows returned in which of the following statement?",
          "options": {
            "A": "Select",
            "B": "Where",
            "C": "Update",
            "D": "Delete"
          },
          "correct_answer": "A",
          "explanation": "The SQL COUNT function is used to count the number of records, which are returned by a SELECT statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 245,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following queries returns the number of records in a table named hospital?",
          "options": {
            "A": "Select * count( ) From hospital;",
            "B": "Select count(1) From hospital;",
            "C": "Select count( ) 1 From hospital;",
            "D": "Select count( ) all From hospital;"
          },
          "correct_answer": "B",
          "explanation": "SELECT COUNT(column_name) FROM TABLE_NAME;\nThis is the basic syntax using COUNT( ) function. To count all the records * is used in place of column_name. COUNT(1) has the same effect as COUNT(*).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 246,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "SELECT COUNT(*) returns  the total of all records returned in the result set ______",
          "options": {
            "A": "Excluding the tuples with all NULL values",
            "B": "Regardless of tuples with all NULL values",
            "C": "Excluding the tuples with more than one NULL value",
            "D": "Excluding the tuples with no NULL values"
          },
          "correct_answer": "B",
          "explanation": "The COUNT function returns the total number of rows returned in a result set. Using SELECT COUNT(*) or SELECT COUNT(1) will return the total of all records returned in the result set regardless of NULL values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 247,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Using SELECT COUNT(column_name), we can count the number of non-NULL items in the specified column. (column_name is not *)",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "SELECT COUNT(*) returns total number of records in the result set regardless of NULL values, whereas SELECT COUNT(column_name) returns number of non-NULL items in the specified column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 248,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "It is not possible to have any other columns in addition to COUNT function when it is used in SELECT statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "It is possible to have one or more columns in addition to the COUNT function in the SELECT statement. But these columns need to be a part of GROUP BY clause also.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 249,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "If any other columns are written along with COUNT in a SELECT statement, then _____",
          "options": {
            "A": "Those columns need to be a part of having clause",
            "B": "Those columns need to be a part of where clause",
            "C": "Those columns need to be a part of group by clause",
            "D": "Those columns need not to be a part of any other clauses"
          },
          "correct_answer": "C",
          "explanation": "If any other columns are written along with COUNT function in a SELECT statement, these columns need to be part of the GROUP BY clause as well. Otherwise the query results in wrong outputs.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 250,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following clauses when used with COUNT function calculates the number of unique values of a specified column?",
          "options": {
            "A": "Unique",
            "B": "Different",
            "C": "Specific",
            "D": "Distinct"
          },
          "correct_answer": "D",
          "explanation": "COUNT is combined with DISTINCT to calculate the number of unique values. Even if DISTINCT treats NULL as unique value, COUNT function doesn’t count those NULL values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 251,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "SQL COUNT( ) function with DISTINCT clause _________ the repetitive appearance of the same data.",
          "options": {
            "A": "Modifies",
            "B": "Eliminates",
            "C": "Counts",
            "D": "Updates"
          },
          "correct_answer": "B",
          "explanation": "SQL COUNT( ) function with DISTINCT clause eliminates the repeated data and counts the number of distinct values of the specified column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 252,
          "topic": "SQL Count Function",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING / SQL Constructs",
          "reason": "COUNT is a core aggregate and appears in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "With which of the following clause(s), COUNT( ) function cannot be used?",
          "options": {
            "A": "Having",
            "B": "Distinct",
            "C": "Group By",
            "D": "Order By"
          },
          "correct_answer": "D",
          "explanation": "COUNT( ) function when combined with DISTINCT calculates the number of unique values. HAVING and GROUP BY clauses can also be used with COUNT function depending on the conditions, whereas order by cannot use any function or clause other than ASC and DESC.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-count-function/"
        },
        {
          "id": 253,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following command is used to create a table in SQL?",
          "options": {
            "A": "CREATE",
            "B": "MAKE",
            "C": "DEVELOP",
            "D": "INSERT"
          },
          "correct_answer": "A",
          "explanation": "The CREATE command is used to create a table in SQL. The same command can be used to create a database containing the table. The INSERT command is used to insert data inside the tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 254,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, the CREATE command can be put under which of the following category?",
          "options": {
            "A": "DDL (Data Definition Language)",
            "B": "DML (Data Manipulation Language)",
            "C": "DCL (Data Control Language)",
            "D": "TCL (Transaction Control Language)"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the CREATE command comes under the category of DDL (Data Definition Language) which is used to define the structure of the table. DML (Data Manipulation Language) is used to manipulate the data inside the table. DCL (Data Control Language) is used by the database administrator to configure security access to relational databases. TCL (Transaction Control Language) is used to commit or rollback the changes made by DML commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 255,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Consider the following syntax and tell whether it is the correct way to create a table in SQL or not.\nCREATE TABLE TABLE_NAME\ncolumn1 datatype CONSTRAINT\ncolumn2 datatype CONSTRAINT\ncolumn3 datatype CONSTRAINT\n.\n.\n.\ncolumnn datatype CONSTRAINT",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The syntax for creating a table in SQL always contains an opening bracket before the first column name and a closing bracket and a semicolon at the end of the statement. For example –\n\n\n    ⚡ Hurry! Secure Your Free Cyber Security Certification - November 2026\n\n\n\nCREATE TABLE TABLE_NAME\n(column1 datatype CONSTRAINT\ncolumn2 datatype CONSTRAINT\ncolumn3 datatype CONSTRAINT\n.\n.\n.\ncolumnn datatype CONSTRAINT);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 256,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "It is necessary to specify a constraint for each column.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "It is not necessary to specify a constraint for each column. Constraints are used to add some conditions to a column that restricts the column to remain true while inserting or updating or deleting data in that column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 257,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following constraint are not present in SQL?",
          "options": {
            "A": "UNIQUE",
            "B": "NOT NULL",
            "C": "PRIMARY KEY",
            "D": "CANDIDATE KEY"
          },
          "correct_answer": "D",
          "explanation": "CANDIDATE KEY is not present as a constraint in SQL. A Candidate key is the set of columns that can become the Primary Key. The column having the UNIQUE constraint cannot have any duplicate value. The column having the NOT NULL constraint cannot have any null value. The PRIMARY KEY constraint is a combination of UNIQUE and NOT NULL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 258,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following is not a valid datatype in SQL?",
          "options": {
            "A": "INT",
            "B": "NUMBER",
            "C": "VARCHAR",
            "D": "DATE"
          },
          "correct_answer": "B",
          "explanation": "NUMBER is not a valid datatype in SQL. INT, VARCHAR and DATE are used in SQL to receive an integer, string and date from the user respectively.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 259,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, a column having the UNIQUE constraint can have two null values.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The UNIQUE constraint is used in a column to restrain it from having similar values. Since, in SQL null means void, it can point towards anything and hence no two null values can be similar.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 260,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "According to the following SQL statement, which of the column is specified as the primary key?\nCREATE TABLE STUDENTS\n(ID INT PRIMARY KEY,\nNAME VARCHAR (15) NOT NULL,\nAGE INTNOT NULL,\nADDRESS CHAR (25));",
          "options": {
            "A": "ID",
            "B": "NAME",
            "C": "AGE",
            "D": "ADDRESS"
          },
          "correct_answer": "A",
          "explanation": "ID is the column that is specified as the primary key in the given statement. PRIMARY KEY is used to uniquely identify each record in the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 261,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "How many columns will be created when the following SQL statement will get executed?\nCREATE TABLE Employee\n(Eid INT,\nFName VARCHAR (50),\nLName VARCHAR (50),\nEmail VARCHAR (50),\nAddress VARCHAR (50),\nCity VARCHAR (50));",
          "options": {
            "A": "4",
            "B": "5",
            "C": "6",
            "D": "3"
          },
          "correct_answer": "C",
          "explanation": "The given SQL statement will produce a table having 6 columns – Eid, FName, LName, Email, Address and City.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 262,
          "topic": "SQL Create Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands / Designing Database Schema",
          "reason": "CREATE TABLE is explicit DDL and repeatedly assigned.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following SQL statement is used to create a table by copying only the selected columns from another table?",
          "options": {
            "A": "CREATE TABLE new_tablename AS (\nSELECT * FROM old_tablename WHERE condition);",
            "B": "CREATE TABLE new_tablename AS (\nSELECT Column1, Column2...Columnn\nFROM old_tablename);",
            "C": "CREATE TABLE new_tablename AS (\nSELECT Column1, Column2...ColumnN\nFROM old_tablename1, old_tablename2...old_tablenamen);",
            "D": "CREATE TABLE TABLE_NAME\n(column1 datatype CONSTRAINT\ncolumn2 datatype CONSTRAINT\ncolumn3 datatype CONSTRAINT\n...\ncolumnn datatype CONSTRAINT);"
          },
          "correct_answer": "B",
          "explanation": "CREATE TABLE new_tablename AS (\nSELECT Column1, Column2...Columnn\nFROM old_tablename);\n is used to create a table by copying only the selected columns from another table.\nCREATE TABLE new_tablename AS (\nSELECT * FROM old_tablename WHERE condition);\n is used to create a table by copying all the columns from another table.\nCREATE TABLE new_tablename AS (\nSELECT Column1, Column2...ColumnN\nFROM old_tablename1, old_tablename2...old_tablenamen);\n is used to create a table by copying selected columns from multiple tables.\nCREATE TABLE TABLE_NAME\n(Column1 datatype CONSTRAINT\nColumn2 datatype CONSTRAINT\nColumn3 datatype CONSTRAINT\n...\nColumnn datatype CONSTRAINT);\n is the normal way to create a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-create-table/"
        },
        {
          "id": 263,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "What is the maximum value that can be stored in the datatype DECIMAL (5,2)?",
          "options": {
            "A": "9999999",
            "B": "99.99999",
            "C": "999.99",
            "D": "99999.99"
          },
          "correct_answer": "C",
          "explanation": "In SQL, DECIMAL is a datatype that is used to store decimal values. In above question DECIMAL (5,2) means it can store a value having total 5 digits including 2 digits after decimal.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 264,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following command can be used to create a user defined datatype in SQL?",
          "options": {
            "A": "CREATE DATA",
            "B": "CREATE TYPE",
            "C": "CREATE DATATYPE",
            "D": "CREATE DATA TYPE"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the CREATE TYPE command can be used to create new user defined datatypes. It can be used as –\nCREATE TYPE Currency AS DECIMAL (8,4);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 265,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following datatype is used to display a combination of date and time information?",
          "options": {
            "A": "DATETIME",
            "B": "DATE",
            "C": "TIME",
            "D": "TIMESTAMP"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the DATETIME datatype is used to display a combination of both date and time. It displays the value in YYYY-MM-DD hh:mm:ss format.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 266,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, which of the following datatypes has a maximum length of 255 characters?",
          "options": {
            "A": "TEXT",
            "B": "TINYTEXT",
            "C": "SMALLTEXT",
            "D": "CHAR"
          },
          "correct_answer": "B",
          "explanation": "A TINYTEXT column has a maximum length of 255 characters. Each TINYTEXT value is stored using a one-byte length prefix that indicates the number of bytes in the value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 267,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "In SQL, if a value is entered in CHAR datatype which does not occupy all the length spaces then the remaining spaces will be occupied with blank spaces.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "If a value is entered in the CHAR datatype which does not takes up the whole space then instead of changing the space of the datatype or removing the left space, they are filled by blank spaces.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 268,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following datatype is used for storing a maximum of one element from a predefined list consisting a maximum of 65535 elements?",
          "options": {
            "A": "STORE",
            "B": "LIST",
            "C": "SET",
            "D": "ENUM"
          },
          "correct_answer": "D",
          "explanation": "Enum is used for compact data storage where the column may have a limited specified value. Here, the string values are automatically used as a numeric index. It can accept many datatypes like int, char, string etc.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 269,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "What is the default size of n in a column that has the datatype VARCHAR(n)?",
          "options": {
            "A": "0",
            "B": "NULL",
            "C": "1",
            "D": "Size of value entered"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the VARCHAR datatype is used to accept character values. Here, n issued to specify the size of the element that has the datatype VARCHAR. If any value is not specified then by default n is taken as 1.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 270,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following will be the most suitable data type for the given column?\nCOLUMN Name: Id, Description: Nine-digit roll NUMBER starting WITH R, Example: R100218066",
          "options": {
            "A": "Integer",
            "B": "VARCHAR2(10)",
            "C": "CHAR (10)",
            "D": "Number (10)"
          },
          "correct_answer": "B",
          "explanation": "The datatype VARCHAR2(10) will be the most suitable for the given column. VARCHAR is used because the ID is a combination of both numbers and letters. 10 specifies the maximum length of the ID that can be stored.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 271,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following will be the most suitable datatype for the given column?\nCOLUMN Name: Student_Photo, Description: Image OF every student",
          "options": {
            "A": "CLOB",
            "B": "VARCHAR",
            "C": "BLOB",
            "D": "PICTURE"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the BLOB datatype is used to binary large object that can hold a variable amount of data. It can also be used to hold pictures.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 272,
          "topic": "SQL Data Types",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "DDL Commands / Designing Database Schema / data types",
          "reason": "Data types are part of table design and assignments.",
          "faculty_alignment": "Assignment 6; Day 6 notes",
          "warning": null,
          "question": "Which of the following will be the most suitable datatype for the given column?\nCOLUMN Name: Contact_Number, Description: Telephone NUMBER OF every student",
          "options": {
            "A": "NUMBER (10)",
            "B": "VARCHAR (10)",
            "C": "DECIMAL (10)",
            "D": "INTEGER"
          },
          "correct_answer": "A",
          "explanation": "The datatype NUMBER (10) will be the most suitable for the given column. NUMBER is used because the contact number only contain numbers. 10 specifies the maximum length of the contact that can be stored.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-data-types/"
        },
        {
          "id": 273,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "Which of the following does a database comprise of?",
          "options": {
            "A": "Collection of rows",
            "B": "Collection of tables",
            "C": "Collection of columns",
            "D": "Collection of data"
          },
          "correct_answer": "B",
          "explanation": "A database is a collection of tables. A database contains more than one table that are linked directly or indirectly. A table can be termed as a collection of rows or columns containing useful information or data.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 274,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "Which of the following command is used to create a database in SQL?",
          "options": {
            "A": "CREATE",
            "B": "MAKE",
            "C": "DEVELOP",
            "D": "INSERT"
          },
          "correct_answer": "A",
          "explanation": "The CREATE command is used to create a database in SQL. The same command can be used to create a table within the database. The INSERT command is used to insert data inside the tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 275,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "Which of the following syntax correctly represents the method to create a database in SQL?",
          "options": {
            "A": "Create Database",
            "B": "Create Database_name",
            "C": "Create Database Database_name",
            "D": "Create Database (Database_name)"
          },
          "correct_answer": "C",
          "explanation": "The Syntax of creating a database in SQL is similar to the syntax of creating a table. Create command is used first, followed by the Database keyword and then the name of the database without any symbols in between.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 276,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "Which of the following statement can be used to list all the databases in the SQL server?",
          "options": {
            "A": "Select name from master.sys.databases order by name",
            "B": "Select name from master.sys order by name",
            "C": "Select name from sys.databases order by name",
            "D": "Select name from master.databases order by name"
          },
          "correct_answer": "A",
          "explanation": "The databases present in the SQL server can be listed using the statement –  Select name from master.sys.databases order by name. Here, master.sys.databases means that the owner of the databases is calling all the databases in his system and order by clause is used to order the names according to the specified condition.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 277,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "Which of the following command let us instruct the SQL server to check the existence of a database with a similar name before creating a database?",
          "options": {
            "A": "IF EXISTS",
            "B": "NOT EXISTS",
            "C": "IF NOT EXISTS",
            "D": "EXISTS"
          },
          "correct_answer": "C",
          "explanation": "IF NOT EXISTS command helps us instruct the SQL server to check the existence of a database with a similar name before creating a database. It is helpful if you are working on a server that can be accessed by multiple people because there is a probability that there might be a database with a similar name that has been created by another person.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 278,
          "topic": "SQL Database",
          "category": "SELECTIVE",
          "syllabus_topic": "1. DBMS Fundamentals",
          "syllabus_detail": "Database Concepts / DDL Commands",
          "reason": "Database creation/basic concepts align with DBMS fundamentals and DDL; broad trivia is lower priority.",
          "faculty_alignment": "DBMS syllabus Session 1; Day 6 DDL",
          "warning": null,
          "question": "The “AS COPY OF” command is used to create a database as a copy of another source database.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The “AS COPY OF” command is used to create a database as a copy of another source database. It can be used as follows –\nCREATE DATABASE database_name AS COPY OF source_database_name",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-database/"
        },
        {
          "id": 279,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "What will the output of the following statement?\nSELECT DATE_ADD('1998-01-02', INTERVAL 31 DAY);",
          "options": {
            "A": "1998 Feb 02",
            "B": "02 Feb 1998",
            "C": "1998-02-02",
            "D": "02-02-1998"
          },
          "correct_answer": "C",
          "explanation": "The DATE_ADD function is a synonym of ADDDATE function and it is used to add a time period to a specified date. The date is given in the YYYY-MM-DD format.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 280,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "What will be the output of the following statement?\nSELECT ADDTIME('1998-12-30 23:59:59.999998','1 1:1:1.000002');",
          "options": {
            "A": "1999-01-01 01:01:01.000000",
            "B": "1999-01-02 01:01:01.000000",
            "C": "1998-12-3024:00:00.999999",
            "D": "01:01:01.0000001999-01-01"
          },
          "correct_answer": "A",
          "explanation": "The ADDTIME function is used to add a time period to a specified date and period. It returns both, the date and the time where date is followed by time. When we add 1 1:1:1.000002 to 1998-12-30 23:59:59.999998 we will get 1999-01-01 01:01:01.000000.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 281,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "Which of the following function is used to return the current date of our system?",
          "options": {
            "A": "CUR_DATE()",
            "B": "DATE()",
            "C": "CURRENTDATE()",
            "D": "CURDATE()"
          },
          "correct_answer": "D",
          "explanation": "The CURDATE() function is used to return the current date that is displayed by our system. It returns the date in the YYYY-MM-DD format. The CURRENT_DATE() function is a synonym of the CURDATE() function and can be used interchangeably.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 282,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "Which of the following function is used to return the current time of our system?",
          "options": {
            "A": "CUR_TIME()",
            "B": "CURTIME()",
            "C": "CURRENTTIME()",
            "D": "TIME()"
          },
          "correct_answer": "B",
          "explanation": "The CURTIME() function is used to return the current time that is displayed by our system. It returns the time in the HH:MM:SS format. The CURRENT_TIME() function is a synonym of the CURTIME() function and can be used interchangeably.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 283,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "What will be the output of the following statement?\nSELECT DATEDIFF('2020-11-30 23:59:59','2020-11-29');",
          "options": {
            "A": "-1",
            "B": "0",
            "C": "1",
            "D": "00:00:01"
          },
          "correct_answer": "C",
          "explanation": "The DATEDIFF() function is used to compute the difference between the two given dates. It returns the result in days and only the date part of the entered values is considered in the computation of the result.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 284,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "The %c format string in the DATE_FORMAT() function is used to specify which of the following format?",
          "options": {
            "A": "Weekday name (Sun, Mon, …)",
            "B": "Month name (Jan, Feb, …)",
            "C": "Month number (0, 1, …)",
            "D": "Day of the month (00, 01, …)"
          },
          "correct_answer": "C",
          "explanation": "The %c format string in the DATE_FORMAT() function is used to specify the Month number format which is given by 0 for January, 1 for February and so on.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 285,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "Which of the following function is used to get the weekday index value for a specified date?",
          "options": {
            "A": "DAYNAME()",
            "B": "DAYOFWEEK()",
            "C": "DAYOFMONTH()",
            "D": "DAYOFYEAR()"
          },
          "correct_answer": "B",
          "explanation": "The DAYOFWEEK() function is used to get the weekday index value (1 = Sunday, 2 = Monday, … , 7 = Saturday). for a specified date. The DAYNAME() function is used to return the name of the weekday for the given date. The DAYOFMONTH() & DAYOFYEAR() functions are used to return the day of month (0 to 31) and the day of year (1 to 366) respectively for the given date.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 286,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "The NOW() function is used to return the current date and time in which of the following format?",
          "options": {
            "A": "HH:MM:SS DD-MM-YYYY",
            "B": "DD-MM-YYYY HH:MM:SS",
            "C": "HH:MM:SSYYYY-MM-DD",
            "D": "YYYY-MM-DD HH:MM:SS"
          },
          "correct_answer": "D",
          "explanation": "The NOW() function is used to return the current date and time in the YYYY-MM-DD HH:MM:SS format. The YYYYMMDDHHMMSS format can also be accepted based on whether the function is used in numeric or string context.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 287,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "What will be the output of the following statement?\nSELECT QUARTER('2020-05-07');",
          "options": {
            "A": "1",
            "B": "2",
            "C": "3",
            "D": "4"
          },
          "correct_answer": "B",
          "explanation": "The QUARTER function is used to return the number of the quarter in which the specified date would belong. The output range of the function is 1-4 as there are 4 quarters in a year.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 288,
          "topic": "SQL Dates",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / data types",
          "reason": "Date/time functions are covered in class notes and a dedicated faculty assignment.",
          "faculty_alignment": "Assignment 3; Assignment 1; Day 3 functions",
          "warning": null,
          "question": "Which of the following function is used to convert the given time into seconds?",
          "options": {
            "A": "TIME_TO_SEC()",
            "B": "SEC()",
            "C": "TO_SEC()",
            "D": "TIMETOSEC()"
          },
          "correct_answer": "A",
          "explanation": "The function that is used to convert the given time into seconds is TIME_TO_SEC(). Ex –\nTIME_TO_SEC(’22:23:00’);\nOutput – 80580",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-dates/"
        },
        {
          "id": 289,
          "topic": "SQL Default Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following constraint is used to provide a default value to a column in SQL?",
          "options": {
            "A": "CHECK",
            "B": "DEFAULT",
            "C": "NOT NULL",
            "D": "PRIMARY KEY"
          },
          "correct_answer": "B",
          "explanation": "The DEFAULT constraint is used to provide a default value to a column in SQL. It works when the user does not enter any value to the column on which the DEFAULT constraint is applied. The CHECK constraint is used to check the value entered in a table on the basis of a specified condition. The NOT NULL constraint is used to ensure that the data present in a column of a table is not empty. The PRIMARY KEY constraint is used to uniquely identify any value in a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-default-constraint/"
        },
        {
          "id": 290,
          "topic": "SQL Default Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement is used to apply the DEAFULT constraint to a column in SQL?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME DEFAULT (\ncolumn1 datatype VALUE,\ncolumn2 datatype VALUE,\n...\ncolumnn datatype VALUE);",
            "B": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype,\ncolumn2 datatype,\n...\ncolumnn datatype\nDEFAULT (column1, column2,… columnn) VALUE);",
            "C": "CREATE TABLE TABLE_NAME (\nDEFAULT column1 datatype VALUE,\nDEFAULT column2 datatype VALUE,\n...\nDEFAULT columnn datatype VALUE);",
            "D": "👉 Apply Now for Free C Certification - November 2026\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype DEFAULT VALUE,\ncolumn2 datatype DEFAULT VALUE,\n...\ncolumnn datatype DEAFULT VALUE);"
          },
          "correct_answer": "D",
          "explanation": "In SQL, the statement that can be used to apply the DEFAULT constraint to a column is\n\n\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype DEFAULT VALUE,\ncolumn2 datatype DEFAULT VALUE,\n...\ncolumnn datatype DEAFULT VALUE);\nThe DEFALUT constraint is followed by the value that has to be assigned to the column if it is left empty by the user.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-default-constraint/"
        },
        {
          "id": 291,
          "topic": "SQL Default Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to apply the DEFAULT constraint on a column in an existing table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nALTER column_name SET DEFAULT VALUE;",
            "B": "ALTER TABLE TABLE_NAME\nALTER column_name DEFAULT VALUE;",
            "C": "ALTER TABLE TABLE_NAME\ncolumn_name SET DEFAULT VALUE;",
            "D": "ALTER TABLE TABLE_NAME\nCHANGE column_name SET DEFAULT VALUE;"
          },
          "correct_answer": "A",
          "explanation": "The statement that can be used to apply the DEFAULT constraint on a column in an existing table –\nALTER TABLE TABLE_NAME\nALTER column_name SET DEFAULT VALUE;\nThe ALTER command is used with the ALTER and the DEFAULT keyword to apply the DEFAULT constraint. Here, the column name and the value have to be specified along with the previously stated keywords.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-default-constraint/"
        },
        {
          "id": 292,
          "topic": "SQL Default Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement is used to delete the DEFAULT constraint from a column in an existing column?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nALTER DELETE DEFAULT;",
            "B": "ALTER TABLE TABLE_NAME\nALTER DROP DEFAULT;",
            "C": "ALTER TABLE TABLE_NAME\nALTER City DROP DEFAULT;",
            "D": "ALTER TABLE TABLE_NAME\nALTER City DELETE DEFAULT;"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to delete the DEFAULT constraint from a column in an existing column is –\nALTER TABLE TABLE_NAME\nALTER City DROP DEFAULT;\nThe ALTER command is used with the ALTER and the DROP keyword to delete the constraint.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-default-constraint/"
        },
        {
          "id": 293,
          "topic": "SQL Default Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "DEFAULT constraint is directly used in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, the DEFAULT constraint can also be applied as a table level constraint.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the DEFAULT constraint cannot be applied as a table level constraint as every column contains different types of values with different datatypes and only one default cannot be applied to all of them.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-default-constraint/"
        },
        {
          "id": 294,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "Which clause is used to delete existing records of a table?",
          "options": {
            "A": "Delete",
            "B": "Drop",
            "C": "Remove",
            "D": "Clear"
          },
          "correct_answer": "A",
          "explanation": "Using delete clause, all the existing records of a table can be deleted. Specific records can be deleted from a table by using WHERE clause in DELETE statement. If WHERE is omitted, all the records of table will be deleted.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 295,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "Which of the following clause is used in delete statement to remove only specific records of a table?",
          "options": {
            "A": "Specify",
            "B": "Delete",
            "C": "Where",
            "D": "Remove"
          },
          "correct_answer": "C",
          "explanation": "The DELETE Statement in SQL is used to delete one or more records from a table. Single as well as multiple records can be deleted from a table depending on whether WHERE clause is used or not. WHERE clause is used to delete only specific records based on given conditions.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 296,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "Which of the following is a correct syntax for delete statement?",
          "options": {
            "A": "Delete From table_name Where condition(s);",
            "B": "Delete table_name;",
            "C": "Delete Table table_name;",
            "D": "Delete From table table_name;"
          },
          "correct_answer": "A",
          "explanation": "DELETE FROM TABLE_NAME WHERE condition(s);\nThis is the correct syntax to remove one or more records from a table based on the conditions provided in WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 297,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "Which of the following clause is omitted from a delete statement to remove all the records of a table?",
          "options": {
            "A": "All",
            "B": "Delete",
            "C": "Where",
            "D": "From"
          },
          "correct_answer": "C",
          "explanation": "We can delete one or more records depending on the condition we specify in the WHERE clause. If WHERE clause is omitted then all the records of the table will be deleted and the table will be empty.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 298,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "It is not possible to delete all rows in a table without deleting the table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "It is possible to delete all rows in a table without deleting the table by using DELETE statement. Table structure, attributes, and indexes of a table will remain even after deleting all the records using DELETE statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 299,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "By using DELETE statement, which of the following is/are not deleted permanently from a table?",
          "options": {
            "A": "Records, Attributes",
            "B": "Table structure, Records",
            "C": "Table structure, Attributes",
            "D": "Records, Indexes of table"
          },
          "correct_answer": "C",
          "explanation": "Using DELETE statement, only records of a table are deleted permanently. It deletes all the rows without deleting the table. Table structure, attributes, and indexes of a table will be intact.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 300,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "Multiple tables can be deleted using a single DELETE statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Only one table can be deleted at a time using one DELETE statement. To delete n number of tables, delete statement should be written n number of times.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 301,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "To delete records in one table based on values in another table, which clause is used?",
          "options": {
            "A": "Values",
            "B": "Exists",
            "C": "Value",
            "D": "Exist"
          },
          "correct_answer": "B",
          "explanation": "To delete records of one table based on values of another table EXISTS clause is used. Syntax for such statement is:\nDELETE FROM TABLE_NAME WHERE EXISTS (SELECT statement);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 302,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "After performing a delete operation using DELETE statement, which of the following is used to undo the changes made by it?",
          "options": {
            "A": "Undo",
            "B": "Commit",
            "C": "Rollback",
            "D": "Undo it"
          },
          "correct_answer": "C",
          "explanation": "The DELETE command is used to remove one or more records from a table. After performing a DELETE operation, ROLLBACK is used to undo the changes.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 303,
          "topic": "SQL Delete Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "DELETE is explicit DML and used in assignments.",
          "faculty_alignment": "Assignments 6–7; Day 6 notes",
          "warning": null,
          "question": "DELETE is a _________ command.",
          "options": {
            "A": "Data definition language",
            "B": "Data manipulation language",
            "C": "Data control language",
            "D": "Transaction control language"
          },
          "correct_answer": "B",
          "explanation": "Statements used for managing data within schema objects comes under DML commands. DELETE is a DML command.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-delete-statement/"
        },
        {
          "id": 304,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following command is used to delete a database in SQL?",
          "options": {
            "A": "DELETE",
            "B": "DROP",
            "C": "ERASE",
            "D": "TRUNCATE"
          },
          "correct_answer": "B",
          "explanation": "The DROP command is used to delete a database in SQL. The same command can be used to delete a table within the database. The DELETE command is used to delete the specific information present inside the table. The TRUNCATE command is used to delete complete data from the table. Be careful while using the DROP command for deleting the database as it will affect all the tables present inside the database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 305,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement is used to delete a database in SQL?",
          "options": {
            "A": "DROP DATABASE",
            "B": "DROP database_name",
            "C": "DROP DATABASE database_name",
            "D": "DROP DATABASE (database_name)"
          },
          "correct_answer": "C",
          "explanation": "The syntax which is used to delete a database in SQL is –\nDROP DATABASE database_name\n In this statement DROP and DATABASE are keywords that remain the same for every statement using the DROP command, while database_name is the specific name of the database which has to be dropped and varies from statement to statement. The same syntax is used when using DROP for deleting a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 306,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Can a database be dropped regardless of its state?",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A database can be dropped regardless of its state i.e. offline, read-only, suspect, etc. To view the current state of a database we can use the sys.databases catalog view.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 307,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "After dropping a database snapshot in SQL, it can be re-created by restoring a backup.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, a dropped database can only be re-created by restoring a backup of it. But the database snapshots cannot be backed up and, therefore, cannot be restored.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 308,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement can be used to drop multiple databases at once?",
          "options": {
            "A": "DROP DATABASE database_name1 and database_name2",
            "B": "DELETE DATABASE database_name1, database_name2",
            "C": "DROP database_name1, database_name2",
            "D": "DROP DATABASE database_name1, database_name2"
          },
          "correct_answer": "D",
          "explanation": "By using the statement – DROP DATABASE database_name1, database_name2, we can drop each of the listed databases. In the statement, database names are just separated by a comma (,).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 309,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "In SQL, a database that is currently in use cannot be dropped.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "You cannot drop a database currently being used i.e. open for reading or writing by any user. One way to remove users from the database is to use the ALTER DATABASE command to set the database to SINGLE_USER.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 310,
          "topic": "SQL Drop DB",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL, but database-level DROP trivia is lower priority.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement is used to conditionally drop a database that already exists?",
          "options": {
            "A": "DROP DATABASE IF NOT EXISTS database_name",
            "B": "DROP DATABASE IF EXISTS database_name",
            "C": "DROP DATABASE EXISTS database_name",
            "D": "DROP DATABASE NOT EXISTS database_name"
          },
          "correct_answer": "B",
          "explanation": "The IF EXISTS command is used with the DROP command to conditionally drop a database only if it already exists in the SQL Server. If we try to drop a database that is not present, SQL will give us an error. To prevent an error from occurring we can use the IF EXISTS option.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-db/"
        },
        {
          "id": 311,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following command is used to delete the structure of a table in SQL?",
          "options": {
            "A": "DELETE",
            "B": "DROP",
            "C": "ERASE",
            "D": "TRUNCATE"
          },
          "correct_answer": "B",
          "explanation": "The DROP command is used to delete the structure of a table in SQL. The same command can be used to delete a database. The DELETE command is used to delete the specific information present inside the table. The TRUNCATE command is used to delete complete data from the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 312,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "In SQL, the DROP command can be put under which of the following category?",
          "options": {
            "A": "DDL (Data Definition Language)",
            "B": "DML (Data Manipulation Language)",
            "C": "DCL (Data Control Language)",
            "D": "TCL (Transaction Control Language)"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the DROP command comes under the category of DDL (Data Definition Language) that is used to define the structure of the table. DML (Data Manipulation Language) is used to manipulate the data inside the table. DCL (Data Control Language) is used by the database administrator to configure security access to relational databases. TCL (Transaction Control Language) is used to commit or rollback the changes made by DML commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 313,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement is used to delete a table in SQL?",
          "options": {
            "A": "DROP TABLE",
            "B": "DROP table_name",
            "C": "DROP TABLEtable_name",
            "D": "DROP TABLE (table_name)"
          },
          "correct_answer": "C",
          "explanation": "The syntax which is used to delete a database in SQL is –\n\n\nDROP TABLEtable_name\nIn this statement DROP and TABLE are keywords that remain the same for every statement using the DROP command, while table_name is the specific name of the table which has to be dropped and varies from statement to statement. The same syntax is used when using the DROP command for deleting a database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 314,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement is used to drop multiple tables at once in SQL?",
          "options": {
            "A": "DROP TABLE table_name1&table_name2&…table_namen;",
            "B": "DROP TABLE table_name1, table_name2,…table_namen;",
            "C": "DROP table_name1, table_name2,…table_namen;",
            "D": "DROP TABLE table_name1 table_name2 …. table_namen;"
          },
          "correct_answer": "B",
          "explanation": "The syntax for dropping multiple tables at once in SQL is –\nDROP TABLE table_name1, table_name2,…table_namen;\n Multiple table names are just separated by a comma (,).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 315,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "In SQL, which of the following statement is used to conditionally drop a table that already exists?",
          "options": {
            "A": "DROP TABLE IF EXISTS table_name",
            "B": "DROP TABLE IF NOT EXISTS table_name",
            "C": "DROP TABLE EXISTS table_name",
            "D": "DROP TABLE NOT EXISTS table_name"
          },
          "correct_answer": "A",
          "explanation": "The IF EXISTS command is used with the DROP command to conditionally drop a table only if it already exists in the SQL Server. If we try to drop a table that is not present, SQL will give us an error. To prevent an error from occurring we can use the IF EXISTS option.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 316,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "The DROP command cannot be used to drop a table that is referenced by a FOREIGN KEY constraint.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The DROP command cannot be used to drop a table that is referenced by a FOREIGN KEY constraint. The referencing FOREIGN KEY constraint or the referencing table must first be dropped otherwise the system will return an error.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 317,
          "topic": "SQL Drop Table",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DDL Commands",
          "reason": "DROP is explicit DDL and covered in class.",
          "faculty_alignment": "Day 6 DDL notes",
          "warning": null,
          "question": "Which of the following statement is used to drop a table present in another database?",
          "options": {
            "A": "DROP TABLE table_name.dbo.database_name",
            "B": "DROP TABLE database_name.table_name",
            "C": "DROP TABLE table_name.database_name",
            "D": "DROP TABLE database_name.dbo.table_name"
          },
          "correct_answer": "D",
          "explanation": "DROP TABLE database_name.dbo.table_name is the statement used to drop a table that is present in another database. Here, dbo stands for database owner. After executing the statement, it drops the specified table in the specified database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-drop-table/"
        },
        {
          "id": 318,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "Which operator is used to check the existence of a record in a subquery?",
          "options": {
            "A": "In",
            "B": "Exists",
            "C": "Check",
            "D": "For"
          },
          "correct_answer": "B",
          "explanation": "The EXISTS condition in SQL is used to check whether the result of a correlated nested query is empty or not. It is used to test for the existence of a record in a subquery.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 319,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "The result of EXISTS is _______",
          "options": {
            "A": "A numerical value",
            "B": "A character",
            "C": "A Boolean value",
            "D": "A query"
          },
          "correct_answer": "C",
          "explanation": "The result of EXISTS is a Boolean value. It returns true if the subquery returns one or more records and false if the subquery returns no records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 320,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "The EXISTS operator returns true if the subquery returns no records.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "EXISTS is a Boolean operator used in a subquery to test whether the inner query returns any row. It returns true if the subquery returns one or more rows.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 321,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "EXISTS condition is used in combination with which of the following?",
          "options": {
            "A": "Subquery",
            "B": "Constant",
            "C": "Column name",
            "D": "Expression"
          },
          "correct_answer": "A",
          "explanation": "The SQL EXISTS operator is used along with a subquery and is said to be met if the subquery returns at least one row. It can be used with a constant, column name or an expression.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 322,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "How many records must be matched with the given criteria to return TRUE from EXISTS condition in SQL?",
          "options": {
            "A": "One",
            "B": "Two",
            "C": "Three",
            "D": "Four"
          },
          "correct_answer": "A",
          "explanation": "When EXISTS is used, it returns TRUE as soon as it finds any record that matches the given criteria. So, to return TRUE at least one record should satisfy the given criteria.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 323,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "EXISTS operator is used with WHICH of the following clause(s)?",
          "options": {
            "A": "Select",
            "B": "In",
            "C": "Where",
            "D": "Group by"
          },
          "correct_answer": "C",
          "explanation": "The EXISTS Operator check the Subquery for rows existence, and if there are any then it will return TRUE otherwise FALSE. It is used along with WHERE clause in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 324,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "What is the basic syntax of EXISTS operator in SQL?",
          "options": {
            "A": "SELECT column_list\nFROM TABLE_NAME\nWHERE COLUMN EXISTS (subquery);",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE EXISTS (subquery);",
            "C": "SELECT column_list\nFROM TABLE_NAME\nWHERE TABLE_NAME EXISTS (subquery);",
            "D": "SELECT column_list\nFROM TABLE_NAME\nCOLUMN EXISTS (subquery);"
          },
          "correct_answer": "B",
          "explanation": "The basic syntax of EXISTS operator in SQL is:\nSelect column_list\nFrom table_name\nWhere EXISTS (subquery)",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 325,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "The process of sub query execution repeat as many number of times as there are main query rows when EXISTS operator is used.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "When EXISTS operator is used, the process of inner query execution repeats as many times as there are outer query rows. If there are ten rows that can result from main query, the subquery will be executed ten times.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 326,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "EXISTS operator can be prefixed with which of the following operators?",
          "options": {
            "A": "In",
            "B": "Not",
            "C": "Like",
            "D": "Between"
          },
          "correct_answer": "B",
          "explanation": "EXISTS operator cannot be prefixed using In, Like or between operators. NOT operator can be used as a prefix for EXISTS operator.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 327,
          "topic": "SQL Exists",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "EXISTS is an advanced subquery operator; correlated subqueries are explicit syllabus topics.",
          "faculty_alignment": "Assignment 7; Day 5 subqueries",
          "warning": null,
          "question": "The WHERE clause with NOT EXISTS operator is satisfied if how many rows are returned by the subquery?",
          "options": {
            "A": "One",
            "B": "Two",
            "C": "Zero",
            "D": "All"
          },
          "correct_answer": "C",
          "explanation": "NOT EXISTS operator returns true if no records are returned by the subquery and false if at least one record is returned by the sub query.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-exists/"
        },
        {
          "id": 328,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, which of the following constraint is used to establish a link between two tables?",
          "options": {
            "A": "PRIMARY KEY",
            "B": "LINK",
            "C": "FOREIGN KEY",
            "D": "CANDIDATE KEY"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the FOREIGN KEY constraint is used to establish a link between two tables. A foreign key in one table is used to point the primary key of another table. The PRIMARY KEY constraint is used to uniquely identify a record in a table. The candidate key is a set of keys that can become the primary key.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 329,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, the FOREIGN KEY of one table is the PRIMARY KEY of another table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the FOREIGN KEY of one table is the PRIMARY KEY of another table as it is used to create a link between two tables. It acts as a cross-reference between two tables as it references the primary key of another table. Every relationship in the database should be supported by a foreign key.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 330,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "The table that defines the FOREIGN KEY is called as the parent table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The table containing the foreign key is called the child table and the table containing the primary key is called the referenced or parent table. In other words, the table which contains the Foreign key as its primary key is the parent table and the other table which uses the foreign key is the child table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 331,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to apply the FOREIGN KEY constraint in SQL?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY parent_table (column_name));",
            "B": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY REFERENCES parent_table (column_name));",
            "C": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (column_name) REFERENCES (column_name));",
            "D": "🎓 Register Today for Free C++ Certification - November 2026\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (column_name) REFERENCES parent_table (column_name));"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to define a FOREIGN KEY in SQL is –\n\n\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype CONSTRAINT,\ncolumn2 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (column_name) REFERENCES parent_table (column_name));\nThe FOREIGN KEY and REFERENCES keyword is used when declaring a foreign key.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 332,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement is used to create the FOREIGN KEY constraint on an already existing table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name FOREIGN KEY\nREFERENCES parent_table (column_name);",
            "B": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name FOREIGN KEY (column_name)\nREFERENCES parent_table;",
            "C": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name FOREIGN KEY (column_name)\nREFERENCES parent_table (column_name);",
            "D": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name FOREIGN KEY (column_name)\nREFERENCES (column_name);"
          },
          "correct_answer": "C",
          "explanation": "The statement that is used to create a FOREIGN KEY on an already existing table is –\nALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name FOREIGN KEY (column_name)\nREFERENCES parent_table (column_name);\nWe use the ALTER command with the ADD and CONSTRAINT keyword in this statement. Constraint name is a name given to the foreign key constraint by the user.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 333,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to delete the FOREIGN KEY constraint from a table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nDROP FOREIGN KEY constraint_name;",
            "B": "ALTER TABLE TABLE_NAME\nDROP FOREIGN KEY;",
            "C": "ALTER TABLE TABLE_NAME\nDELETE FOREIGN KEY constraint_name;",
            "D": "ALTER TABLE TABLE_NAME\nDELETE FOREIGN KEY;"
          },
          "correct_answer": "A",
          "explanation": "The statement that can be used to delete the FOREIGN KEY constraint from a table is –\nALTER TABLE TABLE_NAME\nDROP FOREIGN KEY constraint_name;\nThe ALTER command is used with the DROP keyword to delete the FOREIGN KEY. Here constraint_name was a name given to the foreign key by the user.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 334,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, a table can have more than one column with the FOREIGN KEY constraints.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL, unlike the PRIMARY KEY constraint, a table can have more than one column with the FOREIGN KEY constraint. That means that a table can be connected to more than one table. Each table’s primary key will act as a foreign key for the child table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 335,
          "topic": "SQL Foreign Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Relational DB modelling",
          "reason": "Foreign keys/relational modelling and constraints are practised in assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to apply the FOREIGN KEY constraint on more than on column in a table?",
          "options": {
            "A": "CREATE TABLE child_table (\ncolumn1 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (col1, col2,...) REFERENCES (col1,col2));",
            "B": "CREATE TABLE child_table (\ncolumn1 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (col1) REFERENCES parent_table (col1),\nFOREIGN KEY (col2) REFERENCES parent_table (col2));",
            "C": "CREATE TABLE child_table (\ncolumn1 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (col1, col2,...) REFERENCES parent_table (col1,col2));",
            "D": "CREATE TABLE child_table (\ncolumn1 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (col1, col2,...) REFERENCES parent_table);"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to apply the FOREIGN KEY constraint to more than column in a table is –\nCREATE TABLE child_table (\ncolumn1 datatype CONSTRAINT,\n...\ncolumnn datatype CONSTRAINT,\nFOREIGN KEY (col1, col2,...) REFERENCES parent_table (col1, col2));\nSpecify the FOREIGN KEY constraint to define one or more column as a foreign key and parent table with columns to which the foreign key columns refer.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-foreign-key/"
        },
        {
          "id": 336,
          "topic": "SQL Full Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus; FULL OUTER JOIN is a subtype.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Which of the following joins return very large result-sets when compared with other joins?",
          "options": {
            "A": "Inner join",
            "B": "Right join",
            "C": "Left join",
            "D": "Full join"
          },
          "correct_answer": "D",
          "explanation": "The FULL OUTER JOIN returns all the records when there is a match in either left or right table records. So, it can potentially return very large result-sets when compared with other joins.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-full-join/"
        },
        {
          "id": 337,
          "topic": "SQL Full Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus; FULL OUTER JOIN is a subtype.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Which of the following sets represents the result-set of Table1 FULL JOIN Table2?",
          "options": {
            "A": "Table1",
            "B": "Table1 U Table2",
            "C": "Table2",
            "D": "Table1 ∩ Table2"
          },
          "correct_answer": "B",
          "explanation": "FULL JOIN creates the result-set by combining result of both LEFT JOIN and RIGHT JOIN. The result-set will contain all the rows from both the tables i.e. Table1 U Table2.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-full-join/"
        },
        {
          "id": 338,
          "topic": "SQL Full Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus; FULL OUTER JOIN is a subtype.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "For the missing matches of any table joined by using FULL JOIN, the result-set contains _______",
          "options": {
            "A": "Space",
            "B": "Zero",
            "C": "Null",
            "D": "Blank"
          },
          "correct_answer": "C",
          "explanation": "The SQL full join is the result of combination of both left and right outer join. It puts NULL on the place of matches not found.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-full-join/"
        },
        {
          "id": 339,
          "topic": "SQL Full Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus; FULL OUTER JOIN is a subtype.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Full join is a type of INNER JOIN.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Full join is a type of outer join that’s why it is also referred as full outer join. Using FULL OUTER JOIN in the place of FULL JOIN doesn’t affect the result-set.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-full-join/"
        },
        {
          "id": 340,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which clause is used to group the result set based on a common value present in a table?",
          "options": {
            "A": "Common",
            "B": "Sort",
            "C": "Group",
            "D": "Group by"
          },
          "correct_answer": "D",
          "explanation": "The GROUP BY Statement in SQL is used to arrange the similar data into groups. It is used to group the rows together by common column values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 341,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "GROUP BY clause is used with which of the following statements?",
          "options": {
            "A": "Update",
            "B": "Insert",
            "C": "Select",
            "D": "Delete"
          },
          "correct_answer": "C",
          "explanation": "The GROUP BY clause is used in conjunction with the SELECT statement and aggregate functions to group rows together by identical column values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 342,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "GROUP BY statement cannot be used with aggregate functions.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The GROUP BY statement is often used with aggregate functions to group the result-set by one or more columns based on the given conditions.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 343,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "How many columns or functions can be specified or included in a single GROUP BY clause?",
          "options": {
            "A": "Only one",
            "B": "Less than five by default",
            "C": "Two to ten",
            "D": "One or more"
          },
          "correct_answer": "D",
          "explanation": "The SQL GROUP BY clause is used to group the result set based on common value present in it. More than one column or function can be specified or included in a GROUP BY clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 344,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "All non aggregate function columns in the SELECT statement must be included in which of the following clause(s)?",
          "options": {
            "A": "Group by",
            "B": "Where",
            "C": "Order by",
            "D": "Having"
          },
          "correct_answer": "A",
          "explanation": "All the non-aggregate function columns of the SELECT statement must be listed in the GROUP BY clause. Otherwise, the query displays an error.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 345,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following provides a correct order of clauses used in SQL?",
          "options": {
            "A": "Where, Order By, Group By, Having",
            "B": "Group By, Order By, Having",
            "C": "Group By, Where",
            "D": "Where, Group By, Order By"
          },
          "correct_answer": "D",
          "explanation": "In a query, GROUP BY clause is placed after the WHERE clause and placed before ORDER BY clause if used any.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 346,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following is a correct syntax of GROUP BY clause?",
          "options": {
            "A": "SELECT c1, COUNT(c2)\nFROM TABLE_NAME\nGROUP BY c2;",
            "B": "SELECT c1, COUNT(c2)\nFROM TABLE_NAME\nGROUP BY c1\nWHERE condition;",
            "C": "SELECT c1, COUNT(c2)\nFROM TABLE_NAME\nGROUP BY c2, c1;",
            "D": "SELECT c1, COUNT(c2)\nFROM TABLE_NAME\nGROUP BY c2\nORDER BY c1;"
          },
          "correct_answer": "C",
          "explanation": "All columns except aggregate function columns listed in the SELECT statement must be included in GROUP BY clause. GROUP BY should be written after WHERE and before ORDER BY.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 347,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "In the GROUP BY Clause the grouping is done using the values present in the _________",
          "options": {
            "A": "Entire table",
            "B": "Result set",
            "C": "Database",
            "D": "Order by clause"
          },
          "correct_answer": "B",
          "explanation": "The grouping of result set is done after all the records have been retrieved from tables i.e. the grouping is done using the values present in the result set.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 348,
          "topic": "SQL Group By",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "WHERE clause is used to restrict the groups grouped using GROUP BY.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The WHERE clause cannot be used to restrict groups. It is used to retrieve rows based on a certain condition, but it cannot be applied to grouped result. The HAVING clause is used to filter the result set of GROUP BY clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-group-by/"
        },
        {
          "id": 349,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which clause is used in SQL to specify a filter condition for a group?",
          "options": {
            "A": "Where",
            "B": "Group by",
            "C": "Having",
            "D": "Filter"
          },
          "correct_answer": "C",
          "explanation": "The HAVING clause is used with the GROUP BY clause to specify a filter condition for a group or an aggregate. HAVING clause places conditions on groups created by the GROUP BY clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 350,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "HAVING clause can be used with which of the following statements?",
          "options": {
            "A": "Update",
            "B": "Select",
            "C": "Delete",
            "D": "Insert"
          },
          "correct_answer": "B",
          "explanation": "The HAVING clause places conditions on groups created by the GROUP BY clause. It can be used with the SELECT statement only.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 351,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "Which of the following order is valid in SQL?",
          "options": {
            "A": "Where, Having, Group By, Order By",
            "B": "Where, Group By, Order By, Having",
            "C": "Group By, Where, Having, Order By",
            "D": "Where, Group By, Having, Order By"
          },
          "correct_answer": "D",
          "explanation": "If a SELECT query contain WHERE or HAVING clauses, then the WHERE clause must appear before the GROUP BY clause and the HAVING clause must appear after it but before the ORDER BY clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 352,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "A SELECT statement cannot contain both WHERE and HAVING clauses in a single query.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "A SELECT query can contain both a WHERE and a HAVING clause, but in that case WHERE must appear before GROUP BY and HAVING must appear after GROUP BY.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 353,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "HAVING clause is used in combination with which of the following clause(s)?",
          "options": {
            "A": "Where",
            "B": "Order by",
            "C": "Group by",
            "D": "Select"
          },
          "correct_answer": "C",
          "explanation": "SQL HAVING clause is used in combination with the GROUP BY clause to restrict the groups of returned rows to only those whose the condition is TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 354,
          "topic": "SQL Having Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "GROUP BY / HAVING",
          "reason": "Explicit syllabus topic and many faculty assignment questions.",
          "faculty_alignment": "Assignments 1, 4, 5; SLA 1",
          "warning": null,
          "question": "A HAVING clause works like a WHERE clause if it is not used with the GROUP BY clause.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In the absence of GROUP BY clause, the HAVING clause works like a WHERE clause. The difference between the HAVING and the WHERE clause is that the WHERE clause is used to filter rows, while the HAVING clause is used to filter groups of rows.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-having-clause/"
        },
        {
          "id": 355,
          "topic": "SQL Hosting",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following process is used for your web server to have access to a database-system that uses the SQL language?",
          "options": {
            "A": "SQL Connectivity",
            "B": "SQL Hosting",
            "C": "SQL Injection",
            "D": "SQL Deployment"
          },
          "correct_answer": "B",
          "explanation": "SQL hosting is the process which used for the web server to have access to a database-system that uses the SQL language. This helps our website to store and retrieve data from the database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-hosting/"
        },
        {
          "id": 356,
          "topic": "SQL Hosting",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following SQL database management system is an open source software?",
          "options": {
            "A": "MySQL",
            "B": "MS SQL Server",
            "C": "Oracle",
            "D": "MS Access"
          },
          "correct_answer": "A",
          "explanation": "MySQL is a free and open source based database management system. It is a very powerful, robust and full featured SQL database system. It is a free alternative to the MS SQL server and Oracle database systems.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-hosting/"
        },
        {
          "id": 357,
          "topic": "SQL Hosting",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following database management system is inappropriate for high traffic database-driven websites?",
          "options": {
            "A": "MySQL",
            "B": "MS SQL Server",
            "C": "Oracle",
            "D": "MS Access"
          },
          "correct_answer": "D",
          "explanation": "When websites requires only a simple database then the MS Access can be used. It does not works well with a high traffic database driven websites. It is not as powerful as MySQL, MS SQL Server or Oracle database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-hosting/"
        },
        {
          "id": 358,
          "topic": "SQL Hosting",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "The MS SQL Server uses PL/SQL as its language.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The MS SQL Sever uses Transact SQL or T-SQL ass its language. PL/SQL is used by Oracle database as its language.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-hosting/"
        },
        {
          "id": 359,
          "topic": "SQL Hosting",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Web hosting/database-server deployment is not in the supplied syllabus or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following database management system can be used only on the Windows operating system?",
          "options": {
            "A": "Oracle",
            "B": "MongoDB",
            "C": "MySQL",
            "D": "SQL Server"
          },
          "correct_answer": "D",
          "explanation": "The SQL Server database management server is owned by Microsoft and can only run on Windows operating system. Whereas, the database systems like Oracle, MySQL and MongoDB can work on Windows, Mac as well as Linux Operating Systems.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-hosting/"
        },
        {
          "id": 360,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "Which of the following operators allows us to specify multiple values in a WHERE clause?",
          "options": {
            "A": "Like",
            "B": "Between",
            "C": "In",
            "D": "Range"
          },
          "correct_answer": "C",
          "explanation": "IN operator is used to check for values contained in a specific set of values. It allows us to specify multiple values in a WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 361,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "IN operator can be used as shorthand for which of the following operators?",
          "options": {
            "A": "Multiple OR",
            "B": "Multiple Like",
            "C": "Multiple NOT",
            "D": "Multiple Between"
          },
          "correct_answer": "A",
          "explanation": "IN operator is used to remove the need of multiple OR condition in SELECT, INSERT, UPDATE or DELETE. It can be used as a shorthand for multiple OR operators.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 362,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "IN operator is used with which of the following clause(s)?",
          "options": {
            "A": "Select",
            "B": "Where",
            "C": "Update",
            "D": "Insert"
          },
          "correct_answer": "B",
          "explanation": "The IN operator allows us to specify multiple values in a WHERE clause. Using this operator we can easily test if the expression matches any value in the list of values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 363,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "Which type of arguments can be used with IN operator?",
          "options": {
            "A": "Character values only",
            "B": "Numeric values only",
            "C": "Date type only",
            "D": "Any data type"
          },
          "correct_answer": "D",
          "explanation": "Any type of arguments, i.e. character, numeric, date etc. types can be used with IN operator. Character fields must be enclosed in single quotes.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 364,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "NOT IN is not a valid operator in SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The IN operator is used to compare a value to a list of literal values that have been specified and returns those rows which satisfies the given condition(s). NOT IN is a valid operator in SQL which is used to exclude the rows our list.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 365,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "Which of the following is a correct syntax for IN operator?",
          "options": {
            "A": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name IN (VALUES);",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE column_name IN VALUES;",
            "C": "SELECT column_list IN (VALUES)\nFROM TABLE_NAME\nWHERE column_name;",
            "D": "SELECT column_list IN VALUES\nFROM TABLE_NAME\nWHERE column_name;"
          },
          "correct_answer": "A",
          "explanation": "The SQL IN operator allows us to test if an expression matches any value in a list of values. Syntax for using IN operator is:\nSELECT column_list FROM TABLE_NAME\nWHERE column_name IN (VALUES);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 366,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "Any number of values can be listed in an IN operator.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "A list of values can be listed in an IN operator. The IN operator compares a value to a set of values separated by commas and retrieves matching rows from the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 367,
          "topic": "SQL In Operator",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "SQL Constructs / Advanced Subqueries",
          "reason": "IN is fundamental filtering/subquery syntax used in assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 7",
          "warning": null,
          "question": "Which of the following statement(s) can be used in place of list of values in an IN operator?",
          "options": {
            "A": "Insert",
            "B": "Update",
            "C": "Select",
            "D": "Modify"
          },
          "correct_answer": "C",
          "explanation": "A select statement can be substituted in place of values list in an IN operator. Values retrieved by that select statement is used as values list of IN operator. Value retrieved from select statement should match with the field mentioned in where clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-in-operator/"
        },
        {
          "id": 368,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following optional structure is used to improve the performance of a query performed on a table in SQL?",
          "options": {
            "A": "View",
            "B": "Index",
            "C": "Constraint",
            "D": "Table"
          },
          "correct_answer": "B",
          "explanation": "The optional structure that is used to improve the performance of a query performed on a table in SQL is Index. Indexes are used to search the values from the table, when indexing is there you need not use the full table scan. A View is only a read only copy of a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 369,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement can be used to create an INDEX in SQL?",
          "options": {
            "A": "INSERT INDEX index_name table_name;",
            "B": "INSERT INDEX index_name ON table_name;",
            "C": "CREATE INDEX index_name table_name;",
            "D": "CREATE INDEX index_name ON table_name;"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to create an INDEX in SQL is –\nCREATE INDEX index_name ON TABLE_NAME;\nThe CREATE command is used along with the INDEX and ON keyword.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 370,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following index is created on only one column of a table.",
          "options": {
            "A": "Implicit",
            "B": "Unique",
            "C": "Single-column",
            "D": "Composite"
          },
          "correct_answer": "C",
          "explanation": "In SQL, a single-column index is created based on only one table column. Implicit Indexes are the indexes that are automatically created by the database server after an object is created. The unique index is used to create an index with only unique values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 371,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following index is created on more than one column of a table.",
          "options": {
            "A": "Implicit",
            "B": "Unique",
            "C": "Single-column",
            "D": "Composite"
          },
          "correct_answer": "D",
          "explanation": "In SQL, a Composite index is created on more than one table column. A single-column index is created based on only one table column. The Implicit Indexes are the indexes that are automatically created by the database server after an object is created. The unique index is used to create an index with only unique values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 372,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement is used to create a UNIQUE Index in SQL?",
          "options": {
            "A": "CREATE INDEX index_name ON table_name (column_name);",
            "B": "CREATE UNIQUE INDEX index_name ON table_name (column_name);",
            "C": "CREATE INDEX UNIQUE index_name ON table_name (column_name);",
            "D": "CREATE UNIQUE INDEX index_name ON (column_name);"
          },
          "correct_answer": "B",
          "explanation": "The statement that is used to create a UNIQUE Index in SQL is –\n\n\nCREATE UNIQUE INDEX index_name ON TABLE_NAME (column_name);\nThe CREATE command is used with the UNIQUE INDEX and the ON keyword.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 373,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "How many types of indexes are present in SQL?",
          "options": {
            "A": "3",
            "B": "4",
            "C": "2",
            "D": "5"
          },
          "correct_answer": "C",
          "explanation": "Indexes is SQL can be classified into 2 categories: clustered index and non-clustered index. A Clustered Index in SQL defines the order in which data physically stored in a table. A Non-Clustered Index in SQL stores the index structure separately from the data that is physically stored in a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 374,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "In SQL, Indexes can also be used on the columns containing null values.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, indexes should not be created on the columns containing null values because it specifies no use.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 375,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement is used to create a BIT-MAP Index in SQL?",
          "options": {
            "A": "CREATE INDEX index_name ON table_name (column_name);",
            "B": "CREATE BITMAP INDEX index_name ON (column_name);",
            "C": "CREATE INDEX BITMAP index_name ON table_name (column_name);",
            "D": "CREATE BITMAP INDEX index_name ON table_name (column_name);"
          },
          "correct_answer": "D",
          "explanation": "The statement that is used to create a BIT-MAP Index in SQL is –\nCREATE BITMAP INDEX index_name ON TABLE_NAME (column_name);\nThe CREATE command is used along with the BITMAP INDEX and the ON keyword. The column name specified must have distinct values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 376,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement can be used to delete an INDEX in SQL?",
          "options": {
            "A": "DROP INDEX table_name;",
            "B": "DROP INDEX index_name;",
            "C": "DROP INDEX index_name ON table_name;",
            "D": "DELETE INDEX index_name;"
          },
          "correct_answer": "B",
          "explanation": "The statement that can be used to delete an INDEX in SQL is –\nDROP INDEX index_name;\nThe DROP command is used with the INDEX keyword. The index that has to be deleted is specified.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 377,
          "topic": "SQL Index",
          "category": "KEEP",
          "syllabus_topic": "13. Optimization & Indexing",
          "syllabus_detail": "Indexing Strategies",
          "reason": "Indexing strategies are explicit in syllabus and indexes are assigned.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following pair of indexes can be created when there is a partition in a table?",
          "options": {
            "A": "Global and Local",
            "B": "Single and Composite",
            "C": "Clustered and Non-Clustered",
            "D": "Unique and Bitmap"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the Global and Local indexes are used when there is a partition in a table. Global index has one to many relationships which allows index partition to map to many table partitions. Local indexes are indexes where there is one to one mapping between index partition and table partition.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-index/"
        },
        {
          "id": 378,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is a technique in which a malicious code is inserted into strings that are passed to an SQL query?",
          "options": {
            "A": "SQL Malware",
            "B": "SQL Injection",
            "C": "SQL Hijack",
            "D": "SQL Trojan"
          },
          "correct_answer": "B",
          "explanation": "SQL Injection is a technique in which a malicious code is inserted into strings that are passed to an SQL query which results in giving the access of the data in the database to the attacker.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 379,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following option is best to describe SQL Injection?",
          "options": {
            "A": "Web Hacking Technique",
            "B": "Database Hacking Technique",
            "C": "SQL Hacking Technique",
            "D": "Table Hacking Technique"
          },
          "correct_answer": "A",
          "explanation": "SQL injection is one of the most common web hacking techniques. The attackers enters malicious code in the web page input field  to get unauthorised access to the database.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 380,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following is a time-based SQL injection technique?",
          "options": {
            "A": "In-Band Injection",
            "B": "Error Based Injection",
            "C": "Union Based Injection",
            "D": "Time Based Blind Injection"
          },
          "correct_answer": "D",
          "explanation": "Blind Injection technique relies on sending an SQL query to the database which forces the database to wait for a specified amount of time (in seconds) before responding. In-band SQL Injection occurs when an attacker is able to use the same communication channel to both launch the attack and gather results. Error-based is an in-band SQL Injection technique that relies on error messages thrown by the database. Union-based is an in-band SQL injection technique that uses the UNION SQL operator to combine the results of two or more SELECT statements into a single result.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 381,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Consider the following statements and tell which of them can be used for SQL injection?",
          "options": {
            "A": "SELECT * FROM table_name WHERE column_name = 105 NOT (1=1);",
            "B": "SELECT * FROM table_name WHERE column_name = 105 AND 1=1;",
            "C": "SELECT * FROM table_name WHERE column_name = 1=1;",
            "D": "SELECT * FROM table_name WHERE column_name = 16 OR 1=1;"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used for SQL injection is –\nSELECT * FROM TABLE_NAME WHERE column_name = 16 OR 1=1;\nThe above statement is valid and will return all rows from the table, since OR 1=1 is always true.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 382,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Consider the following statements and tell which of them can be used for SQL injection?",
          "options": {
            "A": "SELECT * FROM Students WHERE Id =”” and “”=”” AND Password =”” and “”=””;",
            "B": "SELECT * FROM Students WHERE Id =”” or “”=”” AND Password =”” or “”=””;",
            "C": "SELECT * FROM Students WHERE Id =”” not “”=”” AND Password =”” not “”=””;",
            "D": "SELECT * FROM Students WHERE Id =”” or “”=”” AND Password =””;"
          },
          "correct_answer": "B",
          "explanation": "The statement that can be used for SQL injection is –\n\n\nSELECT * FROM Students WHERE Id =\"\" OR \"\"=\"\" AND Password =\"\" OR \"\"=\"\";\nThe above statement is valid and will return all rows from the Students table, since OR “”=”” is always TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 383,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "In SQL, the parameters that can be used for protection from SQL injection is preceded by which symbol?",
          "options": {
            "A": "@",
            "B": "&",
            "C": "%",
            "D": "*"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the parameters that can be used for protection from SQL injection is preceded by the @ symbol. These parameters are values that are added to an SQL query at execution time and the SQL engine checks each parameter to ensure that it is correct for its column and are treated as not a part of statement to be executed.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 384,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Java servlets are vulnerable to SQL injection.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Java servlets are also vulnerable to SQL injection if input validation is not enforced and if they build SQL queries dynamically.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 385,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following field is susceptible to SQL injection?",
          "options": {
            "A": "Checklist",
            "B": "Radio Buttons",
            "C": "Input field",
            "D": "Lists"
          },
          "correct_answer": "C",
          "explanation": "Any input field like Username, Password, Card Number etc. which extracts data from database by using where clause are susceptible to SQL injection.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 386,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "Which of the following statement demonstrate the correct way to use the protection parameters in SQL?",
          "options": {
            "A": "SELECT * FROM Students WHERE Id = &0;",
            "B": "SELECT * FROM Students WHERE Id = *0;",
            "C": "SELECT * FROM Students WHERE Id = @0;",
            "D": "SELECT * FROM Students WHERE Id = %0;"
          },
          "correct_answer": "C",
          "explanation": "The statement that demonstrate the correct way to use the protection parameters in SQL is –\nSELECT * FROM Students WHERE Id = @0\";\nHere, the @ symbol is the protection parameter that precedes 0 and is not counted as a part of the executable SQL statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 387,
          "topic": "SQL Injection",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Not explicitly listed in syllabus",
          "reason": "Security attack/prevention is not included in the supplied syllabus, notes or assignments.",
          "faculty_alignment": "No matching faculty material",
          "warning": null,
          "question": "SQL injection attacks can be classified into how many categories?",
          "options": {
            "A": "5",
            "B": "4",
            "C": "2",
            "D": "3"
          },
          "correct_answer": "D",
          "explanation": "Broadly, the SQL injection attacks can be classified into –\nIn-band SQL Injection – It occurs when the attacker is able to gather information and launch an attack via the same channel.\nInferential SQL Injection – It is a technique in which no data is actually transferred via the web application. So, the attacker will not be able to see the result of an attack.\nOut-of-band SQL Injection – They usually involve sending the data directly from the database server to a machine that is controlled by the attacker.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-injection/"
        },
        {
          "id": 388,
          "topic": "SQL Inner Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Constructs",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "When there are no matching values between two tables of a database, which of the following join returns zero records?",
          "options": {
            "A": "Self join",
            "B": "Full join",
            "C": "Inner join",
            "D": "Right join"
          },
          "correct_answer": "C",
          "explanation": "The INNER JOIN keyword selects all rows from both the tables as long as the condition satisfies. If no matching values exist between them, they cannot be combined and hence results in zero records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-inner-join/"
        },
        {
          "id": 389,
          "topic": "SQL Inner Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Constructs",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which of the following keyword can be used along with INNER JOIN in SQL?",
          "options": {
            "A": "Of",
            "B": "On",
            "C": "By",
            "D": "Combine"
          },
          "correct_answer": "B",
          "explanation": "ON keyword can be used along with INNER JOIN, whenever the join condition is not specified in where clause. If the join condition is specified in WHERE clause, then there is no need of ON.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-inner-join/"
        },
        {
          "id": 390,
          "topic": "SQL Inner Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Constructs",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Where the join condition should be mentioned, if ON keyword is not used in a query?",
          "options": {
            "A": "From",
            "B": "Select",
            "C": "Where",
            "D": "Join"
          },
          "correct_answer": "C",
          "explanation": "If on keyword is not used in a query, then the join condition must be specified in the where clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-inner-join/"
        },
        {
          "id": 391,
          "topic": "SQL Inner Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Constructs",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "What is the basic syntax for using INNER JOIN?",
          "options": {
            "A": "SELECT column_list\nFROM table1\nINNER JOIN table2 ON table1.column = table2.column;",
            "B": "🔥 Enroll for Free Data Structure Certification - November 2026\nSELECT column_list\nFROM table1\nINNER JOIN table2;",
            "C": "SELECT column_list\nFROM table1 ON table1.column = table2.column\nINNER JOIN table2;",
            "D": "SELECT column_list\nFROM table1\nINNER JOIN table2 table1.column = table2.column;"
          },
          "correct_answer": "A",
          "explanation": "Inner join is used to combine two or more tables based on a given condition. So, condition is necessary for INNER JOIN. Either ON or WHERE clause should be used to mention the condition(s).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-inner-join/"
        },
        {
          "id": 392,
          "topic": "SQL Inner Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Constructs",
          "reason": "Relational modelling and joins; faculty assignments use multi-table joins.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which of the following sets is similar to table1 INNER JOIN table2?",
          "options": {
            "A": "Table1 U Table2",
            "B": "Table1 – Table2",
            "C": "Table1 ∩ Table2",
            "D": "Table1 – Table2"
          },
          "correct_answer": "C",
          "explanation": "Table1 ∩ Table2 results the matching columns between those tables. SQL INNER JOIN returns all rows from multiple tables where the join condition is met. So Table1 INNER JOIN Table2 is similar to Table1 ∩ Table2.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-inner-join/"
        },
        {
          "id": 393,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which clause is used to fetch data from two or more tables, based on conditions between tables?",
          "options": {
            "A": "Combine",
            "B": "Join",
            "C": "Merge",
            "D": "Add"
          },
          "correct_answer": "B",
          "explanation": "SQL JOIN clause is used to fetch data from two or more tables. Based on a related column between the tables, we can combine rows from two or more tables using JOIN clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 394,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which of the following type of join returns a list of rows for which there is a match in both of the specified tables?",
          "options": {
            "A": "Outer join",
            "B": "Full join",
            "C": "Self join",
            "D": "Inner join"
          },
          "correct_answer": "D",
          "explanation": "Inner join returns those records that have matching values in both the tables. The result of this join is based on matched data as per the equality condition specified in the SQL query.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 395,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which of the following is a default join type?",
          "options": {
            "A": "Outer join",
            "B": "Inner join",
            "C": "Left join",
            "D": "Right join"
          },
          "correct_answer": "B",
          "explanation": "Inner join Selects records that have matching values in both the tables. It’s the default join type, so if we just type JOIN without specifying any other conditions, an INNER JOIN will be used.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 396,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which type of join returns all the records from the left table, and the matched records from the right table?",
          "options": {
            "A": "Right join",
            "B": "Inner join",
            "C": "Left join",
            "D": "Self join"
          },
          "correct_answer": "C",
          "explanation": "LEFT JOIN returns all the rows of the table on the left side of the join and matching rows for the table on the right side of join. Left join is also known as left outer join.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 397,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which type of join returns all the rows of the table on the right side of the join and matching rows for the table on the left side of join?",
          "options": {
            "A": "Right join",
            "B": "Left join",
            "C": "Full join",
            "D": "Inner join"
          },
          "correct_answer": "A",
          "explanation": "RIGHT JOIN returns all the records from the right table, and the matched records from the left table of the join. Right join is also known as right outer join.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 398,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "Which type of join returns all the records when there is a match in either left or right table?",
          "options": {
            "A": "Join",
            "B": "Full join",
            "C": "Self join",
            "D": "Cartesian join"
          },
          "correct_answer": "B",
          "explanation": "FULL JOIN will return all the results from both the left and the right tables of our statement. It is a combination of left outer join and right outer join.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 399,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "How many conditions are required to join N number of tables?",
          "options": {
            "A": "N conditions",
            "B": "N+1 conditions",
            "C": "N-2 conditions",
            "D": "N-1 conditions"
          },
          "correct_answer": "D",
          "explanation": "Using SQL JOIN keyword we can combine one or more tables depending on the given conditions. Minimum required condition for joining table, is N-1 where N is the number of tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 400,
          "topic": "SQL Joins",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins / Relational DB modelling",
          "reason": "Joins are central to relational modelling and assignments.",
          "faculty_alignment": "Assignment 7; Views & Indexes; SLA 1",
          "warning": null,
          "question": "In a query, JOIN condition can be used for only one time.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "JOIN condition can be used for more once in a single query. To join n tables, we require n-1 number of conditions.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-joins/"
        },
        {
          "id": 401,
          "topic": "SQL Left Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicitly in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Table1 LEFT JOIN Table2 returns _____",
          "options": {
            "A": "All records from the Table2 and the matched records from the Table1",
            "B": "All records from the Table1 and the matched records from the Table2",
            "C": "Records that have matching values in both tables.",
            "D": "All records when there is a match in either Table1 or Table2"
          },
          "correct_answer": "B",
          "explanation": "LEFT JOIN returns all the rows of the table on the left side of the join and matching rows for the table on the right side of join.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-left-join/"
        },
        {
          "id": 402,
          "topic": "SQL Left Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicitly in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "If there is no matching row on right side table of LEFT JOIN, the result-set contains ____",
          "options": {
            "A": "Zero",
            "B": "Blank",
            "C": "A default value",
            "D": "Null"
          },
          "correct_answer": "D",
          "explanation": "The rows for which there is no matching row on the right side table of LEFT JOIN, the result-set will contain null.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-left-join/"
        },
        {
          "id": 403,
          "topic": "SQL Left Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicitly in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Instead of LEFT JOIN, which of the following can be used to produce same result?",
          "options": {
            "A": "Join",
            "B": "Left outer join",
            "C": "Left inner join",
            "D": "Inner join"
          },
          "correct_answer": "B",
          "explanation": "LEFT JOIN returns all records from the left table, and the matched records from the right table. We can use LEFT OUTER JOIN instead of LEFT JOIN; both of them produce same result.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-left-join/"
        },
        {
          "id": 404,
          "topic": "SQL Left Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicitly in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Which of the following sets represents table1 LEFT JOIN table2?",
          "options": {
            "A": "Table1",
            "B": "Table1 ∩ Table2",
            "C": "Table1 U Table2",
            "D": "Table2"
          },
          "correct_answer": "A",
          "explanation": "The LEFT JOIN keyword returns all records from the table1 irrespective of the matching condition(s) and the matched records from the table2.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-left-join/"
        },
        {
          "id": 405,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which operator is used to search for a specified pattern in a column?",
          "options": {
            "A": "In",
            "B": "Between",
            "C": "Like",
            "D": "Pattern"
          },
          "correct_answer": "C",
          "explanation": "The SQL LIKE clause is used to compare a value to similar values using wildcard operators. This operator is used to search for a specified pattern in a column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 406,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The SQL LIKE operator is used in which of the following clause?",
          "options": {
            "A": "Select",
            "B": "Having",
            "C": "Group by",
            "D": "Where"
          },
          "correct_answer": "D",
          "explanation": "The SQL LIKE operator is used in a WHERE clause to search for a specified pattern in a column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 407,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which of the following wildcards are used in conjunction with the LIKE operator?",
          "options": {
            "A": "%, _",
            "B": "!, %",
            "C": "!, _",
            "D": "*, %"
          },
          "correct_answer": "A",
          "explanation": "%, _ are the two wildcards used in conjunction with the LIKE operator to search for a specified pattern in a column of the specified table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 408,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "To search for a value in a database table, when we don’t have an exact value to search for, which of the following is used?",
          "options": {
            "A": "Like",
            "B": "Between",
            "C": "In",
            "D": "Having"
          },
          "correct_answer": "A",
          "explanation": "SQL LIKE is used to search for a value in a database table, when we don’t have an exact value to search for. This operator is used to select rows that match a character pattern.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 409,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The percent sign (%) represents which of the following?",
          "options": {
            "A": "Zero, one or multiple characters",
            "B": "Single character only",
            "C": "Multiple characters only",
            "D": "Two characters only"
          },
          "correct_answer": "A",
          "explanation": "The percent sign is used in conjunction with the LIKE operator. It is used to represent zero, one, or multiple characters.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 410,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The underscore ( _ ) represents which of the following?",
          "options": {
            "A": "Zero or more characters",
            "B": "Two characters",
            "C": "Multiple characters",
            "D": "Exactly one character"
          },
          "correct_answer": "D",
          "explanation": "The underscore ( _ ) is used in conjunction with the LIKE operator. It is used to represent exactly one character.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 411,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The percent sign and the underscore cannot be used in combinations.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The percent sign and the underscore can be used in combinations. For example, _r% represents any values that have “r” in the second position. Both %, _ can be used in a single pattern.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 412,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which of the following pattern matches strings which contain the substring ‘xxx’ in them at any position?",
          "options": {
            "A": "_xxx%",
            "B": "%xxx_",
            "C": "_xxx_",
            "D": "%xxx%"
          },
          "correct_answer": "D",
          "explanation": "_ is used to match exactly one character. % is used to match zero or more characters. So, %xxx% represents any values that have xxx in any position.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 413,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The pattern used in LIKE clause must be enclosed in single quotations.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Patterns that are to be searched using LIKE clause must be enclosed in single quotes. To search for a pattern like _a%, we use LIKE ‘_a%’ in WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 414,
          "topic": "SQL Like Operator",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE pattern matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "The pattern ‘x_%_%’ matches which of the following strings?",
          "options": {
            "A": "Strings which starts with x and contain any number of characters",
            "B": "Strings which have x in any position",
            "C": "Strings which start with ‘a’ and contain at least 2 more characters",
            "D": "Strings which start with ‘a’ and contain exactly 2 characters"
          },
          "correct_answer": "C",
          "explanation": "% represents zero or more characters, whereas _ represents exactly one character. As the given pattern has two % characters, the actual string may contain zero characters in that place, whereas in the positions with _ , there must be a character. So, the given pattern should contain at least 2 more characters along with a.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-like-operator/"
        },
        {
          "id": 415,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "Which of the following terms is used to get the smallest value of the selected field?",
          "options": {
            "A": "Small( )",
            "B": "Smallest( )",
            "C": "Min( )",
            "D": "Minimum( )"
          },
          "correct_answer": "C",
          "explanation": "Min( ) is an aggregate function. This function returns the smallest value of the selected column. It is used with several different data types.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 416,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "Which function is used to find out the record with maximum value among a record set?",
          "options": {
            "A": "Maximum( )",
            "B": "Max( )",
            "C": "Large( )",
            "D": "Largest( )"
          },
          "correct_answer": "B",
          "explanation": "Max( ) is an aggregate function. Using this function, we can get the maximum value of the selected field. It can be used with different data types.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 417,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "When a date field is used in min( ) function, it returns _________",
          "options": {
            "A": "Earliest date",
            "B": "Date with latest day irrespective of month and year",
            "C": "Latest date",
            "D": "Date with earliest day irrespective of month and year"
          },
          "correct_answer": "A",
          "explanation": "MIN( ) function is used to find out the record with minimum value among a record set. It returns the lowest number, earliest date, or non-numerical value as close alphabetically to “A” as possible.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 418,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "If min( ) function is used on a field with non-numerical values, the function returns that record which is _________",
          "options": {
            "A": "Closest to alphabet Z",
            "B": "Closest to alphabet A",
            "C": "Closer to the previous field value",
            "D": "Closer to the next field value"
          },
          "correct_answer": "B",
          "explanation": "MIN(  ) function returns the smallest value of the selected column. If a non-numerical value field is used in min function, it returns the record which is closest to alphabet A.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 419,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "When a date field is used with max( ) function, it returns _________",
          "options": {
            "A": "Earliest date",
            "B": "Date with latest month irrespective of day and year",
            "C": "Latest date",
            "D": "Date with earliest month irrespective of day and year"
          },
          "correct_answer": "C",
          "explanation": "Max( ) function returns maximum value of the selected column. It returns the latest date among the given date field.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 420,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "If a non-numerical values field is used in max( ) function, it returns that record which _________",
          "options": {
            "A": "Comes first when the field values are arranged in alphabetical order",
            "B": "Closer to the previous field value",
            "C": "Comes first when the field values are arranged in reverse alphabetical order",
            "D": "Closer to the next field value"
          },
          "correct_answer": "C",
          "explanation": "MAX( ) function is used to find out the record with maximum value among a record set. It returns the record which is closest to alphabet Z when a non-numerical value field is used in max function.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 421,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "How many arguments does a MIN or MAX function can have?",
          "options": {
            "A": "Zero",
            "B": "One",
            "C": "Should specified by the user",
            "D": "Two"
          },
          "correct_answer": "B",
          "explanation": "MIN or MAX functions have only one argument. We can find maximum or minimum value of only one field by using one function.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 422,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "What is the syntax to get minimum value of a field?",
          "options": {
            "A": "Select min(column_name) from table_name Where condition(s);",
            "B": "Select minimum(column_name) from table_name Where condition(s);",
            "C": "Select column_name from table_name Where min(column_name);",
            "D": "Select min( ) column_name from table_name Where condition(s);"
          },
          "correct_answer": "A",
          "explanation": "Min( ) is used to get minimum value of selected column. Syntax for using Min( ) function:\nSELECT MIN(column_name) FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 423,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "What is the syntax to get maximum value of a field?",
          "options": {
            "A": "Select large(column_name) from table_name Where condition(s);",
            "B": "Select column_name from table_name Where max (column_name);",
            "C": "Select max(column_name) from table_name Where condition(s);",
            "D": "Select max( ) column_name from table_name Where condition(s);"
          },
          "correct_answer": "C",
          "explanation": "Max( ) function returns maximum value of the selected column. Syntax for using Max( ) function:\nSELECT MAX(column_name) FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 424,
          "topic": "SQL Min and Max Functions",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / GROUP BY and HAVING",
          "reason": "Aggregate functions used in faculty assignments.",
          "faculty_alignment": "Assignments 1, 4, 5, 8; SLA 1",
          "warning": null,
          "question": "Max and MIN functions cannot be used at a time in a single Select statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Max and min functions can be used in a single select statement. To get maximum and minimum values of a field using single select statement, this syntax is used:\nSELECT MAX (column_name), MIN(column_name)\nFROM TABLE_NAME\nWHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-min-max-functions/"
        },
        {
          "id": 425,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following constraint is used to ensure that the data present in a column of a table is not empty?",
          "options": {
            "A": "NULL",
            "B": "UNIQUE",
            "C": "NOT NULL",
            "D": "PRIMARY KEY"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the NOT NULL constraint is used to ensure that the data present in a table is not null. The UNIQUE constraint is used to ensure that a column always contains unique values. The PRIMARY KEY constraint is a mixture of both NOT NULL and UNIQUE constraint.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 426,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, a NULL value is the same as a zero value.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, a NULL value is not the same as a zero value or a value containing spaces. A null value is a field that has been left unfilled during the record creation.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 427,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, the NOT NULL constraint can be written as a table level constraint.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the NOT NULL constraint can not be written as a table level constraint. It is always written as a column level constraint because it is not necessary to fill each information. If all the data needs to be not null, then we can place the constraint after each column name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 428,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement is used to apply the NOT NULL constraint?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME (\ncolumn1 data_type NOT NULL,\ncolumn2 data_type NOT NULL,\n...\ncolumnn data_type NOT NULL);",
            "B": "🔥 Enroll for Free Data Structure Certification - November 2026\nCREATE TABLE TABLE_NAME (\nNOT NULL column1 data_type,\nNOT NULL column2 data_type,\n...\nNOT NULL columnn data_type);",
            "C": "CREATE TABLE TABLE_NAME (\ncolumn1 data_type,\ncolumn2 data_type,\n...\ncolumnn data_type,\nNOT NULL (column1, column2,..., columnn));",
            "D": "CREATE TABLE TABLE_NAME NOT NULL (\ncolumn1 data_type,\ncolumn2 data_type,\n...\ncolumnn data_type);"
          },
          "correct_answer": "A",
          "explanation": "The statement used to apply the NOT NULL constraint is –\nCREATE TABLE TABLE_NAME (\ncolumn1 data_type NOT NULL,\ncolumn2 data_type NOT NULL,\n...\ncolumnn data_type NOT NULL);\nThe NOT NULL constraint is added after the datatype of every column that does not want a null value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 429,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following combination of statements can be used to add the NOT NULL constraint to an existing column?",
          "options": {
            "A": "UPDATE TABLE_NAME\nSET column_name = <value>\nWHERE column_name IS NULL;\n&\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NOT NULL;",
            "B": "UPDATE TABLE_NAME\nSET column_name = <value>\nWHERE column_name IS NOT NULL;\n&\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type IS NULL;",
            "C": "UPDATE TABLE_NAME\nSET column_name = <value>;\n&\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NOT NULL;",
            "D": "UPDATE TABLE_NAME\nSET column_name = <value>\nWHERE column_name IS NULL;\n&\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type;"
          },
          "correct_answer": "A",
          "explanation": "The combination of statements that can be used to add the NOT NULL constraint to an existing column is –\nUPDATE TABLE_NAME\nSET column_name = <value>\nWHERE column_name IS NULL;\n&\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NOT NULL;\nFirst, we update the table so there is no NULL in any column. Then we alter the table to change the property of the column to add the NOT NULL constraint.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 430,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to remove the NOT NULL constraint from an existing column?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type IS NULL;",
            "B": "ALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NOT NULL;",
            "C": "ALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type;",
            "D": "ALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NULL;"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to remove the NOT NULL constraint from an existing column is –\nALTER TABLE TABLE_NAME\nALTER COLUMN column_name data_type NULL;\nTo remove the NOT NULL constraint we use the ALTER command the modify the constraint of the required column and change it to NULL, so that it can accept null values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 431,
          "topic": "SQL Not Null",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "NOT NULL constraint appears in table-design assignment.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following operator is used to test a column for empty values in SQL?",
          "options": {
            "A": "IS NULL",
            "B": "IS NOT NULL",
            "C": "NOT NULL",
            "D": "NULL"
          },
          "correct_answer": "A",
          "explanation": "The IS NULL operator is used to test a column for empty values in SQL. The IS NOT NULL operator is used to test a column for non-empty values. NOT NULL is a constraint in SQL that can be applied to the column so that they do not accept null values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-not-null/"
        },
        {
          "id": 432,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "IS NULL( ) function in SQL server is used to _______",
          "options": {
            "A": "Return NULL values",
            "B": "Replace NULL values",
            "C": "Check NULL values of a table",
            "D": "Insert NULL values into a table"
          },
          "correct_answer": "B",
          "explanation": "The ISNULL ( ) function has different uses in SQL Server and MySQL. In SQL server ISNULL ( ) function is used to replace the NULL values with some other value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 433,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "What is the syntax of ISNULL ( ) function used in SQL server?",
          "options": {
            "A": "SELECT column_list, ISNULL (column_name, replace_value)\nFROM TABLE_NAME;",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE ISNULL (column_name, replace_value);",
            "C": "🔥 Enroll Now for Free Python Certification - November 2026\nSELECT column_list, ISNULL (replace_value)\nFROM TABLE_NAME;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE ISNULL (replace_value);"
          },
          "correct_answer": "A",
          "explanation": "ISNULL ( ) function in SQL server is used to specify how we want to treat NULL values. Syntax of ISNULL ( ) function is:\nSELECT column_list, ISNULL (column_name, replace_value)\nFROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 434,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "In MySQL ISNULL ( ) function is used to _____",
          "options": {
            "A": "Replace the NULL values",
            "B": "Insert NULL values into a table",
            "C": "Check NULL values in a table",
            "D": "Return NULL values"
          },
          "correct_answer": "C",
          "explanation": "In MySQL, ISNULL ( ) function is used to test whether an expression is NULL or not. If the expression is NULL it returns TRUE, else FALSE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 435,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "What is the syntax of ISNULL ( ) function used in MySQL?",
          "options": {
            "A": "SELECT column_list ISNULL(column_name)\nFROM TABLE_NAME;",
            "B": "SELECT column_list\nFROM TABLE_NAME\nISNULL (column_name);",
            "C": "SELECT column_list ISNULL\nFROM TABLE_NAME;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE ISNULL (column_name);"
          },
          "correct_answer": "D",
          "explanation": "In MySQL, ISNULL ( ) function is used to test whether an expression is NULL or not. Its syntax is as follows:\nSELECT column_list\nFROM TABLE_NAME\nWHERE ISNULL (column_name);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 436,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "IFNULL ( ) function is available in which of the following environment?",
          "options": {
            "A": "MySQL, SQL Server",
            "B": "SQL server, Oracle",
            "C": "MySQL",
            "D": "SQL server"
          },
          "correct_answer": "C",
          "explanation": "IFNULL ( ) function is available in MySQL, and not in SQL Server or Oracle. This function takes two arguments.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 437,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "If the first argument of IFNULL ( ) function is NULL, the function returns the second argument.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "If the first argument of IFNULL ( ) function is not NULL, the function returns the first argument. Otherwise, the second argument is returned.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 438,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "What is the syntax of IFNULL ( ) function?",
          "options": {
            "A": "SELECT column_list\nFROM TABLE_NAME\nWHERE IFNULL (column_name, value_to_replace);",
            "B": "SELECT column_list, IFNULL(column_name, value_to_replace)\nFROM TABLE_NAME;",
            "C": "SELECT column_list IFNULL(value_to_replace)\nFROM TABLE_NAME;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE IFNULL (value_to_replace);"
          },
          "correct_answer": "B",
          "explanation": "IFNULL ( ) function is commonly used to replace NULL value with another value. Syntax of IFNULL ( ) function is as follows:\nSELECT column_list, IFNULL (column_name, value_to_replace)\nFROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 439,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "COALESCE ( ) function in SQL returns which of the following?",
          "options": {
            "A": "All non-NULL expressions among its arguments",
            "B": "All NULL expressions among its arguments",
            "C": "First NULL expression among its arguments",
            "D": "First non-NULL expression among its arguments"
          },
          "correct_answer": "D",
          "explanation": "COALESCE ( ) function in SQL returns the first non-NULL expression or value among its arguments.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 440,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "If all the expressions of a COALESCE ( ) function are evaluated to be NULL, then it returns ______",
          "options": {
            "A": "Nothing",
            "B": "Error",
            "C": "Null",
            "D": "Some default value"
          },
          "correct_answer": "C",
          "explanation": "The COALESCE ( ) function returns the first expression with non-null value from a list. If all the expressions are evaluated to be null, then the COALESCE ( ) function will return null.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 441,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "What is the syntax of COALESCE ( ) function?",
          "options": {
            "A": "SELECT column_list, COALESCE(expressions_list)\nFROM TABLE_NAME;",
            "B": "SELECT column_list\nFROM TABLE_NAME\nWHERE COALESCE (expressions_list);",
            "C": "SELECT column_list, COALESCE(expressions_list, replace_value)\nFROM TABLE_NAME;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE COALESCE (expressions_list);"
          },
          "correct_answer": "A",
          "explanation": "syntax for COALESCE function in SQL is as follows:\nSELECT column_list, COALESCE (expressions_list)\nFROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 442,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "NULLIF ( ) function returns _______ if both the arguments of the function are equal.",
          "options": {
            "A": "Zero",
            "B": "False",
            "C": "Null",
            "D": "True"
          },
          "correct_answer": "C",
          "explanation": "If the two arguments of NULLIF ( ) function are equal, then it returns NULL value. Otherwise the first argument is returned.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 443,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "How many arguments are there for NULLIF ( ) function?",
          "options": {
            "A": "Zero",
            "B": "One",
            "C": "Two",
            "D": "Any number"
          },
          "correct_answer": "C",
          "explanation": "The NULLIF ( ) function compares two expressions. If exp1 and exp2 are equal, the function returns NULL. Otherwise, it returns exp1.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 444,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "What is the syntax of NULLIF ( ) function?",
          "options": {
            "A": "SELECT column_list\nFROM TABLE_NAME\nWHERE NULLIF (exp1, exp2);",
            "B": "SELECT column_list, NULLIF (exp1, exp2)\nFROM TABLE_NAME;",
            "C": "SELECT column_list, NULLIF (exp1, exp2,exp3)\nFROM TABLE_NAME;",
            "D": "SELECT column_list\nFROM TABLE_NAME\nWHERE NULLIF (exp1);"
          },
          "correct_answer": "B",
          "explanation": "Syntax for using NULLIF ( ) function is:\nSELECT column_list, NULLIF (exp1, exp2)\nFROM TABLE_NAME;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 445,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "Expressions used in NULLIF ( ) function may or may not be of same data types.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The two expressions that will be compared using NULLIF ( ) function must be of same data type.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 446,
          "topic": "SQL Null Functions",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Prioritise IFNULL/COALESCE and NULL handling relevant to MySQL; de-prioritise SQL Server ISNULL and Oracle NVL dialect-specific questions.",
          "faculty_alignment": "Assignment 1; Day 3 SQL functions",
          "warning": null,
          "question": "NVL ( ) function is similar to which of the following function(s)?",
          "options": {
            "A": "IFNULL ( ) in MySQL, ISNULL ( ) in SQL server",
            "B": "IFNULL ( ) in MySQL, COALESCE ( ) in SQL server",
            "C": "COALESCE ( ), ISNULL ( ) in SQL server",
            "D": "COALESCE ( ), NULLIF ( ) in SQL server"
          },
          "correct_answer": "A",
          "explanation": "NVL ( ) function is used to replace NULL value with another value. It is similar to the IFNULL function in MySQL and the ISNULL function in SQL Server.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-functions/"
        },
        {
          "id": 447,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "NULL value is different from a zero value.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "NULL value is different from a zero value or a space character. NULL signifies an unknown value or a value which doesn’t exist during the creation of the record. Field with NULL value is left blank during record creation.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 448,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "NULL signifies _________",
          "options": {
            "A": "A known value",
            "B": "A random value",
            "C": "An unknown value",
            "D": "A specific value"
          },
          "correct_answer": "C",
          "explanation": "SQL NULL is the term used to represent a missing value during the creation of tuple. A field with a NULL value is similar to a field with no value. NULL signifies an unknown value or a value which doesn’t exist during the creation of the record.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 449,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "Which of the following is not correct about an SQL NULL value?",
          "options": {
            "A": "Unknown value",
            "B": "Value that is not available",
            "C": "Value that is undefined for a tuple",
            "D": "Zero value"
          },
          "correct_answer": "D",
          "explanation": "NULL value is different from a zero value or a field which contains space characters. A NULL value is used to represent a value that is unknown or unavailable at the time of record creation or undefined for a tuple.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 450,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "Is it possible to test for NULL values using comparison operators?",
          "options": {
            "A": "Yes",
            "B": "No"
          },
          "correct_answer": "B",
          "explanation": "It is not possible to test for NULL values using the comparison operators, such as =, <, or <>. A special keyword IS NULL and IS NOT NULL operators are used to test for NULL values instead of using comparison operators.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 451,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "Which keyword is used to look for NULL values?",
          "options": {
            "A": "Isnull",
            "B": "Is Null",
            "C": "Null",
            "D": "Not Null"
          },
          "correct_answer": "B",
          "explanation": "IS NULL and IS NOT NULL are comparison operators which are used to check for a NULL value. When IS NULL is used, only those tuples are selected whose specified attribute(s) is NULL. When IS NOT NULL is used, only those tuples are selected whose specified attribute(s) is NOT NULL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 452,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "NULL value can be assigned to which type of fields?",
          "options": {
            "A": "Only character fields",
            "B": "Only Numeric fields",
            "C": "Only date fields",
            "D": "Character, numeric and date fields"
          },
          "correct_answer": "D",
          "explanation": "When a field value is NULL it means that its value doesn’t exist during the creation of the tuple. A field with NULL is not considered as a zero value or a blank. It represents an unknown or undefined value. NULL value can be assigned to character, numeric and date type of fields.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 453,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "IS NULL and IS NOT NULL operators are used with which of the following?",
          "options": {
            "A": "Select",
            "B": "From",
            "C": "Where",
            "D": "Insert"
          },
          "correct_answer": "C",
          "explanation": "Comparison operators are used with Where clause. Syntax for using IS NULL and IS NOT NULL is as follows:\n\n\nSELECT column_list FROM TABLE_NAME\nWHERE column_name IS NULL/IS NOT NULL;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 454,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "Any comparison with NULL returns ______",
          "options": {
            "A": "NULL",
            "B": "A known value",
            "C": "Unknown",
            "D": "Zero"
          },
          "correct_answer": "C",
          "explanation": "A NULL value is considered to be different value from every other NULL value in the database. When a NULL value is involved in a comparison operation, the result will be UNKNOWN.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 455,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "Which of the following keyword when used with a column name  while creating  the table signifies that it should always accept an explicit value of the given column data type?",
          "options": {
            "A": "Is not null",
            "B": "Null",
            "C": "Not null",
            "D": "Is null"
          },
          "correct_answer": "C",
          "explanation": "NOT NULL signifies that a column should always accept a value of the given data type. Is not null and Is null are used as comparison operators. They are not used while creating a table. NULL is used to assign an unknown value to a field.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 456,
          "topic": "SQL Null Values",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "NULL handling appears in faculty assignments and joins.",
          "faculty_alignment": "Assignments 1, 5, 7; Day 4 joins",
          "warning": null,
          "question": "When a known value is added to a NULL value, the result is _______",
          "options": {
            "A": "Null",
            "B": "Known value",
            "C": "Zero",
            "D": "Infinity"
          },
          "correct_answer": "A",
          "explanation": "A field with a NULL value is same as a field with no value. So a NULL value can be considered as an unknown value. Adding anything to a NULL value will give a null value as result. So, when a known value is added to a NULL value, the result will be NULL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-null-values/"
        },
        {
          "id": 457,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "In SQL, operators are used with which of the following clause?",
          "options": {
            "A": "ORDER BY",
            "B": "GROUP BY",
            "C": "HAVING",
            "D": "WHERE"
          },
          "correct_answer": "D",
          "explanation": "In SQL, operators are used with the WHERE clause to perform different logical, arithmetic and comparison operations. Operators are used in SQL statements to executes multiple conditions at once.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 458,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Which of the following operators are used to perform mathematical operations?",
          "options": {
            "A": "Logical",
            "B": "Comparison",
            "C": "Arithmetic",
            "D": "Bit-Wise"
          },
          "correct_answer": "C",
          "explanation": "In SQL, the Arithmetic Operators are used to perform the mathematical operations over the operands. The Arithmetic operators include + (Addition), – (Subtraction), * (Multiplication), / (Division) and % (Modulus).",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 459,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "What will be the output of the following SQL statement?\nSELECT 100 + 50;\nSELECT 100 - 50;\nSELECT 100 * 50;\nSELECT 100 / 50;\nSELECT 100 % 50;",
          "options": {
            "A": "150\n50\n5000\n0\n2\n👉 Apply Now for Free C Certification - November 2026",
            "B": "150\n50\n5000\n0\n0",
            "C": "150\n50\n5000\n2\n0",
            "D": "150\n50\n5000\n2\n2"
          },
          "correct_answer": "C",
          "explanation": "The output for the given SQL statement would be –\n 150\n 50\n 5000\n 2\n 0\n+, -, *, /, % operations are for addition, subtraction, multiplication, division and modulus of two numbers respectively.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 460,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "The operator <> is used for which of the following comparison operation?",
          "options": {
            "A": "Not Equal to",
            "B": "Less than Equal to",
            "C": "Greater than Equal to",
            "D": "Equal to"
          },
          "correct_answer": "A",
          "explanation": "The symbol <> is used to check if values of operands are equal or not. If they are not equal then, it returns TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 461,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Which of the following operator is used to compare a value to a list of literal values that have been specified?",
          "options": {
            "A": "LIKE",
            "B": "IN",
            "C": "BETWEEN",
            "D": "ANY"
          },
          "correct_answer": "B",
          "explanation": "The IN operator is used to compare a value to a list of literal values that have been specified. If the value matches any element in the list then it returns true.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 462,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Which of the following operator is used to negate the meaning of the logical operator with which it is used?",
          "options": {
            "A": "NOT",
            "B": "OR",
            "C": "AND",
            "D": "NULL"
          },
          "correct_answer": "A",
          "explanation": "The NOT operator is used to negate the meaning of the logical operator with which it is used. If it applied before an expression that return false then the final output will be true and vice-versa.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 463,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Which of the following operator is used to search a value between a range of values where the maximum and minimum values are specified?",
          "options": {
            "A": "ALL",
            "B": "LIKE",
            "C": "IN",
            "D": "BETWEEN"
          },
          "correct_answer": "D",
          "explanation": "The BETWEEN operator is used to find a value between a range of values where the maximum and minimum values are specified and also included. If the match is found, the operator returns true.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 464,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "What will be the output of the following statement?\nIF a = 10, b = 20\nSELECT (a!=b);",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The operator used in the above statement is the not equals to operator. It returns true if the values are not equal and since a is 10 and b is 20 it returns true.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 465,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Consider the following statement and answer the question that follows:\nSELECT column_name\nFROM TABLE_NAME\nWHERE column_name BETWEEN 10 AND 20;\nWhen using the BETWEEN operator, the output range is –",
          "options": {
            "A": "Includes 10 but not 20",
            "B": "Includes 20 but not 10",
            "C": "Includes both 10 and 20",
            "D": "Does not includes 10 and 20"
          },
          "correct_answer": "C",
          "explanation": "The Between operator selects and returns values that are within the specified range. When using the BETWEEN operator, the starting and the ending value is always included. The given values could be integers, texts or dates.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 466,
          "topic": "SQL Operators",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "SQL operators support the query/filtering assignments.",
          "faculty_alignment": "Assignments 1, 4, 5; Day 1 basic queries",
          "warning": null,
          "question": "Which of the following operator is used to search for the presence of a row in a specified table.",
          "options": {
            "A": "NOT EXISTS",
            "B": "EXISTS",
            "C": "IF EXISTS",
            "D": "IF NOT EXISTS"
          },
          "correct_answer": "B",
          "explanation": "The EXISTS operator is used to search for the presence of a row in a specified table for a given condition. It returns true when value is found.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-operators/"
        },
        {
          "id": 467,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "Which SQL keyword is used to sort the data returned by a SELECT statement?",
          "options": {
            "A": "Order By",
            "B": "Group By",
            "C": "Order",
            "D": "Group"
          },
          "correct_answer": "A",
          "explanation": "Order By clause is used to sort the retrieved data in ascending or descending order. Group By clause is used to group the result-set by one or more columns. Order and Group are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 468,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "What is the default ordering of data using ORDER BY clause?",
          "options": {
            "A": "Descending order",
            "B": "Random order",
            "C": "Ascending order",
            "D": "No change"
          },
          "correct_answer": "C",
          "explanation": "The ORDER BY keyword sorts the records in ascending order by default. It can be changed by using DESC keyword, after the column name in ORDER BY clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 469,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "To sort the records in descending order, which keyword is used?",
          "options": {
            "A": "Descend",
            "B": "Increase",
            "C": "Desc",
            "D": "Order"
          },
          "correct_answer": "C",
          "explanation": "DESC keyword is used after the column name in ORDER BY clause to sort the records in descending order. Otherwise, records will be sorted in ascending order by default.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 470,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "Which one of the following sorts rows in SQL?",
          "options": {
            "A": "Sort By",
            "B": "Align By",
            "C": "Group By",
            "D": "Order By"
          },
          "correct_answer": "D",
          "explanation": "Order By is used to sort the rows of result-set in SQL. Group By clause is used to group the result-set by one or more columns. Sort By and Align By are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 471,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "The columns specified in ORDER BY clause may or may not be the columns specified in the SELECT column list.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "ORDER BY clause is used to sort the selected columns in ascending or descending order. The columns specified in ORDER BY clause may or maynot be the columns selected in the SELECT column list.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 472,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "Aliases defined in the SELECT Statement can be used in ORDER BY Clause.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Column Alias could be used in Order By clause. New name of the Attribute stated in the SELECT statement is to be used with ORDER BY clause to sort the result-set in ascending or descending order.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 473,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "Which of the following can be used with the ORDER BY clause in place of column name?",
          "options": {
            "A": "Row name",
            "B": "Table name",
            "C": "Column position in the columns list",
            "D": "Attribute name"
          },
          "correct_answer": "C",
          "explanation": "Instead of using column name in the ORDER BY clause, we can use the column position in the columns list of SELECT statement. Both of them yields the same result.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 474,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "To sort the result with respect to multiple columns, they must be separated using ____",
          "options": {
            "A": "|",
            "B": ",",
            "C": ";",
            "D": "_"
          },
          "correct_answer": "B",
          "explanation": "To sort according to multiple columns, column names must be separated using (,) operator. For example, to sort by two columns (column1 and column2), this syntax is used:\nSELECT * FROM TABLE_NAME ORDER BY column1, column2;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 475,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "When sorting the result set using the SQL ORDER BY clause, we can use ___________ attributes in a single SELECT statement.",
          "options": {
            "A": "Only Asc not Desc",
            "B": "Only Desc not Asc",
            "C": "None of Asc and Desc",
            "D": "Both Asc and Desc"
          },
          "correct_answer": "D",
          "explanation": "Both Asc and Desc attributes can be used in a single SELECT statement to sort the result-set using ORDER BY clause. Attributes with Asc keyword will be sorted in Ascending order and the Attributes with Desc keyword will be sorted in Descending order.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 476,
          "topic": "SQL Order By Clause",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "ORDER BY",
          "reason": "ORDER BY is explicit in syllabus.",
          "faculty_alignment": "Assignments 1–5; SLA 1",
          "warning": null,
          "question": "Which of the following order is valid and yields correct results in SQL?",
          "options": {
            "A": "Select, from, order by, where",
            "B": "Select, from, where, order by",
            "C": "Select, order by, from",
            "D": "From, order by, where"
          },
          "correct_answer": "B",
          "explanation": "SELECT * FROM TABLE_NAME WHERE conditions ORDER BY column_name ASC|DESC;\nThis is the correct syntax for a basic SQL statement with ORDER BY clause. Hence the order should be Select, from, where, order by.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-order-by-clause/"
        },
        {
          "id": 477,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, which of the following constraint is used to uniquely identify each record in a table?",
          "options": {
            "A": "UNIQUE",
            "B": "PRIMARY KEY",
            "C": "NOT NULL",
            "D": "CHECK"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the PRIMARY KEY constraint is used to uniquely identify each record in a table. The column on which the PRIMARY KEY constraint has been applied, cannot accept any null or duplicate value. The CHECK constraint is used to limit the value range that can be placed in a column. The UINQUE and the NOT NULL constraint restricts duplicate and null entry in a column respectively.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 478,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, a table can have more than one primary key.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, a table can have only one primary key, although the primary key can consist of more than one column. The primary key made up of combination of more than one column is called as Composite primary key.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 479,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "In SQL, the PRIMARY KEY constraint can be defined while creating a table and also while altering the table’s structure.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL, the PRIMARY KEY constraint can be defined while creating a table and also while altering the table’s structure. While creating a table we define the primary key by the help of the CREATE command. While altering the table’s structure we use the ALTER command to define the primary key.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 480,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to apply the primary key constraint to a column?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype NOT NULL PRIMARY KEY,\ncolumn2 datatype,\n...\ncolumnn datatype);",
            "B": "CREATE TABLE TABLE_NAME (\nPRIMARY KEY column1 datatype NOT NULL,\ncolumn2 datatype,\n...\ncolumnn datatype);",
            "C": "CREATE TABLE TABLE_NAME PRIMARY KEY (\ncolumn1 datatype NOT NULL,\ncolumn2 datatype,\n...\ncolumnn datatype);",
            "D": "🔥 Enroll Now for Free Python Certification - November 2026\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype NOT NULL PRIMARY KEY,\ncolumn2 datatype,\n...\ncolumnn datatype\nPRIMARY KEY (column1));"
          },
          "correct_answer": "A",
          "explanation": "The statement that can be used to apply the PRIMARY KEY constraint to a column is –\n\n\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype NOT NULL PRIMARY KEY,\ncolumn2 datatype,\n...\ncolumnn datatype);\nThe PRIMARY KEY constraint is applied after the datatype of a column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 481,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to make a composite PRIMARY KEY?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype constraint_type,\ncolumn2 datatype constraint_type,\n...\ncolumnn datatype constraint_type,\nconstraint_name PRIMARY KEY (column1, column2));",
            "B": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype constraint_type,\ncolumn2 datatype constraint_type,\n...\ncolumnn datatype constraint_type,\nCONSTRAINT constraint_name PRIMARY KEY);",
            "C": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype PRIMARY KEY,\ncolumn2 datatype PRIMARY KEY,\n...\ncolumnn datatype constraint_type);",
            "D": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype constraint_type,\ncolumn2 datatype constraint_type,\n...\ncolumnn datatype constraint_type,\nCONSTRAINT constraint_name PRIMARY KEY (column1, column2));"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to make a composite PRIMARY KEY in SQL is –\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype constraint_type,\ncolumn2 datatype constraint_type,\n...\ncolumnn datatype constraint_type,\nCONSTRAINT constraint_name PRIMARY KEY (column1, column2));\nThe columns that will be used to make the primary key are written within the PRIMARY KEY constraint. Constraint name is a name given to the primary key by the user.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 482,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to apply the PRIMARY KEY constraint to a column of an existing table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD column_name PRIMARY KEY;",
            "B": "ALTER TABLE TABLE_NAME\ncolumn_name ADD PRIMARY KEY;",
            "C": "ALTER TABLE TABLE_NAME\nADD PRIMARY KEY (column_name);",
            "D": "ALTER TABLE Persons\nPRIMARY KEY (ID);"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to apply the PRIMARY KEY constraint to a column of an existing table is –\nALTER TABLE TABLE_NAME\nADD PRIMARY KEY (column_name);\nWe use the ALTER command to add the primary key constraint to an existing table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 483,
          "topic": "SQL Primary Key",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / Primary Key",
          "reason": "Primary keys are explicit in schema design and assignments.",
          "faculty_alignment": "Assignment 6; Assignment 7; SLA 1",
          "warning": null,
          "question": "Which of the following statement can be used to drop the PRIMARY KEY constraint form a table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nDROP PRIMARY KEY;",
            "B": "ALTER TABLE TABLE_NAME\nDROP PRIMARY KEY (column_name);",
            "C": "ALTER TABLE TABLE_NAME\nDELETE PRIMARY KEY;",
            "D": "ALTER TABLE TABLE_NAME\nDELETE PRIMARY KEY (column_name);"
          },
          "correct_answer": "A",
          "explanation": "The statement that can be used to drop the primary key constraint from a table is –\nALTER TABLE Persons\nDROP PRIMARY KEY;\nWe use the ALTER plus DROP command to delete the primary key constrain from the table. There is no need to specify the column at which the constraint has been applied.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-primary-key/"
        },
        {
          "id": 484,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "The AND operator displays a record if ____________",
          "options": {
            "A": "Any of the conditions separated by AND is true",
            "B": "All the conditions separated by AND is true",
            "C": "Any of the conditions separated by AND is not true",
            "D": "All the conditions separated by AND is not true"
          },
          "correct_answer": "B",
          "explanation": "The WHERE clause can be combined with AND operator. AND operator is used to filter rows when more than one condition has to be checked. It displays a record if all the conditions separated by AND is TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 485,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "The OR operator displays a record if ________",
          "options": {
            "A": "Any of the conditions separated by OR is true",
            "B": "All the conditions separated by OR is true",
            "C": "Any of the conditions separated by OR is not true",
            "D": "All the conditions separated by OR is not true"
          },
          "correct_answer": "A",
          "explanation": "The WHERE clause can be combined with OR operator. This OR operator is used to filter records when more than one condition is given. It displays a record if any of the conditions separated by OR is TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 486,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "The NOT operator displays a record if the condition(s) is NOT FALSE.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The WHERE clause can be combined with NOT operator. The NOT operator displays a record if the condition(s) is NOT TRUE. It doesn’t display a record if the condition(s) is TRUE.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 487,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "What is the basic AND syntax?",
          "options": {
            "A": "Select * from table_name where condition1 && condition2;",
            "B": "Select * from table_name where condition1 & condition2;",
            "C": "Select *from table_name where condition1 AND condition2;",
            "D": "Select *from table_name where condition1 AND & condition2;"
          },
          "correct_answer": "C",
          "explanation": "AND, OR is used to filter records based on more than one condition. &, &&, AND & are not valid operators in SQL. So, they cannot be used with WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 488,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "Which of the following is the correct syntax to use OR operator?",
          "options": {
            "A": "Select * from table_name where condition1 OR condition2;",
            "B": "Select * from table_name where condition1 || condition2;",
            "C": "Select *from table_name where condition1 |condition2;",
            "D": "Select *from table_name where condition1 OR | condition2;"
          },
          "correct_answer": "A",
          "explanation": "AND, OR is used to filter records based on more than one condition. |, ||, OR | are not valid operators in SQL. So, they cannot be used with WHERE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 489,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "With SQL, how do you select all fields from “Customers” table whose country is NOT “Germany” and NOT “USA”?",
          "options": {
            "A": "Select * from Customers where not country=’Germany’ and country=’USA’;",
            "B": "Select * from Customers where not country=’USA’ and country=’Germany’;",
            "C": "Select * from Customers where not(country=’USA’ and country=’Germany’);",
            "D": "Select * from Customers where not(country=’USA’ or country=’Germany’);"
          },
          "correct_answer": "D",
          "explanation": "SELECT * FROM Customers WHERE NOT (country=’USA’ OR country=’Germany’);\n This query selects all columns from given table that doesn’t belong to Germany and USA, whereas the rest of the queries retrieve some other records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 490,
          "topic": "SQL And, Or, Not",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Boolean filtering is core SQL and used in assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5, 7",
          "warning": null,
          "question": "When three or more AND and OR conditions are combined, which keyword is used to replace the query simple?",
          "options": {
            "A": "Like",
            "B": "Between",
            "C": "AND OR",
            "D": "In"
          },
          "correct_answer": "D",
          "explanation": "The IN operator allows us to specify multiple values in a WHERE clause. It is used to replace when three or more AND and OR conditions are combined, to make the SQL query simple.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-and-or-not/"
        },
        {
          "id": 491,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "Which of the following statement(s) can be used in SQL to copy and insert data from one table to another table?",
          "options": {
            "A": "Copy Select",
            "B": "Select copy",
            "C": "Select Insert",
            "D": "Insert Into Select"
          },
          "correct_answer": "D",
          "explanation": "Data of a table can be copied and inserted into another table in SQL by making use of INSERT INTO SELECT statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 492,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "In an INSERT INTO SELECT statement, which of the following must match in both source and target table?",
          "options": {
            "A": "Column names",
            "B": "Column data types, names",
            "C": "Column data types and their number",
            "D": "Number of columns and their names"
          },
          "correct_answer": "C",
          "explanation": "In an INSERT INTO SELECT statement the data types in source and target tables must match and they must be same in number. If not, an error occurs.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 493,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "When an INSERT INTO SELECT statement is used, the existing records of the target table _________",
          "options": {
            "A": "Remains unaffected",
            "B": "Remains affected",
            "C": "Only some of the records are affected",
            "D": "Only some of the records re unaffected"
          },
          "correct_answer": "A",
          "explanation": "The existing records of the target table of INSERT INTO SELECT statement remain unaffected. The new records from source table will be inserted into the target table without affecting the previous records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 494,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "What is the syntax of INSERT INTO SELECT statement?",
          "options": {
            "A": "INSERT INTO SELECT * FROM source_table, target_table\nWHERE condition;",
            "B": "👉 Join Sanfoundry classes at Telegram or Youtube\nINSERT INTO target_table\nSELECT * FROM source_table\nWHERE condition;",
            "C": "INSERT INTO SELECT * FROM (source_table, target_table)\nWHERE condition;",
            "D": "SELECT * FROM source_table\nINSERT INTO target_table\nWHERE condition;"
          },
          "correct_answer": "B",
          "explanation": "Syntax for an INSERT INTO SELECT statement is as follows:\nINSERT INTO target_table\nSELECT * FROM source_table\nWHERE condition;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 495,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "The SELECT statement of an INSERT INTO SELECT statement can contain HAVING, GROUP BY and WHERE clauses.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "The SELECT statement of INSERT INTO SELECT can easily contain WHERE, GROUP BY, and HAVING clauses, as well as table joins and aliases.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 496,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "Using INSERT INTO SELECT statement it is not possible to copy only specific columns from a table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "We can copy only specific columns of a table using an INSERT INTO SELECT statement by specifying the column names in the statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 497,
          "topic": "SQL Insert Into Select",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT...SELECT and table-copy operations appear in class notes/assignments.",
          "faculty_alignment": "Day 5 advanced SQL; Assignment 6",
          "warning": null,
          "question": "Using which of the following clause(s) we can copy only specific rows from the source table in an INSERT INTO SELECT statement?",
          "options": {
            "A": "Specify",
            "B": "Specific",
            "C": "Where",
            "D": "Few"
          },
          "correct_answer": "C",
          "explanation": "To copy only specific records from the source table of INSERT INTO SELECT statement, WHERE clause is used to restrict the rows.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-select/"
        },
        {
          "id": 498,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Which clause is used along with INSERT INTO statement to add new rows to a table?",
          "options": {
            "A": "Add",
            "B": "New",
            "C": "Values",
            "D": "New value"
          },
          "correct_answer": "C",
          "explanation": "INSERT INTO TABLE_NAME VALUES (value1, value2, value3 . . .);\nThis is the syntax of an INSERT INTO statement. Add clause is used with ALTER statements to alter a table or a database. New and New value are not used in any SQL statements.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 499,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Which of the following is/are not necessary to write an INSERT INTO statement?",
          "options": {
            "A": "Values",
            "B": "Values, Table name",
            "C": "Column name, Values",
            "D": "Column name"
          },
          "correct_answer": "D",
          "explanation": "Values to be inserted are mandatory to add a new row into a table. To add a new row into a table, its name is required. If we are adding values for all the columns of the table, we do not need to specify the column names. However, we have to make sure the order of the values is in the same order as the columns in the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 500,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "How many rows can be inserted at a time using INSERT INTO statement with VALUES clause?",
          "options": {
            "A": "Any number of rows",
            "B": "Only one row",
            "C": "One to ten rows",
            "D": "One to five rows"
          },
          "correct_answer": "B",
          "explanation": "Only one row is inserted into a table with this syntax of INSERT INTO statement with VALUES clause.\n\n\n    🎓 Register Today for Free C++ Certification - November 2026\n\n\n\nINSERT INTO TABLE_NAME VALUES (value1, value2, value3 . . .);\n To add n number of rows into a table, this statement should be written n times.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 501,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Which of the following value(s) must be enclosed within single quotations when used with VALUES clause?",
          "options": {
            "A": "Character and date values",
            "B": "Numeric values",
            "C": "Numeric and character values",
            "D": "Date and Numeric values"
          },
          "correct_answer": "A",
          "explanation": "Character and date values are to be enclosed within single quotation marks, whereas numeric values are not to be enclosed within quotations when used with VALUES clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 502,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "NULL values can be inserted into a table using INSERT INTO statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "If a column is not defined as NOT NULL, then NULL value can be assigned to it using INSERT INTO statement. To insert a NULL value into 3rd column of table dept:\n INSERT INTO dept VALUES (7, ‘xxx’, NULL);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 503,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Rows can be copied from one table to another table using INSERT INTO statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "We can use the INSERT INTO statement to add rows to a table where the values are derived from existing tables. In place of the VALUES clause, we use a subquery. Number of columns in the INSERT INTO clause should match with those in the subquery.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 504,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Consider the following relation:\nInstructor (Id, Name, City, Country);\nUsing SQL, how to insert a row with Id number 5, name Ravi.",
          "options": {
            "A": "Insert into Instructor values (5, ‘Ravi’);",
            "B": "Insert into Instructor values (5, Ravi);",
            "C": "Insert into Instructor values (‘5’, ‘Ravi’);",
            "D": "Insert into Instructor (Id, Name) values (5, ‘Ravi’);"
          },
          "correct_answer": "D",
          "explanation": "Character and date values are to be enclosed within single quotation marks, whereas numeric values are not to be enclosed within quotations. When column names are not specified then all the attributes values must be written with VALUES clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 505,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Which of the following statements can be used with INSERT INTO statement?",
          "options": {
            "A": "Update",
            "B": "Select",
            "C": "Modify",
            "D": "Add"
          },
          "correct_answer": "B",
          "explanation": "SELECT statement is used with INSERT INTO statement to copy rows from one table and insert them into another table. SELECT statement is used to select data from a table and INSERT INTO statement to insert in a different table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 506,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Which of the following is/are omitted from INSERT INTO statement when SELECT statement is used with it?",
          "options": {
            "A": "Values clause",
            "B": "Table name",
            "C": "Values clause, Table name",
            "D": "Column names"
          },
          "correct_answer": "A",
          "explanation": "INSERT INTO TABLE_NAME (column_list) SELECT statement;\n This syntax is used when INSERT INTO is used with SELECT statement. This statement is used to copy rows from one table and insert them into another table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 507,
          "topic": "SQL Insert Into Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "INSERT is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Day 6 DML; Assignment 6",
          "warning": null,
          "question": "Using SQL, how can we copy all the data of a table and insert into in a different table if both the tables has same attributes?",
          "options": {
            "A": "INSERT INTO first VALUES SELECT * FROM second;",
            "B": "INSERT INTO first SELECT * FROM second;",
            "C": "INSERT INTO first COPY SELECT * FROM second;",
            "D": "INSERT INTO first FROM second;"
          },
          "correct_answer": "B",
          "explanation": "SELECT statement is used to copy the data from one table and INSERT INTO statement to insert in a different table. VALUES clause is omitted from INSERT INTO statement when SELECT statement is used with it. COPY clause is NOT VALID in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-insert-into-statement/"
        },
        {
          "id": 508,
          "topic": "SQL Right Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Table1 RIGHT JOIN Table2 returns _____",
          "options": {
            "A": "All the records from Table2 and matched records from Table1",
            "B": "Records with matching values in both tables",
            "C": "All the records from Table1 and matched records from Table2",
            "D": "All records when there is a match in either Table1 or Table2"
          },
          "correct_answer": "A",
          "explanation": "The RIGHT JOIN keyword returns all the records from the right table and the matched records from the left table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-right-join/"
        },
        {
          "id": 509,
          "topic": "SQL Right Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "If no match exists on the left side of RIGHT JOIN, the result-set will contain ____",
          "options": {
            "A": "Blank",
            "B": "Zero",
            "C": "Null",
            "D": "Random value"
          },
          "correct_answer": "C",
          "explanation": "The rows for which there is no matching row on the left side table of RIGHT JOIN, the result-set will contain null.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-right-join/"
        },
        {
          "id": 510,
          "topic": "SQL Right Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Which of the following sets represents table1 RIGHT JOIN table2?",
          "options": {
            "A": "Table1 U Table2",
            "B": "Table1",
            "C": "Table2",
            "D": "Table1 ∩ Table2"
          },
          "correct_answer": "C",
          "explanation": "RIGHT JOIN returns all the records from the table2 irrespective of the matching condition(s) and the matched records from the table1.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-right-join/"
        },
        {
          "id": 511,
          "topic": "SQL Right Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Outer Joins",
          "reason": "Outer joins are explicit in syllabus.",
          "faculty_alignment": "Assignment 7; Views & Indexes",
          "warning": null,
          "question": "Instead of RIGHT JOIN, which of the following can be used to produce same result?",
          "options": {
            "A": "Inner join",
            "B": "Right inner join",
            "C": "Right outer join",
            "D": "Join"
          },
          "correct_answer": "C",
          "explanation": "RIGHT JOIN returns all records from the right table, and the matched records from the left table. We can use RIGHT OUTER JOIN instead of RIGHT JOIN; both of them produce same result.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-right-join/"
        },
        {
          "id": 512,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "Which keyword is used in conjunction with DISTINCT keyword?",
          "options": {
            "A": "From",
            "B": "Select",
            "C": "Where",
            "D": "Group By"
          },
          "correct_answer": "B",
          "explanation": "The distinct keyword is used in conjunction with select keyword. When we use distinct keyword, only the unique values are fetched.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 513,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "Which SQL statement is used to return only different values?",
          "options": {
            "A": "Select Different",
            "B": "Select Unique",
            "C": "Select Distinct",
            "D": "Select"
          },
          "correct_answer": "C",
          "explanation": "The SELECT DISTINCT statement is used to return only distinct values. The SELECT statement returns data without eliminating duplicates, whereas the rest are not SQL statements.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 514,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "A column of a database table must not contain duplicate values.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Inside a database table, a column may contain many duplicate values. It is not mandatory that every column should have a unique value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 515,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "Which of the following SQL statement selects only unique values from ‘section’ column of table ‘school’?",
          "options": {
            "A": "SELECT section FROM school;",
            "B": "SELECT * FROM school;",
            "C": "SELECT DISTINCT section FROM school;",
            "D": "SELECT ALL section FROM school;"
          },
          "correct_answer": "C",
          "explanation": "Distinct keyword along with Select clause returns only distinct values. All keyword when used with select clause returns all values without eliminating the duplicates. * Results all the fields of a table without eliminating duplicates.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 516,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "When more than one expression is provided in the DISTINCT clause, the query will retrieve _________",
          "options": {
            "A": "Unique values for any one of the expression",
            "B": "Unique combinations for the expressions listed",
            "C": "All values for any one of the expression",
            "D": "All combinations for the expressions listed"
          },
          "correct_answer": "B",
          "explanation": "When only one expression is provided in the DISTINCT clause, the query will return the unique values for that expression. When more than one expression is provided in the DISTINCT clause, the query will retrieve unique combinations for the expressions listed.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 517,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "In SQL, the DISTINCT clause ignores NULL values.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the DISTINCT clause doesn’t ignore NULL values. So when using the DISTINCT clause in SQL statement, our result set will include NULL as a distinct value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 518,
          "topic": "SQL Select Distinct",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / SELECT queries",
          "reason": "SELECT constructs and DISTINCT appear in Worker assignment.",
          "faculty_alignment": "Assignment 2; Day 1 queries",
          "warning": null,
          "question": "DISTINCT clause considers NULL as ________",
          "options": {
            "A": "Zero value",
            "B": "A unique value",
            "C": "Some default value",
            "D": "A space character"
          },
          "correct_answer": "B",
          "explanation": "A field with a NULL value is the one that has been left during record creation. SQL Distinct clause treats NULL as a unique value. So when using the DISTINCT clause in SQL statement, our result set will include NULL as a distinct value.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-distinct/"
        },
        {
          "id": 519,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "SELECT statement retrieves _________",
          "options": {
            "A": "Records from only one table",
            "B": "Records from one or more tables",
            "C": "Data from only one column",
            "D": "Data from only one row"
          },
          "correct_answer": "B",
          "explanation": "Select statement selects records from one or more tables. Fetched records may contain any number of rows and columns based on other statements.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 520,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which character in the select clause denotes “ALL ATTRIBUTES”?",
          "options": {
            "A": "+",
            "B": "%",
            "C": "*",
            "D": "_"
          },
          "correct_answer": "C",
          "explanation": "SELECT * is used to retrieve all columns of a table. SELECT * FROM t_name. This statement retrieves all the fields of the table t_name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 521,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Where the data retrieved by SELECT statement is stored?",
          "options": {
            "A": "Data table",
            "B": "Data set",
            "C": "Result set",
            "D": "Database table"
          },
          "correct_answer": "C",
          "explanation": "The SELECT statement is used to retrieve data from a database. The data retrieved by a SELECT clause is stored in a result table, called as result-set.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 522,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "What is the syntax for SELECT statement?",
          "options": {
            "A": "SELECT table_name FROM database_name;",
            "B": "SELECT column_list FROM table_name;",
            "C": "SELECT row_list FROM table_name;",
            "D": "SELECT record_list FROM table_name;"
          },
          "correct_answer": "B",
          "explanation": "Column_list includes one or more columns from which data is retrieved.\nSELECT column_list FROM TABLE_NAME;\nretrieves all columns of column_list from table_name.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 523,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which statement(s) are mandatory in a simple SQL SELECT statement?",
          "options": {
            "A": "Select, Where",
            "B": "Select, OrderBy",
            "C": "Select, From",
            "D": "Select, GroupBy"
          },
          "correct_answer": "C",
          "explanation": "From statement contains the table name from which the required columns are to be retrieved. So it is necessary along with Select statement, whereas others are optional.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 524,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "To create a simple SQL SELECT statement, which of the following are necessary?",
          "options": {
            "A": "Column name, Row name",
            "B": "Column name, Table name",
            "C": "Row name, Table name",
            "D": "Column name"
          },
          "correct_answer": "B",
          "explanation": "We must specify a list of column names and the table names of those columns to create a simple SQL SELECT statement. These column names are also known as fields, attributes.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 525,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Arithmetic expressions cannot be used in Select clause.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Whenever we need to perform calculations in SQL statement, we can use arithmetic expressions in Select clause. An expression can contain column names, numeric numbers and arithmetic operators.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 526,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "SELECT clause corresponds to __________",
          "options": {
            "A": "Projection operation of Relational algebra",
            "B": "Selection operation of Relational algebra",
            "C": "Cartesian Product of Relational algebra",
            "D": "Join operation of Relational algebra"
          },
          "correct_answer": "A",
          "explanation": "Select corresponds to Projection, from corresponds to Selection and where corresponds to cartesian product operations of Relational algebra.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 527,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Consider the relation:\nInstructor (Id, Salary);\nWhich of the following query retrieves the total salary of all instructors after receiving a bonus of 200/-?",
          "options": {
            "A": "Select Salary From instructor",
            "B": "Select Salary+200 From instructor+200",
            "C": "Select Salary+200 From instructor",
            "D": "Select Salary From instructor+200"
          },
          "correct_answer": "C",
          "explanation": "An expression can contain column names, numeric numbers and arithmetic operators. It cannot be used with table name. “Select Salary+200 From instructor” returns Salary from Instructor table which is increased by an amount of 200/-.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 528,
          "topic": "SQL Select Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL, explicitly in syllabus.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "SELECT eliminates duplicate rows by default.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Select retrieves data without eliminating duplicates.\nA key word named distinct has to be used along with select statement to eliminate duplicates.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-statement/"
        },
        {
          "id": 529,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Which clause is used in SQL to fetch limited number of records from a table?",
          "options": {
            "A": "Select",
            "B": "Select limit",
            "C": "Select top",
            "D": "Top"
          },
          "correct_answer": "C",
          "explanation": "The SELECT TOP clause is useful on large tables with thousands of records. Using this clause, we can fetch limited number of rows from a database table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 530,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Mysql supports which of the following clause to select a limited number of rows from a table?",
          "options": {
            "A": "Select",
            "B": "Select top",
            "C": "Top",
            "D": "Limit"
          },
          "correct_answer": "D",
          "explanation": "Not all the database systems supports SELECT TOP clause. It can be used in SQL. Mysql supports the LIMIT clause to fetch a limited number of records from the database table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 531,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Which clause is used by ORACLE to fetch limited number of rows from a database?",
          "options": {
            "A": "Select top",
            "B": "Limit",
            "C": "Rownum",
            "D": "Top"
          },
          "correct_answer": "C",
          "explanation": "SELECT TOP clause is used in SQL to fetch limited records from a table. MYSQL supports LIMIT clause and ORACLE uses ROWNUM clause to select limited number of rows from a database table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 532,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "ROWNUM clause is used with which of the following clause?",
          "options": {
            "A": "Select",
            "B": "From",
            "C": "Where",
            "D": "Select top"
          },
          "correct_answer": "C",
          "explanation": "ROWNUM clause is used in WHERE clause of a SELECT statement. Syntax for using ROWNUM clause:\nSELECT column_list FROM TABLE_NAME WHERE ROWNUM<=VALUE;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 533,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "SELECT TOP clause is used in the place of __________",
          "options": {
            "A": "Select",
            "B": "From",
            "C": "Where",
            "D": "Values"
          },
          "correct_answer": "A",
          "explanation": "SELECT TOP clause is used to fetch a limited number of records from a database. It is used in the place of SELECT clause in a SELECT statement. Its syntax is as follow:\n\n\n    ⚡ Hurry! Secure Your Free Cyber Security Certification - November 2026\n\n\n\nSELECT top VALUE | percent column_list FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 534,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Select top retrieves records from original database table not from the result table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Select top clause is used to select records from the result table not from the original database table. Result table contains the records of database table which satisfies the conditions provided in the where clause of select statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 535,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Which clause is used with SELECT TOP statement to retrieve given percentage of record from a table of the database?",
          "options": {
            "A": "%",
            "B": "Percentage",
            "C": "Percent",
            "D": "%%"
          },
          "correct_answer": "C",
          "explanation": "Percent clause is used with SELECT TOP to select given percentage of records from the result table. Syntax for such statement is:\nSELECT top NUMBER Percent column_list FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 536,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Which of the following query retrieves top 30 percent records with all attributes of a table named student?",
          "options": {
            "A": "Select top 30 percentage * from student;",
            "B": "Select top percent 30 * from student;",
            "C": "Select 30 percent * from student;",
            "D": "Select top 30 percent * from student;"
          },
          "correct_answer": "D",
          "explanation": "Select top clause should be used to retrieve top records of a table. Syntax for using percent with select clause is:\nSELECT top VALUE Percent column_list FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 537,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "The TOP clause of SELECT TOP statement specifies _____________",
          "options": {
            "A": "Number of fields to be returned",
            "B": "Number of columns to be returned",
            "C": "Number of rows to be returned",
            "D": "Number of tables to be returned"
          },
          "correct_answer": "C",
          "explanation": "The SQL SELECT TOP Statement is used to select top records of a table. The top clause specifies the number of rows that are to be returned.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 538,
          "topic": "SQL Select Top Clause",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL SELECT / limiting results",
          "reason": "Keep the top-N concept; TOP/ROWNUM/LIMIT syntax is database-specific. Faculty materials emphasise ranking/window functions.",
          "faculty_alignment": "Assignment 2; Day 5 ranking/window functions",
          "warning": null,
          "question": "Where the number or percentage of rows is specified in a SELECT TOP statement?",
          "options": {
            "A": "After top keyword",
            "B": "Before top keyword",
            "C": "After percent keyword",
            "D": "Before percent keyword"
          },
          "correct_answer": "A",
          "explanation": "In a SELECT TOP statement, number or percentage of rows is specified after the TOP keyword. Syntax of SELECT TOP statement:\nSELECT top VALUE | percent column_list FROM TABLE_NAME WHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-select-top-clause/"
        },
        {
          "id": 539,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "What is a SELF JOIN?",
          "options": {
            "A": "It is an irregular join",
            "B": "It is used to join a table to itself",
            "C": "It is used to join a table to other tables",
            "D": "It cannot be done in SQL"
          },
          "correct_answer": "B",
          "explanation": "A SELF JOIN is a regular join, but the table is joined with itself. It is used to join a table to itself as if the table were two tables.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 540,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "Self joins are used to ________",
          "options": {
            "A": "Compare values in a column with other values in the same column of the same table",
            "B": "Compare values in a column with other values in the same column of the other table",
            "C": "Compare values in a column with other values in the other column of the other table",
            "D": "Compare values in a column with some given value"
          },
          "correct_answer": "A",
          "explanation": "SELF JOIN is used to join or compare a table with itself. SQL self joins are used to compare values of a column with values of same or another column in the same table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 541,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "SELF JOIN is a keyword in SQL.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "There is no keyword as SELF JOIN in SQL. But it is referred when a table joins with itself.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 542,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "Which of the following is necessary for a SELF JOIN in SQL?",
          "options": {
            "A": "Join",
            "B": "Alias",
            "C": "Order by",
            "D": "Group by"
          },
          "correct_answer": "B",
          "explanation": "We must use a table alias to distinguish the left table from the right table of the same table in a single query when we perform a SELF JOIN.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 543,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "What is the syntax for self join?",
          "options": {
            "A": "📌 Limited Seats! Register Now - Free AI-ML Certification (November 2026)\nSELECT column_list\nFROM table1 SELF JOIN table1\nWHERE condition(s);",
            "B": "SELECT column_list\nFROM table1 JOIN table1\nWHERE condition(s);",
            "C": "SELECT column_list\nFROM table1 T SELF JOIN table1 S\nWHERE condition(s);",
            "D": "SELECT column_list\nFROM table1 T JOIN table1 S\nWHERE condition(s);"
          },
          "correct_answer": "D",
          "explanation": "SELF JOIN is not a keyword in SQL. As we refer to the same table twice in a SELF JOIN, we have to use table aliases. Syntax of a self join is:\nSELECT column_list\nFROM TABLE A (INNER | OUTER) JOIN TABLE B\nWHERE condition(s);",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 544,
          "topic": "SQL Self Join",
          "category": "KEEP",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Relational DB modelling / SQL Joins",
          "reason": "Employee-manager self-join is in faculty assignments.",
          "faculty_alignment": "Assignment 7 manager-name join",
          "warning": null,
          "question": "To construct a SELF JOIN, how many times the same table is selected by a SELECT statement?",
          "options": {
            "A": "Only once",
            "B": "Twice",
            "C": "More than two times",
            "D": "Thrice"
          },
          "correct_answer": "B",
          "explanation": "To construct a self join, we select the same table twice by using the SELECT statement with an inner join or outer join clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-self-join/"
        },
        {
          "id": 545,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "Which of the following statement(s) copies data from one table into a new table?",
          "options": {
            "A": "Copy",
            "B": "Select",
            "C": "Select into",
            "D": "Copy Paste"
          },
          "correct_answer": "C",
          "explanation": "With SQL, we can copy information from one table into another. The SELECT INTO statement copies records from one table and inserts them into a new table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 546,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "How many columns can be copied using a SELECT INTO statement?",
          "options": {
            "A": "Only one",
            "B": "Two",
            "C": "Three",
            "D": "Any number of columns"
          },
          "correct_answer": "D",
          "explanation": "We can copy any number of columns i.e. one or more columns using a SELECT INTO statement. The number of columns and data type of column must be same if the new table is already created.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 547,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "WHERE clause must be used along with a SELECT INTO statement.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "WHERE condition is optional to use along with SELECT INTO Clause. Using WHERE clause limits the number of records to copy from a table based on the given conditions.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 548,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "SELECT INTO statement cannot be used in conjunction with which of the following clause(s)?",
          "options": {
            "A": "For",
            "B": "In",
            "C": "Like",
            "D": "Between"
          },
          "correct_answer": "A",
          "explanation": "SELECT INTO is used to create a new table and copy data from one or more existing tables into that new table. The general syntax is:\nSELECT column1, column2, …\nINTO new_table\nFROM existing_table\nWHERE condition;\n📌 Limited Seats! Register Now - Free AI-ML Certification (November 2026)\nIN, LIKE and BETWEEN can be used with WHERE clause. FOR is generally NOT valid in the context of SELECT INTO.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 549,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "If the condition in WHERE clause of a SELECT INTO statement returns no data, then ______",
          "options": {
            "A": "New table will not be created",
            "B": "New table with some random values will be created",
            "C": "An empty new table will be created",
            "D": "New table with default values will be created"
          },
          "correct_answer": "C",
          "explanation": "We can use WHERE clause in a SELECT INTO statement to select specific rows of a table. If the condition in the WHERE clause returns no data then an empty new table will be created.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 550,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "Which of the following can be done using a SELECT INTO statement?",
          "options": {
            "A": "Deleting a table",
            "B": "Creating a table",
            "C": "Updating a table",
            "D": "Dropping a table"
          },
          "correct_answer": "B",
          "explanation": "SELECT INTO statement can be used to create a new, empty table using the schema of another. We should use the WHERE clause which doesn’t return any data to create a new table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 551,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "Which of the following statement(s) create a new empty table?",
          "options": {
            "A": "SELECT * INTO newtable\nFROM oldtable;",
            "B": "SELECT * INTO newtable\nFROM oldtable\nWHERE 3=4;",
            "C": "SELECT * INTO newtable\nFROM oldtable\nWHERE condition (TRUE FOR at least once);",
            "D": "SELECT * INTO newtable\nFROM oldtable\nWHERE FALSE;"
          },
          "correct_answer": "B",
          "explanation": "SELECT INTO statement can be used to create a new empty table. We need to add a WHERE clause that causes the query to return no data.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 552,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "When using the SELECT INTO statement in SQL, the new table must not already exist.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "New table used in SELECT INTO statement should be the one which doesn’t exist before. If it does already exist, the SELECT INTO statement will raise an error.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 553,
          "topic": "SQL Subqueries",
          "category": "KEEP",
          "syllabus_topic": "6. SQL Subqueries",
          "syllabus_detail": "Advanced Subqueries",
          "reason": "Actual questions mainly cover SELECT INTO/table cloning; this aligns with class notes and Assignment 6. Do not mistake this Sanfoundry label for all subquery coverage.",
          "faculty_alignment": "Day 5 advanced SQL; Assignments 6–7",
          "warning": null,
          "question": "We can ________ some of the columns within new table rather than using them from old table of a SELECT INTO statement.",
          "options": {
            "A": "Delete",
            "B": "Modify",
            "C": "Rename",
            "D": "Insert"
          },
          "correct_answer": "C",
          "explanation": "The new table will be created with the column names and data types as defined in the old table in a SELECT INTO statement. We can rename the new column names using the AS clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-subqueries/"
        },
        {
          "id": 554,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "SQL keywords are case sensitive.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "SQL keywords are NOT case sensitive.\n“SELECT * FROM table_name;” is same as “select * from table_name;”. Both upper and lower case letters can be used in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 555,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which character is used to separate SQL statements in database systems?",
          "options": {
            "A": ":",
            "B": ";",
            "C": "_",
            "D": "%"
          },
          "correct_answer": "B",
          "explanation": "A SQL statement begins with a SQL keyword and ends with a semicolon. Using semicolon is the standard way to separate each SQL statement in database systems.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 556,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which of the following SQL command(s) retrieves information from a Database?",
          "options": {
            "A": "Update",
            "B": "Extract",
            "C": "Select",
            "D": "Retrieve"
          },
          "correct_answer": "C",
          "explanation": "Update modifies the data which exists in a database. Select retrieves data from a database. Extract and Retrieve are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 557,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Using which command one can delete existing data from database without deleting the table?",
          "options": {
            "A": "Drop",
            "B": "Delete",
            "C": "Remove",
            "D": "Collapse"
          },
          "correct_answer": "B",
          "explanation": "Drop deletes a table. Delete command is used to delete data from a database without deleting the table. Remove and Collapse are not SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 558,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which SQL command is used to modify data in a Database?",
          "options": {
            "A": "Modify",
            "B": "Change",
            "C": "Save",
            "D": "Update"
          },
          "correct_answer": "D",
          "explanation": "Update command updates data in a database. Modify, Change and Save are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 559,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "To insert new data into a database, which of the following SQL command is used?",
          "options": {
            "A": "Insert",
            "B": "Insert Into",
            "C": "Update",
            "D": "Add New"
          },
          "correct_answer": "B",
          "explanation": "Insert Into is used to insert new data into a database. Update modifies the existing data in a Database, whereas the rest are not SQL statements.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 560,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which command is used to eliminate a table from a database?",
          "options": {
            "A": "Drop",
            "B": "Delete",
            "C": "Remove",
            "D": "Eliminate"
          },
          "correct_answer": "A",
          "explanation": "Drop deletes a table. Delete command deletes the contents of a table. Remove and Eliminate are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 561,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which of the following is used to modify an existing table?",
          "options": {
            "A": "Alter",
            "B": "Alter Table",
            "C": "Modify",
            "D": "Update"
          },
          "correct_answer": "B",
          "explanation": "Alter Table is used to modify an existing table. Update modifies data of a table. Modify and Alter is not SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 562,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "To create a new table, which of the following command is used?",
          "options": {
            "A": "Create",
            "B": "Create New",
            "C": "Create Table",
            "D": "Create New Table"
          },
          "correct_answer": "C",
          "explanation": "Create Table creates a new table in the database, whereas the rest are not SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 563,
          "topic": "SQL Syntax",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Introduction to SQL / SQL Constructs",
          "reason": "Foundational SQL syntax.",
          "faculty_alignment": "All SQL notes/assignments",
          "warning": null,
          "question": "Which of the following is a valid SQL command for an Index?",
          "options": {
            "A": "Create Index",
            "B": "Change Index",
            "C": "Add Index",
            "D": "Remove Index"
          },
          "correct_answer": "A",
          "explanation": "Create Index is used to create a relational Index on a database table, whereas the rest are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-syntax/"
        },
        {
          "id": 564,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Which operator is used to combine the result-set of two or more SELECT statements?",
          "options": {
            "A": "Combine",
            "B": "Merge",
            "C": "Union",
            "D": "Join"
          },
          "correct_answer": "C",
          "explanation": "The UNION operator is used to combine the result-sets of two or more SELECT queries into a single result set removing the duplicate rows.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 565,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "By default, the UNION operator selects ______",
          "options": {
            "A": "Only duplicate values",
            "B": "Only distinct values",
            "C": "Only null values",
            "D": "All values"
          },
          "correct_answer": "B",
          "explanation": "The UNION operator is used to combine the result-set of two or more SELECT statements. By default it selects only distinct values.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 566,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "How many result-sets can be combined using UNION operator?",
          "options": {
            "A": "Two",
            "B": "One",
            "C": "Two or more",
            "D": "Three or more"
          },
          "correct_answer": "C",
          "explanation": "The SQL UNION operator is used to combine the results of two or more SELECT statements without returning any duplicate rows.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 567,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Each SELECT statement within UNION can have any number of columns.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "The number of the columns must be the same in all SELECT statements whose result-sets are to be combined using UNION operator.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 568,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "The columns in each SELECT statement with UNION operator should be in ____________",
          "options": {
            "A": "Random order",
            "B": "Reverse order",
            "C": "Same order",
            "D": "Numeric data type"
          },
          "correct_answer": "C",
          "explanation": "The order of the columns must be the same in all SELECT statements with UNION operator between them.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 569,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Data types of the corresponding columns of SELECT statements with UNION operator _______",
          "options": {
            "A": "Must be different",
            "B": "Must be similar",
            "C": "Can be similar or different",
            "D": "Should not belong to date data type"
          },
          "correct_answer": "B",
          "explanation": "The columns listed in the SELECT statements with UNION operator must have similar data types. Those columns can also have date data type.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 570,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Which of the following conditions are required to make a set of SELECT statements as union-compatible?",
          "options": {
            "A": "Columns must be in same order, same number and same data type",
            "B": "Columns must be in same order, any number and same data type",
            "C": "Columns must be in any order, same number and same data type",
            "D": "Columns must be in same order and same number"
          },
          "correct_answer": "A",
          "explanation": "A set of SELECT statements are said to be union-compatible only when the fields used in those statements are in same order, same number and same data type.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 571,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "To fetch duplicate values along with the distinct values while combining the result-sets of two or more tables, which operator is used?",
          "options": {
            "A": "Union",
            "B": "All",
            "C": "Union All",
            "D": "Union Duplicates"
          },
          "correct_answer": "C",
          "explanation": "The UNION operation eliminates the duplicate rows from the combined result set, by default. To fetch the duplicate values too UNION ALL must be used in the place of UNION.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 572,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Column names must be same in the SELECT statements with UNION operator.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Column names in the SELECT statements with UNION operator can be different but their data types must be same.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 573,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "Column names in the resultset of a UNION are ______",
          "options": {
            "A": "The column names of the first SELECT statement",
            "B": "The column names of the last SELECT statement",
            "C": "The combination of column names of first and last SELECT statements",
            "D": "The column names of any of the SELECT statements"
          },
          "correct_answer": "A",
          "explanation": "The column names in the result-set are usually the column names in the first SELECT statement of the UNION.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 574,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "What is the basic syntax used in SQL to combine the result-set of two tables?",
          "options": {
            "A": "Select column_list From table1 Select column_list From table2 UNION;",
            "B": "Select column_list From table1 UNION Select column_list From table2;",
            "C": "Select column_list UNION Select column_list From table1;",
            "D": "Select column_list From table1 COMBINE Select column_list From table2;"
          },
          "correct_answer": "B",
          "explanation": "To combine the result-sets of two or more tables, UNION operator is used. Basic syntax of a UNION operator is:\nSELECT column_list FROM table1 UNION SELECT column_list FROM table2;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 575,
          "topic": "SQL Union",
          "category": "SELECTIVE",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs",
          "reason": "Useful set operation, but UNION is not explicitly named in syllabus or clearly emphasised in supplied assignments.",
          "faculty_alignment": "No explicit UNION assignment; adjacent set-operation concept",
          "warning": null,
          "question": "What is the basic syntax of a UNION ALL operator?",
          "options": {
            "A": "Select column_list From table1 Select column_list From table2 UNION ALL;",
            "B": "Select column_list UNION ALL Select column_list From table1;",
            "C": "Select column_list From table1 ALL Select column_list From table2;",
            "D": "Select column_list From table1 UNION ALL Select column_list From table2;"
          },
          "correct_answer": "D",
          "explanation": "The UNION ALL operator is used to combine the results of two or more SELECT statements including duplicate rows. Basic syntax of a UNION ALL operator is:\nSELECT column_list FROM table1 UNION ALL SELECT column_list FROM TABLE;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-union/"
        },
        {
          "id": 576,
          "topic": "SQL Unique Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "In SQL, which of the following constraint can be used to ensure that all the values in a column are different?",
          "options": {
            "A": "PRIMARY KEY",
            "B": "UNIQUE",
            "C": "NOT NULL",
            "D": "CANDIDATE KEY"
          },
          "correct_answer": "B",
          "explanation": "In SQL, the UNIQUE constraint can be used to ensure that all the values in a column are different. The NOT NULL constraint is used to reject any null values in columns. The PRIMARY KEY is a combination of both UNIQUE and NOT NULL constraints.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-unique-constraint/"
        },
        {
          "id": 577,
          "topic": "SQL Unique Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to apply the UNIQUE constraint to a column?",
          "options": {
            "A": "CREATE TABLE TABLE_NAME (\ncolumn1 datatype UNIQUE,\ncolumn2 datatype UNIQUE,\n...\ncolumnn datatype UNIQUE));",
            "B": "CREATE TABLE TABLE_NAME (\nUNIQUE column1 datatype,\nUNIQUE column2 datatype,\n...\nUNIQUE columnn datatype));",
            "C": "CREATE TABLE TABLE_NAME UNIQUE (\ncolumn1 datatype,\ncolumn2 datatype,\n...\ncolumnn datatype));",
            "D": "⚡ Claim Your Free Java Certification - November 2026\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype,\ncolumn2 datatype,\n...\ncolumnn datatype,\nUNIQUE (column1, column2, …,columnn));"
          },
          "correct_answer": "A",
          "explanation": "The statement that can be used to apply the UNIQUE constraint to a column is –\n\n\nCREATE TABLE TABLE_NAME (\ncolumn1 datatype UNIQUE,\ncolumn2 datatype UNIQUE,\n...\ncolumnn datatype UNIQUE));\nThe UNIQUE constraint is applied after the datatype of a column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-unique-constraint/"
        },
        {
          "id": 578,
          "topic": "SQL Unique Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to apply the UNIQUE constraint to a column of an existing table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD (column_name) UNIQUE;",
            "B": "ALTER TABLE TABLE_NAME\nUNIQUE (column_name);",
            "C": "ALTER TABLE TABLE_NAME\nADD UNIQUE (column_name);",
            "D": "ALTER TABLE TABLE_NAME\nADD UNIQUE;"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to apply the UNIQUE constraint to a column of an existing table is –\nALTER TABLE TABLE_NAME\nADD UNIQUE (column_name);\nTo add the UNIQUE constraint to a column of an existing column, it must be used with the ALTER command.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-unique-constraint/"
        },
        {
          "id": 579,
          "topic": "SQL Unique Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to apply the UNIQUE constraint to multiple columns of an existing table?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT UNIQUE (column1,column2,…,columnn);",
            "B": "ALTER TABLE TABLE_NAME\nADD constraint_name UNIQUE (column1, column2,…,columnn);",
            "C": "ALTER TABLE TABLE_NAME\nCONSTRAINT constraint_name UNIQUE (column1,column2,…,columnn);",
            "D": "ALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name UNIQUE (column1,column2,…,columnn);"
          },
          "correct_answer": "D",
          "explanation": "The statement that can be used to apply the UNIQUE constraint to multiple columns of an existing table is –\nALTER TABLE TABLE_NAME\nADD CONSTRAINT constraint_name UNIQUE (column1,column2,…,columnn);\nThe syntax is almost same as for adding the constraint to a single column. We just have to add a constraint name, that is a name given to the constraint by the user. The name can be anything and is not specific.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-unique-constraint/"
        },
        {
          "id": 580,
          "topic": "SQL Unique Constraint",
          "category": "KEEP",
          "syllabus_topic": "8. Database Design, Data Types & Constraints",
          "syllabus_detail": "Designing Database Schema / constraints",
          "reason": "UNIQUE constraint is directly in Assignment 6.",
          "faculty_alignment": "Assignment 6",
          "warning": null,
          "question": "Which of the following statement can be used to delete the UNIQUE constraint from a column?",
          "options": {
            "A": "ALTER TABLE TABLE_NAME\nDROP constraint_name;",
            "B": "ALTER TABLE TABLE_NAME\nDROP INDEX constraint_name;",
            "C": "ALTER TABLE TABLE_NAME\nDROP INDEX UNIQUE;",
            "D": "ALTER TABLE TABLE_NAME\nDROP UNIQUE;"
          },
          "correct_answer": "B",
          "explanation": "The statement that can be used to delete the UNIQUE constraint from a column is –\nALTER TABLE TABLE_NAME\nDROP INDEX constraint_name;\nThis statement will delete the UNIQUE constraint from any column that has it.\n\nIn the statement INDEX keyword is used only in case of MySQL and for rest, the CONSTRAINT keyword is used.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-unique-constraint/"
        },
        {
          "id": 581,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "Which clause is used in an update statement to modify only specific records of a table?",
          "options": {
            "A": "Modify",
            "B": "Where",
            "C": "Specific",
            "D": "Set"
          },
          "correct_answer": "B",
          "explanation": "To modify the existing records of a table, UPDATE statement is used. Using UPDATE one or more records can be modified at a time. Where clause is used to update only specific records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 582,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "Which of the following provides a correct syntax for UPDATE statement?",
          "options": {
            "A": "Update table_name Set column1=value1, column2=value2, … Where condition(s);",
            "B": "Update table_name Modify column1=value1, column2=value2, … Where condition(s);",
            "C": "Update table_name Alter column1=value1, column2=value2, … Where condition(s);",
            "D": "Update table_name Values column1=value1, column2=value2, … Where condition(s);"
          },
          "correct_answer": "A",
          "explanation": "SET is used along with UPDATE in an Update statement to assign the values for respective fields. Where clause can also be used with update statement to modify only specific records.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 583,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "To update all the records of a table, which of the following clause is omitted from an UPDATE statement?",
          "options": {
            "A": "Update",
            "B": "Set",
            "C": "Where",
            "D": "Values"
          },
          "correct_answer": "C",
          "explanation": "Set and Update clause are mandatory for an UPDATE statement. Where clause is optional. If only specific records of a table are to be modified, where clause is used. Otherwise, it is omitted from an UPDATE statement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 584,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "SET keyword in an UPDATE statement is used to ______",
          "options": {
            "A": "Modify records in a database",
            "B": "Modify a particular record in a database",
            "C": "Set new values to the particular column",
            "D": "Set new values to all the columns of a table"
          },
          "correct_answer": "C",
          "explanation": "Update statement is used to modify records in a database. Set keyword is used to set new values to the particular column(s) of the table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 585,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "Using UPDATE statement, multiple tables can be updated at a time.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Using Update only a single statement can be updated at a time. To update n number of tables Update statement has to be written n number of times.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 586,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "How many columns can be modified using a single UPDATE statement?",
          "options": {
            "A": "One column",
            "B": "One to five columns",
            "C": "One to ten columns",
            "D": "Any number of columns"
          },
          "correct_answer": "D",
          "explanation": "Using UPDATE command any number of columns can be updated at a time. Single columns as well as multiple columns can be updated using UPDATE statement as per our requirement.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 587,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "Which of the following clause is used with SQL UPDATE statement when updating a table with data from another table?",
          "options": {
            "A": "Select",
            "B": "Where",
            "C": "Copy",
            "D": "From"
          },
          "correct_answer": "A",
          "explanation": "Select clause is used to update a table with data from another table. Syntax for such statement is:\n\n\nUPDATE TABLE_NAME\nSET column_list = (SELECT statement)\nWHERE condition;",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 588,
          "topic": "SQL Update Statement",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "DML Commands",
          "reason": "UPDATE is explicit DML and repeatedly assigned.",
          "faculty_alignment": "Assignments 6–7; Day 6 DML",
          "warning": null,
          "question": "UPDATE is a _________ command.",
          "options": {
            "A": "Data definition language",
            "B": "Data manipulation language",
            "C": "Data control language",
            "D": "Transaction control language"
          },
          "correct_answer": "B",
          "explanation": "Statements used for managing data within schema objects comes under DML commands. DELETE is a DML command.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-update-statement/"
        },
        {
          "id": 589,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "In SQL, views can also call as which of the following?",
          "options": {
            "A": "Simple Table",
            "B": "Virtual Table",
            "C": "Actual Table",
            "D": "Duplicate Table"
          },
          "correct_answer": "B",
          "explanation": "In SQL, Views are the virtual tables that can be created from one or more tables. A view can contain all rows or some selected rows of a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 590,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement is true about views in SQL?",
          "options": {
            "A": "We can insert and delete rows in a view",
            "B": "We cannot insert and delete rows in a view",
            "C": "We can insert but not delete rows in a view",
            "D": "We can delete but not insert rows in a view"
          },
          "correct_answer": "A",
          "explanation": "In SQL, we can insert and delete rows in a view. We can perform insert and update in an updatable view only. Read-only views are not updatable.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 591,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following creates a virtual relation for storing a query?",
          "options": {
            "A": "Table",
            "B": "Function",
            "C": "View",
            "D": "Database"
          },
          "correct_answer": "C",
          "explanation": "In SQL, a view is only a virtual representation of an already existed table or a view in the database. A view is a relation that is not part of the logical model but can be seen by the user as a virtual relation.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 592,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "In SQL, which of the following statement can be used to create a view?",
          "options": {
            "A": "CREATE VIEW view_name AS\nFROM TABLE_NAME WHERE condition;",
            "B": "👉 Join Sanfoundry classes at Telegram or Youtube\nCREATE VIEW view_name AS\ncolumn1, column2..... columnn\nTABLE_NAME WHERE condition;",
            "C": "CREATE VIEW view_name (\nSELECT column1, column2..... columnn\nFROM TABLE_NAME WHERE condition);",
            "D": "CREATE VIEW view_name AS\nSELECT column1, column2..... columnn\nFROM TABLE_NAME WHERE condition;"
          },
          "correct_answer": "D",
          "explanation": "In SQL, a view can be created using the following statement –\nCREATE VIEW view_name AS\nSELECT column1, column2..... columnn\nFROM TABLE_NAME WHERE condition;\nThe CREATE command is used with the VIEW keyword. Column that are to be included in the view are stated along with their table name and a condition if needed.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 593,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following can be used to ensure that all the update and insert satisfy the conditions in the view definition?",
          "options": {
            "A": "WITH",
            "B": "WITH CHECK",
            "C": "CHECK",
            "D": "IF"
          },
          "correct_answer": "B",
          "explanation": "The WITH CHECK option is a CREATE VIEW statement option. The purpose of the WITH CHECK option is to ensure that all UPDATE and INSERTs satisfy the conditions in the view definition.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 594,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "All NOT NULL columns from the base table must be included in the view in order for the INSERT command to function.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In order for the INSERT command to function and enter rows in a view, all the NOT NULL columns from the base table must be included in the view while creating it.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 595,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "In SQL, we can insert rows in a view in a similar way as we insert them in a table.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "In SQL, we can insert rows in a view in a similar way as we insert them in a table i.e. by using the INSERT command. But all the NOT NULL columns from the base table must be included in the view in order for the INSERT command to function.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 596,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement can be used to delete rows from a view?",
          "options": {
            "A": "DELETE FROM View_name\nFROM TABLE_NAME WHERE condition;",
            "B": "DELETE FROM View_name\nWHERE condition;",
            "C": "DROP FROM View_name\nFROM TABLE_NAME WHERE condition;",
            "D": "DROP FROM View_name\nWHERE condition;"
          },
          "correct_answer": "B",
          "explanation": "The statement that can be used to delete rows from a view is –\nDELETE FROM View_name\n WHERE condition;\nThe DELETE command is used in a similar way in which we used to delete any row from a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 597,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "Which of the following statement can be used to drop a view in SQL?",
          "options": {
            "A": "DELETE VIEW view_name FROM Table_name;",
            "B": "DROP VIEW view_name FROM Table_name;",
            "C": "DROP VIEW view_name;",
            "D": "DELETE VIEW view_name;"
          },
          "correct_answer": "C",
          "explanation": "The statement that can be used to drop a view in SQL is –\nDROP VIEW view_name;\nIt is similar to dropping a table from a database in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 598,
          "topic": "SQL Views",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Views",
          "reason": "Views are explicit in syllabus and have a dedicated faculty assignment.",
          "faculty_alignment": "Views & Indexes assignment; syllabus Session 7",
          "warning": null,
          "question": "On the basis of number of tables constituted, a view can be classified in how many categories?",
          "options": {
            "A": "2",
            "B": "3",
            "C": "4",
            "D": "5"
          },
          "correct_answer": "A",
          "explanation": "There are 2 types of Views in SQL: Simple View and Complex View. Simple views constitute only of a single base table. Complex views can be constituted from more than one base table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-views/"
        },
        {
          "id": 599,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "WHERE clause is used to filter ________",
          "options": {
            "A": "Rows",
            "B": "Groups",
            "C": "Columns",
            "D": "Tables"
          },
          "correct_answer": "A",
          "explanation": "HAVING is used to filter groups. WHERE is used to filter rows. It filters out the unwanted data records. SELECT is used to filter columns.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 600,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which of the following is used to extract only those records that fulfill a specified condition?",
          "options": {
            "A": "Select",
            "B": "Where",
            "C": "From",
            "D": "Having"
          },
          "correct_answer": "B",
          "explanation": "Select is used to retrieve data records. Where clause filters rows of a table and extracts only those records that fulfill the given condition. From is used to identify a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 601,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "WHERE keyword can be used to filter data by matching patterns.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Whenever we want to retrieve the data that resembles a pattern, WHERE clause can be used. This pattern can use ‘_’ and ‘%’ characters along with alphabets.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 602,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which of the following is the correct order of clauses in a basic SQL statement?",
          "options": {
            "A": "Select, Where",
            "B": "Select, Where, From",
            "C": "Select, From, Where",
            "D": "From, Where"
          },
          "correct_answer": "C",
          "explanation": "SELECT column_list FROM TABLE_NAME WHERE condition;\nThis is the syntax for a basic SQL statement, which retrieves the columns named in column_list based on the given condition.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 603,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "WHERE clause cannot be used with _________",
          "options": {
            "A": "Select",
            "B": "Delete",
            "C": "Drop",
            "D": "Update"
          },
          "correct_answer": "C",
          "explanation": "Where clause can be used along with Select, Delete Update commands. But it cannot be used with Drop command to delete a table.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 604,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Operators can be used in WHERE clause.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "A",
          "explanation": "Operators can be used in WHERE clause to filter the data based on the required conditions. These operators are mostly used to compare the values of the fields with other fields or with other constants.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 605,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which of the following requires single quotes in SQL?",
          "options": {
            "A": "Numeric fields",
            "B": "Clauses",
            "C": "Text fields",
            "D": "Columns"
          },
          "correct_answer": "C",
          "explanation": "SQL requires single quotes around text values. However, numeric fields, Clauses and Columns should not be enclosed in any quotes.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 606,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which operator in the where clause signifies “Not Equal”?",
          "options": {
            "A": "<>",
            "B": "<!>",
            "C": "<_>",
            "D": "<->"
          },
          "correct_answer": "A",
          "explanation": "<> denotes not equal. In some versions of SQL “!=” is also used for not equal. Rests of the options are not valid operators and therefore, they are not used in SQL.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 607,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which operator is used to search for a pattern?",
          "options": {
            "A": "Between",
            "B": "In",
            "C": "Like",
            "D": "="
          },
          "correct_answer": "C",
          "explanation": "Like operator is used to search for a pattern. Between is used to search for values in an inclusive range. In is used to specify multiple possible values for a column. = is used to determine whether the value is equal or not.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 608,
          "topic": "SQL Where Clause",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "SQL Constructs / filtering",
          "reason": "Fundamental filtering used throughout assignments.",
          "faculty_alignment": "All SQL assignments",
          "warning": null,
          "question": "Which of the following is not a valid operator and is not used in WHERE clause?",
          "options": {
            "A": "=",
            "B": "==",
            "C": "<=",
            "D": ">="
          },
          "correct_answer": "B",
          "explanation": "= denotes equal to. <= denotes less than or equal to. >= denotes greater than or equal to. == is not a valid operator in SQL and it is not used with where clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-where-clause/"
        },
        {
          "id": 609,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "A wildcard operator is used to _________ any other character(s) in a string.",
          "options": {
            "A": "Substitute",
            "B": "Eliminate",
            "C": "Modify",
            "D": "Shift"
          },
          "correct_answer": "A",
          "explanation": "Wildcard operators are used as an alternate for one or more than one characters while searching. A wildcard operator is used to substitute other characters in a string.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 610,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Wildcard characters are used with which of the following operators?",
          "options": {
            "A": "Between",
            "B": "Range",
            "C": "In",
            "D": "Like"
          },
          "correct_answer": "D",
          "explanation": "Wildcard characters are used with the SQL LIKE operator. This LIKE operator is used in a WHERE clause to search for a specified pattern in a column.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 611,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "How many wildcards can be used with LIKE operator in SQL?",
          "options": {
            "A": "One",
            "B": "Two",
            "C": "Three",
            "D": "Four"
          },
          "correct_answer": "B",
          "explanation": "Two wildcards can be used with the LIKE operator. They are % and _. % represents zero or more characters. _ represents a single character.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 612,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which of the following wildcards can be used in MS Access and SQL server?",
          "options": {
            "A": "[char list], [ _ ]",
            "B": "[char list], [!char list]",
            "C": "[%], [ _ ]",
            "D": "[^char list], [ _ ]"
          },
          "correct_answer": "B",
          "explanation": "MS Access uses a question mark (?) instead of underscore (_). MS Access and SQL server can use [char list] and [!char list] wildcards.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 613,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "[char list] wildcard represents _______",
          "options": {
            "A": "Set of characters only",
            "B": "Range of characters only",
            "C": "Sets and ranges of characters to match",
            "D": "Domain of characters to match"
          },
          "correct_answer": "C",
          "explanation": "[char list] defines sets and ranges of characters to match. It is used to fetch matching set or range of characters specified inside the brackets.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 614,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "[^ char list] is used to fetch ___________ set or range of characters specified in the char list.",
          "options": {
            "A": "Matching",
            "B": "Non Matching",
            "C": "Deleted",
            "D": "Updated"
          },
          "correct_answer": "B",
          "explanation": "[^ char list] and [! char list] represents same wildcard. It is used to fetch non-matching set or range of characters specified in the char list inside the brackets.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 615,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which of the following is a correct syntax that uses [char list] wildcard?",
          "options": {
            "A": "SELECT *\nFROM TABLE_NAME\nWHERE  column_name LIKE ‘[xyz]%’;",
            "B": "SELECT *\nFROM TABLE_NAME\nWHERE  column_name LIKE ‘[xyz]’’%’;",
            "C": "SELECT *\nFROM TABLE_NAME\nWHERE  column_name LIKE _‘[x-z]’;",
            "D": "SELECT *\nFROM TABLE_NAME\nWHERE  column_name LIKE ‘[xyz]’%;"
          },
          "correct_answer": "A",
          "explanation": "[char list] is a wildcard, in which char list Specifies ranges of characters and sets to match. To match a pattern using LIKE operator, the whole pattern must be enclosed in single quotations.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 616,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Which of the following pattern is used to search for a string which doesn’t starts with letters from m to r and ends with at least 2 characters?",
          "options": {
            "A": "[m-r]%%",
            "B": "[!m-r]_ _ %",
            "C": "[^mr]_ %",
            "D": "[m-r]_ % _"
          },
          "correct_answer": "B",
          "explanation": "Using this [!char list], we can specify more than one character in ‘char list’ to search and not to match them in a given string. _ Character matches with exactly one character. % character matches one or more characters.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 617,
          "topic": "SQL Wildcards",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "LIKE pattern matching",
          "reason": "LIKE/wildcard matching is explicit in syllabus and assignments.",
          "faculty_alignment": "Assignments 1, 2, 4, 5; syllabus Session 4",
          "warning": null,
          "question": "Wildcards cannot be used as a substitute for special characters i.e. characters other than alphabets.",
          "options": {
            "A": "True",
            "B": "False"
          },
          "correct_answer": "B",
          "explanation": "Wildcards can be used in the place of special characters. To search for a string with value ‘a@bc’, we can use ‘a%bc’ or ‘a_bc’ patterns in LIKE clause.",
          "source_url": "https://www.sanfoundry.com/sql-questions-answers-sql-wildcards/"
        },
        {
          "id": 618,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "SQL meaning / introductory concept",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "What does SQL stand for?",
          "options": {
            "A": "Structured Query Language",
            "B": "Standard Query Language",
            "C": "Simple Query Language",
            "D": "Sequential Query Language"
          },
          "correct_answer": "A",
          "explanation": "SQL stands for Structured Query Language. It is a domain-specific language used to manage and manipulate relational databases. SQL provides a standardized way to interact with databases, enabling users to perform tasks such as querying, updating, and managing the structure of databases.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 619,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "SQL keywords / syntax",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following is NOT a valid keyword in SQL?",
          "options": {
            "A": "SELECT",
            "B": "DELETE",
            "C": "WHERE",
            "D": "INCLUDE"
          },
          "correct_answer": "D",
          "explanation": "In SQL, “INCLUDE” is not a valid keyword. The correct keywords are:\nSELECT: Used to retrieve data from one or more tables.\nDELETE: Used to delete records from a table.\nWHERE: Used to filter the results based on a specified condition.\n“INCLUDE” is not a standard SQL keyword. SQL keywords are reserved words that have specific meanings in the language, and “INCLUDE” is not recognized as one of them in standard SQL syntax.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 620,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "SQL comparison operators",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following operators is used to compare two values in SQL?",
          "options": {
            "A": "+",
            "B": "=",
            "C": "<>",
            "D": "&"
          },
          "correct_answer": "C",
          "explanation": "The <> operator in SQL is used to compare two values for inequality. It checks if the values on both sides are different.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 621,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "DISTINCT; also in Worker assignment",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "What is the purpose of the SQL keyword “DISTINCT” in a SELECT statement?",
          "options": {
            "A": "To retrieve unique values from a column",
            "B": "To filter NULL values",
            "C": "To delete duplicate records",
            "D": "To sort the result set"
          },
          "correct_answer": "A",
          "explanation": "The DISTINCT keyword is used to retrieve unique values from a specified column in a SELECT query.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 622,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "SELECTIVE",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "General SQL capability; lower priority",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following tasks CANNOT be accomplished using SQL?",
          "options": {
            "A": "Creating and modifying database structures",
            "B": "Writing complex algorithms for data analysis",
            "C": "Retrieving specific data from a database",
            "D": "Adding new data to a database"
          },
          "correct_answer": "B",
          "explanation": "SQL is not primarily designed for writing complex algorithms for data analysis. Other languages like Python or R are more suitable for this task.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 623,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "REMOVE",
          "syllabus_topic": "Out of Scope",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "Underlying theoretical basis is not an explicit course/assignment focus",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following is basis for SQL?",
          "options": {
            "A": "SQL Server",
            "B": "DBMS",
            "C": "RDBMS",
            "D": "Oracle"
          },
          "correct_answer": "C",
          "explanation": "RDBMS is the basis for SQL, and for all modern database systems such as MS SQL Server, IBM DB2, Oracle, MySQL and Microsoft Access.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 624,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "SELECT query structure",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which statement(s) are mandatory in a simple SQL SELECT statement?",
          "options": {
            "A": "Select, From",
            "B": "Select, OrderBy",
            "C": "Select, Where",
            "D": "Select, GroupBy"
          },
          "correct_answer": "A",
          "explanation": "From statement contains the table name from which the required columns are to be retrieved. So it is necessary along with Select statement, whereas others are optional.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 625,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "SELECTIVE",
          "syllabus_topic": "5. SQL Joins",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "Default join behaviour; less important than explicit join types",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following is a default join type?",
          "options": {
            "A": "Right join",
            "B": "Left join",
            "C": "Inner join",
            "D": "Outer join"
          },
          "correct_answer": "C",
          "explanation": "Inner join Selects records that have matching values in both the tables. It’s the default join type, so if we just type JOIN without specifying any other conditions, an INNER JOIN will be used.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 626,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "2. SQL Fundamentals (DDL, DML, DCL)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "CREATE DATABASE / DDL",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following command is used to create a database in SQL?",
          "options": {
            "A": "MAKE",
            "B": "CREATE",
            "C": "INSERT",
            "D": "DEVELOP"
          },
          "correct_answer": "B",
          "explanation": "The CREATE command is used to create a database in SQL. The same command can be used to create a table within the database. The INSERT command is used to insert data inside the tables.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 627,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "10. Views",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "Views are in syllabus",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following statement is true about views in SQL?",
          "options": {
            "A": "We can delete but not insert rows in a view",
            "B": "We cannot insert and delete rows in a view",
            "C": "We can insert but not delete rows in a view",
            "D": "We can insert and delete rows in a view"
          },
          "correct_answer": "D",
          "explanation": "In SQL, we can insert and delete rows in a view. We can perform insert and update in an updatable view only. Read-only views are not updatable.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 628,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "PL/SQL introduction",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "What is the full form of PL in PL/SQL?",
          "options": {
            "A": "Programming Language",
            "B": "Programming Logic",
            "C": "Procedural Language",
            "D": "Procedural Logic"
          },
          "correct_answer": "C",
          "explanation": "PL in PL/SQL stands for Procedural Language. It is a block structured language that enables developers to combine the power of SQL with procedural language.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 629,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "11. PL-SQL & Triggers",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "Triggers are in syllabus",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following can execute a trigger in PL/SQL?",
          "options": {
            "A": "Oracle server",
            "B": "User",
            "C": "Both user and oracle server",
            "D": "Neither user nor oracle server"
          },
          "correct_answer": "A",
          "explanation": "A trigger is automatically executed by the Oracle server whenever a specified event occurs. A user can create and store a trigger and specify when to execute it but the its execution is done by the server automatically.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 630,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "7. SQL Constructs & Functions",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "DISTINCT query",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which of the following SQL statement selects only unique values from ‘section’ column of table ‘school’?",
          "options": {
            "A": "SELECT section FROM school;",
            "B": "SELECT DISTINCT section FROM school;",
            "C": "SELECT * FROM school;",
            "D": "SELECT ALL section FROM school;"
          },
          "correct_answer": "B",
          "explanation": "Distinct keyword along with Select clause returns only distinct values. All keyword when used with select clause returns all values without eliminating the duplicates. * Results all the fields of a table without eliminating duplicates.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 631,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "ORDER BY",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "Which SQL keyword is used to sort the data returned by a SELECT statement?",
          "options": {
            "A": "Group",
            "B": "Order",
            "C": "Group By",
            "D": "Order By"
          },
          "correct_answer": "D",
          "explanation": "Order By clause is used to sort the retrieved data in ascending or descending order. Group By clause is used to group the result-set by one or more columns. Order and Group are not valid SQL commands.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        },
        {
          "id": 632,
          "topic": "SQL MCQ (Multiple Choice Questions)",
          "category": "KEEP",
          "syllabus_topic": "4. SQL Clauses (GROUP BY, HAVING, ORDER BY, LIKE)",
          "syllabus_detail": "Mixed questions; inspect individual question",
          "reason": "LIKE",
          "faculty_alignment": "Mixed; individually screened",
          "warning": null,
          "question": "The SQL LIKE operator is used in which of the following clause?",
          "options": {
            "A": "Having",
            "B": "Select",
            "C": "Where",
            "D": "Group by"
          },
          "correct_answer": "C",
          "explanation": "The SQL LIKE operator is used in a WHERE clause to search for a specified pattern in a column.",
          "source_url": "https://www.sanfoundry.com/1000-sql-questions-answers/"
        }
      ]
    },
    {
      "id": "hadoop",
      "name": "Hadoop",
      "has_priority_categories": false,
      "has_syllabus_mapping": false,
      "total_questions": 30,
      "counts": {
        "KEEP": 30,
        "SELECTIVE": 0,
        "REMOVE": 0
      },
      "topics": [
        {
          "topic": "Avro",
          "count": 10,
          "category": "KEEP",
          "reason": "",
          "faculty_alignment": ""
        },
        {
          "topic": "Mapreduce Development",
          "count": 10,
          "category": "KEEP",
          "reason": "",
          "faculty_alignment": ""
        },
        {
          "topic": "YARN",
          "count": 10,
          "category": "KEEP",
          "reason": "",
          "faculty_alignment": ""
        }
      ],
      "syllabus_markdown": "",
      "questions": [
        {
          "id": 1,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Avro schemas are defined with _____",
          "options": {
            "A": "JSON",
            "B": "XML",
            "C": "JAVA",
            "D": "All of the mentioned"
          },
          "correct_answer": "A",
          "explanation": "JSON implementation facilitates implementation in languages that already have JSON libraries.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 2,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the correct statement.",
          "options": {
            "A": "Avro provides functionality similar to systems such as Thrift",
            "B": "When Avro is used in RPC, the client and server exchange data in the connection handshake",
            "C": "Apache Avro, Avro, Apache, and the Avro and Apache logos are trademarks of The Java Foundation",
            "D": "None of the mentioned"
          },
          "correct_answer": "A",
          "explanation": "Avro differs from these systems in the fundamental aspects like untagged data.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 3,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "__________ facilitates construction of generic data-processing systems and languages.",
          "options": {
            "A": "Untagged data",
            "B": "Dynamic typing",
            "C": "No manually-assigned field IDs",
            "D": "All of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Avro does not require that code be generated.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 4,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "With ______ we can store data and read it easily with various programming languages.",
          "options": {
            "A": "Thrift",
            "B": "Protocol Buffers",
            "C": "Avro",
            "D": "None of the mentioned"
          },
          "correct_answer": "C",
          "explanation": "Avro is optimized to minimize the disk space needed by our data and it is flexible.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 5,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the wrong statement.",
          "options": {
            "A": "Apache Avro™ is a data serialization system",
            "B": "Avro provides simple integration with dynamic languages",
            "C": "Avro provides rich data structures",
            "D": "All of the mentioned"
          },
          "correct_answer": "D",
          "explanation": "Code generation is not required to read or write data files nor to use or implement RPC protocols in Avro.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 6,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "________ are a way of encoding structured data in an efficient yet extensible format.",
          "options": {
            "A": "Thrift",
            "B": "Protocol Buffers",
            "C": "Avro",
            "D": "None of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Google uses Protocol Buffers for almost all of its internal RPC protocols and file formats.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 7,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Thrift resolves possible conflicts through _________ of the field.",
          "options": {
            "A": "Name",
            "B": "Static number",
            "C": "UID",
            "D": "None of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Avro resolves possible conflicts through the name of the field.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 8,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Avro is said to be the future _______ layer of Hadoop.",
          "options": {
            "A": "RMC",
            "B": "RPC",
            "C": "RDC",
            "D": "All of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "When Avro is used in RPC, the client and server exchange schemas in the connection handshake.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 9,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "When using reflection to automatically build our schemas without code generation, we need to configure Avro using?",
          "options": {
            "A": "AvroJob.Reflect(jConf);",
            "B": "AvroJob.setReflect(jConf);",
            "C": "Job.setReflect(jConf);",
            "D": "None of the mentioned"
          },
          "correct_answer": "C",
          "explanation": "For strongly typed languages like Java, it also provides a generation code layer, including RPC services code generation.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 10,
          "topic": "Avro",
          "category": "KEEP",
          "syllabus_topic": "Avro",
          "syllabus_detail": "Avro",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "We can declare the schema of our data either in a ______ file.",
          "options": {
            "A": "JSON",
            "B": "XML",
            "C": "SQL",
            "D": "R"
          },
          "correct_answer": "C",
          "explanation": "Schema can be declared using an IDL or simply through Java beans by using reflection-based schema building.",
          "source_url": "tests/fixtures/avro_1.html"
        },
        {
          "id": 11,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The Mapper implementation processes one line at a time via _________ method.",
          "options": {
            "A": "map",
            "B": "reduce",
            "C": "mapper",
            "D": "reducer"
          },
          "correct_answer": "A",
          "explanation": "The Mapper outputs are sorted and then partitioned per Reducer.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 12,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the correct statement.",
          "options": {
            "A": "Mapper maps input key/value pairs to a set of intermediate key/value pairs",
            "B": "Applications typically implement the Mapper and Reducer interfaces to provide the map and reduce methods",
            "C": "Mapper and Reducer interfaces form the core of the job",
            "D": "None of the mentioned"
          },
          "correct_answer": "D",
          "explanation": "The transformed intermediate records do not need to be of the same type as the input records.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 13,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The Hadoop MapReduce framework spawns one map task for each __________ generated by the InputFormat for the job.",
          "options": {
            "A": "OutputSplit",
            "B": "InputSplit",
            "C": "InputSplitStream",
            "D": "All of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Mapper implementations are passed the JobConf for the job via the JobConfigurable.configure(JobConf) method and override it to initialize themselves.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 14,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Users can control which keys (and hence records) go to which Reducer by implementing a custom?",
          "options": {
            "A": "Partitioner",
            "B": "OutputSplit",
            "C": "Reporter",
            "D": "All of the mentioned"
          },
          "correct_answer": "A",
          "explanation": "Users can control the grouping by specifying a Comparator via JobConf.setOutputKeyComparatorClass(Class).",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 15,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the wrong statement.",
          "options": {
            "A": "The Mapper outputs are sorted and then partitioned per Reducer",
            "B": "The total number of partitions is the same as the number of reduce tasks for the job",
            "C": "The intermediate, sorted outputs are always stored in a simple (key-len, key, value-len, value) format",
            "D": "None of the mentioned"
          },
          "correct_answer": "D",
          "explanation": "All intermediate values associated with a given output key are subsequently grouped by the framework, and passed to the Reducer(s) to determine the final output.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 16,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Applications can use the ____________ to report progress and set application-level status messages.",
          "options": {
            "A": "Partitioner",
            "B": "OutputSplit",
            "C": "Reporter",
            "D": "All of the mentioned"
          },
          "correct_answer": "C",
          "explanation": "Reporter is also used to update Counters, or just indicate that they are alive.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 17,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The right level of parallelism for maps seems to be around _________ maps per-node.",
          "options": {
            "A": "1-10",
            "B": "10-100",
            "C": "100-150",
            "D": "150-200"
          },
          "correct_answer": "B",
          "explanation": "Task setup takes a while, so it is best if the maps take at least a minute to execute.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 18,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The number of reduces for the job is set by the user via _________",
          "options": {
            "A": "JobConf.setNumTasks(int)",
            "B": "JobConf.setNumReduceTasks(int)",
            "C": "JobConf.setNumMapTasks(int)",
            "D": "All of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Reducer has 3 primary phases: shuffle, sort and reduce.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 19,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The framework groups Reducer inputs by key in _________ stage.",
          "options": {
            "A": "sort",
            "B": "shuffle",
            "C": "reduce",
            "D": "none of the mentioned"
          },
          "correct_answer": "A",
          "explanation": "The shuffle and sort phases occur simultaneously; while map-outputs are being fetched they are merged.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 20,
          "topic": "Mapreduce Development",
          "category": "KEEP",
          "syllabus_topic": "Mapreduce Development",
          "syllabus_detail": "Mapreduce Development",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The output of the reduce task is typically written to the FileSystem via _____________",
          "options": {
            "A": "OutputCollector.collect",
            "B": "OutputCollector.get",
            "C": "OutputCollector.receive",
            "D": "OutputCollector.put"
          },
          "correct_answer": "A",
          "explanation": "The output of the Reducer is not sorted.",
          "source_url": "tests/fixtures/mapreduce_dev_2.html"
        },
        {
          "id": 21,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Yarn commands are invoked by the ________ script.",
          "options": {
            "A": "hive",
            "B": "bin",
            "C": "hadoop",
            "D": "home"
          },
          "correct_answer": "B",
          "explanation": "Running the yarn script without any arguments prints the description for all commands.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 22,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the correct statement.",
          "options": {
            "A": "Each queue has strict ACLs which controls which users can submit applications to individual queues",
            "B": "Hierarchy of queues is supported to ensure resources are shared among the sub-queues of an organization",
            "C": "Queues are allocated a fraction of the capacity of the grid in the sense that a certain capacity of resources will be at their disposal",
            "D": "All of the mentioned"
          },
          "correct_answer": "D",
          "explanation": "All applications submitted to a queue will have access to the capacity allocated to the queue.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 23,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The queue definitions and properties such as ________ ACLs can be changed, at runtime.",
          "options": {
            "A": "tolerant",
            "B": "capacity",
            "C": "speed",
            "D": "all of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "Administrators can add additional queues at runtime, but queues cannot be deleted at runtime.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 24,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The CapacityScheduler has a predefined queue called _________",
          "options": {
            "A": "domain",
            "B": "root",
            "C": "rear",
            "D": "all of the mentioned"
          },
          "correct_answer": "B",
          "explanation": "All queues in the system are children of the root queue.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 25,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Point out the wrong statement.",
          "options": {
            "A": "The multiple of the queue capacity which can be configured to allow a single user to acquire more resources",
            "B": "Changing queue properties and adding new queues is very simple",
            "C": "Queues cannot be deleted, only addition of new queues is supported",
            "D": "None of the mentioned"
          },
          "correct_answer": "D",
          "explanation": "You need to edit conf/capacity-scheduler.xml and run yarn rmadmin -refreshQueues for changing queue properties.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 26,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "The updated queue configuration should be a valid one i.e. queue-capacity at each level should be equal to _________",
          "options": {
            "A": "50%",
            "B": "75%",
            "C": "100%",
            "D": "0%"
          },
          "correct_answer": "C",
          "explanation": "Queues cannot be deleted, only the addition of new queues is supported.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 27,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Users can bundle their Yarn code in a _________ file and execute it using jar command.",
          "options": {
            "A": "java",
            "B": "jar",
            "C": "C code",
            "D": "xml"
          },
          "correct_answer": "B",
          "explanation": "Usage: yarn jar <jar> [mainClass] args…",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 28,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Which of the following command is used to dump the log container?",
          "options": {
            "A": "logs",
            "B": "log",
            "C": "dump",
            "D": "all of the mentioned"
          },
          "correct_answer": "A",
          "explanation": "Usage: yarn logs -applicationId <application ID> <options>.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 29,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "__________ will clear the RMStateStore and is useful if past applications are no longer needed.",
          "options": {
            "A": "-format-state",
            "B": "-form-state-store",
            "C": "-format-state-store",
            "D": "none of the mentioned"
          },
          "correct_answer": "C",
          "explanation": "-format-state-store formats the RMStateStore.",
          "source_url": "tests/fixtures/yarn_2.html"
        },
        {
          "id": 30,
          "topic": "YARN",
          "category": "KEEP",
          "syllabus_topic": "YARN",
          "syllabus_detail": "YARN",
          "reason": "",
          "faculty_alignment": "",
          "warning": null,
          "question": "Which of the following command runs ResourceManager admin client?",
          "options": {
            "A": "proxyserver",
            "B": "run",
            "C": "admin",
            "D": "rmadmin"
          },
          "correct_answer": "D",
          "explanation": "proxyserver command starts the web proxy server.",
          "source_url": "tests/fixtures/yarn_2.html"
        }
      ]
    }
  ]
};
