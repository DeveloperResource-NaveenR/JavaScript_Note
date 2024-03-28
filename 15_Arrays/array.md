# ARRAYS IN JAVASCRIPT

# what we will cover below topics
1. Creating Array/Accessing Element/Modifying Elements
2. How to Insert,Add,Replace and Delete Element in array.
3. Filter in an array
4. Array Methods
5. Array Traversal/Iterating Over Array
6. Searching in an Array
7. How to sort and compare an array

```js Imp
* Iterable - object where you can use the for-of loop
* Array-like object - Any object with length property and use indexes to access items
* Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
* typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.
```

**JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth**
#  Creating Arrays

👉 Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

## we can create an array in three ways.
1. Array Constructor
2. Array Literal
3. Empty Array

```js
//? Using Array constructor
let fruits1 = new Array('apple', 'orange', 'banana')
console.log(fruits1);  // [ 'apple', 'orange', 'banana' ]
console.log(typeof fruits1);  // object


//? Using array literal
let fruits2 = ["apple", "orange", "banana"];
console.log(fruits2); // [ 'apple', 'orange', 'banana' ]
console.log(typeof fruits2);  // object

// we can also create an empty array
let arr = [];
console.log(typeof arr);  // object

```
## Accessing Elements:
👉 Accessing Elements:  Array elements are accessed using zero-based indexes.

```js
console.log(fruits1[0]);  // apple
console.log(fruits1[1]);  //orange 
console.log(fruits1[2]);   // banana
```

## Modifying Elements:
👉 Modifying Elements: You can modify array elements by assigning new values to specific indices.

```js
fruits1[1] = "Graphs";
console.log(fruits1);
```
## Converting an Array to a String
👉 toString() method converts an array to a comma-separated string of its values.
```js
const str = fruits1.toString();
console.log(str); // apple,Graphs,banana
```
## Arrays Are Objects:
👉 Arrays in JavaScript are a special type of objects. The typeof operator returns “object” for arrays, but they are best described as arrays.

👉 Unlike regular objects, arrays use numeric indices to access their elements.

## Array Traversal / Iterating Over Arrays 👇
1. for loop 
2. while loop
3. for of loop
4. for in loop
5. forEach method
6. map 

## 1. for loop ❤️
👉 The for loop is a basic technique to iterate over an array.

👉 It uses the array’s length property to determine the number of iterations.

Syntax:
```js
for (let i = 0; i < array.length; i++) {
  // Access array elements using array[i]
  // Perform desired operations
}
```

## 2. while loop ❤️
👉 The while loop runs until a given condition is true.

👉 It’s similar to the for loop but with a more flexible condition.

Syntax:
```js
let i = 0;
while (i < array.length) {
  // Access array elements using array[i]
  // Perform desired operations
  i++;
}
```
## 3. for of loop ❤️
👉 The for-of loop simplifies array iteration by directly providing the array elements.

👉 It doesn’t require an index and is useful when you only need to access elements.

👉 The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

Syntax:
```js
for (const element of array) {
  // Access each element directly
  // Perform desired operations
}
```
Example:
```js
let city = ["mumbai","pune","bangalore","hyd","goa"];

for(let item of city){
    console.log(item);
}
```
## 4. for in loop ❤️
👉 The for...in loop is used to iterate over the properties (including indices) of an object. 

👉 **for in loop gives the index value** 

Syntax:
```js
for (const element in array) {
  // Access each element directly
  // Perform desired operations
}
```
Example:
```js
let city = ["mumbai","pune","bangalore","hyd","goa"];

for(let item in city){
    console.log(item); // it gives indexs 
}
```

## ❤️ Difference between for in and for of ❤️
👉 for...in: “o” for objects (iterates over keys).
👉 for...of: “o” for other (iterates over values).

## 5. forEach() Method ❤️
👉The arr.forEach() method is primarily used for iterating over array elements and executing a provided function once for each array element.

👉 forEach() method will not return anything. it's give undefined

👉 forEach() method It does not create a new array.

👉 Syntax:
```js
array.forEach(function(currentValue, index, array){

},thisValue);  // Your operation here

array.forEach((currentValue, index, array) => {
    // Your operation here
});
```
Example:
```js
let city = ["mumbai","pune","bangalore","hyd","goa"];
const citites = city.forEach((currentElement,index,arr) => {
    console.log(currentElement); // mumbai,pune ...
    console.log(index); // 0,1,2,3....
    console.log(arr); // ['mumbai','pune','bangalore','hyd','goa']
   // return `${currentElement}`; // undfiend
    
});
console.log(citites);
```

