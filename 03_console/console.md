# What is JavaScript Console Object?

* JavaScript console object provides access to the browser's debugging console.
* It is the property of the window object.
* We can access the console object using window.console or just console.
* In JavaScript console object is a built-in object that provides developers with a way to interact with the browser's console or terminal.
* It is commonly used for debugging and testing JavaScript code, but it can also be used to display information to the user.

# List of JavaScript Console Methods

# console.log();

* This method is used to print a message on the web browser's console.
* This method can print strings, numbers, arrays, and objects.
```js
console.log("hello world");
```
# console.info();

* It is used to display a message to the browser console.
* This is very similar to console.log(); but it is used by developers for permanent messages to output to the console in their code.
```js
console.info("Learn Javascript");
```
# console.warn();

* This method is used to print the warning message on the browser console.
* This method takes a single argument of a message to be displayed on the browser's console.
```js
console.warn("this is a warning");
```
# console.error();

* This console method is used to print an error message in the console.
* It is mainly used for testing and troubleshooting purposes when we want to display any errors.
* It takes a single argument of any type like String or Object.
```js
 console.error("code is breaking");
```
# console.count();

* This method is used to print a message on the console as the number of times it is called.
* Or It counts the number of every count and prints it on the browser console.

```js
for (a = 1; a <= 5; a++) {
    console.count();
}
```

# console.assert();

* This console method is used to print messages on the browser's console based on the conditions.
* It prints the message on the console when the assertion is failed. And if the assertion is true then nothing happens.

```js
let a = 20;
let b = 3;
console.assert(b>a);* 
```
# console.table();

* This method is used to print any object in the form of a table in the console of a web browser.
* To print the object in the form of a table you can use the code given below.
```js
console.table({'name': 'naveen', 'role': 'Frontend Developer'});
```
# console.clear();

* This console method is used to clear the messages from the console.
* This method will clear all the previous logs.
```js
console.clear();
```
# console.debug();

* This method outputs a message to the console with the log-level debug.
```js
console.debug('This is debug');
```
# Time, Timelog and TimeEnd

* This method is used to start a timer to track the logs in the browser.
* console.time(); method is used to start the timer and console.timeEnd(); to end the timer or to stop the timer.
* And the console.timeLog(); is used to log the current value of the timer.

```js
console.time("answer time"); //other block of codes

console.timeLog("answer time"); //other block of codes

console.timeEnd("answer time");
```