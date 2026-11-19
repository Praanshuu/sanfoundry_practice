# Java Programming — Curated Must-Do 150 Questions & Full Solutions (PGCP-BDA, Java 17 LTS)

- **Total Questions in Main Bank:** `766`
- **Curated Must-Do Shortlist (`MUST_DO`):** `152` high-yield MCQs (`101` Basic • `31` Moderate • `20` Hard)

## Session-Wise Must-Do Breakdown

| Syllabus Session | Total in Bank | Must-Do Shortlist | Basic | Moderate | Hard |
|---|---:|---:|---:|---:|---:|
| Sessions 1 & 2: Getting Started with Java (JVM, JDK, Data Types, Operators & Control Statements) | 88 | **16** | 11 | 2 | 3 |
| Session 3: Introduction to OOP (Classes, Objects, Packages, Arrays & GC) | 26 | **7** | 4 | 1 | 2 |
| Session 4: Pillars of OOP (Methods, Encapsulation, Inheritance, Interfaces & Polymorphism) | 107 | **23** | 10 | 8 | 5 |
| Session 5: Exception Handling | 54 | **13** | 8 | 1 | 4 |
| Session 6: Strings, StringBuffer/Builder & Regular Expressions | 81 | **15** | 3 | 12 | 0 |
| Sessions 7 & 8: Generics & Collections Framework | 104 | **20** | 17 | 1 | 2 |
| Session 9: Enums, Wrapper Classes, Annotations & java.lang / java.util | 114 | **15** | 9 | 3 | 3 |
| Sessions 10 & 11: Functional Programming & Lambda Expressions | 6 | **3** | 3 | 0 | 0 |
| Sessions 12 & 13: Java Streams & Date-Time API | 16 | **9** | 8 | 1 | 0 |
| Session 14: Multithreading & Concurrency | 63 | **13** | 12 | 1 | 0 |
| Session 15: File Handling & Object Serialization (java.io) | 87 | **12** | 10 | 1 | 1 |
| Sessions 16 & 17: Java Database Connectivity — JDBC | 10 | **6** | 6 | 0 | 0 |
| Excluded / Out of Syllabus (Recursion, Networking, Servlets, Hibernate & JUnit) | 10 | **0** | 0 | 0 | 0 |

---

## Sessions 1 & 2: Getting Started with Java (JVM, JDK, Data Types, Operators & Control Statements) (16 Must-Do MCQs)

### 1. Question #1 — *JDK, JRE, JIT & JVM* `[Basic]`
**Which component is used to compile, debug and execute java program?**

- **A)** `JVM`
- **B)** `JDK`
- **C)** `JIT`
- **D)** `JRE`

> **Correct Answer:** **B** (`JDK`)  
> **Explanation:** JDK is a core component of Java Environment and provides all the tools, executables and binaries required to compile, debug and execute a Java Program.

### 2. Question #2 — *JDK, JRE, JIT & JVM* `[Basic]`
**Which component is responsible for interpreting bytecode into machine specific code?**

- **A)** `JVM`
- **B)** `JDK`
- **C)** `JIT`
- **D)** `JRE`

> **Correct Answer:** **A** (`JVM`)  
> **Explanation:** JVM (Java Virtual Machine) is responsible for interpreting bytecode into machine-specific code. It executes the bytecode and manages memory, security, and platform independence.

### 3. Question #4 — *JDK, JRE, JIT & JVM* `[Basic]`
**Which component is responsible to optimize bytecode to machine code?**

- **A)** `JVM`
- **B)** `JDK`
- **C)** `JIT`
- **D)** `JRE`

> **Correct Answer:** **C** (`JIT`)  
> **Explanation:** JIT optimizes bytecode to machine specific language code by compiling similar bytecodes at the same time. This reduces overall time taken for compilation of bytecode to machine specific language.

### 4. Question #6 — *JDK, JRE, JIT & JVM* `[Basic]`
**Which of the below is invalid identifier with the main method?**

- **A)** `public`
- **B)** `static`
- **C)** `private`
- **D)** `final`

> **Correct Answer:** **C** (`private`)  
> **Explanation:** main method cannot be private as it is invoked by external method. Other identifier are valid with main method.

### 5. Question #14 — *Integer and Floating Data Types* `[Basic]`
**An expression involving byte, int, and literal numbers is promoted to which of these?**

- **A)** `int`
- **B)** `long`
- **C)** `byte`
- **D)** `float`

> **Correct Answer:** **A** (`int`)  
> **Explanation:** An expression involving bytes, ints, shorts, literal numbers, the entire expression is promoted to int before any calculation is done.

### 6. Question #18 — *Integer and Floating Data Types* `[Hard]`
**What will be the output of the following Java code?**

```java
class output {
        public static void main(String args[])
        {
            double a, b,c;
            a = 3.0/0;
            b = 0/4.0;
            c=0/0.0;

	    System.out.println(a);
            System.out.println(b);
            System.out.println(c);
        }
    }
```

- **A)**
```java
Infinity
0.0
NaN
```
- **B)**
```java
0.0
Infinity
NaN
```
- **C)**
```java
NaN
Infinity
0.0
```
- **D)** `none of the mentioned`

> **Correct Answer:** **A** (`Infinity
0.0
NaN`)  
> **Explanation:** For floating point literals, we have constant value to represent (10/0.0) infinity either positive or negative and also have NaN (not a number for undefined like 0/0.0), but for the integral type, we don’t have any constant that’s why we get an arithmetic exception.

### 7. Question #21 — *Character and Boolean Data Types* `[Basic]`
**What is the numerical range of a char data type in Java?**

- **A)** `-128 to 127`
- **B)** `0 to 256`
- **C)** `0 to 32767`
- **D)** `0 to 65535`

> **Correct Answer:** **D** (`0 to 65535`)  
> **Explanation:** In Java, the char data type is a 16-bit unsigned integer. It uses 2 bytes of memory, The char is used to store unicode character in java such as special characters, emoji,..etc, and the range it can store is from 0 to 216 – 1, which is 0 to 65535. The unsigned data type doubles the upper limit of the data type by omitting the -ve integers from its range.
To find the range of signed integer we use, 0 to 2n-1, where the n is the number of bits occupied.

### 8. Question #27 — *Character and Boolean Data Types* `[Moderate]`
**What will be the output of the following Java program?**

```java
    class mainclass {
        public static void main(String args[])
        {
            char a = 'A';
            a++;
	    System.out.print((int)a);
        }
    }
```

- **A)** `66`
- **B)** `67`
- **C)** `65`
- **D)** `64`

> **Correct Answer:** **A** (`66`)  
> **Explanation:** ASCII value of ‘A’ is 65, on using ++ operator character value increments by one.

output:

$ javac mainclass.java
$ java mainclass
66

### 9. Question #38 — *Literals & Variables* `[Hard]`
**What will be the output of the following Java program?**

```java
    class variable_scope
    {
        public static void main(String args[])
        {
            int x;
            x = 5;
            {
	        int y = 6;
	        System.out.print(x + " " + y);
            }
            System.out.println(x + " " + y);
        }
    }
```

- **A)** `5 6 5 6`
- **B)** `5 6 5`
- **C)** `Runtime error`
- **D)** `Compilation error`

> **Correct Answer:** **D** (`Compilation error`)  
> **Explanation:** Second print statement doesn’t have access to y , scope y was limited to the block defined after initialization of x.

output:

$ javac variable_scope.java
Exception in thread "main" java.lang.Error: Unresolved compilation problem: y cannot be resolved to a variable

### 10. Question #43 — *Type Conversions, Promotions and Castings* `[Moderate]`
**What will be the error in the following Java code?**

```java
    byte b = 50;
    b = b * 50;
```

- **A)** `b cannot contain value 100, limited by its range`
- **B)** `* operator has converted b * 50 into int, which can not be converted to byte without casting`
- **C)** `b cannot contain value 50`
- **D)** `No error in this code`

> **Correct Answer:** **B** (`* operator has converted b * 50 into int, which can not be converted to byte without casting`)  
> **Explanation:** While evaluating an expression containing int,  bytes or shorts, the whole expression is converted to int then evaluated and the result is also of type int.

### 11. Question #45 — *Type Conversions, Promotions and Castings* `[Basic]`
**What is Truncation in Java?**

- **A)** `Floating-point value assigned to an integer type`
- **B)** `Integer value assigned to floating type`
- **C)** `Floating-point value assigned to a Floating type`
- **D)** `Integer value assigned to an integer type`

> **Correct Answer:** **A** (`Floating-point value assigned to an integer type`)  
> **Explanation:** Truncate means to trim some digits of a floating type number or a double type number from right. We can also truncate the decimal portion completely making it an integer type number.

### 12. Question #52 — *Arithmetic Operators* `[Basic]`
**Modulus operator, %, can be applied to which of these?**

- **A)** `Integers`
- **B)** `Floating – point numbers`
- **C)** `Both Integers and floating – point numbers`
- **D)** `None of the mentioned`

> **Correct Answer:** **C** (`Both Integers and floating – point numbers`)  
> **Explanation:** Modulus operator can be applied to both integers and floating point numbers.

### 13. Question #56 — *Arithmetic Operators* `[Hard]`
**What will be the output of the following Java program?**

```java
    class increment
    {
        public static void main(String args[])
        {
            double var1 = 1 + 5;
            double var2 = var1 / 4;
            int var3 = 1 + 5;
            int var4 = var3 / 4;
            System.out.print(var2 + " " + var4);

        }
    }
```

- **A)** `1 1`
- **B)** `0 1`
- **C)** `1.5 1`
- **D)** `1.5 1.0`

> **Correct Answer:** **C** (`1.5 1`)  
> **Explanation:** Since the variable var2 is of double type, when it is converted to a string, it will be printed with a single trailing zero after the decimal point, i.e., “.0”. On the other hand, var4 is of int data type, so when it is converted to a string, it will contain only the integer (floor) value without any decimal part.

output:

$ javac increment.java
$ java increment
1.5 1

### 14. Question #64 — *Bitwise Operators* `[Basic]`
**Which right shift operator preserves the sign of the value?**

- **A)** `<<`
- **B)** `>>`
- **C)** `<<=`
- **D)** `>>>`

