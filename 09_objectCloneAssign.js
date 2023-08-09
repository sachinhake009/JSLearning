

const arrayNums = [20,3,4,56,90,400,49]
const shallowClonedArray = arrayNums.slice();
shallowClonedArray.push(55,66);
console.log("Original array:", arrayNums);
console.log("Shallow cloned array:", shallowClonedArray);

const clonedArray  = [...arrayNums];
arrayNums.push(10,25);
console.log("Original array :",arrayNums);
console.log("Cloned array :",clonedArray);

const arrayEven = [2,30,14,8];
const mergedArray = [...arrayNums, ...arrayEven];
console.log("Merged Arrar :",mergedArray);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        agg_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    address: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4564 32", "+91- 9096 5678 77"]
}