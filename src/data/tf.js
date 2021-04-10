export const tfQuestions = {
    'Error Types': [
        {
            'question': 'Java was initially designed to be not object-oriented',
            'answer': 'false'
        },
        {
            'question': 'A program that is supposed to print 1-10 prints numbers from 0-9, this is a logical error.',
            'answer': 'true'
        },
        {
            'question': 'The JVM is a virtual Machine in your computer.',
            'answer': 'true'
        },
        {
            'question' : 'Runtime errors cause the program to abort during compile time',
            'answer': 'true'
        }
    ],
    'Data Types': [
        {
            'question': 'Is "hello_123" a valid Identifier?',
            'answer': 'true'
        },
        {
            'question': 'Java is case-sensitive.',
            'answer': 'true'
        },
        {
            'question' : 'A compilation error would occur if the literal were too large for the variable to hold.',
            'answer': 'true'
        },
        {
            'question': 'Floating-point literals cannot be specified in scientific notation.',
            'answer': 'false'
        },
        {
            'question' : 'To read a double from a scanner object "input", you would call: input.nextDouble()',
            'answer': 'true'
        },
        {
            'question': 'The keyword to make a variable constant is constant.',
            'answer': 'false'
        },
        {
            'question': 'The Math.pow(a,b) is used to calculate a^b.',
            'answer': 'true'
        },
        {
            'question': 'We use the System.out.printf method to display formatted output on the console.',
            'answer': 'true'
        },
        {
            'question' : 'PI and E are the two double contsants in the Math class.',
            'answer': 'true'
        },
        {
            'question' : 'There is a particular length size of an identifier.',
            'answer': 'false'
        }
    ],
    'Selection Statements': [
        {
            'question': 'What is the boolean value-\n  int y = 5, x =10;\n  boolean b = (y>x);',
            'answer': 'false'
        },
        {
            'question': 'A "multi-way" if using multiple if statements separately.',
            'answer': 'false'
        },
        {
            'question' : 'Boolean expressions are evaluated either True or False using relational operators.',
            'answer': 'true'
        },
        {
            'question': 'What is the boolean value-\n  int y = 15, x =50;\n  boolean b = ((y>30)&&(x>10)) ;',
            'answer': 'false'
        },
        {
            'question' : 'yield acts as a return and a break statement.',
            'answer': 'true'
        },
        {
            'question': 'The dangling else is a problem in computer programming in which an optional else clause in an if–then statement results in nested conditionals being ambiguous.',
            'answer': 'True'
        },
        {
            'question': 'Assignment operator has a higher precedence than relational operators.',
            'answer': 'false'
        },
        {
            'question': 'Are both the codes same?\nif(num%2==0)\nSystem.out.println("even");\nelse\nSystem.out.println("odd");\n------------------------------------------------\nSystem.out.println((num%2==0)?"odd":"even");',
            'answer': 'false'
        },
        {
            'question' : 'What is the value of: (true) && 9 > 1',
            'answer': 'false'
        },
        {
            'question' : 'Parentheses is always evaluated first.',
            'answer': 'true'
        }
    ],
    'Loops' : [
        {
            'question': 'We initialize the counter before declaring the loop in a while loop',
            'answer': 'true'
        },
        {
            'question': 'We should use floating point values for equality checking in a loop control',
            'answer': 'false'
        },
        {
            'question' : 'The difference between a while and a do...while is that a do...while loop executes once even if it is false.',
            'answer': 'true'
        },
        {
            'question': 'Repetition will exit after running a certain number of time in a counter controlled loop.',
            'answer': 'true'
        },
        {
            'question' : 'Adding a semicolon at the end of a for loop parenthesis is a logical error.',
            'answer': 'true'
        },
        {
            'question': 'The syntax for the foor loop is:\n   for (loop-continuation-condition,initial-\naction,action-after-each-iteration)\n   {\n       statement(s);\n   }',
            'answer': 'false'
        },
        {
            'question': 'The code snippet:\n   for(;;){ //statement(s) }\nprovides an infinite loop.',
            'answer': 'true'
        },
        {
            'question': 'A for loop is used when the number of repeptitions is not known.',
            'answer': 'false'
        },
        {
            'question' : 'We cannot use nested loops.',
            'answer': 'false'
        },
        {
            'question' : 'If the control variable is not modified, we get an infinite loop.',
            'answer': 'true'
        }
    ],
    'Methods': [
        {
            'question': 'We call/invoke the function by its memory address.',
            'answer': 'false'
        },
        {
            'question': 'Ambiguous Invocation occurs when there are two or more possible matches for the invocation of a method, but the compiler cannot determine the best match.',
            'answer': 'True'
        },
        {
            'question' : 'The scope of the variable is the part of the program that the variable can be referenced.',
            'answer': 'true'
        },
        {
            'question': 'Ambiguous invocation causes a run-time error.',
            'answer': 'false'
        },
        {
            'question' : '“Divide and conquer ” strategy is also known as "stepwise refinement"',
            'answer': 'true'
        },
        {
            'question': 'The method header specifies the modifiers, return value type, method name, and parameters of the method.',
            'answer': 'true'
        },
        {
            'question': 'A method cannot return a value.',
            'answer': 'false'
        },
        {
            'question': 'return is not needed for a void method.',
            'answer': 'true'
        },
        {
            'question' : 'One need not provide the arguments in the same order as their respective parameters in the method signature',
            'answer': 'false'
        },
        {
            'question' : 'When you invoke a method with an argument, the value of the argument is passed to the parameter called pass-by-value',
            'answer': 'true'
        }
    ],
    'Arrays': [
        {
            'question': 'When you declare a variable to reference an array, it just creates a pointer, there is no object yet.',
            'answer': 'true'
        },
        {
            'question': 'One can declare and create an array in one step.',
            'answer': 'True'
        },
        {
            'question' : 'Arrays have only one dimension',
            'answer': 'false'
        },
        {
            'question': 'for-each loops enable you to traverse the complete array sequentially by using an index variable.',
            'answer': 'false'
        },
        {
            'question' : 'When an array is created, its elements are assigned default values.',
            'answer': 'true'
        },
        {
            'question': 'Is this code valid?/ndouble[] myList;\nmyList= {2, 5, 3.4, 3.5};',
            'answer': 'false'
        },
        {
            'question': 'When a method returns an array, it returns the reference of the array.',
            'answer': 'true'
        },
        {
            'question': 'Is this the syntax of an enhanced-for loop correct?\n  for (elementType variable_name: arrayRefVar) {\n    // Access the array',
            'answer': 'true'
        },
        {
            'question' : 'An array can be declared without initialization without declaring the size.',
            'answer': 'true'
        },
        {
            'question' : 'We can skip initializing some elements of the array during Shorthand Initialization.',
            'answer': 'false'
        }
    ],
    'Object Oriented Programming': [
        {
            'question': 'An object can only hold attributes.',
            'answer': 'false'
        },
        {
            'question': 'Constructors play the role of initializing objects.',
            'answer': 'true'
        },
        {
            'question' : 'UML is a method for representing and communicating a model of the software being developed.',
            'answer': 'true'
        },
        {
            'question': 'This is used outside a method or a constructor to refer to the another object.',
            'answer': 'false'
        },
        {
            'question' : 'Static variables are shared by all the instances of the class.',
            'answer': 'true'
        },
        {
            'question': 'Static methods carry out a specific function.',
            'answer': 'false'
        },
        {
            'question': 'There are only 2 access modifiers in Java.',
            'answer': 'false'
        },
        {
            'question': 'A default constructor is always created, even when a user creates a parametric constructor.',
            'answer': 'false'
        },
        {
            'question' : 'Access Modifiers control the levels of access to class members in java',
            'answer': 'true'
        },
        {
            'question' : 'A class is a template of a group of attributes and behaviours.',
            'answer': 'true'
        }
    ],
    'Inheritance': [
        {
            'question': 'Inheritance is a mechanism for enhancing and extending, existing working classes created by the user.',
            'answer': 'true'
        },
        {
            'question': 'Protected modifier can be used globally.',
            'answer': 'false'
        },
        {
            'question' : 'When you inherit class members, you cannot add new ones.',
            'answer': 'false'
        },
        {
            'question': 'The keyword super refers to the superclass of the class in which super keyword appears.',
            'answer': 'true'
        },
        {
            'question' : 'Overriding occurs when you implement a method of same name and return type in both parent and child class.',
            'answer': 'true'
        },
        {
            'question': 'A subclass can weaken the accessibility of a method defined in the superclass.',
            'answer': 'false'
        },
        {
            'question': 'An object can be a subclass of another object.',
            'answer': 'false'
        },
        {
            'question': 'Final method can be overriden.',
            'answer': 'false'
        },
        {
            'question' : 'Constructor chaining is a process of constructing an instance of a class invokes all the superclasses’ constructors along the inheritance chain.',
            'answer': 'true'
        },
        {
            'question' : 'One must use Inheritance when there is an IS-A relationship.',
            'answer': 'true'
        }
    ],
    'Polymorphism': [
        {
            'question': 'A reference of a supertype can be used to refer to an object of a subtype.',
            'answer': 'true'
        },
        {
            'question': 'The instanceof operator is used to test whether an object is an instance of a class.',
            'answer': 'true'
        },
        {
            'question' : 'Every instance of a superclass is also an instance of its subclass.',
            'answer': 'false'
        },
        {
            'question': 'A reference variable of a supertype can refer to any of its subtype objects.',
            'answer': 'true'
        },
        {
            'question' : 'When invoking a method using a reference variable x, the method in the object referenced by x is executed, regardless of the type of x.',
            'answer': 'true'
        }
    ],
    'Abstract Classes and Inheritance': [
        {
            'question': 'Interfaces support multiple inheritance.',
            'answer': 'true'
        },
        {
            'question': 'Abstract classes can contain constructors.',
            'answer': 'true'
        },
        {
            'question': 'Interfaces cannot inherit from another interface.',
            'answer': 'false'
        },
        {
            'question' : 'You cannot create objects of an abstract class.',
            'answer': 'true'
        },
        {
            'question' : 'We use an interfave when we have a weak is-a relationship.',
            'answer': 'true'
        }
    ],
    'Exception Handling': [
        {
            'question': 'Exception handling enables a program to deal with exceptional situations and continue its normal execution.',
            'answer': 'true'
        },
        {
            'question': 'When an error is detected, Java continues the normal flow of program execution.',
            'answer': 'false'
        },
        {
            'question': 'Attempting to access a character that is outside the bounds of a StringBuffer results in a StringOverFlowException.',
            'answer': 'false'
        },
        {
            'question' : 'Which exception is thrown by read() method?',
            'answer': 'false'
        },
        {
            'question' : 'When a catch and finally block both return a value, the value returned is that from the finally block.',
            'answer': 'true'
        }
    ],
    'Input/Output': [
        {
            'question': 'Is the below valid?\nDataInputStream in =new DataInputStream(“file.dat”);',
            'answer': 'false'
        },
        {
            'question': 'Binary files can be read by humans easily.',            
            'answer': 'false'
        },
        {
            'question' : 'The Files class provides an abstraction that deals with most of the machine dependent complexities of files and path names.',
            'answer': 'false'
        },
        {
            'question': 'Is this piece of code valid?\nURL url = new URL("http://www.google.ca//html”);',
            'answer': 'true'
        },
        {
            'question' : 'Stream chaining is a way of connecting several stream classes together to get the data in the form required.',
            'answer': 'true'
        },
        {
            'question': 'The transient keyword is used for fields so that the JVM ignores them when sending the object to the output stream.',
            'answer': 'true'
        },
        {
            'question': 'The readUTF format always has size as 2 by default.',
            'answer': 'false'
        },
        {
            'question': 'Text I/O is built upon binary I/O to provide a level of abstraction for character encoding and decoding.',
            'answer': 'true'
        },
        {
            'question' : 'Access Modifiers control the levels of access to class members in java',
            'answer': 'true'
        },
        {
            'question' : 'The available() method is not a very efficient method.',
            'answer': 'true'
        }
    ],
    'Recursion': [
        {
            'question': 'A recursive method is a method which calls itself directly only.',
            'answer': 'false'
        },
        {
            'question': 'A recursive function can also be written as a loop.',
            'answer': 'true'
        },
        {
            'question': 'A tail recursive method is the one that has no pending operations to be performed on return from a recursive call.',
            'answer': 'true'
        },
        {
            'question' : 'A recursive function need not have a stopping condition.',
            'answer': 'false'
        },
        {
            'question' : 'A non-tail recursive method can often be converted to a tail recursive method.',
            'answer': 'true'
        },
    ],
    'Data Structures': [
        {
            'question': 'If the LinkedList is empty, both head and tail are null.',
            'answer': 'true'
        },
        {
            'question': 'Doubly Linked List can be traversed in one direction only.',
            'answer': 'false'
        },
        {
            'question': 'LinkedList and PriorityQueue are two concrete implementations of Queue.',
            'answer': 'true'
        },
        {
            'question' : 'In priority queues, an iterator or (a for-each loop) is not guaranteed to traverse the elements in any particular order.',
            'answer': 'true'
        },
        {
            'question' : 'If a node doesn’t have a memory address, it is considered deleted as it goes to the heap.',
            'answer': 'true'
        }
    ],
    'Sorting Algorithms:': [
        {
            'question': 'A notation used to indicate the growth rate of a function(efficiency) as the size of the data input to the algorithm grows is called the Big-Oh notation.',
            'answer': 'true'
        },
        {
            'question': 'The performance of the algorithm is expressed as a function of n where n is the size of the problem/input/data.',
            'answer': 'true'
        },
        {
            'question': 'The worst case performance of the algorithm is the most efficient execution of the algorithm on the "best" data inputs.',
            'answer': 'false'
        },
        {
            'question' : 'Insertion sort is efficient for large arrays.',
            'answer': 'false'
        },
        {
            'question' : 'Radix sort is a general-purpose sorting algorithm',
            'answer': 'true'
        }
    ]
};