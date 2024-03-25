/*

Write a function `longWords(words)` that takes in an array of words.
The function should return an array containing only the words that are longer
than 5 characters.

Solve this using Array's `filter()` method.

Examples:

console.log(longWords(['bike', 'skateboard','scooter', 'moped'])); // [ 'skateboard', 'scooter' ]
console.log(longWords(['couscous', 'soup', 'ceviche', 'solyanka' ,'taco'])); // [ 'couscous', 'ceviche', 'solyanka' ]

*/

let longWords = function(words) {

  //loop using filter method
  let filtered = words.filter(function (word) {

  //ask if word length greater than 5
  if(word.length > 5) {

  //if yes return word
  return word;
  }

});

  //return filtered arr
  return filtered;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = longWords;
} catch (e) {
  module.exports = null;
}