> **Correct Answer:** **B** (`>>`)  
> **Explanation:** Bitwise shift operators in Java allow you to shift the bits of a number left or right, and can be used for efficient mathematical operations. Here’s a breakdown of these operators:
<< (Left Shift): Shifts bits to the left, filling the right with 0s. This operation is equivalent to multiplying the number by 2n, where n is the number of positions the bits are shifted.
>> (Right Shift): Shifts bits to the right while preserving the sign bit (Arithmetic shift). This operation is equivalent to dividing the number by 2n, where n is the number of positions the bits are shifted.
>>> (Unsigned Right Shift): Shifts bits to the right, filling the left with 0s (Logical shift). This operation does not preserve the sign bit, unlike the arithmetic shift.
<<=: This is a shorthand for the left shift assignment. For example, x <<= no_bits is equivalent to x = x << no_bits.

### 15. Question #73 — *Control Statements-1* `[Basic]`
**Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?**

- **A)** `do-while`
- **B)** `while`
- **C)** `for`
- **D)** `none of the mentioned`

> **Correct Answer:** **A** (`do-while`)  
> **Explanation:** The do-while loop is also known as exit control loops, because it executes the code of the block before checking the conditional statement.



Syntax:
do{
	// statements
}while(/* conditional statement*/);

### 16. Question #75 — *Control Statements-1* `[Basic]`
**Which of this statement is incorrect?**

- **A)** `switch statement is more efficient than a set of nested ifs`
- **B)** `two case constants in the same switch can have identical values`
- **C)** `switch statement can only test for equality, whereas if statement can evaluate any type of boolean expression`
- **D)** `it is possible to create a nested switch statements`

> **Correct Answer:** **B** (`two case constants in the same switch can have identical values`)  
> **Explanation:** No two case constants in the same switch can have identical values.

## Session 3: Introduction to OOP (Classes, Objects, Packages, Arrays & GC) (7 Must-Do MCQs)

### 1. Question #91 — *Java Arrays* `[Moderate]`
**What will be the output of the following Java code?**

```java
    int arr[] = new int [5];
    System.out.print(arr);
```

- **A)** `0`
- **B)** `value stored in arr[0]`
- **C)** `00000`
- **D)** `Class name@ hashcode in hexadecimal form`

> **Correct Answer:** **D** (`Class name@ hashcode in hexadecimal form`)  
> **Explanation:** If we trying to print any reference variable internally, toString() will be called which is implemented to return the String in following form:
classname@hashcode in hexadecimal form

### 2. Question #93 — *Java Arrays* `[Basic]`
**Which of these is necessary to specify at time of array initialization?**

- **A)** `Row`
- **B)** `Column`
- **C)** `Both Row and Column`
- **D)** `None of the mentioned`

> **Correct Answer:** **A** (`Row`)  
> **Explanation:** It is necessary to give the row size when initializing a multidimensional array because, in Java, we can later define the sizes of the other dimensions. For example, when a 2-D array is declared with a row size of 3, it means an array with 3 reference pointers to arrays is created. These pointers can then be assigned to actual array rows later, with their respective column sizes.

### 3. Question #100 — *Arrays Revisited & Keyword static* `[Basic]`
**Which of these keywords is used to prevent content of a variable from being modified?**

- **A)** `final`
- **B)** `last`
- **C)** `constant`
- **D)** `static`

> **Correct Answer:** **A** (`final`)  
> **Explanation:** A variable can be declared final, doing so prevents its content from being modified. Final variables must be initialized when it is declared.

### 4. Question #106 — *Arrays Revisited & Keyword static* `[Hard]`
**What will be the output of the following Java program?**

```java
    class access
    {
       static int x;
       void increment()
       {
           x++;
       }
     }
    class static_use
    {
        public static void main(String args[])
        {
            access obj1 = new access();
            access obj2 = new access();
            obj1.x = 0;
            obj1.increment();
            obj2.increment();
            System.out.println(obj1.x + " " + obj2.x);
         }
   }
```

- **A)** `1 2`
- **B)** `1 1`
- **C)** `2 2`
- **D)** `Compilation Error`

> **Correct Answer:** **C** (`2 2`)  
> **Explanation:** All objects of class share same static variable, all the objects share same copy of static members, obj1.x and obj2.x refer to same element of class which has been incremented twice and its value is 2.

output:

$ javac static_use.java
$ java static_use
2 2

### 5. Question #110 — *Overview of Java & JDK* `[Basic]`
**Which environment variable is used to set the java path?**

- **A)** `MAVEN_Path`
- **B)** `JavaPATH`
- **C)** `JAVA`
- **D)** `JAVA_HOME`

> **Correct Answer:** **D** (`JAVA_HOME`)  
> **Explanation:** JAVA_HOME is used to store a path to the java installation.

### 6. Question #112 — *Class Fundamentals & Declaring Objects* `[Basic]`
**What is not the use of “this” keyword in Java?**

- **A)** `Referring to the instance variable when a local variable has the same name`
- **B)** `Passing itself to the method of the same class`
- **C)** `Passing itself to another method`
- **D)** `Calling another constructor in constructor chaining`

> **Correct Answer:** **B** (`Passing itself to the method of the same class`)  
> **Explanation:** “this” is an important keyword in java. It helps to distinguish between local variable and variables passed in the method as parameters.

### 7. Question #113 — *Class Fundamentals & Declaring Objects* `[Hard]`
**What will be the output of the following Java code?**

```java
    class box
    {
        int width;
        int height;
        int length;
    }
    class main
    {
        public static void main(String args[])
        {
             box obj = new box();
             obj.width = 10;
             obj.height = 2;
             obj.length = 10;
             int y = obj.width * obj.height * obj.length;
             System.out.print(y);
        }
    }
```

- **A)** `100`
- **B)** `400`
- **C)** `200`
- **D)** `12`

> **Correct Answer:** **C** (`200`)  
> **Explanation:** The variables length, breadth, and height are default (friendly) instance variables of the Box class. Therefore, they can be accessed directly by the object. The variable y stores the product of these three variables, resulting in an output of 200.

output:

$ javac main.java
$ java main
200

## Session 4: Pillars of OOP (Methods, Encapsulation, Inheritance, Interfaces & Polymorphism) (23 Must-Do MCQs)

### 1. Question #116 — *Overloading Methods & Argument Passing* `[Basic]`
**Which of these can be overloaded?**

- **A)** `Methods`
- **B)** `Constructors`
- **C)** `Both Methods and Constructor`
- **D)** `None of the mentioned`

> **Correct Answer:** **C** (`Both Methods and Constructor`)  
> **Explanation:** Overloading is a very powerful feature of java, which allows the developer to declare multiple methods or constructors with the same name but different functionality, which improves readability and flexibility of the program.

### 2. Question #119 — *Overloading Methods & Argument Passing* `[Hard]`
**What will be the output of the following Java code?**

```java
class San
{
 public void m1 (int i,float f)
 {
  System.out.println(" int float method");
 }

 public void m1(float f,int i)
  {
  System.out.println("float int method");
  }

  public static void main(String[]args)
  {
    San s=new San();
        s.m1(20,20);
  }
}
```

- **A)** `int float method`
- **B)** `float int method`
- **C)** `compile time error`
- **D)** `run time error`

> **Correct Answer:** **C** (`compile time error`)  
> **Explanation:** While resolving overloaded method, compiler automatically promotes if exact match is not found. But in this case, which one to promote is an ambiguity.

### 3. Question #123 — *Overloading Methods & Argument Passing* `[Hard]`
**What will be the output of the following Java code?**

```java
    class test
    {
        int a;
        int b;
        void meth(int i , int j)
        {
            i *= 2;
            j /= 2;
        }
    }
    class Output
    {
        public static void main(String args[])
        {
            test obj = new test();
	    int a = 10;
            int b = 20;
            obj.meth(a , b);
            System.out.println(a + " " + b);
        }
    }
```

- **A)** `10 20`
- **B)** `20 10`
- **C)** `20 40`
- **D)** `40 20`

> **Correct Answer:** **A** (`10 20`)  
> **Explanation:** Variables a & b are passed by value, copy of their values are made on formal parameters of function meth() that is i & j. Therefore changes done on i & j are not reflected back on original arguments. a & b remain 10 & 20 respectively.

output:

$ javac Output.java
$ java Output
10 20

### 4. Question #124 — *Overloading Methods & Argument Passing* `[Hard]`
**What will be the output of the following Java code?**

```java
    class test
    {
        int a;
        int b;
        test(int i, int j)
        {
            a = i;
            b = j;
        }
        void meth(test o)
        {
            o.a *= 2;
            o.b /= 2;
        }
    }
    class Output
    {
        public static void main(String args[])
        {
            test obj = new test(10 , 20);
            obj.meth(obj);
            System.out.println(obj.a + " " + obj.b);
        }
    }
```

- **A)** `10 20`
- **B)** `20 10`
- **C)** `20 40`
- **D)** `40 20`

> **Correct Answer:** **B** (`20 10`)  
> **Explanation:** Class objects are always passed by reference, therefore changes done are reflected back on original arguments. obj.meth(obj) sends object obj as parameter whose variables a & b are multiplied and divided by 2 respectively  by meth() function of class test. a & b becomes 20 & 10 respectively.

output:

$ javac Output.java
$ java Output
20 10

### 5. Question #137 — *Access Control-1* `[Moderate]`
**Which of these is used as a default for a member of a class if no access specifier is used for it?**

- **A)** `private`
- **B)** `public`
- **C)** `public, within its own package`
- **D)** `protected`

> **Correct Answer:** **C** (`public, within its own package`)  
> **Explanation:** If no access specifier is used, the member has default (package-private) access, meaning it is accessible by any class within the same package but not outside it. This is sometimes called “package-private” or “default” access.

### 6. Question #139 — *Access Control-1* `[Basic]`
**Which of the following statements are incorrect?**

- **A)** `public members of class can be accessed by any code in the program`
- **B)** `private members of class can only be accessed by other members of the class`
- **C)** `private members of class can be inherited by a subclass, and become protected members in subclass`
- **D)** `protected members of a class can be inherited by a subclass, and become private members of the subclass`

> **Correct Answer:** **C** (`private members of class can be inherited by a subclass, and become protected members in subclass`)  
> **Explanation:** private members of a class can not be inherited by a subclass.

### 7. Question #147 — *Access Control-2* `[Basic]`
**How can a protected modifier be accessed?**

- **A)** `accessible only within the class`
- **B)** `accessible only within package`
- **C)** `accessible within package and outside the package but through inheritance only`
- **D)** `accessible by all`

> **Correct Answer:** **C** (`accessible within package and outside the package but through inheritance only`)  
> **Explanation:** The protected access modifier is accessible within package and outside the package but only through inheritance. The protected access modifier can be used with data member, method and constructor. It cannot be applied in the class.

