// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = () => {
  app.get("/", (req, res, next) => {
    console.log(req.method);
    console.log(req.path);
    next();
  });
};

logRequest();


app.get("/", logRequest,(req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
