let arr = [1, 2, 3, 4, 5]
arr.forEach(function printVal(val) {
    console.log(val);
})

//  arrow function
arr.forEach((val) => {
    console.log(val);
})

let str = ["navin", "vamshi", "ramu", "shanu"];

// str.forEach((val) => {
//     console.log(val.toUpperCase())
// })

//  callback has 3 paramter.
str.forEach((val, indx, arr) => {
    // console.log(val.toUpperCase())
    console.log(arr);
})

//  map

// arr.map((val) => {
//     res = val * val;
//     console.log(res);
// })

let newarr = arr.map((val) => {
    return val * val;
});

console.log(newarr);
console.log(arr)

// filter

let value = [2, 4, 5, 6, 7, 8, 9];
let newarrs = value.filter((val) => {
    return val % 2 === 0;
});
console.log(newarrs);

// reduce - give us single value output 

const output = value.reduce((res, curr) => {
    // return res + curr;
    return res > curr ? res : curr;
});

console.log(output);



