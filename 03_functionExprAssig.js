

console.log(`=============================================Function Expression Assignment==============================================`);

console.log(`----------------------------------------------------Task -1--------------------------------------------------------------`);

var squre = function(num){
var result = num * num;
console.log(`The Squre of ${result}`);
}
squre(5);
squre(6);
squre(25);
squre(100);
squre(67.89);
squre(59);

console.log(`----------------------------------------------------Task -2--------------------------------------------------------------`);
var variableName= function(){
    var variable= "function";
    console.log(`The log Type of function is : ${variable}`);
}
variableName();

console.log(`----------------------------------------------------Task -3--------------------------------------------------------------`);

var area = function(l,w){
    var areas= l*w;
    console.log(`Area Of Recatangle : ${areas} `);
}
area(499,917);

console.log(`----------------------------------------------------Task -4--------------------------------------------------------------`);

function swapValues(n1,n2){
console.log('Before Swap==>',n1,n2);
var temp=n1;
n1=n2;
n2=temp;
console.log('After Swap==>',n1,n2);
}
var name1='Mahi';
var name2='Raina';
swapValues(name1,name2);

var num1=55;
var num2=77;
swapValues(num1,num2);

console.log(`----------------------------------------------------Task -5--------------------------------------------------------------`);

var mainString=function()
{
    var String =("JS is the Most popular language of internet")
    console.log(`The String is : ${String}`);
   console.log(`The Total Character in String is: ${String.length}`);//using length method find the length of string
   console.log(`The  Character at "6" is : ${String.charAt(6)}`);//using charaAt method we give as index  and he retuen a character
   console.log(`The  Character at "11" is : ${String.charAt(11)}`);
   var lastchar=String.length-1;
   console.log(`The Last Character of String is : ${String.charAt(lastchar)}`);
   console.log(`The Very First Character  is : ${String.charAt(0)}`);
var thirdLastchar=String.length-3;
   console.log(`The  Third Last Character of String is : ${String.charAt(thirdLastchar)}`);
  var totalChar=String.split(" ");//using split method we find out the total character
  var totalWordCount=totalChar.length;
  var squareOfWord=totalWordCount*totalWordCount;
     console.log(`The Total Number Of Word is ${totalWordCount} And the square of word is : ${squareOfWord}  `);
     console.log(`___________________**************************************************__________________`);

}
mainString();