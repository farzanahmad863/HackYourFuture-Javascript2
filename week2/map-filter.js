'use strict';

function doubleOddNumbers(numbers) {
  let oddNumbers = numbers.filter(number => number % 2 !== 0);
  let doubleOfOdds = oddNumbers.map(number => number * 2);
  console.log(doubleOfOdds);
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
