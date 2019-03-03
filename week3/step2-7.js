'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here
/*Variables and strings are passed by value in javascript, in pass by value approach only
value stored in a variable is passed to function then if you do some changes inside function
it doesn't affect the variable's actual value. 
On the other hand, in Pass by Reference approach, function is called by directly passing 
the reference/address of the variable as the argument. Changes made to the argument inside 
the function affect the variable passed from outside the function.In Javascript, objects and
arrays follows pass by reference*/
