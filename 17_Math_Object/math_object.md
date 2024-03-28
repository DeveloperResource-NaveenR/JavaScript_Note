# Math Object in JavaScript
In javascript, Math is a built-in object which has many properties and methods that are used to deal with mathematical constants and functions like PI, sin, cos, etc.

All the methods and properties of Math are static, meaning you can directly use methods and properties without creating objects. example Math.PI, Math.sin(x)

Static methods and properties belong to the class not to its object. All the methods and properties can be called on Math as an object.

Math works with the Number type. It doesn't work with BigInt.

# 1: Constants:
## Math.PI: Represents the mathematical constant Pi (π).
```js
const piValue = Math.PI;
console.log(piValue);
```

# 2. Basic Operations:

## Math.abs(): The Math.abs() static method returns the absolute value of a number or in simple, how far the number is from 0. It will be always positive
```js
console.log(Math.abs(5));
console.log(Math.abs(-115));
```
# Math.round(x): Rounds a number to the nearest integer.
```js
const roundedValue = Math.round(3.7);
console.log(roundedValue);
```
# Math.ceil(x): Returns the value of x rounded up to its nearest integer:
```js
const ceilValue = Math.ceil(3.7);
console.log(ceilValue);
```
# Math.floor(x): Returns the value of x rounded down to its nearest integer.
```js
const floorValue = Math.floor(3.7);
console.log(floorValue);
```
# Math.trunc(x): Returns the integer part of x:
```js
const truncValue = Math.trunc(3.7);
console.log(truncValue);
```
# Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
```js
const truncValue = Math.trunc(-3.7);
const floorValue = Math.floor(-3.1);
console.log(truncValue);
console.log(floorValue);
```
<!-- todo Notes: -->
No matter how many chars are there after decimal, they all will always return only number before the decimal.

round rounds to the nearest integer.

floor always rounds down.

ceil always rounds up.


# 3. Exponential and Logarithmic Functions:

# Math.pow(x, y): Returns the value of x to the power of y.
```js
console.log(Math.pow(2, 5));
console.log(2 ** 5);
```

# Math.sqrt(): Math.sqrt(x) returns the square root of x:
```js
let squareRoot = Math.sqrt(25);
console.log(squareRoot);
```
# Math.log(x) returns the natural logarithm of x.
```js
let logResult = Math.log(1);
let logResult = Math.log(2);
console.log(logResult);
```
# Math.log2(x) returns the base 2 logarithm of x.
```js
let logResult = Math.log2(8);
 console.log(logResult);
```
# Interview Question

# Generate Random number
# Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
```js
console.log((Math.random() * 100).toFixed(3));
```