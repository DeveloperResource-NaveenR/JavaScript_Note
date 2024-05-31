# Conditional statements

## if

The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
```js
if (age == 18) {
  alert( "You're eligible to vote!" );
}
```
## if else

The if statement may contain an optional else block. It executes when the condition is falsy.
```js
if (age == 18) {
  alert( "You're eligible to vote!" );
}else{
  alert( "You're not eligible to vote!" );
}
```
## else if
We can use the else if keyword to check for multiple conditions.

```js
if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
```

JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last alert.

There can be more else if blocks. The final else is optional.

## Nested If else
When we use an if...else statement inside another if...else statement, we create a nested if...else statement.

```js
let marks = 60;

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {

    // inner if...else statement
    // Distinction if marks is 80 or above

    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}

// Output: Passed
```

## Switch case

A switch statement can replace multiple if checks.

The switch has one or more case blocks and an optional default.
```js
let trafficLight = "green";
let message = ""
 
switch (trafficLight) {
    case "red":
        message = "Stop immediately.";
        break;
    case "yellow":
        message = "Prepare to stop.";
        break;
    case "green":
        message = "Proceed or continue driving.";
        break;
    default:
        message = "Invalid traffic light color.";
}
 
console.log(message)
 
// Output: Proceed or continue driving.
```