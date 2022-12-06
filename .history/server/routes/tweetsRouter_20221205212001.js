import express from "express";

const router = express.Router();
import tweetsController from "../controllers/tweetsController.js"
router.get('/', tweetsController.getTweets);

export default router;