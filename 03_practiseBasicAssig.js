

console.log('=============================Assignment 1====================================');

function stringBasics(){
    var dream= "IBM and Microsoft";
    console.log(`"My Dream Company Name is" ${dream}`);
}
stringBasics();

var hobby1= "Horse Riding";
var hobby2= "Running";
var hobby3= "Reading";
console.log(`My Hobbies are : ${hobby1}, ${hobby2}, ${hobby3}`);

var sumofhobby= hobby1.length+hobby2.length+hobby3.length;
console.log(`Some of Total Number of Characters is : ${sumofhobby}`);

console.log('==========================Assignments 02============================');

console.log('--------------Step 1-----------------');

console.log(`    "Hey you are doing good, keep it up"     `);

console.log('-------------Step 2----------------');

function stringHandsOn() {
    var str="  Hey you are doing good, keep it up   ";
    var mainStr=str.length;
    console.log(`Lenght os String is ${mainStr}`);

    console.log('------------Step 3------------------');

    var spaceTrim=str.trim();
    var afterTrim=spaceTrim.length;
    console.log(` After Trim Length Of String is : ${afterTrim} `);

    console.log('------------Step 4--------------');
    var extraSpaceCount=mainStr.afterTrim;
    console.log(`Total Number of extra space is ${extraSpaceCount}`);
    
    console.log('------------Step 5----------------');

    var startchar=spaceTrim.charAt(0);
    console.log(`The First character of string is ${startchar}`);
    var endcha=spaceTrim.length=1;
    var endchar=spaceTrim.charAt(endcha);
    console.log(`The Last character of string is ${endchar}`);

    console.log(`----------Step 6--------------`);
    var totalnumberofWord=spaceTrim.split('');
    var totalnumberofWordCount=totalnumberofWord.length;
    console.log(`The Total Number of Word is :${totalnumberofWordCount}`);

    console.log(`----------Step 7------------`);

    var goodIndex=spaceTrim.indexOf('good');
    console.log(`The Index of Word "good" is :${goodIndex}`);

    console.log('-----------Step 8----------');

    var after22=spaceTrim.slice(22);
    console.log(`Substring Starting Form "22" is : ${after22}`);

    console.log(`---------Step 9----------`);

    var wordEndWith=spaceTrim.endsWith("up");
    console.log(`String is EndsWith "up" :${wordEndWith}`);

    console.log(`----------Step 10-----------`);

    var wordStartWith=spaceTrim.startsWith("Hey")
    console.log(`String is EndsWith "up" : ${wordStartWith} `);

}
stringHandsOn();