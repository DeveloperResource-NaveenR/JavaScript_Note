// Array is collection of data types
// array allow to store duplicate element and different data type.


// Creating Array:

let arr = [10, 20, 30, 40, 50];
console.log(arr)
console.log(arr.length);

// Creating array in different form.

let array = new Array();
console.log(array);

// creating array with values.

let itemValue = [1, 2, 3, 4, 5, 6];
console.log("Item Value : ", itemValue);
console.log("item Value : ", itemValue.length);


//  array can have different data type:
const person = [
    'navin', 27,
    true
]
console.log(person);

// Accessing array items using index

let accessPersonDetails = person[0];
console.log(accessPersonDetails);

// Modifying array element

person[0] = "javascript";
console.log(person);

// looping over an array

let cities = ["mumbai", "delhi", "hyd", "Goa", "kolkata", "orrisa"];

// for (let arr of cities) {
//     console.log(arr)
// }

// for (let arr in cities) {
//     console.log(arr)
// }


// for (let i = 0; i < cities.length; i++) {
//     console.log(` index value ${i} and ${cities[i]}`)
// }

// for (item of cities) {
//     console.log(item);
// }

//? forEach Method

cities.forEach(function (currentEle, index, array) {
    console.log(currentEle + " is at index " + index)
});

//? map method

cities.map(function (currentEle, index, array) {
    console.log(currentEle + " is at index " + index)
});
console.log(cities)

// Methods to manipulate array

// 1. Push () This Method is used to add the item at end of the array.

cities.push('bangalore');
console.log(cities);

// 2. pop() This Method is used to delete the item at the end of the array.

cities.pop();
console.log(cities);

// 3. shift() This method is used to delete starting of an array item.

cities.shift();
console.log(cities);

// 4. unshift(); This method is used to insert at starting of array item.

cities.unshift("bangalore");
console.log(cities);

// 5. slice() This method is used to cut the item in a range.
// it take two arguments (starting index and ending index).
const numbers = [1, 2, 3, 4, 5]

console.log(numbers.slice()); // it will copy all item.
console.log(numbers.slice(0)); // it will return all the item.
console.log(numbers.slice(2, 4)); // 3,4 output it will not include the ending index value.

// splice() -- It take three parameter starting and number of item need to removed and number of item to be added.

let rm = numbers.splice(0, 1);
console.log(rm); // removed the first item.

console.log(numbers.splice(3, 3, 7, 8, 9));

let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(2, 0, "graphs");
fruits.splice(3, 1);
// fruits.splice(3, 0, "papaya");
console.log(fruits);

// update the element using splice method
const indexOfElement = fruits.indexOf("orange");
console.log(indexOfElement)
fruits.splice(indexOfElement, 1, "KIWI");
console.log(fruits)

// Join() This method is used to join in the array and return as a string.
console.log(typeof numbers.join(","))

// toString is used to convert array into the string.

console.log(numbers.toString());

// include method is used to check the item is exists in array or not.

console.log(numbers.includes(2)); // true


const numb = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const num = numb.find((currentElement) => {
    return currentElement > 6;
});
console.log(num);


const numb1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const mapMethod = numb1.map((currentEle) => {
    return currentEle * 5;
});
console.log(mapMethod)
const num1 = mapMethod.findIndex((currentElement) => {
    return currentElement > 10;
});
console.log(num1);

let value = 6;
const filterValue = numb1.filter((currentEle) => {
    return currentEle !== value;
})
console.log(filterValue)

let unique = numb1.filter((currentEle, index, arr) => {
    console.log(index);
    // console.log(arr[index]);
    // console.log(arr.indexOf(currentEle));
    return arr.indexOf(currentEle) === index;
});
console.log(unique)

// another way 
// console.log(new Set(numb1))

// spread operator is introduced in ECMASCRIPT 2015 above
console.log([...new Set(numb1)])

// Sorting an Array

const fruit = ["mango", "banana", "apple", "orange", "watermelon"];
console.log(fruit.sort());

// const nu = [2, 321, 100, 1310, 43];
// console.log(numb1.sort());

console.log(numb1.sort((firstElement, secondElement) => {
    firstElement - secondElement;
    if (firstElement > secondElement) {
        return -1;
    }
    if (secondElement > firstElement) {
        return 1;
    }
}));

const fruitss = ["mango", "banana", "apple", "orange", "watermelon"];

// default separator (,)
console.log(fruitss.join());
// blank separator
console.log(fruitss.join(''));
// custom separator
console.log(fruitss.join('-'));

const array1 = [1, "star", 34, true, 23];
const iterator = array1.values();
for (const value of iterator) {
    console.log(value);
}

const nu = [10, 15, 20, 30];
/* Iterate over this array and find the total sum. */
// const res = nu.reduce((accum, currentEle) => {
//     return accum + currentEle;
// }, 0);

// console.log(res);

let sum = 0;
for (let i = 0; i < nu.length; i++) {
    sum = sum + nu[i]
}
console.log(sum);