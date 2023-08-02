

const array=[20,31,40,25,23,11,29,9,60,2,11];
let len=array.length;
console.log(`Total Ength of Array is:${len}`);
console.log(`First Element: ${array[0]}`);
console.log(`Last Element: ${array[array.length-1]}`);
let res=array[array.length-3];
console.log(`Third Last Element in Array is:${res}`);

console.log("Even Numbers in Array");
for(let i=0;i<=array.length;i++)
{      
    if(array[i]%2==0)
    {       
        console.log(array[i]);
    }  
}
console.log("Odd Number in Array");
for (let i = 0; i <= array.length; i++) {
    if (array[i]%2==0) {
        console.log(array[i]);
    }  
}

console.log("Find All Even Position");
let count=0;
for (let i = 0; i <= array.length; i++) {
    if (array[i]%2==0) {
        count=count+1;
    }  
}
console.log(`Total Count of Even Number:${count}`);

console.log(`===============================================`);

console.log("Find all Odd position");
let c=0;
for (let i = 0; i <= array.length; i++) {
    if (array[i]%2==0) {
        c=c+1;
    }
    
}
console.log(`Total Count Of Odd Number ${c}`);

console.log(`------------------------------------------`);

console.log("Sum Of All Elements");
let sum=0;
for (let i = 0; i <= array.length; i++) {
    sum=sum+array[i];   
}
console.log(`Sum Of All Elements:${sum}`);

console.log(`--------------------------------------------`);

console.log("Find the number Multiply of 5");
for (let i = 0; i <= array.length-1; i++) {
    if (array[i]%5===0) {
        console.log(`Number Multiply of 5: ${array}`);
    } 
}

console.log(`115 Available in Array:-${array.includes(115)}`);
console.log(`23 Available in array:-${array.includes(23)}`);

array.splice(4,0,55,66);
console.log(`Inserts number Before 3 index:${array}`);

console.log(`New Array :${array}`);
array.splice(4,3);
console.log(`Delete 4 element starting 4 index:${array} `);
