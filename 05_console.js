

console.log(`------------------------------------Assignmet 2 ----------------------------------`);

result = 0==``;
console.log(result);
console.log(`result is true space is get converted to number implicitly`);

console.log(`-----------------------------------------------------------------------------`);

result = 0==`0`;
console.log(result);
console.log(`result is true 0 is get converted to string implicitly`);

console.log(`-----------------------------------------------------------------------------`);

result = 0==false;
console.log(result);
console.log(`result is true , false is get converted to number`);

console.log(`-----------------------------------------------------------------------------`);

result = null==undefined;
console.log(result);
console.log(`result get true beacuse loosely equal as both having different type`);

console.log(`-----------------------------------------------------------------------------`);

result = 1==[1];
console.log(result);
console.log(`resulat is true both are df same type that is number`);

console.log(`-----------------------------------------------------------------------------`);

result = 1==true;
console.log(result);
console.log(`resulat is true , true is get converted to number`);

console.log(`-----------------------------------------------------------------------------`);

result = 1=='1';
console.log(result);
console.log(`result is true , 1 is string get converted to number implicity`);

