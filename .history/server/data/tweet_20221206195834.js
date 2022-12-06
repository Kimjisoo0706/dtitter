let tweets = [
  {
    id: '1',
    text: '안녕하세요',
    createdAt: new Date().toString(),
    name: 'Bob',
    username: 'bob',
    url: ''
  },
  {
    id: '2',
    text: '반갑습니다',
    createdAt: new Date().toString(),
    name: 'leta',
    username: 'leta',
    url: ''
  },
];

export async function getAll() {
  return tweets;
}

export async function getAllByUsername(username) {
  return tweets.filter((tweet) => tweet.username === username);
}

export async function getById(id) {
  return tweets.find(tweet => tweet.id === id);
}

export async function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function update(id, text) {
  const tweet = tweets.find(tweet => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export async function remove(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);
}