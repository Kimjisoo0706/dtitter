import express from "express";
import { getTweets } from "../controllers/tweetsController.js"
const router = express.Router();

router.get('/', getTweets);

export default router;