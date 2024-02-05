const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    //expecting data from the client
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("DATA is recived");
    });
  } else {
    console.log("function Ends here");
    res.end("welcome to node.js");
  }
});

server.listen(3100);

console.log("welcome you are on 3100");
