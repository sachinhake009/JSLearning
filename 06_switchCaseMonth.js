

console.log(`------------------Assignment 01----------------------`);

var monthOfYear = function(month){
switch (month) {
    case 1:
        console.log(`${month} - January`);
        console.log(`Janevary is the start Month of the Year`);
        break;
        case 2:
            console.log(`${month} - February`);
            break;
        case 3:
            console.log(`${month} - March`);
            break;
        case 4:
            console.log(`${month} - April`);
            break;
        case 5:
            console.log(`${month} - May`);
            break;   
        case 6:
            console.log(`${month} - June`);
            break;
        case 7:
            console.log(`${month} - July`);
            break; 
        case 8:
            console.log(`${month} - August`);
            break;
        case 9:
            console.log(`${month} - September`);
            break;   
        case 10:
                console.log(`${month} - October`);
                break; 
        case 11:
                console.log(`${month} - November`);
                break;   
        case 12:
                console.log(`${month} - December`);
                break;               
    default:
        console.log(`${month} This Number is Invalied`);
        console.log(`Please provide valied data`);
        break;
}
console.log(`-------End of Switch Case--------`);
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);


console.log(`------------------Assignment 02----------------------`);

function marraigeEligiblity(gender,age){
if (gender=="male" && age>=21) {
    console.log(`Gender is :${gender},age is :${age}, You are Eligible for marrige`);
} else {
    if (gender=="Female" && age>=18) {
        console.log(`Gender is :${gender}, age is :${age}, You are Eligible for Marrige`);
    } else {
        console.log(`Gender is :${gender}, age is :${age}, You are Not Eligible for Marrige`);
    }
}
}
marraigeEligiblity("male",17);
marraigeEligiblity("male",25);
marraigeEligiblity("Female",28);
marraigeEligiblity("Female",16);
marraigeEligiblity("other",35);
marraigeEligiblity("other",41);