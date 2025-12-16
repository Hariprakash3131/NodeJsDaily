const path = require("path");

console.log("File name:", path.basename(__filename));
console.log("Folder name:", path.dirname(__filename));
console.log("Extension:", path.extname(__filename));

const fullPath = path.join(__dirname, "files", "data.txt");
console.log("Joined Path:", fullPath);
