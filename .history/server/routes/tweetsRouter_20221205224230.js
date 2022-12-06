import express from "express";
import * as tweetsController from "../controllers/tweetsController.js";
const router = express.Router();

router.get('/', tweetsController.getTweets);
router.get('/:id', tweetsController.getTweetsById);
router.post('/', tweetsController.postTweet);

export default router;