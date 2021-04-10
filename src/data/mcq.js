export const mcQuestions = {
    'Error Types': [
        {
            'question': 'Which of the following is not a type of error?',
            'a' : 'Syntax',
            'b' : 'Runtime',
            'c' : 'System',
            'd' : 'Logical',
            'answer': 'c'
        },
        {
            'question': 'Which error produces an incorrect result during runtime?',
            'a' : 'Syntax',
            'b' : 'Logical',
            'c' : 'Runtime',
            'd' : 'None of the above',
            'answer': 'b'
        },
        {
            'question': 'What is the error in the code given below\n\tSystem.out.println("hello world!")',
            'a' : 'Syntax: missing semicolon',
            'b' : 'Logical: no uppercase',
            'c' : 'Runtime',
            'd' : 'None of the above',
            'answer': 'a'
        },
        {
            'question': 'What is the error in the code given below\n\tSystem.out.println(1/0);',
            'a' : 'Syntax',
            'b' : 'Logical',
            'c' : 'Runtime',
            'd' : 'None of the above',
            'answer': 'c'
        },
        {
            'question' : 'What is the output of the following\nPublic static void main(String[]args)\n{\n\tSystem.out.println("j" + "a" + "v" + "a");\n}',
            'a' : 'java',
            'b' : 'JAVA',
            'c' : 'Error',
            'd' : 'None of the above',
            'answer': 'a'
        }
        
    ],
    'Data Types': [
        {
            'question': 'What is wrong in this code?\npublic static void main(String[] args) {\n    system.out.println("Welcome"+ "t" + "o Java");;\n}',
            'a' : 'Extra semicolon',
            'b' : "Concatenation doesn't work this way",
            'c' : 'Misspelt String',
            'd' : 'No error',
            'answer': 'd'
        },
        {
            'question': 'Which of the following is a valid Identifier?',
            'a' : 'break',
            'b' : '98hello',
            'c' : 'iden$',
            'd' : 'null',
            'answer': 'c'
        },
        {
            'question': 'What is the error in the code given below-\npublic static void main(String[] args) {\n    double iR= 10;\n    double sum= ir+50;\n}',
            'a' : 'Variable is undeclared',
            'b' : 'Logical Error',
            'c' : "Haven't printed variable",
            'd' : 'None of the above',
            'answer': 'a'
        },
        {
            'question': 'What is the output for the code given below-\nSystem.out.println("6: "+(6+9));',
            'a' : '669',
            'b' : '6:15',
            'c' : '6:69',
            'd' : '6:6+9',
            'answer': 'b'
        },
        {
            'question' : 'What is the output of the following-\npublic static void main(String[] args)\n{\n  System.out.print("ti:" + 9 + "3v3"+5 + 9);\n}',
            'a' : 'ti:93v17',
            'b' : 'ti:93v314',
            'c' : 'ti:93v359',
            'd' : 'ti:12v359',
            'answer': 'c'
        },
        {
            'question' : 'What must you import to use the scanner object?',
            'a' : 'java.Util.Scanner',
            'b' : 'java.util.Scanner',
            'c' : 'Java.Util.Scanner',
            'd' : 'java.util.scanner',
            'answer': 'b'
        },
        {
            'question' : 'Which of the following is a post decreement operator?',
            'a' : 'var++;',
            'b' : '--var;',
            'c' : 'var--;',
            'd' : '++var;()',
            'answer': 'c'
        },
        {
            'question' : 'What is the output of the following-\nint x = 6;\nSystem.out.print(++x);\nSystem.out.print(x);\nint y = 6;\nSystem.out.print(y+1);\nSystem.out.print(y);',
            'a' : '7776',
            'b' : '7777',
            'c' : '6767',
            'd' : '6667',
            'answer': 'a'
        },
        {
            'question' : 'What is the output of the following-\nint x = 7;\nSystem.out.println("value of x is %d" + x);',
            'a' : 'value of x is %dx',
            'b' : 'value of x is x',
            'c' : 'value of x is 7',
            'd' : 'value of 7 is 7',
            'answer': 'c'
        },
        {
            'question' : 'What is the output of the following-\n  double x = Math.floor(-2.3) + Math.ceil(1.01);\n  System.out.println(x);',
            'a' : '-1.0',
            'b' : '-2.0',
            'c' : '1.0',
            'd' : '0.0',
            'answer': 'a'
        }
    ],
    'Selection Statements': [
        {
            'question': "What is the symbol operator for 'NOT'?",
            'a' : ';',
            'b' : '!',
            'c' : '||',
            'd' : '#',
            'answer': 'b'
        },
        {
            'question': 'Which keyword is used in switch cases to return a value?',
            'a' : 'Break',
            'b' : 'Default',
            'c' : 'Case',
            'd' : 'Yield',
            'answer': 'd'
        },
        {
            'question': 'How many expressions can be expressed in a conditional operator?',
            'a' : '1',
            'b' : '2',
            'c' : '3',
            'd' : '4',
            'answer': 'b'
        },
        {
            'question': "What is the symbol operator for ' Exclusive OR'?",
            'a' : '&',
            'b' : '!',
            'c' : '^',
            'd' : '$',
            'answer': 'c'
        },
        {
            'question' : 'Which of the following is not a Logical Operator?',
            'a' : '//',
            'b' : '&&',
            'c' : '||',
            'd' : '!',
            'answer': 'a'
        },
        {
            'question' : 'How many cases can you have in a switch case?',
            'a' : 'only 2',
            'b' : 'just one',
            'c' : 'depends',
            'd' : 'how many required + default',
            'answer': 'c'
        },
        {
            'question' : 'What kind of an expression must a conditional expression be?',
            'a' : 'char',
            'b' : 'double',
            'c' : 'int',
            'd' : 'boolean',
            'answer': 'd'
        },
        {
            'question' : 'What is the output of the following\nch = switch(x){\ncase 4,8: System.out.println(“Hi”);\n yield i;\ndefault: System.out.println(“Bye”);\n yield 10;\n}',
            'a' : 'Bye',
            'b' : '10',
            'c' : 'Hi',
            'd' : 'Error',
            'answer': 'd'
        },
        {
            'question' : 'An else statement must be preceeded by-',
            'a' : 'if',
            'b' : 'else if',
            'c' : 'else',
            'd' : 'a or b',
            'answer': 'd'
        },
        {
            'question' : 'An If-else statement is also called-',
            'a' : 'Control Statements',
            'b' : 'Branching Statements',
            'c' : 'Block Statements',
            'd' : 'All of the above',
            'answer': 'd'
        }
    ],
    'Loops': [
        {
            'question': 'What is the idea behind a Sentinel-controlled loop?',
            'a' : 'Not known how many iterations',
            'b' : 'Counter is used',
            'c' : 'It is a normal loop',
            'd' : 'Infinite Loop',
            'answer': 'a'
        },
        {
            'question': 'Which type of loop executes atleast once even with a false statement?',
            'a' : 'while',
            'b' : 'for',
            'c' : 'do...',
            'd' : 'No loop has such feature',
            'answer': 'c'
        },
        {
            'question': 'Which statement is used to terminate a loop?',
            'a' : 'return',
            'b' : 'break',
            'c' : 'yield',
            'd' : 'continue',
            'answer': 'b'
        },
        {
            'question': 'A continue statement inside a loop causes the program to ___ the loop.',
            'a' : 'Skip',
            'b' : 'Exit',
            'c' : 'Terminate',
            'd' : 'Skip the present iteration and continue the next iteration',
            'answer': 'd'
        },
        {
            'question' : 'What is the output of the following code?\nint x = 1;\nwhile(x<5){\n      System.out.println(a+" ");\n      a++;\n}',
            'a' : '1 2 3 4',
            'b' : '1 2 3 4 5',
            'c' : '1 2 3',
            'd' : 'error',
            'answer': 'a'
        },
        {
            'question' : 'The enhanced for-loop was introduced by?',
            'a' : 'JDK 4',
            'b' : 'JDK 5',
            'c' : 'JDK 6',
            'd' : 'JDK 7',
            'answer': 'b'
        },
        {
            'question' : 'What is the output of the following code?\nint x=10;\ndo\ndo\n{\nSystem.out.print(x + ".");\nx++;\n}while(x < 14)',
            'a' : '10.10.10',
            'b' : '10.11.12',
            'c' : '11.12.13',
            'd' : 'Error',
            'answer': 'd'
        },
        {
            'question' : 'What is the output of the following code?\nfor(int i=1; i<5; i++)\n{\n    System.out.print(i +":");\n}',
            'a' : '1:2:3:4',
            'b' : '1:2:3:',
            'c' : '1:2:3:4:5',
            'd' : '12345',
            'answer': 'a'
        },
        {
            'question' : 'An enhanced for loop missed __ and __ than a regular for loop.',
            'a' : 'Spped',
            'b' : 'Initialization, Incre/Decrements',
            'c' : 'Semicolons, Variables',
            'd' : 'Easiness',
            'answer': 'b'
        },
        {
            'question' : 'What is the output of the following code?\nfor(int i=1; i<5; i++)\n    System.out.print(i +":");\n    System.out.print("hi");',
            'a' : '1:hi2:hi3:hi4:hi',
            'b' : 'hi1:hi2:hi3:hi4:',
            'c' : '1:2:3:4hi',
            'd' : '1:2:3:4:hi',
            'answer': 'd'
        }
    ],
    'Methods': [
        {
            'question': 'What type of programming programmingis focuses on designing the software with an emphasis on separating the functionality into modules?',
            'a' : 'Systematic',
            'b' : 'Modular',
            'c' : 'Polymorphised',
            'd' : 'Abstracted',
            'answer': 'b'
        },
        {
            'question': 'What is the process of breaking down a large problem into subproblems called?',
            'a' : 'Problem Breaking',
            'b' : 'Separation',
            'c' : 'Problem Dividing',
            'd' : 'Problem Decomposition',
            'answer': 'd'
        },
        {
            'question': 'What is a collection of statements that are grouped together to perform a specific action?',
            'a' : 'Identifier',
            'b' : 'Method',
            'c' : 'Function',
            'd' : 'Variable',
            'answer': 'b'
        },
        {
            'question': 'The variables defined in the method header are known as ___ ?',
            'a' : 'Parameteric arguments',
            'b' : 'Simply arguments',
            'c' : 'Actual Parameters',
            'd' : 'Formal Parameters',
            'answer': 'd'
        },
        {
            'question' : ' The method signature consist of -',
            'a' : 'Method name',
            'b' : 'Parameter List',
            'c' : 'Both of them',
            'd' : 'None of them',
            'answer': 'c'
        },
        {
            'question' : 'What is the output of the code-\npublic static void nPrintln(String msg, int n) {\nfor (int i = 0; i < n; i++)\nSystem.out.println(msg);\n}',
            'a' : 'Error',
            'b' : 'Nothing',
            'c' : 'Print ABC 4 times',
            'd' : 'Print ABC 5 times',
            'answer': 'd'
        },
        {
            'question' : 'Which method would be called-\npublic static double m( double x, double y) //first method\npublic static double m( int x, double y) //second method\ndouble z = m(4, 5.2);',
            'a' : 'First Method',
            'b' : 'Second Method',
            'c' : 'Both',
            'd' : 'Error',
            'answer': 'b'
        },
        {
            'question' : 'What is the output-/npublic static voidmain(String[] args){\nint x = 0;\nset10(x++);\nSystem.out.printIn(x);\n}\npublic static void set10(int n) {\nn =10;\n}',
            'a' : '0',
            'b' : '1',
            'c' : '10',
            'd' : '11',
            'answer': 'b'
        },
        {
            'question' : 'What is the process of defining more than one method in a class differentiated by method signature?',
            'a' : 'Method Powering',
            'b' : 'Method Loading',
            'c' : 'Private',
            'd' : 'Final',
            'answer': 'b'
        },
        {
            'question' : 'Which method can be defined only once in a program?',
            'a' : 'Static',
            'b' : 'Main',
            'c' : 'Private',
            'd' : 'Final',
            'answer': 'b'
        }
    ],
    'Arrays': [
        {
            'question': 'A data structure that represents a collection of the same data is called a  ___.',
            'a' : 'Method',
            'b' : 'ArrayList',
            'c' : 'Class',
            'd' : 'Array',
            'answer': 'd'
        },
        {
            'question': 'The package that contains useful methods for common array operations is-',
            'a' : 'java.util.arrays',
            'b' : 'java.util.Arrays',
            'c' : 'java.util.Array',
            'd' : 'java.util.array',
            'answer': 'b'
        },
        {
            'question': 'An array which has rows and columns of different lengths are called-',
            'a' : 'Ragged Array',
            'b' : 'Unequal Array',
            'c' : 'Dimensional Array',
            'd' : 'Different Array',
            'answer': 'a'
        },
        {
            'question': 'Array reference numbers start and end with-',
            'a' : '1 til n-1',
            'b' : '1 til n',
            'c' : '0 til n',
            'd' : 'til n-1',
            'answer': 'd'
        },
        {
            'question' : 'What are the values in myArray-\nint[] arr = new int[4];\narr[3] = 1;\narr[2] = 2;\narr[1] = 3;\narr[0] = 4;',
            'a' : '2431',
            'b' : '1324',
            'c' : '4321',
            'd' : '1234',
            'answer': 'd'
        },
        {
            'question' : 'What is code to find the size of the array "arr"?',
            'a' : 'arr.length()',
            'b' : 'arr.size',
            'c' : 'arr.size()',
            'd' : 'arr.length',
            'answer': 'd'
        },
        {
            'question' : 'Which one of the following is not a function in the Arrays package?',
            'a' : 'equals',
            'b' : 'linerSort',
            'c' : 'toString',
            'd' : 'Sort',
            'answer': 'b'
        },
        {
            'question' : 'Which are the special symbols used to initialize an array at the time of the declaration itself?',
            'a' : '()',
            'b' : '<>',
            'c' : '[]',
            'd' : '{}',
            'answer': 'd'
        },
        {
            'question' : 'What is the output of the following code snippet?\nint[] num;\npublic static void main(String args[])\n{\nSystem.out.printIn(num.length);',
            'a' : 'Error',
            'b' : '0',
            'c' : 'null',
            'd' : 'num',
            'answer': 'a'
        },
        {
            'question' : 'What is the output of the following code snippet?\nint[] m = {5,75,90,8};\nSystem.out.println(m.length + ":" + m[1]);',
            'a' : '4:75',
            'b' : '3:8',
            'c' : '4:5',
            'd' : '4:90',
            'answer': 'a'
        }
    ],
    'Object Oriented Programming': [
        {
            'question': 'OOP stands for-',
            'a' : 'Object Oriented Programming',
            'b' : 'Operation Oriented Programming',
            'c' : 'Object Operated Programming',
            'd' : 'None of the above',
            'answer': 'a'
        },
        {
            'question': 'Which of the following is not a principle of OOP?',
            'a' : 'Inheritance',
            'b' : 'Encapsulation',
            'c' : 'Polymorphism',
            'd' : 'Modularity',
            'answer': 'd'
        },
        {
            'question': 'Which of the following is not a feature of constructors?',
            'a' : "Don't have a return type",
            'b' : 'Same name as class',
            'c' : 'Only one person class',
            'd' : 'Can be overloaded',
            'answer': 'c'
        },
        {
            'question': 'Instance methods are invoked by-',
            'a' : 'Program',
            'b' : 'Instance of class',
            'c' : 'Class call',
            'd' : 'Variable',
            'answer': 'b'
        },
        {
            'question' : 'Which of the following is not an advantage of OOP?',
            'a' : 'Reuseability',
            'b' : 'Maintenance',
            'c' : 'Modularization',
            'd' : 'None of the above',
            'answer': 'd'
        },
        {
            'question': 'What will automatically collects the space if the object is not referenced by any variable?',
            'a' : 'JVM',
            'b' : 'Compiler',
            'c' : 'User',
            'd' : 'Garbage Recycler',
            'answer': 'a'
        },
        {
            'question': "We can call object's method using which operator?",
            'a' : '^',
            'b' : ':',
            'c' : ',',
            'd' : '.',
            'answer': 'd'
        },
        {
            'question': 'The getter method is also called?',
            'a' : 'Setter',
            'b' : 'Mutator',
            'c' : 'Accessor',
            'd' : 'Taker',
            'answer': 'c'
        },
        {
            'question': 'The setter method is also called',
            'a' : 'Accessor',
            'b' : 'Getter',
            'c' : 'Changer',
            'd' : 'Mutator',
            'answer': 'd'
        },
        {
            'question' : 'The scope of a static variable is-',
            'a' : 'Class',
            'b' : 'Block',
            'c' : 'Package',
            'd' : 'Program',
            'answer': 'a'
        }
    ],
    'Inheritance': [
        {
            'question': 'What is the keyword for inheriting a class?',
            'a' : 'subclass',
            'b' : 'implements',
            'c' : 'extends',
            'd' : 'inherits',
            'answer': 'c'
        },
        {
            'question': 'What is the main use of inheritance?',
            'a' : 'Reuseability',
            'b' : 'Modularity',
            'c' : 'Prettyprinting',
            'd' : 'Abstraction',
            'answer': 'a'
        },
        {
            'question': 'What is the keyword used to make a local variable constant inside a method?',
            'a' : 'final',
            'b' : 'static',
            'c' : 'constant',
            'd' : 'local',
            'answer': 'a'
        },
        {
            'question': 'Which of the following is the right way to inherit a class A to B?',
            'a' : 'class B extent A {}',
            'b' : 'class B extends A {}',
            'c' : 'class B + class A {}',
            'd' : 'class B inherits A {}',
            'answer': 'd'
        },
        {
            'question' : 'What type of inheritance does Java have?',
            'a' : 'Class',
            'b' : 'Multiple',
            'c' : 'Single',
            'd' : 'Double',
            'answer': 'c'
        },
        {
            'question' : 'Which one is the subclass and the superclass?\nclass B\n{\n void show() {};\n}\nclass A\nvoid hide() {}\n}',
            'a' : 'A is super b',
            'b' : 'B is super c',
            'c' : 'Both are super',
            'd' : 'Neither',
            'answer': 'd'
        },
        {
            'question' : 'Which of the following is not a default modifier?',
            'a' : 'Safe',
            'b' : 'Protected',
            'c' : 'Public',
            'd' : 'Private',
            'answer': 'a'
        },
        {
            'question' : 'Which of the following is a function in java.lang.Object?',
            'a' : 'check',
            'b' : 'compare',
            'c' : 'equal',
            'd' : 'toString',
            'answer': 'd'
        },
        {
            'question' : 'What class cannot be extended?',
            'a' : 'object class',
            'b' : 'subclass',
            'c' : 'final class',
            'd' : 'superclass',
            'answer': 'c'
        },
        {
            'question' : 'What is the output-\nclass A {\n public int x;\n private int y;\n}\n\nclass B extends A {\n public void display() {\n super.y = super.x + 1;\n System.out.printIn(super.x+super.y);\n }\n}\n\nclass Q {\n public static void main(String args[]) {\n B b = new B();\n b.display();\n}\n}',
            'a' : '0',
            'b' : '1',
            'c' : '2',
            'd' : 'Error',
            'answer': 'd'
        }
    ],
    'Polymorphism': [
        {
            'question': ' What is the ability of an object to perform a single task using different forms called?',
            'a' : 'Abstraction',
            'b' : 'Modularity',
            'c' : 'Inheritance',
            'd' : 'Polymorphism',
            'answer': 'd'
        },
        {
            'question': 'What kind of binding happens during runtime?',
            'a' : 'Instance',
            'b' : 'Default',
            'c' : 'Dynamic',
            'd' : 'Static',
            'answer': 'c'
        },
        {
            'question': 'Which of the following is a use of polymorphism?',
            'a' : "Easiable",
            'b' : 'Modularity',
            'c' : 'Reuseability',
            'd' : 'Storing data of different but related data types',
            'answer': 'd'
        },
        {
            'question': 'Which operator is used to compare the references of the objects?',
            'a' : '==',
            'b' : '**',
            'c' : '//',
            'd' : '.equals',
            'answer': 'a'
        },
        {
            'question' : 'Which concepts come under Polymorphism?',
            'a' : 'Constructor Overloading',
            'b' : 'Method Overloading',
            'c' : 'Method Overriding',
            'd' : 'All of the above',
            'answer': 'd'
        }
    ],
    'Abstract Classes and Inheritance': [
        {
            'question': 'What kinds of methods provide default implementation in an interface for backward compatibility?',
            'a' : 'default',
            'b' : 'regular',
            'c' : 'class',
            'd' : 'private',
            'answer': 'a'
        },
        {
            'question': 'What type of classes cannot contain abstract methods?',
            'a' : 'Sample',
            'b' : 'Inherited',
            'c' : 'Abstract',
            'd' : 'Concrete',
            'answer': 'd'
        },
        {
            'question': 'What is a type of copying in Cloneable interface?',
            'a' : "Shallow",
            'b' : 'Deep',
            'c' : 'Both',
            'd' : 'None',
            'answer': 'c'
        },
        {
            'question': 'Which of ther following is an interface in Java',
            'a' : 'Comparable',
            'b' : 'Cloneable',
            'c' : 'Both',
            'd' : 'None',
            'answer': 'c'
        },
        {
            'question' : 'What is the keyword for accessing an interface?',
            'a' : 'implements',
            'b' : 'uses',
            'c' : 'accesses',
            'd' : 'extends',
            'answer': 'd'
        }
    ],
    'Exception Handling': [
        {
            'question': ' A/an _______ is an object that represents an error or a condition that prevents execution from proceeding normally',
            'a' : 'instance',
            'b' : 'problem',
            'c' : 'error',
            'd' : 'exception',
            'answer': 'd'
        },
        {
            'question': 'Which of the following is not an example of an exception?',
            'a' : 'access an out-of-bounds array',
            'b' : 'returning a sum instead of a product',
            'c' : 'runs out of memory',
            'd' : 'read a file of integers but finds a string value in the file',
            'answer': 'b'
        },
        {
            'question': 'The root class for exceptions is-',
            'a' : 'java.lang.Class',
            'b' : 'java.lang.Root',
            'c' : 'java.lang.Throwable',
            'd' : 'java.lang.Exceptions',
            'answer': 'c'
        },
        {
            'question': 'Which is not a part of checked exceptions?',
            'a' : 'RuntimeException',
            'b' : 'IndexOutOfBoundsException',
            'c' : 'CompileTimeException',
            'd' : 'ExecutionTimeException',
            'answer': 'a'
        },
        {
            'question' : ' How does one handle exceptions?',
            'a' : 'throw',
            'b' : 'catch',
            'c' : 'handle',
            'd' : 'try-catch',
            'answer': 'd'
        },
        {
            'question' : 'What is the other option instead of exception handling?',
            'a' : 'No other option',
            'b' : 'Defensive Programming',
            'c' : 'Error-handled code',
            'd' : 'Error Propagating',
            'answer': 'b'
        },
        {
            'question' : 'What keyword is used for running a block of code regardless of try or catch? ',
            'a' : 'finally',
            'b' : 'final',
            'c' : 'run',
            'd' : 'code',
            'answer': 'a'
        },
        {
            'question' : 'Which of the following package Exception class exist?',
            'a' : 'java.file',
            'b' : 'java.util',
            'c' : 'java.io',
            'd' : 'java.lang',
            'answer': 'd'
        },
        {
            'question' : 'Which exception is thrown when divide by zero statement executes?',
            'a' : 'NumberFormatException',
            'b' : 'NullPointerException',
            'c' : 'ArithmeticException',
            'd' : 'IOException',
            'answer': 'c'
        },
        {
            'question' : 'The throw keyword is used-',
            'a' : 'generate exception programmatically',
            'b' : 'throw exception object',
            'c' : 'catch exception object',
            'd' : 'None of the above',
            'answer': 'a'
        }
    ],
    'Input/Output': [
        {
            'question': 'A sequence of bytes, representing a flow of data from a source to a destination is called a?',
            'a' : 'Stream',
            'b' : 'Object',
            'c' : 'Class',
            'd' : 'Line',
            'answer': 'a'
        },
        {
            'question': ' Which of the following is not a method in the scanner class?',
            'a' : 'nextInt()',
            'b' : 'nextLine()',
            'c' : 'next()',
            'd' : 'nextString()',
            'answer': 'd'
        },
        {
            'question': 'Which of the following involved encoding/decoding?',
            'a' : 'File I/O',
            'b' : 'String I/O',
            'c' : 'Text I/O',
            'd' : 'Binary I/O',
            'answer': 'c'
        },
        {
            'question': 'The serializable interface is a _____ interface',
            'a' : 'marker',
            'b' : 'checker',
            'c' : 'marked',
            'd' : 'checked',
            'answer': 'a'
        },
        {
            'question' : 'Which reader wraps anothr reader class and improves performance?',
            'a' : 'FileReader',
            'b' : 'BufferedReader',
            'c' : 'FileInputReader',
            'd' : 'EfficientReader',
            'answer': 'b'
        },
        {
            'question' : 'Which method can you use to get an estimate of the number of remaining bytes in a file using InputStream?',
            'a' : 'size()',
            'b' : 'available()',
            'c' : 'length()',
            'd' : 'getSize()',
            'answer': 'b'
        },
        {
            'question' : 'Which function returns true if the file or the directory exists?',
            'a' : 'ifExists',
            'b' : 'existing',
            'c' : 'isExist',
            'd' : 'exists()',
            'answer': 'a'
        },
        {
            'question' : 'What is the output of the following?\nPrintWriter out = new PrintWriter ("c:/temp.tx”);\nout.printf (("x:%3.3f ",32.32);\nout .printf (("%6b ", (1>2));\nout.printf (("%6s ", "Java”)\nout.close();',
            'a' : 'x:32.320 false Java',
            'b' : 'x:32.32 false Java',
            'c' : 'x:32.320 true Java',
            'd' : 'x:32.320 1<2 Java',
            'answer': 'a'
        },
        {
            'question' : 'All files are stored in what format?',
            'a' : 'string',
            'b' : 'number',
            'c' : 'binary',
            'd' : 'text',
            'answer': 'c'
        },
        {
            'question' : 'Which stream reads primitives and objects?',
            'a' : 'ObjectInputStream',
            'b' : 'ObjectOutputStream',
            'c' : 'PrimitiveInputStream',
            'd' : 'FileInputStream',
            'answer': 'a'
        }
    ],
    'Recursion': [
        {
            'question': 'Consider the code:\npublic static long factorial( int n) {\nreturn n * factorial(n 1);',
            'a' : 'factorial(0) gives 0',
            'b' : 'runs indefinitely and causes a StackOverFlowError',
            'c' : 'Works perfectly',
            'd' : 'Complie Error',
            'answer': 'b'
        },
        {
            'question': 'What is the base case?\nstatic int m (int n)\nif (n == 1) return 1;\nelse return n + xMethod (n 1);',
            'a' : 'No base case',
            'b' : 'n is greater than 1',
            'c' : 'n is less than 1',
            'd' : 'n is 1',
            'answer': 'd'
        },
        {
            'question': 'Recursion is a method in which the solution of a problem depends on ____________',
            'a' : "Larger instances of different problems",
            'b' : 'Smaller instances of the same problem',
            'c' : 'Smaller instances of different problems',
            'd' : 'Larger instances of the same problem',
            'answer': 'b'
        },
        {
            'question': ' Which of the following statements is true?',
            'a' : 'Recursion is always better than iteration',
            'b' : 'Recursion uses less memory compared to iteration',
            'c' : 'Iteration is always better and simpler than recursion',
            'd' : 'Recursion uses more memory compared to iteration',
            'answer': 'd'
        },
        {
            'question' : 'Which of the following problems can’t be solved using recursion?',
            'a' : 'Length of a string',
            'b' : 'Sum of a number',
            'c' : 'Baseless problems',
            'd' : 'Factorial of a number',
            'answer': 'd'
        }
    ],
    'Data Structures': [
        {
            'question': 'Each element is contained in an object of a LinkedList called the _____.',
            'a' : 'Node',
            'b' : 'Object',
            'c' : 'Apex',
            'd' : 'Vertex',
            'answer': 'a'
        },
        {
            'question': 'LinkedList access elements using ______.',
            'a' : 'It is done internally',
            'b' : 'index',
            'c' : 'Random Access',
            'd' : 'Sequential Access',
            'answer': 'd'
        },
        {
            'question': 'ArrayList is always more efficient than LinkedList for the following operations (at all times).',
            'a' : 'Insert/delete an element in the middle of the list.',
            'b' : 'Insert/delete an element at the end of the list.',
            'c' : "Retrieve an element given the index",
            'd' : 'Insert/delete an element in the start of the list.',
            'answer': 'c'
        },
        {
            'question': 'A stack represents which kind of data structure?',
            'a' : 'FILO',
            'b' : 'LILO',
            'c' : 'FIFO',
            'd' : 'LIFO',
            'answer': 'd'
        },
        {
            'question' : 'A variable ______ refers to the first node.',
            'a' : 'head',
            'b' : 'start',
            'c' : 'top',
            'd' : 'first',
            'answer': 'a'
        },
        {
            'question' : 'The most efficient data structure is _____.',
            'a' : 'structure',
            'b' : 'class',
            'c' : 'array',
            'd' : 'arrayList',
            'answer': 'c'
        },
        {
            'question' : 'What is the time complexity of this code?\nfor (int i = 0; i < N; i++)\nlinkedlist.get(i);',
            'a' : 'O(N)',
            'b' : 'O(N^2)',
            'c' : '0(1)',
            'd' : 'O(N^3)',
            'answer': 'b'
        },
        {
            'question' : 'The ______ interface can be used to compare objects of a class, similar to the Comparable interface.',
            'a' : 'compareObjects',
            'b' : 'checkBetween',
            'c' : 'Comparator',
            'd' : 'Compare',
            'answer': 'c'
        },
        {
            'question' : 'A collection of elements stored using key/value pairs is called a _________.',
            'a' : 'collection',
            'b' : 'list',
            'c' : 'map',
            'd' : 'set',
            'answer': 'c'
        },
        {
            'question' : 'Which of the following is not a method in Collection?',
            'a' : 'addEverything()',
            'b' : 'add()',
            'c' : 'addAll()',
            'd' : 'contains()',
            'answer': 'a'
        }
    ],
    'Sorting Algorithms:': [
        {
            'question': 'What is ignored in the notation symbol?',
            'a' : 'exponents',
            'b' : 'constants',
            'c' : 'powers',
            'd' : 'values',
            'answer': 'b'
        },
        {
            'question': 'The best time complexity for selection sort is __?',
            'a' : 'O(1)',
            'b' : 'O(N*2)',
            'c' : 'O(N)',
            'd' : 'O(N^2)',
            'answer': 'd'
        },
        {
            'question': 'Which of the following is not a stable sorting algorithm in its typical implementation?',
            'a' : "Quick Sort",
            'b' : 'Merge Sort',
            'c' : 'Selection Sort',
            'd' : 'Bubble Sort',
            'answer': 'a'
        },
        {
            'question': ' Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?',
            'a' : 'Quick Sort',
            'b' : 'Bubble Sort',
            'c' : 'Merge Sort',
            'd' : 'Selection Sort',
            'answer': 'd'
        },
        {
            'question' : 'What is the best time complexity of bubble sort?',
            'a' : ' O(1)',
            'b' : 'O(N)',
            'c' : 'O(N*2)',
            'd' : 'O(N^2)',
            'answer': 'd'
        }
    ]
};