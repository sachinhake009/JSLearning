

const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

// Task 1: Log the array element with its index using forEach() with arrow function
console.log("Task 1:");
arrayNumbers.forEach((number, index) => {
  console.log(`Index: ${index}, Element: ${number}`);
});

console.log(`=====================================================`);

// Task 2: Find the positive numbers and log on console using forEach() with arrow function
console.log("\nTask 2:");
arrayNumbers.forEach((number) => {
  if (number > 0) {
    console.log(number);
  }
});

console.log(`=====================================================`);

// Task 3: Find the negative numbers, add into a new array, and log the new array on console using arrow function
console.log("\nTask 3:");
const negativeNumbers = [];
arrayNumbers.forEach((number) => {
  if (number < 0) {
    negativeNumbers.push(number);
  }
});
console.log(negativeNumbers);

console.log(`=====================================================`);

// Task 4: Find the even numbers and log on console using forEach() with arrow function
console.log("\nTask 4:");
arrayNumbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

console.log(`=====================================================`);

// Task 5: Find the sum of all elements from arrayNumbers and log the sum value on console.
console.log("\nTask 5:");
const sum = arrayNumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

console.log(`=====================================================`);

// Task 6: Log only the even indexed array values on console using forEach() with arrow function
console.log("\nTask 6:");
arrayNumbers.forEach((number, index) => {
  if (index % 2 === 0) {
    console.log(number);
  }
});
