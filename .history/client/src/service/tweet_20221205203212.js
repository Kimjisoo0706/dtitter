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
    const respose = await fetch(`${this.baseURL}/tweets`, {
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
    const respose = await fetch(`${this.baseURL}/tweets${tweetId}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    if(respose.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const respose = await fetch(`${this.baseURL}/tweets${tweetId}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await respose.json();
    if(respose.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  }
}
