
# DOM Methods:

1.  createElement(tagName)
2.  appendChild(node)
3.  removeChild(node)
4.  addEventListener(event, function)
5.  removeEventListener(event, function)
6.  setAttribute(name, value)
7.  getAttribute(name)
8.  parentNode / parentElement
9.  childNodes / children
10. firstChild / firstElementChild
11. lastChild / lastElementChild
12. nextSibling / nextElementSibling
13. previousSibling / previousElementSibling
14. closest(selector)
15. forEach (Array.from)

# Creating an Element:

* To Create an HTML element we use tag Name.
* we use the method document.createElement().
* This method takes an HTML element tag Name as string parameter.

```js
// syntax
document.createElement('tagname')
```

```js
let newEle = document.createElement('h1');
newEle.className = "title";
newEle.style.fontSize = '24px';
newEle.textContent = "Creating HTML Element using JavaScript";
console.log(newEle);

```

* To Create a multiple element we should use loop.

```js
let title;
for (let i = 0; i < 3; i++) {
    title = document.createElement('h2');
    title.className = 'title-class';
    title.style.fontSize = '24px'
    title.textContent = i;
    console.log(title)
}
```

# Insert element.

1. node.append(el) --> add at the end of node inside.
2. node.prepend(el) --> add at start of node inside.
3. node.before(el)--> add before the node.
4. node.after(el) --> add after the node.
5. node.remove()--> delete the node.


# 1. node.append(el):
```js
let append = document.querySelector("h2");
append.append(newEle);
```

# 2. node.prepend(el):
```
append.prepend(newEle);

```
# 3. node.before(ele):

```js
append.before(newEle);

```
# 4. node.after(ele):
```js
append.after(newEle);

```
# 5. node.remove():

```js
append.remove()
```

# parentNode / parentElement:

Navigate to the parent node or element.

Document and DocumentFragment nodes can never have a parent, so parentNode will always return null. It also returns null if the node has just been created and is not yet attached to the tree.

## childNodes[NodeList] / children[HTML Collection]:

Navigate to child nodes or elements.

childNodes is a property that returns a NodeList containing all child nodes of a given element, including text nodes and comment nodes.

## firstChild / firstElementChild:

Navigate to the first child node or element.

todo The Element suffix in firstElementChild and similar properties signifies that only element nodes are considered.

## lastChild / lastElementChild:

Navigate to the last child node or element.

## nextSibling / nextElementSibling:

Navigate to the next sibling node or element.

## previousSibling / previousElementSibling:

Navigate to the previous sibling node or element.

## closest(selector):

Find the closest ancestor of the current element that matches a given selector.

# DOM Filtering

# childNodes / children:

Get a NodeList or HTMLCollection and filter based on your criteria.

# Filtering Siblings:

1. nextSibling / nextElementSibling
2. previousSibling / previousElementSibling

# closest(selector):

Find the closest ancestor that matches a given selector.

The closest(selector) method is used to find the closest ancestor of an element that matches a specified CSS selector. This method traverses up the DOM tree, starting from the current element, and returns the first ancestor that matches the provided selector. If no matching ancestor is found, it returns null.


# DOM - Iteration
Iteration:

forEach (Array.from): Iterate through NodeList or convert to an array for more flexible manipulation.