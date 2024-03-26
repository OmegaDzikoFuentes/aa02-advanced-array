/*
Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

//write helper function to decide whether number is prime or not

let isPrime = function(num) {

    //ask if number is less than 2
    if(num < 2) {

    //if yes return false
    return false;

    }
    //loop from 2 to the num
    for (let i = 2; i < num; i++) {

    //ask if num divided by i is without remainder
    if(num % i === 0) {

    //if yes return false
    return false;

    }

}

    //otherwise return true
    return true;
}

let choosePrimes = function(nums) {

    //create empty array
    let primes = [];

    //use filter method to loop through array
    let filtered = nums.filter((num) => {

    //ask if prime by passing helper func
    if(isPrime(num)) {

    //if yes push to array
    primes.push(num);

    }
});

    //return array
    return primes;
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
