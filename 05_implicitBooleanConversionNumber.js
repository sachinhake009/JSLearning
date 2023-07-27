

console.log(`-------------------------Implicit boolean conversion to Number------------------------`);
let result;

console.log(`------------------------------------Step 1----------------------------------`);

result = '4' - 3;
console.log(result);
console.log(`'4' is a string type converted to number and true is boolean converted to number double conversion 
implicitely `);

console.log(`------------------------------------Step 2----------------------------------`);

result = 4 + true;
console.log(result);
console.log(`true is boolean type and it is implicitely converted to number type hear true=1`);

console.log(`------------------------------------Step 1----------------------------------`);

result = 4 + false;
console.log(result);
console.log(`false is a boolean type and it is implicitelt converted to number type hear false=0`);

