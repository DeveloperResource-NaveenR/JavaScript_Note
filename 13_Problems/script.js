// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0;
while (i < 10) {
    i++;
    console.log(i)
}

do {
    i++;
    console.log(i);
} while (i < 10)


// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i > 0; i--) {
    console.log(i)
}

let j = 10;
while (j > 0) {
    j--;
    console.log(j)
}

do {
    i--;
    console.log(i);
} while (i > 0)

// 3. Iterate 0 to n using for loop
let n = 100;
for (let i = 0; i < n; i++) {
    console.log(i)
}

//4. Use loop to print the 2 table:

// program to generate a multiplication table

// take input from the user
const numbers = parseInt(prompt('Enter an integer: '));
for (let i = 1; i <= 10; i++) {
    const result = i * numbers;
    console.log(`${numbers} * ${i} = ${result}`);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(`Even number ${i}`)
    }
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(`odd number ${i}`)
    }
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers

const number = parseInt(prompt("Enter positive number:"));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
} else {
    console.log("The number is not a prime number.");
}

// 8. Write a JavaScript program that displays the largest integer among two integers.

let num1, num2;

num1 = parseInt(prompt("Enter num1: "));
num2 = parseInt(prompt("Enter num2: "));

if (num1 == num2) {
    console.log(`${num1} is equal to ${num2}`)
} else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
} else {
    console.log(`${num1} is less than ${num2}`)
}

// 9. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

let a = 3;
let b = 5;
let c = -4;

if (a > 0 && b > 0 && c > 0) {
    alert("The sign is + ")
} else if (a < 0 && b < 0 && c < 0) {
    console.log("Ths sign is -")
} else if (a > 0 && b < 0 && c < 0) {
    console.log("Ths sign is +")
} else if (a < 0 && b > 0 && c < 0) {
    console.log("Ths sign is +")
} else {
    console.log("Ths sign is -")
}

// 10. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.


var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
    if (y > z) {
        console.log(x + ", " + y + ", " + z);
    }
    else {
        console.log(x + ", " + z + ", " + y);
    }
}
else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ", " + x + ", " + z);
    }
    else {
        console.log(y + ", " + z + ", " + x);
    }
}
else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ", " + x + ", " + y);
    }
    else {
        console.log(z + ", " + y + ", " + x);
    }
}

// 11. Write a JavaScript program to construct the following pattern, using a nested for loop

let n1 = 5;
let string = "";
for (let i = 1; i <= n1; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);