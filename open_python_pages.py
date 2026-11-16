"""Interactive helper to open Sanfoundry Python topic pages in batches for quick Ctrl+S saving.

Mapped against: `PythonSaved/Materials/Python/00_Syllabus_and_Study_Guide/Python_Syllabus_PGCP_BDA.pdf` (PGCP-BDA, ACTS Pune)
Source hub page: `PythonSaved/1000 Python MCQ (Multiple Choice Questions) - Sanfoundry.html`

Usage:
  python open_python_pages.py                    # Opens missing KEEP (core syllabus) pages in batches of 5
  python open_python_pages.py --scope selective  # Opens missing SELECTIVE pages in batches of 5
  python open_python_pages.py --scope all        # Opens KEEP + SELECTIVE + REMOVE pages
  python open_python_pages.py --batch 10         # Open 10 tabs per batch
  python open_python_pages.py --status           # Just show which pages are already saved vs missing
"""
from __future__ import annotations

import argparse
import re
import time
import webbrowser
from pathlib import Path
from typing import Any

from bs4 import BeautifulSoup

from parser import _normalize_html_p_tags

ROOT = Path(__file__).resolve().parent
PYTHON_DIR = ROOT / "PythonSaved"
HUB_HTML = PYTHON_DIR / "1000 Python MCQ (Multiple Choice Questions) - Sanfoundry.html"
HUB_SKIP = {
    "https://www.sanfoundry.com/1000-python-questions-answers/",
    "https://www.sanfoundry.com/introduction-to-python/",
}

