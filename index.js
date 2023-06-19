// ____ There are three types of variable intialiser keywords : ____ 

/*

#1. var ('var' is a type of variable which is used to declare globaly, means it has global scope)

#2. let ('let' declares a variable with block scope. Means if you declare a variable in one scope you can't access if anywhere outside that scope.)

#3. const ('const' declare a constant variable with block scope. means once you declare this type of variable you can't change or reassign it agian.)

*/






// ____ Rules for variables name : ____
/*

#1. Variable names must start with a letter, underscore (_), or a dollar sign ($). They cannot start with a number.

    Valid variable names
    let myvar;
    let _underScore;
    let $Dolar;

    Invalid variable names
    let 1number;
    let #price;


#2. Variable names can contain letters, digits (0-9), underscores, or dollar signs.

    // Valid variable names
    let age;
    let student1;
    let _total_amount;
    let $price;

    // Invalid variable names
    let my-variable;
    let 123abc;
    let @name;


#3. Variable names are case-sensitive. "caseVar" and "casevar" would be treated as different variables.


    let caseVar = 10;
    let casevar = 20;

    console.log(caseVar);   // Output: 10
    console.log(casevar);   // Output: 20


#4. Reserved words cannot be used as variable names. JavaScript has a set of reserved words that have predefined meanings in the language.


    // Invalid variable names
    let if = 5;
    let function = "something";


#5. Use meaningful and descriptive names for variables to enhance code readability and maintainability. Choose names that accurately represent the purpose or content of the variable.


    let numberOfStudents = 25;
    let firstName = "John";
    let isReady = true;


#6. It is recommended to use camelCase for variable names. Start with a lowercase letter and capitalize the first letter of each subsequent concatenated word.


    let firstName = "John";
    let numberOfStudents = 25;


*/






// Main Data Types of javascript

/* 

#1. Primitive Types :

    * Undefined
    * Null
    * Boolean
    * Number
    * Sting
    * Symbol

#2. Composite Types :

    * Object
    * Array
    * Function

*/





// In JavaScript, there are various types of operators that allow you to perform different operations on values. Here are the main types of operators:

/*
1. **Arithmetic Operators**: Used for performing arithmetic operations on numeric values.
   - Addition: `+`
   - Subtraction: `-`
   - Multiplication: `*`
   - Division: `/`
   - Remainder (Modulus): `%`
   - Exponentiation: `**` (Enable 2015)

2. **Assignment Operators**: Used to assign values to variables.
   - Assignment: `=`
   - Addition assignment: `+=`
   - Subtraction assignment: `-=`
   - Multiplication assignment: `*=`
   - Division assignment: `/=`
   - Remainder assignment: `%=`
   - Exponentiation assignment: `**=`

3. **Comparison Operators**: Used to compare values and evaluate conditions.
   - Equality: `==`
   - Inequality: `!=`
   - Strict equality: `===`
   - Strict inequality: `!==`
   - Greater than: `>`
   - Less than: `<`
   - Greater than or equal to: `>=`
   - Less than or equal to: `<=`

4. **Logical Operators**: Used to combine and manipulate boolean values.
   - Logical AND: `&&`
   - Logical OR: `||`
   - Logical NOT: `!`

5. **Unary Operators**: Operate on a single operand.
   - Increment: `++`
   - Decrement: `--`
   - Unary plus: `+`
   - Unary negation: `-`
   - Logical NOT: `!`
   - typeof: Returns the type of a value as a string.
   - void: Discards an expression's return value and evaluates to `undefined`.

6. **Ternary Operator**: A conditional operator that evaluates a condition and returns one of two expressions based on the result.
   - Conditional (Ternary): `condition ? expression1 : expression2`

7. **Bitwise Operators**: Perform operations at the bit level.
   - Bitwise AND: `&`
   - Bitwise OR: `|`
   - Bitwise XOR: `^`
   - Bitwise NOT: `~`
   - Left shift: `<<`
   - Right shift: `>>`
   - Zero-fill right shift: `>>>`

8. **String Operators**: Used for concatenating strings.
   - Concatenation: `+`

These are the main types of operators in JavaScript. They enable you to perform a wide range of operations and manipulations on values in your code.

*/




// Control Flow Statements

/* 

    * if
    * else
    * else if
    * switch
    * for
    * while
    * do...while
    * break
    * continue
    * return

*/

// All types of for loop in javascript

/*

#1. for loop

    for (initialization; condition; increment/decrement) {
        // code to be executed
    }


#2. for...in loop

    for (variable in object) {
        // code to be executed
    }

    ** It is used to loop through the keys or property names of an object


#3. for...of loop

    for (variable of iterable) {
       // code to be executed
    }

#4. foreach()

    Array.foreach((e)=>{
        // code to be executed
    })
    
*/
