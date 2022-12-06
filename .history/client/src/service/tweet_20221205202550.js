export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    const respose = await fetch(`${this.baseURL}/tweets${query}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });
    const data = await respose.json();
    if(respose.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    const respose = await fetch(`${this.baseURL}/tweets${query}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ text, username: 'js', name: 'js '}),
    });
    const data = await respose.json();
    if(respose.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('tweet not found!');
    }
    tweet.text = text;
    return tweet;
  }
}
