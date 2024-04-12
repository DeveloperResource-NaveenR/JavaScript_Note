# What is JavaScript Object?

object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

```js
var person = {     --> person -> object Name
  firstName: "John", --> Property 
  lastName : "Doe",  
  age      : 50  --> age is --> key, [50] --> Value
};
```
Javascript is an object-based language, everything in javascript is an object or can be made an object using a new keyword

1. Numbers can be made object using the new keyword
2. Boolean can be made object using the new keyword
3. Strings can be made object using the new keyword
4. An array is an object
5. A function is an object
6. Date is an object
7. Regex (Regular Expression) is an object
8. Maths is an object
9. Objects are always objects

# How to create object in javascript

1. javascript object literal
2. javascript Object.create method
3. javascript object constructor
4. object using class

# 1. Javascript Object Literal

To create an object in javascript is using the object literal.

It is a comma separated key-value pair enclosed in curly braces ({}) assigned to a variable

syntax: empty object
```js
let person = {};
```
The properties are added to an object in form of key-value pair, the key should be a string and the value could be any data type

key-value pairs are separated by a comma (,).

```js
let person = {
  // adding properties to an object
  firstName: "John",
  lastName : "Doe",
  age      : 50
};
// checking type
console.log(typeof person); // object
```

the object person has three properties: 'firstname', 'lastname', and 'age'

# 2. Using Object.create method

The Object.create() method is used to create an object from an existing object. It creates a new object with the same properties as the existing object.

It uses an existing object as a prototype of the newly created object

Syntax
```js
Object.create(object);
```

```js
// prototype object
let person = {
  firstname: "steve",
  lastname: "jobs",
  fullName: function() {
    return "My name is " + this.firstname + " " + this.lastname;
  }
}
// create a new object
let newPerson = Object.create(person);
// change the value of the new object
newPerson.firstname = "John";
newPerson.lastname = "Smith";

console.log(newPerson.fullName());
```
# 3. Javascript Object Constructor

Another way to create an object is using the object constructor

The object constructor is a function that is used to create an object. It is defined using the new keyword

The object constructor is used to create an object with a specific set of properties and methods.

If you want to create multiple objects of the same type then it is better to use the object constructor.

Here are the steps to create an object using the object constructor:

1. Create a Javascript function that will be used to create an object.
2. The function should have a parameter that is the object properties.
3. Now use the new keyword with the function to create an object.

```js
// creating a function to create an object

function person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

// creating an object using the function
let person1 = new person("steve", "jobs", 25);
console.log(person1);

let person2 = new person("john", "smith", 35);
console.log(person2);
```
To add a method to an object, use the prototype property of the function.

```js
// creating a function to create an object
function person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

person.prototype.fullName = function() {
  return "My name is " + this.firstname + " " + this.lastname;
}

let person1 = new person("steve", "jobs", 25);

console.log(person1.fullName());
```

# 4. Javascript Object Using Class

```js
// creating a class to create an object
class person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  fullName() {
    return "My name is " + this.firstname + " " + this.lastname;
  }
}

// creating an object
let person1 = new person('John', 'Smith');

console.log(person1.fullName());
```
# Accessing properties of Object

1. Using the dot operator.
2. Using the bracket operator.

# 1. dot operator
Using the dot operator, you can access the properties of an object by writing the object name followed by a dot and the property name.
```js
objectName.propertyName
```
```js
let car = {
  name: "Ford",
  color: "Black",
}

// accessing the property
console.log(car.name);
console.log(car.color);
```
# 2. bracket operator

```js
//syntax
objectName[propertyName]
```
Note: If you want to access the value of a property whose name is a variable or property name is a space separated string, then you can use the bracket operator.

```js
let car = {
  name: "Ford",
  color: "Black"
}

// accessing the property
console.log(car["name"]);
console.log(car["color"]);
```
# Adding properties to an Object

You can add a new property to an existing object simply by object name followed by a dot and the property name and assigning the value to the property.

```js
let car = {
  name: "Ford",
  color: "Black"
}

console.log(car);

// adding a new property
car.model = "Mustang";
console.log(car.model);
```
you can use square bracket notation
```js
let car = {
  name: "Ford",
  color: "Black"
}

console.log(car);

// adding a new property
car['model'] = "Mustang";
console.log(car.model);
```
# Deleting properties from an Object
You can delete a property from an object by using the delete operator.

```js
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}
console.log(car.model);

// deleting a property
delete car.model;
console.log(car.model);
```
# We can add dynamic keys in an object
```js
  let idType = "studentId";
  
  let student = {
    [idType]: "A123456", // Dynamic key based on idType
    sName: "Vinod",
    sAge: 29,
    isStudent: true,
    greet: function () {
      console.log(
        `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
      );
    },
  };
  
  student.greet();
  ```
# Looping through an Object

# 1. Using for...in loop
The for...in loop access the properties of an object by iterating through the object.
```js
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}

