import express from "express";
const router = express.Router();

router.get('/', getTweetsController);

export default router;