

console.log('==========================================Assigment==========================================');

var var1 = function(grads,hsc,ssc,name){
   var result = (grads >= 70 || hsc >= 80 || ssc >= 90  )?  `${name} You are eligible for TCS interview`:`Unfortunately you are not eligible for interview`
   console.log(`${result}`);
}
var1(80,86,90,'Sachin');
var1(70,65,55,'Niketan');
var1(60,79,88,'Vishwajeet');







