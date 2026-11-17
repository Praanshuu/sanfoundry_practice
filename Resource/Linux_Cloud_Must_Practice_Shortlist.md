# Linux Programming & Cloud Computing — Must-Practice MCQ Shortlist (PGCP-BDA)

- **Total Unique Questions Extracted:** `1378` (from 130 saved HTML pages in `LinuxSaved/` and `LinuxSaved/cloud/`)
- **Must-Practice Shortlist (`KEEP`):** `512` hand-picked high-yield MCQs (`259` Basic • `239` Moderate • `14` Hard)
- **Extra Practice (`SELECTIVE`):** `422` secondary/variation drills (`sed`, `awk`, `/proc`, cloud backup/storage extras)
- **Excluded (`REMOVE`):** `444` out-of-syllabus questions (C system call debugging `malloc`/`pthread`/`fork`/`socket`, kernel `sysfs` internals, `gdb`/`gcc`, discontinued 2010 Windows Live / Google consumer apps, and broken image-only questions)

## Session-Wise Shortlist Breakdown

| Syllabus Session | Total | Shortlist (`KEEP`) | Basic | Moderate | Hard | Extra (`SELECTIVE`) |
|---|---:|---:|---:|---:|---:|---:|
| Linux Session 1: Linux Fundamentals, Boot/Run Levels, FHS, Users, Processes & Basic Commands | 227 | **121** | 61 | 56 | 4 | 106 |
| Linux Session 2: Linux File Management, Permissions (chmod/umask/ACL), Mounting & Vi Editor | 44 | **36** | 18 | 16 | 2 | 8 |
| Linux Sessions 3 & 4: Shell Programming (Bash Environment, Variables, Redirection, Loops & Filters) | 151 | **88** | 37 | 45 | 6 | 63 |
| Cloud Session 1: Git & GitHub Fundamentals (Version Control & CLI Workflow) | 20 | **19** | 15 | 4 | 0 | 1 |
| Cloud Session 2: Introduction to Cloud Computing (Paradigms, Characteristics, Benefits & Types) | 89 | **33** | 17 | 15 | 1 | 56 |
| Cloud Sessions 3 & 4: Cloud Service Models (SaaS, PaaS, IaaS), Virtualization & Hypervisors | 122 | **80** | 40 | 39 | 1 | 42 |
| Cloud Sessions 5 & 6: Cloud Services, Application Deployment, Monitoring & Cloud Storage | 130 | **51** | 27 | 24 | 0 | 79 |
| Cloud Session 7: Cloud Architecture, Scaling, Load Balancing, Security & Shared Responsibility | 51 | **26** | 14 | 12 | 0 | 25 |
| Cloud Sessions 8 & 9: AWS (EC2, VPC, S3, EBS, RDS, CloudWatch, EMR) & Microsoft Azure | 100 | **58** | 30 | 28 | 0 | 42 |
| Excluded / Out of Syllabus (C System Calls, Kernel Internals, GDB/GCC & Legacy Cloud) | 444 | **0** | 0 | 0 | 0 | 0 |

---

## Linux Session 1: Linux Fundamentals, Boot/Run Levels, FHS, Users, Processes & Basic Commands (121 Must-Practice MCQs)

### Basic Level (61 Qs): `#1`, `#2`, `#3`, `#4`, `#5`, `#6`, `#7`, `#8`, `#9`, `#10`, `#11`, `#12`, `#13`, `#14`, `#15`, `#16`, `#17`, `#18`, `#19`, `#20`, `#21`, `#22`, `#23`, `#24`, `#25`, `#26`, `#27`, `#28`, `#29`, `#30`, `#31`, `#32`, `#33`, `#34`, `#35`, `#36`, `#37`, `#38`, `#39`, `#40`, `#41`, `#42`, `#43`, `#44`, `#45`, `#46`, `#47`, `#48`, `#49`, `#50`, `#51`, `#52`, `#53`, `#54`, `#55`, `#56`, `#57`, `#58`, `#59`, `#60`, `#61`

- **#1** *(Linux Startup & Shutdown (Run Levels))*: Which is loaded into memory when system is booted? — **Ans: `A`**
- **#2** *(Linux Startup & Shutdown (Run Levels))*: Single user mode shell runs as — **Ans: `B`**
- **#3** *(Linux Startup & Shutdown (Run Levels))*: The process id of init process is: — **Ans: `C`**
- **#4** *(Linux Filesystem Hierarchy (FHS)-1)*: What is /root? — **Ans: `B`**
- **#5** *(Linux Filesystem Hierarchy (FHS)-1)*: The /dev directory contains the — **Ans: `B`**
- **#6** *(Linux Filesystem Hierarchy (FHS)-1)*: In linux filesystem, the passwords of different users are stored in — **Ans: `C`**
- **#7** *(Linux Filesystem Hierarchy (FHS)-2)*: Host specific configuration files are installed in — **Ans: `A`**
- **#8** *(Linux Filesystem Hierarchy (FHS)-2)*: The directory /media is the — **Ans: `A`**
- **#9** *(Linux Filesystem Hierarchy (FHS)-2)*: Which one of the directory does not contain binary files? — **Ans: `C`**
- **#10** *(File Management & Basic Commands-1)*: Which represents the user home directory — **Ans: `D`**
- **#11** *(File Management & Basic Commands-1)*: How do you rename file “new” to file “old”? — **Ans: `A`**
- **#12** *(File Management & Basic Commands-1)*: What command is used to copy files and directories? — **Ans: `B`**
- **#13** *(File Management & Links (ln / ln -s)-2)*: By default if any regular file is created, the number of link is displayed as 1 ? — **Ans: `A`**
- **#14** *(File Management & Links (ln / ln -s)-2)*: Which command is used to change permissions of files and directories? — **Ans: `C`**
- **#15** *(File Management & Links (ln / ln -s)-2)*: What UNIX command is used to update the modification time of a file? — **Ans: `D`**
- **#16** *(Linux File Types & Device Files)*: When you use the ln command, which of the following occurs? — **Ans: `A`**
- **#17** *(Linux File Types & Device Files)*: Which directory contain device special files? — **Ans: `D`**
- **#18** *(Linux File Types & Device Files)*: Which are the two types of device files? — **Ans: `A`**
- **#19** *(Process Management & Job Control (ps, kill, bg, fg))*: Which command is used to bring the background process to forground? — **Ans: `B`**
- **#20** *(Process Management & Job Control (ps, kill, bg, fg))*: How to run a process in the background? — **Ans: `A`**
- **#21** *(Process Management & Job Control (ps, kill, bg, fg))*: Which command can be executed by a user who is already logged into the system, in order to change to the root user? (type the command wit... — **Ans: `A`**
- **#22** *(Process Management & Job Control (ps, kill, bg, fg))*: Process information in the current shell can be obtained by using — **Ans: `D`**
- **#23** *(User Account Management (who, passwd, /etc/passwd))*: The encrypted password of a user is stored in — **Ans: `A`**
- **#24** *(User Account Management (who, passwd, /etc/passwd))*: User id 0 is — **Ans: `B`**
- **#25** *(User Account Management (who, passwd, /etc/passwd))*: The login shell is — **Ans: `A`**
- **#26** *(User Account Management (who, passwd, /etc/passwd))*: Which of the following command can be used to change the user password? — **Ans: `B`**
- **#27** *(Makefile & make Utility)*: What is makefile? — **Ans: `A`**
- **#28** *(Makefile & make Utility)*: As we type “make” command on the terminal — **Ans: `A`**
- **#29** *(Linux Systems & Run Levels)*: UNIX/Linux kernel is? — **Ans: `A`**
- **#30** *(Linux Systems & Run Levels)*: Pick the run level to run Linux in multi user mode with networking? — **Ans: `B`**
- **#31** *(Process Management Internals (init, Zombie, nice))*: What is a context switch? — **Ans: `A`**
- **#32** *(Process Management Internals (init, Zombie, nice))*: Pid of init process — **Ans: `B`**
- **#33** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: Which signal is generated when we press control-C? — **Ans: `A`**
- **#34** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: Which signal is generated when we press ctrl-Z? — **Ans: `B`**
- **#35** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: The kill system call is used to — **Ans: `B`**
- **#36** *(Linux Fundamentals & Hub Essentials)*: What is Linux primarily known as? — **Ans: `B`**
- **#37** *(Linux Fundamentals & Hub Essentials)*: Who is the creator of the Linux kernel? — **Ans: `A`**
- **#38** *(Linux Fundamentals & Hub Essentials)*: Which of the following is a popular Linux distribution? — **Ans: `B`**
- **#39** *(Linux Fundamentals & Hub Essentials)*: What is the significance of the Linux kernel? — **Ans: `B`**
- **#40** *(Linux Fundamentals & Hub Essentials)*: What command is used to display the version of the Linux kernel running on your system? — **Ans: `B`**
- **#41** *(Linux Fundamentals & Hub Essentials)*: Which command is used to update the package index in Debian-based systems? — **Ans: `A`**
- **#42** *(User Account Management (who, passwd, /etc/passwd))*: In Linux, what is the purpose of the ‘root’ user? — **Ans: `B`**
- **#43** *(Linux Fundamentals & Hub Essentials)*: What does the ‘ls -a’ command do? — **Ans: `B`**
- **#44** *(Linux Fundamentals & Hub Essentials)*: Which of the following commands is used to change the current directory? — **Ans: `A`**
- **#45** *(User Account Management (who, passwd, /etc/passwd))*: Which file contains the list of users in a Linux system? — **Ans: `B`**
- **#46** *(Linux Fundamentals & Hub Essentials)*: Which command is used to display the current working directory? — **Ans: `A`**
- **#47** *(Linux Fundamentals & Hub Essentials)*: Which of the following commands will display the contents of a file? — **Ans: `A`**
- **#48** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Which command is used to search for a specific text string in a file? — **Ans: `A`**
- **#49** *(Linux Fundamentals & Hub Essentials)*: Which command will change the current directory to the home directory? — **Ans: `A`**
- **#50** *(Linux Fundamentals & Hub Essentials)*: Which command is used to create a new directory? — **Ans: `B`**
- **#51** *(Linux Fundamentals & Hub Essentials)*: Which command can be used to display the last lines of a file? — **Ans: `A`**
- **#52** *(Linux Fundamentals & Hub Essentials)*: Which command is used to compress files in Linux? — **Ans: `B`**
- **#53** *(Linux Fundamentals & Hub Essentials)*: Which command displays the manual for another command? — **Ans: `B`**
- **#54** *(Process Management & Job Control (ps, kill, bg, fg))*: Which command can be used to monitor real-time system performance? — **Ans: `B`**
- **#55** *(Linux Fundamentals & Hub Essentials)*: Which command can be used to view the contents of a directory in a detailed format? — **Ans: `A`**
- **#56** *(Linux Fundamentals & Hub Essentials)*: Which command is used to check network connectivity in Linux? — **Ans: `B`**
- **#57** *(User Account Management (who, passwd, /etc/passwd))*: What is the purpose of the ‘sudo’ command? — **Ans: `B`**
- **#58** *(Linux Fundamentals & Hub Essentials)*: Which command is used to view the contents of a compressed file? — **Ans: `B`**
- **#59** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which command is used to display disk usage of files and directories? — **Ans: `A`**
- **#60** *(User Account Management (who, passwd, /etc/passwd))*: What command is used to manage user accounts in Linux? — **Ans: `D`**
- **#61** *(Linux Filesystem Hierarchy (FHS)-2)*: Which directory contains log files for system events in Linux? — **Ans: `A`**

