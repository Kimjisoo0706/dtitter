import express from "express";
import "express-async-errors";

let tweets = [
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
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find(t => t.id === id);
  if(tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `tweet id(${id}) not found` });
  }
})
// POST /tweets
router.post('/', (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
})
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;