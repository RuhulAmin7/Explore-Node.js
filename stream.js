const fs = require("fs");
const http = require("http");

// const readStream = fs.createReadStream("./test.txt");
// const writeStream = fs.createWriteStream("./newFile.txt");

// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// another way to write file
// readStream.pipe(writeStream);

const server = http.createServer((req, res) => {
  if (req.url === "/video") {
    const data = fs.createReadStream("./video.mp4");

    res.writeHead("200", { "Content-Type": "video/mp4" });
    data.on("data", (chunk) => {
      res.write(chunk);
    });
    data.on("end", () => {
      res.end();
    });
  }
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