### Moderate Level (56 Qs): `#62`, `#63`, `#64`, `#65`, `#66`, `#67`, `#68`, `#69`, `#70`, `#71`, `#72`, `#73`, `#74`, `#75`, `#76`, `#77`, `#78`, `#79`, `#80`, `#81`, `#82`, `#83`, `#84`, `#85`, `#86`, `#87`, `#88`, `#89`, `#90`, `#91`, `#92`, `#93`, `#94`, `#95`, `#96`, `#97`, `#98`, `#99`, `#100`, `#101`, `#102`, `#103`, `#104`, `#105`, `#106`, `#107`, `#108`, `#109`, `#110`, `#111`, `#112`, `#113`, `#114`, `#115`, `#116`, `#117`

- **#62** *(Linux Startup & Shutdown (Run Levels))*: Which of the following is not a valid run-level — **Ans: `C`**
- **#63** *(Linux Startup & Shutdown (Run Levels))*: On Linux, initrd is a file — **Ans: `C`**
- **#64** *(Linux Startup & Shutdown (Run Levels))*: The shell used for Single user mode shell is: — **Ans: `D`**
- **#65** *(Linux Startup & Shutdown (Run Levels))*: At the end of kernel bootstrap, which process is started? — **Ans: `A`**
- **#66** *(Linux Startup & Shutdown (Run Levels))*: Which file is read by init to get the default runlevel — **Ans: `D`**
- **#67** *(Linux Filesystem Hierarchy (FHS)-1)*: Operating system kernel must be located in — **Ans: `C`**
- **#68** *(Linux Filesystem Hierarchy (FHS)-1)*: Which one of the following is a mount point for a temporarily mounted filesystem? — **Ans: `A`**
- **#69** *(Linux Filesystem Hierarchy (FHS)-1)*: System binaries are stored in — **Ans: `D`**
- **#70** *(Linux Filesystem Hierarchy (FHS)-1)*: Static files of the bootloader are installed in — **Ans: `A`**
- **#71** *(Linux Filesystem Hierarchy (FHS)-2)*: What is /bin/sh ? — **Ans: `B`**
- **#72** *(Linux Filesystem Hierarchy (FHS)-2)*: The /boot directory stores the data that is used — **Ans: `A`**
- **#73** *(Linux Filesystem Hierarchy (FHS)-2)*: The directory /opt is reserved for — **Ans: `A`**
- **#74** *(Linux Filesystem Hierarchy (FHS)-2)*: Any file or directory present in the ______ directory may not be reserved between the invocation of the program. — **Ans: `B`**
- **#75** *(File Management & Basic Commands-1)*: Which of the following time stamps need not exist for a file on traditional unix file system — **Ans: `C`**
- **#76** *(File Management & Basic Commands-1)*: Which option of rmdir command will remove all directories a, b, c if path is a/b/c — **Ans: `C`**
- **#77** *(File Management & Basic Commands-1)*: Executing the ‘cd ..’ command when at the root level causes — **Ans: `D`**
- **#78** *(File Management & Basic Commands-1)*: Any file’s attribute information is stored in which structure on the disk — **Ans: `A`**
- **#79** *(File Management & Links (ln / ln -s)-2)*: How many links are created when we creat a directory file? — **Ans: `B`**
- **#80** *(File Management & Links (ln / ln -s)-2)*: A user creates a link to a file file1 using the following command “ln file1 file2”. Which of the following is not true? — **Ans: `B`**
- **#81** *(File Management & Links (ln / ln -s)-2)*: If two files on same partition point to the same inode structure they are called — **Ans: `B`**
- **#82** *(File Management & Links (ln / ln -s)-2)*: Deleting a soft-link — **Ans: `C`**
- **#83** *(File Management & Links (ln / ln -s)-2)*: Creation of hardlinks that point across partitions — **Ans: `D`**
- **#84** *(File Management & Links (ln / ln -s)-2)*: Which of the following statement is true? — **Ans: `C`**
- **#85** *(Linux File Types & Device Files)*: The soft link will increase the link counter of the file.(T/F) — **Ans: `B`**
- **#86** *(Linux File Types & Device Files)*: The directory file contains: — **Ans: `B`**
- **#87** *(Linux File Types & Device Files)*: Which of the following is not a valid file type on Linux — **Ans: `C`**
- **#88** *(Process Management & Job Control (ps, kill, bg, fg))*: If a program executing in background attempts to read from STDIN — **Ans: `B`**
- **#89** *(Process Management & Job Control (ps, kill, bg, fg))*: Which signal is sent by the command “kill -9 ” ? — **Ans: `C`**
- **#90** *(Process Management & Job Control (ps, kill, bg, fg))*: Which of the following values for STAT column of ps command is not true: — **Ans: `C`**
- **#91** *(Process Management & Job Control (ps, kill, bg, fg))*: When a child process exits before the parent process exits, which of the following is true: — **Ans: `C`**
- **#92** *(Process Management & Job Control (ps, kill, bg, fg))*: The signal sent to a process when the Ctrl-C key is pressed is — **Ans: `D`**
- **#93** *(Process Management & Job Control (ps, kill, bg, fg))*: we can change the priority of a running process using — **Ans: `B`**
- **#94** *(Process Management & Job Control (ps, kill, bg, fg))*: nohup is used to — **Ans: `B`**
- **#95** *(User Account Management (who, passwd, /etc/passwd))*: User’s Primary Group id is listed in which file, at the time of creation of the user (On a standard Unix system) — **Ans: `A`**
- **#96** *(User Account Management (who, passwd, /etc/passwd))*: A user can change the default log-in shell using — **Ans: `B`**
- **#97** *(User Account Management (who, passwd, /etc/passwd))*: Which of the following identifiers associated with a process decide its privilege level — **Ans: `C`**
- **#98** *(User Account Management (who, passwd, /etc/passwd))*: What does the following command do ? // who | wc –l — **Ans: `A`**
- **#99** *(User Account Management (who, passwd, /etc/passwd))*: Which of the following files need to be referred for user’s secondary group? — **Ans: `C`**
- **#100** *(Makefile & make Utility)*: What is phony target in the makefile? — **Ans: `A`**
- **#101** *(Makefile & make Utility)*: If our makefile is named as “sanfoundry”, then which one of the following command will compile the code with this makefile — **Ans: `B`**
- **#102** *(Makefile & make Utility)*: Which option of make command print the commands that would be executed, but do not execute them? — **Ans: `B`**
- **#103** *(Makefile & make Utility)*: If make command is executed as “make -j 2”, then — **Ans: `A`**
- **#104** *(Linux Systems & Run Levels)*: Runlevel system command is used for? — **Ans: `D`**
- **#105** *(Linux Systems & Run Levels)*: Section 2 of manpage describes — **Ans: `B`**
- **#106** *(Linux Systems & Run Levels)*: Daemon process is a? — **Ans: `D`**
- **#107** *(Linux Systems & Run Levels)*: The terminal used by a Daemon process is: — **Ans: `B`**
- **#108** *(Process Management Internals (init, Zombie, nice))*: How do you get parent process identification number? — **Ans: `C`**
- **#109** *(Process Management Internals (init, Zombie, nice))*: Parent process id of a deamon process is_________________ — **Ans: `D`**
- **#110** *(Process Management Internals (init, Zombie, nice))*: The process which terminates before the parent process exits becomes — **Ans: `A`**
- **#111** *(Process Management Internals (init, Zombie, nice))*: Which niceness value among the following indicate most favorable scheduling? — **Ans: `D`**
- **#112** *(Process Management Internals (init, Zombie, nice))*: Nice can be used by an ordinary process to — **Ans: `B`**
- **#113** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: Which signal is sent when the Child process terminates? — **Ans: `D`**
- **#114** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: Which of the following signal cannot be handled or ignored? — **Ans: `C`**
- **#115** *(Signal Handling Concepts (SIGINT, SIGKILL, kill))*: Another signal that cannot be caught is: — **Ans: `C`**
- **#116** *(Linux Startup & Shutdown (Run Levels))*: Which file is responsible for the boot loader configuration in Linux? — **Ans: `B`**
- **#117** *(Process Management & Job Control (ps, kill, bg, fg))*: Which command is used to schedule tasks in Linux? — **Ans: `D`**