### 8. Question #148 — *Access Control-2* `[Moderate]`
**What happens if constructor of class A is made private?**

- **A)** `Any class can instantiate objects of class A`
- **B)** `Objects of class A can be instantiated only within the class where it is declared`
- **C)** `Inherited class can instantiate objects of class A`
- **D)** `classes within the same package as class A can instantiate objects of class A`

> **Correct Answer:** **B** (`Objects of class A can be instantiated only within the class where it is declared`)  
> **Explanation:** If we make any class constructor private, we cannot create the instance of that class from outside the class.

### 9. Question #150 — *Access Control-2* `[Basic]`
**What is true of final class?**

- **A)** `Final class cause compilation failure`
- **B)** `Final class cannot be instantiated`
- **C)** `Final class cause runtime failure`
- **D)** `Final class cannot be inherited`

> **Correct Answer:** **D** (`Final class cannot be inherited`)  
> **Explanation:** Final class cannot be inherited. This helps when we do not want classes to provide extension to these classes.

### 10. Question #156 — *Method Overriding* `[Basic]`
**Which of these keywords can be used to prevent Method overriding?**

- **A)** `static`
- **B)** `constant`
- **C)** `protected`
- **D)** `final`

> **Correct Answer:** **D** (`final`)  
> **Explanation:** To disallow a method from being overridden, specify final as a modifier at the start of its declaration. Methods declared as final cannot be overridden.

### 11. Question #157 — *Method Overriding* `[Moderate]`
**Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B?**

- **A)** `super(void);`
- **B)** `superclass.();`
- **C)** `super.A();`
- **D)** `super();`

> **Correct Answer:** **D** (`super();`)  
> **Explanation:** In Java, when a subclass wants to explicitly call the no-argument constructor of its superclass, it uses super();. This must be the first statement in the subclass constructor.

### 12. Question #160 — *Method Overriding* `[Hard]`
**What will be the output of the following Java program?**

```java
 class Alligator
 {
  public static void main(String[] args)
   {
   int []x[] = {{1,2}, {3,4,5}, {6,7,8,9}};
   int [][]y = x;
   System.out.println(y[2][1]);
   }
 }
```

- **A)** `2`
- **B)** `3`
- **C)** `7`
- **D)** `Compilation Error`

> **Correct Answer:** **C** (`7`)  
> **Explanation:** Both x,and y are pointing to the same array.

### 13. Question #163 — *Method Overriding* `[Hard]`
**What will be the output of the following Java program?**

```java
    class A
    {
        int i;
        public void display()
        {
            System.out.println(i);
        }
    }
    class B extends A
   {
        int j;
        public void display()
        {
            System.out.println(j);
        }
    }
    class Dynamic_dispatch
   {
        public static void main(String args[])
        {
            B obj2 = new B();
            obj2.i = 1;
            obj2.j = 2;
            A r;
            r = obj2;
            r.display();
        }
   }
```

- **A)** `1`
- **B)** `2`
- **C)** `3`
- **D)** `4`

> **Correct Answer:** **B** (`2`)  
> **Explanation:** r is reference of type A, the program assigns a reference of object obj2 to r and uses that reference to call function display() of class B.

output:

$ javac Dynamic_dispatch.java
$ java Dynamic_dispatch
2

### 14. Question #168 — *Object Class* `[Moderate]`
**Which of these keywords cannot be used for a class which has been declared final?**

- **A)** `abstract`
- **B)** `extends`
- **C)** `abstract and extends`
- **D)** `none of the mentioned`

> **Correct Answer:** **A** (`abstract`)  
> **Explanation:** A abstract class is incomplete by itself and relies upon its subclasses to provide a complete implementation. If we declare a class final then no class can inherit that class, an abstract class needs its subclasses hence both final and abstract cannot be used for a same class.

### 15. Question #176 — *Abstract Class and Super* `[Moderate]`
**If a class inheriting an abstract class does not define all of its function then it will be known as?**

- **A)** `Abstract`
- **B)** `A simple class`
- **C)** `Static class`
- **D)** `None of the mentioned`

> **Correct Answer:** **A** (`Abstract`)  
> **Explanation:** Any subclass of an abstract class must either implement all of the abstract method in the superclass or be itself declared abstract.

### 16. Question #177 — *Abstract Class and Super* `[Basic]`
**Which of these is not a correct statement?**

- **A)** `Every class containing abstract method must be declared abstract`
- **B)** `Abstract class does not define the complete implementation of a class`
- **C)** `Abstract class can be initiated by new operator`
- **D)** `Abstract class can be inherited`

> **Correct Answer:** **C** (`Abstract class can be initiated by new operator`)  
> **Explanation:** Abstract class cannot be directly initiated with new operator, Since abstract class does not contain any definition of implementation it is not possible to create an abstract object.

### 17. Question #184 — *Inheritance-1* `[Moderate]`
**A class member declared protected in Java becomes what type of member in the subclass?**

- **A)** `public member`
- **B)** `private member`
- **C)** `protected member`
- **D)** `static member`

> **Correct Answer:** **C** (`protected member`)  
> **Explanation:** In Java, a protected member of a class is accessible within the same package and also to subclasses, even if they are defined in a different package. When such a member is inherited by a subclass, it remains protected and retains its access scope. It does not automatically change to public or private. Therefore, in the subclass, it continues to behave as a protected member unless explicitly overridden with a different access modifier.

### 18. Question #191 — *Inheritance-2* `[Basic]`
**Using which of the following, multiple inheritance in Java can be implemented?**

- **A)** `Interfaces`
- **B)** `Multithreading`
- **C)** `Protected methods`
- **D)** `Private methods`

> **Correct Answer:** **A** (`Interfaces`)  
> **Explanation:** Multiple inheritance in java is implemented using interfaces. Multiple interfaces can be implemented by a class.

### 19. Question #194 — *Inheritance-2* `[Moderate]`
**If super class and subclass have same variable name, which keyword should be used to use super class?**

- **A)** `super`
- **B)** `this`
- **C)** `upper`
- **D)** `classname`

> **Correct Answer:** **A** (`super`)  
> **Explanation:** Super keyword is used to access hidden super class variable in subclass.

### 20. Question #198 — *Inheritance-2* `[Moderate]`
**What would be the result if a class extends two interfaces and both have a method with same name and signature? Lets assume that the class is not implementing that method.**

- **A)** `Runtime error`
- **B)** `Compile time error`
- **C)** `Code runs successfully`
- **D)** `First called method is executed successfully`

> **Correct Answer:** **B** (`Compile time error`)  
> **Explanation:** In case of such conflict, compiler will not be able to link a method call due to ambiguity. It will throw compile time error.

### 21. Question #212 — *Interfaces-2* `[Basic]`
**What type of variable can be defined in an interface?**

- **A)** `public static`
- **B)** `private final`
- **C)** `public final`
- **D)** `static final`

> **Correct Answer:** **D** (`static final`)  
> **Explanation:** variable defined in an interface is implicitly final and static. They are usually written in capital letters.

### 22. Question #214 — *Interfaces-2* `[Basic]`
**What type of methods an interface contain by default?**

- **A)** `abstract`
- **B)** `static`
- **C)** `final`
- **D)** `private`

> **Correct Answer:** **A** (`abstract`)  
> **Explanation:** By default, interface contains abstract methods. The abstract methods need to be implemented by concrete classes.

### 23. Question #216 — *Interfaces-2* `[Basic]`
**What happens when a constructor is defined for an interface?**

- **A)** `Compilation failure`
- **B)** `Runtime Exception`
- **C)** `The interface compiles successfully`
- **D)** `The implementing class will throw exception`

> **Correct Answer:** **A** (`Compilation failure`)  
> **Explanation:** Constructor is not provided by interface as objects cannot be instantiated.

## Session 5: Exception Handling (13 Must-Do MCQs)

### 1. Question #228 — *Exception Handling Basics* `[Hard]`
**What will be the output of the following Java program?**

```java
    class exception_handling
    {
        public static void main(String args[])
        {
            try
           {
                int a, b;
                b = 0;
                a = 5 / b;
                System.out.print("A");
            }
            catch(ArithmeticException e)
            {
        	System.out.print("B");
            }
        }
    }
```

- **A)** `A`
- **B)** `B`
- **C)** `Compilation Error`
- **D)** `Runtime Error`

> **Correct Answer:** **B** (`B`)  
> **Explanation:** The variable a is set to 0, in expression b = 5/a refers to dividing an int{5} with an int{0} which results in an ArithmeticException, which is caught by the catch statement and “B” is printed.

Output:

$ javac exception_handling.java
$ java exception_handling
B

### 2. Question #230 — *Exception Handling Basics* `[Hard]`
**What will be the output of the following Java program?**

```java
    class exception_handling
    {
        public static void main(String args[])
        {
            try
            {
                int i, sum;
                sum = 10;
                for (i = -1; i < 3 ;++i)
                    sum = (sum / i);
            }
            catch(ArithmeticException e)
            {
        	System.out.print("0");
            }
            System.out.print(sum);
        }
    }
```

- **A)** `0`
- **B)** `05`
- **C)** `Compilation Error`
- **D)** `Runtime Error`

> **Correct Answer:** **C** (`Compilation Error`)  
> **Explanation:** Value of variable sum is printed outside of try block, sum is declared only in try block, outside try block it is undefined.

Output:

$ javac exception_handling.java
Exception in thread "main" java.lang.Error: Unresolved compilation problem:
	sum cannot be resolved to a variable

### 3. Question #233 — *Exception Handling* `[Moderate]`
**Which of the following is a super class of all exception type classes?**

- **A)** `Catchable`
- **B)** `RuntimeExceptions`
- **C)** `String`
- **D)** `Throwable`

> **Correct Answer:** **D** (`Throwable`)  
> **Explanation:** Throwable is built in class and all exception types are subclass of this class. It is the super class of all exceptions.

### 4. Question #237 — *Exception Handling* `[Basic]`
**Which part of code gets executed whether exception is caught or not?**

- **A)** `finally`
- **B)** `try`
- **C)** `catch`
- **D)** `throw`

> **Correct Answer:** **A** (`finally`)  
> **Explanation:** Finally block of the code gets executed regardless exception is caught or not. File close, database connection close, etc are usually done in finally.

### 5. Question #239 — *Exception Handling* `[Basic]`
**At runtime, error is recoverable.**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **B** (`False`)  
> **Explanation:** Error is not recoverable at runtime. The control is lost from the application.

### 6. Question #244 — *Exception Types* `[Basic]`
**What exception thrown by parseInt() method?**

