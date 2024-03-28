# WHat is Type Conversion in JavaScript?

* Converting one data type to another data type is called Type conversion.

## String to Int
```js
let num = "10";
console.log(typeof num);
```
## Here I am Using + operator to convert string to number.
```js
let numInt = +num;
console.log(typeof numInt);

let numParseInt = parseFloat(num);
console.log(typeof numParseInt);

let numNumber = Number(num);
console.log(typeof numNumber);
```
## String to Float
```js
let numFloat = '9.18';
console.log(typeof numFloat);

let convertFloat = parseFloat(numFloat);
console.log(typeof convertFloat);

let convertFloat2 = +numFloat;
console.log(typeof convertFloat2);

let convertFloat3 = Number(numFloat);
console.log(typeof convertFloat3);
```
## Float to Int
```js
let num1 = 9.18;
let floatInt = parseInt(num1);
console.log(floatInt);
```

## convert number to string
```js
var str = 20;
console.log(str.toString);
```


# parseInt & parseFloat Section 
>> parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

## parseInt: 

* parseInt is used to parse a string and convert it to an integer (whole number).
* parseFloat is used for converting to floating-point numbers, preserving the decimal part.

```js
const myString = "42";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42

const myString2 = "42.5";
const myNumber2 = parseInt(myString);
console.log(myNumber2); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
const myString3 = "42.5";
const myNumber3 = parseFloat(myString);
console.log(myNumber3); // Output: 42.5
```
## TODO  Key Differences:
* parseInt is used for converting to integers and ignores anything after the decimal point.
* parseFloat is used for converting to floating-point numbers, preserving the decimal part.
* Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

