const http = require("http");

const server = http.createServer((req, res) => {
  res.write("this iss coming from nodeJS server ");
  console.log(req.url);
  if (req.url == "/first") {
   return res.end("This is first responce");
  }
  res.end("you are welcome");
});

server.listen(8080);

console.log("running on 8080");
