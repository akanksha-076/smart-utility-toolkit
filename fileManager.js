// fileManager.js
const fs = require("fs");

const fileName = "test.txt";

// CREATE
console.log("Creating File...");
fs.writeFileSync(fileName, "Hello Node.js");
console.log("File Created");

// READ
console.log("Reading File");
const content = fs.readFileSync(fileName, "utf8");
console.log(content);

// UPDATE (append)
fs.appendFileSync(fileName, "\nLearning FS Module");
console.log("File Updated");
const updatedContent = fs.readFileSync(fileName, "utf8");
console.log(updatedContent);

// DELETE
try {
  fs.unlinkSync(fileName);
  console.log("File Deleted");
} catch (err) {
  console.log("❌ Error deleting file:", err.message);
}