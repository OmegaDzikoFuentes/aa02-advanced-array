/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function(string) {

    //change string into array
    let strArr = string.split('');

    //create vowels str
    let vowels = 'aeiou';

    //create an empty str variable
    let empty = '';

    //create a vsriable for the filter method
    let foundVowels = strArr.filter((char) => {

    //ask if the curr char is part of the vowels str and is missing from the str
    if(vowels.includes(char) && !empty.includes(char)) {

    //if yes then add the char to the str
    return empty += char;

    };

});

    //ask if str count greater or equal to three
    if(empty.length >= 3) {

    //if yes return true
    return true;

    };

    //otherwise false
    return false;
};



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
