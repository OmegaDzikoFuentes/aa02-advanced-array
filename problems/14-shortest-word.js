/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function(sentence) {

  //change sentence into array
  let sentArr = sentence.split(' ');

  //set first string for shortest wrd
  let currShortest = sentArr[0];
    //use for each to loop through
    sentArr.forEach((word) => {

  //ask if the curr word is shorter than the curr shortest or if they are equal
  if(word.length < currShortest.length || (word.length === currShortest.length)) {

  //reassign the curr as the shortest
  currShortest = word;

  }
});

  //return the shortest
  return currShortest;

};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
