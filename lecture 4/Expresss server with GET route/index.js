// Please don't change the pre-written code
// Import the necessary modules here
const express = require('express');

// Write your code here

const server = express();

server.get('/' , (req, res)=>{
    res.send("Be a Coding Ninja.");
});



module.exports = { server };
