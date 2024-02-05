const employees = [
  { id: 1, name: "Alice", department: "sales", salary: 40000 },
  { id: 2, name: "Bob", department: "engineering", salary: 50000 },
  { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
  { id: 4, name: "David", department: "sales", salary: 35000 },
  { id: 5, name: "Emily", department: "engineering", salary: 55000 },
];

function increaseSalaries(employees) {
  // Map over the array and update salaries based on department
  const updatedEmployees = employees.map((employee) => {
    let salaryIncreasePercentage = employee.salary;

    switch (employee.department) {
      case "sales":
        salaryIncreasePercentage = (salaryIncreasePercentage * 1.1).toFixed(1);
        break;
      case "engineering":
        salaryIncreasePercentage = (salaryIncreasePercentage * 1.15).toFixed(1);
        break;
      default:
        salaryIncreasePercentage = (salaryIncreasePercentage * 1.05).toFixed(1);
        break;
    }

    // Calculate the new salary and create a new object with updated salary
    // const newSalary = (employee.salary * (1 + salaryIncreasePercentage)).toFixed(1);
    return { ...employee, salaryIncreasePercentage };
  });

  return updatedEmployees;
}

// Example usage

const updatedEmployees = increaseSalaries(employees);

// // Check if salaries are updated
console.log(employees.map((employee) => employee.salary));
console.log(updatedEmployees.map((employee) => employee.salary));