### Hard Level (4 Qs): `#118`, `#119`, `#120`, `#121`

- **#118** *(File Management & Basic Commands-1)*: When mv f1 f2 is executed which file’s inode is freed? — **Ans: `B`**
- **#119** *(File Management & Links (ln / ln -s)-2)*: There are two hard links to the “file1” say hl and h2 and a softlink sl. What happens if we deleted the “file1”? — **Ans: `A`**
- **#120** *(Linux File Types & Device Files)*: Which of the following is not correct statement regarding file types? — **Ans: `B`**
- **#121** *(User Account Management (who, passwd, /etc/passwd))*: The ls –l output for /etc/passwd and /usr/bin/passwd is as follows: // -rw-rw-r-- 1 root root 2807 Apr 26 13:50 /etc/passwd // -r-s—x—x 1... — **Ans: `B`**

## Linux Session 2: Linux File Management, Permissions (chmod/umask/ACL), Mounting & Vi Editor (36 Must-Practice MCQs)

### Basic Level (18 Qs): `#228`, `#229`, `#230`, `#231`, `#232`, `#233`, `#234`, `#235`, `#236`, `#237`, `#238`, `#239`, `#240`, `#241`, `#242`, `#243`, `#244`, `#245`

- **#228** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: The file permission 764 means: — **Ans: `C`**
- **#229** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: The permission -rwxr–r– represented in octal expression will be — **Ans: `C`**
- **#230** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: What is the command to set the execute permissions to all the files and subdirectories within the directory /home/user1/direct — **Ans: `B`**
- **#231** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: Which command is used to assign read-write permission to the owner? — **Ans: `C`**
- **#232** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: Given the command // $  chmod   o-w   datafile — **Ans: `D`**
- **#233** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: Which of these commands will set the permissions on file textfile to read and write for the owner, read for the group, and nothing for ev... — **Ans: `B`**
- **#234** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: If you are a root user, how can you grand execute permission only for the owner of the file project1? — **Ans: `B`**
- **#235** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: What does chmod +t  do? — **Ans: `D`**
- **#236** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which command is used to check filesystem usage in a system? — **Ans: `B`**
- **#237** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which file contains the filesystems to be automatically mounted during boot? — **Ans: `B`**
- **#238** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: ____ is a directory (which should exist), on which to mount the file system? — **Ans: `C`**
- **#239** *(Vi / Vim Editor Commands)*: Which one of the following statement is not true? — **Ans: `B`**
- **#240** *(Vi / Vim Editor Commands)*: Which command is used to close the vi editor? — **Ans: `C`**
- **#241** *(Vi / Vim Editor Commands)*: Which vi editor command copies the current line of the file? — **Ans: `A`**
- **#242** *(Vi / Vim Editor Commands)*: Which command searches the string in file opened in vi editor? — **Ans: `A`**
- **#243** *(Vi / Vim Editor Commands)*: Which command sets the number for all lines? — **Ans: `C`**
- **#244** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: Which one of the following command can be used to provide executable permissions for a file? — **Ans: `C`**
- **#245** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: Which command is used to change the ownership of a file in Linux? — **Ans: `A`**

### Moderate Level (16 Qs): `#246`, `#247`, `#248`, `#249`, `#250`, `#251`, `#252`, `#253`, `#254`, `#255`, `#256`, `#257`, `#258`, `#259`, `#260`, `#261`

- **#246** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: Effective user id can be set using following permission — **Ans: `C`**
- **#247** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: Effective group id can be set using following permission — **Ans: `B`**
- **#248** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: Sticky bit can be set using following permission — **Ans: `D`**
- **#249** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: If user tries to remove (rm) a readonly file (444 permission), what will happen? — **Ans: `B`**
- **#250** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: A user does a chmod operation on a file. Which of the following is true? — **Ans: `C`**
- **#251** *(File Permissions & Modes (chmod, umask, SUID/SGID/Sticky)-1)*: If the umask value is 0002. what will be the permissions of new directory — **Ans: `B`**
- **#252** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: The permission -rwxr-xr-t represented in octal expression will be — **Ans: `B`**
- **#253** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: With a umask value of 112, what is the default permission assigned to newly created regular file? — **Ans: `D`**
- **#254** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: A user executes the following command successfully: // $ chmod +x file1.txt // Which of the following is true of the output of this command? — **Ans: `D`**
- **#255** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: The command chmod 4777 a.out — **Ans: `A`**
- **#256** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which among the following allows fast file system recovery? — **Ans: `B`**
- **#257** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which file system has journaling capability? — **Ans: `B`**
- **#258** *(Filesystem Overview (mount, df, /etc/fstab, ext4))*: Which command is used to mount file system read only. — **Ans: `D`**
- **#259** *(Vi / Vim Editor Commands)*: In vi editor, the key combination CTRL+f — **Ans: `A`**
- **#260** *(Vi / Vim Editor Commands)*: Which command is used to delete the character before the cursor location in vi editor? — **Ans: `A`**
- **#261** *(Vi / Vim Editor Commands)*: Which one of the following statement is true? — **Ans: `B`**

### Hard Level (2 Qs): `#262`, `#263`

- **#262** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: Which of the following umask settings doesn’t allow execute permission to be set by default on directory files — **Ans: `C`**
- **#263** *(File Permissions & Modes (chmod, umask, Sticky Bit)-2)*: Which of the following umask settings allow execute permission to be set by default on regular files — **Ans: `D`**

## Linux Sessions 3 & 4: Shell Programming (Bash Environment, Variables, Redirection, Loops & Filters) (88 Must-Practice MCQs)

### Basic Level (37 Qs): `#272`, `#273`, `#274`, `#275`, `#276`, `#277`, `#278`, `#279`, `#280`, `#281`, `#282`, `#283`, `#284`, `#285`, `#286`, `#287`, `#288`, `#289`, `#290`, `#291`, `#292`, `#293`, `#294`, `#295`, `#296`, `#297`, `#298`, `#299`, `#300`, `#301`, `#302`, `#303`, `#304`, `#305`, `#306`, `#307`, `#308`

- **#272** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Which option of grep displays the line number as well? — **Ans: `C`**
- **#273** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: What is the command that can print lines of first file matching with second file? — **Ans: `D`**
- **#274** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Which character to use to escape meaning of special characters in search operations? — **Ans: `D`**
- **#275** *(Bash Shell Environment-1)*: To feed standard output of one command to standard input of another in a single shell session — **Ans: `C`**
- **#276** *(Bash Shell Environment-1)*: Hidden files are — **Ans: `C`**
- **#277** *(Bash Shell Environment-1)*: Shell is ? — **Ans: `A`**
- **#278** *(Bash Shell Environment-2)*: What is a shell in UNIX? — **Ans: `A`**
- **#279** *(Bash Shell Environment-2)*: Which of the following represents an absolute path? — **Ans: `D`**
- **#280** *(Bash Shell Environment-2)*: BASH shell stands for? — **Ans: `A`**
- **#281** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: The redirection 2> abc  implies — **Ans: `C`**
- **#282** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: Which of these is the correct method for appending “foo” in /tmp/bar file? — **Ans: `B`**
- **#283** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: Syntax to suppress the display of command error to monitor? — **Ans: `D`**
- **#284** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: Which command can be used to test various file attributes — **Ans: `C`**
- **#285** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: * Specifies — **Ans: `B`**
- **#286** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: ? Specifies — **Ans: `C`**
- **#287** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: What command would send the output of cmd1 to the input of cmd2? — **Ans: `A`**
- **#288** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What would be the current working directory at the end of the following command sequence? // $ pwd // /home/user1/proj // $ cd  src // $ ... — **Ans: `D`**
- **#289** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: Create a new file “new.txt” that is a concatenation of “file1.txt” and “file2.txt” — **Ans: `B`**
- **#290** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: which of these is NOT a valid variable in bash — **Ans: `D`**
- **#291** *(Bash Built-in Commands-1 (alias, export, dirs, continue, eval))*: Which command sets up shorthand for command or command line? — **Ans: `B`**
- **#292** *(Bash Built-in Commands-1 (alias, export, dirs, continue, eval))*: Which statement resumes the next iteration of a for, while, select, or untill loop? — **Ans: `A`**
- **#293** *(Bash Built-in Commands-1 (alias, export, dirs, continue, eval))*: Which command can create environment variable? — **Ans: `A`**
- **#294** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: The ‘logout’ built in command is used to — **Ans: `D`**
- **#295** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: Which option of the kill command sends the given signal name to the specified process? — **Ans: `C`**
- **#296** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: Which command identifies the resource of a command? — **Ans: `A`**
- **#297** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: Which command wait for the specified process to complete and return the exit status? — **Ans: `B`**
- **#298** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: Which command runs the shell built-in command ‘command’ with the given argument? — **Ans: `A`**
- **#299** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: Which command executes ‘command’ in place of the current process instead of creating a new process? — **Ans: `A`**
- **#300** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: What is the output of this program? // #!/bin/bash // for i in 2 3 7 // do // echo "Sanfoundry" // done // exit 0 — **Ans: `A`**
- **#301** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: How can you come out of the loop in this program? // #!/bin/bash // read x // while [ $x != "hello" ] // do // echo "Try to come out of t... — **Ans: `A`**
- **#302** *(Sed Stream Editor)*: What is sed? — **Ans: `A`**
- **#303** *(Awk Programming Basics)*: What is the meaning of $ sign in awk programming? — **Ans: `B`**
- **#304** *(Awk Programming Basics)*: In awk program, the statement “print” with no items — **Ans: `C`**
- **#305** *(Awk Programming Basics)*: The command “awk {print $1} san.txt” will — **Ans: `B`**
- **#306** *(Awk Variables & Arrays (FS, FNR, OFMT))*: In awk, the built-in variable FS is — **Ans: `A`**
- **#307** *(Awk Variables & Arrays (FS, FNR, OFMT))*: What is FNR? — **Ans: `A`**
- **#308** *(Bash Shell Environment-1)*: What is the default shell for most Linux distributions? — **Ans: `B`**

