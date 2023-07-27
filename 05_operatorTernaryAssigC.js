

var maleMarriageEligibility= function(gender,age,boyname){
    var result = (age >=21)? `${boyname} you are eligible for marriage`:`${boyname} Not Eligible for Marrige`
    console.log(`${result}`);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");

console.log('=================================================================================================================');

var femaleMarriageEligibility= function(gender,age,girlName){
     var result = (age >=21)? `${girlName} you are eligible for Marriage `:`${girlName} Not Eligible for Marriage `
      console.log(`${result}`);
}
femaleMarriageEligibility('Female',16,'Jenifer');
femaleMarriageEligibility('Female',27,'Malinda Gates');