// Reading to a file
// let fs= require("fs");
// let fname= "dikshya.txt"
// fs.promises.readFile(fname,"utf8")
// .then((result) => console.log(result))
// .catch((err) => console.log("Got an error"));



//  Writing to a file;
let fs= require("fs");
const file = 'hello_world.txt';
const data = 'Hello, World!';

fs.promises.writeFile(file, data, "utf8")
  .then(() => console.log(`Successfully wrote '${data}' to ${file}.`))
  .catch((err) => console.log("Got an error"));


