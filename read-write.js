const fs = require("fs");

// fs.writeFile("./longText.txt", "Hello", () => {
//   console.log("File created successfully");
// });

// // write file Asynchronously
// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile("longText.txt", data, (err) => {
//       console.log("File write success");
//     });
//   }
// });

// // write file Synchronously
// const text = fs.readFileSync("text.txt");
// fs.writeFile("longText.txt", text, (err) => {
//   if(err) {
//     console.log(err.message);

//   }else{
//     console.log('File write success');
//   }
// });

// const data = fs.createReadStream("./longText.txt");
// // console.log(data);
// data.on("data", (chunk) => {
//   console.log("chunk.toString()");
// });