## 6.map() Method ❤️
👉 map method is also used for iterating over array elements, but its main purpose is to create a new array by applying a provided function to each element of the original array.
👉 It returns a new array with the results of applying the function to each element.
👉 map() method will keep original array as same.
👉 Using map() method we can modify the element in array.
Syntax:
```js
array.map((currentValue, index, array) => {
    // Your operation here
});
```
Example:
```js
const cities = city.map((currentElement,index,arr) => {
    return `my value ${currentElement}`;
    console.log(`${currentElement} ${index} ${arr}`);
});
console.log(cities);
console.log(typeof cities);
console.log(city);
```
## # Differences between forEach() and map() ❤️

| forEach() ❤️  | map() ❤️ |
| -------- | ------- |
| forEach method will not return anything it gives undefined | Returns the new array.    |
| ForEach Method will not create new array | map Method will create new array and original array will be same    |
| when you want to change the original array or modify the array then we should use forEach method   | Map method will create a new array and modify the array   |
| Iterates over array elements without creating a new array.   | Useful for transforming elements of the original array.   |
| Executes a provided function for each element.   |  Executes a provided function for each element.  |
| Useful for performing operations on each element without modifying the array.   |    |


👉 forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.
👉 side effect is we are modifying the current array that is side effect.
👉 map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

## Chaining ❤️
👉 forEach: It doesn't return a value, so it cannot be directly chained with other array methods.
👉 example:we have an array and we want to divide the array value with 2 and filter the array this is not possible using forEach()

👉 map: Since it returns a new array, you can chain other array methods after using map.

## Examples:


## Use Case ❤️
👉 forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

👉 map: Used when you want to create a new array based on the transformation of each element in the original array.

# 👇 How to Insert, Add, Replace and Delete Elements in Array(CRUD) 👇

1👉: push(): Method that adds one or more elements to the end of an array.

2👉: pop(): Method that removes the last element from an array.

3👉: unshift(): Method that adds one or more elements to the beginning of an array.

4👉: shift(): Method that removes the first element from an array.
```js
let fruits = ["apple", "orange", "mango", "grapes", "banana"];
// 1: push(): Method that adds one or more elements to the end of an array.
console.log(fruits.push("guava"));  //  ["apple", "orange", "mango", "grapes", "banana","guava"]
console.log(fruits); // ["apple", "orange", "mango", "grapes", "banana"]
// The push() method returns the new length. 

//? 2: pop(): Method that removes the last element from an array.
console.log(fruits.pop()); ["apple", "orange", "mango", "grapes"]
console.log(fruits); // ["apple", "orange", "mango", "grapes", "banana"]

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
console.log(fruits.unshift("guava")); 
console.log(fruits);

//? 4: shift(): Method that removes the first element from an array.
console.log(fruits.shift());
console.log(fruits);
```

#  what if, we want to add or remove anywhere in an elements 👇
👉 The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

👉 splice() Method will add or remove from original array.

👉 splice() Method will return array.

👉 syntax:
```js
splice(start, deleteCount, item1, item2, /* …, */ itemN)
// syntax
arr.splice(indexValue, deleteCount, replaceBy)
```
👉 Example:
```js
let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(2, 0, "graphs");
// fruits.splice(3, 1);
fruits.splice(3, 0,"papaya");
console.log(fruits);
```
# 👉 what if you want to add the element at the end
```js
fruits.splice(fruits.length, 0, "grapes");
console.log(fruits);
```
# Updating an element using splice() method
```js
let fruits = ["apple", "orange", "banana", "mango"];
const indexOfElement = fruits.indexOf("orange");
fruits.splice(indexOfElement,1,"KIWI");
console.log(indexOfElement)
```

# Searching and Filter in an Array 👇

> For Search we have - indexOf, lastIndexOf & includes 

# 1. indexOf Method 

👉 The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

👉 The indexOf() method searches for the first occurrence of a specified value in a string or an array.

👉 It returns the index (position) of the first occurrence of the value, or -1 if the value is not found.

👉 By default, it starts searching from the beginning of the array.


syntax:
```js
indexOf(searchValue, fromIndex)

// searchElement is the value to be searched.
// fromIndex is the index from which the search starts.
```
Example:
```js
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
const index = fruits.indexOf("banana"); // Returns 1
```
# 2: lastIndexOf Method 

👉 The lastIndexOf() method searches for the last occurrence of a specified value in a string or an array.

👉 It returns the index of the last occurrence of the value, or -1 if the value is not found.

👉 By default, it starts searching from the end of the array.

```js
arr.lastIndexOf(searchElement, fromIndex)
// searchElement is the value to be searched.
// fromIndex (optional) is the index from which the search starts.
```
Example:
```js
const arr = ["b", "d", "i", "b", "d", "f", "i", "b", "d", "g", "i"];

// get the index of 'd'
console.log(arr.lastIndexOf('d'));
// get the index of 'g'
console.log(arr.lastIndexOf('g'));
```

# 3. includes Method 

