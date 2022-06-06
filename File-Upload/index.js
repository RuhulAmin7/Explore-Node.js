const fs = require("fs");
const http = require("http");
const path = require("path");
const formidable = require("formidable");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (req.url === "/" && req.method.toLowerCase() === "get") {
    // res.write(`<input type="text"/>`);
    // res.write(`<input type="submit"/>`);
    const indexFile = fs.readFileSync("./index.html");
    res.writeHead(200, { "content-type": "text/html" });
    res.write(indexFile);
    res.end();
  } else if (url === "/process" && method.toLowerCase() === "post") {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        res.end(err);
      } else {
        fs.writeFileSync(
          `./resources/${fields.email}.json`,
          JSON.stringify(fields)
        );
        const fileName = files.photo.originalFilename;
        const tempPath = files.photo.filepath;
        fs.renameSync(tempPath, `${__dirname}/resources/${fileName}`);
        res.end("Thanks for submitting data");
      }
    });
    // another way to getting form data
    // req.on("data", (chunk) => {
    //   console.log(chunk.toString());
    // });

    // req.on("end", () => {
    //   res.end("Thanks for submitting");
    // });
  }
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