# Syllabus mapping based on `Python_Syllabus_PGCP_BDA.pdf` & `PythonSaved/Materials/Python/` (PGCP-BDA, ACTS Pune)
TOPIC_SYLLABUS_MAP: dict[str, dict[str, str]] = {
    # --- Session 1: Python Fundamentals, Data Types, Operators & Control Flow (If-Else, Loops) ---
    "https://www.sanfoundry.com/python-questions-answers-variable-names/": {
        "topic": "Variable Names",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Basic Syntax, Data Types, Variables & Identifiers",
        "reason": "Covers identifier rules, case sensitivity, keywords, and variable naming (Day 1b Notes).",
    },
    "https://www.sanfoundry.com/python-mcqs-basic-operators/": {
        "topic": "Basic Operators",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Operators (Arithmetic, Floor Division, Power & Precedence)",
        "reason": "Covers **, //, %, and operator precedence (Day 1a Notes).",
    },
    "https://www.sanfoundry.com/python-mcqs-core-datatypes/": {
        "topic": "Core Data Types",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Basic Syntax, Core Data Types & Input/Output",
        "reason": "Covers dynamic typing, core data types, indentation, and print() formatting (Day 1b Notes).",
    },
    "https://www.sanfoundry.com/python-questions-answers-numeric-types/": {
        "topic": "Numeric Types",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Numeric Types (int, float, complex) & Bitwise Complement",
        "reason": "Covers float precision (0.1+0.2), complex numbers, hex/oct literals, and round() (Day 1a/1b Notes).",
    },
    "https://www.sanfoundry.com/python-questions-answers-precedence-associativity-1/": {
        "topic": "Precedence & Associativity-1",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Operator Precedence & Right-to-Left Associativity (**)",
        "reason": "Covers PEMDAS precedence and exponentiation associativity (Day 1a Notes).",
    },
    "https://www.sanfoundry.com/python-questions-answers-precedence-associativity-2/": {
        "topic": "Precedence & Associativity-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 1: Operator Precedence & Type Coercion",
        "reason": "Additional operator precedence and int/float type conversion practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-bitwise-1/": {
        "topic": "Bitwise-1",
        "category": "KEEP",
        "syllabus_topic": "Session 1 & Day 2 Notes: Bitwise Operators (<<, >>, &, |, ^, ~) & bin()",
        "reason": "Explicitly covered in Day_02_Bitwise_and_Loops_For_While.pdf (bitwise masking and shifting).",
    },
    "https://www.sanfoundry.com/python-questions-answers-bitwise-2/": {
        "topic": "Bitwise-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 1 & Day 2 Notes: Bitwise XOR Swap, Two's Complement & Odd/Even Masking",
        "reason": "Covers XOR swap, ~x = -(x+1), and x & 1 odd/even check from Day 2 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-boolean/": {
        "topic": "Boolean",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Boolean Truthiness, Logical Operators (and, or, not) & If-Elif-Else",
        "reason": "Covers bool(), short-circuit evaluation ([] or {}), filter(bool, l), and if-elif-else (Day 1a/1b Notes).",
    },
    "https://www.sanfoundry.com/python-questions-answers-while-and-for-loops-1/": {
        "topic": "While & For Loops-1",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Looping (for, while, break, continue, pass)",
        "reason": "Core loop constructs from Session 1 and Assignment 1 (Loops).",
    },
    "https://www.sanfoundry.com/advanced-python-questions-answers/": {
        "topic": "While & For Loops-2",
        "category": "KEEP",
        "syllabus_topic": "Session 1: Looping (for, while, range)",
        "reason": "Core loop constructs from Session 1 and loopdemo.py.",
    },
    "https://www.sanfoundry.com/tough-python-questions-answers/": {
        "topic": "While & For Loops-3",
        "category": "KEEP",
        "syllabus_topic": "Session 1: For Loops, range(len(x)) & String Iteration",
        "reason": "Covers iterating over strings vs range(len(x)) and loop variable mutation (loopdemo.py).",
    },
    "https://www.sanfoundry.com/python-questions-answers-freshers/": {
        "topic": "While & For Loops-4",
        "category": "KEEP",
        "syllabus_topic": "Session 1 & Session 3: Looping over Dictionaries (keys, values, items) & Sets",
        "reason": "Directly matches dictinarydemo.py and loopdemo.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-experienced/": {
        "topic": "While & For Loops-5",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 1: range() Constraints, Reverse Iteration [::-1] & reversed()",
        "reason": "Covers range() integer requirement and reverse iteration (zipenumeratedemo.py).",
    },
    "https://www.sanfoundry.com/python-technical-questions-answers/": {
        "topic": "While & For Loops-6",
        "category": "KEEP",
        "syllabus_topic": "Session 1 & Day 2 Notes: for-else / while-else, break & Generator Iteration",
        "reason": "Explicitly taught in Day_02_Bitwise_and_Loops_For_While.pdf (for-else prime/break logic).",
    },
    # --- Session 2: Strings, Slicing, String Methods & String Formatting ---
    "https://www.sanfoundry.com/python-mcqs-strings-1/": {
        "topic": "Strings-1",
        "category": "KEEP",
        "syllabus_topic": "Session 2: Strings, Accessing Strings, Raw Strings & Slicing (s[::-1])",
        "reason": "Covers string concatenation, negative indexing, raw strings, and s[::-1] reverse slice (stringdemo.py).",
    },
    "https://www.sanfoundry.com/advanced-python-interview-questions-answers/": {
        "topic": "Strings-2",
        "category": "KEEP",
        "syllabus_topic": "Session 2: String Immutability, Slicing, find(), rfind(), count() & startswith()",
        "reason": "Directly matches stringdemo.py (find, rfind, count, slicing, immutability).",
    },
    "https://www.sanfoundry.com/python-technical-interview-questions-answers/": {
        "topic": "Strings-3",
        "category": "KEEP",
        "syllabus_topic": "Session 2: strip(), chr(), ord(), format() & print(end=...)",
        "reason": "Covers strip(), ord/chr (used in ROT-13 Caesar cipher lab), and print(end=' ').",
    },
    "https://www.sanfoundry.com/python-coding-questions-answers/": {
        "topic": "Strings-4",
        "category": "KEEP",
        "syllabus_topic": "Session 2 & Sessions 7–8: replace(), Dunder Methods (__str__, __getitem__, __len__) & OOP",
        "reason": "Covers replace() (stringdemo.py) and __str__() (studentclass_basic.py).",
    },
    "https://www.sanfoundry.com/basic-python-questions-answers/": {
        "topic": "Strings-5",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: String Methods — capitalize() & center()",
        "reason": "Covers capitalize() and center() padding.",
    },
    "https://www.sanfoundry.com/python-quiz/": {
        "topic": "Strings-6",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: String Methods — count(sub, start, end), encode() & endswith()",
        "reason": "Covers bounded count() (stringdemo.py), utf-8 encode(), and endswith().",
    },
    "https://www.sanfoundry.com/python-quiz-online/": {
        "topic": "Strings-7",
        "category": "KEEP",
        "syllabus_topic": "Session 2: String Methods — find() vs 'in' Operator & .format() Positional/Keyword",
        "reason": "Covers find() (stringdemo.py) and str.format() (Session 2 Formatting Strings).",
    },
    "https://www.sanfoundry.com/python-multiple-choice-questions-answers/": {
        "topic": "Strings-8",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: Formatting Strings (.format() indexing, binary/hex/comma specifiers)",
        "reason": "Additional str.format() practice for Session 2.",
    },
    "https://www.sanfoundry.com/python-mcqs/": {
        "topic": "Strings-9",
        "category": "KEEP",
        "syllabus_topic": "Session 2: Character Classification Methods (isalnum, isalpha, isdigit, isidentifier)",
        "reason": "Explicitly demonstrated in stringdemo.py (isalnum, isalpha, isdecimal) and Assignment 3.",
    },
    "https://www.sanfoundry.com/python-test/": {
        "topic": "Strings-10",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: String Predicates (islower, isnumeric, isspace, istitle)",
        "reason": "Additional string predicate methods for Session 2.",
    },
    "https://www.sanfoundry.com/python-online-test/": {
        "topic": "Strings-11",
        "category": "KEEP",
        "syllabus_topic": "Session 2: String Methods — lstrip(chars), lower(), partition() & maketrans()",
        "reason": "lstrip('a bx') is explicitly taught in stringdemo.py!",
    },
    "https://www.sanfoundry.com/python-problems/": {
        "topic": "Strings-12",
        "category": "KEEP",
        "syllabus_topic": "Session 2 & Session 4: replace(old, new, count) & split(sep, maxsplit)",
        "reason": "replace(..., count=1) and split() are explicitly taught in stringdemo.py and Session 4!",
    },
    "https://www.sanfoundry.com/python-question-bank/": {
        "topic": "Strings-13",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: splitlines(), swapcase(), title(), translate() & zfill()",
        "reason": "Covers translate/maketrans (relevant to ROT-13 lab) and string case utilities.",
    },
    "https://www.sanfoundry.com/python-questions-answers-formatting-1/": {
        "topic": "Formatting-1",
        "category": "KEEP",
        "syllabus_topic": "Session 2: Formatting Strings (%d, %f, %.2f, %s, width & zero-padding)",
        "reason": "Explicitly listed in Session 2 (Formatting Strings) and Day 1b Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-formatting-2/": {
        "topic": "Formatting-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: %-Formatting with Dictionaries & str.format()",
        "reason": "Additional string formatting practice for Session 2.",
    },
    "https://www.sanfoundry.com/python-questions-answers-advanced-formatting/": {
        "topic": "Advanced Formatting",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 2: Advanced str.format() Unpacking (*args, **kwargs, alignment)",
        "reason": "Covers sequence/dict unpacking in .format(*p, **D) and field alignment.",
    },
    # --- Session 3: Dictionaries, Dictionary Comprehension & Sets ---
    "https://www.sanfoundry.com/python-mcqs-dictionary-1/": {
        "topic": "Dictionary-1",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Defining, Accessing, Modifying & Deleting Items from Dictionaries",
        "reason": "Core Session 3 dictionary operations (in, del, len, keys, KeyError).",
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-2/": {
        "topic": "Dictionary-2",
        "category": "KEEP",
        "syllabus_topic": "Session 3 & Day 6 Notes: Dictionary Methods (get, setdefault, update, pop, copy, items)",
        "reason": "Every single method on this page is explicitly demonstrated in dictinarydemo.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-3/": {
        "topic": "Dictionary-3",
        "category": "KEEP",
        "syllabus_topic": "Session 3: popitem(), Nested Dictionaries, Key Hash Equivalence (1 vs 1.0) & Counter",
        "reason": "Covers popitem() (dictinarydemo.py), key hashing rules, and frequency counting.",
    },
    "https://www.sanfoundry.com/python-questions-answers-dictionary-4/": {
        "topic": "Dictionary-4",
        "category": "KEEP",
        "syllabus_topic": "Session 3: Dictionary Comprehension, Tuple Keys, fromkeys(), dict(zip()) & defaultdict",
        "reason": "Explicitly in Session 3 (Dictionary Comprehension) and dictinarydemo.py (fromkeys).",
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-1/": {
        "topic": "Sets-1",
        "category": "KEEP",
        "syllabus_topic": "Session 3 & Day 6 Notes: Sets, Mutability, Uniqueness & Set Algebra (|, -, ^, <)",
        "reason": "Directly matches Day_06_Sets_and_Dictionaries.pdf and setdemo.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-2/": {
        "topic": "Sets-2",
        "category": "KEEP",
        "syllabus_topic": "Session 3 & Day 6 Notes: frozenset, update(), intersection_update(), Set Comprehension & issubset()",
        "reason": "Directly matches setdemo.py and Day 6 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-3/": {
        "topic": "Sets-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 3 & Day 6 Notes: Hashable Set Elements, update() Iterable Requirement & all()/any()",
        "reason": "Covers unhashable list error in sets (setdemo.py line 6: s.add([12,34,56]) #error).",
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-4/": {
        "topic": "Sets-4",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 3 & Day 6 Notes: union() vs | Operator Type Rules & Set Comprehensions",
        "reason": "Covers s.union([4,5]) vs s|[4,5] TypeError and set comprehensions.",
    },
    "https://www.sanfoundry.com/python-questions-answers-sets-5/": {
        "topic": "Sets-5",
        "category": "KEEP",
        "syllabus_topic": "Session 3 & Day 6 Notes: remove() vs discard(), difference(), difference_update() & isdisjoint()",
        "reason": "remove() vs discard() and difference_update() are explicitly taught in setdemo.py!",
    },
    # --- Session 4: Lists, List Operations, Shallow/Deep Copy & List Comprehension ---
    "https://www.sanfoundry.com/python-mcqs-lists-1/": {
        "topic": "Lists-1",
        "category": "KEEP",
        "syllabus_topic": "Session 4: Defining Lists, Indexing, Slicing, len(), min(), max() & sum()",
        "reason": "Core Session 4 list operations and Lab Q1 (largest/smallest number in list).",
    },
    "https://www.sanfoundry.com/python-coding-interview-questions-answers/": {
        "topic": "Lists-2",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 4 Notes: List Aliasing vs Slicing Copy [:], append(), insert(), remove(), index(), count()",
        "reason": "Directly matches listdemos.py and listdemo1.py!",
    },
    "https://www.sanfoundry.com/python-programming-questions-answers/": {
        "topic": "Lists-3",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 4 Notes: reverse(), extend(), pop(), split() & In-Place List Mutation",
        "reason": "Directly matches listdemos.py (reverse, extend, pop) and Session 4 (Splitting Strings).",
    },
    "https://www.sanfoundry.com/python-programming-interview-questions-answers/": {
        "topic": "Lists-4",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Session 5: append() vs +=, Mutable Default Arguments & Pass-by-Object-Reference",
        "reason": "Essential for understanding list mutation in functions and append([5,6,7,8]) vs extend.",
    },
    "https://www.sanfoundry.com/python-question-papers/": {
        "topic": "Lists-5",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 4: 2D Nested Lists, Matrix Traversal & Nested List Sorting",
        "reason": "Good practice for 2D lists and nested loops.",
    },
    "https://www.sanfoundry.com/python-questions-answers-lists-6/": {
        "topic": "Lists-6",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 4–5 Notes: Shallow Copy vs copy.deepcopy(), zip(), [[]] * 3 & filter()",
        "reason": "Directly covers shallow vs deep copy (listdemo1.py), zip() (zipenumeratedemo.py), and filter() (filtermapdemo.py).",
    },
    "https://www.sanfoundry.com/python-questions-answers-lists-7/": {
        "topic": "Lists-7",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 3–5 Notes: Object Identity (is), copy(), sort(key=...), enumerate() & Unpacking (*x)",
        "reason": "Matches listdemo1.py (x is y, lst.copy()), zipenumeratedemo.py (enumerate), and coursemgntsystem_full.py (sort(key=...)).",
    },
    "https://www.sanfoundry.com/python-questions-answers-list-comprehension/": {
        "topic": "List Comprehension-1",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Session 5: List Comprehension, Nested Comprehensions & map()/lambda Equivalence",
        "reason": "Explicitly in Session 4 (Mapping Lists) & Session 5 (List Comprehension) and filtermapdemo.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-list-comprehension-1/": {
        "topic": "List Comprehension-2",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 5 Notes: List Comprehension with Filtering, zip() & Matrix Transpose",
        "reason": "Directly matches filtermapdemo.py and zipenumeratedemo.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-list-comprehension-2/": {
        "topic": "List Comprehension-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 4 & Session 5: List Comprehension",
        "reason": "Additional list comprehension practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-matrix-list-comprehension/": {
        "topic": "Matrix List Comprehension",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 4: Nested List Comprehension",
        "reason": "Additional matrix list comprehension practice.",
    },
    # --- Session 5: Functions, Argument Passing, Lambda/Map/Filter, Built-ins & Modules ---
    "https://www.sanfoundry.com/python-mcqs-function-1/": {
        "topic": "Functions-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 3 Notes: Defining Functions, Default/Keyword Arguments, global Keyword & Docstrings",
        "reason": "Core Session 5 function concepts and Day 3 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-entrance-exams/": {
        "topic": "Functions-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Built-in vs User-Defined Functions, *args, __doc__ & id()",
        "reason": "Covers *args summation, __doc__ attribute, and id() (Day 3 Notes).",
    },
    "https://www.sanfoundry.com/python-questions-campus-interview/": {
        "topic": "Functions-3 (Lambda)",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 5 Notes: Anonymous Functions (lambda), Closures & Conditional Lambdas",
        "reason": "Explicitly in Session 5 (Anonymous Functions - Lambda) and filtermapdemo.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-function-4/": {
        "topic": "Functions-4",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 3 Notes: *args (tuple), **kwargs (dict), Default Return (None) & Scope",
        "reason": "Directly matches tupledemo1.py (def addition(a=6,b=7,*t)) and Day 3 Notes!",
    },
    "https://www.sanfoundry.com/python-puzzles/": {
        "topic": "Argument Passing-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Pass-by-Object-Reference, Mutable Default Args, Higher-Order Functions & UnboundLocalError",
        "reason": "Critical exam questions on mutable default args, list mutation vs reassignment, and UnboundLocalError.",
    },
    "https://www.sanfoundry.com/tricky-python-questions-answers/": {
        "topic": "Argument Passing-2",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Argument Passing, Reassignment vs In-Place Mutation & Command-Line Args (sys.argv)",
        "reason": "Covers tricky argument passing and variable-length argument syntax (*args, **kwargs).",
    },
    "https://www.sanfoundry.com/python-questions-answers-global-local-variables-1/": {
        "topic": "Global vs Local Variables-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Global and Local Variables, global Keyword & Default Arg Binding Time",
        "reason": "Explicitly listed in Session 5 (Global and Local Variables).",
    },
    "https://www.sanfoundry.com/python-questions-answers-global-local-variables-2/": {
        "topic": "Global vs Local Variables-2",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Global vs Local Variables & nonlocal",
        "reason": "Additional scope and namespace questions for Session 5.",
    },
    "https://www.sanfoundry.com/python-questions-answers-recursion/": {
        "topic": "Recursion",
        "category": "KEEP",
        "syllabus_topic": "Session 5 Lab Q3 & Day 3 Notes: Recursion",
        "reason": "Recursion is explicitly covered in Session 5 Lab Q3 and Day 3 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-shallow-copy-deep-copy/": {
        "topic": "Shallow Copy vs Deep Copy",
        "category": "KEEP",
        "syllabus_topic": "Session 4 & Day 4 Notes: Shallow Copy vs Deep Copy",
        "reason": "Covers copy.copy() vs copy.deepcopy().",
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-1/": {
        "topic": "Built-in Functions-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Built-in Functions (round, pow, all, any, abs, sum, min, max)",
        "reason": "Explicitly listed in Session 5 (Using type, str, dir, and Other Built-In Functions).",
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-2/": {
        "topic": "Built-in Functions-2",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 5 Notes: Built-in Functions (chr, complex, divmod, enumerate, eval, float)",
        "reason": "Covers enumerate() (zipenumeratedemo.py), divmod(), eval(), and chr().",
    },
    "https://www.sanfoundry.com/python-questions-answers-built-in-functions-3/": {
        "topic": "Built-in Functions-3",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 5 Notes: Built-in Functions (reversed, ord, hex, oct, len, float('inf'))",
        "reason": "reversed() is explicitly demonstrated in zipenumeratedemo.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-functional-programming-tools/": {
        "topic": "Functional Programming Tools",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 5 Notes: map(), filter(), reduce() & lambda",
        "reason": "Directly matches Day_05_Iterables_Lambda_Filter_Reduce.pdf and filtermapdemo.py.",
    },
    "https://www.sanfoundry.com/python-interview-questions-answers/": {
        "topic": "Mapping Functions-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 5 Notes: map(), filter(), reduce()",
        "reason": "Directly matches filtermapdemo.py.",
    },
    "https://www.sanfoundry.com/tough-python-interview-questions-answers/": {
        "topic": "Mapping Functions-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Functional Programming & Mapping",
        "reason": "Additional mapping function practice.",
    },
    "https://www.sanfoundry.com/python-interview-questions-answers-freshers/": {
        "topic": "Mapping Functions-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Functional Programming & Mapping",
        "reason": "Additional mapping function practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-modules/": {
        "topic": "Modules",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Concepts of Modules & Packages",
        "reason": "Explicitly in Session 5 and 03_Modules_and_Packages demos.",
    },
    "https://www.sanfoundry.com/python-objective-questions-answers/": {
        "topic": "Math Module-1",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Day 3 Notes: math Module (ceil, floor, fabs, factorial, copysign)",
        "reason": "Explicitly taught in Day_03_MatchCase_Functions_Math_and_Strings.pdf and Session 5 Lab Q2 (factorial).",
    },
    "https://www.sanfoundry.com/python-developer-questions-answers/": {
        "topic": "Math Module-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5 & Day 3 Notes: math Module",
        "reason": "Additional math module questions.",
    },
    "https://www.sanfoundry.com/python-developer-interview-questions-answers/": {
        "topic": "Math Module-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5 & Day 3 Notes: math Module",
        "reason": "Additional math module questions.",
    },
    "https://www.sanfoundry.com/python-questions-answers-datetime-module-1/": {
        "topic": "Datetime Module-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Standard Library Modules (datetime.date, timedelta, weekday)",
        "reason": "Useful standard library module practice alongside Session 2 calendar lab.",
    },
    "https://www.sanfoundry.com/python-questions-answers-datetime-module-2/": {
        "topic": "Datetime Module-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Standard Library Modules (datetime)",
        "reason": "Optional datetime module practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-random-module/": {
        "topic": "Random Module-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Standard Library Modules (random)",
        "reason": "Optional random module practice.",
    },
    "https://www.sanfoundry.com/python-aptitude-test-questions/": {
        "topic": "Random Module-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Standard Library Modules (random)",
        "reason": "Optional random module practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-sys-module/": {
        "topic": "Sys Module",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 5: Standard Library Modules (sys.path, sys.argv, sys.exit)",
        "reason": "sys.path and sys.exit are used in usemodule1.py and functiondemo.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-pickle-module/": {
        "topic": "Pickle Module",
        "category": "KEEP",
        "syllabus_topic": "Session 5: Pickling (Object Serialization)",
        "reason": "Pickling is explicitly listed as a bullet point in Session 5 of Python_Syllabus_PGCP_BDA.pdf!",
    },
    # --- Session 6: Tuples ---
    "https://www.sanfoundry.com/python-mcqs-tuples/": {
        "topic": "Tuples-1",
        "category": "KEEP",
        "syllabus_topic": "Session 6 & Day 4 Notes: Introducing Tuples, Accessing, Slicing, Immutability & Tuple Keys",
        "reason": "Core Session 6 tuple operations and tupledemo1.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-tuples-2/": {
        "topic": "Tuples-2",
        "category": "KEEP",
        "syllabus_topic": "Session 6 & Day 4–5 Notes: Single-Element Tuple Syntax (1,), Tuple Comparison, zip() & List of Tuples",
        "reason": "Directly matches Session 6 Lab (list of tuples, zip() on tuples) and coursemgntsystem_full.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-tuples-3/": {
        "topic": "Tuples-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 6: Tuples",
        "reason": "Additional tuple questions for Session 6.",
    },
    # --- Sessions 7 & 8: Advanced Python — OOP, Inheritance, Polymorphism, Regex, Generators & Decorators ---
    "https://www.sanfoundry.com/python-questions-answers-classes-objects-1/": {
        "topic": "Classes & Objects-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: Classes, Objects, __init__ Constructor, self, getattr/setattr & Dynamic Attributes",
        "reason": "Directly matches Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf and studentclass_basic.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-classes-objects-2/": {
        "topic": "Classes & Objects-2",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Classes and Objects",
        "reason": "Core OOP class and object concepts.",
    },
    "https://www.sanfoundry.com/python-questions-answers-encapsulation/": {
        "topic": "Encapsulation",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: Encapsulation, Data Hiding (__private, _protected), Name Mangling & Getters/Setters",
        "reason": "Explicitly used in studentclass_basic.py (self.__sid, get_sid/set_sid) and accountclass.py (self._balance, self.__pin)!",
    },
    "https://www.sanfoundry.com/python-questions-answers-inheritance-1/": {
        "topic": "Inheritance-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: Inheritance (Single, Multiple, Multilevel), super().__init__() & Method Resolution",
        "reason": "Directly matches accountclass.py (Account -> SavingAccount/DematAccount) and Day 7 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-inheritance-2/": {
        "topic": "Inheritance-2",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: super(), isinstance(), issubclass() & Protected/Private Member Inheritance",
        "reason": "isinstance(v, DematAccount) and super().__init__() are explicitly used in bankmgntsystem.py and accountclass.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-polymorphism/": {
        "topic": "Polymorphism",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Polymorphism, Method Overriding, Duck Typing, Abstract Classes & __str__/__repr__",
        "reason": "Matches accountclass.py (ABC, @abstractmethod calculatecharges, overridden __str__) and Sessions 7–8.",
    },
    "https://www.sanfoundry.com/python-interview-questions-answers-experienced/": {
        "topic": "Operator Overloading",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8: Overloading & Overriding (__add__, __eq__, __lt__, __floordiv__, __or__, __invert__, __format__)",
        "reason": "Explicitly listed in Sessions 7 & 8 (Overloading & Overriding) and Day 7 Notes.",
    },
    "https://www.sanfoundry.com/python-questions-answers-decorators/": {
        "topic": "Decorators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 Lab Q3: Decorators (@decorator, Higher-Order Wrappers, *args/**kwargs & @staticmethod)",
        "reason": "Explicitly in Sessions 7 & 8 (Decorators + Lab Q3 log_method_call decorator) and studentclass_static_id.py (@staticmethod)!",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions/": {
        "topic": "Regular Expressions-0",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: Regular Expressions Using Python (re module)",
        "reason": "Explicitly taught in Day 7 Notes and regexpdemo.py.",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-1/": {
        "topic": "Regular Expressions-1",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: Regex Metacharacters (., ^, $, {n}, \\W+), re.search, re.findall, re.split & re.I",
        "reason": "Directly matches regexpdemo.py (re.search, re.match, re.findall, re.sub, re.compile, re.I|re.M)!",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-2/": {
        "topic": "Regular Expressions-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 7 & 8: Regular Expressions Using Python",
        "reason": "Additional regex practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-3/": {
        "topic": "Regular Expressions-3",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7 & 8 & Day 7 Notes: re.match vs re.search, re.compile, Capturing Groups m.group(), Greedy vs Non-Greedy (.*?)",
        "reason": "Greedy vs non-greedy (.*?) and m.group(1) are the centerpiece of regexpdemo.py!",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-4/": {
        "topic": "Regular Expressions-4",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 7 & 8: Regular Expressions Using Python",
        "reason": "Additional regex practice.",
    },
    "https://www.sanfoundry.com/python-questions-answers-regular-expressions-5/": {
        "topic": "Regular Expressions-5",
        "category": "SELECTIVE",
        "syllabus_topic": "Sessions 7 & 8: Regular Expressions Using Python",
        "reason": "Additional regex practice.",
    },
    # --- Session 9: Exception Handling & Generators ---
    "https://www.sanfoundry.com/python-questions-answers-exception-handling/": {
        "topic": "Exception Handling-1",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Exception Handling (try, except, else, finally, raise & Multiple Exceptions)",
        "reason": "Directly matches Session 9 (Exception Handling, Except Clause, Try-Finally Clause, Lab Q1).",
    },
    "https://www.sanfoundry.com/python-questions-answers-exception-handling-2/": {
        "topic": "Exception Handling-2 & Generators",
        "category": "KEEP",
        "syllabus_topic": "Sessions 7–9: Generators (yield, next(), generator expressions) & Exception Handling (assert, try-finally)",
        "reason": "Covers Generators (Sessions 7 & 8 Lab Q3 NumberSeries generator) and assert/try-finally (Session 9)!",
    },
    "https://www.sanfoundry.com/python-questions-answers-exception-handling-3/": {
        "topic": "Exception Handling-3",
        "category": "KEEP",
        "syllabus_topic": "Session 9: Built-in Exceptions (IndexError, NameError, TypeError, ValueError, IOError) & raise",
        "reason": "Directly matches Session 9 and Assignment 5 (OOP & Exception Handling).",
    },
    # --- Session 12: File Handling (Read, Write, Seek, Tell, Modes & Context Managers) ---
    "https://www.sanfoundry.com/python-mcqs-files-1/": {
        "topic": "Files-1",
        "category": "KEEP",
        "syllabus_topic": "Session 12 & Day 7 Notes: File Handling (open, read, readline, readlines, Context Manager 'with open')",
        "reason": "Directly matches Session 12 (File Handling, Context Managers with Statement) and Day 7 Notes!",
    },
    "https://www.sanfoundry.com/python-certification-questions-answers/": {
        "topic": "Files-2",
        "category": "KEEP",
        "syllabus_topic": "Session 12 & Day 7 Notes: File Attributes (name, mode, closed), seek(), tell(), truncate() & os.rename/remove",
        "reason": "seek() and tell() are explicitly highlighted in Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf!",
    },
    "https://www.sanfoundry.com/python-scripting-questions-answers/": {
        "topic": "Files-3 & Pickling",
        "category": "KEEP",
        "syllabus_topic": "Session 5 & Session 12: Binary Modes ('wb'), Pickling/Unpickling, writelines(), flush() & sys.stdin/stdout",
        "reason": "Covers Pickling (Session 5) and binary file I/O / writelines() (Session 12).",
    },
    "https://www.sanfoundry.com/python-scripting-interview-questions-answers/": {
        "topic": "Files-4",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 12: File Modes ('r', 'w', 'a', 'wb+') & Read/Write Methods",
        "reason": "Quick revision of basic file modes and read/write methods.",
    },
    "https://www.sanfoundry.com/python-written-test-questions-answers/": {
        "topic": "Files-5",
        "category": "KEEP",
        "syllabus_topic": "Session 12 & Day 7 Notes: r+ vs w+ Modes, seek(offset, whence), tell() & File Object Attributes",
        "reason": "Covers r+ vs w+ mode differences and seek(offset, 0/1/2) from Day 7 Notes.",
    },
    # --- Excluded / Out of Syllabus ---
    "https://www.sanfoundry.com/python-exam-questions-answers/": {
        "topic": "Operating System (os Module)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (Low-Level Unix OS Calls)",
        "reason": "Low-level Unix os calls (geteuid, fchmod, symlink, fd close) are not in the PGCP-BDA Python syllabus (only getcwd/mkdir are general).",
    },
    "https://www.sanfoundry.com/python-questions-answers-turtle-module-1/": {
        "topic": "Turtle Module-1",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (Turtle Graphics)",
        "reason": "Turtle graphics is not part of the PGCP-BDA Python & Data Analysis syllabus.",
    },
    "https://www.sanfoundry.com/python-questions-answers-turtle-module-2/": {
        "topic": "Turtle Module-2",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (Turtle Graphics)",
        "reason": "Turtle graphics is not part of the PGCP-BDA Python & Data Analysis syllabus.",
    },
    "https://www.sanfoundry.com/python-questions-answers-turtle-module-3/": {
        "topic": "Turtle Module-3",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (Turtle Graphics)",
        "reason": "Turtle graphics is not part of the PGCP-BDA Python & Data Analysis syllabus.",
    },
}


def get_saved_urls(directory: Path) -> set[str]:
    """Scan `.html` files in `PythonSaved` and return canonical Sanfoundry URLs already saved."""
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
    """Return ordered unique topic links from the Python hub HTML with syllabus mapping."""
    items: list[dict[str, Any]] = []
    seen_urls: set[str] = set()

    if HUB_HTML.is_file():
        soup = BeautifulSoup(_normalize_html_p_tags(HUB_HTML.read_bytes()), "html.parser")
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
        description="Open Sanfoundry Python topic pages in batches for saving to PythonSaved/."
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
    saved_urls = get_saved_urls(PYTHON_DIR)

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
    print(f" PGCP-BDA Python Programming — Sanfoundry Topic Opener (Scope: {args.scope.upper()})")
    print("=" * 78)
    print(f" Total in scope : {len(scoped_topics)} pages")
    print(f" Already saved  : {len(already_saved)} pages in {PYTHON_DIR}")
    print(f" Remaining      : {len(missing_topics)} pages to save")
    print("=" * 78)

    if args.status:
        for idx, t in enumerate(scoped_topics, start=1):
            mark = "[SAVED]" if t["url"] in saved_urls else "[TODO] "
            print(f"{idx:3d}. {mark} [{t['category']:9s}] {t['topic']:32s} -> {t['syllabus_topic']}")
        return

    if not missing_topics:
        print("\nAll pages in this scope are already saved in PythonSaved/!")
        return

    PYTHON_DIR.mkdir(parents=True, exist_ok=True)
    batch_size = max(1, args.batch)
    total_batches = (len(missing_topics) + batch_size - 1) // batch_size

    print(f"\nOpening {len(missing_topics)} remaining pages in {total_batches} batch(es) of {batch_size} tabs.")
    print("Tip: In your browser, press Ctrl+S on each tab and save Webpage, HTML Only into:")
    print(f"     {PYTHON_DIR}\n")

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
                saved_now = len(get_saved_urls(PYTHON_DIR))
                print(f"\nStopped. Currently detected {saved_now} saved topic pages in PythonSaved/.")
                print("Run `python open_python_pages.py` again anytime to resume where you left off!")
                return


if __name__ == "__main__":
    main()
