//Imported  the fs module
const fs = require("fs");

//Used to read file in sync mode. It takes two arguments i.e. path and character encoding
const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// print the output in the console
console.log(readFile);

//Create a string to write into the file
const writeFile = `This is what we know about the avacado: ${readFile}.\n Created on ${Date.now()}`;

//Used to write the file in the sync Mode. It take two arguments i.e. path and what needs to be written
fs.writeFileSync("./txt/output.txt", writeFile);
