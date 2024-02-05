import express from "express";
import { Server } from "socket.io";
import cors from "cors";
import http from "http";
import { connectMongoose } from "./config.js";
import { chatModel } from "./chat.schema.js";
let Port = 3200;
const app = express();

// 1.create Server using Http

const server = http.createServer(app);

// 2. Create Socket Server

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// 3. To use Socket Events.

io.on("connection", (socket) => {
  console.log("New WebSocket connection!");

  socket.on("join", (data) => {
    socket.userName = data;
    // send old messages to the client
    chatModel
      .find()
      .sort({ timestamp: 1 })
      .limit(50)
      .then((messages) => {
        socket.emit("load_msgs", messages);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  socket.on("new_message", (message) => {
    let userMessage = {
      userName: socket.userName,
      message: message,
    };

    const newChat = new chatModel({
      userName: socket.userName,
      message: message,
      timestamp: new Date(),
    });

    newChat.save();

    // Brodcat the message to all the client
    socket.broadcast.emit("broadcast_message", userMessage);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(Port, () => {
  connectMongoose();
  console.log(`connected to port:${Port}`);
  console.log(`Mongoose connected...`);
});
