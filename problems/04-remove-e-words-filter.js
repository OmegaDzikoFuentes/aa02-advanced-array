/*
Write a function `removeEWords(sentence)` that accepts a sentence string as an
arg. The function should return a new string, containing only the words that
don't have the letter "e" in them.

Solve this using Array's `filter()` method.

Examples:

console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'

*/

let removeEWords = function(sentence) {

  //turn string into array
  let sentArr = sentence.split(" ");
  //create a variable to store the filtered loop
  let minusE = sentArr.filter(function (word) {

  //ask if the word lowercased is without an e
  if(!word.toLowerCase().includes('e')) {

  //if yes, add to array
  return word;

  }

});

  //return filtered array
  return minusE.join(" ");

};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = removeEWords;
} catch (e) {
  module.exports = null;
}
