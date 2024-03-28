# Events

* The change in the state of an object is know as event.

* mouse event -->onclick, ondbclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload.
* We can add event listener method to any DOM object

```js
node.event = () =>{
    handle event
};
```

# inline event handing

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button onclick="console.log('inline event')">click me</button>
</body>

</html>

```

* One DrawBack is we cannot handle more event in html code.

# JS Scrip Handling event.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button onclick="console.log('inline event')">click me1</button>
    <button id="btn1">click me 2</button>
    <button id="btn2">click me 3</button>
    <script src="./script.js"></script>
</body>

</html>
```

```js
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log('btn1 was clicked')
}
let btn2 = document.querySelector('#btn2');

btn2.ondblclick = () => {
    console.log('btn1 was double clicked')
}
```

# event object

* it is a special object that have all the details of even.
* what type of event it is.

* all event handler have access to event object properties and method

```js
node.event(event){
    //handle event
}
```
* (event) --> object event/variable.

```js
let btn2 = document.querySelector('#btn2');

btn2.ondblclick = (evt) => {
    console.log(evt);
    console.log(evt.type)
    console.log('btn1 was double clicked')
}
```

* Drawback is we cannot handle multiple event using js script. if we try do that it will override the first event.

# Event Listener:

* Event Listener can handle multiple event.

1. node.addEventListener(event,callback);
2. node.removeEventListener(event,callback);

# 1. node.addEventListener(event,callback):

```js
selectedElement.addEventListener('eventlistner', function(e) {
  // the activity you want to occur after the event will be in here
})
// or

selectedElement.addEventListener('eventlistner', e => {
  // the activity you want to occur after the event will be in here
})
```

```js
btn2.addEventListener('click', (event) => {

    console.log('eventlistener');
    console.log(event)
    console.log(event.type)
});

```

# 2. node.removeEventListener(event,callback):

```js
let btn1 = document.querySelector('#btn1');

let remove = () => {
    console.log('btn1 was clicked')
}
btn1.addEventListener('click', remove)


btn1.removeEventListener('click', remove);


```
