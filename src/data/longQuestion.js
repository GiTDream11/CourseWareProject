export const longQuestions = [
    {
        'Title' :'Datatypes / Literals',
        'Questions': [
            [
                'Translate the following simple algorithms into Java code:',
                'Algorithm 1:',
                'Step 1: Declare a double variable named height',
                'Step 2: initialize height to 16.5',
                'Step 3: print height out on the console.',
                '',
                'The output should look like this:',
                'The height is 150 m'
                
            ],
            [
                'Translate the following simple algorithms into Java code:',
                'Algorithm 2:',
                'Step 1: Declare two int variables named x and yand initialize them to 5 and 6',
                'Step 2: Declare an int variable named product and initialize it to the product of x and y.',
                'Step 3: print product on the console. ',
                '',
                'The output should look like this:',
                'The product of 5 and 6 is 30'
            ],
            [
                'Write a program that displays minutes and remaining seconds from seconds entered by the user.'
            ],
            [
                'Write a program that converts a Fahrenheit degree given by the user to Celsius'
            ]
        ]
    },
    {
        'Title': 'Selection',
        'Questions' : [
            [
                'Write a program that prompts the user to enter an integer.',
                'If the number is a multiple of 5, print HiFive .',
                'If the number is divisible by 2, print HiEven',
                'That is, you could have one of the following three outputs:',
                '• HiFive',
                '• HiEven',
                '• HiFive HiEven'
            ],
            [
                'Write an if statement that prints out “eligible” if age is larger than or equal to 16, otherwise print out “not eligible”.'
            ],
            [
                'Write a program that prompts the user to enter a weight in kilograms and height in centimeters, then displays the BMI.'
            ],
            [
                'Use switch statements instead of if in all of your practice codes.'
            ]
        ]
    },
    {
        'Title': 'Repetition',
        'Questions':  [
            [
                'Write a Java loop that finds the sum and average of all numbers between 1 to 10 inclusive.'
            ],
            [
                'Write a Java loop to find 10! (the factorial of 10) which is the product of the integers between 1 and 10.'
            ],
            [
                'Write a program to compute the average of an unspecified number of entries.'
            ],
            [
                'Rewrite your previous codes using different kinds of loops.'
            ]
        ]
    },
    {
        'Title': 'Methods',
        'Questions' : [
            [
                'Write three methods that count the number of letters, digits, and other characters in a string using the following header:',
                'public static int countLetters (String s)',
                'public static int countDigits (String s)',
                'public static int countNonLetterOrDigit (String s)',
                '',
                'Write a test program that prompts the user to enter a string and displays the number of letters, digits, and other characters in the string.'
            ],
            [
                'Create two methods: one that will reverse the order of the digits in an integer and a second determines if a number is a palindrome (i.e. reads the same front to back)'
            ],
            [
                'Rewrite your previous codes into functions and call them in the main.'
            ]
        ]
    },
    {
        'Title' : 'Arrays',
        'Questions':  [
            [
                'Create a method that accepts a double array as a parameter and returns true if the values in the array are sorted in increasing order.',
                'Using this header:',
                'public static boolean isSorted(double[] list)'
            ],
            [
                'Write a program that reads nelements (real numbers) and then displays their average along with the number of elements above average. Your program should begin by asking the use to enter the value n.'
            ],
            [
                'Write a program that creates a new array that has the same elements of another array but in reverse order; e.g. b = {5,4,3,2,1}.'
            ],
            [
                'For a given 2D array, write code to find the row that has the largest sum.'
            ]
        ]
    },
    {
        'Title' : 'OOP',
        'Questions' :  [
            [
                'Create a class Student',
                'A cow has the attributes',
                '• String as a name',
                '• int as an age',
                '• int as marks[] of 3 subjects',
                'Write a program to create three Student instances (objects) set their attributes to any values.',
                'Display the information of the Student instances.'
            ],
            [
                'Creates a class named Cuboid to represent cuboid objects and contains:',
                '',
                'Three double attributes l, w, and h specifying the length, width and height of the cuboid.',
                'A String attribute color that specifies the color of the cuboid.',
                'A constructor (with 4 arguments) that creates a cuboid with specified values.',
                'A constructor (with no arguments) that sets l, w, and h to 1 and color to “white”. This constructor should invoke the 4-argument constructor using this.',
                '',
                'Your program should have these methods:',
                'Getter methods for all fields.',
                'getSurfaceArea(): returns the surface area of the cuboid which is 2(𝑙𝑤 + 𝑙h + 𝑤h).',
                'getVolume(): returns the cuboid volume which is 𝑙. 𝑣. 𝑤',
                'displayInfo(): displays on the screen the color, dimensions, surface area, and volume of this cuboid.',
                '',
                'Write a test program that creates two objects of the Cuboid class — first object should have default values and the second object must be green of length 8, width 3.5, and height 5.9. Print the dimensions, color, surface area, and volume of each object as shown in the sample run below.'
            ]
        ]
    },
    {
        'Title' : 'Inheritance',
        'Questions' : [
            [
                "Create a class named 'Rectangle' with two data members 'length' and 'breadth' and two methods to print the area and perimeter of the rectangle respectively. Its constructor having parameters for length and breadth is used to initialize length and breadth of the rectangle. Let class 'Square' inherit the 'Rectangle' class with its constructor having a parameter for its side (suppose s) calling the constructor of its parent class as 'super(s,s)'. Print the area and perimeter of a rectangle and a square."
            ]
        ]
    },
    {
        'Title' : 'Abstract',
        'Questions' : [
            [
                'Write a class Shape that also implements Cloneable and Comparable interfaces. The comparison should be solely based on the area of two shapes. '
            ]
        ]
    },
    {
        'Title' : 'Exceptions',
        'Questions': [
            [
                'Write a program that creates an integer array with 50 random values, prompts the user to enter the index of an element in the array between 0 and 49, then displays the corresponding element value. If the specified index is out of bounds, display an error message (e.g. “Out of Bounds”) and ask the user to enter another index. Use a while loop that will keep prompting the user until a valid input is received. To handle invalid inputs, write two versions of your program: one that uses exception handling, and one that uses defensive programming. Assume a user will always enter numbers.'
            ]
        ]
    },
    {
        'Title' : 'I/O',
        'Questions' : [
            [
                "Write Java code to write 100 double values created randomly (from 0 to 100000) into a file, named numbers.dat, using binary I/O. If the file doesn't exist, you need to create it, otherwise append new data to it if it already exists."
            ],
            [
                "Write a Java program to track how many times the program has been executed. You can store an int representing the count in a file, e.g., count.dat. Each time your program is executed, read the count, increment it by 1, and then store it back to the file. If count.dat doesn’t exist (e.g., first time to run the program), store 1 in the file. Use binary IO for your code. "
            ]
        ]
    },
    {
        'Title' : 'Recursion',
        'Questions' : [
            [
                'Write a recursive implementation of the factorial function. Recall that n! = 1 × 2 × … × n, with the special case that 0! = 1.'
            ],
            [
                "Write a recursive function that checks whether a string is a palindrome (a palindrome is a string that's the same when it reads forwards and backwards.)"
            ],
            [
                'Write a recursive function that, given a number  n, returns the sum of the digits of the number n.'
            ]
        ]
    },
    {
        'Title': 'Data Structures',
        'Questions' : [
            [
                'Write a method with the following header',
                'public static ArrayList<Integer> noDuplicates(ArrayList<Integer> list)',
                'The method returns a new array list that contains the non-duplicate elements of list.',
                'Write a test program that prompts the user to enter 5 integers to a list and displays the distinct integers.'
            ],
            [
                'Use a ListIterator to print all elements in an ArrayList in forward direction then in backward direction.'
            ],
            [
                'Check if a string is palindrome using a stack.'
            ],
            [
                'Implement a LinkedList'
            ],
            [
                'Change this LinkedList to a doubly LinkedList'
            ]
        ]
    },
    {
        'Title': 'Sorting',
        'Questions' : [
            [
                'Write the java code for Selection Sort'
            ],
            [
                'Write the java code for Bubble Sort'
            ]
        ]
    }
]