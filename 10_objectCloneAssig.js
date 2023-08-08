

// Create an object using literals for personal details:

let sachin = {
    fullName : "Sachin Hake",
    age : "23",
    Addrass : "Sonke Pandharpur",
    No : "9995555999"
    }
     console.log(sachin);

    //  Create an object using literals for college details:

   let college = {
        collegeName : "SkN",
        collegeLoction : "Pandharpur",
        pin : "413304",
        eductionType : "Tecnical"
   }
    console.log(college);

    // Merge these two objects and log details on the console:

   const mergedDetails = { ...sachin, ...college };
console.log("Merged Details:", mergedDetails);

// Create an array of your friend names and freeze it:

const addfriend = ["Sagar", "Sambhaji", "Onkar", "Ravi"];
Object.freeze(addfriend);

// Iterate over the frozen array using a for...of loop and log friend names on the console:

for (const friend of addfriend) {
    console.log(friend);
  }
  
//   Reverse the word "Technology" from the given string "Codemind Technology":

const company = "Codemind Technology";
const words = company.split(" ");
const reversedWord = words[1].split("").reverse().join("");
console.log(reversedWord);


