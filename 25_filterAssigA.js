

const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

// 1. Find out all the numbers which are greater than 50 and log on console
console.log(`===========Step 1===========`);
const greaterThan50 = arrayNumbers.filter(number => number > 50);
console.log("Numbers greater than 50:", greaterThan50);

// 2. Find out all the even numbers and log on console
console.log(`===========Step 2===========`);

const evenNumbers = arrayNumbers.filter(number => number % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Find out all the odd numbers and log on console
console.log(`===========Step 3===========`);

const oddNumbers = arrayNumbers.filter(number => number % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

// 4. Find out all the numbers which are multiple of 5
console.log(`===========Step 4===========`);

const multiplesOf5 = arrayNumbers.filter(number => number % 5 === 0);
console.log("Multiples of 5:", multiplesOf5);

// 5. Find out all numbers which are between 20 and 50
console.log(`===========Step 5===========`);

const between20And50 = arrayNumbers.filter(number => number > 20 && number < 50);
console.log("Numbers between 20 and 50:", between20And50);
