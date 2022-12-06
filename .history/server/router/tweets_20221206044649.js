import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as tweetController from "../controller/tweet.js";
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', tweetController.getTweets);

// GET /tweets/:id
router.get('/:id', tweetController.getTweet);



// POST /tweets
router.post(
  '/',
  [
    body('text')
      .trim()
      .isLength({min: 3})
      .withMessage('3글자 이상 입력해주세요'),
      validate
  ],
  tweetController.createTweet);

// PUT /tweets/:id
router.put('/:id', tweetController.updateTweet);

// DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet);

export default router;