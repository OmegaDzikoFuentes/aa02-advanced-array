/*
Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

let removeLastVowel = function(word) {

    //change str into array
    let wordArr = word.split('');

    //create vowels str
    let vowels = 'aAeEiIoOuU';

    //loop in reverse
    for (let i = wordArr.length - 1; i >= 0; i--) {

        //store value in variable
        let val = wordArr[i];

    //ask if curr char is in vowels array
    if(vowels.includes(val)) {

    //if yes remove
    wordArr.splice(i, 1);

    break;
    }

}

    //return array turned into string
    return wordArr.join('');
};

let hipsterfy = function(sentence) {

    //change sent into array
    let sentArr = sentence.split(" ");

    //use map method and implement remve helper function
    let changed = sentArr.map((word) => {

        return removeLastVowel(word);

    });

    return changed.join(' ');

};

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
