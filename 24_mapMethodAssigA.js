

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
 
// 1. Add 10 to each element and log the new array result on console
console.log(`===========Step 1===========`);

const newArray1 = arrayNumbers.map(num => num + 10);
console.log("Array after adding 10 to each element:", newArray1);

// 2. Cube each array element and log on console
console.log(`===========Step 2===========`);

const newArray2 = arrayNumbers.map(num => Math.pow(num, 3));
console.log("Array after cubing each element:", newArray2);

// 3. Add the index value to its corresponding array element and log the new array result on console
console.log(`===========Step 3===========`);

const newArray3 = arrayNumbers.map((num, index) => num + index );
console.log("Array after adding index value to each element:", newArray3);