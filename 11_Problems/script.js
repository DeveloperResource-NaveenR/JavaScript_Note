// Task 1

// You can given a variable marks and take the input from user.

// AA if marks is greater than 90.
// AB if marks is greater than 80 and less than or equal to 90.
// BB if marks is greater than 70 and less than or equal to 80.
// BC if marks is greater than 60 and less than or equal to 70.
// CC if marks is greater than 50 and less than or equal to 60.
// CD if marks is greater than 40 and less than or equal to 50.
// DD if marks is greater than 30 and less than or equal to 40.
// FF if marks is less than or equal to 30

// output

let marks = prompt('enter you marks')

if (marks > 90) {
    console.log("AA")
} else if (marks > 80 && marks <= 90) {
    console.log("AB")
} else if (marks > 70 && marks <= 80) {
    console.log("BB")
} else if (marks > 60 && marks <= 70) {
    console.log("BC")
} else if (marks > 50 && marks <= 60) {
    console.log("CC")
} else if (marks > 40 && marks <= 50) {
    console.log("CD")
} else if (marks > 30 && marks <= 40) {
    console.log("DD")
} else {
    console.log("FF")
}


// Task2

// You are given a variable, num.

// ONE, if num is equal to 1.
// TWO, if num is equal to 2 .
// THREE, if num is equal to 3.
// FOUR, if num is equal to 4.
// FIVE, if num is equal to 5.
// SIX, if num is equal to 6.
// SEVEN, if num is equal to 7.
// EIGHT, if num is equal to 8.
// NINE, if num is equal to 9.
// PLEASE TRY AGAIN, if num is none of the above.

// let num = prompt("enter number");

switch (num) {
    case 1:
        console.log('ONE');
        break;
    case 2:
        console.log('TWO');
        break;
    case 3:
        console.log('THREE')
        break;
    case 4:
        console.log('FOUR')
        break;
    case 5:
        console.log('FIVE')
        break;
    case 6:
        console.log('SIX')
        break;
    case 7:
        console.log('SEVEN')
        break;
    case 8:
        console.log('EIGHT')
        break;
    case 9:
        console.log('NINE')
        break;

    default:
        console.log('PLEASE TRY AGAIN')
}

// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let user_age = prompt("Enter your age:");
let eligible_age = 18;
let result = eligible_age - user_age;
if (user_age >= eligible_age) {
    console.log("You are old enough to drive");
} else {
    console.log(`you need to wait for the number of years is ${result}`)
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let my_age = prompt("Enter My age:");
let your_age = prompt("Enter your age:");
let results = my_age - your_age;
if (my_age >= your_age) {
    console.log(`you are ${results} years older than me`);
} else {
    console.log(`you are ${results} years elder than me`)
}


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
// ternary operator.

let a = 30;
let b = 20;

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else {
    console.log(`${a} is less than ${b}`)
}

(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)

