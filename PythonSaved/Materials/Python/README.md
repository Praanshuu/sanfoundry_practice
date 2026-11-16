# CDAC PGCP-BDA — Python Programming Study Hub

Welcome to your structured Python study workspace! All notes, code demos, datasets, and assignments have been organized chronologically and by topic to align with the **CDAC PGCP-BDA Python Syllabus**.

---

## Folder Structure Overview

- **`00_Syllabus_and_Study_Guide/`** — Official course syllabus and lab breakdown ([Python_Syllabus_PGCP_BDA.pdf](00_Syllabus_and_Study_Guide/Python_Syllabus_PGCP_BDA.pdf))
- **`01_Notes/`** — Day 1 to Day 7 lecture notes and environment setup guide, renamed by topic
- **`02_Code_Demos/`** — All Python scripts, notebooks, and datasets (including extracted `.zip` archives), grouped into 8 topic modules
- **`03_Assignments/`** — Problem statements paired side-by-side with their solved PDFs and datasets
- **`_Archive/`** — Original `.zip` archives and exact duplicate PDFs preserved for backup

---

## Step-by-Step Study Roadmap

### Module 1: Python Fundamentals, Control Flow & Loops (Sessions 1–2)
* **Lecture Notes:**
  * [Day_01a_Intro_PVM_and_Operators.pdf](01_Notes/Day_01a_Intro_PVM_and_Operators.pdf) — Python features, installation, PVM bytecode execution, arithmetic/logical/relational/bitwise/walrus operators
  * [Day_01b_Syntax_DataTypes_IfElse_and_Print.pdf](01_Notes/Day_01b_Syntax_DataTypes_IfElse_and_Print.pdf) — Dynamic typing, basic types vs. data structures, indentation, `input()`, `if-elif-else`, `print()` formatting
  * [Day_02_Bitwise_and_Loops_For_While.pdf](01_Notes/Day_02_Bitwise_and_Loops_For_While.pdf) — Bitwise masking/shifting, `for` loops, `while` loops, `for-else` & `while-else` prime/digit logic
* **Code Demos (`02_Code_Demos/01_Basics_Loops_Functions_Strings/`):**
  * [loopdemo.py](02_Code_Demos/01_Basics_Loops_Functions_Strings/loopdemo.py)
* **Assignments:**
  * **Loops:** [Assignment_01_Loops_Questions.pdf](03_Assignments/01_Loops/Assignment_01_Loops_Questions.pdf) | [Assignment_01_Loops_Solved.pdf](03_Assignments/01_Loops/Assignment_01_Loops_Solved.pdf)
  * **Conditionals (`if-else`):** [Assignment_02_If_Statements_Questions.pdf](03_Assignments/02_If_Statements/Assignment_02_If_Statements_Questions.pdf) *(Unsolved — great for practice!)*

---

### Module 2: Functions, `match-case`, Math & Strings (Sessions 2 & 5)
* **Lecture Notes:**
  * [Day_03_MatchCase_Functions_Math_and_Strings.pdf](01_Notes/Day_03_MatchCase_Functions_Math_and_Strings.pdf) — `match-case` (Python 3.10+), default/keyword arguments, recursion, `math` module, string slicing, string methods, object identity (`id()`, `is`)
* **Code Demos (`02_Code_Demos/01_Basics_Loops_Functions_Strings/`):**
  * [functiondemo.py](02_Code_Demos/01_Basics_Loops_Functions_Strings/functiondemo.py)
  * [stringdemo.py](02_Code_Demos/01_Basics_Loops_Functions_Strings/stringdemo.py)
* **Assignments:**
  * **Strings:** [Assignment_03_Strings_Questions.pdf](03_Assignments/03_Strings/Assignment_03_Strings_Questions.pdf) | [Assignment_03_Strings_Solved.pdf](03_Assignments/03_Strings/Assignment_03_Strings_Solved.pdf)

---

### Module 3: Data Structures & Functional Programming (Sessions 3–6)
* **Lecture Notes:**
  * [Day_04_Lists_and_Tuples.pdf](01_Notes/Day_04_Lists_and_Tuples.pdf) — `list` methods (`append`, `extend`, `insert`, `pop`, `remove`, `sort`, `copy`), `tuple` operations & properties
  * [Day_05_Iterables_Lambda_Filter_Reduce.pdf](01_Notes/Day_05_Iterables_Lambda_Filter_Reduce.pdf) — `zip()`, `enumerate()`, `sorted()`, `reversed()`, `lambda`, `filter()`, `map()`, `reduce()`
  * [Day_06_Sets_and_Dictionaries.pdf](01_Notes/Day_06_Sets_and_Dictionaries.pdf) — `set` operations & Venn diagrams (union, intersection, difference, symmetric difference), `dict` methods & comprehensions
