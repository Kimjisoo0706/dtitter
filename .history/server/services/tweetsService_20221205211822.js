import tweetsDao from "../models/tweetsDao.js"

const getTweets = async (userName) => {
  if(userName){
    const userTweets = await tweetsDao.getTweets(userName)
    return userTweets
  } else {
    const tweets = await tweetsDao.getTweets()
    return tweets
  }
}

export default getTweets