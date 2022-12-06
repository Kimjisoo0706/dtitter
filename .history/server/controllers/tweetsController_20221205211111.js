import e from "express";
import tweetsService from "../services/tweetsService.js"

export const getTweets = async (req, res, next) => {
  try {
    const userName = req.query.username;
    if(userName) {
      let userTweets = await tweetsService.getTweets(userName)
      res.status(200).json(userTweets);
    } else {
      let tweets = await tweetsService.getTweets()
      res.status(200).json(tweets);
    };
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message })
  }
}
