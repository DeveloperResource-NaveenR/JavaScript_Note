# What is a function? 
* In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. 

* Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

A function can be declared or created in couple of ways:
    
1. Declaration function
2. Expression function
3. Anonymous function
4. Arrow function

# Function Declaration

* Declare a function using function keyword, followed by the function name, parameters(if any) and function body.

Syntax:
```js
//declaring a function without a parameter
function functionName(parameter) {
  // code goes here
}
functionName(argument) // calling function by its name and with arguments
```
```js
function greet(){
  console.log("functions declarations)
}
```
# Function Invocation (Calling function)
* After declaring function you can invoke or call the function by it's name followed by parentheses.

* if function has parameter provide values(arguments) inside the parentheses.

```js
greet()
```

# Practice Problems

```js
function sum(){
  var a = 5;
  b = 10;
  console.log(a+b);
}
sum()
```
# Function with a parameter
* In a function we can pass different data types(number, string, boolean, object, function) as a parameter.

syntax
```js
// function with one parameter
function functionName(parameter) {
  //code goes her
}
functionName(argument) // during calling or invoking one argument needed
```

```js
function square(number) {
  return number * number
}

console.log(square(10))  // 10 is an argument
```
# Function with a argument

syntax
```js
functionName(argument) // during calling or invoking one argument needed
```

# Function without a parameter and return
* Function can be declared without a parameter.
Example:
```js
// function without parameter,  a function which make a number square
function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}

square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // a function has to be called by its name to be executed 
```
# Function with two parameters

syntax:

```js
// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName(parm1, parm2) // during calling or invoking two arguments needed

```

```js
// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))

```
# Function with many parameters

syntax:

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
```

```js
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //calling a function
console.log(sumArrayValues(numbers));
```
# Expression Function
* A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.

```js
// Function expression
const square = function sqa(n) {
  return n * n
}
console.log(square(2)) // -> 4
```
* Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

# Anonymous Function
* An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.
```js
const anonymousFun = function() {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}

var result = function (a, b) {
  console.log(a + b);
};

result(10, 15);
```

# Return Keyword in Function
* Function can also return values, if a function does not return values the value of the function is undefined.

* In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

```js

  function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }
console.log(addTwoNumbers())
```
# IIFE - immediately invoked function expression

# Self Invoking Functions
* Self invoking functions are anonymous functions which do not need to be called to return a value.

* Anonymous functions are often used as arguments to other functions

* Self invoking functions are anonymous functions which do not need to be called to return a value.

* An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

```js
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

# Introduced in ECMASCRIPT 2015

# Arrow Function
* Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
* Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n  // -> 4
```

```js
const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['india', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// "INDIA", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

```

```js
const printFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`
}

console.log(printFullName('naveen', 'rapelly'))

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('naveen', 'rapelly'))
```

# Function with default parameters
* Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

Syntax:

```js
// syntax
// Declaring a function
function functionName(param = value) {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

```js
function generateFullName(firstName = 'naveen', lastName = 'ram') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
```

```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```
* Let us see how we write the above functions with arrow functions
```js
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

```js
const greetings = (name = 'navin') => {
  let message = name + ', learn js'
  return message
}

console.log(greetings())
console.log(greetings('navin'))
```