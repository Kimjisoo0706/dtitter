let tweets = [
  {
    id: '1',
    text: '안녕하세요',
    createdAt: Date.now.toString(),
    name: 'Bob',
    username: 'bob',
    url: ''
  },
  {
    id: '2',
    text: '반갑습니다',
    createdAt: Date.now.toString(),
    name: 'leta',
    username: 'leta',
    url: ''
  },
];

export function getAllTweets() {
  return tweets;
};

export function getAllTweetsByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
};

export function getTweetById(id) {
  return tweets.find(tweet => tweet.id === id);
}