/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

let avgVal = function(arr) {

  //ask if the arr length is 0
  if(arr.length === 0) {

  //if yes return null
  return null;

  }

  //create sum
  let sum = 0;

  //loop through array with forEach
  arr.forEach(function (ele) {

  //add all ele to sum
  sum += ele;

  });

  //store val of divide sum by arr length in variable
  let avg = sum / arr.length;

  //return avg variable
  return avg;

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
