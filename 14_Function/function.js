// Creating function

//  function declaration.
function showMessages() {
    console.log("hello world");
}

// calling function
showMessages();

// Local variable

function localVariableName() {

    // creating local variable

    let text = "Hello world";
    console.log(text);

}
localVariableName();

// accessing local variable outside the function

// gives u error.
// console.log(text);


// Global Variable

let fullName = "john";
function myFunction() {
    // local variable
    let lastName = "jelly";

    // changing the global variable
    fullName = "navin";

    console.log(lastName + fullName);
}
// printing global variable before calling in the function.

console.log(fullName);

// calling function
myFunction();

// printing global variable after the global variable changed inside the function.

console.log(fullName);

//  example name variable is declared inside the function then it is shadows the outer one.

// example:

// global variable declared.
let lastName = "johnny";
function insideFunction() {
    // local variable declared with same name as global variable.
    let lastName = "vamshi";

    let msg = lastName + " love JS";

    console.log(msg);

}

// calling function 

insideFunction();

// this will print from global declared variable 
// This function use the local variable and ignored the global variable.

console.log(lastName);

// Function Parameters

// we can pass value to a function using parameters.
// function can have one or more parameter.
// value will be passed by the calling code.

// example:

function parameterPassing(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

// calling function with to argument.

parameterPassing(10, 20);

// Return a Value From a Function

function parameterPassing2(num1, num2) {
    let result = num1 + num2;
    return result;
}

let rs = parameterPassing2(10, 90);
console.log(rs);


//  function expression.

const square = function (n) {
    return n * n;
}
console.log(square(2))

// Self Invoking Functions

let anony = (function (n) {
    return n * n;
})(10)
console.log(anony);


//  Arrow function.

const sum = n => {
    return n * n
}

console.log(sum(4));