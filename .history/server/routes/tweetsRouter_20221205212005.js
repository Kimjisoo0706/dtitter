import express from "express";
import tweetsController from "../controllers/tweetsController.js"
const router = express.Router();

router.get('/', tweetsController.getTweets);

export default router;