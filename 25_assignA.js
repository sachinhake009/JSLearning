

const RollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

// 1. Reverse the array
const reversedArray = RollNumbers.slice().reverse();
console.log("Reversed Array:", reversedArray);

// 2. Use the sort() method without custom sorting logic
const unsortedArray = RollNumbers.slice().sort();
console.log("Unsorted Array (sort() without custom logic):", unsortedArray);

// 3. Sort the array in ascending order with custom logic
const ascendingArray = RollNumbers.slice().sort((a, b) => a - b);
console.log("Ascending Array:", ascendingArray);

// 4. Find the Greatest number from the array
const greatestNumber = Math.max(...RollNumbers);
console.log("Greatest Number:", greatestNumber);

// 5. Find the smallest number from the array
const smallestNumber = Math.min(...RollNumbers);
console.log("Smallest Number:", smallestNumber);

// 6. Remove duplicates from the array
const uniqueArray = Array.from(new Set(RollNumbers));
console.log("Array with Duplicates Removed:", uniqueArray);