- **A)** `ArithmeticException`
- **B)** `ClassNotFoundException`
- **C)** `NullPointerException`
- **D)** `NumberFormatException`

> **Correct Answer:** **D** (`NumberFormatException`)  
> **Explanation:** parseInt() method parses input into integer. The exception thrown by this method is NumberFormatException.

### 7. Question #250 — *Throw, Throws & Nested Try* `[Basic]`
**Which of these keywords is used to by the calling function to guard against the exception that is thrown by called function?**

- **A)** `try`
- **B)** `throw`
- **C)** `throws`
- **D)** `catch`

> **Correct Answer:** **C** (`throws`)  
> **Explanation:** If a method is capable of causing an exception that it does not handle. It must specify this behaviour the behaviour so that callers of the method can guard themselves against that exception. This is done by using throws clause in methods declaration.

### 8. Question #251 — *Throw, Throws & Nested Try* `[Hard]`
**What will be the output of the following Java code?**

```java
   class exception_handling
   {
       public static void main(String args[])
       {
           try
           {
               int a = args.length;
               int b = 10 / a;
               System.out.print(a);
               try
               {
                   if (a == 1)
                       a = a / a - a;
                   if (a == 2)
                   {
                       int []c = {1};
                       c[8] = 9;
                   }
               }
               catch (ArrayIndexOutOfBoundException e)
               {
                   System.out.println("TypeA");
               }
           }
           catch (ArithmeticException e)
           {
               System.out.println("TypeB");
           }
       }
   }
```

- **A)** `TypeA`
- **B)** `TypeB`
- **C)** `Compile Time Error`
- **D)** `0TypeB`

> **Correct Answer:** **C** (`Compile Time Error`)  
> **Explanation:** Because ArrayIndexOutOfBoundException is not a valid Exception. ArrayIndexOutOfBoundsException is a valid exception.
Note: there is s missing in Bounds.

### 9. Question #256 — *Finally & Built in Exceptions* `[Basic]`
**A single try block must be followed by which of these?**

- **A)** `finally`
- **B)** `catch`
- **C)** `catch or finally`
- **D)** `none of the mentioned`

> **Correct Answer:** **C** (`catch or finally`)  
> **Explanation:** try block can be followed by any of finally or catch block, try block checks for exceptions and work is performed by finally and catch block as per the exception.

### 10. Question #257 — *Finally & Built in Exceptions* `[Basic]`
**Which of these exceptions handles the divide by zero error?**

- **A)** `ArithmeticException`
- **B)** `MathException`
- **C)** `IllegalAccessException`
- **D)** `IllegarException`

> **Correct Answer:** **A** (`ArithmeticException`)  
> **Explanation:** The exception that handles the divide by zero error is the ArithmeticException. This exception is thrown when there is an issue with arithmetic operations, such as division by zero.

### 11. Question #264 — *Creating Exceptions* `[Basic]`
**Which of these methods return description of an exception?**

- **A)** `getException()`
- **B)** `getMessage()`
- **C)** `obtainDescription()`
- **D)** `obtainException()`

> **Correct Answer:** **B** (`getMessage()`)  
> **Explanation:** getMessage() returns a description of the exception.

### 12. Question #268 — *Creating Exceptions* `[Hard]`
**What will be the output of the following Java code?**

```java
    class Myexception extends Exception
    {
	int detail;
        Myexception(int a)
        {
            detail = a;
	}
	public String toString()
        {
	    return "detail";
	}
    }
    class Output
    {
        static void compute (int a) throws Myexception
        {
	     throw new Myexception(a);
	}
	public static void main(String args[])
        {
            try
            {
                compute(3);
            }
           catch(Myexception e)
           {
               System.out.print("Exception");
           }
        }
    }
```

- **A)** `3`
- **B)** `Exception`
- **C)** `Runtime Error`
- **D)** `Compilation Error`

> **Correct Answer:** **B** (`Exception`)  
> **Explanation:** Myexception is self defined exception.

Output:



$ javac Output.java
java Output
Exception

### 13. Question #273 — *Exception Types* `[Basic]`
**Which exception is thrown when java is out of memory?**

- **A)** `MemoryError`
- **B)** `OutOfMemoryError`
- **C)** `MemoryOutOfBoundsException`
- **D)** `MemoryFullException`

> **Correct Answer:** **B** (`OutOfMemoryError`)  
> **Explanation:** The Xms flag has no default value, and Xmx typically has a default value of 256MB. A common use for these flags is when you encounter a java.lang.OutOfMemoryError.

## Session 6: Strings, StringBuffer/Builder & Regular Expressions (15 Must-Do MCQs)

### 1. Question #280 — *String Class* `[Basic]`
**Which of the following statements are incorrect?**

- **A)** `String is a class`
- **B)** `Strings in java are mutable`
- **C)** `Every string is an object of class String`
- **D)** `Java defines a peer class of String, called StringBuffer, which allows string to be altered`

> **Correct Answer:** **B** (`Strings in java are mutable`)  
> **Explanation:** Strings in Java are immutable that is they can not be modified.

### 2. Question #285 — *String Class* `[Moderate]`
**What will be the output of the following Java program?**

```java
    class string_class
    {
        public static void main(String args[])
        {
            String obj = "hello";
            String obj1 = "world";
            String obj2 = "hello";
            System.out.println(obj.equals(obj1) + " " + obj.equals(obj2));
        }
    }
```

- **A)** `false false`
- **B)** `true true`
- **C)** `true false`
- **D)** `false true`

> **Correct Answer:** **D** (`false true`)  
> **Explanation:** equals() is method of class String, it is used to check equality of two String objects, if they are equal, true is retuned else false.

output:

$ javac string_class.java
$ java string_class
false true

### 3. Question #293 — *String Handling Basics* `[Moderate]`
**What will be the output of the following Java program?**

```java
    class String_demo
    {
        public static void main(String args[])
        {
            int ascii[] = { 65, 66, 67, 68};
            String s = new String(ascii, 1, 3);
            System.out.println(s);
        }
   }
```

- **A)** `ABC`
- **B)** `BCD`
- **C)** `CDA`
- **D)** `ABCD`

> **Correct Answer:** **B** (`BCD`)  
> **Explanation:** ascii is an array of  integers which contains ascii codes of Characters A, B, C, D. String(ascii, 1, 3) is an constructor which initializes s with Characters corresponding to ascii codes stored in array ascii, starting position being given by 1 & ending position by 3, Thus s stores BCD.

output:

$ javac String_demo.java
$ java String_demo
BCD

### 4. Question #299 — *Character Extraction* `[Basic]`
**Which of these methods can be used to convert all characters in a String into a character array?**

- **A)** `charAt()`
- **B)** `both getChars() & charAt()`
- **C)** `both toCharArray() & getChars()`
- **D)** `all of the mentioned`

> **Correct Answer:** **C** (`both toCharArray() & getChars()`)  
> **Explanation:** The toCharArray() method directly converts the entire string into a new character array. The getChars() method allows copying characters from the string into an existing character array. The charAt() method only accesses a single character at a specified index and cannot be used to convert the whole string into a character array.

### 5. Question #304 — *String Comparison* `[Moderate]`
**Which of these method of class String is used to compare two String objects for their equality?**

- **A)** `equals()`
- **B)** `Equals()`
- **C)** `isequal()`
- **D)** `Isequal()`

> **Correct Answer:** **A** (`equals()`)  
> **Explanation:** The equals() method compares the values of two String objects and returns a boolean result: true if both are equal, otherwise false.

### 6. Question #307 — *String Comparison* `[Basic]`
**What is the value returned by function compareTo() if the invoking string is less than the string compared?**

- **A)** `zero`
- **B)** `value less than zero`
- **C)** `value greater than zero`
- **D)** `none of the mentioned`

> **Correct Answer:** **B** (`value less than zero`)  
> **Explanation:** compareTo() function returns zero when both the strings are equal, it returns a value less than zero if the invoking string is less than the other string being compared and value greater than zero when invoking string is greater than the string compared to.

### 7. Question #310 — *String Comparison* `[Moderate]`
**What will be the output of the following Java code?**

```java
    class output
    {
        public static void main(String args[])
        {
           String s1 = "Hello i love java";
           String s2 = new String(s1);
           System.out.println((s1 == s2) + " " + s1.equals(s2));
        }
    }
```

- **A)** `true true`
- **B)** `false false`
- **C)** `true false`
- **D)** `false true`

> **Correct Answer:** **D** (`false true`)  
> **Explanation:** The == operator compares two object references to see whether they refer to the same instance, where as equals() compares the content of the two objects.

Output:

$ javac output.java
$ java output
false true

### 8. Question #311 — *String Comparison* `[Moderate]`
**What will be the output of the following Java code?**

```java
    class output
    {
        public static void main(String args[])
        {
           String s1 = "Hello";
           String s2 = new String(s1);
           String s3 = "HELLO";
           System.out.println(s1.equals(s2) + " " + s2.equals(s3));
        }
    }
```

- **A)** `true true`
- **B)** `false false`
- **C)** `true false`
- **D)** `false true`

> **Correct Answer:** **C** (`true false`)  
> **Explanation:** The string s2 is created using the value of s1, so both have the same value: “Hello”. However, s3 contains the same text in uppercase: “HELLO”. Since the equals() method is case-sensitive, s1 and s2 are considered equal, but s3 is not equal to them.

Output:

$ javac output.java
$ java output
true false

### 9. Question #312 — *String Comparison* `[Moderate]`
**In the following Java code, which code fragment should be inserted at line 3 so that the output will be: “123abc 123abc”?**

```java
 1. StringBuilder sb1 = new StringBuilder("123");
 2. String s1 = "123";
 3.  // insert code here
 4. System.out.println(sb1 + " " + s1);
```

- **A)** `sb1.append(“abc”); s1.append(“abc”);`
- **B)** `sb1.append(“abc”); s1.concat(“abc”);`
- **C)** `sb1.concat(“abc”); s1.append(“abc”);`
- **D)** `sb1.append(“abc”); s1 = s1.concat(“abc”);`

> **Correct Answer:** **D** (`sb1.append(“abc”); s1 = s1.concat(“abc”);`)  
> **Explanation:** Since StringBuffer is mutable, we can add “abc” using the append() method. But in the case of String, which is immutable, we use the concat() method (or + operator) and reassign the result to a new string, effectively replacing the old one.

### 10. Question #316 — *Searching & Modifying a String* `[Moderate]`
**Which of these method of class String is used to remove leading and trailing whitespaces?**

- **A)** `startsWith()`
- **B)** `trim()`
- **C)** `Trim()`
- **D)** `doTrim()`

