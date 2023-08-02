

const arrayFruits=["Banana","Orange","Apple","mango","Water Melon"];
let res=arrayFruits[0]
console.log(`First Element: ${res}`);

let last= arrayFruits[arrayFruits.length-1];
console.log(`Last Element: ${last}`);
arrayFruits.unshift("Papaya");
console.log(`Papaya Before the Banana:--${arrayFruits}`);
console.log(`New Aray:--${arrayFruits}`);
arrayFruits.splice(4,1);
console.log(`Remove Mango :-${arrayFruits}`);
arrayFruits.push("Pineapple");
console.log(`Add Element at Last Position:-${arrayFruits}`);
arrayFruits.splice(4,0,"Dragon Fruit")
console.log(`Add Element before Water Lemon:-${arrayFruits}`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace Orange With Kiwi:-${arrayFruits}`);
console.log(`New Array:-${arrayFruits}`);
let out=arrayFruits.slice(1,4);
console.log(`Starting from 1 to 4:-${out}`);
let a=arrayFruits.slice(arrayFruits.length-3)
console.log(`Last 3 Element:-${a}`);



 



    
