

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  // Create an array and add all employee objects to it
  const arrayEmployees = [
    emp_anil,
    emp_radha,
    emp_rishi,
    emp_sonali,
    emp_monika,
    emp_viny,
    emp_mahi,
  ];
  
  // Sort the array in ascending order of Employee Id's and log employee details
  arrayEmployees.sort((a, b) => a.emp_id - b.emp_id);
  console.log("Sorted by Employee Id (Ascending):");
  arrayEmployees.forEach((emp) =>
    console.log(`Id: ${emp.emp_id}, Name: ${emp.emp_name}, Department: ${emp.emp_dept}`)
  );
  
  // Sort the array in ascending order of employee department and log Id, dept, & Company
  arrayEmployees.sort((a, b) => a.emp_dept.localeCompare(b.emp_dept));
  console.log("\nSorted by Employee Department (Ascending):");
  arrayEmployees.forEach((emp) =>
    console.log(`Id: ${emp.emp_id}, Department: ${emp.emp_dept}, Company: ${emp.emp_company}`)
  );
  
  // Sort the array in descending order of employee salary and log Name, Salary, & Company
  arrayEmployees.sort((a, b) => b.emp_salary - a.emp_salary);
  console.log("\nSorted by Employee Salary (Descending):");
  arrayEmployees.forEach((emp) =>
    console.log(`Name: ${emp.emp_name}, Salary: ${emp.emp_salary}, Company: ${emp.emp_company}`)
  );
  