

let professor = {
    name: "Professor Patil",
    age: 45,
    gender: "Male",
    expertise: "Computer Science",
    teachingYears: 20,
    degrees: {
      engineering: "CSC",
      PhD: "Advanced Computing",
      masters: "Computer Science",
    },
    certificates: [
      "Hacker Rank Participation",
      "Certificate in IFE course",
      "Certificate in Adv Programming",
    ],
    concatDegrees: function() {
        const allDegrees = Object.values(this.degrees).join(", ");
        console.log("Teacher degrees: " + allDegrees);
        return allDegrees;
    },
  };
  
  // Adding a new property
  professor.totalExperience = "14 years";
  
  // Modifying an existing property
  professor.teachingYears = 25;

  professor.concatDegrees();
  
  // Adding a new certificate
  professor.certificates.push("Oracle Certified");
  
  // Logging the last element of the 'certificates' array
  console.log(professor.certificates[professor.certificates.length - 1]);
  
  // Logging the complete object
  console.log(professor);
  