import express from "express";
import { getTweets, createTweet } from "./tweet.controller.js";

const router = express.Router();

router.get("/", getTweets);
router.post("/", createTweet);

export default router;
