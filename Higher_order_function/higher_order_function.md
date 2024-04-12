# Higher Order Function
* Higher order functions are functions which take other function as a parameter
* The function passed as a parameter is called callback.

# Callback

* A callback is a function which can be passed as parameter to other function

```js
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}
console.log(cube(callback, 3))
```
* Let us see were we use call back functions. For instance the forEach method uses call back.
```js
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers)) // 5
```

# Setting time

* In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

* setInterval
* setTimeout

# Setting Interval using a setInterval function

* we use setInterval higher order function to do some activity continuously with in some interval of time.
* The setInterval global method take a callback function and a duration as a parameter. 
* The duration is in milliseconds and the callback will be always called in that interval of time.

```js
// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```js
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s
```

# Setting a time using a setTimeout

* In JavaScript, we use setTimeout higher order function to execute some action at some time in the future. 
* The setTimeout global method take a callback function and a duration as a parameter. 
* The duration is in milliseconds and the callback wait for that amount of time.
```js
// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds

```

```js
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.
```

* JavaScript introduced lots of built in methods which can help us to solve complicated problems
* builtin methods take callback function. will see each of them forEach, map, filter, reduce, find, every, some, and sort

# forEach

* Iterate an array elements. We use forEach only with arrays. 
* It takes a callback function with elements, index parameter and array itself.

```js
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```js
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
output :
1
2
3
4
5
```

# map
* map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array

```js
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```
```js
/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```
# filter
* Filter: Filter out items which full fill filtering conditions and return a new array.

```js
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
```
# reduce
* Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value
```js
arr.reduce((acc, cur) => {
  // some operations goes here before returning a value
 return 
}, initialValue)
```
```js
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
```
# find: Return the first element which satisfies the condition

```js
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)
```
# findIndex: Return the position of the first element which satisfies the condition

```js
const names = ['navin', 'sanu', 'sandy', 'Bavish']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```
# some: Check if some of the elements are similar in one aspect. It returns boolean

```js
const names = ['navin', 'sanu', 'sandy', 'Bavish']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```