// JavaScript Let

// The let keyword was introduced in ES6 (2015)

// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope


// Block Scope 
// Example
{
   let a = 10
}


// Function Scope
// Example
function _myName(){
    let uName = "Asad";
}

// Global Scope
// Variables declared with the var always have Global Scope.
// Example
{
    var b = 20;
}


// Cannot be Redeclared
// Variables defined with let can not be redeclared.
// Exapmle
let c = 10;
// let c = "asad"

// Variables defined with var can be redeclared.
// Example

var d = "Asad"
var d = 10;


// Redeclaring Variables
// Redeclaring a variable using the var keyword can impose problems
// Example

var q = 10;
// here q is 10

{
    var q = 20;
    // here q is 20
}

// outside the scope also is 20 

// Redeclaring a variable using the let keyword can solve this problem.

let x = 50;
// here x is 50

{
let x = 20;
// Here x is 20
}

// Here x is 50

let w;
console.log(w);

// Redeclaring
// Redeclaring a JavaScript variable with var is allowed anywhere in a program:
// Example
var e = 10;
var e = 20;

// With let, redeclaring a variable in the same block is NOT allowed:
//Example
// var x = 2;   // Allowed
// let x = 3;   // Not allowed

{
let x = 2;   // Allowed
// let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
// var x = 3;   // Not allowed
}

// Redeclaring a variable with let, in another block, IS allowed:

// let x = 2;
{
    let x = 3;
}
{
    let x = 4;      
}

// Let Hoisting

// Variables defined with var are hoisted to the top and can be initialized at any time.

// Meaning: You can use the variable before it is declared:

// Example
_uName = "asad"
var _uName; 

// Variables defined with let are also hoisted to the top of the block, but not initialized.

// Meaning: Using a let variable before it is declared will result in a ReferenceError:

// Example
_MyName = "Asad";
let _MyName;
console.log(_MyName);
