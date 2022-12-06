import express from "express";
import "express-async-errors";

const tweets = [
  {
    id: '1',
    text: '안녕하세요',
    createdAt: Date.now.toString(),
    name: 'Bob',
    username: 'bob',
    url: ''
  },
]
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;