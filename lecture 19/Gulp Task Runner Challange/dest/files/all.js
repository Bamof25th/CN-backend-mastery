
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

{
  "name": "social-media-rest-api",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon ./src/app.js",
    "lint": "eslint src --ext .js",
    "lint:fix": "eslint src --ext .js --fix",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "shubham",
  "license": "MIT",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "dotenv": "^16.1.3",
    "express": "^4.18.2",
    "helmet": "^7.0.0",
    "mongoose": "^7.2.2",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.22"
  },
  "devDependencies": {
    "eslint": "^8.41.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^16.0.0",
    "eslint-plugin-promise": "^6.1.1"
  }
}

// Complete the function calculateAverage
const weather = [
    { city: "New York", temperature: 50, pressure: 1015 },
    { city: "Los Angeles", temperature: 70, pressure: 1010 },
    { city: "Chicago", temperature: 40, pressure: 1012 },
    { city: "Houston", temperature: 75, pressure: 1020 },
    { city: "Miami", temperature: 80, pressure: 1017 }
  ];
  const pressureThreshold = 115;
  function calculateAverage( pressureThreshold){
    //Implement your function here
      const tempSum= weather.filter(city=> city.pressure>=pressureThreshold).map(data=> data.temperature).reduce((temp, c)=> temp+c, 0);
      
      
      const cityCount= weather.filter(el=> el.pressure>= pressureThreshold).length
      
      const avg= tempSum/ cityCount
      console.log(
      `The average temperature of the cities with a pressure value above ${pressureThreshold} is ${avg.toFixed(
        1
      )}.`)
      return avg.toFixed(1)
      
  }
  console.log(calculateAverage(pressureThreshold))
  //Output : 68.3