* **Code Demos (`02_Code_Demos/02_Data_Structures_and_Functional/`):**
  * Lists & Tuples: [listdemos.py](02_Code_Demos/02_Data_Structures_and_Functional/listdemos.py), [listdemo1.py](02_Code_Demos/02_Data_Structures_and_Functional/listdemo1.py), [tupledemo1.py](02_Code_Demos/02_Data_Structures_and_Functional/tupledemo1.py)
  * Iterables & Functional: [zipenumeratedemo.py](02_Code_Demos/02_Data_Structures_and_Functional/zipenumeratedemo.py), [filtermapdemo.py](02_Code_Demos/02_Data_Structures_and_Functional/filtermapdemo.py)
  * Sets & Dictionaries: [setdemo.py](02_Code_Demos/02_Data_Structures_and_Functional/setdemo.py), [dictinarydemo.py](02_Code_Demos/02_Data_Structures_and_Functional/dictinarydemo.py)
  * Mini-Project (Course Management System): [coursemgntsystem_basic.py](02_Code_Demos/02_Data_Structures_and_Functional/coursemgntsystem_basic.py) | [coursemgntsystem_full.py](02_Code_Demos/02_Data_Structures_and_Functional/coursemgntsystem_full.py)
* **Assignments:**
  * **Functions & Lists:** [Assignment_04_Functions_Questions.pdf](03_Assignments/04_Functions_and_Lists/Assignment_04_Functions_Questions.pdf) | [Assignment_04_Functions_Solved.pdf](03_Assignments/04_Functions_and_Lists/Assignment_04_Functions_Solved.pdf)
  * **Consolidated Lab Practice (ROT-13, Dictionaries, Menus):** [SLA_Consolidated_Lab_Questions.pdf](03_Assignments/08_SLA_Lab_Questions/SLA_Consolidated_Lab_Questions.pdf)

---

### Module 4: Modules, Packages, Regular Expressions, OOP & File Handling (Sessions 7–9 & 12)
* **Lecture Notes:**
  * [Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf](01_Notes/Day_07_Regex_OOP_Inheritance_and_FileHandling.pdf) — `re` module & regex patterns, classes, private/protected members, `@staticmethod`, inheritance types, file I/O (`open`, `read`, `seek`, `tell`)
* **Code Demos:**
  * **Modules (`02_Code_Demos/03_Modules_and_Packages/`):** [module1.py](02_Code_Demos/03_Modules_and_Packages/module1.py), [usemodule1.py](02_Code_Demos/03_Modules_and_Packages/usemodule1.py), `mypackage/`
  * **Regex & OOP (`02_Code_Demos/04_Regex_and_OOP/`):** [regexpdemo.py](02_Code_Demos/04_Regex_and_OOP/regexpdemo.py), [studentclass_basic.py](02_Code_Demos/04_Regex_and_OOP/studentclass_basic.py), [studentclass_static_id.py](02_Code_Demos/04_Regex_and_OOP/studentclass_static_id.py), [accountclass.py](02_Code_Demos/04_Regex_and_OOP/accountclass.py), [bankmgntsystem.py](02_Code_Demos/04_Regex_and_OOP/bankmgntsystem.py)
* **Assignments:**
  * **OOP & Custom Exceptions:** [Assignment_05_OOP_Questions.pdf](03_Assignments/05_OOP/Assignment_05_OOP_Questions.pdf) | [Assignment_05_OOP_Solved.pdf](03_Assignments/05_OOP/Assignment_05_OOP_Solved.pdf)
  * **File Handling + OOP Inheritance:** [Assignment_06_FileHandling_OOP_Questions.pdf](03_Assignments/06_File_Handling_and_OOP/Assignment_06_FileHandling_OOP_Questions.pdf) *(Unsolved — great for practice!)*

---

