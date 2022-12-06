import * as tweetsDao from "../models/tweetsDao.js"

export const getTweets = async (userName) => {
  if(userName){
    const userTweets = await tweetsDao.getTweets(userName);
    return userTweets;
  } else {
    const tweets = await tweetsDao.getTweets();
    return tweets;
  }
};

export const getTweetsById = async (tweetsId) => {
  const userTweets = await tweetsDao.getTweetsById(tweetsId);
  return userTweets;
};

export const postTweet = async (text, name, username) => {
  await tweetsDao.postTweet(text, name, username)
}
