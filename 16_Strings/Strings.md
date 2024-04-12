# What is String?

String in JavaScript are fundamental data type that represent the sequence of character.

It can be used to represent text, numbers, and other information. Example "Hello World", "1234", "true", "null", etc.

# Creating a string

String can be created with single quote or double or backticks.

Single quote - 'Hello World'

Double quote - "Hello World"

Backticks - \`Hello World\`

```js
// String literal
// Single quotes
var str1 = 'Hello World';
console.log(str1); // Hello World

// Double quotes
var str2 = "Hello World";
console.log(str2); // Hello World

// Backticks
var str3 = `Hello World`;
console.log(str3); // Hello World

// Checking the type of variable
console.log(typeof str1, typeof str2, typeof str3); // string, string, string
```
# String constructor

It is also possible to create a string object using the String() constructor.It is used to create a string object. It takes one argument, which is converted to a string.

```js
/ String constructor
// String object
var str = String('Hello World');

console.log(str);

// Checking the type of variable
console.log(typeof str);
```

# String Format or literals

Backticks allow us to format a string and embed any javascript expression into the javascript string, by wrapping it in ```${...}```.

Expression inside ```${...}``` will be evaluated and output will be returned.
```js
var sum = `10 + 15 = ${10 + 15}`;
console.log(sum);
```
# Multiline String
```js
var webStack = `Languages:
  * HTML
  * CSS
  * Javascript`;
console.log(webStack);
```

# Properties in String

We have only one property in the string.

## Length Property

To get the length of a string we have a property called length. It returns the number of characters in the string.

```js
var alphabets = "abcdefghijklmnopqrstuvwxyz";

// using length property
var length1 = alphabets.length; // output: 26
console.log(length1);
```

# Accessing characters in string

To access a character in a string, you can use square bracket notation just like an array. 
The index of the character is the position of the character in the string. 
The first character has index 0, the second character has index 1...

```js
var alphabets = "abcdefghijklmnopqrstuvwxyz";

// accessing characters
var char1 = alphabets[0]; // output: 'a'
console.log(char1);

var char2 = alphabets[1]; // output: 'b'
console.log(char2);

var last = alphabets[alphabets.length - 1]; // output: 'z'
console.log(last);
```
# String Concatenation

Concatenation is the addition of 2 or more strings into a single string

String can be concatenated using the + operator between two different strings

```js
var str1 = "Hello ";
var str2 = "world";

// concatenation
var result = str1 + str2; // Hello world

// Output
console.log(result);
```

# Escape Character
In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

| Code | Result | Description  |
| :--- | :----- | :----------- |
| \'   | '      | Single quote |
| \"   | "      | Double quote |
| \\   | \      | Backslash    |

```js
// let textStr = "My name is "Naveen R " & I am a Full Stack Developer. ";
let text =
  "My name is ' Naveen R ' & \\ I am a \"Full Stack \" Developer. ";
// let text = 'My name is " Naveen R " & I am a Full Stack Developer. ';

console.log(text);
```

# JavaScript String Methods

We have classified methods into some types

# String Search Methods

1. indexOf()

2. lastIndexOf()

3. search()

4. match()

5. matchAll()

6. includes()

7. startsWith()

8. endsWith()

# 1. indexOf() Method

The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.

This is case-senstitve if we provide in small letter then output is -1

indexOf() Method Check in forword direction

syntax:
```js
str.indexOf(searchValue, fromIndex);
```

searchValue - It is the string you are searching for. If the search string is not given then the method searches for 'undefined'.

fromIndex (optional)- It is the index from which the search starts. If the index is not given then the search starts from the beginning of the string.

```js
let str = "Hello World";
console.log(str.indexOf("world")); //-1
console.log(str.indexOf("World")); // 6

console.log(str.indexOf()); // -1
console.log("undefined".indexOf()); // 0

console.log(str.indexOf("")); //0

