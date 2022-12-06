import tweetsDao from "../models/tweetsDao.js"

const getTweets = async (userName) => {
  const data = tweetsDao.getTweets(userName)
}