### Moderate Level (45 Qs): `#309`, `#310`, `#311`, `#312`, `#313`, `#314`, `#315`, `#316`, `#317`, `#318`, `#319`, `#320`, `#321`, `#322`, `#323`, `#324`, `#325`, `#326`, `#327`, `#328`, `#329`, `#330`, `#331`, `#332`, `#333`, `#334`, `#335`, `#336`, `#337`, `#338`, `#339`, `#340`, `#341`, `#342`, `#343`, `#344`, `#345`, `#346`, `#347`, `#348`, `#349`, `#350`, `#351`, `#352`, `#353`

- **#309** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: How can you search for blank line in a file? — **Ans: `B`**
- **#310** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Assuming the files fileA, fileB, fileAB, fileBC  and  fileABC, exist in a directory, which files match with the pattern file[ABC]? — **Ans: `C`**
- **#311** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: What will be printed for the command below? // $ grep –c “^echo” abc — **Ans: `B`**
- **#312** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Which one is used to select only one copy of the repeated lines? — **Ans: `A`**
- **#313** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Indicate the right option to search for BOB, Bob, BOb or BoB? — **Ans: `B`**
- **#314** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: Indicate the right option to search for anything not a letter or number — **Ans: `B`**
- **#315** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: How do you remove duplicate lines from the file foo using uniq? — **Ans: `A`**
- **#316** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: who | cut –d  ” ” -f1 // what is the ouput if the who command displays like this // user1   tty   0   1234 — **Ans: `A`**
- **#317** *(Bash Shell Environment-1)*: Which of the following commands allows definition and assignment of environment variables under bash — **Ans: `A`**
- **#318** *(Bash Shell Environment-1)*: While executing a command, the shell — **Ans: `B`**
- **#319** *(Bash Shell Environment-1)*: Which variable contains current shell process id — **Ans: `C`**
- **#320** *(Bash Shell Environment-1)*: Which command is used to debug a shell script program — **Ans: `B`**
- **#321** *(Bash Shell Environment-1)*: For every successful login, which script will be executed? — **Ans: `B`**
- **#322** *(Bash Shell Environment-2)*: Which of the following is true? — **Ans: `C`**
- **#323** *(Bash Shell Environment-2)*: The user bhojas logged in and performed the following sequence of command. What will be the output of the last command? // $ cd project/m... — **Ans: `A`**
- **#324** *(Bash Shell Environment-2)*: Which of the following files will not be displayed by the command cat re* ? — **Ans: `C`**
- **#325** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: cmd > abc 2>&1 will — **Ans: `B`**
- **#326** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: Executing cat /etc/password > /dev/sda as superuser will — **Ans: `B`**
- **#327** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: The $ variables in a shell script context designates — **Ans: `C`**
- **#328** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: Which variable is used to display number of arguments specified in command line — **Ans: `B`**
- **#329** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: Which variable contains last background job process id — **Ans: `D`**
- **#330** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: Which of the following file set in the current directory are identified by the regular expression a?b* — **Ans: `B`**
- **#331** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: What is the output of the following command for bash shell: // echo linux $0 — **Ans: `C`**
- **#332** *(Shell Special Symbols, Wildcards (*, ?) & Positional Parameters)*: Which variable will display the list of the positional parameters? — **Ans: `B`**
- **#333** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What will be output of following command: // $ echo "The process id is" $$$$ — **Ans: `C`**
- **#334** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: How do you print the lines between 5 and 10, both inclusive — **Ans: `A`**
- **#335** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What is the output of the following code: // os=Unix // echo 1.$os 2."$os" 3.'$os' 4.$os — **Ans: `B`**
- **#336** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What is the output of the following program? // x = 3; y = 5; z = 10; // if [( $x -eq 3 ) -a ( $y -eq 5 -o  $z -eq 10 )] // then // echo ... — **Ans: `B`**
- **#337** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: The expression expr -9 % 2 evaluates to: — **Ans: `C`**
- **#338** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: The statement z = ‘expr 5 / 2’ would store which of the following values in z? — **Ans: `C`**
- **#339** *(Bash Built-in Commands-1 (alias, export, dirs, continue, eval))*: Which command prints the directory stack? — **Ans: `B`**
- **#340** *(Bash Built-in Commands-1 (alias, export, dirs, continue, eval))*: Which command concatenate the specified argument into a single command, then execute the command? — **Ans: `B`**
- **#341** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: The command ‘umask -S’ — **Ans: `A`**
- **#342** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: Which command removes a directory from directory stack? — **Ans: `B`**
- **#343** *(Bash Built-in Commands-2 (logout, popd, kill -s, type, wait, ulimit))*: The command ‘ulimit’ — **Ans: `C`**
- **#344** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: Which option of the command ‘cd’ use the actual filesystem path for cd.. and the value of pwd? — **Ans: `D`**
- **#345** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: After running this program, as your press 4, what will be the output of the program? // #!/bin/bash // echo "How many times you want to p... — **Ans: `A`**
- **#346** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: What is the output of this program? // #!/bin/bash // echo "Which file do you want to check" // read x // until [ -e $x ] // do // echo "... — **Ans: `D`**
- **#347** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: After running this program, if you enter 1000, then what will be the output of the program? // #!/bin/bash // echo "Please enter a number... — **Ans: `A`**
- **#348** *(Sed Stream Editor)*: Which sed command deletes the specified address range — **Ans: `C`**
- **#349** *(Sed Stream Editor)*: Which command is used to replace word ‘cat’ (already present in the file) with ‘mouse’ at all places in a file ‘old.txt’ and save the res... — **Ans: `A`**
- **#350** *(Sed Stream Editor)*: Which command will delete all the blank lines in file old.txt? — **Ans: `C`**
- **#351** *(Sed Stream Editor)*: The command “sed -n ‘/sanfoundry/p’ old.txt” will — **Ans: `A`**
- **#352** *(Awk Programming Basics)*: Which command on the command line provides the same output as this executable awk script? // #! /usr/bin/awk -f // BEGIN { // print "sanf... — **Ans: `A`**
- **#353** *(Bash Shell Environment-1)*: Which file contains system-wide environment variables? — **Ans: `D`**

### Hard Level (6 Qs): `#354`, `#355`, `#356`, `#357`, `#358`, `#359`

- **#354** *(Search & Pattern Matching (grep, sort, uniq, cut, comm))*: One of the entry of /etc/passwd file is shown below: // user1:x:1111:2222:Sanfoundry:/home/user1:/bin/bash // Which among the following w... — **Ans: `A`**
- **#355** *(Shell I/O Redirection (>, >>, 2>, 2>&1, /dev/null))*: cmd 2>&1 > abc will — **Ans: `D`**
- **#356** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What is the return value ($?) of this code: // os = Unix // [$osName = UnixName] && exit 2 // [${os}Name = UnixName] && exit 3 — **Ans: `D`**
- **#357** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What is the output of the following program? // [ -n $HOME ] // echo $? // [ -z $HOME ] // echo $? — **Ans: `A`**
- **#358** *(Bash Shell Programming (Variables, Quotes, test, if-then-else, expr))*: What is the output of the following program? // b = // [ -n $b ] // echo $? // [ -z $b ] // echo $? — **Ans: `C`**
- **#359** *(Bash Built-in Commands & Loops-3 (for, while, until, read, if-else, exec))*: After running this program, as you press ‘s’, what will be the output of the program? // #!/bin/bash // echo "press 's' to print Sanfound... — **Ans: `C`**

## Cloud Session 1: Git & GitHub Fundamentals (Version Control & CLI Workflow) (19 Must-Practice MCQs)

### Basic Level (15 Qs): `#423`, `#424`, `#425`, `#426`, `#427`, `#428`, `#429`, `#430`, `#431`, `#432`, `#433`, `#434`, `#435`, `#436`, `#437`

- **#423** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following CLI command can also be used to rename files? — **Ans: `B`**
- **#424** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Point out the correct statement. — **Ans: `B`**
- **#425** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following command allows you to change directory to one level above your parent directory? — **Ans: `C`**
- **#426** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following is not a CLI command? — **Ans: `A`**
- **#427** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following systems record changes to a file over time? — **Ans: `B`**
- **#428** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following is a revision control system? — **Ans: `A`**
- **#429** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following command line environment is used for interacting with Git? — **Ans: `B`**
- **#430** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: Which of the following web hosting service use Git control system? — **Ans: `A`**
- **#431** *(CLI & Git Workflow-1 (VCS, Git, GitHub, Git Bash))*: cp command can be used to copy the content of directories. — **Ans: `A`**
- **#432** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following adds all new files to local repository? — **Ans: `A`**
- **#433** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Point out the correct statement. — **Ans: `B`**
- **#434** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following command is used to give a message description? — **Ans: `A`**
- **#435** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Point out the wrong statement. — **Ans: `A`**
- **#436** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following command allows you to update the repository? — **Ans: `A`**
- **#437** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: branch command is used to determine which branch you are currently in. — **Ans: `A`**

### Moderate Level (4 Qs): `#438`, `#439`, `#440`, `#441`

- **#438** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following command updates tracking for files that are modified? — **Ans: `B`**
- **#439** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following is the correct way of creating GitHub repository in to well labelled commits? — **Ans: `A`**
- **#440** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following command is used to squash the commits? — **Ans: `A`**
- **#441** *(CLI & Git Workflow-2 (git add, commit, push, branch, checkout, rebase, fork))*: Which of the following statement would create branch named as ‘sanfoundry’? — **Ans: `A`**

