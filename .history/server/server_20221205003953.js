import express from "express";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet"

const app = express();
app.use(express.json())
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

let tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 2,
    text: '드림코딩에서 강의 들으면 정말 좋으다',
    createdAt: '2021-05-011T04:20:57.000Z',
    name: 'Leta',
    username: 'leta',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

app.get('/tweets', async (req, res, next) => {
  try {
    const userName = req.query.username;
    let userTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].username === userName) {
        userTweets.push(tweets[i]);
      }
    }
    if (userName) {
      res.status(200).json(userTweets);
    } else {
      res.status(200).json(tweets);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message })
  }
});

app.get('/tweets/:id', async (req, res, next) => {
  try {
    const tweetsId = parseInt(req.params.id);
    let userTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].id === tweetsId) {
        userTweets.push(tweets[i]);
      };
    };
    res.status(200).json(userTweets);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  };
});

app.post('/tweets', async (req, res, next) => {
  const tweet = req.body
  tweets.push(tweet);
  res.status(201).json({ message: 'tweet post!' })
  console.log(tweets)
})

app.put('/tweets/:id', async (req, res, next) => {
  try {
    const tweetsId = parseInt(req.params.id);
    const updateTweet = req.body
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].id === tweetsId) {
        tweets[i] = updateTweet;
      };
    };
    res.status(200).json({ message: 'tweet update!' })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  };
});

app.delete('/tweets/:id', async (req, res, next) => {
  try {
    const tweetsId = parseInt(req.params.id);
    const deleteTweet = req.body
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].id === tweetsId) {
        tweets[i] = updateTweet;
      };
    };
    res.status(200).json({ message: 'tweet update!' })
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  };
});

app.listen(8080, () => {
  console.log('Server Running!')
})