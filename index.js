//Imported  the fs module
const fs = require("fs");
const http = require("http");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//FILES
// //Blocking, Synchronous Way
// //Used to read file in sync mode. It takes two arguments i.e. path and character encoding
// const readFile = fs.readFileSync("./txt/input.txt", "utf-8");
// // print the output in the console
// console.log(readFile);

// //Create a string to write into the file
// const writeFile = `This is what we know about the avacado: ${readFile}.\n Created on ${Date.now()}`;

// //Used to write the file in the sync Mode. It take two arguments i.e. path and what needs to be written
// fs.writeFileSync("./txt/output.txt", writeFile);

// //Non-Blocking Async way
// //CallBack Hell
// //Used to read file in async mode. It takes following  arguments i.e. path, character encoding,  callback function with two arguments i.e. error and the data
// //If character encoding not present the output will have buffer
// const readFileAsync = fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   //Logging error
//   if (err) return console.log("ERROR");
//   //print the output, this will run second
//   console.log(data1);
//   // another read file function
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     //this will run third
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       //this will run fourth
//       console.log(data3);
//       //Used to write the content in async mode. It takes following arguments i.e. path, data need to be written, character encoding and the callback function with err as arguments
//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2}\n${data3}\n${Date.now()}`,
//         "utf-8",
//         (err) => {
//           //this will run fifth
//           console.log("Your file has been written");
//         }
//       );
//     });
//   });
// });
// //This will run first
// console.log("Will read file ");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SERVER

//method to create a server. It will take callback function with two args i.e. request and response
const server = http.createServer((req, res) => {
  console.log(req);
  //Send the response
  res.end("Hello from the server");
});

//method to listen to the port. It will take two args i.e. port and callback function
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
