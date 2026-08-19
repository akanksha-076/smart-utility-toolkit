// dice.js
const crypto = require("crypto");

function rollDice() {
  // crypto.randomInt(min, max) -> min inclusive, max exclusive
  return crypto.randomInt(1, 7);
}

// Simulate multiple rolls
for (let i = 1; i <= 5; i++) {
  console.log(`Dice Rolled: ${rollDice()}`);
}