// conditions

// if

// syntax
if (condition) {
    //this part of code runs for truthy condition
}

// let num = 3
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// }

//  3 is a positive number

// syntax
if (condition) {
    // this part of code runs for truthy condition
} else {
    // this part of code runs for false condition
}

let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
    console.log(`${num} is a positive number`)
} else {
    console.log(`${num} is a negative number`)
}
//  -3 is a negative number


// else if

// syntax
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    //  code

}

let a = 0
if (a > 0) {
    console.log(`${a} is a positive number`)
} else if (a < 0) {
    console.log(`${a} is a negative number`)
} else if (a == 0) {
    console.log(`${a} is zero`)
} else {
    console.log(`${a} is not a number`)
}

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
    console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
    console.log('Go out freely.')
} else {
    console.log('No need for rain coat.')
}


// switch

switch (caseValue) {
    case 1:
        // code
        break
    case 2:
        // code
        break
    case 3:
        // code
        break
    default:
    // code
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tuesday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}

let nums = prompt('Enter number');
switch (true) {
    case nums > 0:
        console.log('Number is positive');
        break;
    case nums == 0:
        console.log('Numbers is zero');
        break;
    case nums < 0:
        console.log('Number is negative');
        break;
    default:
        console.log('Entered value was not a number');
}

// Ternary Operators

let age = prompt('Enter number');
age > 20
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')