### Module 5: NumPy, Pillow Image Processing, Pandas & Data Visualization (Sessions 10–11)
* **Code Demos:**
  * **NumPy & Pillow (`02_Code_Demos/06_NumPy_and_Pillow_Images/`):**
    * [numpydemoall.py](02_Code_Demos/06_NumPy_and_Pillow_Images/numpydemoall.py) — Array creation, reshaping, stacking, indexing, matrix operations
    * [imagedemo_pillow_full.py](02_Code_Demos/06_NumPy_and_Pillow_Images/imagedemo_pillow_full.py), [imagedemo_pillow_basic.py](02_Code_Demos/06_NumPy_and_Pillow_Images/imagedemo_pillow_basic.py), [house.jpg](02_Code_Demos/06_NumPy_and_Pillow_Images/house.jpg) — Cropping, resizing, transposing, RGB channels, `ImageDraw`
  * **Pandas Data Wrangling (`02_Code_Demos/07_Pandas_Data_Wrangling/`):**
    * Scripts: [pandasseries_demo.py](02_Code_Demos/07_Pandas_Data_Wrangling/pandasseries_demo.py), [pandasdemo1.py](02_Code_Demos/07_Pandas_Data_Wrangling/pandasdemo1.py), [pandas_merge_concat.py](02_Code_Demos/07_Pandas_Data_Wrangling/pandas_merge_concat.py), [mergeframe.py](02_Code_Demos/07_Pandas_Data_Wrangling/mergeframe.py), [handling_missing_data_fillna_dropna_interpolate.py](02_Code_Demos/07_Pandas_Data_Wrangling/handling_missing_data_fillna_dropna_interpolate.py)
    * Jupyter Notebooks: [handling_missing_data_fillna_dropna_interpolate.ipynb](02_Code_Demos/07_Pandas_Data_Wrangling/handling_missing_data_fillna_dropna_interpolate.ipynb), [handling_missing_data_replace.ipynb](02_Code_Demos/07_Pandas_Data_Wrangling/handling_missing_data_replace.ipynb), [pandas_group_by.ipynb](02_Code_Demos/07_Pandas_Data_Wrangling/pandas_group_by.ipynb)
  * **Data Visualization (`02_Code_Demos/08_Data_Visualization/`):**
    * Matplotlib: [linechart.py](02_Code_Demos/08_Data_Visualization/linechart.py), [piechart.py](02_Code_Demos/08_Data_Visualization/piechart.py), [histogramdemo.py](02_Code_Demos/08_Data_Visualization/histogramdemo.py), [scatter.py](02_Code_Demos/08_Data_Visualization/scatter.py), [stackplotgraph.py](02_Code_Demos/08_Data_Visualization/stackplotgraph.py), [testbargraphruns.py](02_Code_Demos/08_Data_Visualization/testbargraphruns.py)
    * Seaborn: [seaborndemo.py](02_Code_Demos/08_Data_Visualization/seaborndemo.py), [seaborndemo1.py](02_Code_Demos/08_Data_Visualization/seaborndemo1.py), [seaborndemo2.py](02_Code_Demos/08_Data_Visualization/seaborndemo2.py), [seabornboxplot.py](02_Code_Demos/08_Data_Visualization/seabornboxplot.py), [seabornscatter.py](02_Code_Demos/08_Data_Visualization/seabornscatter.py)
    * Plotly: [plotlyscatter.py](02_Code_Demos/08_Data_Visualization/plotlyscatter.py), [plotlydemo.py](02_Code_Demos/08_Data_Visualization/plotlydemo.py), [plotlydemo1.py](02_Code_Demos/08_Data_Visualization/plotlydemo1.py), [plotlydemo2.py](02_Code_Demos/08_Data_Visualization/plotlydemo2.py)
* **Assignments (`03_Assignments/07_NumPy_and_Movie_Analysis/`):**
  * **NumPy Questions:** [Assignment_07_NumPy_Questions.pdf](03_Assignments/07_NumPy_and_Movie_Analysis/Assignment_07_NumPy_Questions.pdf)
  * **Movie Analysis Questions:** [Assignment_07_Movie_Analysis_Questions.txt](03_Assignments/07_NumPy_and_Movie_Analysis/Assignment_07_Movie_Analysis_Questions.txt)
  * **Combined Solutions (Movie Analysis pages 1–5 + NumPy pages 6–10):** [Movie_and_NumPy_Assignments_Solved.pdf](03_Assignments/07_NumPy_and_Movie_Analysis/Movie_and_NumPy_Assignments_Solved.pdf)
  * **CSV Datasets:** Located in `03_Assignments/07_NumPy_and_Movie_Analysis/datasets/`

---

### Module 6: Virtual Environments & Database Connectivity (Session 13)
* **Lecture Notes:**
  * [Setup_Virtual_Environments_Conda_Venv.pdf](01_Notes/Setup_Virtual_Environments_Conda_Venv.pdf) — Creating, activating, and managing environments with `conda` and `virtualenv`
* **Code Demos (`02_Code_Demos/05_Database_MongoDB/`):**
  * [mongodbpython.py](02_Code_Demos/05_Database_MongoDB/mongodbpython.py) — CRUD operations with `pymongo`
