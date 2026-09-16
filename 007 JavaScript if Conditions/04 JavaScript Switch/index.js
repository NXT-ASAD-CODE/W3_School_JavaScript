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
// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// No more statements in the switch block will be executed.
// It is not necessary to break the last case. The switch ends (breaks) there anyway.


// The default Keyword
// The default keyword specifies a block of code to run if there is no case match.
// The default keyword is optional.
// The default can act as a fallback:

// Example
// The getDay() method returns the weekday as a number between 0 and 6.
// If today is neither Saturday (6) nor Sunday (0), write a default message:
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
