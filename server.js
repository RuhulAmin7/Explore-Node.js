const http = require("http");

const port = 4000;
const hostname = "localhost"; //127.0.0.1

const myServer = http.createServer((req, res) => {
  res.writeHead("202", { "content-type": "text/plain" });
  res.write("Hello");
  res.end();
});

myServer.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
