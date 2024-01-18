const http = require("http");
const fs = require("fs");
const read = fs.readFileSync("server.txt").toString();
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from other side");
  } else if (req.url == "/userapi") {
    res.end(read);
  }

  console.log(req.url);
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listenindg");
});
