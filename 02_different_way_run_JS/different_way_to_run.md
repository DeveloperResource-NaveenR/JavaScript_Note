# Different ways to run JavaScript

1. Using the browsers console tab
2. Using Node.js
3. By creating Web Pages


# Using the browsers console tab
* Almost every popular web browsers have built-in JavaScript engines. Where you can run JavaScript on a browser. To run JavaScript on browsers follow these steps:

* Open your web browser (I'm using Google Chrome).

* Right-click on the display and select Inspect. (F12 shortcut).

![Google Chrome](/JavaScript_Note/images/inspect-browser.png)

* Now on the developer tools select the Console tab and then start writing your javascript code.


![Google Chrome](/JavaScript_Note/images/js_code_on_chrome_console.png)


# Using Node.js

* Node is a back-end run-time environment for executing JavaScript code. To run JS using Node.js, follow these steps:

* Install the latest version of Node.js.
* Install an IDE/Text Editor like Visual Studio Code. In VS code, create a file > write JS code > save it with .js extension

![Google Chrome](/JavaScript_Note/images/hello-node-ide.png)

* Open up the terminal/command prompt > navigate to the file location > type node hello.js > hit enter.

# By Creating Web Pages

* Open VS Code > Go to File > New File > Save it with .html extension. For example, main.html.
* Copy this doctype (minimum valid HTML code) and save it in the file.

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Programiz</title>
</head>

<body>
  <script src=""></script>
</body>
</html>
```

Similarly create a JS file, write the following JS code and save it with .js extension like main.js.
```js
console.log('hello world');
```
![Google Chrome](/JavaScript_Note/images/main-js.png)

* From inside the HTML file, we need to link the main.js file to use it. You can achieve that by adding the following code in main.html.

```html
<script scr="main.js"></script>
```
![Google Chrome](/JavaScript_Note/images/main-html.png)

* Open the main.html file using a browser.
* To check if our JS code ran or not, Right click on the web page > Inspect > Choose console tab.

![Google Chrome](/JavaScript_Note/images/console-tab.png)