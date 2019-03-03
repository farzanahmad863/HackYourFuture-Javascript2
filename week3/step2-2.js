'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] % 3 === 0 && numbers[x] % 5 === 0) {
      threeCallback(numbers[x]);
      fiveCallback(numbers[x]);
    } else if (numbers[x] % 5 === 0) {
      fiveCallback(numbers[x]);
    } else if (numbers[x] % 3 === 0) {
      threeCallback(numbers[x]);
    }
  }
  // Replace this comment and the next line with your code
  //console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is divisible by three.');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' is divisible by five.');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
