import tweetsService from "../services/tweetsService.js"

export const getTweets = async (req, res, next) => {
  try {
    const userName = req.query.username;
    const data = await tweetsService.getTweets(userName)
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
}
