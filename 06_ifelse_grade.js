

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

  var gradeCalculation = function(mark){
    if (mark===null || mark===undefined || isNaN(mark) || mark<0 || mark>100) {
        console.log(`Please provide valied number`);
    }
    else if (mark>=90) {
        console.log(`Fantastic markes:${mark} Your grade is A+ `);
    }
    else if (mark>=75 && mark<90) {
        console.log(`Exclent marks : ${mark} Your grade is A`);
    }
    else if (mark>=50 && mark<75) {
        console.log(`Good Mark: ${mark} Your grade is B`);
    }
    else if (mark>=35 && mark<50) {
        console.log(`Mark is: ${mark} Your grade is C Need Implement`);
    }
    else{
        console.log(`Please provide the valid number`);
    }
  }
  gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);
  gradeCalculation(91);
  gradeCalculation("Eighty");
  gradeCalculation(undefined);
  gradeCalculation(null);