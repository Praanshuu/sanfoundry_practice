"""Interactive helper to open Sanfoundry Java topic pages in batches for quick Ctrl+S saving.

Mapped against: `JavaSaved/Java_Programming_Syllabus_PGCP_BDA.pdf` (PGCP-BDA, ACTS Pune)
Source hub page: `JavaSaved/1000 Java MCQ (Multiple Choice Questions) - Sanfoundry.html`

Usage:
  python open_java_pages.py                    # Opens missing KEEP (core syllabus) pages in batches of 5
  python open_java_pages.py --scope selective  # Opens missing SELECTIVE pages in batches of 5
  python open_java_pages.py --scope all        # Opens KEEP + SELECTIVE + REMOVE pages
  python open_java_pages.py --batch 10         # Open 10 tabs per batch
  python open_java_pages.py --status           # Just show which pages are already saved vs missing
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
JAVA_DIR = ROOT / "JavaSaved"
HUB_HTML = JAVA_DIR / "1000 Java MCQ (Multiple Choice Questions) - Sanfoundry.html"
HUB_SKIP = {
    "https://www.sanfoundry.com/java-questions-answers-freshers-experienced/",
    "https://www.sanfoundry.com/introduction-to-java/",
}

# Syllabus mapping based on `JavaSaved/Java_Programming_Syllabus_PGCP_BDA.pdf` (PGCP-BDA)
TOPIC_SYLLABUS_MAP: dict[str, dict[str, str]] = {
    # --- Sessions 1 & 2: Getting started with Java ---
    "https://www.sanfoundry.com/java-questions-answers-jdk-jre-jit-jvm/": {
        "topic": "JDK, JRE, JIT & JVM",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Getting started with Java",
        "reason": "Covers JVM overview, JDK usage, and Java environment.",
    },
    "https://www.sanfoundry.com/java-mcqs-integer-floating-data-types/": {
        "topic": "Integer and Floating Data Types",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Working with Data Types",
        "reason": "Core primitive numeric types from Sessions 1 & 2.",
    },
    "https://www.sanfoundry.com/java-mcqs-character-boolean-data-types/": {
        "topic": "Character and Boolean Data Types",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Working with Data Types",
        "reason": "char/boolean primitives from Sessions 1 & 2.",
    },
    "https://www.sanfoundry.com/java-mcqs-literals-variables/": {
        "topic": "Literals & Variables",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Data Types & Variables",
        "reason": "Primitive vs reference variables and literals.",
    },
    "https://www.sanfoundry.com/java-mcqs-casting-conversion-promotions/": {
        "topic": "Type Conversions, Promotions and Castings",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2 / Session 4: Object Casting",
        "reason": "Casting and promotions used in basics and polymorphism.",
    },
    "https://www.sanfoundry.com/java-mcqs-arrays-2/": {
        "topic": "Java Arrays",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Arrays",
        "reason": "Arrays are explicit Session 3 content.",
    },
    "https://www.sanfoundry.com/java-mcqs-arithmetic-operators/": {
        "topic": "Arithmetic Operators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Operators and Control Statements",
        "reason": "Operators for the calculator lab and core syntax.",
    },
    "https://www.sanfoundry.com/java-mcqs-bitwise-operator/": {
        "topic": "Bitwise Operators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Operators",
        "reason": "Part of operators coverage in Sessions 1 & 2.",
    },
    "https://www.sanfoundry.com/java-mcqs-relational-boolean-logic-operator/": {
        "topic": "Relational and Boolean Logic Operators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Operators and Control Statements",
        "reason": "if/while/switch conditions use relational and boolean operators.",
    },
    "https://www.sanfoundry.com/java-mcqs-assignment-precedence/": {
        "topic": "Assignment Operators and Precedence",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Operators",
        "reason": "Assignment and operator precedence.",
    },
    "https://www.sanfoundry.com/java-mcqs-control-statements/": {
        "topic": "Control Statements-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Control Statements",
        "reason": "if, if-else, for, while, switch, do-while, break, continue, ternary.",
    },
    "https://www.sanfoundry.com/java-questions-answers-control-statements/": {
        "topic": "Control Statements-2",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1 & 2: Control Statements",
        "reason": "Additional control-statement questions.",
    },
    # --- Session 3: Introduction to OOP ---
    "https://www.sanfoundry.com/java-questions-answers-concepts-oops/": {
        "topic": "OOPs Concepts",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Introduction to OOP",
        "reason": "Object Oriented Programming Concepts listed in Session 3.",
    },
    "https://www.sanfoundry.com/java-mcqs-class-fundamental-declaring-objects/": {
        "topic": "Class Fundamentals & Declaring Objects",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1–3: Class Structure & Object Creation",
        "reason": "Java class structure, new, and object references.",
    },
    "https://www.sanfoundry.com/java-mcqs-constructors-garbage-collection/": {
        "topic": "Constructor & Garbage Collection",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Object lifecycle / Session 4: Constructors",
        "reason": "Object creation, constructors, garbage collection.",
    },
    "https://www.sanfoundry.com/java-questions-answers-heap-garbage-collection/": {
        "topic": "Heap and Garbage Collection",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Object's lifecycle (garbage collection)",
        "reason": "Heap, reassignment, and GC / finalize.",
    },
    "https://www.sanfoundry.com/java-questions-answers-memory-management/": {
        "topic": "Memory Management",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Object's lifecycle",
        "reason": "Creation, reassignment, and GC memory model.",
    },
    "https://www.sanfoundry.com/java-mcqs-packages/": {
        "topic": "Java Packages",
        "category": "KEEP",
        "syllabus_topic": "Sessions 1–3: Importing Packages & Classpath",
        "reason": "Packages, importing, and classpath.",
    },
    # --- Session 4: Pillars of OOP ---
    "https://www.sanfoundry.com/java-mcqs-introduction-methods/": {
        "topic": "Java Method",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Methods and Encapsulation",
        "reason": "Methods listed in Session 4.",
    },
    "https://www.sanfoundry.com/java-questions-answers-constructor/": {
        "topic": "Java Constructors",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Creating Constructors",
        "reason": "Explicit constructors coverage.",
    },
    "https://www.sanfoundry.com/java-mcqs-overloading-methods-argument-passing/": {
        "topic": "Overloading Methods & Argument Passing",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Method Overloading & Passing Data",
        "reason": "Method overloading and passing data.",
    },
    "https://www.sanfoundry.com/java-questions-answers-entrance-exams/": {
        "topic": "Methods Taking Parameters",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Passing Data",
        "reason": "Parameter passing into methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-access-control/": {
        "topic": "Access Control-1",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Access Modifiers / Encapsulation",
        "reason": "Access modifiers for encapsulation.",
    },
    "https://www.sanfoundry.com/java-interview-questions-answers/": {
        "topic": "Access Control-2",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Access Modifiers / Encapsulation",
        "reason": "Additional access-control questions.",
    },
    "https://www.sanfoundry.com/java-questions-bank/": {
        "topic": "Arrays Revisited & Keyword static",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Arrays / Session 4: Class members",
        "reason": "Static members and arrays revisited.",
    },
    "https://www.sanfoundry.com/java-mcqs-method-overriding/": {
        "topic": "Method Overriding",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Polymorphism / Method Overriding",
        "reason": "Virtual methods and overriding.",
    },
    "https://www.sanfoundry.com/java-mcqs-object-class/": {
        "topic": "Object Class",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Object vs Reference / Polymorphism",
        "reason": "java.lang.Object, references, and polymorphism.",
    },
    "https://www.sanfoundry.com/java-mcqs-inheritance-abstract-and-super/": {
        "topic": "Abstract Class and Super",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Abstract Classes & Inheritance",
        "reason": "Abstract classes and super, matching the inheritance lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-inheritance/": {
        "topic": "Inheritance-1",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Class Inheritance",
        "reason": "Class inheritance hierarchy.",
    },
    "https://www.sanfoundry.com/java-interview-questions-answers-freshers/": {
        "topic": "Inheritance-2",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Class Inheritance",
        "reason": "Additional inheritance questions.",
    },
    "https://www.sanfoundry.com/java-mcqs-interfaces/": {
        "topic": "Interfaces-1",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Interface and Implementation classes",
        "reason": "Interfaces and implementation classes.",
    },
    "https://www.sanfoundry.com/java-interview-questions-answers-experienced/": {
        "topic": "Interfaces-2",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Interface and Implementation classes",
        "reason": "Additional interface questions.",
    },
    "https://www.sanfoundry.com/java-mcqs-type-interface/": {
        "topic": "Type Interface",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 4: Interfaces / Session 10: Functional Interfaces",
        "reason": "Useful extra interface typing; functional interfaces are Sessions 10–11.",
    },
    "https://www.sanfoundry.com/java-mcqs-core-java-api-packages/": {
        "topic": "Core Java API Packages",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.util, java.lang package",
        "reason": "Overview of core packages named in Session 9.",
    },
    # --- Session 5: Exception Handling ---
    "https://www.sanfoundry.com/java-mcqs-exceptional-handling-basics/": {
        "topic": "Exception Handling Basics",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Exception-Handling Basics",
        "reason": "Role of exceptions and basics.",
    },
    "https://www.sanfoundry.com/java-questions-answers-experienced/": {
        "topic": "Exception Handling",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Exception Handling",
        "reason": "Core exception-handling questions.",
    },
    "https://www.sanfoundry.com/java-mcqs-exception-types/": {
        "topic": "Exception Types",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Types / Checked vs Runtime vs Errors",
        "reason": "Exception types from Session 5.",
    },
    "https://www.sanfoundry.com/java-mcqs-throw-throws-nested-try/": {
        "topic": "Throw, Throws & Nested Try",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Nested try (throw, throws, finally)",
        "reason": "throw, throws, nested try.",
    },
    "https://www.sanfoundry.com/java-mcqs-finally-built-in-exceptions/": {
        "topic": "Finally & Built in Exceptions",
        "category": "KEEP",
        "syllabus_topic": "Session 5: finally & Built-in Exceptions",
        "reason": "finally and built-in exceptions.",
    },
    "https://www.sanfoundry.com/java-mcqs-try-and-catch/": {
        "topic": "Try & Catch",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Using try and catch, Multiple Catch",
        "reason": "try-catch and multiple catch.",
    },
    "https://www.sanfoundry.com/java-mcqs-creating-exceptions/": {
        "topic": "Creating Exceptions",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Creating own Exception Subclasses",
        "reason": "Custom checked exception lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-builtin-exceptions/": {
        "topic": "Built in Exceptions",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Built-in Exceptions",
        "reason": "Built-in exceptions also listed under java.lang.",
    },
    # --- Session 6: Strings ---
    "https://www.sanfoundry.com/java-mcqs-string-class/": {
        "topic": "String Class",
        "category": "KEEP",
        "syllabus_topic": "Session 6: String Class and methods",
        "reason": "String class and methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-string-handling-basics/": {
        "topic": "String Handling Basics",
        "category": "KEEP",
        "syllabus_topic": "Session 6: String Class / Immutability",
        "reason": "String literals vs objects and immutability.",
    },
    "https://www.sanfoundry.com/java-mcqs-character-extraction/": {
        "topic": "Character Extraction",
        "category": "KEEP",
        "syllabus_topic": "Session 6: String Class and methods",
        "reason": "String methods used in the text-analyzer lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-string-comparision/": {
        "topic": "String Comparison",
        "category": "KEEP",
        "syllabus_topic": "Session 6: String Class and methods",
        "reason": "String comparison methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-seraching-modifying-string/": {
        "topic": "Searching & Modifying a String",
        "category": "KEEP",
        "syllabus_topic": "Session 6: String Class and methods",
        "reason": "Search/modify APIs for string labs.",
    },
    "https://www.sanfoundry.com/java-mcqs-stringbuffer-class/": {
        "topic": "StringBuffer Class",
        "category": "KEEP",
        "syllabus_topic": "Session 6: StringBuilder and StringBuffer class",
        "reason": "StringBuffer/StringBuilder from Session 6.",
    },
    "https://www.sanfoundry.com/java-mcqs-stringbuffer-methods/": {
        "topic": "StringBuffer Methods",
        "category": "KEEP",
        "syllabus_topic": "Session 6: StringBuilder and StringBuffer class",
        "reason": "StringBuffer methods.",
    },
    "https://www.sanfoundry.com/java-questions-answers-regular-expression/": {
        "topic": "Regular Expression",
        "category": "KEEP",
        "syllabus_topic": "Session 6 Lab: Regular expressions",
        "reason": "Regex for pattern matching in strings (Session 6 lab).",
    },
    "https://www.sanfoundry.com/java-mcqs-text-formatting/": {
        "topic": "Text Formatting",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 6: Strings",
        "reason": "Useful extra string/text formatting.",
    },
    # --- Sessions 7 & 8: Generics and Collections ---
    "https://www.sanfoundry.com/java-mcqs-generics/": {
        "topic": "Generics",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Introduction to generics",
        "reason": "Generics for EntityManager<T> lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-generics-methods/": {
        "topic": "Generic Methods",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Generic methods for searching/filtering",
        "reason": "Generic methods listed in the collections lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-wildcards/": {
        "topic": "Wildcards",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Generics and wildcards",
        "reason": "Wildcards are explicit Session 7–8 content.",
    },
    "https://www.sanfoundry.com/java-mcqs-rsetrictions-on-generics/": {
        "topic": "Restrictions on Generics",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Generics",
        "reason": "Important generics caveats for the repository lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-collection-framework-overview/": {
        "topic": "Collection Framework Overview",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Collection framework",
        "reason": "Introduction to Collection framework.",
    },
    "https://www.sanfoundry.com/java-mcqs-collection-interface/": {
        "topic": "Collections Interface",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Collection framework",
        "reason": "Collection interface used by List/Set.",
    },
    "https://www.sanfoundry.com/java-mcqs-collection-algorithms/": {
        "topic": "Collection Algorithms",
        "category": "KEEP",
        "syllabus_topic": "Session 9 Lab: Collections utility / sorting",
        "reason": "Collections.sort/search; Comparable/Comparator lab.",
    },
    "https://www.sanfoundry.com/java-questions-answers-data-structures-list/": {
        "topic": "Java List",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: List Interface",
        "reason": "List interface and implementations.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-util-arraylist-class/": {
        "topic": "ArrayList Class",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7–9: ArrayList vs LinkedList",
        "reason": "ArrayList used in CRUD and autoboxing labs.",
    },
    "https://www.sanfoundry.com/java-questions-answers-data-structures-set/": {
        "topic": "Java Set",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Set Interface",
        "reason": "Set interface and implementations.",
    },
    "https://www.sanfoundry.com/java-questions-answers-online-quiz/": {
        "topic": "LinkedList, HashSet & TreeSet",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: List/Set implementations",
        "reason": "ArrayList vs LinkedList, HashSet vs TreeSet comparison.",
    },
    "https://www.sanfoundry.com/java-questions-answers-data-structures-hashmap/": {
        "topic": "Java HashMap",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7–9: Map / HashMap",
        "reason": "HashMap for ID-keyed entity storage.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-util-maps/": {
        "topic": "Maps",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Map Interface",
        "reason": "Map interface and implementations.",
    },
    "https://www.sanfoundry.com/java-mcqs-iterators/": {
        "topic": "Iterators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Collection framework",
        "reason": "Iterating collections; background for streams.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-util-vectors-stacks/": {
        "topic": "Vectors & Stack",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 7 & 8: Collection implementations",
        "reason": "Legacy List implementations; useful extra, not core lab.",
    },
    "https://www.sanfoundry.com/java-problems/": {
        "topic": "Dictionary, Hashtable & Properties",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 7 & 8: Map-like classes",
        "reason": "Legacy map types; HashMap/TreeMap are the syllabus focus.",
    },
    "https://www.sanfoundry.com/java-multiple-choice-questions-answers/": {
        "topic": "Java Queue",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14 Lab: shared queue / producer-consumer",
        "reason": "Queue is useful for the multithreading lab, not a named session topic.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-util-array-class/": {
        "topic": "java.util Array Class",
        "category": "KEEP",
        "syllabus_topic": "Session 9 Lab: Arrays utility class",
        "reason": "Arrays utility for sorting/searching.",
    },
    # --- Session 9: Enums, Wrappers, java.lang / java.util ---
    "https://www.sanfoundry.com/java-questions-answers-data-type-enums/": {
        "topic": "Enums",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Enumerations",
        "reason": "Enumerations and custom enum methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-lang-introduction/": {
        "topic": "java.lang Basics",
        "category": "KEEP",
        "syllabus_topic": "Session 9: java.lang package",
        "reason": "java.lang package overview.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-lang-integer-long-charcter-wrappers/": {
        "topic": "Integer, Long and Character Wrappers",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Wrapper classes / Autoboxing",
        "reason": "Wrapper classes (Integer) and autoboxing.",
    },
    "https://www.sanfoundry.com/java-mcqs-double-float-wrappers/": {
        "topic": "Double & Float Wrappers",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Wrapper classes (Boolean, Double and Integer)",
        "reason": "Double wrapper methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-byte-and-short-wrappers/": {
        "topic": "Byte & Short Wrappers",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Wrapper classes / Autoboxing",
        "reason": "Additional wrappers used with collections.",
    },
    "https://www.sanfoundry.com/java-mcqs-character-wrappers-advance/": {
        "topic": "Character Wrapper Advance",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Wrapper classes",
        "reason": "Character wrapper methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-boolean-wrappers-advance/": {
        "topic": "Boolean Wrapper Advance",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Wrapper classes (Boolean)",
        "reason": "Boolean wrapper from Session 9.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-lang-object-math-class/": {
        "topic": "Object & Math Class",
        "category": "KEEP",
        "syllabus_topic": "Session 9 Lab: Math from java.lang",
        "reason": "Math class listed in Session 9 lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-rounding-functions/": {
        "topic": "Rounding Functions",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang Math",
        "reason": "Extra Math rounding APIs.",
    },
    "https://www.sanfoundry.com/java-mcqs-math-method-and-strict-math-class/": {
        "topic": "Math Methods & StrictMath",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang Math",
        "reason": "Extra Math/StrictMath methods.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-util-bitset-date-class/": {
        "topic": "BitSet & Date class",
        "category": "KEEP",
        "syllabus_topic": "Session 9 Lab: Date / Sessions 12–13: Date Time API",
        "reason": "Date class from java.util; background for Date-Time API.",
    },
    "https://www.sanfoundry.com/java-questions-answers-data-type-date-timezone/": {
        "topic": "Date & TimeZone",
        "category": "KEEP",
        "syllabus_topic": "Sessions 12 & 13: Java 8/17 Date Time API",
        "reason": "Date/time calculations (age, period) in Streams lab.",
    },
    "https://www.sanfoundry.com/java-questions-answers-random-number/": {
        "topic": "Random Number",
        "category": "KEEP",
        "syllabus_topic": "Session 9 Lab: Random class",
        "reason": "Random is named in Session 9 lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-random-and-local-classes/": {
        "topic": "Locale & Random Classes",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.util",
        "reason": "Extra java.util Locale/Random coverage.",
    },
    "https://www.sanfoundry.com/java-mcqs-timer-and-observable-classes/": {
        "topic": "Observable & Timer Class",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.util",
        "reason": "Extra utility classes, not named in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-annotations/": {
        "topic": "Java Annotations",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Annotations",
        "reason": "Annotations are explicit Session 9 content.",
    },
    # --- Sessions 10–13: Functional programming & Streams ---
    "https://www.sanfoundry.com/java-questions-answers-java8-features/": {
        "topic": "Java 8 Features",
        "category": "KEEP",
        "syllabus_topic": "Sessions 10–13: Lambdas, Functional Interfaces, Streams",
        "reason": "Closest Sanfoundry page for lambdas, functional APIs, and streams.",
    },
    # --- Session 14: Multithreading ---
    "https://www.sanfoundry.com/java-mcqs-multithreading-basics/": {
        "topic": "Multithreading Basics",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Java Concurrency / Thread lifecycle",
        "reason": "Thread lifecycle and concurrency basics.",
    },
    "https://www.sanfoundry.com/java-questions-answers-quiz/": {
        "topic": "Java Multithreading",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Multithreading",
        "reason": "Using threads in Java.",
    },
    "https://www.sanfoundry.com/java-mcqs-creating-threads/": {
        "topic": "Creating Threads",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Thread class",
        "reason": "Creating threads by extending Thread.",
    },
    "https://www.sanfoundry.com/java-mcqs-thread-class/": {
        "topic": "Thread Class",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Thread class, thread groups",
        "reason": "Thread class APIs.",
    },
    "https://www.sanfoundry.com/java-questions-answers-mcqs/": {
        "topic": "Runnable Interface for Threads",
        "category": "KEEP",
        "syllabus_topic": "Session 14: The Runnable interface",
        "reason": "Implement threads via Runnable.",
    },
    "https://www.sanfoundry.com/java-assessment-questions-answers/": {
        "topic": "isAlive(), Join() & Synchronization",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Synchronization",
        "reason": "Synchronization to prevent race conditions.",
    },
    "https://www.sanfoundry.com/java-questions-answers-online-test/": {
        "topic": "ThreadGroup & Runnable Interface",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Thread groups / Runnable",
        "reason": "Thread groups and Runnable from java.lang.",
    },
    # --- Session 15: File Handling / java.io / Serialization ---
    "https://www.sanfoundry.com/java-mcqs-java-io-introduction/": {
        "topic": "java.io Introduction",
        "category": "KEEP",
        "syllabus_topic": "Session 15: The java.io Package",
        "reason": "java.io package overview.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-io-byte-streams/": {
        "topic": "java.io Byte Streams",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Files / Persistence",
        "reason": "Byte streams including Object streams used for serialization.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-io-character-streams/": {
        "topic": "java.io Character Streams",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Files",
        "reason": "Character streams for file I/O.",
    },
    "https://www.sanfoundry.com/java-mcqs-input-output-basics/": {
        "topic": "I/O Basics",
        "category": "KEEP",
        "syllabus_topic": "Session 15: File Handling",
        "reason": "I/O basics for file operations.",
    },
    "https://www.sanfoundry.com/java-mcqs-reading-console-input/": {
        "topic": "Reading Console Input",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 15: File Handling",
        "reason": "Console I/O is supporting, not the file-persistence lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-writing-console-output/": {
        "topic": "Writing Console Output",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 15: File Handling",
        "reason": "Console I/O is supporting, not the file-persistence lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-reading-writing-files/": {
        "topic": "Reading & Writing Files",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Files",
        "reason": "File save/load operations.",
    },
    "https://www.sanfoundry.com/java-questions-answers-file-directory/": {
        "topic": "File and Directory",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Files",
        "reason": "File/directory APIs for backup/restore lab.",
    },
    "https://www.sanfoundry.com/java-mcqs-serialization/": {
        "topic": "Serialization-1",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Persistence of objects / Serialization",
        "reason": "Object serialization methods.",
    },
    "https://www.sanfoundry.com/java-questions-answers-serialization/": {
        "topic": "Serialization-2",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Object Serialization Methods",
        "reason": "Additional serialization questions.",
    },
    "https://www.sanfoundry.com/java-mcqs-serialization-deserialization/": {
        "topic": "Serialization & Deserialization",
        "category": "KEEP",
        "syllabus_topic": "Session 15: ObjectOutputStream / ObjectInputStream",
        "reason": "Serialize/deserialize entity objects; transient fields.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-autocloseable-closeable-flushable-interfaces/": {
        "topic": "AutoCloseable, Closeable & Flushable",
        "category": "KEEP",
        "syllabus_topic": "Sessions 15–17: try-with-resources",
        "reason": "Resource closure using try-with-resources in I/O and JDBC labs.",
    },
    # --- Sessions 16 & 17: JDBC ---
    "https://www.sanfoundry.com/advanced-java-questions-answers-jdbc/": {
        "topic": "JDBC",
        "category": "KEEP",
        "syllabus_topic": "Sessions 16 & 17: JDBC API, Drivers, Connection, Statement",
        "reason": "JDBC architecture, drivers, Connection, Statement, PreparedStatement, ResultSet.",
    },
    # --- SELECTIVE extras that still help Core Java ---
    "https://www.sanfoundry.com/tough-java-questions-answers/": {
        "topic": "BigDecimal",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 1 & 2 / Session 9: Numeric types",
        "reason": "Useful numeric type; not named in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-command-line-arguments/": {
        "topic": "Command Line Arguments-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 1 & 2: JDK usage",
        "reason": "Useful JDK/runtime extra, not a named session topic.",
    },
    "https://www.sanfoundry.com/java-questions-answers-freshers/": {
        "topic": "Command Line Arguments-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 1 & 2: JDK usage",
        "reason": "Useful JDK/runtime extra, not a named session topic.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-lang-void-process-system-class/": {
        "topic": "Void, Process and System Class",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang package",
        "reason": "Extra java.lang System/Process APIs.",
    },
    "https://www.sanfoundry.com/java-mcqs-system-class-advance/": {
        "topic": "System Class Advance",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang package",
        "reason": "Extra System class APIs.",
    },
    "https://www.sanfoundry.com/java-mcqs-runtime-and-classloader-classes/": {
        "topic": "Runtime & ClassLoader",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 1 & 2: JVM Overview",
        "reason": "JVM internals beyond the syllabus depth.",
    },
    "https://www.sanfoundry.com/java-mcqs-java-lang-class/": {
        "topic": "java.lang Class",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang package",
        "reason": "Class reflection extras; Reflection API is not a core session.",
    },
    "https://www.sanfoundry.com/java-questions-answers-environment-properties/": {
        "topic": "Environment Properties",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 1 & 2: JDK usage",
        "reason": "Environment/system properties extra.",
    },
    "https://www.sanfoundry.com/java-questions-answers-campus-interviews/": {
        "topic": "Liskov Principle",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 4: Polymorphism / Inheritance",
        "reason": "SOLID extra around inheritance/polymorphism.",
    },
    "https://www.sanfoundry.com/java-questions-answers-test/": {
        "topic": "Coding Best Practices",
        "category": "SELECTIVE",
        "syllabus_topic": "Core Java (general)",
        "reason": "General Java practice, not a named session.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-design-patterns/": {
        "topic": "Design Patterns",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 16 & 17 Lab: DAO pattern",
        "reason": "DAO is in the JDBC lab; broader patterns are extra.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-reflection-api/": {
        "topic": "Reflection API",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 9: java.lang Class (extra)",
        "reason": "Not in the syllabus; optional advanced Java.",
    },
    # --- REMOVE: not in PGCP-BDA Core Java syllabus ---
    "https://www.sanfoundry.com/java-mcqs-recursion/": {
        "topic": "Recursion",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Recursion)",
        "reason": "Recursion is not listed in the PGCP-BDA Java syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-networking-basics/": {
        "topic": "Networking Basics",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking)",
        "reason": "Sockets/networking are not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-basic-questions-answers/": {
        "topic": "Networking — Server & Sockets",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking)",
        "reason": "Sockets/networking are not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-url-class/": {
        "topic": "URL Class",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking)",
        "reason": "Networking is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-http-response-urlconnection-class/": {
        "topic": "HttpResponse & URLConnection",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking)",
        "reason": "Networking is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-networking-datagrams/": {
        "topic": "Datagram",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking)",
        "reason": "Networking is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-remote-method-invocation/": {
        "topic": "RMI",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (RMI)",
        "reason": "RMI is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-applets-fundamentals/": {
        "topic": "Applets Fundamentals",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Applets)",
        "reason": "Applets are obsolete and not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-event-handling-basics/": {
        "topic": "Event Handling Basics",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (AWT Event Handling)",
        "reason": "GUI/event handling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-actionevent-adjustmentevent-class/": {
        "topic": "ActionEvent & AdjustmentEvent",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (AWT Event Handling)",
        "reason": "GUI/event handling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-componentevent-containerevent-focusevent-class/": {
        "topic": "ComponentEvent, ContainerEvent & FocusEvent",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (AWT Event Handling)",
        "reason": "GUI/event handling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-questions-answers-aptitude-test/": {
        "topic": "MouseEvent, TextEvent & WindowEvent",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (AWT Event Handling)",
        "reason": "GUI/event handling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-mcqs-event-listeners-interfaces/": {
        "topic": "Event Listeners Interfaces",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (AWT Event Handling)",
        "reason": "GUI/event handling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/java-questions-answers-junits/": {
        "topic": "JUnits",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (JUnit)",
        "reason": "JUnit is not in the PGCP-BDA Java syllabus.",
    },
    "https://www.sanfoundry.com/java-questions-answers-hibernate/": {
        "topic": "Hibernate",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Hibernate)",
        "reason": "ORM/Hibernate is not in the syllabus (JDBC is).",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-java-beans/": {
        "topic": "Java Beans",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (JavaBeans)",
        "reason": "JavaBeans are not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-debugging-eclipse/": {
        "topic": "Debugging in Eclipse",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (IDE tooling)",
        "reason": "Eclipse-specific tooling is not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-web-application/": {
        "topic": "Web Application",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Servlets/JSP)",
        "reason": "Server-side Java EE web apps are not in Core Java.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-client-server/": {
        "topic": "Client and Server",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Networking / Java EE)",
        "reason": "Client-server Java EE is not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-servlet/": {
        "topic": "Servlet",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Servlets)",
        "reason": "Servlets are not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-session-management/": {
        "topic": "Session Management",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Servlets/JSP)",
        "reason": "HTTP session management is not in Core Java.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-jsp/": {
        "topic": "JSP",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (JSP)",
        "reason": "JSP is not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-jsp-elements/": {
        "topic": "JSP Elements",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (JSP)",
        "reason": "JSP is not in the syllabus.",
    },
    "https://www.sanfoundry.com/advanced-java-questions-answers-application-lifecycle-ant-maven-jenkins/": {
        "topic": "Ant, Maven and Jenkins",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Build / CI tools)",
        "reason": "Ant/Maven/Jenkins are not in the Java programming syllabus.",
    },
}


def get_saved_urls(directory: Path) -> set[str]:
    """Scan `.html` files in `JavaSaved` and return canonical Sanfoundry URLs already saved."""
    saved: set[str] = set()
    if not directory.is_dir():
        return saved
    hub_name = HUB_HTML.name
    for html_file in directory.glob("*.html"):
        if html_file.name == hub_name:
            continue
        try:
            text = html_file.read_text(encoding="utf-8", errors="ignore")
            m_canon = re.search(
                r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']',
                text,
                re.I,
            )
            if m_canon:
                saved.add(m_canon.group(1).rstrip("/") + "/")
                continue
            m_og = re.search(
                r'<meta[^>]+property=["\']og:url["\'][^>]+content=["\']([^"\']+)["\']',
                text,
                re.I,
            )
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
    """Return ordered unique topic links from the Java hub HTML with syllabus mapping."""
    items: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    if HUB_HTML.is_file():
        soup = BeautifulSoup(HUB_HTML.read_text(encoding="utf-8", errors="ignore"), "html.parser")
        content = soup.select_one(".entry-content") or soup
        for a in content.find_all("a", href=True):
            href = a["href"].strip()
            if "sanfoundry.com" not in href or "#" in href:
                continue
            norm_url = href.rstrip("/") + "/"
            if norm_url in HUB_SKIP or norm_url not in TOPIC_SYLLABUS_MAP or norm_url in seen_urls:
                continue
            seen_urls.add(norm_url)
            meta = TOPIC_SYLLABUS_MAP[norm_url]
            items.append({"url": norm_url, **meta})

    for url, meta in TOPIC_SYLLABUS_MAP.items():
        if url not in seen_urls:
            seen_urls.add(url)
            items.append({"url": url, **meta})

    return items


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Open Sanfoundry Java topic pages in batches for saving to JavaSaved/."
    )
    parser.add_argument(
        "--scope",
        choices=["keep", "selective", "keep+selective", "remove", "all"],
        default="keep",
        help="Which syllabus priority category to open (default: keep = core PGCP-BDA pages).",
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
    saved_urls = get_saved_urls(JAVA_DIR)

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
    print(f" PGCP-BDA Java Programming — Sanfoundry Topic Opener (Scope: {args.scope.upper()})")
    print("=" * 78)
    print(f" Total in scope : {len(scoped_topics)} pages")
    print(f" Already saved  : {len(already_saved)} pages in {JAVA_DIR}")
    print(f" Remaining      : {len(missing_topics)} pages to save")
    print("=" * 78)

    if args.status:
        for idx, t in enumerate(scoped_topics, start=1):
            mark = "[SAVED]" if t["url"] in saved_urls else "[TODO] "
            print(f"{idx:2d}. {mark} [{t['category']:9s}] {t['topic']:40s} -> {t['syllabus_topic']}")
        return

    if not missing_topics:
        print("\nAll pages in this scope are already saved in JavaSaved/!")
        return

    JAVA_DIR.mkdir(parents=True, exist_ok=True)
    batch_size = max(1, args.batch)
    total_batches = (len(missing_topics) + batch_size - 1) // batch_size

    print(f"\nOpening {len(missing_topics)} remaining pages in {total_batches} batch(es) of {batch_size} tabs.")
    print("Tip: In your browser, press Ctrl+S on each tab and save Webpage, HTML Only into:")
    print(f"     {JAVA_DIR}\n")

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
                saved_now = len(get_saved_urls(JAVA_DIR))
                print(f"\nStopped. Currently detected {saved_now} saved topic pages in JavaSaved/.")
                print("Run `python open_java_pages.py` again anytime to resume where you left off!")
                return

    print("\nAll batches opened! Once you finish pressing Ctrl+S on the open tabs,")
    print("tell me and I will extract questions, map them to the PGCP-BDA Java syllabus,")
    print("and load them into the practice portal.")


if __name__ == "__main__":
    main()
