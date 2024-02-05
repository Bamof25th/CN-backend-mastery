// No need to change the pre-written code
// Implement the features in io.on() section
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

export const app = express();
app.use(cors());

export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("Connection made.");

  // Write your code here
  socket.on("join", (data) => {
    // Emit a welcome message to the user who joined
    socket.emit("message", { text: `Welcome,${data.userName}!` });
    // Broadcast a message to all other users in the same room
    socket.broadcast.to(data.roomName).emit("message", {
      text: `${data.userName} has joined the room.`,
    });

    //Joinn the Room
    socket.join(data.roomName);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.roomName).emit("message", {
      userName: data.userName,
      text: data.message,
    });
  });

  socket.on("disconnect", () => {
    console.log("Connection disconnected.");
  });
});
