"""Interactive helper and syllabus mapping for Sanfoundry Linux & Cloud Computing pages.

Mapped against: `LinuxSaved/Linux & Cloud Computing.pdf` (PGCP-BDA, ACTS Pune — August 2026)
Source hub pages:
  - `LinuxSaved/1000 Linux MCQ (Multiple Choice Questions) - Sanfoundry.html`
  - `LinuxSaved/cloud/1000 Cloud Computing MCQ (Multiple Choice Questions) - Sanfoundry.html`

Usage:
  python open_linux_cloud_pages.py                    # Opens missing KEEP (core syllabus) pages in batches of 5
  python open_linux_cloud_pages.py --scope selective  # Opens missing SELECTIVE pages in batches of 5
  python open_linux_cloud_pages.py --scope all        # Opens KEEP + SELECTIVE + REMOVE pages
  python open_linux_cloud_pages.py --status           # Show which pages are saved vs missing
"""
from __future__ import annotations

import argparse
import time
import webbrowser
from pathlib import Path
from typing import Any

from parser import parse_page

ROOT = Path(__file__).resolve().parent
LINUX_DIR = ROOT / "LinuxSaved"
CLOUD_DIR = LINUX_DIR / "cloud"
LINUX_HUB_HTML = LINUX_DIR / "1000 Linux MCQ (Multiple Choice Questions) - Sanfoundry.html"
CLOUD_HUB_HTML = CLOUD_DIR / "1000 Cloud Computing MCQ (Multiple Choice Questions) - Sanfoundry.html"