//To check how we get 6 index
let arr = Array.from(str);
let index = arr.map((currEle,index)=>{
    return `${currEle}  - ${index}`
})
console.log(index);
```
if you see the result W index is 6 it only check the first character of the string.

Example With Index Search 
```js
var quote = "Learn to code.";

console.log(quote.indexOf("Learn", 0));
console.log(quote.indexOf("to", 4));
console.log(quote.indexOf("learning", 12));
```
indexOf method is case sensitive, which means it treats the same string with different cases as different.

Example:
```js
const quote = "Learning to code is learning";
console.log(quote.indexOf("learning")); // 20
console.log(quote.indexOf("Learning")); // 0
console.log(quote.indexOf("code")); // 12
console.log(quote.indexOf("Code")); // -1
```
## Strange return value

indexOf() method returns strange value when search string is empty ('').
```js
console.log("Learn to code".indexOf("")); // return 0 default value
console.log("Learn to code".indexOf("", 0)); // 0
console.log("Learn to code".indexOf("", 4)); // 4
console.log("Learn to code".indexOf("", 8)); // 8
console.log("Learn to code".indexOf("", 15)); // 13
console.log("Learn to code".indexOf("", 20)); // 13
console.log("Learn to code".indexOf("", 30)); // 13
```
when the search string is empty and the starts index is greater than the string length then it always returns the value of the string length.

# 2. lastIndexOf() 

The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

 If no such string is present in the calling string then it returns -1.

 Note - This method starts checking from the end of the string and returns the first occurrence index from backward.

Syntax:
```js
string.lastIndexOf(searchValue);
string.lastIndexOf(searchValue, position);
```
Example:

```js
var string = "learning to code is learning to create and innovate";
var search_str = "learning";

// return last occurance of word "learning"
console.log(string.lastIndexOf(search_str)); // 20
console.log(string.lastIndexOf("king")); // -1

const str1 = "To do or not to do";
console.log(str1.indexOf("Do")); // -1
console.log(str1.lastIndexOf("do")); // 16
```
lastIndexOf() method is case sensitive

## Using indexOf() and lastIndexOf() Method

 The indexOf() method is similar to the lastIndexOf method but it returns the first matching string rather than the last.

# search()

The search() method searches a string for a string (or a regular expression) and returns the position of the match.

If there is a match with the regular expression then it returns the index of the first match, if there is no match then it returns -1.

Returns the index number where the first match is found. Returns -1 if no match is found.

Syntax:

```js
str.search(regex);
```
Example

## Example 1: Using string as RegExp
```js
var string1 = "To do or not to do.";
// search "do" in the string
var index1 = string1.search("do");
console.log(index1); // output: 3

console.log(string1.charAt(index1)); //d
```
## Example 2: Using regex
```JS
let string2 = "Keep work track in to-do list.";

let index2 = string2.search(/\w+-\w+\s/); // return 19

console.log(index2);

// character at index
console.log(string2.charAt(index2));  // t

```
## Example 3: No argument passed    

```js

let string3 = "To do or not to do.";
// returns 0
let index3 = string3.search();
/* or 
// let index = string.search('');
*/

console.log(index3); // 0
```
## Example 4: No Match Found

```js
let string4 = "To do or not to do.";
// returns -1

let index4 = string4.search(/go/);

console.log(index4); // -1

```
## Example 5: Case-insensitive search

To search in the string case-insensitively use the /i flag with the regular expression.

```js
// To search in the string case-insensitively use the /i flag with the regular expression.
let string5 = "To do or not to do.";

// case insensitive
let index5 = string5.search(/Do/i);

console.log(index5);

