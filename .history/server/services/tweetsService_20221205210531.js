import tweetsDao from "../models/tweetsDao.js"

export const getTweets = async (userName) => {
  const data = await tweetsDao.getTweets(userName)
  return data
}