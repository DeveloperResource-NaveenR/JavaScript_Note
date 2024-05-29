# What are variables?

* Variables act as container that can store the data.
* variables in JavaScripts are let, var, const are used to declare the variables.
* When a variable is assigned a value (data), the memory space will be filled with that data
 
> To declare a variable, we use **var**, **let**, or **const** keywords.

# JavaScript Variable Naming Rules

* Variable name can contain letter,digit,underscore and dollar sign.
* variable cannot start with a digit.
* variable name are case-senstivie which means "naveen" and "Naveen" both are different.
* we cannot use reserved keyword as variable name in javascript.
* variable name should not contain space and special character expect underscore and dollar sign.

**Example of valid and InValid variables**
```js
var 1abc; // invalid
var _1abc; // valid
var _1_abc; // valid
var _1_abc_; // valid
var $ = 5; // valid
var _$ = 5; // valid
var _1_abc$ = 5; // valid
var _ = "hello"; // valid
var cat123$ = "Some cats"; // valid
var cat123_ = "Some cats"; // valid
var dog@12 = "Some Dog"; // invalid
var abc = 10; // valid
var Abc = 11; // invalid
// abc and Abc are different
```  

## Example of Declaring Variable 
```js
let firstName = "Naveen";
let city = "Mumbai";
let age = 20;
let isMarried = false;
console.log(firstName,city,age,isMarried);
```
* Variable can also be declare in one line

**Example**

```js
let userName="naveen",userCity="mumbai", userAge=20;
console.log(userAge,userName,userCity);
```

# variables

# **let**

* it is a block-scoped variables.
* the let keyword is introduced in ES6 in 2015 and it's alternative is var keyword.
* the value of let variable can be changed.
```js
let a = 5;
console.log(a);
```
# **var**
* variable declared with var have function scope or global scope depending on where they are declared.
* var is used to declare the variable.
* two variable name cannot be same.
```js
var name = "naveen";
var age = 25;
console.log(name, age);

// multiple variable assignment in same line
var fruit = "Apple", price = 50;
console.log(fruit, price);
```
# How to change a variable?

You can also change the value stored in a variable.

```js
var name = "naveen";
var changeName = "Naveen";
console.log(name)
console.log(changeName);
```


# **const**

* const is used to declare variable whose values cannot be changed once it is declared.
* variable using const must be initialized during the declaration.
* The const keyword was also introduced in ES6 and const variable are block scoped.
```js
const a = 10;
console.log(a);
```

## What are the differences between let, const and var?

In JavaScript, var, let, and const are all used to declare variables, but they have different scoping rules and behavior.

- var: Variables declared with var are function scoped, which means that they are only accessible within the function in which they are declared. If a variable is declared with var outside of any function, it becomes a global variable and can be accessed from anywhere in the code. Variables declared with var can be reassigned new values at any time.

- let: Variables declared with let are block scoped, which means that they are only accessible within the block in which they are declared. Variables declared with let can also be reassigned new values at any time.

- const: Variables declared with const are also block scoped, similar to let. The main difference is that variables declared with const cannot be reassigned new values after they have been initialized. This means that once a variable is declared with const, its value is constant and cannot be changed.

In summary, var is function scoped and can be reassigned, let and const are block scoped and const can't be reassigned.

let and const were introduced in ECMAScript 6 (ES6), and are recommended to use over var as they provide better variable scoping and prevent accidental reassignments.

## When to use let, const and var?

When deciding which keyword to use when declaring a variable in JavaScript, consider the following guidelines:

- Use const when you know that a variable's value will not change. This helps prevent accidental reassignments and makes the code more readable by indicating that the variable's value is constant.

- Use let when you know that a variable's value will change, but it will only be used within a specific block of code. This helps to limit the scope of the variable and prevent naming conflicts.

- Use var only when necessary. It is function scoped and its behavior is similar to let but it's considered as legacy and not recommended to use in modern javascript development.

It's also worth noting that const does not make the variable immutable, just the reference to it, if the variable is an object or an array, you can still change its properties or elements.

In summary, prefer const over let when you don't need to reassign the value, and use let when you are going to reassign. Avoid using var unless you need its function-scoped behavior.




