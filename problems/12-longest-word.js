/*
Write a function `longestWord(sentence)` that takes in a sentence string as an
argument. The function should return the longest word in the sentence.

You must use  `Array.forEach` in your solution.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

*/

let longestWord = function(sentence) {

    //change string into array
    let sentArr = sentence.split(' ');

    //create an empty string
    let longest = '';

    //create variable to store foreach method
    sentArr.forEach((word) => {

    //ask if word is longer than created string
    if(word.length > longest.length) {

    //if yes reasssign word to empty string
    longest = word;

    }

});

    //return str
    return longest;

};

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = longestWord;
} catch (e) {
    module.exports = null;
}
