// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log("My name is:",firstName,"and my lastname is:",lastName);
console.log(`My name is ${firstName}, and my name is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2020";
const number = 1;

// Add the year plus the number
// The result should be 2021
// You cannot touch line 1 or 2


console.log(parseInt(year)+1);
console.log(Number(year)+1);

const newYear = +year + number;

console.log(parseInt("102a")); //parses as 102
console.log(Number("102a")); //return NaN
console.log(newYear);

// --------------------------------------
