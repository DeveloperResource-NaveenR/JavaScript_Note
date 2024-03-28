let btn1 = document.querySelector('#btn1');
// btn1.onclick = () => {
//     console.log('btn1 was clicked')
// }
let btn2 = document.querySelector('#btn2');

// btn2.ondblclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type)
//     console.log('btn1 was double clicked')
// }


// eventListener:

btn2.addEventListener('click', (event) => {

    console.log('eventlistener');
    console.log(event)
    console.log(event.type)
});

let remove = () => {
    console.log('btn1 was clicked')
}
btn1.addEventListener('click', remove)


btn1.removeEventListener('click', remove);


let toggle = document.querySelector('#toggle');
let body = document.querySelector("body")
let mode = 'dark';

toggle.addEventListener('click', () => {
    if (mode === 'dark') {
        mode = 'light';
        body.classList.add("light");
        body.classList.remove("dark");
    } else {
        mode = 'dark';
        body.classList.add("dark");
        body.classList.remove("light");
    }
    console.log(mode)
});
