

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
  }
  
  // Create an array to store employee objects
  const arrayEmps = [
    new Employee(22, "Anil", "IT", 50000, "TCS"),
    new Employee(33, "Radha", "HR", 74000, "Wipro"),
    new Employee(55, "Rishi", "Finance", 47000, "TCS"),
    new Employee(66, "Sonali", "Finance", 45000, "Infy"),
    new Employee(77, "Monika", "IT", 40000, "Wipro"),
    new Employee(88, "Vinayak", "IT", 75000, "TCS"),
    new Employee(99, "Mahesh", "HR", 85000, "Infy"),
  ];
  
  // 1. Find all employees from 'Wipro' company
  const wiproEmployees = arrayEmps.filter((emp) => emp.emp_company === "Wipro");
  
  // 2. Find all employees from 'IT' OR 'HR' dept
  const itOrHrEmployees = arrayEmps.filter(
    (emp) => emp.emp_dept === "IT" || emp.emp_dept === "HR"
  );
  
  // 3. Find all employees whose emp id's are greater than 50
  const employeesWithIdGreaterThan50 = arrayEmps.filter((emp) => emp.emp_id > 50);
  
  // 4. Find all employees whose names start with letter 'A' or 'V' or 'M'
  const employeesWithNamesStartingWithAVM = arrayEmps.filter(
    (emp) =>
      emp.emp_name.startsWith("A") ||
      emp.emp_name.startsWith("V") ||
      emp.emp_name.startsWith("M")
  );
  
  // 5. Find the average salary of the employees for all departments
  const averageSalaryAllDepartments =
    arrayEmps.reduce((total, emp) => total + emp.emp_salary, 0) / arrayEmps.length;
  
  // 6. Find the average salary for 'IT' department
  const itEmployees = arrayEmps.filter((emp) => emp.emp_dept === "IT");
  const averageSalaryITDepartment =
    itEmployees.reduce((total, emp) => total + emp.emp_salary, 0) / itEmployees.length;
  
  console.log("Employees from Wipro:", wiproEmployees);
  console.log("Employees from IT or HR department:", itOrHrEmployees);
  console.log("Employees with ID greater than 50:", employeesWithIdGreaterThan50);
  console.log(
    "Employees with names starting with A, V, or M:",
    employeesWithNamesStartingWithAVM
  );
  console.log("Average salary for all departments:", averageSalaryAllDepartments);
  console.log("Average salary for IT department:", averageSalaryITDepartment);
  