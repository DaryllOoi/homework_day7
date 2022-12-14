/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log("The main datatypes in Javascript are Numbers, strings, Boolean, Undefined and Null. \n");
console.log("Numbers can be any numbers, values and can be infinity or negative infinity. \n");
console.log("String is a name given to anything, like div class to html. \n");
console.log("Boolean is when translating a logic in Javascript, we use variable names to determine the questions. \n");
console.log("Undefined is when the value in the code doesn't exist yet. \n")
console.log("Null is when you decide to make your code empty. \n")

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log("Variable is an unique container you create to put different values in there. \n")

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20;
console.log("the sum is : ,", sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log("x value is: ", x);

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";
console.log("The name is :", name);

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let newValue = 12 - x;
console.log("new value is :", newValue);

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";
console.log("Name1 Name2 1st time :", (name1) === (name2));
console.log("verifying 2nd time :", name1 === name2.toLowerCase());

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 8


if (x === 8) {
    console.log("eight");
} else {
    console.log("nine");
}

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let personNAme = "john";
let personName2 = "jess";
let result

if (personNAme === "john") {
    console.log("result = yes");
}
else {
    console.log("result = no");
}


