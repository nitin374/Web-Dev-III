const [, , operation, firstValue, secondValue] = process.argv;

if (!operation || firstValue === undefined || secondValue === undefined) {
  console.log("Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>");
  process.exit(1);
}

const number1 = Number(firstValue);
const number2 = Number(secondValue);

if (Number.isNaN(number1) || Number.isNaN(number2)) {
  console.log("Error: Please enter valid numbers.");
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case "add":
    result = number1 + number2;
    break;
  case "subtract":
    result = number1 - number2;
    break;
  case "multiply":
    result = number1 * number2;
    break;
  case "divide":
    if (number2 === 0) {
      console.log("Error: Cannot divide by zero.");
      process.exit(1);
    }
    result = number1 / number2;
    break;
  default:
    console.log("Error: Invalid operation. Use add, subtract, multiply, or divide.");
    process.exit(1);
}

console.log(`Result: ${result}`);
