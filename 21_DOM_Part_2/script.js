let newEle = document.createElement('h1');
newEle.className = "title";
newEle.style.fontSize = '24px';
newEle.textContent = "Creating HTML Element using JavaScript";
console.log(newEle);

// for loop to create multiple element.
// let title;
// for (let i = 0; i < 3; i++) {
//     title = document.createElement('h2');
//     title.className = 'title-class';
//     title.style.fontSize = '24px'
//     title.textContent = i;
//     console.log(title)
//     document.body.appendChild(title);
// }

// let newbtn = document.createElement('button');
// newbtn.innerText = "Click Me"
// console.log(newbtn);

// let arrag = document.querySelector("div");
// arrag.append(newbtn)


let append = document.querySelector("h2");
append.append(newEle);

append.prepend(newEle);

append.before(newEle);

append.after(newEle);

append.appendChild(newEle)

append.remove()

