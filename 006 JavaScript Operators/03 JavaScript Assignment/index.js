// JavaScript Assignment
// Assignment operators assign values to JavaScript variables.
// Given that x = 10 and y = 5, the table below explains the assignment operators:

// Operator	  Example	Same As  	Result
//   =	      x = y	    x = y	     x = 5
//   +=	      x += y	x = x + y	 x = 15
//   -=	      x -= y	x = x - y	 x = 5
//   *=	      x *= y	x = x * y	 x = 50
//   **=	  x **= y	x = x ** y	 x = 100000
//   /=	      x /= y	x = x / y	 x = 2
//   %=	      x %= y	x = x % y	 x = 0
//   :	      x: 45	    size.x = 45	 x = 45

// Logical Assignment Operators

// Operator	  Example	   Result
//   &&=	true &&= 10	   x = 10
//   ||=	false ||= 10   x = 10
//   ??=	null ??= 10	   x = 10

// The = operator
// The Simple Assignment Operator assigns a simple value to a variable

// Simple Assignment Examples
let a = 10;
let b = 10 + a;

// The += Operator
// The Addition Assignment Operator adds a value to a variable.

// Addition Assignment Examples
let c = 10;
c += 5;

// The -= Operator
// The Subtraction Assignment Operator subtracts a value from a variable.

// Subtraction Assignment Example
let d = 10;
d -= 5;

// The *= Operator
// The Multiplication Assignment Operator multiplies a variable.
// Multiplication Assignment Example
let e = 10;
e *= 5;

// The **= Operator
// The Exponentiation Assignment Operator raises a variable to the power of the operand.
// Exponentiation Assignment Example
let f = 10;
f **= 5;

// The /= Operator
// The Division Assignment Operator divides a variable.
// Division Assignment Example
let g = 10;
g /= 5;

// The %= Operator
// The Remainder Assignment Operator assigns a remainder to a variable.
// Remainder Assignment Example
let h = 10;
h %= 5;

// String Assignment
// Two assignment operators can assign values to strings:
// The Simple Assignment Operator assigns a simple value to a string.
// The Addition Assignment Operator adds a value to a string.

// The = Operator
// The Simple Assignment Operator assigns a value to a variable.

// String Assignment Example
let text1 = "Asad";

// The += Operator
// The Addition Assignment Operator Can also be used to add strings.

// Addition Assignment Example
let text2 = "Asad"; text += " Iftikhar";

// The &&= Operator
// The Logical AND assignment operator is used between two values.
// If the first value is true, the second value is assigned.

// Example 1
let x = true;
let y = x &&= 10;

// Example 2
let i = false;
let j = x &&= 10;

// (only 0, -0, 0n, NaN, null, undefined, "", and false are falsy).

// Example 3
let k = 1;
let l = x &&= 10;

// Example 4
let m = 0;
let n = x &&= 10;

// Example 5
let o = undefined;
let p = x &&= 10;

// Example 6
let q = null;
let r = x &&= 10;

// The ||= Operator
// The Logical OR assignment operator is used between two values.
// If the first value is false, the second value is assigned.

// Logical OR Assignment Examples
// Example 1
let ab = false;
let ac = ab ||= 10;

// Example 2
let ad = true;
let ae = ad ||= 10;

// Example 3
let af = null;
let ag = af ||= 10;

// Example 4
let ah = undefined;
let ai = ah ||= 10;

// The ??= Operator