## Cloud Session 2: Introduction to Cloud Computing (Paradigms, Characteristics, Benefits & Types) (33 Must-Practice MCQs)

### Basic Level (17 Qs): `#443`, `#444`, `#445`, `#446`, `#447`, `#448`, `#449`, `#450`, `#451`, `#452`, `#453`, `#454`, `#455`, `#456`, `#457`, `#458`, `#459`

- **#443** *(Attributes & Characteristics of Cloud Computing)*: Which of the following is one of the unique attributes of Cloud Computing? — **Ans: `D`**
- **#444** *(Attributes & Characteristics of Cloud Computing)*: A service that concentrates on hardware follows the _________ as a Service model. — **Ans: `A`**
- **#445** *(Attributes & Characteristics of Cloud Computing)*: _______ is a pay-as-you-go model matches resources to need on an ongoing basis. — **Ans: `A`**
- **#446** *(Benefits & Drawbacks of Cloud Computing)*: The _____ is something that you can obtain under contract from your vendor. — **Ans: `B`**
- **#447** *(Benefits & Drawbacks of Cloud Computing)*: Which of the following is the most important area of concern in cloud computing? — **Ans: `A`**
- **#448** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: The ________ cloud infrastructure is operated for the exclusive use of an organization. — **Ans: `B`**
- **#449** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: __________ cloud is one where the cloud has been organized to serve a common function or purpose. — **Ans: `C`**
- **#450** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: A hybrid cloud combines multiple clouds where those clouds retain their unique identities but are bound together as a unit. — **Ans: `D`**
- **#451** *(Laws of Cloudonomics)*: _______ blurs the differences between a small deployment and a large one because scale becomes tied only to demand. — **Ans: `B`**
- **#452** *(Cloud Computing Costs & OpEx-1)*: Moving expenses onto the _____ side of a budget allows an organization to transfer risk to their cloud computing provider. — **Ans: `B`**
- **#453** *(Cloud Computing Costs & OpEx-1)*: Cloud computing is also a good option when the cost of infrastructure and management is ______ — **Ans: `B`**
- **#454** *(Cloud Computing Costs, TCO & SLAs-2)*: _____ is a financial estimate for the costs of the use of a product or service over its lifetime. — **Ans: `A`**
- **#455** *(Cloud Computing Costs, TCO & SLAs-2)*: A ________ Level Agreement (SLA) is the contract for performance negotiated between you and a service provider. — **Ans: `A`**
- **#456** *(Cloud Computing Costs, TCO & SLAs-2)*: Cloud computing shifts capital expenditures into ________ expenditures. — **Ans: `A`**
- **#457** *(Introduction to Cloud Computing)*: What is Cloud Computing? — **Ans: `A`**
- **#458** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: Which of the following is not a type of cloud server? — **Ans: `D`**
- **#459** *(Attributes & Characteristics of Cloud Computing)*: Which of the following are the features of cloud computing? — **Ans: `D`**

### Moderate Level (15 Qs): `#460`, `#461`, `#462`, `#463`, `#464`, `#465`, `#466`, `#467`, `#468`, `#469`, `#470`, `#471`, `#472`, `#473`, `#474`

- **#460** *(Attributes & Characteristics of Cloud Computing)*: Point out the correct statement. — **Ans: `C`**
- **#461** *(Attributes & Characteristics of Cloud Computing)*: When you add a software stack, such as an operating system and applications to the service, the model shifts to _____ model. — **Ans: `A`**
- **#462** *(Attributes & Characteristics of Cloud Computing)*: Which of the following is the most refined and restrictive service model? — **Ans: `C`**
- **#463** *(Attributes & Characteristics of Cloud Computing)*: _______ feature allows you to optimize your system and capture all possible transactions. — **Ans: `C`**
- **#464** *(Attributes & Characteristics of Cloud Computing)*: _______ enables batch processing, which greatly speeds up high-processing applications. — **Ans: `A`**
- **#465** *(Benefits & Drawbacks of Cloud Computing)*: Which of the following benefit is related to creates resources that are pooled together in a system that supports multi-tenant usage? — **Ans: `A`**
- **#466** *(Benefits & Drawbacks of Cloud Computing)*: All cloud computing applications suffer from the inherent _______ that is intrinsic in their WAN connectivity. — **Ans: `B`**
- **#467** *(Benefits & Drawbacks of Cloud Computing)*: Cloud computing is a _______ system and it is necessarily unidirectional in nature. — **Ans: `A`**
- **#468** *(Benefits & Drawbacks of Cloud Computing)*: Which of the following architectural standards is working with cloud computing industry? — **Ans: `A`**
- **#469** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: Point out the correct statement. — **Ans: `A`**
- **#470** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: Point out the wrong statement. — **Ans: `A`**
- **#471** *(Laws of Cloudonomics)*: The peak of the sum is never ________ than the sum of the peaks. — **Ans: `B`**
- **#472** *(Cloud Computing Costs & OpEx-1)*: Point out the correct statement. — **Ans: `A`**
- **#473** *(Cloud Computing Costs, TCO & SLAs-2)*: ______ sizing is possible when the system load is cyclical or in some cases when there are predictable bursts or spikes in the load. — **Ans: `B`**
- **#474** *(Cloud Computing Costs, TCO & SLAs-2)*: Which of the following is specified parameter of SLA? — **Ans: `D`**

### Hard Level (1 Qs): `#475`

- **#475** *(Laws of Cloudonomics)*: The reliability of a system with n redundant components and a reliability of r is ____________ — **Ans: `A`**

## Cloud Sessions 3 & 4: Cloud Service Models (SaaS, PaaS, IaaS), Virtualization & Hypervisors (80 Must-Practice MCQs)

### Basic Level (40 Qs): `#532`, `#533`, `#534`, `#535`, `#536`, `#537`, `#538`, `#539`, `#540`, `#541`, `#542`, `#543`, `#544`, `#545`, `#546`, `#547`, `#548`, `#549`, `#550`, `#551`, `#552`, `#553`, `#554`, `#555`, `#556`, `#557`, `#558`, `#559`, `#560`, `#561`, `#562`, `#563`, `#564`, `#565`, `#566`, `#567`, `#568`, `#569`, `#570`, `#571`

- **#532** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: _________ model consists of the particular types of services that you can access on a cloud computing platform. — **Ans: `A`**
- **#533** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: ________ refers to the location and management of the cloud’s infrastructure. — **Ans: `B`**
- **#534** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: Which of the following is the deployment model? — **Ans: `D`**
- **#535** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: Which of the following is best known service model? — **Ans: `D`**
- **#536** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: Which of the following is owned by an organization selling cloud services? — **Ans: `A`**
- **#537** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: _______ provides virtual machines, virtual storage, virtual infrastructure, and other hardware assets. — **Ans: `A`**
- **#538** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: Which of the following provides development frameworks and control structures? — **Ans: `C`**
- **#539** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: _______ is a complete operating environment with applications, management, and user interface. — **Ans: `B`**
- **#540** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: How many types of service model are mainly present in Cloud? — **Ans: `C`**
- **#541** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: Which of the following is the IaaS service provider? — **Ans: `A`**
- **#542** *(SaaS — Software as a Service)*: Which of the following is the most complete cloud computing service model? — **Ans: `D`**
- **#543** *(SaaS — Software as a Service)*: Which of the following SaaS platform is with an exposed API? — **Ans: `A`**
- **#544** *(SaaS — Software as a Service)*: Open source software used in a SaaS is called _______ SaaS. — **Ans: `C`**
- **#545** *(PaaS — Platform as a Service)*: ______ offering provides the tools and development environment to deploy applications on another vendor’s application. — **Ans: `A`**
- **#546** *(PaaS — Platform as a Service)*: _________  serves as a PaaS vendor within Google App Engine system. — **Ans: `A`**
- **#547** *(PaaS — Platform as a Service)*: Rackspace Cloud Service is an example of _____________ — **Ans: `A`**
- **#548** *(IaaS — Infrastructure as a Service-1)*: Which of the following is a virtual machine technology now owned by Oracle that can run various operating systems? — **Ans: `B`**
- **#549** *(IaaS — Infrastructure as a Service-1)*: _________ as a Service is a cloud computing infrastructure that creates a development environment upon which applications may be build. — **Ans: `C`**
- **#550** *(IaaS — Infrastructure as a Service-1)*: _________ is a cloud computing service model in which hardware is virtualized in the cloud. — **Ans: `A`**
- **#551** *(Challenges of Cloud Environment)*: Which of the following subject area deals with pay-as-you-go usage model? — **Ans: `A`**
- **#552** *(Challenges of Cloud Environment)*: Cloud ________ are standardized in order to appeal to the majority of its audience. — **Ans: `B`**
- **#553** *(Challenges of Cloud Environment)*: ___________ is a function of the particular enterprise and application in an on-premises deployment. — **Ans: `B`**
- **#554** *(Virtualization Technologies & Load Balancing)*: Which of the following type of virtualization is also characteristic of cloud computing? — **Ans: `D`**
- **#555** *(Virtualization Technologies & Load Balancing)*: The technology used to distribute service requests to resources is referred to as _____________ — **Ans: `C`**
- **#556** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Which of the following is another name for the system virtual machine? — **Ans: `A`**
- **#557** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Which of the following provide system resource access to virtual machines? — **Ans: `A`**
- **#558** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: An operating system running on a Type ______ VM is full virtualization. — **Ans: `A`**
- **#559** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: In _______ the virtual machine simulates hardware, so it can be independent of the underlying system hardware. — **Ans: `C`**
- **#560** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: In a ____________ scheme, the VM is installed as a Type 1 Hypervisor directly onto the hardware. — **Ans: `B`**
- **#561** *(CaaS — Communication/Compliance as a Service)*: ________ as a Service is a hosted application that is the cloud equivalent of a traditional desktop application. — **Ans: `A`**
- **#562** *(CaaS — Communication/Compliance as a Service)*: ________ as a Service is a development environment that builds upon an existing cloud computing application infrastructure. — **Ans: `B`**
- **#563** *(Cloud Computing Stack & Virtual Appliances-2)*: Which of the following provider rely on the virtual machine technology to deliver servers? — **Ans: `D`**
- **#564** *(Cloud Computing Stack & Virtual Appliances-2)*: Which of the following component is called hypervisor? — **Ans: `C`**
- **#565** *(Cloud Computing Stack & Virtual Appliances-2)*: Applications such as a Web server or database server that can run on a virtual machine image are referred to as ______________ — **Ans: `B`**
- **#566** *(Connecting to the Cloud & Web Service Protocols)*: A _________ is a cloud computing service that is both hardware and software. — **Ans: `B`**
- **#567** *(Connecting to the Cloud & Web Service Protocols)*: Which of the architectural layer is used as backend in cloud computing? — **Ans: `B`**
- **#568** *(SaaS — Software as a Service)*: Salesforce.com is the largest ______ provider of CRM software. — **Ans: `D`**
- **#569** *(SaaS — Software as a Service)*: Which of the following is a type of cloud computing service? — **Ans: `C`**
- **#570** *(IaaS — Infrastructure as a Service-1)*: Which of the following is an example of an IaaS Cloud service? — **Ans: `D`**
- **#571** *(SaaS — Software as a Service)*: Which of the following is an example of a SaaS cloud service? — **Ans: `D`**

