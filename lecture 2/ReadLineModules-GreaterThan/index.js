// Import required module
const readLine = require("readline");

const Solution = () => {
  const result = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  result.question("Enter the first number: ", (num1) => {
    result.question("Enter the second number: ", (num2) => {
      const maxNum = Math.max(Number(num1), Number(num2));
      console.log(`The maximum of the two numbers is: ${maxNum}`);

      result.close();
    });
  });
};

Solution();
module.exports = Solution;
