import express from "express";
import * as tweetsController from "../controllers/tweetsController.js";
const router = express.Router();

router.get('/', tweetsController.getTweets);
router.get('/:id', tweetsController.getTweetsById);
router.post('/', tweetsController.postTweet);
router.put('/:id', tweetsController.updateTweet);
router.delete('/:id',tweetsController.deleteTweet);
export default router;