> **Correct Answer:** **B** (`trim()`)  
> **Explanation:** The trim() method is a predefined method that removes leading and trailing whitespace characters such as newline (\n), tab (\t), and space ( ).

### 11. Question #322 — *Searching & Modifying a String* `[Moderate]`
**What will be the output of the following Java program?**

```java
    class output
    {
        public static void main(String args[])
        {
           String s1 = "Hello World";
           String s2 = s1.substring(0 , 4);
           System.out.println(s2);
        }
   }
```

- **A)** `Hell`
- **B)** `Hello`
- **C)** `Worl`
- **D)** `World`

> **Correct Answer:** **A** (`Hell`)  
> **Explanation:** substring(0,4) returns the character from 0 th position to 3 rd position.

output:

$ javac output.java
$ java output
Hell

### 12. Question #324 — *StringBuffer Class* `[Moderate]`
**Which of these class is used to create an object whose character sequence is mutable?**

- **A)** `String()`
- **B)** `StringBuffer()`
- **C)** `String() & StringBuffer()`
- **D)** `None of the mentioned`

> **Correct Answer:** **B** (`StringBuffer()`)  
> **Explanation:** StringBuffer represents growable and writable character sequence.
> **⚠️ Note:** Syllabus Tip: StringBuffer is synchronized (thread-safe), whereas StringBuilder (Session 6) has the same API methods but is faster for single-threaded string manipulation.

### 13. Question #329 — *StringBuffer Class* `[Moderate]`
**What will be the output of the following Java program?**

```java
    class output
    {
        public static void main(String args[])
        {
            String a = "hello i love java";
            System.out.println(a.indexOf('e')+" "+a.indexOf('a')+" "+a.lastIndexOf('l')+" "+a.lastIndexOf('v'));
        }
    }
```

- **A)** `6 4 6 9`
- **B)** `5 4 5 9`
- **C)** `7 8 8 9`
- **D)** `1 14 8 15`

> **Correct Answer:** **D** (`1 14 8 15`)  
> **Explanation:** The indexOf(‘c’) and lastIndexOf(‘c’) methods are predefined and are used to find the index of the first and last occurrence of the character ‘c’ in a string, respectively.

Output:

$ javac output.java
$ java output
1 14 8 15
> **⚠️ Note:** Syllabus Tip: StringBuffer is synchronized (thread-safe), whereas StringBuilder (Session 6) has the same API methods but is faster for single-threaded string manipulation.

### 14. Question #345 — *Regular Expression* `[Moderate]`
**What is the significance of Matcher class for regular expression in java?**

- **A)** `interpretes pattern in the string`
- **B)** `Performs match in the string`
- **C)** `interpreted both pattern and performs match operations in the string`
- **D)** `None of the mentioned.`

> **Correct Answer:** **C** (`interpreted both pattern and performs match operations in the string`)  
> **Explanation:** macther() method is invoked using matcher object which interpretes pattern and performs match operations in the input string.

### 15. Question #346 — *Regular Expression* `[Moderate]`
**Object of which class is used to compile regular expression?**

- **A)** `Pattern class`
- **B)** `Matcher class`
- **C)** `PatternSyntaxException`
- **D)** `None of the mentioned`

> **Correct Answer:** **A** (`Pattern class`)  
> **Explanation:** object of Pattern class can represent compiled regular expression.

## Sessions 7 & 8: Generics & Collections Framework (20 Must-Do MCQs)

### 1. Question #361 — *Generics* `[Basic]`
**Which of these Exception handlers cannot be type parameterized?**

- **A)** `catch`
- **B)** `throw`
- **C)** `throws`
- **D)** `all of the mentioned`

> **Correct Answer:** **D** (`all of the mentioned`)  
> **Explanation:** we cannot Create, Catch, or Throw Objects of Parameterized Types as generic class cannot extend the Throwable class directly or indirectly.

### 2. Question #366 — *Generic Methods* `[Basic]`
**Which of these is an correct way of defining generic method?**

- **A)** `<T1, T2, …, Tn> name(T1, T2, …, Tn) { /* … */ }`
- **B)** `public <T1, T2, …, Tn> name<T1, T2, …, Tn> { /* … */ }`
- **C)** `class <T1, T2, …, Tn> name[T1, T2, …, Tn] { /* … */ }`
- **D)** `<T1, T2, …, Tn> name{T1, T2, …, Tn} { /* … */ }`

> **Correct Answer:** **B** (`public <T1, T2, …, Tn> name<T1, T2, …, Tn> { /* … */ }`)  
> **Explanation:** The syntax for a generic method includes a type parameter, inside angle brackets, and appears before the method’s return type. For static generic methods, the type parameter section must appear before the method’s return type.

### 3. Question #374 — *Wildcards* `[Moderate]`
**Which of these is an correct way making a list that is upper bounded by class Number?**

- **A)** `List<? extends Number>`
- **B)** `List<extends ? Number>`
- **C)** `List(? extends Number)`
- **D)** `List(? UpperBounds Number)`

> **Correct Answer:** **A** (`List<? extends Number>`)  
> **Explanation:** the syntax List<? extends Number>. This syntax allows the list to accept any type that is a subclass of Number, such as Integer, Double, or Float. The wildcard character (?) represents an unknown type, and the extends keyword specifies the upper bound of the wildcard.

### 4. Question #375 — *Wildcards* `[Basic]`
**Which of the following keywords are used for lower bounding a wild card?**

- **A)** `extends`
- **B)** `super`
- **C)** `class`
- **D)** `lower`

> **Correct Answer:** **B** (`super`)  
> **Explanation:** A lower bounded wildcard is expressed using the wildcard character (‘?’), following by the super keyword, followed by its lower bound: .

### 5. Question #379 — *Restrictions on Generics* `[Basic]`
**Which of these types cannot be used to initiate a generic type?**

- **A)** `Integer class`
- **B)** `Float class`
- **C)** `Primitive Types`
- **D)** `Collections`

> **Correct Answer:** **C** (`Primitive Types`)  
> **Explanation:** Primitive types such as int, float, and char cannot be used directly as type parameters in generic classes or methods.

### 6. Question #380 — *Restrictions on Generics* `[Basic]`
**Which of these instance cannot be created?**

- **A)** `Integer instance`
- **B)** `Generic class instance`
- **C)** `Generic type instance`
- **D)** `Collection instances`

> **Correct Answer:** **C** (`Generic type instance`)  
> **Explanation:** It is not possible to create generic type instances. Example – “E obj = new E()” will give a compilation error.

### 7. Question #392 — *Collections Interface* `[Basic]`
**Which of these interface declares core method that all collections will have?**

- **A)** `set`
- **B)** `EventListner`
- **C)** `Comparator`
- **D)** `Collection`

> **Correct Answer:** **D** (`Collection`)  
> **Explanation:** Collection interfaces defines core methods that all the collections like set, map, arrays etc will have.

### 8. Question #394 — *Collections Interface* `[Basic]`
**Which of this interface must contain a unique element?**

- **A)** `Set`
- **B)** `List`
- **C)** `Array`
- **D)** `Collection`

> **Correct Answer:** **A** (`Set`)  
> **Explanation:** Set interface extends collection interface to handle sets, which must contain unique elements.

### 9. Question #402 — *Java List* `[Basic]`
**How to sort elements of ArrayList?**

- **A)** `Collection.sort(listObj);`
- **B)** `Collections.sort(listObj);`
- **C)** `listObj.sort();`
- **D)** `Sorter.sortAsc(listObj);`

> **Correct Answer:** **B** (`Collections.sort(listObj);`)  
> **Explanation:** Collections provides a method to sort the list. The order of sorting can be defined using Comparator.

### 10. Question #403 — *Java List* `[Basic]`
**When two threads access the same ArrayList object what is the outcome of the program?**

- **A)** `Both are able to access the object`
- **B)** `ConcurrentModificationException is thrown`
- **C)** `One thread is able to access the object and second thread gets Null Pointer exception`
- **D)** `One thread is able to access the object and second thread will wait till control is passed to the second one`

> **Correct Answer:** **B** (`ConcurrentModificationException is thrown`)  
> **Explanation:** ArrayList is not synchronized. Vector is the synchronized data structure.

### 11. Question #404 — *Java List* `[Basic]`
**How is Arrays.asList() different than the standard way of initialising List?**

- **A)** `Both are same`
- **B)** `Arrays.asList() throws compilation error`
- **C)** `Arrays.asList() returns a fixed length list and doesn’t allow to add or remove elements`
- **D)** `We cannot access the list returned using Arrays.asList()`

> **Correct Answer:** **C** (`Arrays.asList() returns a fixed length list and doesn’t allow to add or remove elements`)  
> **Explanation:** List returned by Arrays.asList() is a fixed length list which doesn’t allow us to add or remove element from it.add() and remove() method will throw UnSupportedOperationException if used.

### 12. Question #408 — *Java List* `[Basic]`
**What is the worst case complexity of accessing an element in ArrayList?**

- **A)** `O(n)`
- **B)** `O(1)`
- **C)** `O(nlogn)`
- **D)** `O(2)`

> **Correct Answer:** **B** (`O(1)`)  
> **Explanation:** ArrayList has O(1) complexity for accessing an element in ArrayList. O(n) is the complexity for accessing an element from LinkedList.

### 13. Question #416 — *ArrayList Class* `[Hard]`
**What will be the output of the following Java program?**

```java
    import java.util.*;
    class Arraylist
    {
        public static void main(String args[])
        {
            ArrayList obj = new ArrayList();
            obj.add("A");
            obj.add("B");
            obj.add("C");
            obj.add(1, "D");
            System.out.println(obj);
        }
    }
```

- **A)** `[A, B, C, D]`
- **B)** `[A, D, B, C]`
- **C)** `[A, D, C]`
- **D)** `[A, B, C]`

> **Correct Answer:** **B** (`[A, D, B, C]`)  
> **Explanation:** obj is an object of class ArrayList hence it is an dynamic array which can increase and decrease its size. obj.add(“X”) adds to the array element X and obj.add(1,”X”) adds element x at index position 1 in the list, Hence obj.add(1,”D”) stores D at index position 1 of obj and shifts the previous value stored at that position by 1.

Output:

$ javac Arraylist.java
$ java Arraylist
[A, D, B, C].

### 14. Question #421 — *Java Set* `[Basic]`
**Do we have get(Object o) method in HashSet.**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **B** (`False`)  
> **Explanation:** get(Object o) method is useful when we want to compare objects based on the comparison of values. HashSet does not provide any way to compare objects. It just guarantees unique objects stored in the collection.

