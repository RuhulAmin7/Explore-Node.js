const url = require("url");
const http = require("http");
const path = require("path");

const PORT = 4000;
const hostname = "localhost";
const server = http.createServer((req, res) => {
  const method = req.method;
  const parsedUrl = url.parse(req.url, true);
  const queryObj = parsedUrl.query;
  const reqHeaders = req.headers;
  const bufferData = [];
  let bodyData;

  req.on("data", (chunk) => {
    bufferData.push(chunk);
  });

  req.on("end", () => {
    bodyData = Buffer.concat(bufferData).toString();
    res.end(bodyData);
  });
});

server.listen(4000, hostname, () => {
  console.log(`Server is running at http://${hostname}:${PORT}`);
});
