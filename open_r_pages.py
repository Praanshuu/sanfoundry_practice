"""Interactive helper to inspect or open Sanfoundry R Programming topic pages in batches.

Mapped against: `RSaved/R_Programming_Syllabus.pdf` (PGCP-BDA, ACTS Pune — Sessions 14 to 17)

Usage:
  python open_r_pages.py --status           # Show which pages are saved in RSaved/ vs optional missing pages
  python open_r_pages.py                    # Open any missing KEEP pages in batches of 5
  python open_r_pages.py --scope selective  # Open any missing SELECTIVE pages
"""
from __future__ import annotations

import argparse
import time
import webbrowser
from pathlib import Path
from typing import Any

from parser import parse_page

ROOT = Path(__file__).resolve().parent
R_DIR = ROOT / "RSaved"

# Comprehensive syllabus mapping for all 60 saved Sanfoundry R Programming HTML pages
# (ordered chronologically by PGCP-BDA R-Programming Sessions 14 -> 15 -> 16 -> 17 -> Excluded)
TOPIC_SYLLABUS_MAP: dict[str, dict[str, str]] = {
    # =========================================================================
    # SESSION 14: The R Project, Installation, Basics, Finding Help, Code Editors,
    #             R GUI / RStudio & Basic Mathematical / Vectorized Operations (2T + 2L + 2SL)
    # =========================================================================
    "https://www.sanfoundry.com/r-programming-questions-answers-history/": {
        "topic": "History of R-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14: The R Project for Statistical Computing & History of R/S",
        "reason": "Covers origin of R (Ross Ihaka & Robert Gentleman, Auckland, S language, GNU GPL, R Foundation).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-history-2/": {
        "topic": "History of R-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14: The R Project, CRAN, Base Packages & Licensing",
        "reason": "Covers R Core Group, CRAN download, base packages (utils, graphics, stats, datasets), and print(x).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-overview/": {
        "topic": "Overview of R-1",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Introduction & Installation of R, CRAN, Base vs Recommended Packages & RStudio",
        "reason": "Core Session 14 concepts: CRAN, base vs recommended packages, getOption('defaultPackages'), and RStudio.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics/": {
        "topic": "Basics-1 (Prompt, Help & Editors)",
        "category": "KEEP",
        "syllabus_topic": "Session 14: R Basics, Finding Help (?, help, help.search, ??), Prompts (> and +) & Code Editors",
        "reason": "Directly covers Session 14: R prompt (> and +), q(), ?solve / help(solve), help.search() / ??, case sensitivity, and Emacs/ESS.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-3/": {
        "topic": "Basics-3 (Scripts, Coercion & Language Objects)",
        "category": "KEEP",
        "syllabus_topic": "Session 14 & Session 15: .R Script Files, source(), Character Strings & Type Coercion",
        "reason": "Covers .R extension, source() for executing external scripts, as.matrix(), and coercion.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-4/": {
        "topic": "Basics-4 (R GUI, R Commander, RStudio & Scripts)",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Code Editors, Exploring R GUI (R Commander) & Exploring RStudio",
        "reason": "Directly matches Session 14: RStudio IDE, R GUI, R Commander, script editors, install.packages(..., depends=TRUE), options(digits=...), and '<-' assignment.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-console-input-evaluation/": {
        "topic": "Console Input & Evaluation-1",
        "category": "KEEP",
        "syllabus_topic": "Session 14 & Session 15: Console Evaluation, Explicit Printing, Comments (#), source(), sink() & Workspace",
        "reason": "Covers <- assignment, # comments, auto-printing vs print(x), : sequence operator, source(), sink(), objects(), and workspace.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-console-input-evaluation-2/": {
        "topic": "Console Input & Evaluation-2",
        "category": "KEEP",
        "syllabus_topic": "Session 14 & Session 17: Basic Math (sqrt, diag) & Built-in Character/Date Functions (paste, cat, nchar, Sys.Date)",
        "reason": "Covers sqrt(), diag(), paste() vs cat(..., sep='*'), nchar(), as.factor(), dim() on lists, date(), Sys.Date(), and Sys.time().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-vectorized-operations/": {
        "topic": "Vectorized Operations-1",
        "category": "KEEP",
        "syllabus_topic": "Session 14: Basic Mathematical & Vectorized Arithmetic Operations in R",
        "reason": "Directly covers Session 14: vectorized +, -, *, /, logical comparisons (x > 2), element-wise matrix multiplication (x * y), and Date representation.",
    },
    "https://www.sanfoundry.com/r-programming-interview-questions-answers-experienced/": {
        "topic": "Vectorized Operations-2 (Dates & POSIX Times)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14 & Session 17: Date/Time Classes (Date, POSIXct, POSIXlt, strptime) & Date Arithmetic",
        "reason": "Covers Date, POSIXct, POSIXlt, strptime(), weekdays(), months(), quarters(), and vectorized date subtraction.",
    },

    # =========================================================================
    # SESSION 15: Data Objects (Data Types & Structures), Packages, Workspace,
    #             Reading/Importing & Exporting Data (2T + 2L + 2SL)
    # =========================================================================
    "https://www.sanfoundry.com/r-programming-questions-answers-overview-2/": {
        "topic": "Overview of R-2 (Vectors, 1-Based Indexing, NaN/Inf & Coercion)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Data Objects — Atomic Vectors, 1-Based Indexing, Lists, NaN vs Inf & Implicit Coercion",
        "reason": "Covers 1-based indexing (r<-0:10; r[2]), : sequence operator, homogeneous vectors vs heterogeneous lists, NaN, Inf, and implicit coercion c(TRUE, 2) / c(2, 't').",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-overview-3/": {
        "topic": "Overview of R-3 (Integers, Matrices, NA/NaN & Coercion)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Data Types & Structures — Integer Suffix (5L), Matrices (column-wise, rbind, colnames) & is.na()/is.nan()",
        "reason": "Covers c(FALSE, 2), 5L integer literal, as.numeric() coercion warnings, matrix() column-wise fill, rbind(), colnames(), is.na(), and is.nan().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-basics-2/": {
        "topic": "Basics-2 (Atomic Types, typeof vs mode, Coercion & row.names)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: 6 Atomic Vector Types, typeof() vs mode(), NA Propagation & Data Frame row.names()",
        "reason": "Covers 6 atomic types, typeof(1:3) vs mode(1:3), implicit coercion c(1, 'a', FALSE) and c(TRUE, TRUE, 1), NA propagation in x + y, and row.names().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types/": {
        "topic": "Data Types-1 (Atomic Classes, vector(), c() & Attributes)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Data Objects — Atomic Classes, Double Precision, L Suffix, vector(), c() & attributes()",
        "reason": "Core Session 15 foundation: atomic classes, double precision default, L integer suffix, Inf/NaN, attributes(), vector('numeric', 10), and c().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-4/": {
        "topic": "Data Types-4 (Matrices, Arrays, Data Frames, Lists & Factors)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Data Structures — Matrices, Arrays, Data Frames, Lists & Factors (Nominal/Ordinal)",
        "reason": "Directly matches Session 15 bullet 'Data Objects - Data Types & Data Structures (lists, arrays, matrices, data frames)' and ordered/unordered factors.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-5/": {
        "topic": "Data Types-5 (Creating Vectors, Lists, Matrices, Arrays & Data Frames)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Creating & Inspecting Vectors, Lists, Matrices, Arrays, Factors & Data Frames",
        "reason": "Covers c(), list(), matrix(), array(), data.frame(), as.list(), rownames(), typeof(), and data frame equal-length column structure.",
    },
    "https://www.sanfoundry.com/r-programming-exam-questions-answers/": {
        "topic": "Data Types-6 (c, rep, seq, scan & rbind)",
        "category": "KEEP",
        "syllabus_topic": "Session 14 & Session 15: Vector Creation (c, rep, seq), Terminal Input (scan) & Matrix rbind()",
        "reason": "Covers 4 primary data objects (vectors, matrices, data frames, lists), rep(), seq(), scan(), vectorized operations avoiding loops, and rbind().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-data-types-7/": {
        "topic": "Data Types-7 (Indexing & List Manipulation)",
        "category": "KEEP",
        "syllabus_topic": "Session 15 Lab: Creating & Accessing Lists, List Component Extraction, length() & names()",
        "reason": "Directly supports Session 15 Lab Tasks 3 & 4 (creating and accessing elements/sublists from a list, names(), length(), c()/append()).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-reading-datasets/": {
        "topic": "Reading Datasets-1 (Lists, Factors, table(), rbind & is.na())",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Lists, Factors, Frequency Tables table(), rbind() & Missing Values (NA / NaN)",
        "reason": "Covers rbind(x, y), list(), vector('list', 5), factor(), table(x), and is.na() on NA/NaN vectors.",
    },
    "https://www.sanfoundry.com/r-programming-interviews-questions-answers-freshers/": {
        "topic": "Reading Datasets-2 (data.frame, ncol, dimnames, colnames & read.csv)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Data Frames (data.frame, ncol, as.matrix), Named Lists, Matrix dimnames/colnames & read.csv",
        "reason": "Covers data.frame() construction, ncol(), as.matrix(), factor modeling properties, names(), dimnames(), colnames(), and read.csv().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats/": {
        "topic": "Textual Data Formats-1 (read.table, read.csv, save/load, dput/dget & dump)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Reading & Importing Text/CSV Files (read.table, read.csv) & Workspace Export (save, load, dput, dump)",
        "reason": "Directly covers Session 15: read.table() (header, sep, nrows), read.csv(), write.table(), writeLines(), save(), load(), dput(), dget(), and dump().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-textual-data-formats-2/": {
        "topic": "Textual Data Formats-2 (Workspace Persistence: save, save.image, load, readLines & dput)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 15: Handling Data in R Workspace & Exporting Data (.rda, .RData, save, save.image, load, readLines)",
        "reason": "Covers save(), save.image(), load(), .rda/.RData files, readLines(), dput()/dget(), dump()/source(), and serialize().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-connections-interfaces/": {
        "topic": "Connection Interfaces (file, gzfile, bzfile, url, read.csv, save & load)",
        "category": "KEEP",
        "syllabus_topic": "Session 15: Reading & Importing Data via File Connections (file, gzfile, bzfile, url, read.csv) & Workspace Persistence",
        "reason": "Covers file(), gzfile(), bzfile(), url(), read.csv(), save(), save.image(), and load('mydata.RData').",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-commands/": {
        "topic": "Commands-1 (Workspace ls/rm, read.table, subset & order)",
        "category": "KEEP",
        "syllabus_topic": "Session 15 & Session 16: Workspace Commands (ls, rm), read.table(), subset() & Data Frame Sorting with order()",
        "reason": "Directly covers Session 15 Workspace (ls(), rm(x), rm(list=ls())), read.table() for CSV/delimited files, subset(), and Session 15/16 Lab sorting x[rev(order(x$B)),].",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages/": {
        "topic": "Packages-1 (install.packages, reshape2::melt/dcast, stringr & lubridate)",
        "category": "KEEP",
        "syllabus_topic": "Session 15 & Session 16: Working with Packages (install.packages) & Tidyverse/Reshaping Ecosystem (reshape2, stringr, lubridate)",
        "reason": "Covers install.packages(), reshape2 (melt wide-to-long, dcast long-to-wide for Session 16 reshaping), stringr, lubridate, and plyr.",
    },
    "https://www.sanfoundry.com/tough-r-programming-questions/": {
        "topic": "Packages-2 (library, search, .libPaths & abind)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 15: Working with Packages (library(), search(), .libPaths())",
        "reason": "Q1–Q3 test library(), .libPaths(), and search() (Session 15 KEEP); Q4 and Q6–Q10 are obscure CRAN domain packages (Excluded).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages-4/": {
        "topic": "Packages-4 (Installing Multiple Packages & RStudio .Rproj Projects)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14 & Session 15: install.packages(c(...)), RStudio Projects (.Rproj) & Vignettes",
        "reason": "Q1 tests install.packages(c(...)) (KEEP); Q3–Q5 & Q7 cover RStudio .Rproj and vignettes (SELECTIVE); package bundling .Rbuildignore questions are Excluded.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-packages-5/": {
        "topic": "Packages-5 (library, .libPaths & Package Metadata)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 15: Active Libraries (.libPaths) & Loading Packages (library)",
        "reason": "Q2 and Q3 test .libPaths() and library() (Session 15 KEEP); CRAN package authoring internals (DCF, DESCRIPTION) are Excluded.",
    },

    # =========================================================================
    # SESSION 16: Tidyverse (dplyr, ggplot2, reshape2), Data Frame Manipulation,
    #             Subsetting, Sorting, Merging & Visualization (2T + 2L + 2SL)
    # =========================================================================
    "https://www.sanfoundry.com/r-programming-questions-answers-subsetting/": {
        "topic": "Subsetting-1 (Vectors, Matrices, Lists, [, [[, $ & drop=FALSE)",
        "category": "KEEP",
        "syllabus_topic": "Session 16: Accessing & Extracting Subsets from Vectors, Matrices, Lists & Data Frames ([, [[, $, drop=FALSE)",
        "reason": "Core Session 15/16 subsetting: 1-based vector slicing x[1:4], x[c(1,3,4)], matrix indexing x[1,2], x[1,], x[,2], drop=FALSE, and [, [[, $ operators.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-experienced/": {
        "topic": "Subsetting-2 (List Extraction [[ vs $, Computed Indices, Nested Lists & is.na)",
        "category": "KEEP",
        "syllabus_topic": "Session 15 Lab & Session 16: List & Data Frame Extraction ([[ vs $, Computed Indices, Partial Matching, Nested Lists & NA Filtering)",
        "reason": "Directly covers Session 15 Lab Task 4 & Session 16: x[[1]] vs x[1], x$name vs x[[name]] for computed names, nested list x[[c(1,3)]], partial matching, and is.na().",
    },
    "https://www.sanfoundry.com/tricky-r-programming-questions-answers/": {
        "topic": "Commands-2 (Dropping Columns, complete.cases, %in%, max/var with na.rm)",
        "category": "KEEP",
        "syllabus_topic": "Session 16 & Session 17: Subsetting Columns ([,-c(i,j)]), Missing Value Filtering (complete.cases), %in% & Statistical Functions",
        "reason": "Covers dropping columns old[,-c(i,j)], complete.cases(), %in% membership, as.integer() truncation, cumsum(), max(x, na.rm=TRUE), var(x, na.rm=TRUE), dnorm(), and dunif().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-dplyr-basics/": {
        "topic": "dplyr-1 (Grammar of Data Manipulation, select, summarize, mutate & %>%)",
        "category": "KEEP",
        "syllabus_topic": "Session 16: Introduction to Tidyverse & Manipulating Data Frames with dplyr (select, mutate, summarize, %>%)",
        "reason": "Directly covers Session 16 Tidyverse/dplyr: select(), summarize(), mutate(), pipe operator %>%, install.packages('dplyr'), and namespace masking.",
    },
    "https://www.sanfoundry.com/r-programming-test/": {
        "topic": "dplyr-2 (select(-col), filter, arrange(desc), rename, mutate, group_by, %>% & DBI)",
        "category": "KEEP",
        "syllabus_topic": "Session 16: Tidyverse Pipelines with dplyr (select, filter, arrange, desc, rename, mutate, group_by, %>%) & DBI",
        "reason": "High-yield Session 16 page: select() negative column exclusion, filter(), arrange() with desc(), rename(), mutate() vs transmute(), group_by() + summarize(), %>%, DBI, and data.table.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-exploratory-data-analysis/": {
        "topic": "Exploratory Data Analysis-1 (Base Plotting, par, pch & Graphics Devices)",
        "category": "KEEP",
        "syllabus_topic": "Session 16 Lab & Session 17 Lab: Base Graphics System (plot, hist, boxplot, lines, par, pch) & Graphics Devices (pdf, png, svg)",
        "reason": "Covers base plotting two-phase creation + annotation, par(pch=..., mfrow=...), vector vs bitmap devices (PDF, SVG, PNG), and dev.copy2pdf() / dev.off().",
    },
    "https://www.sanfoundry.com/advanced-r-programming-questions-answers/": {
        "topic": "Exploratory Data Analysis-2 (ggplot2 Grammar of Graphics, Geoms & Lattice Plots)",
        "category": "KEEP",
        "syllabus_topic": "Session 16: Tidyverse Visualization with ggplot2 (Grammar of Graphics, geoms) & Lattice Plots (bwplot, xyplot)",
        "reason": "Covers ggplot2 Grammar of Graphics, geoms (point, line, bar), and Lattice conditioning plots (bwplot, xyplot, dotplot, stripplot).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-graphics-2/": {
        "topic": "Graphics with R-2 (High-Level vs Low-Level Plots, pch, col, main & par Parameters)",
        "category": "KEEP",
        "syllabus_topic": "Session 16 Lab & Session 17 Lab: Base Graphics Arguments (main, col, pch), High-Level vs Low-Level Functions & par()",
        "reason": "Directly supports Session 16 & 17 plotting labs: high-level vs low-level plotting functions, main (title), col (color), pch (symbol), and par(ask, new, fin, din).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-ggplot2/": {
        "topic": "ggplot2-1 (Grammar, cut_interval/cut_number, ggsave & Themes)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 16: Tidyverse Data Visualization with ggplot2 (Themes, ggsave & Discretizing Numeric Data)",
        "reason": "Q1–Q3 & Q5 cover ggplot2 grammar, cut_interval/cut_number, and theme_minimal/theme_classic (Session 16); deprecated ggplot2 v0.8 internals are Excluded.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-1/": {
        "topic": "Visualizing Data-1 (quantile, prop.table, barplot, mosaicplot, ecdf, View & chisq.test)",
        "category": "KEEP",
        "syllabus_topic": "Session 16 Lab & Session 17: Visualizing Data (barplot, mosaicplot, xyplot), Contingency Tables (prop.table), quantile(), View() & chisq.test()",
        "reason": "Covers quantile(), prop.table(), mosaicplot(), xyplot(), ecdf(), View() spreadsheet viewer, and chisq.test().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-visualizing-data-2/": {
        "topic": "Visualizing Data-2 (cut, lm, qqline, bwplot, anova, var/sd & fisher.test)",
        "category": "KEEP",
        "syllabus_topic": "Session 16 & Session 17: Binning (cut), Boxplots (bwplot), Normality (qqline) & Built-in Statistical Functions (var, sd, lm, anova, fisher.test)",
        "reason": "Covers cut() binning, lm(), qqline()/qqnorm(), bwplot(), anova(), var()/sd(), and fisher.test().",
    },

    # =========================================================================
    # SESSION 17: Functions, Control Flow, Loop Functions (apply Family),
    #             Built-in Functions (Numeric, Character, Statistical) & R Markdown (2T + 2L + 2SL)
    # =========================================================================
    "https://www.sanfoundry.com/r-programming-questions-answers-control-structures/": {
        "topic": "Control Structures-1 (if-else, for, while, break & runif)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Control Flow in R Programs & Functions (if-else, for, while, break & runif)",
        "reason": "Core R control structures used inside functions and scripts: if-else syntax, while loop, for(i in 1:n), break, and runif().",
    },
    "https://www.sanfoundry.com/r-programming-quiz/": {
        "topic": "Control Structures-2 (next, repeat, break, any() & Positional switch())",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Loop Control (next, break, repeat), Vector Guard any() & switch()",
        "reason": "Covers next (skip iteration), break (exit loop), repeat loop, if(any(x <= 0)) guard for log(x), and positional switch().",
    },
    "https://www.sanfoundry.com/r-programming-mcqs/": {
        "topic": "Control Structures-3 (Named switch(), Function Dispatch with switch() & else-if)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Multi-Branch Dispatch with switch() Inside Functions, else-if Syntax & Semicolon Statement Separation",
        "reason": "Covers positional/named switch(), out-of-range switch() returning NULL, switch(type, mean=..., median=...) inside a function, and else if syntax.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions/": {
        "topic": "Functions-1 (Defining Functions, First-Class Objects, Return Values & seq_len)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Functions in R (function() Directive, First-Class Objects, Empty Function NULL Return & Explicit/Implicit Return)",
        "reason": "Directly covers Session 17 'Functions': function() directive, class(f) == 'function', first-class objects, NULL return from empty function, and last-expression return value.",
    },
    "https://www.sanfoundry.com/r-programming-multiple-choice-questions-answers/": {
        "topic": "Functions-2 (Formal Arguments, Default Values, Lazy Evaluation, ... & is.null)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Function Arguments (formals, args, Default Values, Lazy Evaluation, Exact Matching After ... & is.null)",
        "reason": "High-yield Session 17 page: formals(), args(), default arguments, lazy evaluation (unused parameter b causes no error), exact matching after ... in paste(), and is.null().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-3/": {
        "topic": "Functions-3 (Vector Recycling, t(), with(), t.test, knitr/R Markdown & Data Structures)",
        "category": "KEEP",
        "syllabus_topic": "Session 14–17: Vector Recycling (M*N), Matrix Transpose t(), with(), t.test(), R Markdown/knitr & Data Structures",
        "reason": "Covers vector recycling M*N, NA vs NaN, homogeneous vs heterogeneous data structures, t() transpose reshaping, with(), dplyr, t.test(), and knitr single-document reporting (Session 17 R Markdown).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-4/": {
        "topic": "Functions-4 (data.table, save(), log(-5.8), unclass(as.Date) & Data Frames vs Matrices)",
        "category": "KEEP",
        "syllabus_topic": "Session 15–17: Data Frame Heterogeneity, save(), log() NaN Warning, unclass(as.Date()) & Plot Annotation",
        "reason": "Covers data.table + dplyr integration, base graphics annotation, save(x, file='x.Rdata'), log(-5.8) -> NaN, unclass(as.Date()), and heterogeneous data frames vs homogeneous matrices.",
    },
    "https://www.sanfoundry.com/r-programming-question-papers/": {
        "topic": "Functions-5 (rbind, Factors, by(), Vector Coercion with NA/Character & Memory Limits)",
        "category": "KEEP",
        "syllabus_topic": "Session 15–17: Combining Datasets (rbind), Factor Variables, by() Grouping Function & Vector Coercion Rules",
        "reason": "Covers rbind() for combining datasets with identical columns, factor variables, by() for applying functions across factor levels, and class of c(number, NA) vs c(number, character).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-functions-6/": {
        "topic": "Functions-6 (vapply vs sapply/lapply, seq(), read.csv(), is.matrix() & testthat)",
        "category": "KEEP",
        "syllabus_topic": "Session 15 & Session 17: Loop Functions (vapply vs sapply/lapply), seq() vs seq_along(), read.csv() & is.matrix()",
        "reason": "Covers vapply() pre-specified output type safety, seq(9) vs seq_along(), read.csv(), is.matrix(), and # comments.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-scoping-rules/": {
        "topic": "Scoping Rules-1 (Lexical Scoping, Free Variables, Environments, Closures & search())",
        "category": "KEEP",
        "syllabus_topic": "Session 14 Lab (Scope of R) & Session 17 (Functions): Lexical Scoping, Free Variables, Closures & Environment Search List",
        "reason": "Directly covers Session 14 Lab 'Scope of R' & Session 17 'Functions': lexical scoping, free variables, function closures, search() path order, and empty environment.",
    },
    "https://www.sanfoundry.com/r-programming-online-test/": {
        "topic": "Scoping Rules-2 (Environments, Lexical vs Dynamic Scoping & Free Variable Lookup)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 14 Lab & Session 17: Environments as (Symbol, Value) Pairs & Lexical Free Variable Resolution",
        "reason": "Q1–Q5 & Q10 test lexical scoping, environments, and free variable evaluation g(2); contextless Coursera make.NegLogLik questions (Q6–Q9) are Excluded.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-loop-functions/": {
        "topic": "Loop Functions-1 (lapply, sapply, apply, tapply & mapply)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Loop Functions & Built-in Functional Programming (lapply, sapply, apply, tapply, mapply)",
        "reason": "Core R loop functions: lapply() over lists, sapply() simplification, apply() over array/matrix margins, tapply() over ragged vector subsets, and mapply().",
    },
    "https://www.sanfoundry.com/r-programming-quiz-online/": {
        "topic": "Loop Functions-2 (split() + lapply/sapply Paradigm, Anonymous Functions & Extra Args)",
        "category": "KEEP",
        "syllabus_topic": "Session 17 & Session 17 Lab (ChickWeight with split): split(), lapply/sapply with Anonymous Functions & Extra Arguments",
        "reason": "Directly matches Session 17 Lab ('The function split will prove useful'): split(x, f), lapply/sapply with anonymous functions function(elt) elt[,1], and passing extra arguments via ....",
    },
    "https://www.sanfoundry.com/tough-r-programming-questions-answers/": {
        "topic": "Commands-3 (apply(X, MARGIN, FUN), rowsum, which.min/max, rev, hist & title)",
        "category": "KEEP",
        "syllabus_topic": "Session 17 & Session 17 Lab: Matrix apply(X, MARGIN, FUN), rowsum(), which.min/max(), rev(), hist() & title()",
        "reason": "Covers apply(x, 2, max), which.min(x), rowsum(x, group), rev(x), solve(A, B), par(omi=...), hist(), and title('R language') (Session 17 Lab: 'Add a legend and a title').",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-debugging-tools/": {
        "topic": "Debugging-1 (log(-2.3) NaN Warning, Handling NA in Functions, invisible, Vectorize & traceback)",
        "category": "KEEP",
        "syllabus_topic": "Session 17: Handling NA in Functions (if(is.na(x))), Built-in Numeric Warnings (log(-2.3)), invisible() & traceback()",
        "reason": "Covers log(-2.3) NaN warning, if(x > 0) error when x is NA vs if(is.na(x)) guard, invisible(x), Vectorize(), traceback(), and recover().",
    },
    "https://www.sanfoundry.com/r-programming-questions-bank/": {
        "topic": "Debugging Tools-2 (traceback, debug, browser, trace & recover)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 17: Interactive Function Debugging Tools (traceback, debug, browser, trace, recover)",
        "reason": "Covers R's 5 built-in function debugging tools: traceback(), debug(), browser(), trace(), and recover().",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression/": {
        "topic": "Linear Regression-1 (lm Formula Operators, describe, multi.hist & Regression Plots)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 17: Built-in Statistical Modeling Functions (lm Formula Syntax first*second, describe & Diagnostic Plots)",
        "reason": "Covers lm(response ~ first*second) interaction formula expansion, describe(), multi.hist(), and diagnostic plots (Scatterplot, Boxplot, Density plot).",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression-2/": {
        "topic": "Linear Regression-2 (lm(formula, data) Function & Regression Metrics)",
        "category": "SELECTIVE",
        "syllabus_topic": "Session 17: Built-in Statistical Modeling Functions — lm(formula, data)",
        "reason": "Q6 & Q7 cover R's built-in lm(formula, data) function; remaining pure regression theory questions are Excluded from R Programming.",
    },
    "https://www.sanfoundry.com/r-programming-questions-answers-linear-regression-3/": {
        "topic": "Linear Regression-3 (ANOVA & Regression Concepts)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Pure Statistics / Linear Regression Theory — No R Code)",
        "reason": "Generic statistics/regression definitions (interpolation, extrapolation, OLS, reverse regression) with no R language syntax or functions (save Q5 ANOVA abbreviation).",
    },

    # =========================================================================
    # EXCLUDED / OUT OF SYLLABUS PAGES
    # =========================================================================
    "https://www.sanfoundry.com/r-programming-questions-answers-neural-networks/": {
        "topic": "Neural Networks (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Biological/Artificial Neural Networks Trivia — Not in R Syllabus)",
        "reason": "Contains generic biological/ANN trivia (Haykin 1994, animal brain, Threshold Logic Unit, membrane hyperpolarization) with zero R programming content.",
    },
    "https://www.sanfoundry.com/r-programming-puzzles/": {
        "topic": "Packages-3 (Obscure CRAN Domain Packages — Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded (Obscure Domain-Specific CRAN Packages: Paleontology, Oceanography, Microarrays)",
        "reason": "Tests random niche CRAN packages (G.S., paleoTS, satin, ternvis, M2, kBestShortestPaths) completely outside the PGCP-BDA R syllabus.",
    },
}


def get_ordered_topics() -> list[dict[str, str]]:
    """Return all mapped R topic pages in chronological PGCP-BDA syllabus order."""
    out: list[dict[str, str]] = []
    for url, meta in TOPIC_SYLLABUS_MAP.items():
        norm = url.rstrip("/") + "/"
        out.append({"url": norm, **meta})
    return out


def get_saved_urls() -> dict[str, Path]:
    """Return a mapping of normalized canonical URL -> local HTML path for all saved R pages."""
    saved: dict[str, Path] = {}
    if not R_DIR.is_dir():
        return saved
    for f in sorted(R_DIR.glob("*.html")):
        p = parse_page(f.read_bytes(), url=f.as_posix())
        if p.url:
            saved[p.url.rstrip("/") + "/"] = f
    return saved


def main() -> None:
    ap = argparse.ArgumentParser(description="Check or open Sanfoundry R Programming MCQ pages.")
    ap.add_argument("--scope", choices=["keep", "selective", "all"], default="keep")
    ap.add_argument("--batch", type=int, default=5)
    ap.add_argument("--status", action="store_true")
    args = ap.parse_args()

    saved = get_saved_urls()
    topics = get_ordered_topics()

    if args.status:
        print(f"Saved HTML files in RSaved/: {len(saved)} / {len(topics)} mapped topics")
        for idx, item in enumerate(topics, start=1):
            u = item["url"]
            mark = "SAVED" if u in saved else "MISSING"
            print(f"  {idx:2d}. [{mark}] [{item['category']:9s}] {item['topic']} -> {u}")
        return

    allowed = {"KEEP"} if args.scope == "keep" else ({"KEEP", "SELECTIVE"} if args.scope == "selective" else {"KEEP", "SELECTIVE", "REMOVE"})
    missing = [t for t in topics if t["category"] in allowed and t["url"] not in saved]
    if not missing:
        print(f"All {len(saved)} mapped R pages for scope '{args.scope}' are already saved in RSaved/!")
        return

    for i in range(0, len(missing), args.batch):
        chunk = missing[i : i + args.batch]
        print(f"\nOpening batch {i // args.batch + 1} ({len(chunk)} pages):")
        for item in chunk:
            print(f"  - [{item['category']}] {item['topic']}: {item['url']}")
            webbrowser.open_new_tab(item["url"])
            time.sleep(0.4)
        if i + args.batch < len(missing):
            input("Press Enter after saving these pages with Ctrl+S to open the next batch...")


if __name__ == "__main__":
    main()