### 15. Question #423 — *Java Set* `[Basic]`
**What are the initial capacity and load factor of HashSet?**

- **A)** `10, 1.0`
- **B)** `32, 0.75`
- **C)** `16, 0.75`
- **D)** `32, 1.0`

> **Correct Answer:** **C** (`16, 0.75`)  
> **Explanation:** We should not set the initial capacity too high and load factor too low if iteration performance is needed.

### 16. Question #424 — *Java Set* `[Basic]`
**What is the relation between hashset and hashmap?**

- **A)** `HashSet internally implements HashMap`
- **B)** `HashMap internally implements HashSet`
- **C)** `HashMap is the interface; HashSet is the concrete class`
- **D)** `HashSet is the interface; HashMap is the concrete class`

> **Correct Answer:** **A** (`HashSet internally implements HashMap`)  
> **Explanation:** HashSet is implemented to provide uniqueness feature which is not provided by HashMap. This also reduces code duplication and provides the memory efficient behavior of HashMap.

### 17. Question #429 — *Java Set* `[Basic]`
**What is the unique feature of LinkedHashSet?**

- **A)** `It is not a valid class`
- **B)** `It maintains the insertion order and guarantees uniqueness`
- **C)** `It provides a way to store key values with uniqueness`
- **D)** `The elements in the collection are linked to each other`

> **Correct Answer:** **B** (`It maintains the insertion order and guarantees uniqueness`)  
> **Explanation:** Set is a collection of unique elements.HashSet has the behavior of Set and stores key value pairs. The LinkedHashSet stores the key value pairs in the order of insertion.

### 18. Question #439 — *LinkedList, HashSet & TreeSet* `[Hard]`
**What will be the output of the following Java program?**

```java
    import java.util.*;
    class Output
    {
        public static void main(String args[])
        {
            TreeSet t = new TreeSet();
            t.add("3");
            t.add("9");
            t.add("1");
            t.add("4");
            t.add("8");
            System.out.println(t);
        }
    }
```

- **A)** `[1, 3, 5, 8, 9]`
- **B)** `[3, 4, 1, 8, 9]`
- **C)** `[9, 8, 4, 3, 1]`
- **D)** `[1, 3, 4, 8, 9]`

> **Correct Answer:** **D** (`[1, 3, 4, 8, 9]`)  
> **Explanation:** TreeSet class uses set to store the values added by function add in ascending order using tree for storage.

Output:

$ javac Output.java
$ java Output
[1, 3, 4, 8, 9].

### 19. Question #444 — *Maps* `[Basic]`
**Which of these methods can be used to obtain set of all keys in a map?**

- **A)** `getAll()`
- **B)** `getKeys()`
- **C)** `keyall()`
- **D)** `keySet()`

> **Correct Answer:** **D** (`keySet()`)  
> **Explanation:** keySet() methods is used to get a set containing all the keys used in a map. This method provides set view of the keys in the invoking map.

### 20. Question #455 — *Iterators* `[Basic]`
**Which of these exceptions is thrown by remover() method?**

- **A)** `IOException`
- **B)** `SystemException`
- **C)** `ObjectNotFoundExeception`
- **D)** `IllegalStateException`

> **Correct Answer:** **D** (`IllegalStateException`)  
> **Explanation:** It throws an IllegalStateException if neither next() nor previous() have been called, or if remove() or add() have been invoked after the last call to next() or previous().

## Session 9: Enums, Wrapper Classes, Annotations & java.lang / java.util (15 Must-Do MCQs)

### 1. Question #466 — *Collection Algorithms* `[Hard]`
**What will be the output of the following Java program?**

```java
    import java.util.*;
    class Collection_Algos
    {
        public static void main(String args[])
        {
            LinkedList list = new LinkedList();
            list.add(new Integer(2));
            list.add(new Integer(8));
            list.add(new Integer(5));
            list.add(new Integer(1));
            Iterator i = list.iterator();
	    while(i.hasNext())
	        System.out.print(i.next() + " ");
        }
    }
```

- **A)** `2 8 5 1`
- **B)** `1 5 8 2`
- **C)** `2`
- **D)** `2 1 8 5`

> **Correct Answer:** **A** (`2 8 5 1`)  
> **Explanation:** The Iterator class is used to perform any operations on sequences such as add, remove or update.


hasNext()  => 	returns true if the next item is present inside the iterable.

next()        =>	 returns the current item and moves to the next item.




Output:
$ javac Collection_Algos.java
$ java Collection_Algos
2 8 5 1
> **⚠️ Note:** Java 17 LTS Note: Wrapper constructors like new Integer(x) are deprecated since Java 9; understand them for MCQs, and use valueOf() or autoboxing in lab code.

### 2. Question #470 — *java.util Array Class* `[Basic]`
**Which of these classes provides the sort() method to sort an array or a subset of an array in Java?**

- **A)** `Array`
- **B)** `Arrays`
- **C)** `ArrayList`
- **D)** `Collections`

> **Correct Answer:** **B** (`Arrays`)  
> **Explanation:** The sort() method is provided by the Arrays class, not Array. You can use Arrays.sort() to sort a complete array or a specified range within an array. The Collections class provides sorting for collections like List, but not directly for arrays.

### 3. Question #475 — *Enums* `[Basic]`
**Can we create an instance of Enum outside of Enum itself?**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **B** (`False`)  
> **Explanation:** No, instances of Enum cannot be created outside of Enum boundary, because Enum does not have a public constructor.

### 4. Question #476 — *Enums* `[Moderate]`
**What will be the output of the following Java code?**

```java
    enum Season
    {
        WINTER, SPRING, SUMMER, FALL
    };
    System.out.println(Season.WINTER.ordinal());
```

- **A)** `0`
- **B)** `1`
- **C)** `2`
- **D)** `3`

> **Correct Answer:** **A** (`0`)  
> **Explanation:** The ordinal() method retrieves the ordinal value of an enum constant, which represents its position within the enum declaration, starting from 0.

### 5. Question #478 — *Enums* `[Hard]`
**What will be the output of the following Java code snippet?**

```java
class A
{

}

enum Enums extends A
{
    ABC, BCD, CDE, DEF;
}
```

- **A)** `Runtime Error`
- **B)** `Compilation Error`
- **C)** `It runs successfully`
- **D)** `EnumNotDefined Exception`

> **Correct Answer:** **B** (`Compilation Error`)  
> **Explanation:** Enum types cannot extend class.

### 6. Question #480 — *Enums* `[Hard]`
**What will be the output of the following Java code snippet?**

```java
enum Enums
{
    A, B, C;

    private Enums()
    {
        System.out.println(10);
    }
}

public class MainClass
{
    public static void main(String[] args)
    {
        Enum en = Enums.B;
    }
}
```

- **A)**
```java
10
10
10
```
- **B)** `Compilation Error`
- **C)**
```java
10
10
```
- **D)** `Runtime Exception`

> **Correct Answer:** **A** (`10
10
10`)  
> **Explanation:** The constructor of Enums is called which prints 10.

### 7. Question #482 — *Enums* `[Moderate]`
**Which class does all the Enums extend?**

- **A)** `Object`
- **B)** `Enums`
- **C)** `Enum`
- **D)** `EnumClass`

> **Correct Answer:** **C** (`Enum`)  
> **Explanation:** All enums implicitly extend java.lang.Enum. Since Java does not support multiple inheritance, an enum cannot extend anything else.

### 8. Question #486 — *java.lang Basics* `[Moderate]`
**Which of these is a super class of wrappers Double & Integer?**

- **A)** `Long`
- **B)** `Digits`
- **C)** `Float`
- **D)** `Number`

> **Correct Answer:** **D** (`Number`)  
> **Explanation:** Number is an abstract class containing subclasses Double, Float, Byte, Short, Integer and Long.

### 9. Question #498 — *Integer, Long and Character Wrappers* `[Basic]`
**Which of the following is method of wrapper Integer for converting the value of an object into int?**

- **A)** `bytevalue()`
- **B)** `int intValue();`
- **C)** `Bytevalue()`
- **D)** `Byte Bytevalue()`

> **Correct Answer:** **B** (`int intValue();`)  
> **Explanation:** intValue() is a predefined method of Integer class which has return type int{primitive data type}. So, it will return the int equivalent value of Integer object.

### 10. Question #506 — *Double & Float Wrappers* `[Basic]`
**Which of these methods can be used to check whether the given value is a number or not?**

- **A)** `isNaN()`
- **B)** `isNumber()`
- **C)** `checkNaN()`
- **D)** `checkNumber()`

> **Correct Answer:** **A** (`isNaN()`)  
> **Explanation:** isNaN() methods returns true if num specified is not a number, otherwise it returns false.

### 11. Question #533 — *Boolean Wrapper Advance* `[Basic]`
**Which of these methods is used to know whether a string contains “true”?**

- **A)** `valueOf()`
- **B)** `valueOfString()`
- **C)** `getString()`
- **D)** `none of the mentioned`

> **Correct Answer:** **A** (`valueOf()`)  
> **Explanation:** valueOf() returns true if the specified string contains “true” in lower or uppercase and false otherwise.

### 12. Question #552 — *Random Number* `[Basic]`
**What is the return type of Math.random() method?**

- **A)** `Integer`
- **B)** `Double`
- **C)** `String`
- **D)** `Boolean`

> **Correct Answer:** **B** (`Double`)  
> **Explanation:** Math.random() method returns floating point number or precisely a double.

### 13. Question #561 — *Java Annotations* `[Basic]`
**Annotation type definition looks similar to which of the following?**

- **A)** `Method`
- **B)** `Class`
- **C)** `Interface`
- **D)** `Field`

> **Correct Answer:** **C** (`Interface`)  
> **Explanation:** Annotation type definition is similar to an interface definition in which the keyword interface is preceded by the sign @.

### 14. Question #562 — *Java Annotations* `[Basic]`
**Which of the following is not pre defined annotation in Java?**

- **A)** `@Deprecated`
- **B)** `@Overriden`
- **C)** `@SafeVarags`
- **D)** `@FunctionInterface`

> **Correct Answer:** **B** (`@Overriden`)  
> **Explanation:** @Overriden is not a pre defined annotation in Java. @Depricated, @Override, @SuppressWarnings, @SafeVarags and @FunctionInterface are the pre defined annotations.

### 15. Question #563 — *Java Annotations* `[Basic]`
**Annotations which are applied to other annotations are called meta annotations.**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **A** (`True`)  
> **Explanation:** Annotations which are applied to other annotations are called meta annotations.