👉 The includes method checks whether an array includes a certain element, returning true or false.

syntax:

```js
arr.includes(searchElement, fromIndex)

// searchElement is the value to be searched.
// fromIndex is the index from which the search starts.
```
Example:
```js
const fruit = ["mango", "banana", "apple", "orange", "watermelon"]
console.log(fruit.includes("apple")); // true

const alphabets = ["a", "b", "c", "d", "e"];
console.log(alphabets.includes("a")); // true
console.log(alphabets.includes("a", 1)); // false
```
#  Filter In an Array 👇

# 1. find Method

👉 The find method is used to find the first element in an array that satisfies a provided condition. It returns the first matching element or undefined if no element is found.

👉  The find() method accepts a callback function where you can define the condition.

👉  The callback function returns true or false after checking some conditions over each and every element. If true is returned then the element is returned, else the next element is checked.

syntax:
```js
arr.find(callback(currentValue, index, arr), thisArg)
```
Example:
```js
const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const num = numbers.find((currentElement)=>{
    return currentElement>6;
});
console.log(num);
```
👉 find method type is number.

👉 If nothing is found then undefined is returned.

👉 The find() method return the element.

👉 The find() method does not return the index of the element which satisfies the condition to get index use findIndex() method.

# 2. findIndex Method

👉 The findIndex() method is the same as find() but it returns the index value of the element, not the value itself.

👉 If no such element exists then returns -1.

👉 The find() method return the index value.

👉 The findIndex() method accepts a callback function where you can define the condition.

```js
arr.findIndex(callback(currentValue, index, arr), thisArg)
```
Example:
```js
const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const num = numbers.findIndex((currentElement)=>{
    return currentElement>6;
});
console.log(num);

const arr1 = [1, 10, 2, 25, 5, 15];

//? method return the index of first element which is greater than 10
console.log(arr1.findIndex((element) => element > 10));

//? another example:
const numb1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const mapMethod = numb1.map((currentEle) => {
    return currentEle * 5;
});
console.log(mapMethod)
const num1 = mapMethod.findIndex((currentElement) => {
    return currentElement > 10;
});
console.log(num1);
```

# filter Method 

👉 The filter() method in javascript is used to create a new array with the elements of the same array if elements pass a certain condition.

👉 The filter() methods accept a callback function as an argument.

👉 The callback function returns true or false after checking some conditions over each and every element. If true is returned then that element is added to the new array, else discarded.

👉 Finally, a new array is returned with those added elements.

syntax:
```js
arr.filter((currentValue, index, arr) =>{
  // code goes here
}, thisArg)
// The argument currentValue is necessary and index and arr are optional.
```
Here we check if 6 is available in the array return other values expect 6
```js
const numb1 = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
let value = 6;
const filterValue = numb1.filter((currentEle) => {
    return currentEle !== value;
})
console.log(filterValue)
```

# find unique values in the array

```js
let unique = numb1.filter((currentEle, index, arr) => {
    console.log(index);
    // console.log(arr[index]);
    // console.log(arr.indexOf(currentEle));
    return arr.indexOf(currentEle) === index;
});
console.log(unique)

// another way 
// console.log(new Set(numb1)) // output will be in object format

// spread operator is introduced in ECMASCRIPT 2015 above
console.log([...new Set(numb1)])
```

# How to Sort and Compare an Array

# Sorting an Array
👉 The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings

👉 The sort() method in javascript sort the array element in ascending order according to the character's Unicode value. Means it convert its element to string and sort it by comparing the string in UTF-16 code.

Example:
```js
const fruit = ["mango", "banana", "apple", "orange", "watermelon"];
console.log(fruit.sort());
const num1 = [2, 321, 100, 1310, 43];
console.log(num1.sort());
console.log(num1.sort((firstElement, secondElement)=>{
  return firstElement - secondElement;
}));

const sortedNumbers = numbers4.sort((a, b) => a - b);
if(a>b) return 1  => switch the order
 if(b>a) return -1  => keep the order


const compareNumber = numbers4.sort((a,b)=>{
    if(a>b){
        return 1
    }else if(b>a){
        return -1
    }
});

console.log(compareNumber);

const compareNumber = numbers4.sort((a,b)=>{
    if(a>b){
        return -1
    }else if(b>a){
        return 1
    }
});

console.log(compareNumber);

```
# Reduce method
👉  The reduce() method in javascript reduce the array element to a single value, using a reducer function.

👉 The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument

syntax:
```js
arr.reduce(callback(accumulator, currentValue, currentIndex, array))
array.reduce(function callback(accumulator, currentValue, index, array) {
  // Your logic here
  // Return the updated accumulator value
}, initialValue);
```
👉 callback: A function that is called once for each element in the array.
👉 accumulator: The accumulated result of the previous iterations.
👉 currentValue: The current element being processed in the array.
👉 index (optioal): The index of the current element being processed.
👉 array (optional): The array reduce was called upon.
👉 initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

