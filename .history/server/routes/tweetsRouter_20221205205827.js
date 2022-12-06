import express from "express";
import tweetsController from "../controllers/tweetsController.js"
const router = express.Router();

router.get('/', tweetsController);

export default router;