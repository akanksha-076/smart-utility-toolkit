// calculator.js
// process.argv is an array of command-line arguments
// [0] = node path, [1] = file path, [2] = operation, [3] = num1, [4] = num2

const operation = process.argv[2];
const num1 = parseFloat(process.argv[3]);
const num2 = parseFloat(process.argv[4]);

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "div":
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    default:
      return null;
  }
}

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log("❌ Invalid input. Usage: node calculator.js <add|sub|mul|div> <num1> <num2>");
} else {
  try {
    const result = calculate(operation, num1, num2);
    if (result === null) {
      console.log("❌ Invalid operation. Use: add, sub, mul, or div");
    } else {
      console.log(`Result: ${result}`);
    }
  } catch (err) {
    console.log("❌ Error:", err.message);
  }
}