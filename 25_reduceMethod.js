

const array_number = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// Using reduce()
const sumUsingReduce = array_number.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce():", sumUsingReduce);

// Using a traditional loop
let sumTraditional = 0;
for (let i = 0; i < array_number.length; i++) {
    sumTraditional += array_number[i];
}
console.log("Sum using a traditional loop:", sumTraditional);

const multiplesOf5 = array_number.filter((number) => number % 5 === 0);
const sumMultiplesOf5 = multiplesOf5.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of number multiple of 5:", sumMultiplesOf5);