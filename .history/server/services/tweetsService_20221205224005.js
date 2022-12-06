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

export const postTweet = async (tweet) => {
  await tweetsDao.postTweet(tweet)
}