### Moderate Level (39 Qs): `#572`, `#573`, `#574`, `#575`, `#576`, `#577`, `#578`, `#579`, `#580`, `#581`, `#582`, `#583`, `#584`, `#585`, `#586`, `#587`, `#588`, `#589`, `#590`, `#591`, `#592`, `#593`, `#594`, `#595`, `#596`, `#597`, `#598`, `#599`, `#600`, `#601`, `#602`, `#603`, `#604`, `#605`, `#606`, `#607`, `#608`, `#609`, `#610`

- **#572** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: Point out the correct statement. — **Ans: `B`**
- **#573** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: The __________ model originally did not require a cloud to use virtualization to pool resources. — **Ans: `B`**
- **#574** *(Cloud Models & Types-1 (Deployment vs Service Models, NIST))*: _______ model attempts to categorize a cloud network based on four dimensional factors. — **Ans: `C`**
- **#575** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: Point out the wrong statement. — **Ans: `B`**
- **#576** *(Cloud Models & Types-3 (SPI Model: SaaS, PaaS, IaaS))*: The three different service models are together known as the _____ model of cloud computing. — **Ans: `A`**
- **#577** *(SaaS — Software as a Service)*: Point out the correct statement. — **Ans: `D`**
- **#578** *(SaaS — Software as a Service)*: Which of the following is a SaaS characteristic? — **Ans: `D`**
- **#579** *(SaaS — Software as a Service)*: SaaS supports multiple users and provides a shared data model through _________ model. — **Ans: `B`**
- **#580** *(SaaS — Software as a Service)*: The componentized nature of SaaS solutions enables many solutions to support a feature called _____________ — **Ans: `C`**
- **#581** *(PaaS — Platform as a Service)*: Point out the correct statement. — **Ans: `B`**
- **#582** *(PaaS — Platform as a Service)*: Which of the following is associated with considerable vendor lock-in? — **Ans: `A`**
- **#583** *(PaaS — Platform as a Service)*: Point out the wrong statement. — **Ans: `C`**
- **#584** *(PaaS — Platform as a Service)*: __________ is the most refined and restrictive service model. — **Ans: `C`**
- **#585** *(IaaS — Infrastructure as a Service-1)*: Which of the following lets a Web service advertise itself in terms of a collection of endpoints? — **Ans: `A`**
- **#586** *(IaaS — Infrastructure as a Service-1)*: Which of the following is the fundamental unit of virtualized client in an IaaS deployment? — **Ans: `C`**
- **#587** *(Challenges of Cloud Environment)*: Point out the correct statement. — **Ans: `B`**
- **#588** *(Challenges of Cloud Environment)*: Security methods such as private encryption, VLANs and firewalls comes under __________ subject area. — **Ans: `C`**
- **#589** *(Challenges of Cloud Environment)*: Network bottlenecks occur when ______ data sets must be transferred. — **Ans: `A`**
- **#590** *(Virtualization Technologies & Load Balancing)*: Point out the wrong statement. — **Ans: `C`**
- **#591** *(Virtualization Technologies & Load Balancing)*: Point out the correct statement. — **Ans: `D`**
- **#592** *(Virtualization Technologies & Load Balancing)*: Which of the following software can be used to implement load balancing? — **Ans: `B`**
- **#593** *(Virtualization Technologies & Load Balancing)*: Which of the following network resources can be load balanced? — **Ans: `D`**
- **#594** *(Virtualization Technologies & Load Balancing)*: A ______ is a combination load balancer and application server that is a server placed between a firewall or router. — **Ans: `C`**
- **#595** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Point out the wrong statement. — **Ans: `C`**
- **#596** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Point out the correct statement. — **Ans: `D`**
- **#597** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Which of the following is Type 1 Hypervisor? — **Ans: `D`**
- **#598** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Which of the following is Type 2 VM? — **Ans: `C`**
- **#599** *(Hypervisors-1 (Type 1 vs Type 2 VMM))*: Which of the following will be the host operating system for Windows Server? — **Ans: `B`**
- **#600** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: Point out the wrong statement. — **Ans: `B`**
- **#601** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: Which of the following type of virtualization is found in hypervisor such as Microsoft’s Hyper-V? — **Ans: `A`**
- **#602** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: Which of the following is a service that aggregates servers into an assignable pool? — **Ans: `C`**
- **#603** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: _________ is a service that creates and manages virtual network interfaces. — **Ans: `B`**
- **#604** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: Which of the following allows a virtual machine to run on two or more physical processors at the same time? — **Ans: `A`**
- **#605** *(Cloud Computing Stack & Virtual Appliances-2)*: Point out the correct statement. — **Ans: `A`**
- **#606** *(Cloud Computing Stack & Virtual Appliances-2)*: _________ allows different operating systems to run in their own memory space. — **Ans: `C`**
- **#607** *(Cloud Computing Stack & Virtual Appliances-2)*: Amazon Machine Images are virtual appliances that have been packaged to run on the grid of ____ nodes. — **Ans: `B`**
- **#608** *(Cloud Computing Stack & Virtual Appliances-2)*: __________ is a CPU emulator and virtual machine monitor. — **Ans: `C`**
- **#609** *(Connecting to the Cloud & Web Service Protocols)*: Which of the following is one of the properties that differentiates cloud computing? — **Ans: `C`**
- **#610** *(Connecting to the Cloud & Web Service Protocols)*: A _______ system uses components to assemble services that can be tailored for a specific purpose using standard parts. — **Ans: `C`**

### Hard Level (1 Qs): `#611`

- **#611** *(Hypervisors-2 (Full vs Paravirtualization vs Emulation))*: Point out the wrong statement. — **Ans: `A`**

## Cloud Sessions 5 & 6: Cloud Services, Application Deployment, Monitoring & Cloud Storage (51 Must-Practice MCQs)

### Basic Level (27 Qs): `#654`, `#655`, `#656`, `#657`, `#658`, `#659`, `#660`, `#661`, `#662`, `#663`, `#664`, `#665`, `#666`, `#667`, `#668`, `#669`, `#670`, `#671`, `#672`, `#673`, `#674`, `#675`, `#676`, `#677`, `#678`, `#679`, `#680`

- **#654** *(Cloud Computing Stack-1)*: Which of the following is the highest degree of integration in cloud computing? — **Ans: `D`**
- **#655** *(Cloud Computing Stack-1)*: Which of the architectural layer is used as a front end in cloud computing? — **Ans: `A`**
- **#656** *(Application Attributes for Cloud Deployment)*: Which of the following is best suited for the analysis of an application’s suitability to be ported to the cloud? — **Ans: `C`**
- **#657** *(Application Attributes for Cloud Deployment)*: Which of the following is the first level applicable attribute? — **Ans: `A`**
- **#658** *(Applications in the Cloud & Transaction Properties)*: The properties necessary to guarantee a reliable transaction in databases and other applications is referred to as _____________ — **Ans: `B`**
- **#659** *(Applications in the Cloud & Transaction Properties)*: Which of the following is property of ACID principle? — **Ans: `D`**
- **#660** *(Applications, Cloud APIs & Managed/Unmanaged Storage)*: Which of the following mechanisms are contained by Cloud API for accessing cloud services? — **Ans: `B`**
- **#661** *(Applications, Cloud APIs & Managed/Unmanaged Storage)*: Applications using managed cloud storage are __________ as a Service Web service. — **Ans: `A`**
- **#662** *(Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing))*: Which of the following is the most widely used technique for abstraction? — **Ans: `A`**
- **#663** *(Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing))*: Which of the following is a potent cloud-building technology? — **Ans: `A`**
- **#664** *(Capacity Planning & LAMP Stack on AWS AMI)*: What does L in LAMP stands for? — **Ans: `B`**
- **#665** *(Capacity Planning & LAMP Stack on AWS AMI)*: Which of the following RDBMS is used by LAMP? — **Ans: `C`**
- **#666** *(Cloud Monitoring & Baseline Measurements (sar, Ganglia, Zabbix))*: Which of the following command is used to display the level of CPU activity in Linux? — **Ans: `C`**
- **#667** *(Cloud Monitoring & Baseline Measurements (sar, Ganglia, Zabbix))*: Which of the following testing seeks to answer maximum load that my current system can support? — **Ans: `A`**
- **#668** *(Resource Ceilings, Bottlenecks & Load Balancers)*: Which of the following resource(s) represents the bottleneck in the current system that limits the system’s performance? — **Ans: `B`**
- **#669** *(Resource Ceilings, Bottlenecks & Load Balancers)*: Which of the following is often a bottleneck in Web servers? — **Ans: `A`**
- **#670** *(Provisioning Cloud Storage-1)*: Which of the following cloud storage is mainly meant for developers and to support applications built using Web services? — **Ans: `A`**
- **#671** *(Provisioning Cloud Storage-1)*: Which of the following file transfer utility creates a shared folder metaphor using a Web service? — **Ans: `A`**
- **#672** *(Provisioning Cloud Storage-2 (DaaS, S3, Google Drive))*: Which of the following service is provided by Google for online storage? — **Ans: `A`**
- **#673** *(Provisioning Cloud Storage-2 (DaaS, S3, Google Drive))*: Which of the following are Managed cloud storage providers? — **Ans: `D`**
- **#674** *(Cloud Backup Solutions & Snapshots)*: Which of the following factors are deemed to be important considerations for evaluating cloud solutions? — **Ans: `D`**
- **#675** *(Cloud Backup Solutions & Snapshots)*: Which of the following backup is also referred to as snapshots? — **Ans: `A`**
- **#676** *(Cloud Backup Solutions & Snapshots)*: The amount of time needed to backup a system is referred to as its _______________ — **Ans: `C`**
- **#677** *(Cloud Backup Types & Data Archival)*: Which of the following backups are faster and more efficient from a storage perspective? — **Ans: `B`**
- **#678** *(Cloud Backup Types & Data Archival)*: Which of the following is used to specify the migration of data that is no longer in use to tertiary long-term data storage for retention? — **Ans: `C`**
- **#679** *(Cloud Backup Features (3-2-1 Rule & Encryption))*: Which of the following is the first rule according to 3-2-1 Backup Rule by Peter Krogh? — **Ans: `C`**
- **#680** *(Cloud Backup Features (3-2-1 Rule & Encryption))*: How many bits of encryption is at least required for cloud backup storage solution? — **Ans: `C`**