# Syllabus mapping based on `LinuxSaved/Linux & Cloud Computing.pdf` (PGCP-BDA, ACTS Pune)
TOPIC_SYLLABUS_MAP: dict[str, dict[str, str]] = {
    # =========================================================================
    # PART I: LINUX PROGRAMMING (8T + 10L + 2SL)
    # =========================================================================

    # --- Linux Session 1: Linux Fundamentals and Basic Commands (2T + 4L) ---
    "https://www.sanfoundry.com/linux-administration-questions-startup-shutdown/": {
        "topic": "Linux Startup & Shutdown (Run Levels)",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Linux Fundamentals, Boot/Run Levels & Basic Commands",
        "reason": "Directly covers Run Levels (0-6, S), /etc/inittab, init (PID 1), initrd, and Startup/Shutdown sequence in Session 1.",
    },
    "https://www.sanfoundry.com/linux-filesystem-hierarchy-questions-answers-1/": {
        "topic": "Linux Filesystem Hierarchy (FHS)-1",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Linux Fundamentals, Filesystem Hierarchy (/boot, /etc, /dev, /mnt, /root)",
        "reason": "Covers standard Linux directory hierarchy (/boot, /root, /sbin, /dev, /mnt, /etc/shadow) essential for Linux Fundamentals.",
    },
    "https://www.sanfoundry.com/linux-filesystem-hierarchy-questions-answers-2/": {
        "topic": "Linux Filesystem Hierarchy (FHS)-2",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Linux Fundamentals, Filesystem Hierarchy (/etc, /media, /bin/sh, /tmp, /opt)",
        "reason": "Covers /etc configuration files, /media, /bin/sh, /boot, /opt, and /tmp from Session 1 Linux Environment.",
    },
    "https://www.sanfoundry.com/linux-administration-multiple-choice-questions-2/": {
        "topic": "File Management & Basic Commands-1",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Basic Commands (cp, mv, rm, rmdir -p, cd, ~, Inodes & File Timestamps)",
        "reason": "Explicitly covers cp, mv, rm, rmdir -p, cd .., ~ (home), inodes, and file timestamps listed in Session 1 Basic Commands.",
    },
    "https://www.sanfoundry.com/linux-administration-questions-freshers/": {
        "topic": "File Management & Links (ln / ln -s)-2",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Basic Commands (ln and ln -s Hard/Soft Links, touch, cp, sort, chmod)",
        "reason": "Directly covers hard links (ln) vs symbolic/soft links (ln -s), inode sharing, touch, sort, and chmod from Session 1.",
    },
    "https://www.sanfoundry.com/linux-administration-quiz-file-types/": {
        "topic": "Linux File Types & Device Files",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1 & Session 2: File Types, Inodes, Hard/Soft Links & /dev Device Files",
        "reason": "Covers regular, directory, character/block device (/dev), FIFO, socket, and link file types.",
    },
    "https://www.sanfoundry.com/linux-administration-questions-process-mgmt/": {
        "topic": "Process Management & Job Control (ps, kill, bg, fg)",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1 & Sessions 3–4: Process Management (ps, kill -9, su, bg, fg, &, nice, nohup)",
        "reason": "Explicitly listed in Session 1 (ps, kill) and Sessions 3 & 4 (Job control and processes).",
    },
    "https://www.sanfoundry.com/linux-administration-questions-account-mgmt/": {
        "topic": "User Account Management (who, passwd, /etc/passwd)",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1 & Sessions 2–4: Logging In/Out, Users & Groups (/etc/passwd, /etc/shadow, /etc/group, who, su, chsh)",
        "reason": "Covers UID 0 (root), /etc/passwd, /etc/shadow, /etc/group, who | wc -l, chsh, and login shell.",
    },
    "https://www.sanfoundry.com/linux-questions-search-pattern-matching/": {
        "topic": "Search & Pattern Matching (grep, sort, uniq, cut, comm)",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Basic Commands (grep, sort, uniq, cut, awk, wildcards)",
        "reason": "Directly covers grep (-n, -c, -i, regex ^$), sort, uniq, cut, and pattern matching in Session 1.",
    },
    "https://www.sanfoundry.com/makefile-questions-answers-1/": {
        "topic": "Makefile & make Utility",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 1: Basic Commands (makefile & make options)",
        "reason": "'makefile' is explicitly listed in Session 1 Basic Commands!",
    },
    "https://www.sanfoundry.com/linux-interview-questions-experienced/": {
        "topic": "Linux Systems & Run Levels",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1: Linux Kernel Overview, Run Levels (runlevel 3), man Pages & Daemons",
        "reason": "Runlevel 3, man page sections, monolithic kernel, and daemon processes are useful for Session 1; low-level x86/timer calls are extra.",
    },
    "https://www.sanfoundry.com/unix-internals-interview-questions/": {
        "topic": "Process Management Internals (init, Zombie, nice)",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1: Process Management (init PID 1, Zombie/Orphan processes, nice/-20..19)",
        "reason": "Covers PID 1 (init), zombie processes, and nice priorities alongside C fork() internals.",
    },
    "https://www.sanfoundry.com/unix-interview-questions-answers/": {
        "topic": "Signal Handling Concepts (SIGINT, SIGKILL, kill)",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Sessions 3–4: Signals & Process Control (Ctrl+C SIGINT, Ctrl+Z SIGSTOP, SIGKILL, kill)",
        "reason": "Covers Ctrl+C (SIGINT), Ctrl+Z, SIGKILL (cannot be caught), and kill command/system call.",
    },

    # --- Linux Session 2: Linux File Management, Permissions & Vi Editor (2T + 2L) ---
    "https://www.sanfoundry.com/linux-questions-file-modes-permissions/": {
        "topic": "File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 2: File Permissions (chmod octal/symbolic, umask, SUID, SGID, Sticky Bit)",
        "reason": "Core Session 2 topic: chmod octal (764, 744), chmod -R +x, umask, SUID (4000), SGID (2000), and Sticky Bit (1000).",
    },
    "https://www.sanfoundry.com/linux-dumps-redhat-ubuntu-suse/": {
        "topic": "File Permissions & Modes (chmod, umask, Sticky Bit)-2",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 2: File Permissions (chmod u/g/o/a, umask calculation, Sticky Bit +t)",
        "reason": "Core Session 2 topic: symbolic chmod (u=rw, o-w, u+x, +t), octal 1755, and default file/directory umask.",
    },
    "https://www.sanfoundry.com/linux-questions-file-systems/": {
        "topic": "Filesystem Overview (mount, df, /etc/fstab, ext4)",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 2: Basics of I/O System with mount and unmount (df, /etc/fstab, mount -r, ext4)",
        "reason": "Explicitly matches Session 2 'Basics of I/O system with mount and unmount' (mount, mount-point, /etc/fstab, df, ext4).",
    },
    "https://www.sanfoundry.com/linux-questions-answers-vi-editor/": {
        "topic": "Vi / Vim Editor Commands",
        "category": "KEEP",
        "syllabus_topic": "Linux Session 2: Vi/vim Editor (Modes, Editing, Search /, Cut-Copy-Paste yy/x/X, :set nu, :set ai, :wq)",
        "reason": "Directly covers every bullet under Session 2 Vi/vim Editor (modes, :q/:wq, yy, X/x, / and ?, :set ai, :set nu).",
    },

    # --- Linux Sessions 3 & 4: Shell Programming (4T + 4L + 2SL) ---
    "https://www.sanfoundry.com/linux-administration-questions-bash-shell/": {
        "topic": "Bash Shell Environment-1",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Introduction to Shells, Environment Variables (env/export), Login Scripts (/etc/profile), Pipes & $$",
        "reason": "Directly covers Shell as command interpreter, pipes (|), env/export, $$ PID, set -x debugging, and /etc/profile.",
    },
    "https://www.sanfoundry.com/linux-shell-environment-mcq-2/": {
        "topic": "Bash Shell Environment-2",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Bourne Again Shell (BASH), Absolute/Relative Paths & Wildcards (*)",
        "reason": "Covers BASH definition, shell prompts, absolute vs relative paths, cd navigation, and * wildcard case-sensitivity.",
    },
    "https://www.sanfoundry.com/linux-administration-interview-questions-shell/": {
        "topic": "Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null)",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Shell Metacharacters, I/O Redirection (>, >>, <, 2>, 2>&1, /dev/null) & Pipes",
        "reason": "Essential Bash scripting concepts: stderr redirection (2>), appending (>>), 2>/dev/null, and > file 2>&1.",
    },
    "https://www.sanfoundry.com/unix-administration-interview-questions-shell/": {
        "topic": "Shell Special Symbols, Wildcards (*, ?) & Positional Parameters",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Positional Parameters ($0, $#, $*, $$, $!), Wildcards (* and ?), test Command & Pipes",
        "reason": "Directly covers Session 3 & 4 Positional parameters ($#, $*, $0), special variables ($$, $!), wildcards (* and ?), and test command!",
    },
    "https://www.sanfoundry.com/linux-shell-programming-mcq-1/": {
        "topic": "Bash Shell Programming (Variables, Quotes, test, if-then-else, expr)",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Shell Programming (Variables, Single/Double Quotes, expr Arithmetic, test -n/-z/-eq, if-then-else, head/tail)",
        "reason": "Directly covers Session 3 & 4: user variables, single vs double quotes, expr arithmetic (% and /), test string/numeric checks, and if-then-else-fi.",
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-1/": {
        "topic": "Bash Built-in Commands-1 (alias, export, dirs, continue, eval)",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Built-ins, Directory Stacks (dirs/pushd/popd), Job Control & Loop Control (continue)",
        "reason": "Explicitly covers Session 3 & 4 topics: Directory stacks (dirs), Built-ins (alias, export, eval, hash), and continue statement.",
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-2/": {
        "topic": "Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit)",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Built-ins, Directory Stacks (popd), Job/Process Control (wait, kill -s, suspend, logout)",
        "reason": "Explicitly covers Session 3 & 4 topics: popd (directory stack), logout, wait, kill -s, type, and ulimit.",
    },
    "https://www.sanfoundry.com/bash-questions-answers-built-in-command-3/": {
        "topic": "Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec)",
        "category": "KEEP",
        "syllabus_topic": "Linux Sessions 3 & 4: Taking Decisions (if-elif-else), Loops (for, while, until), File Tests (-e) & read/echo",
        "reason": "Contains 6 full Bash scripts testing read, echo, if-elif-else (-gt/-lt), for loop, while loop, and until [ -e $x ] loop!",
    },
    "https://www.sanfoundry.com/linux-questions-answers-sed-editor/": {
        "topic": "Sed Stream Editor",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Text Processing & Stream Editing (sed s/old/new/g, /d, -n /p)",
        "reason": "Valuable companion to grep and vi find/replace for shell scripting and command-line text manipulation.",
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-basics/": {
        "topic": "Awk Programming Basics",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Text Processing with awk ($0, $1, BEGIN, print/printf)",
        "reason": "Useful command-line text filtering tool alongside grep, sort, and shell scripts.",
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-variables-array/": {
        "topic": "Awk Variables & Arrays (FS, FNR, OFMT)",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Advanced Awk Scripting (FS, FNR, Arrays)",
        "reason": "Optional deeper practice on awk built-in variables (FS, FNR) and associative arrays.",
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-control-statements/": {
        "topic": "Awk Control Statements",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Advanced Awk Scripting (Loops & Control Statements)",
        "reason": "Optional extra practice on awk control flow (while, do-while, for, break, continue, next, exit).",
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-expressions/": {
        "topic": "Awk Expressions & Regex Matching (~)",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Advanced Awk Scripting (Expressions & ~ Regex Operator)",
        "reason": "Optional extra practice on awk expressions and regex matching.",
    },
    "https://www.sanfoundry.com/awk-programming-questions-answers-functions/": {
        "topic": "Awk Built-in Functions (split, tolower, toupper)",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Sessions 1–4: Advanced Awk Scripting (Built-in Functions)",
        "reason": "Optional extra practice on awk string and numeric functions.",
    },
    "https://www.sanfoundry.com/linux-proc-filesystem-questions-answers-1/": {
        "topic": "Linux /proc Filesystem-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Session 2: /proc Pseudo-Filesystem (/proc/[PID]/cwd, environ, fd, cmdline)",
        "reason": "Useful background on how ps/top inspect process state under /proc.",
    },
    "https://www.sanfoundry.com/linux-proc-filesystem-questions-answers-2/": {
        "topic": "Linux /proc Filesystem-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Session 2: /proc Filesystem (/proc/cpuinfo, /proc/partitions, /proc/modules)",
        "reason": "Covers /proc/cpuinfo, /proc/devices, /proc/partitions, and /proc/[PID]/stat.",
    },
    "https://www.sanfoundry.com/linux-proc-filesystem-questions-answers-3/": {
        "topic": "Linux /proc Filesystem-3",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Session 2: Process Utilities (pgrep, pidof, ps) & /proc/swaps",
        "reason": "Covers pgrep, pidof, ps, /proc/cmdline, and /proc/swaps.",
    },
    "https://www.sanfoundry.com/linux-proc-filesystem-questions-answers-4/": {
        "topic": "Linux /proc Filesystem-4",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Session 2: /proc/meminfo, /proc/net & /proc/sys/kernel/hostname",
        "reason": "Covers /proc/meminfo, /proc/net, and kernel runtime parameters in /proc/sys.",
    },
    "https://www.sanfoundry.com/linux-proc-filesystem-questions-answers-5/": {
        "topic": "Linux /proc Filesystem-5",
        "category": "SELECTIVE",
        "syllabus_topic": "Linux Session 1 & Session 2: /proc/version, /proc/self, dmesg & sysctl",
        "reason": "Covers /proc/version, /proc/self, dmesg, and sysctl.",
    },

    # --- Excluded Linux C System Programming, Kernel Internals, GDB & GCC ---
    "https://www.sanfoundry.com/gcc-compiler-questions-answers-stages-of-compilation-1/": {
        "topic": "GCC Compilation Stages-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C compiler stages (.i, .s, .o) are not in the PGCP-BDA Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/gcc-compiler-questions-answers-stages-of-compilation-2/": {
        "topic": "GCC Compilation Stages-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C preprocessor/linker internals are outside the PGCP-BDA Linux syllabus (except Q2 on chmod +x).",
    },
    "https://www.sanfoundry.com/gcc-compiler-questions-answers-various-options-2/": {
        "topic": "GCC Compiler Options (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "GCC compiler flags (-Werror, -Wall, -fPIC, -shared) are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/gdb-debugger-questions-answers-4/": {
        "topic": "GDB Debugger-4 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "GNU GDB C debugger commands are outside the PGCP-BDA Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/gdb-debugger-questions-answers-5/": {
        "topic": "GDB Debugger-5 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "GNU GDB C debugger commands are outside the PGCP-BDA Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/static-libraries-questions-answers/": {
        "topic": "Static Libraries in C (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C static library linking (.a, ar, nm) is not in the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/shared-libraries-questions-answers/": {
        "topic": "Shared Libraries in C (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C shared library linking (.so, dlclose, ldconfig) is not in the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-sysfs-questions-answers-1/": {
        "topic": "Linux Sysfs Kernel Internals-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Kernel kobject/sysfs driver internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-sysfs-questions-answers-2/": {
        "topic": "Linux Sysfs Kernel Internals-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Kernel kobject/sysfs driver internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-sysfs-questions-answers-3/": {
        "topic": "Linux Sysfs Kernel Internals-3 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Kernel kobject/sysfs driver internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-sysfs-questions-answers-4/": {
        "topic": "Linux Sysfs Kernel Internals-4 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Kernel kobject/sysfs driver internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-sysfs-questions-answers-5/": {
        "topic": "Linux Sysfs Kernel Internals-5 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Kernel kobject/sysfs driver internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-device-drivers-major-minor-numbers-questions-answers/": {
        "topic": "Linux Device Drivers Major/Minor Numbers (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Linux kernel 2.4 device driver programming is outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/linux-kernel-interview-questions/": {
        "topic": "Linux Kernel Memory Management Internals (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "x86-32 virtual memory layout, mm_struct, and Solaris scheduling classes are outside the syllabus.",
    },
    "https://www.sanfoundry.com/unix-interview-questions-freshers/": {
        "topic": "File Descriptor & System Call Internals-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C system call internals (fcntl, dup2, namei, struct file) are outside the shell/CLI syllabus.",
    },
    "https://www.sanfoundry.com/linux-internals-interview-questions/": {
        "topic": "C File I/O System Calls-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C open/lseek/write/dup system call debugging is outside the syllabus.",
    },
    "https://www.sanfoundry.com/linux-interview-questions-answers-29/": {
        "topic": "Linux IPC System Calls-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "System V IPC C system calls (msgget, ipcrm) are outside the syllabus.",
    },
    "https://www.sanfoundry.com/linux-interview-questions-answers/": {
        "topic": "Linux IPC System Calls-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "System V shared memory and semaphore C structures are outside the syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-malloc-free/": {
        "topic": "C Memory Debugging (malloc/free)-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C pointer and malloc/calloc/free debugging is not part of the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/tricky-buggy-questions-answers-malloc-free/": {
        "topic": "C Memory Debugging (malloc/free)-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C pointer and malloc/calloc/free debugging is not part of the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-dup-fcntl-lseek-read/": {
        "topic": "C System Call Debugging (dup/fcntl/lseek) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C system call debugging is not part of the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-fork-exec-wait/": {
        "topic": "C Process Debugging (fork/exec/wait) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C fork/exec/wait code debugging is not part of the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-signal-handling/": {
        "topic": "C Signal Handling Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C signal() handler code debugging is not part of the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-timer-user-resource-limit/": {
        "topic": "C Resource Limit System Calls (sysconf/getrlimit) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C sysconf/pathconf/getrlimit system call debugging is outside the syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-posix-threads/": {
        "topic": "C POSIX Threads Debugging-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C pthread debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/tricky-buggy-questions-answers-threads-handling/": {
        "topic": "C POSIX Threads Debugging-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C pthread/semaphore debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-pipe-calls/": {
        "topic": "C Pipe & FIFO System Call Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C pipe()/mkfifo() code debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-system-v-ipcs/": {
        "topic": "C System-V IPC & mmap Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C sem_open/mmap code debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-posix-ipcs/": {
        "topic": "C Shared Memory (shmget/shmat) Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C shmget/shmat/shmdt code debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-unix-domain-sockets/": {
        "topic": "C Unix Domain Socket Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C AF_UNIX socket code debugging is outside the Linux & Cloud syllabus.",
    },
    "https://www.sanfoundry.com/linux-debugging-questions-answers-internet-domain-socket/": {
        "topic": "C Internet Socket Debugging (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "C AF_INET socket code debugging is outside the Linux & Cloud syllabus.",
    },

    # =========================================================================
    # PART II: CLOUD COMPUTING & DEVOPS (20T + 12L + 8SL)
    # =========================================================================

    # --- Cloud Session 1: Git and GitHub Fundamentals (2T + 2L + 1SL) ---
    "https://www.sanfoundry.com/data-science-questions-answers-cli-git-workflow-1/": {
        "topic": "CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 1: Git & GitHub Fundamentals (Version Control Systems, Git, GitHub, CLI Commands)",
        "reason": "Directly covers Version Control Systems, Git, Git Bash, GitHub, mv, cd .., rm, and cp -r for Cloud Session 1 & Linux Session 1.",
    },
    "https://www.sanfoundry.com/data-science-interview-questions-answers/": {
        "topic": "CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 1: Git & GitHub Commands (git add, commit -m, push, branch, checkout -b, rebase, fork)",
        "reason": "Directly covers Cloud Session 1 Lab: git add ., git add -u, commit -m, push, branch, git checkout -b, rebase, and GitHub forking.",
    },

    # --- Cloud Session 2: Introduction to Cloud Computing (2T) ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-introduction/": {
        "topic": "Introduction to Cloud Computing",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 2: Introduction to Cloud Computing (Definition, Abstraction, Virtualization, AWS/Azure)",
        "reason": "Directly covers Cloud Computing definition, utility computing, abstraction, virtualization, and cloud vendors (AWS).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-attributes/": {
        "topic": "Attributes & Characteristics of Cloud Computing",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 2: Characteristics & Benefits of Cloud Computing (Pay-as-you-go Utility, Elasticity, Scalability, SLAs)",
        "reason": "Directly covers Cloud characteristics: utility delivery, elasticity, scalability, low barrier to entry, SLAs, and IaaS/PaaS/SaaS overview.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-benefits-drawbacks/": {
        "topic": "Benefits & Drawbacks of Cloud Computing",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 2 & Sessions 5–6: Benefits and Limitations of Cloud Computing (On-demand, Resource Pooling, QoS, WAN Latency, Security)",
        "reason": "Explicitly covers 'Characteristics and benefits' (Session 2) and 'Benefits and limitations' (Sessions 5 & 6).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-types-1/": {
        "topic": "Cloud Models & Types-1 (Deployment vs Service Models, NIST)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 2 & Sessions 3–4: Cloud Paradigms, Service Models (SaaS, PaaS, IaaS) & Deployment Models (Public, Private, Hybrid)",
        "reason": "Covers Service vs Deployment models (Public, Private, Hybrid, Community), NIST model, and Cloud Cube dimensions.",
    },
    "https://www.sanfoundry.com/cloud-computing-interview-questions-answers/": {
        "topic": "Cloud Models & Types-2 (Public, Private, Community, Hybrid)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 2 & Sessions 3–4: Organizational Scenarios & Deployment Models (Public, Private, Community, Hybrid)",
        "reason": "Directly covers Public, Private, Community, and Hybrid cloud definitions and organizational scenarios.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-entrance-exams/": {
        "topic": "Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3–6: Comparison among SaaS, PaaS, IaaS (SPI Model & Vendor Responsibility)",
        "reason": "Directly covers IaaS, PaaS, SaaS (SPI model), EC2 as IaaS, and vendor vs customer responsibilities.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-laws-cloudonomics/": {
        "topic": "Laws of Cloudonomics",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 2: Cloud Economics, Pooling & Redundancy Reliability Formula",
        "reason": "Covers resource pooling, peak of the sum vs sum of peaks, and system reliability 1-(1-r)^n.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-computing-costs-1/": {
        "topic": "Cloud Computing Costs & OpEx-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 2 & Sessions 5–6: Cloud Benefits (CapEx to OpEx Shift & Cost Unbundling)",
        "reason": "Covers shifting CapEx to OpEx and datacenter vs cloud utilization costs.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-freshers/": {
        "topic": "Cloud Computing Costs, TCO & SLAs-2",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 2 & Sessions 5–6: Right-Sizing, Total Cost of Ownership (TCO), SLAs & EULA",
        "reason": "Covers Right-sizing, TCO, Service Level Agreements (SLAs), EULA, and CapEx to OpEx.",
    },

    # --- Cloud Sessions 3 & 4: Cloud Service Models and Virtualization (4T + 1SL) ---
    "https://www.sanfoundry.com/cloud-computing-saas-interview-questions-answers/": {
        "topic": "SaaS — Software as a Service",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Introduction to SaaS, Pros/Cons, Multi-Tenancy, Subscription Licensing & Examples (Salesforce)",
        "reason": "Directly matches Session 3 & 4: Introduction to SaaS, Pros/Cons, Traditional vs SaaS, multi-tenancy, and Salesforce.",
    },
    "https://www.sanfoundry.com/cloud-computing-paas-interview-questions-answers/": {
        "topic": "PaaS — Platform as a Service",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Introduction to PaaS, Application Frameworks, Vendor Lock-in & Examples (Google App Engine)",
        "reason": "Directly matches Session 3 & 4: Introduction to PaaS, development environments, vendor lock-in, and PaaS vs IaaS/SaaS.",
    },
    "https://www.sanfoundry.com/cloud-computing-iaas-interview-questions-answers/": {
        "topic": "IaaS — Infrastructure as a Service-1",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Introduction to IaaS, Hardware Virtualization, Workloads, VirtualBox & Web Services (WSDL/SOAP)",
        "reason": "Directly matches Session 3 & 4: Introduction to IaaS, VirtualBox, workload units, VPS partitioning, and Web Services.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-experienced/": {
        "topic": "IaaS — Infrastructure as a Service-2",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: IaaS Examples (AWS), Availability Zones, Pods & REST vs SOAP Web Services",
        "reason": "Covers AWS as classic IaaS, Availability Zones, and REST vs SOAP comparisons (explicitly in Sessions 3 & 4).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-challenges-obstacles/": {
        "topic": "Challenges of Cloud Environment",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Challenges of Cloud Environment (Accounting, Compliance, Data Privacy, SLAs, Vendor Lock-in)",
        "reason": "Explicitly listed in Sessions 3 & 4: 'Challenges of Cloud Environment' (Data privacy, compliance, network bottlenecks, SLAs, vendor lock-in).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-virtualization-technologies/": {
        "topic": "Virtualization Technologies & Load Balancing",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4 / Session 7: Introduction to Virtualization (Storage, Network, CPU, Application) & Load Balancing",
        "reason": "Directly covers Types and Uses of Virtualization (Sessions 3 & 4) and Load Balancing / ADC (Session 7).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-hypervisors-1/": {
        "topic": "Hypervisors-1 (Type 1 vs Type 2 VMM)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Hypervisors (VMM, Type 1 Bare-Metal vs Type 2 Hosted, Xen, KVM, Hyper-V, VMware ESX)",
        "reason": "Explicitly listed in Sessions 3 & 4: 'Hypervisor' (VMM, Type 1 vs Type 2, full virtualization, Hyper-V).",
    },
    "https://www.sanfoundry.com/cloud-computing-test/": {
        "topic": "Hypervisors-2 (Full vs Paravirtualization vs Emulation)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4: Types of Virtualization (Full Virtualization, Paravirtualization, Hardware Emulation, OS Virtualization & VMware vSphere)",
        "reason": "Directly covers paravirtualization, full virtualization, emulation, OS-level virtualization, and VMware vCompute/vNetwork.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-machine-imaging/": {
        "topic": "VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3 & 4 / Sessions 8 & 9: Virtual Machine Provisioning, VM Migration Services (VMotion) & AWS AMI",
        "reason": "Explicitly covers 'Virtual Machine Provisioning' and 'Virtual Machine Migration Services' (VMotion, Storage VMotion, OVF, AWS AMI on Xen).",
    },
    "https://www.sanfoundry.com/cloud-computing-caas-interview-questions-answers/": {
        "topic": "CaaS — Communication/Compliance as a Service",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 3 & 4: Extended Service Models (SaaS, PaaS, CaaS)",
        "reason": "Includes helpful SaaS and PaaS definition questions (Q7, Q10) alongside niche CaaS questions.",
    },

    # --- Cloud Sessions 5 & 6: Cloud Services and Application Deployment (4T + 4L + 1SL) ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-computing-stack-1/": {
        "topic": "Cloud Computing Stack-1",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 5 & 6: Cloud Computing Stack, Composable Stateless Services & SaaS/PaaS/IaaS Comparison",
        "reason": "Covers front-end/back-end layers, stateless composable components, and comparison among SaaS, PaaS, and IaaS.",
    },
    "https://www.sanfoundry.com/cloud-computing-interviews-questions-answers-freshers/": {
        "topic": "Cloud Computing Stack & Virtual Appliances-2",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 3–6: Virtual Machines, Hypervisors (VMM), Virtual Appliances, AMIs (Xen) & QEMU",
        "reason": "Covers IaaS VM delivery, VMM hypervisors, virtual appliances, Amazon Machine Images (AMIs), and QEMU.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-connecting-cloud/": {
        "topic": "Connecting to the Cloud & Web Service Protocols",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 3–6: Cloud Client/Backend Layers, Virtual Appliances & XML/WSDL/SOAP Web Services",
        "reason": "Covers cloud client/backend layers, compute clouds, and XML/WSDL/SOAP web services.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-application-attributes/": {
        "topic": "Application Attributes for Cloud Deployment",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 5 & 6: Deploying Applications over Cloud (Suitability, Availability, Scalability, 3-Tier Architecture)",
        "reason": "Directly covers deploying applications over the cloud, client-server architecture, 3-tier preservation, and availability/scalability attributes.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-applications-clouds/": {
        "topic": "Applications in the Cloud & Transaction Properties",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5 & 6: Cloud Application Deployment, Hybrid Local/Cloud Access & ACID Transactions",
        "reason": "Covers deploying applications completely/partially in the cloud, hybrid online/offline access, and ACID properties.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-campus-interviews/": {
        "topic": "Applications, Cloud APIs & Managed/Unmanaged Storage",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5 & 6: Cloud APIs (REST/SOAP) & Managed vs Unmanaged Cloud Storage",
        "reason": "Covers Cloud APIs (authentication, REST/SOAP) and managed vs unmanaged cloud disk storage.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-porting-applications/": {
        "topic": "Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 5 & 6 / Session 10: Deploying Applications, Application Containers & Load Balancing",
        "reason": "Covers virtual application containers (encapsulating app + dependencies), load balancing, and vSphere.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-capacity-planning/": {
        "topic": "Capacity Planning & LAMP Stack on AWS AMI",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 5 & 6: Administering & Monitoring Cloud Services, Capacity Planning & LAMP Stack AMIs",
        "reason": "Covers matching resource demand, LAMP stack (Linux, Apache, MySQL, PHP/Perl/Python) AMIs on AWS, and load testing.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-baseline-measurements/": {
        "topic": "Cloud Monitoring & Baseline Measurements (sar, Ganglia, Zabbix)",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5 & 6: Administering & Monitoring Cloud Services (System Metrics, Linux sar, RRDTool, Ganglia, Zabbix/ZenOSS)",
        "reason": "Directly relates to 'Administering & Monitoring Cloud Services' in Sessions 5 & 6 (metrics, load testing, Linux sar).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-resource-ceilings/": {
        "topic": "Resource Ceilings, Bottlenecks & Load Balancers",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5–7: Resource Bottlenecks (CPU, RAM, Network I/O) & Weighted Load Balancing",
        "reason": "Covers resource bottlenecks, weighted load balancers, and database replication.",
    },

    # --- Cloud Session 7: Cloud Architecture & Shared Responsibility Model (2T + 1SL) ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-network-capacity/": {
        "topic": "Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 7: Key Architectural Principles (Horizontal Scaling Out vs Vertical Scaling Up & Network Traffic)",
        "reason": "Directly covers Horizontal scaling (scaling out to many servers) vs Vertical scaling and network monitoring (Wireshark/TCPdump).",
    },
    "https://www.sanfoundry.com/cloud-computing-online-test/": {
        "topic": "Security Service Boundary & Shared Responsibility Model",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 7: Shared Responsibility Model & Security Boundary across SaaS, PaaS, IaaS and Public/Private/Hybrid Clouds",
        "reason": "Directly covers Session 7 'Shared responsibility model' — how SaaS, PaaS, and IaaS define the security boundary between vendor and customer!",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-security/": {
        "topic": "Cloud Security, Multi-Tenancy & CSA Reference Model",
        "category": "KEEP",
        "syllabus_topic": "Cloud Session 7: Shared Responsibility Model, Multi-Tenancy, IAM & SLA Security/Auditing",
        "reason": "Covers built-in security across IaaS/PaaS/SaaS, multi-tenancy, Identity & Access Management (IAM), and SLA auditing.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-securing-data/": {
        "topic": "Cloud Data Security, Access Control, Encryption & Compliance",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 7: Data Security (Access Control, Auditing, Authentication, Encryption Key Management & Compliance)",
        "reason": "Covers Access control, Auditing, Authentication, encryption key protection, and compliance standards (PCI-DSS, HIPAA).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-virtual-storage-containers/": {
        "topic": "Cloud Storage Architecture, Redundancy, Availability Zones & SAN/LUN",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 7 & Sessions 8–9: High Availability, Redundancy, Replication & AWS Availability Zones",
        "reason": "Covers cloud storage reliability (redundant networks/replication), AWS S3 & Availability Zones within Regions, and LUN/SAN.",
    },

    # --- Cloud Sessions 8 & 9: AWS & Microsoft Azure (4T + 4L + 2SL) ---
    "https://www.sanfoundry.com/cloud-computing-mcqs/": {
        "topic": "Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 8 & 9: AWS Core Services (EC2, S3, EBS, VPC, Auto Scaling, Elastic Load Balancing, CloudWatch, SQS, SNS)",
        "reason": "Directly covers Sessions 8 & 9: EC2, S3, Elastic Block Store (EBS), VPC, Auto Scaling, Elastic Load Balancing, and CloudWatch!",
    },
    "https://www.sanfoundry.com/cloud-computing-aws-interview-questions-answers/": {
        "topic": "Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 8 & 9: Amazon Web Services (EC2 AMIs, RDS, CloudFront CDN, Elastic MapReduce / Big Data on Cloud)",
        "reason": "Directly covers AWS EC2 hourly instances, RDS (MySQL), CloudFront, and Elastic MapReduce (Hadoop on EC2 — Lab: Big Data on Cloud)!",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-server-instance-types/": {
        "topic": "AWS EC2 Server & Instance Types (Micro, Small, High-CPU/Memory & Auto Scaling)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 8 & 9: Elastic Cloud Compute (EC2 Instance Types, Micro Default AMI, EC2 Compute Units & Auto Scaling)",
        "reason": "Directly covers EC2 instance sizing (Micro, Small, High-CPU, High-Memory m2.4xlarge) and Auto Scaling.",
    },
    "https://www.sanfoundry.com/cloud-computing-windows-azure-interview-questions-answers/": {
        "topic": "Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles)",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 8 & 9: Introduction to Azure (Azure Platform Overview, Azure Compute Web/Worker Roles & Azure Storage vs AWS S3)",
        "reason": "Directly matches Sessions 8 & 9 'Introduction to Azure: Azure Platform Overview & Azure Storage' (comparing Azure Storage to AWS S3).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-azure-content-delivery-network/": {
        "topic": "Azure Data Services (SQL Azure), Blob CDN & Replication",
        "category": "KEEP",
        "syllabus_topic": "Cloud Sessions 8 & 9: Azure Data Services (SQL Azure), Azure Blob Storage CDN, 3x Data Replication & 99.9% SLA",
        "reason": "Directly matches Sessions 8 & 9 'Azure Data Services & Azure Storage' (SQL Azure, Blob CDN, 3x replication, TCO calculator).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-windows-azureapp-fabric/": {
        "topic": "Azure AppFabric (Service Bus, Access Control & Caching)",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 8 & 9: Azure Platform Services (Service Bus, Access Control, Active Directory Federation & Caching)",
        "reason": "Covers Azure Service Bus, Access Control, and Web data caching.",
    },

    # --- Secondary / Selective Cloud Storage & Backup Pages ---
    "https://www.sanfoundry.com/cloud-computing-questions-answers-provisioning-cloud-storage-1/": {
        "topic": "Provisioning Cloud Storage-1",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5 & 6: Cloud Storage Provisioning (Managed vs Unmanaged Storage & Dropbox)",
        "reason": "Covers managed developer storage vs unmanaged consumer storage (Dropbox).",
    },
    "https://www.sanfoundry.com/cloud-computing-aptitude-test/": {
        "topic": "Provisioning Cloud Storage-2 (DaaS, S3, Google Drive)",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5–9: Cloud Storage (DaaS, Amazon S3, Google Drive, Rackspace Cloud)",
        "reason": "Covers Data Storage as a Service (DaaS), Amazon S3, and Google Drive.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-backup-solutions/": {
        "topic": "Cloud Backup Solutions & Snapshots",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5–7: Cloud Backup, Point-in-Time Snapshots, Scale-Up vs Scale-Out Storage & Backup Window",
        "reason": "Covers point-in-time snapshots, full/image backups, scale-up vs scale-out storage, and backup window.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-backup-types/": {
        "topic": "Cloud Backup Types & Data Archival",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5–7: Incremental Backup, Continuous Data Protection (CDP) & Data Archival",
        "reason": "Covers incremental backup, reverse delta, CDP, and data archiving.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-backup-features/": {
        "topic": "Cloud Backup Features (3-2-1 Rule & Encryption)",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Sessions 5–7: 3-2-1 Backup Rule, Replication vs Archiving & 128-bit Encryption",
        "reason": "Covers the 3-2-1 backup rule, replication vs archiving, and encryption.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-identity-protocol-standards/": {
        "topic": "Cloud Identity Protocol Standards (SSO, OpenID, OAuth, SAML)",
        "category": "SELECTIVE",
        "syllabus_topic": "Cloud Session 7: Identity Management, Single Sign-On (SSO), OpenID, OAuth & SAML",
        "reason": "Covers Identity Management, SSO, OpenID, OAuth token service, SAML, and AD FS.",
    },

    # --- Excluded Legacy / Niche Cloud Pages (2010 Consumer Apps, SOA XML Standards, CDMI/OCCI) ---
    "https://www.sanfoundry.com/cloud-computing-idaas-interview-questions-answers/": {
        "topic": "IDaaS — Identity as a Service-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Niche IDaaS / Open Mashup Alliance topics outside the PGCP-BDA syllabus (except Q1 on Salesforce SaaS & Q6 on MFA).",
    },
    "https://www.sanfoundry.com/cloud-computing-interview-questions-answers-experienced/": {
        "topic": "IDaaS — Identity as a Service-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Niche OASIS SPML/XACML/Higgins/CardSpace protocols not in the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-cloud-data-management-interface/": {
        "topic": "CDMI & CTERA Cloud Attached Storage (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Vendor-specific CTERA CloudPlug and SNIA CDMI storage hardware trivia not in the syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-open-cloud-computing-interface/": {
        "topic": "Open Cloud Computing Interface (OCCI / SNIA XAM) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "SNIA XAM/VIM and OCCI protocol trivia not in the PGCP-BDA syllabus (except Q10 on thin provisioning).",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-open-cloud-patform/": {
        "topic": "Open Cloud Consortium & Web 2.0/AJAX (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "OCC working groups and AJAX/DOM trivia outside the PGCP-BDA Cloud syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-soa-communications/": {
        "topic": "SOA Communications & ESB/WSDL Internals (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Legacy WebSphere ESB and WSDL 1.1 schema internals are outside the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-soa-security/": {
        "topic": "SOA XML Security Standards (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Legacy Cisco AON and OASIS WS-SecureConversation/WS-Trust XML standards are outside the syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-google-web-services/": {
        "topic": "Google Search, PageRank & Consumer Web Services (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Google PageRank, Deep Web, Google Alerts, and Google Checkout consumer trivia are not in the GCP/Cloud syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-google-application-portfolio/": {
        "topic": "Legacy Google Consumer Portfolio (iGoogle, Picasa, GOOG-411) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Discontinued 2010 consumer products (iGoogle, GOOG-411, Knol, Picasa, Google Desktop) are not in the syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-google-toolkit/": {
        "topic": "Legacy Google Toolkit (Google Mini, Gears, Wave, AdWords) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Legacy Google Mini appliance, Google Gears, and AdWords trivia are not in the PGCP-BDA syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-windows-live-1/": {
        "topic": "Legacy Windows Live Consumer Services-1 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Discontinued Windows Live Messenger, Spaces, and Writer consumer apps are not part of Azure in the syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-multiple-choice-questions-answers/": {
        "topic": "Legacy Windows Live Consumer Services-2 (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Discontinued Windows Live FrameIt, Movie Maker, and Hotmail consumer trivia are outside the syllabus.",
    },
    "https://www.sanfoundry.com/cloud-computing-questions-answers-video-streaming-1/": {
        "topic": "Consumer Video Streaming & VoIP (Hulu, Metacafe, Apple TV) (Excluded)",
        "category": "REMOVE",
        "syllabus_topic": "Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud)",
        "reason": "Consumer video streaming trivia (Metacafe, Veoh, Hulu, Apple TV, XBMC) is outside the PGCP-BDA syllabus.",
    },
}


# Curated additional high-yield pages from Sanfoundry that match the syllabus if the user ever wants to open/save more
RECOMMENDED_MISSING_URLS: list[tuple[str, str, str]] = [
    ("https://www.sanfoundry.com/linux-environment-mcq-1/", "Linux Environment – 1", "Linux Session 1: Linux Environment & Basics"),
    ("https://www.sanfoundry.com/linux-environment-mcq-2/", "Linux Environment – 2", "Linux Session 1: Linux Environment & Basics"),
    ("https://www.sanfoundry.com/unix-administration-interview-questions/", "Linux Environment – 3", "Linux Session 1: Linux Environment & Basics"),
    ("https://www.sanfoundry.com/linux-command-mcq-1/", "Linux Commands – 1", "Linux Session 1: Basic Commands"),
    ("https://www.sanfoundry.com/linux-administration-questions-answers/", "Linux Commands – 2", "Linux Session 1: Basic Commands"),
    ("https://www.sanfoundry.com/linux-command-mcq-3/", "Linux Commands – 3", "Linux Session 1: Basic Commands"),
    ("https://www.sanfoundry.com/linux-placement-paper-questions-answers/", "Linux Commands – 4", "Linux Session 1: Basic Commands"),
    ("https://www.sanfoundry.com/linux-shell-programming-questions-answers-functions/", "Linux Shell Functions", "Linux Sessions 3 & 4: Shell Functions"),
    ("https://www.sanfoundry.com/linux-shell-programming-questions-answers-variables/", "Linux Shell Variables", "Linux Sessions 3 & 4: Shell Variables"),
    ("https://www.sanfoundry.com/linux-bash-shell-questions-answers-arithmetic-expression/", "Linux Bash Arithmetic Expressions", "Linux Sessions 3 & 4: Arithmetic in Shell Scripts"),
    ("https://www.sanfoundry.com/linux-bash-shell-questions-answers-command-history/", "Linux Bash Command History & Job Control", "Linux Sessions 3 & 4: Job Control & History"),
    ("https://www.sanfoundry.com/cloud-computing-questions-answers-amazon-machine-images/", "Amazon Machine Images (AMI)", "Cloud Sessions 8 & 9: AWS EC2 & AMI"),
    ("https://www.sanfoundry.com/cloud-computing-amazon-s3-interview-questions-answers/", "Amazon S3 Storage Systems", "Cloud Sessions 8 & 9: AWS Storage Services S3"),
    ("https://www.sanfoundry.com/cloud-computing-amazon-elastic-block-store-questions-answers/", "Amazon Elastic Block Store (EBS)", "Cloud Sessions 8 & 9: AWS EC2 & Storage"),
    ("https://www.sanfoundry.com/cloud-computing-questions-answers-administering-clouds/", "Administrating the Clouds", "Cloud Sessions 5 & 6: Administering & Monitoring Cloud Services"),
]


def get_ordered_topics() -> list[dict[str, str]]:
    """Return all mapped topic URLs in syllabus chronological order."""
    out: list[dict[str, str]] = []
    for url, meta in TOPIC_SYLLABUS_MAP.items():
        norm = url.rstrip("/") + "/"
        out.append({"url": norm, **meta})
    return out


def get_saved_urls() -> dict[str, Path]:
    saved: dict[str, Path] = {}
    for folder in (LINUX_DIR, CLOUD_DIR):
        if not folder.is_dir():
            continue
        for f in sorted(folder.glob("*.html")):
            parsed = parse_page(f.read_bytes(), url=f.as_posix())
            if parsed.url:
                norm = parsed.url.rstrip("/") + "/"
                saved[norm] = f
    return saved


def main() -> None:
    ap = argparse.ArgumentParser(description="Check or open Linux & Cloud Sanfoundry topic pages.")
    ap.add_argument("--status", action="store_true", help="Show saved vs recommended pages")
    ap.add_argument("--batch", type=int, default=5, help="Number of tabs to open per batch")
    args = ap.parse_args()

    saved = get_saved_urls()
    print(f"Saved HTML files with canonical URLs: {len(saved)}")
    missing = [(u, title, syl) for u, title, syl in RECOMMENDED_MISSING_URLS if (u.rstrip("/") + "/") not in saved]
    print(f"Optional additional syllabus pages not yet saved: {len(missing)}")
    for u, title, syl in missing:
        print(f"  - {title} ({syl}): {u}")

    if args.status or not missing:
        return

    for i in range(0, len(missing), args.batch):
        batch = missing[i : i + args.batch]
        print(f"\nOpening batch {i // args.batch + 1} ({len(batch)} tabs)...")
        for u, title, _ in batch:
            print(f"  -> {title}: {u}")
            webbrowser.open_new_tab(u)
            time.sleep(0.4)
        if i + args.batch < len(missing):
            input("Press Enter after saving these tabs with Ctrl+S to open the next batch...")


if __name__ == "__main__":
    main()
