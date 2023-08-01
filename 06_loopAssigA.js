

function vowelsCount(str) {
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char);
            count = count + 1;
        }
        console.log(`Total Number of Vowels Small & Capital is : ${char} `);
    }
}
vowelsCount("I am very good IT Developer");

console.log(`---------------------------------------------------`);

let sumOfCube = function() {

let sumOfCube = 0;
    
    for (let index = 1; index <= 5; index++) {
        
        sumOfCube = sumOfCube + index * index * index;
    }
    console.log(`Sum of Cube is : ${sumOfCube}`);
}
sumOfCube();

console.log(`-----------------------------------------------------`);

function oddPositionedChars(str) {
    for (let index = 0; index < str.length; index++) {
        const char = str.charAt(index);
    if (index%2!=0 && char!=' ') {
        console.log(`Odd positioned chars : ${char}`);
    }
  }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");

console.log(`===========================================================================`);

function reverseString(str) {
   let reverse = "";
   for (let index = str.length-1; index >= 0; index--) {
    const char = str.charAt(index);
if (char != ' ') {
    reverse = reverse.concat(char);
}
}
 console.log(reverse);
}
reverseString("Hard work always pays back");
reverseString("Soon I will be Angular IT Champ");