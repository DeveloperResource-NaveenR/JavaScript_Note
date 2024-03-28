// Loops

// for

// syntax:
// for (initialization; condition; increment / decrement) {
//   // code to be executed
// }

// Example:

// Initialize a for statement with 5 iterations
for (let i = 1; i <= 5; i++) {
  // Print each iteration to the console
  console.log("i value = ", i); // 1 2 3 4 5
}

// example:

// sum of 1 to 5 numbers

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("sum of total = ", sum);

// While Loop

// syntax:
// initialization
// while(condition){
//     //code
//     increment/decrement
// }

let i = 1;
while (i <= 5) {
  console.log("i value = ", i);
  i++
}

// do-while loop
/*
initialization
do{
  //code
  increment/decrement
}while(condition);
*/

let j = 1;
do {
  console.log("j value = ", j);
  j++;
} while (j <= 5);

//  for-of loop

// for(initialization, of string/array value){
//   // code
//   //increment/decrement
// }

let str = "JavaScript";
// calculate the total character in the string
let count = 0
for (let value of str) {
  console.log(value);
  count++
}
console.log("total character of the string = ", count)

// for-in loop.

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


// break
// Break is used to interrupt a loop

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break
  }
  console.log(i)
}

// 0 1 2

// continue
// We use the keyword continue to skip a certain iterations.

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