```js
const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);
```

# Methods in Array

# concat

👉 The concat() array method in javascript is used to merge 2 or more arrays or values into a single array.

👉 The concat() method does not change the original array but returns a new array by merging them.

syntax:
```js
var newArray = arr.concat(arg1, arg2, ...)
```

```js
const numbers = [1, 2, 3];
const characters = ['a', 'b', 'c'];
const booleans = [true, false];

// single argument
console.log(numbers.concat(characters));
// multiple argument
console.log(numbers.concat(characters, booleans));

```

# Spread Operator intoduced in ECMA2020

👉 spread operator (...) to merge multiple arrays and values into a single array.

```js
const numbers = [1, 2, 3];
const characters = ['a', 'b', 'c'];
const booleans = [true, false];

console.log([...numbers, ...characters]);
// multiple argument
console.log([...numbers, ...characters, ...booleans]);
// passing values
console.log([...numbers, 24, "John"]);
```

# entries Method

👉 The entries() method in javascript returns a new Array Iterator object that contains the key/value pairs for each index in the array.

👉 The entries() method does not change the original array but returns a new array iterator object.

👉 This iterator can be used to get the next element in the array by calling the next() method on the iterator object.

```js
arr.entries()
```

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator1 = arr.entries();
console.log(iterator1.next());
console.log(iterator1.next().value);
console.log(iterator1.next().value);

// using for...of loop
const iterator2 = arr.entries();
for (const [index, value] of iterator2) {
  console.log(index, value)
}
```

# every() Method

👉 The every() method in javascript executes a function for each element in the array and returns true if the function returns true for all elements.

👉 The original array is not modified by this method.

```js
arr.every(callback(currentValue, index, arr), thisArg)
```
```js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [22, 42, 86, 100, 4];

function isEven(num) {
  return num % 2 === 0;
}

console.log(arr1.every(isEven));
console.log(arr2.every(isEven));
```

# fill Method
👉 The fill() method in javascript returns a modified array by filling a specified index with the specified value.

👉 The original array is not modified by the fill() method.

```js
arr.fill(value);
arr.fill(value, start);
arr.fill(value, start, end);

// value: Value to be filled

// start(optional): Index from where the filling has to start. Its default value is 0.

// end(optional): Index where the filling is to be stopped.
```
Example

```js
const arr = ["a", "a", "a", "a", "a", "a", "a"];

// fill the whole array with "b"
console.log(arr.fill("b"));

// fill the array from index 2 to last with "c"
console.log(arr.fill("c", 2));

// fill the array from index 4 to index 6 with "d"
console.log(arr.fill("d", 4, 6));
```

# join Method

👉 The join() method in javascript joins all elements of the array as a string separated by commas or by some specified separator and returns it as a string.

👉 The function accepts 1 argument which is a separator. It is optional and its default value is a comma (",").

Syntax:
```js
arr.join(separator)
```
👉 This method is used to join the elements of the array as a string.

```js
const fruit = ["mango", "banana", "apple", "orange", "watermelon"];

// default separator (,)
console.log(fruit.join());
// blank separator
console.log(fruit.join(''));
// custom separator
console.log(fruit.join('-'));

```

# values Method In Javascript
👉 The values() method in javascript returns a new array iterator that contains values of each index in the array.
```js
const array1 = [1, "star", 34, true, 23];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
```

# reverse Method In Javascript

👉 The reverse() method in javascript reverse the array elements from first to last.
```js
const num = [1, 2, 3, 4, 5];
console.log(num.reverse());
```

# toString Method In Javascript

👉 The toString() method in javascript returns a string representing the elements of the array.
```js
const arr = [1, "star", 34, true, 23];
console.log(arr.toString());
```
# slice Method In Javascript

👉 The slice() method in javascript returns a new array by copying the calling array's elements in new the array.

👉 The slice() method accepts 2 arguments:

1. start: It is starting position to copy the element. It is optional, its default value is 0.
2. end: It is the ending position to copy the element. It is optional, its default value is the last index of the array.
```js
const num1 = [1, 2, 3, 4, 5];
const num2 = num1.slice();
const num3 = num1.slice(2);
const num4 = num1.slice(2,4);
console.log(num2);
console.log(num3);
console.log(num4);
```
# Array.from Method In Javascript

👉 The Array.from() method in javascript is used to convert an array like object to an array.

👉 The Array.from() method returns a new array and does not change the original array.

```js
const alphabets = "abcdefghijklmnopqrstuvwxyz";

// converting string to array
const arr = Array.from(alphabets);
console.log(arr);

const obj = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};
// converting object to array
const arr2 = Array.from(obj);
console.log(arr2);
```