### Moderate Level (24 Qs): `#681`, `#682`, `#683`, `#684`, `#685`, `#686`, `#687`, `#688`, `#689`, `#690`, `#691`, `#692`, `#693`, `#694`, `#695`, `#696`, `#697`, `#698`, `#699`, `#700`, `#701`, `#702`, `#703`, `#704`

- **#681** *(Cloud Computing Stack-1)*: Point out the correct statement. — **Ans: `D`**
- **#682** *(Cloud Computing Stack-1)*: Which of the following is the property of the composable component? — **Ans: `B`**
- **#683** *(Cloud Computing Stack-1)*: From the standpoint of a ________ it makes no sense to offer non-standard machine instances to customers. — **Ans: `D`**
- **#684** *(Cloud Computing Stack-1)*: Which of the following benefit is provided by the PaaS service provider? — **Ans: `D`**
- **#685** *(Application Attributes for Cloud Deployment)*: Point out the correct statement. — **Ans: `A`**
- **#686** *(Application Attributes for Cloud Deployment)*: Point out the wrong statement. — **Ans: `C`**
- **#687** *(Application Attributes for Cloud Deployment)*: APIs and Deployment are second level application attributes in accordance with ____________ — **Ans: `C`**
- **#688** *(Applications in the Cloud & Transaction Properties)*: Which of the following component is required for both online and local data access in hybrid application? — **Ans: `C`**
- **#689** *(Applications, Cloud APIs & Managed/Unmanaged Storage)*: Point out the correct statement. — **Ans: `D`**
- **#690** *(Applications, Cloud APIs & Managed/Unmanaged Storage)*: Which of the following storage is presented to a user as if it is a ready-to-use disk drive? — **Ans: `B`**
- **#691** *(Applications, Cloud APIs & Managed/Unmanaged Storage)*: Which of the following cloud storage involves the provisioning of a raw virtualized disk? — **Ans: `A`**
- **#692** *(Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing))*: Point out the correct statement. — **Ans: `A`**
- **#693** *(Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing))*: _______ creates a container that encapsulates the application and all the application’s dependencies within a set of files. — **Ans: `A`**
- **#694** *(Porting & Deploying Applications (Virtual Appliances, Containers, Load Balancing))*: Which of the following layer serves as the mediator for file I/O, the memory I/O, and application calls and response to DLLs? — **Ans: `C`**
- **#695** *(Capacity Planning & LAMP Stack on AWS AMI)*: Point out the correct statement. — **Ans: `D`**
- **#696** *(Capacity Planning & LAMP Stack on AWS AMI)*: Which of the following is one of the major categories of Amazon Machine Instances that you can create on the Amazon Web Service? — **Ans: `C`**
- **#697** *(Capacity Planning & LAMP Stack on AWS AMI)*: Which of the following is a critical step in capacity planning? — **Ans: `B`**
- **#698** *(Cloud Monitoring & Baseline Measurements (sar, Ganglia, Zabbix))*: Which of the following is used as an Open source distributed monitoring system? — **Ans: `C`**
- **#699** *(Resource Ceilings, Bottlenecks & Load Balancers)*: Point out the correct statement. — **Ans: `B`**
- **#700** *(Provisioning Cloud Storage-2 (DaaS, S3, Google Drive))*: Point out the correct statement. — **Ans: `A`**
- **#701** *(Provisioning Cloud Storage-2 (DaaS, S3, Google Drive))*: Which of the following association has coined the term Data Storage as a Service (DaaS) to describe the delivery of storage on demand to ... — **Ans: `A`**
- **#702** *(Cloud Backup Solutions & Snapshots)*: Which of the following backup lets you restore your data to a point in time and saves multiple copies of any file that has been changed? — **Ans: `A`**
- **#703** *(Cloud Backup Types & Data Archival)*: Which of the following is useful for legal compliance or to provide a long-term historical record? — **Ans: `D`**
- **#704** *(Cloud Backup Features (3-2-1 Rule & Encryption))*: Point out the correct statement. — **Ans: `B`**

## Cloud Session 7: Cloud Architecture, Scaling, Load Balancing, Security & Shared Responsibility (26 Must-Practice MCQs)

### Basic Level (14 Qs): `#784`, `#785`, `#786`, `#787`, `#788`, `#789`, `#790`, `#791`, `#792`, `#793`, `#794`, `#795`, `#796`, `#797`

- **#784** *(Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling)*: Which of the following packet sniffer was formerly called Ethereal? — **Ans: `B`**
- **#785** *(Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling)*: __________ scaling allows you to use a virtual system to run more virtual machines. — **Ans: `B`**
- **#786** *(Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling)*: Scaling _____ indefinitely leads you to an architecture with a large number of servers. — **Ans: `A`**
- **#787** *(Security Service Boundary & Shared Responsibility Model)*: Which of the following service provider provides the highest level of service? — **Ans: `A`**
- **#788** *(Security Service Boundary & Shared Responsibility Model)*: Which of the following model allows vendor to provide security as part of the Service Level Agreement? — **Ans: `A`**
- **#789** *(Security Service Boundary & Shared Responsibility Model)*: Which of the following service model is owned in terms of infrastructure by both vendor and customer? — **Ans: `C`**
- **#790** *(Cloud Security, Multi-Tenancy & CSA Reference Model)*: Which of the following service provider provides the least amount of built in security? — **Ans: `C`**
- **#791** *(Cloud Security, Multi-Tenancy & CSA Reference Model)*: Which of the following services that need to be negotiated in Service Level Agreements? — **Ans: `D`**
- **#792** *(Cloud Security, Multi-Tenancy & CSA Reference Model)*: Which of the following is considered an essential element in cloud computing by CSA? — **Ans: `A`**
- **#793** *(Cloud Data Security, Access Control, Encryption & Compliance)*: Which of the following is a compliance standard? — **Ans: `D`**
- **#794** *(Cloud Data Security, Access Control, Encryption & Compliance)*: Which of the following is a key mechanism for protecting data? — **Ans: `D`**
- **#795** *(Cloud Data Security, Access Control, Encryption & Compliance)*: Which of the following are a common means for losing encrypted data? — **Ans: `A`**
- **#796** *(Cloud Identity Protocol Standards (SSO, OpenID, OAuth, SAML))*: Which of the following is done by Identity management? — **Ans: `D`**
- **#797** *(Cloud Identity Protocol Standards (SSO, OpenID, OAuth, SAML))*: Which of the following provides a token service that can be used to present validated access to resources? — **Ans: `A`**

### Moderate Level (12 Qs): `#798`, `#799`, `#800`, `#801`, `#802`, `#803`, `#804`, `#805`, `#806`, `#807`, `#808`, `#809`

- **#798** *(Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling)*: Point out the correct statement. — **Ans: `A`**
- **#799** *(Network Capacity, Horizontal (Scale-Out) vs Vertical Scaling)*: Which of the following factor can be considered to determine WAN Capacity? — **Ans: `D`**
- **#800** *(Security Service Boundary & Shared Responsibility Model)*: Point out the correct statement. — **Ans: `C`**
- **#801** *(Security Service Boundary & Shared Responsibility Model)*: Which of the following functional cloud computing hardware/software stack is the Cloud Reference Model? — **Ans: `B`**
- **#802** *(Security Service Boundary & Shared Responsibility Model)*: For the _________ model, the security boundary may be defined for the vendor to include the software framework and middleware layer. — **Ans: `B`**
- **#803** *(Security Service Boundary & Shared Responsibility Model)*: Point out the wrong statement. — **Ans: `D`**
- **#804** *(Cloud Security, Multi-Tenancy & CSA Reference Model)*: Point out the correct statement. — **Ans: `D`**
- **#805** *(Cloud Security, Multi-Tenancy & CSA Reference Model)*: Which of the following is the operational domain of CSA? — **Ans: `B`**
- **#806** *(Cloud Data Security, Access Control, Encryption & Compliance)*: Point out the correct statement. — **Ans: `B`**
- **#807** *(Cloud Identity Protocol Standards (SSO, OpenID, OAuth, SAML))*: Which of the following standard is the key to creating Single Sign-On (SSO) systems? — **Ans: `A`**
- **#808** *(Cloud Identity Protocol Standards (SSO, OpenID, OAuth, SAML))*: Which of the following is a complementary mechanism to OpenID and is used to create SSO systems? — **Ans: `C`**
- **#809** *(Cloud Models & Types-2 (Public, Private, Community, Hybrid))*: An application that provides for transaction overflow in a reservation system is an example of ____________ — **Ans: `A`**

