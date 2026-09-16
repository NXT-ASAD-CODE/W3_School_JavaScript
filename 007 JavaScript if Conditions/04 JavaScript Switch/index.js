// JavaScript Switch Statement

// Switch Control Flow
// Based on a condition, switch selects one or more code blocks to be executed.

// switch executes the code blocks that matches an expression.

// switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

// Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
// Example
// This example uses the weekday number to calculate the weekday name:
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}