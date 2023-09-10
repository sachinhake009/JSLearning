

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
  
  // Add all employee objects to an array
  const employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
  
  // 1. Find all employees from 'TCS' using filter() and log Company name & Employee name.
  const tcsEmployees = employees.filter((employee) => employee.emp_company === 'TCS');
  console.log("Employees from TCS:");
  tcsEmployees.forEach((employee) => {
    console.log(`Company: ${employee.emp_company}, Employee Name: ${employee.emp_name}`);
  });
  
  // 2. Calculate the average salary of employees from the 'Wipro' company.
  const wiproEmployees = employees.filter((employee) => employee.emp_company === 'Wipro');
  const wiproSalarySum = wiproEmployees.reduce((sum, employee) => sum + employee.emp_salary, 0);
  const wiproAverageSalary = wiproSalarySum / wiproEmployees.length;
  console.log(`Average Salary at Wipro: ${wiproAverageSalary}`);
  
  // 3. Calculate the average salary of employees from companies 'Wipro' or 'Infy'.
  const wiproOrInfyEmployees = employees.filter(
    (employee) => employee.emp_company === 'Wipro' || employee.emp_company === 'Infy'
  );
  const wiproOrInfySalarySum = wiproOrInfyEmployees.reduce((sum, employee) => sum + employee.emp_salary, 0);
  const wiproOrInfyAverageSalary = wiproOrInfySalarySum / wiproOrInfyEmployees.length;
  console.log(`Average Salary at Wipro or Infy: ${wiproOrInfyAverageSalary}`);
  