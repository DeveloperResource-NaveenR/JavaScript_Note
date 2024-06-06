# What is a function? 
* In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. 

* Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

A function can be declared or created in couple of ways:
    
1. Declaration function
2. Expression function
3. Anonymous function
4. Arrow function

## What is Function declaration ?

Declare a function using function keyword, followed by the function name, parameters(if any) and function body.

Function declarations are hoisted, which means that the JavaScript interpreter moves them to the top of their scope, before any code is executed. This means that you can call a function before it is defined in your code.

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
## What is Function Invocation (Calling function)
* After declaring function you can invoke or call the function by it's name followed by parentheses.

* if function has parameter provide values(arguments) inside the parentheses.

```js
greet()
```

Practice Problems

```js
function sum(){
  var a = 5;
  b = 10;
  console.log(a+b);
}
sum()
```
## What is Function expression ?
* A function expression is a way to define a function by assigning it to a variable. It is similar to a function declaration, but instead of using the function keyword, a function expression is assigned to a variable using the assignment operator (=).

Function expressions are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code

```js
// Function expression
const square = function sqa(n) {
  return n * n
}
console.log(square(2)) // -> 4
```
* Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable.

## What is Anonymous function ?
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

## What is Return Keyword in function
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
## IIFE - immediately invoked function expression

## Self Invoking Functions
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

## What is Arrow function ?

An arrow function is a alternative syntax for defining a function. It is also known as a "fat arrow" function because it uses the "=>" symbol to define the function. Arrow functions were introduced in ECMAScript 6 (ES6) and are considered more concise and easier to read than traditional function expressions or declarations.

Arrow functions have a number of syntax variations depending on the number of arguments and the complexity of the function body.

Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

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
## Difference between function declaration and function expression ?

In JavaScript, there are two ways to define a function: function declarations and function expressions. Both methods allow you to create reusable code, but there are some key differences between them.

Function Declarations:

function are defined using the function keyword, followed by the function name, a list of parameters, and the function body. are hoisted,which means that the JavaScript interpreter moves them to the top of their scope before any code is executed. This means that you can call a function before it is defined in your code. The name of the function is required.

Function Expressions:

function are defined by assigning a function to a variable using the assignment operator (=).are not hoisted, which means that the JavaScript interpreter does not move them to the top of their scope before any code is executed. This means that you cannot call a function before it is defined in your code.The name of the function is optional, it can be anonymous, but it can be named as well.

Here's an example of a function declaration:

```js
function greet() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"
```

And here's an example of a function expression:

```js
let greet = function() {
  console.log("Hello, world!");
}

greet(); // Output: "Hello, world!"

```

## Difference between function expression and arrow function ?

A function expression is a way of defining a function in JavaScript using the function keyword, such as:

```js
let myFunction = function(parameters) {
    // code to be executed
}

```

An arrow function, also known as a "fat arrow" function, is a shorthand syntax for defining a function in JavaScript and it uses the "=>" symbol, such as:

```js
let myFunction = (parameters) => {
    // code to be executed
}

```

There are some differences between function expression and arrow function,

Arrow functions do not have their own this, they use this of the surrounding scope.

- Arrow functions do not have their own arguments object, they use arguments object of the surrounding scope.
- Arrow functions can't be used as constructors.
- Arrow functions can't be used with the new keyword.
- Arrow functions can't be used as generators.

In general, arrow functions are shorter and easier to read than function expressions, but they have some limitations. It's a matter of preference which one to use, depending on the specific use case.


## What is Function calling from other function ?

In JavaScript, a function can be called from within another function by simply invoking the function by its name, followed by parentheses to include any necessary arguments.

For example:

```js
function outerFunction() {
  console.log("This is the outer function.");
  innerFunction();
}

function innerFunction() {
  console.log("This is the inner function.");
}

outerFunction();

```

In the example above, the outerFunction calls the innerFunction by its name, innerFunction(), and thus the innerFunction is executed.

When the outerFunction is called, it will log "This is the outer function." and then call innerFunction, which will log "This is the inner function."

## What is function as values ?

In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as a number or a string. This means that they can be assigned to variables, passed as arguments to other functions, and returned from functions.

For example, a function can be assigned to a variable:

```js
let myFunction = function() {
  console.log("This is my function.");
};

```

It can also be passed as an argument to another function

```js
function callFunction(func) {
  func();
}

callFunction(myFunction);
```

It can also be returned from a function:

```js
function returnFunction() {
  return function() {
    console.log("This function is being returned.");
  }
}

let returnedFunction = returnFunction();
returnedFunction();

```

In the above example, the returnFunction returns an anonymous function that is assigned to the variable returnedFunction, which can then be invoked by invoking returnedFunction();

In JavaScript, functions are also objects, and they have additional properties and methods that can be accessed and used like any other object.

## What are parameters in JavaScript ?

In JavaScript, parameters are variables that are used as placeholders for the values that are passed to a function when it is called. These values are known as arguments. When a function is called, the arguments are assigned to the corresponding parameters in the function definition.

```js
// function with one parameter
function functionName(parameter) {
  //code goes her
}
functionName(argument) // during calling or invoking one argument needed
```

For example, consider the following function definition:

```js
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this

```js
let result = add(5, 3);
```

In this case, the value 5 is assigned to the parameter x and the value 3 is assigned to the parameter y

* In a function we can pass different data types(number, string, boolean, object, function) as a parameter.


## What are arguments in JavaScript ?

In JavaScript, arguments are the values passed to a function when it is called. These values are assigned to the corresponding parameters in the function definition.

syntax
```js
functionName(argument) // during calling or invoking one argument needed
```

For example, consider the following function definition:

```js
function add(x, y) {
  return x + y;
}
```

In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this:

```js
let result = add(5, 3);
```

In JavaScript, arguments are the values passed to a function when it is called. These values are assigned to the corresponding parameters in the function definition.

For example, consider the following function definition:

```js
function add(x, y) {
return x + y;
}
```
In this example, the function add takes two parameters, x and y. When the function is called, the values passed as arguments are assigned to these parameters, like this:
```js
let result = add(5, 3);
```
In this case, the value 5 is passed as the first argument and the value 3 is passed as the second argument to the function add.

JavaScript also provides the arguments object inside the function, which is an array-like object that contains all the arguments passed to the function

```js
function myFunction() {
  console.log(arguments);
}

myFunction(1, "hello", true);
```

In this example, myFunction is called with three arguments: 1, "hello" and true, and the arguments object inside the function contains [1, "hello", true]

It's worth noting that the arguments object is not an array and it doesn't have array methods like slice, map, filter etc. However, it can be converted to an array using Array.from(arguments) or using spread operator [...arguments]


### Function without a parameter and return
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
### Function with two parameters

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

It's important to note that function declaration should be defined before they are called, otherwise it will throw an error.

### Function with many parameters

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


### Function with default parameters
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