// looping through the object
for (let key in car) {
  console.log(key, car[key]);
}
```

# 2. Using Object.keys() loop

The Object.keys() method returns an array of a given object's property names. Which can be used to loop through the object
```js
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}

// looping through the object
for (let key of Object.keys(car)) {
  console.log(key, car[key]);
}
```
# 3. Using Object.values() loop

The Object.values() method returns an array of a given object's property values. Which gives us direct access to the values of the object
```js
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}

// looping through the object
for (let value of Object.values(car)) {
  console.log(value);
}
```
# 4. Using Object.entries() loop

The Object.entries() method returns an array of a given object's property names and values

```js
let car = {
  name: "Ford",
  color: "Black",
  model: "Avenger"
}

// looping through the object
for (let entry of Object.entries(car)) {
  console.log(entry);
}
```
# Javascript object Method

object methods are the functions that are defined inside the object and operate on it to perform a certain task.

object method is part of the object in the form of a key-value pair.

```js
let Money = {
  earning: 12000,
  spent: 9000,
  remaining: function () {
      return this.earning - this.spent + " is remaining money.";
    }
}
var restMoney = money.remaining();
```
# this keyword in javascript object
this keyword in an object represents the object itself. It is used to access the properties of the object. When you say this.propertyName it means object.propertyName.

```js
var number = {
  num1: 10,
  num2: 15,
  sum: function(){
    return this.num1 + this.num2
  }
}
console.log(number.sum());
```

# Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.
  
In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.

# Passing by value: 
When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.
```js
  let a = 10;
  const modifyValue = (x) => (x = 20);
  
  console.log(modifyValue(a));
  console.log(a);
```
# Passing by reference: 
When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.
```js
  let obj = { id: 5, name: "kodyfier" };
  
  let obj1 = obj;
  
  obj1.name = "Naveen R";
  console.log(obj1);
  console.log("original", obj);
``` 
To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator (...):

# Comparison by Reference

Two objects are equal only if they refer to the same object.

Independent objects (even if they look alike) are not equal:
```js
  const obj1 = { name: "vinod" };
  const obj2 = { name: "vinod" };
  const obj3 = obj1;
  
  // const isEqual = obj1 == obj2 ? true : false;
  const isEqual = obj1 == obj3 ? true : false;
  console.log(isEqual);
```
# JSON (JavaScript Object Notation)

JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa

```js
  let student = {
    id: 1,
    sName: "Vinod",
    sAge: 29,
    isStudent: false,
    greet: function () {
      console.log(
        `hey my id is ${student.identity} & my name is ${student.sName}`
      );
    },
  };
  
  let jsonData = JSON.stringify(student);
  console.log(jsonData);
  let parsedObject = JSON.parse(jsonData);
  console.log(parsedObject);
```

# "this" Object

In JavaScript, the this keyword refers to an object.
  
Which object depends on how this is being invoked (used or called).
  
The this keyword refers to different objects depending on how it is used:
  
1.  In an object method, this refers to the object.
2. Alone, this refers to the global object.
3. In a function, this refers to the global object.
4. In a function, in strict mode, this is undefined.
5. In an event, this refers to the element that received the event.
6. Methods like call(), apply(), and bind() can refer this to any object.
  
# Note
this is not a variable. It is a keyword. You cannot change the value of this.
```js
("use strict");
x = 5;
console.log(x);

function callme() {
  console.log(this);
}

callme(); // try to run on browser console

//? todo  Let's check the this keyword values in an object methods

// Regular Function Expression:
const obj = {
  name: "Kodyfier",
  greet: function () {
    console.log(this);
  },
};

obj.greet();

//? In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
const obj = {
  name: "Kodyfier",
  greet() {
    console.log(this);
  },
};

obj.greet();

// Fat Arrow Function
const obj = {
  name: "Naveen R",
  greet: () => {
    console.log(this);
  },
};

obj.greet();
```
# Objects Useful Methods
```js
const product = {
    id: 1,
    name: "Laptop",
    category: "Computers",
    brand: "ExampleBrand",
    price: 999.99,
    stock: 50,
    description:
      "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
    image: "image link will be added during projects",
  };
  ```

# 1: Object.keys(): 
Returns an array containing the names of all enumerable own properties of an object.
```js  
  let keys = Object.keys(product);
  console.log(keys);
```
# 2: Object.values(): 
Returns an array containing the values of all enumerable own properties of an object.
```js
  let values = Object.values(product);
  console.log(values);
```
# 3: Object.entries(): 
Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
```js
  let entries = Object.entries(product);
  console.log(entries);
```
# 4: Object.hasOwnProperty(): 
Returns a boolean indicating whether the object has the specified property as an own property.
```js
  console.log(product.hasOwnProperty("name")); // Output: true
  console.log(product.hasOwnProperty("isStudent")); // Output: false
```
# 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
 ```js
  const target = { a: 1, b: 5 };
  const source = { b: 3, c: 4 };
  const mergedObject = Object.assign(target, source);
  console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }
```
# 6: Object.freeze(): 
Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
```js
  Object.freeze(product);
  product.id = "5656";
  console.log(product);
```