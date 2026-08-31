const isEven = require("./modules/isEven");
const log = require("./modules/logger");

const input = Number(process.argv[2]);

if (process.argv[2] === undefined || Number.isNaN(input)) {
  log("Usage: node app.js <number>");
  process.exit(1);
}

log(`Number entered: ${input}`);

if (isEven(input)) {
  log(`${input} is even.`);
} else {
  log(`${input} is odd.`);
}
