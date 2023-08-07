

class Vehicle {
    constructor(Name,VehicleType,Color,Model,Average){
        this.Name = Name;
        this.VehicleType = VehicleType;
        this.Color = Color;
        this.Model = Model;
        this.Average = Average;
    }
    show(){
        console.log(`Vehicle Details is Name : ${this.Name}, Vehicle Type : ${this.VehicleType}, Vehicle Color : ${this.Color}, 
        Model : ${this.Model}, Average : ${this.Average}`);
    }
}
let VehicleShine = new Vehicle("Shine","Two wheeler","Yellow","2009","50");
let VehicleRoyalEnfield = new Vehicle("Royal Enfield","Two wheelar","Sliver","2012","55");
let VehicleScripo = new Vehicle("Scripo","Fore wheelar","White","2019","17");
let VehicleFortuner = new Vehicle("Fortuner","Fore wheelar","Black","2023","9");
let VehicleThar = new Vehicle("Thar","Fore wheelar","Graw","2022","15");




const array = [VehicleShine,VehicleRoyalEnfield,VehicleScripo,VehicleFortuner,VehicleThar];
console.log(array);
for (const Vehicle of array) {
    Vehicle.show();
}

console.log(`---------------------------------------------------------------------------------`);

class College {
    constructor(collegeName,studentName,div,rollNo,std){

        this.collegeName = collegeName;
        this.studentName = studentName;
        this.div = div;
        this.rollNo = rollNo;
        this.std = std;
    }
    show(){
        console.log(`College details is : College Name : ${this.collegeName}, class Year : ${this.studentName}, 
        division : ${this.div}, Roll No : ${this.rollNo}, Standard : ${this.std}`);
    }
}
let collegeVp = new College("VP","Sachin","D","528","12th");
let collegeSkn = new College("SKN","Saurabh","A","5","11th");
let collegeFc = new College("FC","Sham","B","28","12th");
let collegeSP = new College("SP","Nitin","C","52","9th");
let collegeGurukul = new College("Gurukul","Ram","D","528","12th");

const raj = [collegeVp,collegeSkn,collegeFc,collegeSP,collegeGurukul];
console.log(raj);
for (const college of raj) {
    college.show();
}

console.log(`------------------------------------------------------------------------------------`);

class college {
constructor(name, location,courses){
    this.name = name;
    this.location = location;
    this.courses = courses;
}
}

function traverseObject(obj){
for (const key in obj) {
    const element = obj[key];
   console.log(`${key}: ${element}`);     
    }
}

const college1 = new college("SKN","Pandharpur","B.Tech");
const college2 = new college("VP","Baramati","B.Tech");


traverseObject(college1);
traverseObject(college2);



