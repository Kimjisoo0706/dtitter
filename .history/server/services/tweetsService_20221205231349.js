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
  await tweetsDao.postTweet(tweet);
};

export const updateTweet = async (tweetsId, tweet) => {
  await tweetsDao.updateTweet(tweetsId, tweet);
}

export const deleteTweet = async (tweetsId) => {
  await tweetsDao.deleteTweet(tweetsId);
}