## Cloud Sessions 8 & 9: AWS (EC2, VPC, S3, EBS, RDS, CloudWatch, EMR) & Microsoft Azure (58 Must-Practice MCQs)

### Basic Level (30 Qs): `#835`, `#836`, `#837`, `#838`, `#839`, `#840`, `#841`, `#842`, `#843`, `#844`, `#845`, `#846`, `#847`, `#848`, `#849`, `#850`, `#851`, `#852`, `#853`, `#854`, `#855`, `#856`, `#857`, `#858`, `#859`, `#860`, `#861`, `#862`, `#863`, `#864`

- **#835** *(Introduction to Cloud Computing)*: _________ computing refers to applications and services that run on a distributed network using virtualized resources. — **Ans: `B`**
- **#836** *(Introduction to Cloud Computing)*: ________ as a utility is a dream that dates from the beginning of the computing industry itself. — **Ans: `B`**
- **#837** *(Introduction to Cloud Computing)*: Which of the following cloud concept is related to pooling and sharing of resources? — **Ans: `C`**
- **#838** *(Introduction to Cloud Computing)*: Cloud computing is an abstraction based on the notion of pooling physical resources and presenting them as a ________ resource. — **Ans: `B`**
- **#839** *(Introduction to Cloud Computing)*: Which of the following is Cloud Platform by Amazon? — **Ans: `B`**
- **#840** *(IaaS — Infrastructure as a Service-2)*: Which of the following is a classic example of an IaaS service model? — **Ans: `A`**
- **#841** *(IaaS — Infrastructure as a Service-2)*: Pods are aggregated into pools within an IaaS region or site called an _________ zone. — **Ans: `C`**
- **#842** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: ________ virtualization abstracts networking hardware and software into a virtual network that can be managed. — **Ans: `B`**
- **#843** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: A _______ image makes a copy or a clone of the entire computer system inside a single container such as a file. — **Ans: `A`**
- **#844** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: _________ is used by Amazon Web Services to store copies of a virtual machine. — **Ans: `A`**
- **#845** *(Cloud Storage Architecture, Redundancy, Availability Zones & SAN/LUN)*: Which of the following feature make cloud-based storage systems highly reliable? — **Ans: `D`**
- **#846** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following is the central application in the AWS portfolio? — **Ans: `A`**
- **#847** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following is a system for creating block level storage devices that can be used for Amazon Machine Instances in EC2? — **Ans: `B`**
- **#848** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following feature is used for scaling of EC2 sites? — **Ans: `B`**
- **#849** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following is an online backup and storage system? — **Ans: `D`**
- **#850** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Which of the following is an edge-storage or content-delivery system that caches data in different physical locations? — **Ans: `C`**
- **#851** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Which of the following allows you to create instances of the MySQL database to support your Web sites? — **Ans: `C`**
- **#852** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Which of the following is built on top of a Hadoop framework using the Elastic Compute Cloud? — **Ans: `A`**
- **#853** *(AWS EC2 Server & Instance Types (Micro, Small, High-CPU/Memory & Auto Scaling))*: Which of the following instance is used by default in AMI? — **Ans: `C`**
- **#854** *(AWS EC2 Server & Instance Types (Micro, Small, High-CPU/Memory & Auto Scaling))*: Which of the following cloud computing infrastructures automatically manage your capacity? — **Ans: `B`**
- **#855** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: Which of the following standard does Azure use? — **Ans: `D`**
- **#856** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: Which of the following web applications can be deployed with Azure? — **Ans: `D`**
- **#857** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: Which of the following element is a non-relational storage system for large-scale storage? — **Ans: `C`**
- **#858** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: Azure Storage plays the same role in Azure that ______ plays in Amazon Web Services. — **Ans: `A`**
- **#859** *(Azure Data Services (SQL Azure), Blob CDN & Replication)*: Which of the following are a worldwide content caching and delivery system for Windows Azure blob content? — **Ans: `A`**
- **#860** *(Azure Data Services (SQL Azure), Blob CDN & Replication)*: SQL Azure is a cloud-based relational database service that is based on ____________ — **Ans: `B`**
- **#861** *(Azure Data Services (SQL Azure), Blob CDN & Replication)*: Azure data is replicated ________ times for data protection and writes are checked for consistency. — **Ans: `C`**
- **#862** *(Azure Data Services (SQL Azure), Blob CDN & Replication)*: Microsoft offers a _______ calculator for the Windows Azure Platform. — **Ans: `A`**
- **#863** *(Azure AppFabric (Service Bus, Access Control & Caching))*: Which of the following is used to negotiate the exchange of information between a client and the service? — **Ans: `D`**
- **#864** *(PaaS — Platform as a Service)*: Which of the following is an example of a PaaS cloud service? — **Ans: `D`**

### Moderate Level (28 Qs): `#865`, `#866`, `#867`, `#868`, `#869`, `#870`, `#871`, `#872`, `#873`, `#874`, `#875`, `#876`, `#877`, `#878`, `#879`, `#880`, `#881`, `#882`, `#883`, `#884`, `#885`, `#886`, `#887`, `#888`, `#889`, `#890`, `#891`, `#892`

- **#865** *(Introduction to Cloud Computing)*: Which of the following is essential concept related to Cloud? — **Ans: `C`**
- **#866** *(Introduction to Cloud Computing)*: Point out the wrong statement. — **Ans: `A`**
- **#867** *(IaaS — Infrastructure as a Service-2)*: Point out the correct statement. — **Ans: `B`**
- **#868** *(IaaS — Infrastructure as a Service-2)*: Which of the following is the management console in AWS? — **Ans: `B`**
- **#869** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: Which of the following product migrate files from one datastore to another datastore? — **Ans: `B`**
- **#870** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: Which of the following visualization is most commonly achieved through a mapping mechanism where a logical storage address is translated ... — **Ans: `A`**
- **#871** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: Which of the following is an open standard for storing a system image? — **Ans: `A`**
- **#872** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: AMI imaging service is provided by Amazon for ______________ — **Ans: `D`**
- **#873** *(VM Provisioning, Migration & Machine Imaging (AMI, OVF, VMotion))*: Which of the following runs on Xen Hypervisor? — **Ans: `B`**
- **#874** *(Cloud Storage Architecture, Redundancy, Availability Zones & SAN/LUN)*: Point out the wrong statement. — **Ans: `D`**
- **#875** *(Cloud Storage Architecture, Redundancy, Availability Zones & SAN/LUN)*: A ________ is a logical unit that serves as the target for storage operations, such as the SCSI protocol READs and WRITEs. — **Ans: `C`**
- **#876** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Point out the wrong statement. — **Ans: `C`**
- **#877** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following is a message queue or transaction system for distributed Internet-based applications? — **Ans: `B`**
- **#878** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Point out the correct statement. — **Ans: `B`**
- **#879** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following is a Web service that can publish messages from an application and deliver them to other applications or to subscr... — **Ans: `C`**
- **#880** *(Amazon Web Services (AWS) Core Components (EC2, S3, EBS, Auto Scaling, CloudWatch))*: Which of the following metrics are used to support Elastic Load Balancing? — **Ans: `A`**
- **#881** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Point out the wrong statement. — **Ans: `D`**
- **#882** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Point out the correct statement. — **Ans: `B`**
- **#883** *(Amazon Web Services (AWS) — EC2, RDS, CloudFront, SimpleDB & EMR)*: Which of the following is a structured data store that supports indexing and data queries to both EC2 and S3? — **Ans: `B`**
- **#884** *(AWS EC2 Server & Instance Types (Micro, Small, High-CPU/Memory & Auto Scaling))*: Point out the correct statement. — **Ans: `D`**
- **#885** *(AWS EC2 Server & Instance Types (Micro, Small, High-CPU/Memory & Auto Scaling))*: Which of the following instance has an API name: m2.4xlarge? — **Ans: `A`**
- **#886** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: What does IPsec in the Azure platform refer to? — **Ans: `A`**
- **#887** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: A _________ role is a virtual machine instance running the Microsoft IIS Web server that can accept and respond to HTTP or HTTPS requests. — **Ans: `A`**
- **#888** *(Microsoft Azure Platform Overview (Compute, Storage vs S3, Web/Worker Roles))*: Which of the following element allows you to create and manage virtual machines that serve either in a Web role and a Worker role? — **Ans: `A`**
- **#889** *(Azure Data Services (SQL Azure), Blob CDN & Replication)*: The connection between storage and Microsoft’s Content Delivery Network is stated to be at least _______ percent uptime. — **Ans: `C`**
- **#890** *(Azure AppFabric (Service Bus, Access Control & Caching))*: Point out the correct statement. — **Ans: `D`**
- **#891** *(Azure AppFabric (Service Bus, Access Control & Caching))*: The _________ portion of Azure AppFabric is a claims access control system that provides a token-based trust mechanism for identity manag... — **Ans: `C`**
- **#892** *(Azure AppFabric (Service Bus, Access Control & Caching))*: Which of the following can be used to create distributed systems based on SOA? — **Ans: `C`**

