// 1. Declare a variable named challenge and assign it to an initial value 'JavaScript'.

let challenge = 'JavaScript';

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()

console.log(challenge.length);

// 4. Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substring(0, 3));

// 7. Slice out the phrase JavaScript from JavaScript.

// 8. Check if the string contains a word Script using includes() method

console.log(challenge.includes('Script'));

// 9.Split the string into an array using split() method

console.log(challenge.split())

// 10. Split the string JavaScript at the space using split() method

console.log(challenge.split(' '))

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str.split(' '));

// 12. Change JavaScript to Python using replace() method.

// console.log(challenge.replace('JavaScript', 'Python'));

// 13. What is character at index 4 in 'JavaScript' string? Use charAt() method.

console.log(challenge.charAt(4));

// 14. What is the character code of J in 'JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J')); //74

// 15. Use indexOf to determine the position of the first occurrence of a in Learn JavaScript

console.log(challenge.indexOf('a'));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in JavaScript.

console.log(challenge.lastIndexOf('a'));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let word = '  You cannot end a sentence with because because because is a conjunction';
console.log(word.indexOf('with'));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(word.lastIndexOf('conjunction'));

// 19. using search method

console.log(word.search('You'));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '.

console.log(word.trim())

// 21.Use startsWith() method with the string JavaScript and make the result true

console.log(word.startsWith('You'))  // false

// 22. Use endsWith() method with the string JavaScript and make the result true

console.log(word.endsWith('conjunction'))  // true

// 23. Use match() method to find all the a’s in JavaScript

console.log(word.match('a'));

// 24. Use concat() and merge 'love' and 'JavaScript' to a single string, 'love JavaScript'

let str1 = 'love'
console.log(str1.concat(' JavaScript'));

// 25. Use repeat() method to print JavaScript 2 times

console.log(str1.repeat(2));

let str12 = "Hello World";
let arr = Array.from(str12);
console.log(arr);

console.log("Learn to code".indexOf("")); // return 0 default value
console.log("Learn to code".indexOf("", 0)); // 0
console.log("Learn to code".indexOf("", 4)); // 4
console.log("Learn to code".indexOf("", 8)); // 8
console.log("Learn to code".indexOf("", 15)); // 13
console.log("Learn to code".indexOf("", 20)); // 13
console.log("Learn to code".indexOf("", 30)); // 13