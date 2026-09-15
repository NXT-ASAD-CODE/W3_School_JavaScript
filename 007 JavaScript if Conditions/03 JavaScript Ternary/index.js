// JavaScript Ternary Operator

// Example 1
// If the value of age is < 18, set the value of text to "You cannot drive", otherwise to "You can drive":
let text = (age < 18) ? "You cannot drive" : "You can drive";

// Example 2
let isMember = true;
let discount = isMember ? 0.2 : 0;

// Description
// The conditional operator is a shorthand for writing conditional if...else statements.
// It is called a ternary operator because it takes three operands.

// Syntax
(condition) ? expression1 : expression2

// Parameters
// Parameter	Description
// condition	Required.
//              The condition to be tested.
//              An expression that evaluates to true or false.
// ?	        Required.
//              The operator separating the condition from the expressions.
// expression1	Required.
//              The value to return if the condition is true.
// :	        Required.
//              The operator separating the expressions.
// expression2	Required.
//              The value to return if the condition is false.