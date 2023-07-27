

// Numeric string used with + gives string type 
let result;

console.log(`------------------------Implicit Conversion To String---------------------------`);

console.log(`------------------------------------Step 1----------------------------------`);

result = '3' + 2;
console.log(result);
console.log(`2 is a number type is implicitly converted to ${typeof result}`);

console.log(`------------------------------------Step 2----------------------------------`);

result = '3' + true;
console.log(result);
console.log(`true is boolean type is implicitly converted to ${typeof result}`);

console.log(`------------------------------------Step 3----------------------------------`);

result = '3' + undefined;
console.log(result);
console.log(`undefined is implicitly converted to ${typeof result}`);

console.log(`------------------------------------Step 4----------------------------------`);

result = '3' + null;
console.log(result);
console.log(`null is implicitly converted to ${typeof result}`);

