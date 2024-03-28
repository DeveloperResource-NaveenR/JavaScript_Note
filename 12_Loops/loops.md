# Loops 
* Loops are used to run the code again and again.

# Type of Loops.

1. For Loop
2. While Loop
3. Do-While Loop
4. for-of-loop
5. for-in-loop

# For Loop:

* for loop is used to check the three condition while executing the code.

Syntax:
```js
for(initialization,condition,increment/decrement){
    // code to be executed
}
```
```js
// Example:

// Initialize a for statement with 5 iterations
for (let i = 1; i <= 5; i++) {
  // Print each iteration to the console
  console.log("i value = ", i); // 1 2 3 4 5
}

// sum of 1 to 5 numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum of total = ", sum);

```
# While Loop

* while loop will check the condition first.
* in while loop end of the syntax there is not semi colon (;)

## Synax
```js
initialization
while(condition){
    //code
    increment/decrement
}
```

```js
let i = 1;
while (i <= 5) {
  console.log("i value = ", i);
  i++
}
```

# Do-while loop

* first execute the code then check the condition.
* in do-while loop end of the syntax there will be semi colon (;)

# syntax
```js
initialization
do{
    //code
    increment/decrement
}while(condition);

```
```js
let j = 1;
do {
  console.log("j value = ", j);
  j++;
} while (j <= 5);
```
# for-of loop
* for-of loop is used in string and array.
* this is used for iteration 


```js
declare string / array.
for(initialization, of string/array value){
    // code
    //increment/decrement
}
```
```js
let str = "JavaScript";
// calculate the total character in the string
let count = 0
for (let value of str) {
  console.log(value);
  count++
}
console.log("total character of the string = ", count)

```

# for-in loop --> Iteration 
* This is used for object.

```js

let person = {
  name: "prainv",
  age: 20,
  gender: "male"
}

for (let key in person) {
  // console.log("key for object = ", key);
  // to print key and value.
  console.log("key for object = ", key, "value of person = ", person[key]);
}

```
# Break
* Break is used to interrupt a loop
```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break
  }
  console.log(i)
}

// 0 1 2

```
# continue

* We use the keyword continue to skip a certain iterations.

```js
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```