// character at index
console.log(string5.charAt(index5)); //3
```

# Difference between search() and indexOf() in javascript

# search Method

search method uses a regular expression to find a match in the string

The search method is slower compared to the indexOf method

search method doesn't provide starting search position

# indexOf Method

indexOf method uses a string to find a match in the string

indexOf method is faster compared to the search method

In the indexOf method, you can have starting search position as the second argument. Example str.indexOf('book', 10)

# match() 

Returns an array of the matched values or null if no match is found.
match() method in JavaScript matches a series of characters from a string using a regular expression.

Syntax:
```js
string.match(regex);
string.match(string);
```

Example:
```js
var str6 = "learning to code is learning to create and innovate";
// not a regular expression
var matches = str6.match("to");
console.log(matches);

output :
/*
[
  'to',
  index: 9,
  input: 'learning to code is learning to create and innovate',
  groups: undefined
]*/
```
The js converts the normal text into regular expression text.match(/to/); without the g flag

## regular expression
```js
var matches = str6.match(/to/g);
console.log(matches); // [ 'to', 'to' ]
```
>Note: /to/g as a regular expression which matches all the to from the string and returns as an array

## Example 3: Nothing passed in the match method
```js
var matches = str6.match();
console.log(matches); 

// output
/*[
  '',
  index: 0,
  input: 'learning to code is learning to create and innovate',
  groups: undefined
]*/
```
If nothing matches in the string then it always returns null and out will be in array format

## Example 4: Matching all integers
```js
const str8 = "Adding 15 an 25 gives 40.";
const regexp1 = /[0-9]/g; // matching numbers
const matches1 = str8.match(regexp1);
console.log(matches1); // [ '1', '5', '2', '5', '4', '0' ]
```
Match() method if you want to get a string or a set of similar strings present in a string. You can use regular expressions or simple strings to match a string. It returns an array of matching elements if no element is matched then returns null.

# matchAll()

Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

```js
let text12 = "Hello JavaScript, welcome to  JavaScript";
let matchRes = text12.matchAll("JavaScript");
console.log(matchRes); //Object [RegExp String Iterator] {} empty iterator
// console.log(...matchRes); 
/*
[
    'JavaScript',
    index: 6,
    input: 'Hello JavaScript, welcome to  JavaScript',
    groups: undefined
  ] [
    'JavaScript',
    index: 30,
    input: 'Hello JavaScript, welcome to  JavaScript',
    groups: undefined
  ]

*/

for(let item of matchRes){
    console.log(item);
}

for(let index of matchRes){
    console.log(index.index);
}

```

# includes()

Returns true if the string contains the specified value, and false otherwise.

```js

let strText = "Hello JavaScript, welcome to our world best JavaScript course";
let includeResult = strText.includes("J");
console.log(includeResult);
```

includes() method is case sensitive, which means it treats string with the same characters but the different cases as different.

# startsWith()

The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false

```js
let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
let result = text.startsWith("Hello");
console.log(result);
```
## start position for the search can be specified
```js
let result = text.startsWith("welcome", 18);
let result = text.startsWith("welcome", 17);
console.log(result);
```

# endsWith()

The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
```js
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.endsWith("welcome");
// let result = text.endsWith("course");
console.log(result);
```

# Extracting String Parts

1. slice()
2. substring()

# 1.slice()

If you want to extract a part of the string between the desired index values, then use the slice() method.

The slice method extracts a part of a string and returns it as a new string, without changing or modifying the original string.

The slice method uses the start and end index as parameters to extract a part of the string.

Syntax
```js
str.slice(startIndex);

str.slice(startIndex, endIndex);
```
Example
```js
var str = "Naveen is learning JavaScript";
// 0 is used as startIndex
// if startIndex is not provided
// or it can't be converted to a number
console.log(str.slice());
console.log(str.slice("hello"));
console.log(str.slice(NaN));

var substr = str.slice(5, 10);
console.log(substr); // output: "is le"

// only using start index
// will extract string to the end
substr = str.slice(5);
console.log(substr); // output: "is learning JavaScript"
substr = str.slice(5,);
console.log(substr); // output: "is learning JavaScript"

