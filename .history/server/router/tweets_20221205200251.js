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
  {
    id: '2',
    text: '반갑습니다',
    createdAt: Date.now.toString(),
    name: 'leta',
    username: 'leta',
    url: ''
  },
];
const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get('/', (req, res, next) => {
  const username = req.query.username;
  const data = username ? tweets.filter(t => t.username === username)
  : tweets;
  res.status(200).json(data);
})
// GET /tweets/:id
// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;