## Sessions 10 & 11: Functional Programming & Lambda Expressions (3 Must-Do MCQs)

### 1. Question #575 — *Java 8 Features* `[Basic]`
**What is the purpose of BooleanSupplier function interface?**

- **A)** `represents supplier of Boolean-valued results`
- **B)** `returns Boolean-valued result`
- **C)** `There is no such function interface`
- **D)** `returns null if Boolean is passed as argument`

> **Correct Answer:** **A** (`represents supplier of Boolean-valued results`)  
> **Explanation:** BooleanSupplier function interface represents supplier of Boolean-valued results.

### 2. Question #577 — *Java 8 Features* `[Basic]`
**Which is the new method introduced in java 8 to iterate over a collection?**

- **A)** `for (String i : StringList)`
- **B)** `foreach (String i : StringList)`
- **C)** `StringList.forEach()`
- **D)** `List.for()`

> **Correct Answer:** **C** (`StringList.forEach()`)  
> **Explanation:** Traversing through forEach method of Iterable with anonymous class.

StringList.forEach(new Consumer<Integer>()
{
	public void accept(Integer t)
        {
	}
});
//Traversing with Consumer interface implementation
MyConsumer action = new MyConsumer();
StringList.forEach(action);
	}
}

### 3. Question #578 — *Java 8 Features* `[Basic]`
**What does SAM stand for in the context of Functional Interface?**

- **A)** `Single Ambivalue Method`
- **B)** `Single Abstract Method`
- **C)** `Simple Active Markup`
- **D)** `Simple Abstract Markup`

> **Correct Answer:** **B** (`Single Abstract Method`)  
> **Explanation:** SAM Interface stands for Single Abstract Method Interface. Functional Interface is also known as SAM Interface because it contains only one abstract method.

## Sessions 12 & 13: Java Streams & Date-Time API (9 Must-Do MCQs)

### 1. Question #581 — *BitSet & Date class* `[Moderate]`
**Which of these is a method of class Date which is used to search whether object contains a date before the specified date?**

- **A)** `after()`
- **B)** `contains()`
- **C)** `before()`
- **D)** `compareTo()`

> **Correct Answer:** **C** (`before()`)  
> **Explanation:** before() returns true if the invoking Date object contains a date that is earlier than one specified by date, otherwise it returns false.

### 2. Question #586 — *Date & TimeZone* `[Basic]`
**Is SimpleDateFormat thread safe?**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **B** (`False`)  
> **Explanation:** SimpleDateFormat is not thread safe. In the multithreaded environment, we need to manage threads explicitly.

### 3. Question #588 — *Date & TimeZone* `[Basic]`
**What is the replacement of joda time library in java 8?**

- **A)** `java.time (JSR-310)`
- **B)** `java.date (JSR-310)`
- **C)** `java.joda`
- **D)** `java.jodaTime`

> **Correct Answer:** **A** (`java.time (JSR-310)`)  
> **Explanation:** In java 8, we are asked to migrate to java.time (JSR-310) which is a core part of the JDK which replaces joda library project.

### 4. Question #590 — *Date & TimeZone* `[Basic]`
**What does LocalTime represent?**

- **A)** `Date without time`
- **B)** `Time without Date`
- **C)** `Date and Time`
- **D)** `Date and Time with timezone`

> **Correct Answer:** **B** (`Time without Date`)  
> **Explanation:** LocalTime of joda library represents time without date.

### 5. Question #591 — *Date & TimeZone* `[Basic]`
**How to get difference between two dates?**

- **A)** `long diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();`
- **B)** `long diffInMilli = java.time.difference(dateTime1, dateTime2).toMillis();`
- **C)** `Date diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();`
- **D)** `Time diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();`

> **Correct Answer:** **A** (`long diffInMilli = java.time.Duration.between(dateTime1, dateTime2).toMillis();`)  
> **Explanation:** Java 8 provides a method called between which provides Duration between two times.

### 6. Question #592 — *Date & TimeZone* `[Basic]`
**How to get UTC time?**

- **A)** `Time.getUTC();`
- **B)** `Date.getUTC();`
- **C)** `Instant.now();`
- **D)** `TimeZone.getUTC();`

> **Correct Answer:** **C** (`Instant.now();`)  
> **Explanation:** In java 8, Instant.now() provides current time in UTC/GMT.

### 7. Question #594 — *Java 8 Features* `[Basic]`
**What are the two types of Streams offered by java 8?**

- **A)** `sequential and parallel`
- **B)** `sequential and random`
- **C)** `parallel and random`
- **D)** `random and synchronized`

> **Correct Answer:** **A** (`sequential and parallel`)  
> **Explanation:** Java 8 Stream API provides two types of streams: sequential streams (stream()) and parallel streams (parallelStream()).

### 8. Question #595 — *Java 8 Features* `[Basic]`
**What does Files.lines(Path path) do?**

- **A)** `It reads all the files at the path specified as a String`
- **B)** `It reads all the lines from a file as a Stream`
- **C)** `It reads the filenames at the path specified`
- **D)** `It counts the number of lines for files at the path specified`

> **Correct Answer:** **B** (`It reads all the lines from a file as a Stream`)  
> **Explanation:** Files.lines(Path path) that reads all lines from a file as a Stream.

### 9. Question #596 — *Java 8 Features* `[Basic]`
**What is Optional object used for?**

- **A)** `Optional is used for optional runtime argument`
- **B)** `Optional is used for optional spring profile`
- **C)** `Optional is used to represent null with absent value`
- **D)** `Optional means it’s not mandatory for method to return object`

> **Correct Answer:** **C** (`Optional is used to represent null with absent value`)  
> **Explanation:** Optional object is used to represent null with absent value. This class has various utility methods to facilitate code to handle values as ‘available’ or ‘not available’ instead of checking null values.

## Session 14: Multithreading & Concurrency (13 Must-Do MCQs)

### 1. Question #602 — *Multithreading Basics* `[Moderate]`
**What will be the output of the following Java code?**

```java
    class multithreaded_programing
    {
        public static void main(String args[])
        {
            Thread t = Thread.currentThread();
            System.out.println(t);
        }
    }
```

- **A)** `Thread[5,main]`
- **B)** `Thread[main,5]`
- **C)** `Thread[main,0]`
- **D)** `Thread[main,5,main]`

> **Correct Answer:** **D** (`Thread[main,5,main]`)  
> **Explanation:** Since, the current thread is main thread, having the default name main with priority 5. So, when t is printed the detail of the current thread is printed.

Output:



$ javac multithreaded_programing.java
$ java multithreaded_programing
Thread[main,5,main]

### 2. Question #606 — *Java Multithreading* `[Basic]`
**What does not prevent JVM from terminating?**

- **A)** `Process`
- **B)** `Daemon Thread`
- **C)** `User Thread`
- **D)** `JVM Thread`

> **Correct Answer:** **B** (`Daemon Thread`)  
> **Explanation:** Daemon thread runs in the background and does not prevent JVM from terminating. Child of daemon thread is also daemon thread.

### 3. Question #609 — *Java Multithreading* `[Basic]`
**Deadlock is a situation when thread is waiting for other thread to release acquired object.**

- **A)** `True`
- **B)** `False`

> **Correct Answer:** **A** (`True`)  
> **Explanation:** Deadlock is java programming situation where one thread waits for an object lock that is acquired by other thread and vice-versa.

### 4. Question #611 — *Java Multithreading* `[Basic]`
**What is true about threading?**

- **A)** `run() method calls start() method and runs the code`
- **B)** `run() method creates new thread`
- **C)** `run() method can be called directly without start() method being called`
- **D)** `start() method creates new thread and calls code written in run() method`

> **Correct Answer:** **D** (`start() method creates new thread and calls code written in run() method`)  
> **Explanation:** start() eventually calls run() method. Start() method creates thread and calls the code written inside run method.

### 5. Question #615 — *Creating Threads* `[Basic]`
**Which of these keywords are used to implement synchronization?**

- **A)** `synchronize`
- **B)** `syn`
- **C)** `synch`
- **D)** `synchronized`

> **Correct Answer:** **D** (`synchronized`)  
> **Explanation:** The synchronized keyword is used to implement synchronization, ensuring that only one thread can access a shared resource at a time.

### 6. Question #617 — *Creating Threads* `[Basic]`
**Which of these method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor?**

- **A)** `wait()`
- **B)** `notify()`
- **C)** `notifyAll()`
- **D)** `sleep()`

> **Correct Answer:** **A** (`wait()`)  
> **Explanation:** wait() method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor. This helps in avoiding polling and minimizes CPU idle time.

### 7. Question #618 — *Creating Threads* `[Basic]`
**Which of these method wakes up the first thread that called wait()?**

- **A)** `wake()`
- **B)** `notify()`
- **C)** `start()`
- **D)** `notifyAll()`

> **Correct Answer:** **B** (`notify()`)  
> **Explanation:** The notify() method wakes up a single thread that is waiting on the object’s monitor (the first thread that called wait()). If multiple threads are waiting, the choice of which thread to notify is arbitrary. The notifyAll() method wakes up all waiting threads, start() is used to begin thread execution, and there is no method called wake() in Java’s threading mechanism.

### 8. Question #619 — *Creating Threads* `[Basic]`
**Which of these method wakes up all the threads?**

- **A)** `wakeAll()`
- **B)** `notify()`
- **C)** `start()`
- **D)** `notifyAll()`

> **Correct Answer:** **D** (`notifyAll()`)  
> **Explanation:** notifyAll() wakes up all the threads that called wait() on the same object. The highest priority thread will run first.

### 9. Question #632 — *Runnable Interface for Threads* `[Basic]`
**Which of these method is used to implement Runnable interface?**

- **A)** `stop()`
- **B)** `run()`
- **C)** `runThread()`
- **D)** `stopThread()`

> **Correct Answer:** **B** (`run()`)  
> **Explanation:** To implement Runnable interface, a class needs only to implement a single method called run().

### 10. Question #641 — *isAlive(), Join() & Synchronization* `[Basic]`
**Which of this method is used to find out that a thread is still running or not?**

- **A)** `run()`
- **B)** `Alive()`
- **C)** `isAlive()`
- **D)** `checkRun()`

> **Correct Answer:** **C** (`isAlive()`)  
> **Explanation:** The isAlive( ) method returns true if the thread upon which it is called is still running. It returns false otherwise.

### 11. Question #643 — *isAlive(), Join() & Synchronization* `[Basic]`
**Which of these method waits for the thread to terminate?**

