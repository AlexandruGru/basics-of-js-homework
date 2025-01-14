/**
 * RANGE
 *
 * to run code from this file use: npx nodemon 5-range
 *
 * 5.1 Write a function that takes two arguments, start and end, and returns an array
 *    containing all the numbers from start up to (and including) end. Next, write a sum
 *    function that takes an array of numbers and returns the sum of these numbers.
 *
 * 5.2 Optional: As a bonus assignment, modify your range function to take an optional
 *    third argument that indicates the “step” value used when building the array. If no
 *    step is given, the elements go up by increments of one, corresponding to the old behavior.
 *    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with
 *    negative step values so that range(5, 2, -1)
 *
 */

// Your code here.
const range = (numOne, numTwo, step = 1) => {
    let arr = [];
    if(numOne < numTwo) {
        if(step > 0) {
            for (let i = numOne; i <= numTwo; i += step) {
                arr.push(i)
            }
        }
        else {
            for (let i = numTwo; i >= numOne; i += step) {
                arr.push(i)
            }
        }
    } else {
        if(step > 0) {
            for (let i = numTwo; i <= numOne; i += step) {
                arr.push(i)
            }
        }
        else {
            for (let i = numOne; i >= numTwo; i += step) {
                arr.push(i)
            }
        }
    }
    return arr
}

// const sum = (arr) => arr.reduce((sum, current) => sum += current, 0)

const sum = (arr) => {
    let sum = 0;
    for( let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
console.log(range(1, -10, 1))