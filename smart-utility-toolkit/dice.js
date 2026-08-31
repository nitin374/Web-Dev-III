const crypto = require("crypto");

const numberOfRolls = 5;

for (let roll = 1; roll <= numberOfRolls; roll++) {
  const diceValue = crypto.randomInt(1, 7);
  console.log(`Dice Rolled: ${diceValue}`);
}
