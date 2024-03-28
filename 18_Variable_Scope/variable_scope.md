# Variable Scope
* Two types of scopes in JavaScript.
1. Global Scope
2. Local Scope

# Global Scope

* Variable declared out the function is called global scope.
* Global Variable can be used anywhere in the program.
```js
// Global variable
let name = "Hello";

// declaring the function
function fullName(){
    console.log(name);
}
fullName();
```
* variable name is a global variable. It means the variable name can be used anywhere in the program.
* Value of global variable can be changed in inside the function

```js

// Global variable
let name = "Hello";

// declaring the function
 function fullName() {
  name = "Welcome"
   console.log(name); //Welcome
}
// calling the function
fullName();
```

# Local Scope

* variable declared inside the function is called local scope.
* variable cannot be accessed outside the function.
```js
// program showing local scope of a variable
//Global Variable
let a = "hello";

function greet() {

    // Local Variable
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error
```
* variable a is a global variable and variable b is a local variable.
* The variable b can be accessed only inside the function greet.
* when we try to access variable b outside of the function, an error occurs.


# JavaScript Recursion
* Recursion is a process of calling itself. A function that calls itself is called a recursive function.

* The syntax for recursive function is:


```js
function recurse() {
    // function code
    recurse();
    // function code
}

recurse();
```

* recurse() function is a recursive function. It is calling itself inside the function.

A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

Once the condition is met, the function stops calling itself. This is called a base condition.

To prevent infinite recursion, you can use if...else statement (or similar approach) where one branch makes the recursive call, and the other doesn't.

```js
function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();

```

# Find Factorial

```js
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
```

```js
// Outpout: 
factorial(3) returns 3 * factorial(2)
factorial(2) returns 3 * 2 * factorial(1)
factorial(1) returns 3 * 2 * 1 * factorial(0)
factorial(0) returns 3 * 2 * 1 * 1

```
