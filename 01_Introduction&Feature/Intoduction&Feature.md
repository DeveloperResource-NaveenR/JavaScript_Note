# JavaScript Introduction and History

## What is a programming language?

A programming language is a set of instructions and rules that a computer can understand and execute. It is used to create software, apps, and other computer programs. Common examples include Python, Java, C++, and JavaScript.

## What is high level programming language?

A high-level programming language is a type of programming language that is designed to be easy for humans to read and write. It provides a higher level of abstraction from the computer's hardware and is typically easier to learn and use than low-level languages. Examples of high-level languages include Python, Java, C#, and JavaScript.

## What is machine level language or Low level language?

A machine-level language, also known as low-level language, is a type of programming language that is closer to the machine's hardware and operates directly on the computer's processor. It is less human-readable and requires more knowledge of the computer's architecture. Examples of low-level languages include assembly language and machine code.


## Introduction of JavaScript

JavaScript is a programming language that is mainly used to create interactive and dynamic user interfaces for websites and web applications. It can be used to add behavior to HTML pages, such as responding to user actions, creating animations, and manipulating the content and layout of a page. JavaScript can also be used on the server side using technologies like Node.js. It is a high-level, interpreted programming language that is supported by all major web browsers. JavaScript is widely used for creating interactive front-end web development, adding interactive maps, creating web and mobile apps and for creating complex web-based systems.

## History of javascript

JavaScript was created in 1995 by Brendan Eich, a programmer at Netscape Communications Corporation. It was initially called Mocha and then changed to LiveScript before finally being named JavaScript. It was first released in the Netscape Navigator 2.0 web browser as a way to add interactivity and dynamic content to websites. In 1996, JavaScript was submitted to the European Computer Manufacturers Association (ECMA) and became an ECMA standard, and later an international standard under ISO/IEC. The language has since evolved and is now supported by all major web browsers, as well as on the server-side with technologies like Node.js. JavaScript is now one of the most widely-used programming languages on the web, and has also become popular for creating desktop and mobile applications.

## What is ECMA ?

ECMA is the European Association for Standardizing Information and Communication Systems. It is a standards organization that develops and publishes technical standards for a wide range of information and communication systems, including programming languages such as JavaScript. The organization was founded in 1961 and is based in Switzerland. It is responsible for the standardization of many technologies including ECMAScript (ECMA-262) which is the standard for JavaScript. The goal of ECMA is to promote and facilitate the use of these standards in order to improve interoperability and encourage innovation in the industry.

The following are some of the most widely-used versions of ECMAScript:

- ECMAScript 1 (release in 1997) - First edition

- ECMAScript 2 (release in 1998) - Editorial changes

- ECMAScript 3 (released in 1999) - This version introduced regular expressions, try-catch exception handling, and other features.

- ECMAScript 5 (released in 2009) - This version added features such as strict mode, JSON support, and additional methods for arrays and objects.

- ECMAScript 6 (released in 2015) - Also known as ECMAScript 2015, this version introduced major changes such as the addition of arrow functions, template literals, and the let and const variable declarations.

- ECMAScript 2016 (released in 2016) - This version introduced the Array.prototype.includes() method and the Array.prototype.padStart() and Array.prototype.padEnd() method.

- ECMAScript 2017 (released in 2017) - This version introduced the Object.values(), Object.entries() and Object.getOwnPropertyDescriptors() method and async/await syntax for asynchronous programming.

- ECMAScript 2018 (released in 2018) - This version introduced the Rest/Spread properties, Asynchronous Iteration, Promise.prototype.finally() method.

- ECMAScript 2020 (released in 2020) - This version introduced features such as globalThis, nullish coalescing operator, optional chaining operator, BigInt and String.prototype.matchAll() method.

- ECMAScript continues to evolve and new versions are planned to be released every year, with new features and improvements.

## JavaScript Features

### High level language

A high-level programming language is a type of programming language that provides a higher level of abstraction from the computer's hardware and is designed to be more human-readable and easier to use than low-level languages. Examples of high-level languages include Python, Java, C#, and JavaScript. High-level languages are often used for general-purpose programming, and they often provide a higher level of functionality and convenience than low-level languages.

### Garbage Collected

Garbage collection is a feature of Javascript where the runtime system automatically manages the memory used by the program. It periodically checks for and frees memory that is no longer being used by the program. This eliminates the need for the programmer to manually manage memory allocation and deallocation, which can be a source of bugs and memory leaks. Garbage collection is a technique used in many modern programming languages like Java, C#, Python, Ruby, among others to manage the memory allocation and deallocation. This is a key feature of these languages, as it reduces the risk of memory-related bugs, improves performance and increases developer productivity.

### Interpreted Language (Just in time compiler)

