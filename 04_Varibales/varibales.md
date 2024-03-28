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

# Scope of a Variable

The scope of a variable is determined by the location where it is declared. It can be declared in the global scope, in a function, in a loop.

1. Global Scope - The variable is accessible in the entire program
2. Local Scope - The variable is accessible only in the function where it is declared

```js
var user = "John"; // global scope
function sayHello() {
  console.log(user);
}
sayHello();
```

# 2. Local Scope

```js
function sayHello() {
  var user = "John"; // local scope
  console.log(user);
}
sayHello();
// undefined 👇
// console.log(user);
```

# Interview Questions:
## 1 what are variables used for in javascript programs?

Variables are used to store values in a program to be used later on.

## 2.How many types of variables are there in JavaScript?

There are 5 types of variables in JavaScript: numbers, strings, booleans, arrays, and objects.

## 3. What is a global variable JavaScript?

Global variables are variables that are accessible in the entire program.

## 4. What is a local variable JavaScript?

Local variables are variables that are accessible only in the function where they are declared.


## 5. What is scope of a variable in JavaScript?

The scope of a variable is the area of the program where it can be used. It can be used in the entire program or only in a specific part of the program.