- **A)** `sleep()`
- **B)** `isAlive()`
- **C)** `join()`
- **D)** `stop()`

> **Correct Answer:** **C** (`join()`)  
> **Explanation:** The join() method allows one thread to wait for the completion of another thread, ensuring that the calling thread pauses execution until the specified thread has finished running.

### 12. Question #652 — *ThreadGroup & Runnable Interface* `[Basic]`
**Which of this interface is implemented by Thread class?**

- **A)** `Runnable`
- **B)** `Connections`
- **C)** `Set`
- **D)** `MapConnections`

> **Correct Answer:** **A** (`Runnable`)  
> **Explanation:** Runnable interfaces have abstract methods for a Thread implementation. Which is implemented by the Thread class.

### 13. Question #659 — *Multithreading Basics* `[Basic]`
**Which of these statements is incorrect about Thread?**

- **A)** `start() method is used to begin execution of the thread`
- **B)** `run() method is used to begin execution of a thread before start() method in special cases`
- **C)** `A thread can be formed by implementing Runnable interface only`
- **D)** `A thread can be formed by a class that extends Thread class`

> **Correct Answer:** **B** (`run() method is used to begin execution of a thread before start() method in special cases`)  
> **Explanation:** run() method is used to define the code that constitutes the new thread, it contains the code to be executed. start() method is used to begin execution of the thread that is execution of run(). run() itself is never used for starting execution of the thread.

## Session 15: File Handling & Object Serialization (java.io) (12 Must-Do MCQs)

### 1. Question #663 — *java.io Introduction* `[Moderate]`
**Which of these class is not related to input and output stream in terms of functioning?**

- **A)** `File`
- **B)** `Writer`
- **C)** `InputStream`
- **D)** `Reader`

> **Correct Answer:** **A** (`File`)  
> **Explanation:** A File describes properties of a file, a File object is used to obtain or manipulate the information associated with a disk file, such as the permissions, time date, and directories path, and to navigate subdirectories.

### 2. Question #698 — *Reading & Writing Files* `[Basic]`
**Which of these exception is thrown in cases when the file specified for writing is not found?**

- **A)** `IOException`
- **B)** `FileException`
- **C)** `FileNotFoundException`
- **D)** `FileInputException`

> **Correct Answer:** **C** (`FileNotFoundException`)  
> **Explanation:** In cases when the file specified is not found, then FileNotFoundException is thrown by java run-time system, earlier versions of java used to throw IOException but after Java 2.0 they throw FileNotFoundException.

### 3. Question #700 — *Reading & Writing Files* `[Basic]`
**Which of these values is returned by read() method is end of file (EOF) is encountered?**

- **A)** `0`
- **B)** `1`
- **C)** `-1`
- **D)** `Null`

> **Correct Answer:** **C** (`-1`)  
> **Explanation:** Each time read() is called, it reads a single byte from the file and returns the byte as an integer value. read() returns -1 when the end of the file is encountered.

### 4. Question #712 — *File and Directory* `[Basic]`
**How to read entire file in one line using java 8?**

- **A)** `Files.readAllLines()`
- **B)** `Files.read()`
- **C)** `Files.readFile()`
- **D)** `Files.lines()`

> **Correct Answer:** **A** (`Files.readAllLines()`)  
> **Explanation:** Java 8 provides Files.readAllLines() which allows us to read entire file in one task. We do not need to worry about readers and writers.

### 5. Question #716 — *File and Directory* `[Basic]`
**Which feature in Java allows automatic resource management, ensuring that IO resources are closed after usage without explicitly calling the close method?**

- **A)** `try-with-resources`
- **B)** `IOException`
- **C)** `AutoCloseable`
- **D)** `Streams`

> **Correct Answer:** **A** (`try-with-resources`)  
> **Explanation:** The try-with-resources statement allows automatic closing of resources that implement the AutoCloseable interface, ensuring proper release of resources such as files or sockets without the need for an explicit close() call.

### 6. Question #717 — *Serialization-2* `[Basic]`
**How an object can become serializable?**

- **A)** `If a class implements java.io.Serializable class`
- **B)** `If a class or any superclass implements java.io.Serializable interface`
- **C)** `Any object is serializable`
- **D)** `No object is serializable`

> **Correct Answer:** **B** (`If a class or any superclass implements java.io.Serializable interface`)  
> **Explanation:** A Java object is serializable if class or any its superclass implements java.io.Serializable or its subinterface java.io.Externalizable.

### 7. Question #720 — *Serialization-2* `[Basic]`
**How many methods Serializable has?**

- **A)** `1`
- **B)** `2`
- **C)** `3`
- **D)** `0`

> **Correct Answer:** **D** (`0`)  
> **Explanation:** Serializable interface does not have any method. It is also called a marker interface.

### 8. Question #721 — *Serialization-2* `[Basic]`
**What type of members are not serialized?**

- **A)** `Private`
- **B)** `Protected`
- **C)** `Static`
- **D)** `Throwable`

> **Correct Answer:** **C** (`Static`)  
> **Explanation:** All static and transient variables are not serialized.

### 9. Question #722 — *Serialization-2* `[Basic]`
**If member does not implement serialization, which exception would be thrown?**

- **A)** `RuntimeException`
- **B)** `SerializableException`
- **C)** `NotSerializableException`
- **D)** `UnSerializedException`

> **Correct Answer:** **C** (`NotSerializableException`)  
> **Explanation:** If member of a class does not implement serialization, NotSerializationException will be thrown.

### 10. Question #730 — *Serialization & Deserialization* `[Basic]`
**Which of these is a method of ObjectInput interface used to deserialize an object from a stream?**

- **A)** `int read()`
- **B)** `void close()`
- **C)** `Object readObject()`
- **D)** `Object WriteObject()`

> **Correct Answer:** **C** (`Object readObject()`)  
> **Explanation:** The method of the ObjectInput interface used to deserialize an object from a stream is Object readObject(). This method allows for the reconstruction of an object from the stream, enabling the retrieval of serialized objects.

### 11. Question #734 — *Serialization & Deserialization* `[Hard]`
**What will be the output of the following Java program?**

```java
    import java.io.*;
    class streams
    {
        public static void main(String[] args)
        {
            try
            {
	        FileOutputStream fos = new FileOutputStream("serial");
	        ObjectOutputStream oos = new ObjectOutputStream(fos);
	        oos.writeFloat(3.5f);
	        oos.flush();
	        oos.close();
	    }
	    catch(Exception e)
            {
	        System.out.println("Serialization" + e);
                System.exit(0);
            }
	    try
            {
	        FileInputStream fis = new FileInputStream("serial");
	        ObjectInputStream ois = new ObjectInputStream(fis);
	        ois.close();
	        System.out.println(ois.available());
	    }
	    catch (Exception e)
            {
                System.out.print("deserialization");
	        System.exit(0);
	    }
        }
    }
```

- **A)** `1`
- **B)** `2`
- **C)** `3`
- **D)** `0`

> **Correct Answer:** **D** (`0`)  
> **Explanation:** New input stream is linked to steal ‘serials’, an object ‘ois’ of ObjectInputStream is used to access this newly created stream, ois.close(); closes the stream hence we can’t access the stream and ois.available() returns 0.

Output:

$ javac streams.java
$ java streams
0

### 12. Question #742 — *AutoCloseable, Closeable & Flushable* `[Basic]`
**What is the difference between AutoCloseable and Closeable?**

- **A)** `Closeable is an interface and AutoCloseable is a concrete class`
- **B)** `Closeable throws IOException; AutoCloseable throws Exception`
- **C)** `Closeable is a concept; AutoCloseable is an implementation`
- **D)** `Closeable throws Exception; AutoCloseable throws IOException`

> **Correct Answer:** **B** (`Closeable throws IOException; AutoCloseable throws Exception`)  
> **Explanation:** Closeable extends AutoCloseable and both are interfaces. Closeable throws IOException and AutoCloseable throws Exception.

## Sessions 16 & 17: Java Database Connectivity — JDBC (6 Must-Do MCQs)

### 1. Question #748 — *JDBC* `[Basic]`
**Which of the following is advantage of using JDBC connection pool?**

- **A)** `Slow performance`
- **B)** `Using more memory`
- **C)** `Using less memory`
- **D)** `Better performance`

> **Correct Answer:** **D** (`Better performance`)  
> **Explanation:** Since the JDBC connection takes time to establish. Creating connection at the application start-up and reusing at the time of requirement, helps performance of the application.

### 2. Question #749 — *JDBC* `[Basic]`
**Which of the following is advantage of using PreparedStatement in Java?**

- **A)** `Slow performance`
- **B)** `Encourages SQL injection`
- **C)** `Prevents SQL injection`
- **D)** `More memory usage`

> **Correct Answer:** **C** (`Prevents SQL injection`)  
> **Explanation:** PreparedStatement in Java improves performance and also prevents from SQL injection.

### 3. Question #751 — *JDBC* `[Basic]`
**What does setAutoCommit(false) do?**

- **A)** `commits transaction after each query`
- **B)** `explicitly commits transaction`
- **C)** `does not commit transaction automatically after each query`
- **D)** `never commits transaction`

> **Correct Answer:** **C** (`does not commit transaction automatically after each query`)  
> **Explanation:** setAutoCommit(false) does not commit transaction automatically after each query. That saves a lot of time of the execution and hence improves performance.

### 4. Question #752 — *JDBC* `[Basic]`
**Which of the following is used to call stored procedure?**

- **A)** `Statement`
- **B)** `PreparedStatement`
- **C)** `CallableStatment`
- **D)** `CalledStatement`

> **Correct Answer:** **C** (`CallableStatment`)  
> **Explanation:** CallableStatement is used in JDBC to call stored procedure from Java program.

### 5. Question #754 — *JDBC* `[Basic]`
**Which of the following is method of JDBC batch process?**

- **A)** `setBatch()`
- **B)** `deleteBatch()`
- **C)** `removeBatch()`
- **D)** `addBatch()`

> **Correct Answer:** **D** (`addBatch()`)  
> **Explanation:** addBatch() is a method of JDBC batch process. It is faster in processing than executing one statement at a time.

### 6. Question #755 — *JDBC* `[Basic]`
**Which of the following is used to rollback a JDBC transaction?**

- **A)** `rollback()`
- **B)** `rollforward()`
- **C)** `deleteTransaction()`
- **D)** `RemoveTransaction()`

> **Correct Answer:** **A** (`rollback()`)  
> **Explanation:** rollback() method is used to rollback the transaction. It will rollback all the changes made by the transaction.

