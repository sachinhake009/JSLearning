// function add(num1, num2, ...num ){
//    console.log(`num1 ${num1},  num2 ${num2}`);
//    console.log(num);
// }
// add(5, 6);
// add(9, 5, 6);
// add(78, 90, 51, 68);
// add(89, 90, 45,78, 90, 51, 68);

console.log(`=====================================`);

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const numbers = [5, 6];
const numbers1 = [9, 5, 6];
const numbers3 = [78, 90, 51, 68];
const numbers4 = [89, 90, 45, 78, 90, 51, 68];

const result = sumArray(numbers);
const result1 = sumArray(numbers1);
const result2 = sumArray(numbers3);
const result3 = sumArray(numbers4);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
