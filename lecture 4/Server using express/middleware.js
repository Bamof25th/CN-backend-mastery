const express = require("express");

const server = express();

//First middleware (Path Level)
function firstMiddleware(req, res, next) {
    console.log("this is first middleware");
    next();
}
//Second middleware (Path Level)
function secondMiddleware(req, res, next) {
    console.log("this is second middleware");
    next();
}
// Application level middleware.
function globalMiddleware(req, res, next) {
    console.log('This is global middleware');
    next();
}

// this is going to be executed for all req.
server.use(globalMiddleware);

// Request handeler => route- level middleware going to be executed for /send req.
server.get("/send", [firstMiddleware, secondMiddleware], (req, res) => {
  res.send("hello Express 1 - you  are batman.");
});

server.listen(3000, () => {
  console.log("Listening to port 3000");
});
