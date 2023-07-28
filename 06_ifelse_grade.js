

console.log(`----------------------------Assignment 2------------------------------`);

function voteEligibil(age){
    // if block to handle all invalid scenarios

    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>130 ) {
         console.log(` your age ${age} is invalid`); 
    } else {
           // if block to handle all valid scenarios
        if (age>=18) {
             console.log(` you are eligible for vote ${age}`);
        } else {
            console.log(` you are not eligible for vote ${age} `);
        }
    }
}
voteEligibil(45);
voteEligibil(17);
voteEligibil(8);
voteEligibil(20);
voteEligibil(-10);
voteEligibil(200);
voteEligibil(0);
voteEligibil(undefined);
voteEligibil(null);


console.log(`----------------------------Assignment 3------------------------------`);

  function gradeCalculation(name,mark){
    if (mark>=0 || mark<=100) {
        console.log(`${mark} Please Provide valiedmark`);
    } else {
        console.log(` ${name} ${mark}: your grade is A+`);
    }
  }
  gradeCalculation(98,"Funtastic Mark");

  function gradeCalculation(name,mark){
    if (mark>=0 || mark<=100) {
        console.log(`${mark} Please Provide valiedmark`);
    } else {
        console.log(` ${name} ${mark}: your grade is A`);
    }
  }
  gradeCalculation(80,"Excellent Mark");

  function gradeCalculation(name,mark){
    if (mark>=0 || mark<=100) {
        console.log(`${mark} Please Provide valiedmark`);
    } else {
        console.log(` ${name} ${mark}: your grade is A+`);
    }
  }
  gradeCalculation(90,"Funtastic Mark");

  
