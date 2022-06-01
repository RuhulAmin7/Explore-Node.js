const fs = require("fs");
const path = require("path");

// write file
// fs.writeFile("test.txt", "This is a test file", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created successfully");
//   }
// });

// append file
// fs.appendFile("test.txt", " This is another text text", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file append successfully");
//   }
// });

// read file

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// rename file
// fs.rename("test.txt", "renameFile.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Rename file successfully");
//   }
// });

// delete file
// fs.unlink("test.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

// // is exist file
// fs.exists("renameFile.txt", (result) => {
//   if (result) {
//     console.log("Found renameFile.txt");
//   } else {
//     console.log("Not found renameFile.txt");
//   }
// });

// // is exist sync
// const res = fs.existsSync("renameFile.txt");
// console.log(res);

// // file open and close
// fs.open(path.join(__dirname, "test.txt"), "r", (err, fd) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     fs.read(fd, (err, byte, buffer) => {
//       console.log(buffer.toString());
//     });
//     fs.close(fd, (err) => {
//       if (err) {
//         console.log(err.message);
//       } else {
//         console.log("File closed successfully");
//       }
//     });
//   }
// });

// // create directory
// fs.mkdir(path.join(__dirname, "New Folder"), (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Directory created successfully!");
// });

// // create directory
// fs.mkdir("./Another Folder", (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Directory created successfully!");
// });
