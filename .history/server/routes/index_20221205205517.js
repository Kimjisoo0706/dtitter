import express from "express";
import tweetsRouter from "./tweetsRouter.js";

const router = express.Router();

router.use('/tweets', tweetsRouter);

export default router;

