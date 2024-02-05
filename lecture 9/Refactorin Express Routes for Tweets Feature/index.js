import express from "express";
import {
  getTweets,
  createTweet,
} from "./src/features/tweet/tweet.controller.js";
import * as tweetsRouter from "./src/features/tweet/tweet.routes.js";

const app = express();

// TODO: Refactor these route handlers into a separate routes file using express Router
// app.get("/api/tweets", getTweets);
app.use("/api/tweets", tweetsRouter);
// app.post("/api/tweets", createTweet);


app.listen(5000, () => {
  console.log("server is listening at port 5000");
});

