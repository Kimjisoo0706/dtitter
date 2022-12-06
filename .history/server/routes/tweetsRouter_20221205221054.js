import express from "express";
import * as tweetsController from "../controllers/tweetsController.js"
const router = express.Router();

router.get('/', tweetsController.getTweets);

export default router;