// If the value of startIndex is greater than the length of the string then an empty string is returned.
console.log(str.slice(50));
console.log(str.slice(str.length + 1));
```
# substring

Extracts a portion of the string based on starting and ending indices.
camelCase is used to separate words, substring is not to be intended as Sub String but as Substring

Syntax
```js
substring(indexStart) // index starts with 0
substring(indexStart, indexEnd)
```
substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring()

```js
const str = "Learning to code";

// substring between index 2 and index 5
console.log(str.substring(2, 5));
// substring between index 0 and index 4
console.log(str.substring(0, 4));

// using substring() method without endIndex
console.log(str.substring(2));
console.log(str.substring(5));
```

In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

# Extracting String Characters
There are 3 methods for extracting string characters:

1. The charAt(position) Method
2. The charCodeAt(position) Method
3. The at(position) Method

# 1. charAT() : 

The charAt() method returns the character at a specified index (position) in a string

```js
let text = "Hello JavaScript, welcome";
let result = text.charAt(6);
let result = text.charAt(-6);
console.log(result);
```

# 2. charCodeAt() 

The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

```js
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.charCodeAt(6);
console.log(result);
```

# 3. ES2022 introduced the string method at()

The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().

```js
let text = "Hello JavaScript, welcome to our world best JavaScript course";
let result = text.at(-6);
console.log(result);
```

The at() method is a new addition to JavaScript.

It allows the use of negative indexes while charAt() do not.

Now you can use myString.at(-2) instead of charAt(myString.length-2)

# Replacing String Content

The replace method is used to replace a specified value with another value.

```js
const str = "Hello, World!";
const newStr = str.replace("World", "JavaScript");
console.log(newStr); // Outputs: Hello, JavaScript!
```
# Case-Insensitive Replacement

To perform a case-insensitive replacement, you can use the i flag in the regular expression

```js
 let originalString = "Hello, World! How are you, World?";
let replacedString = originalString.replace(/world/gi, "vinod");
console.log(replacedString);
```
# Other Useful Methods

# toUpperCase and toLowerCase
Converts the string to uppercase or lowercase.

```js
const str = "JavaScript";
console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
console.log(str.toLowerCase()); // Outputs: javascript
```
# trim: 
Removes whitespace from both ends of the string.
```js
const str = "   Hello, World!   ";
console.log(str.length);

let trimStr = str.trim();
console.log(trimStr);
console.log(trimStr.length);
```

# split 
Splits the string into an array of substrings based on a specified delimiter.
```js
const str = "apple,orange,banana";
let strArr = str.split(",").reverse().join();
console.log(strArr);
```
### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'JavaScript'**.
2. Print the string on the browser console using __console.log()__
3. Print the __length__ of the string on the browser console using _console.log()_
4. Change all the string characters to capital letters using __toUpperCase()__ method
5. Change all the string characters to lowercase letters using __toLowerCase()__ method
6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method
7. Slice out the phrase *JavaScript* from *JavaScript*.
8. Check if the string contains a word __Script__ using __includes()__ method
9. Split the __string__ into an __array__ using __split()__ method
10. Split the string JavaScript at the space using __split()__ method
11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.
12. Change JavaScript to Python using __replace()__ method.
13. What is character at index 4 in 'JavaScript' string? Use __charAt()__ method.
14. What is the character code of J in 'JavaScript' string using __charCodeAt()__
15. Use __indexOf__ to determine the position of the first occurrence of __a__ in Learn JavaScript
16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in JavaScript.
17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__
20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' JavaScript '.
21. Use __startsWith()__ method with the string *JavaScript* and make the result true
22. Use __endsWith()__ method with the string *JavaScript* and make the result true
23. Use __match()__ method to find all the __a__’s in JavaScript
24. Use __concat()__ and merge 'love' and 'JavaScript' to a single string, 'love JavaScript'
25. Use __repeat()__ method to print JavaScript 2 times

