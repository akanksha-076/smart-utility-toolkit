// app.js
const isEven = require("./modules/isEven");
const log = require("./modules/logger");

log("App started");

const number = 8;
if (isEven(number)) {
  log(`${number} is even`);
} else {
  log(`${number} is odd`);
}