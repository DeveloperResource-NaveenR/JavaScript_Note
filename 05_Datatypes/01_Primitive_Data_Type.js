//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:

let age = 20;
console.log(age);

const PI = 3.14;
console.log(PI);

age = 30;
console.log(age);


//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:

var myName = 'naveen';
console.log(myName);

myName[0] = 'N';

console.log(myName);

let quotWithBackTick = `backTick in staring ${myName}`;
console.log(quotWithBackTick);

// empty string

let str = "";
console.log(str);


//? Boolean: Represents a logical entity with two values: true or false.
// Example:

var isRaining = false;
var areYouAwesome = true;
console.log(isRaining);  // false
console.log(areYouAwesome); // true


//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:

var lastName;
console.log(lastName);  // undefined

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:

var badValue = null;
console.log(badValue);


//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:

const bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber);


//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:

const mySymbol = Symbol("description");
console.log(mySymbol);



let str1 = "Hello";
console.log(str1);
str1[0] = "Y";
console.log(str1);

let num1 = 1;
let num2 = 1;

console.log(num1 == num2); // true

let str2 = "Yellow";
console.log(str1 == str2); //false

console.log("naveen" / 2); // NaN
console.log(1 / 0); // infinity
console.log(NaN + 1);  // NaN
console.log(1 + NaN); // NaN
console.log(NaN ** 0); // 1