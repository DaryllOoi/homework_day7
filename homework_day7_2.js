// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
let isMale = true;
let myGender = isMale ? "male" : "female";
console.log(myGender);


/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let value1 = 8
let value2 = 5
let oneEight = value1 === 8 || value2 === 8;
let substraction = value1 + value2 ===8 || value1 - value2;
let oneOrSubstract = oneEight || substraction;
console.log("number",oneOrSubstract); 

// another example

let varx = 8
let vary = 3
if (varx ===8 || vary === 8|| vary+varx === 8 || vary-varx ===8){
    console.log("condition is true")
} else{
    console.log ("condition is false");
}

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let strings = "string1" + "string2"
console.log("the ",strings)

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let num1 = 1;
let num2 = 2;
let num3 = 3;
let greatestnumber;
if (num2 > num1) {
    if (num3 > num2) {
        greatestnumber = num3;
    } else {
        greatestnumber = num2;
    }
} else if (num3 > num1) {
    greatestnumber = num3;
} else {
    greatestnumber = num1;
}
console.log('Greatest number is', greatestnumber);

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let number1 = 6
let number2 = 4

console.log("value ", (number1 + number2) / 2);

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let longNumber = "longlong"
let shortNumber = "short"

if (longNumber.length > shortNumber.length) {
    console.log("longNumber is longer than shortNumber")
}else{
    console.log("shortNumber is longer than longNumber")
}

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let value_1 = 9.77
let value_2 = 9
console.log(parseInt(value_1) === value_1);
console.log(parseInt(value_2) === value_2);

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let number = 600
console.log("value is ", number * 0.55);

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let numberEvenOrOdd = 14;
if(numberEvenOrOdd % 2 === 0){
    console.log("The number is even");
} else{
    console.log("The number is not even");
}