JavaScript is an interpreted language, which means that the code is not compiled into machine-readable code before it is executed. Instead, the code is read and executed line-by-line by a JavaScript engine such as V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox) or Chakra (used in Edge) .

JIT or Just-In-Time compilation is a technique used by JavaScript engines to improve the performance of interpreted languages like JavaScript. JIT compilation is a way of converting JavaScript code into machine code at runtime, typically just before it is executed. This allows the JavaScript engine to execute the code faster and more efficiently, as the machine code can be directly executed by the CPU. This is done dynamically at runtime, hence the name Just-In-Time. This technique improves the performance of JavaScript and allows it to run large and complex applications.

### Multi Paradigm

JavaScript is a multi-paradigm programming language, which means it supports several programming paradigms such as:

- Object-oriented programming (OOP) - JavaScript supports classes, objects, inheritance, and encapsulation through the use of prototypes.
- Functional programming - JavaScript supports the use of first-class functions and closures, making it easy to use functional programming techniques.
- Event driven programming - JavaScript supports the event based programming in which events like mouse click, keypress can be handled.
- Imperative programming - JavaScript supports the use of statements that change a program's state, and can be used in an imperative style.

JavaScript's flexibility and support for different paradigms make it a versatile language that can be used for a wide range of tasks, from simple scripts to complex web applications. This also allows developers to use the best approach for their specific use case, and to write more expressive, maintainable and efficient code.

### Prototype based function

In JavaScript, prototypes are a way of implementing object-oriented programming (OOP) concepts such as inheritance and encapsulation. A prototype is an object that serves as a template for creating other objects. Each object in JavaScript has a prototype, which can be accessed using the \_\_proto\_\_ property.

When a property or method is accessed on an object, the JavaScript engine first looks for it on that object. If it is not found, it then looks for it on the object's prototype, and so on, until it reaches the top of the prototype chain. This is called "prototype-based inheritance"

This prototype-based approach to OOP in JavaScript differs from class-based OOP, which is used in languages like Java, C#, and C++. In class-based OOP, objects are instances of classes, which define the properties and methods that the objects will have. In prototype-based OOP, objects inherit properties and methods from other objects directly, without the need for classes.

This approach to OOP in JavaScript allows for more flexibility and expressiveness in solving problems and makes it easy to add or change behavior of an object without having to change the object's definition.

### First Class Function

In JavaScript, a first-class function is a function that can be treated like any other value, such as a number or a string. This means that a first-class function can be:

- Assigned to a variable
- Passed as an argument to a function
- Returned as a value from a function

This is in contrast to languages that have restrictions on how functions can be used. For example, in some languages, functions can only be used as subroutines and cannot be passed as arguments or returned as values.

First-class functions in JavaScript make it easy to use functional programming techniques, such as higher-order functions and closures, which allow for more expressive, flexible, and reusable code. This is a key feature of JavaScript, which allows it to be used for a wide range of tasks, from simple scripts to complex web applications.

It is also one of the reason why JavaScript is also called as Functional Programming Language.

### Dynamically Typed/ Dynamic

In JavaScript, a variable's type is determined at runtime, rather than being explicitly set by the programmer. This is known as dynamic typing or dynamic language.

In a statically typed language, variable types are set at compile time, and cannot be changed later on. This means that if a variable is declared as an integer, it can only hold integers and trying to assign anything else will result in an error.

In contrast, in a dynamically typed language like JavaScript, variables don't have a fixed type. A variable can hold any type of value, and its type can change during the execution of the program. For example, a variable can be assigned a number value and then later be reassigned a string value without any issues.

This can make the code more flexible and easier to write, but it can also make it harder to catch errors early on. Because of this, JavaScript provides typeof operator which can be used to check the type of a variable at runtime.

This dynamic feature of JavaScript also allows for more expressive, flexible, and reusable code, making it easy to use for a wide range of tasks, from simple scripts to complex web applications.

for example:

```javascript
   let x = 10; // type will be number
   x = "learnjavascript"; //type will be string
   x = false; //type will be boolean
```

### Single Threaded ?

In JavaScript, a single-threaded model means that only one operation can be executed at a time. JavaScript runs on a single thread, which means that only one task can be executed at a time.

This is in contrast to multi-threaded languages, which allow multiple threads to run simultaneously and can perform multiple tasks in parallel.

Single-threaded programming model has an advantage that it is less complex and easier to reason about, since there's only one call stack and one heap to worry about. It also ensures that the program state is always consistent and predictable.

However, it also has a drawback that it can lead to performance issues when running long-running or heavy tasks, as it can block the execution of other tasks. To overcome this issue, JavaScript provides mechanisms such as Web Workers and Asynchronous programming which allows to run heavy tasks in a different thread, without blocking the main thread.

In summary, JavaScript single-threaded model allows it to be simple and predictable, but also limits its performance when it comes to heavy workloads.

