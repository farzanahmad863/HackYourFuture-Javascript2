'use strict';

function foo(callback) {
  // What to do here?
  callback();
  console.log('Welcome to hack your future.');
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
