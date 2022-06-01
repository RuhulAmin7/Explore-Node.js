const http = require("http");
const fs = require("fs");

const port = 4000;
const hostname = "localhosT"; //127.0.0.1

// const myServer = http.createServer((req, res) => {
//   res.end("<h1>Your server is running</h1>");
// });

// myServer.listen(port, hostname, () => {
//   console.log(`Server is running on http://${hostname}:${port}`);
// });

const myServer = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    console.log("This is home page");
    res.writeHead("200", { "content-type": "text/plain" });
    res.write("This is home page");
    res.end();
  } else if (req.method === "GET" && req.url === "/about") {
    console.log("This is about page");
    res.writeHead("200", { "content-type": "text/html" });
    res.write("<h1>This is about page</h1>");
    res.end();
  } else if (req.method.toLowerCase() === "get" && req.url === "/get-page") {
    res.writeHead("200", { "content-type": "text/plain" });
    const indexPage = fs.readFileSync("./test.txt");
    res.write(indexPage);
    console.log(indexPage.toString());
    res.end();
  } else {
    console.log("Not found 404");
    res.writeHead("404", { "Content-Type": "text/html" });
    res.write("<h1>Server Not found 404</h1>");
    res.end();
  }
});

myServer.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
