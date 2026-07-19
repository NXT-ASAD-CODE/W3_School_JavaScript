const PI = 3.141592653589793;
PI = 3.14 // This will give us an error
PI = PI + 10 // This will also give us an error


// Must be Assigned

// Correct Method
const PI = 3.14159265359;

// Incorrect Method
const PI;
PI = 3.14159265359;


// Constant Arrays

// You can create a constant array:
const fruits = ["apple","mango","banana",]

// You can change an element:
fruits[0] = "orange"

// You can add an element:

fruits.push("grapes")


// Constant Objects

// You can create a const object:

const car = {
type:"D-class",
model:"500",
color:"white"
}
// Block Scope

const x = 10;
// Here x is 10

{
const x = 2;
// Here x is 2
}
// Here x is 10

// Redeclaring

// Redeclaring a JavaScript var variable is allowed anywhere in a program

var x = 2;     // Allowed
var x = 3;     // Allowed
x = 4;         // Allowed
