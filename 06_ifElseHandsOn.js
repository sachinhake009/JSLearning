

console.log(`----------------------------------------------------------------------------`);

function evenOdd(num){
    if (num%2==0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
evenOdd(45);
evenOdd(70);
evenOdd(67);
evenOdd(98);

console.log(`------------------------------------------------------------------------------`);

function stringCharacter(cha){
    if (cha < 10) {
        console.log(`${cha} is String more than 10 character`);
    } else {
        console.log(`${cha} is string NOT more than 10 character`);
    }
}
stringCharacter("JavaScript");

console.log(`------------------------------------------------------------------------------`);


var str='Java';
var string="JavaScript Language"
if (str==string) {
    console.log(str);
} else {
    if (str==string) {
        console.log(`${str} string does not start with JavaScript Language`);
    } else {
        console.log(`${str} string start with JavaScript Langauage`);
    }
}

console.log(`---------------------------------------------------------------------------------`);