// DOM Methods 

// 1. getElementById

//syntax
// document.getElementById('id')

let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // This give us HTML element

console.dir(firstTitle); // This gives us Document 

// checking with different id which is not present in dom

let firstTitle2 = document.getElementById("first");
console.log(firstTitle2); // output is null

console.dir(firstTitle2); // output is null


// 2. getElementsByClassName('className');

let Access_ClassName = document.getElementsByClassName("title");

console.log(Access_ClassName); // output --> HTML Collection

console.log(Access_ClassName.length) // length - 3

// It is possible to loop through all the HTMLCollection elements

for (let val = 0; val < Access_ClassName.length; val++) {
    console.log(Access_ClassName[val]);
}

// if you are accessing with class name which is not present in html dom element.

let access_class_name_not_present = document.getElementsByClassName("class");

console.log(access_class_name_not_present); // output Empty HTML Collection

// 3.getElementsByTagName('tagName');

let allTags = document.getElementsByTagName("h1");
console.log(allTags) // HTML Collection
console.log(allTags.length) // 4

for (let i = 0; i < allTags.length; i++) {
    console.log(allTags[i]);
}

// if you are accessing with class name which is not present in html dom element.

let allTags_not_present = document.getElementsByTagName("h1");
console.log(allTags_not_present) // Empty HTML Collection


// 4. querySelector('selector');

let firstTitle1 = document.querySelector('h1') // select the first available h1 element
console.log(firstTitle1);
let firstTitle3 = document.querySelector('#first-title') // select id with first-title
console.log(firstTitle3);
let firstTitle4 = document.querySelector('.title') // select the first available element with class title
console.log(firstTitle4);

// if you are accessing with class name which is not present in html dom element.

let firstTitle5 = document.querySelector('.title123') // select the first available element with class title
console.log(firstTitle5); //null 


// 5.querySelectorAll('selector');

const allTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page
console.log(allTitles); // nodeList is created
console.log(allTitles.length); // 4

// for loop

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i]);
}

//output

// h1#first-title.title
// h1#second-title.title
// h1#third-title.title
// h1

// if you are accessing with class name or tag name which is not present in html dom element.

const allTitles1 = document.querySelectorAll('h3') // selects all the available h1 elements in the page
console.log(allTitles1); // nodeList is created
console.log(allTitles1.length); // 0

// for loop

for (let i = 0; i < allTitles1.length; i++) {
    console.log(allTitles1[i]);
}

//output

// NodeList[]

// Properties

// 1. tagName

let tagName = document.querySelector("h1");
let result = tagName.tagName;
console.log(result); // H1


// if you are accessing with class name which is not present in html dom element. return **error**

// let tagName1 = document.querySelector("h3");
// let result1 = tagName1.tagName;
// console.log(result1); // H1

// 2 . innerText

let text = document.querySelector("h1");
text.innerText = "hello world"
console.log(text);

// if you are accessing with class name or tag name or id which is not present in html dom element. return **error**


// let text1 = document.querySelector("h3");
// text1.innerText = "hello world"
// console.log(text1);


// 3. innetHtml

let innerHtml = document.querySelector('h1');
innerHtml.innerHTML = "<ul>Hello</ul>"
console.log(innerHtml)

// 4. textContent

let content = document.querySelector('h1');
content.textContent = "Welcome";
console.log(content);


// Attributes:

const tit = document.querySelectorAll('h1')
tit[3].className = 'title'
tit[3].id = 'fourth-title'

// getAttribute

const attr = document.querySelector('div');
let id = attr.getAttribute("id"); // id --> attribute name
console.log(id); // box --> id value 


// setAttribute:

// syntax
// setAttribute('attrName', 'value');

// modified existing one class name
const titles12 = document.querySelectorAll("h1");
titles12[3].setAttribute('class', "newclass-123");

// new class name added 
const titles1 = document.querySelectorAll("h1");
titles1[4].setAttribute('class', "newclass-123");


// classList

titles1[4].classList.add("newclass-123", "navin");

let div = document.querySelector('div');
div.setAttribute('class', "navin-div");
div.classList.add("navin-div", "rapelli")

//Removing class using remove

div.classList.remove("navin-div")

// style 

const h12 = document.querySelector("h1");
h12.style.background = "yellow";

// inline style is added in the html this is high priority

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
        title.style.color = 'green'
    } else {
        title.style.color = 'red'
    }
})

