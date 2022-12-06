export let tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
  {
    id: 2,
    text: '드림코딩에서 강의 들으면 정말 좋으다',
    createdAt: '2021-05-011T04:20:57.000Z',
    name: 'Leta',
    username: 'leta',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

export const getTweets = async (userName) => {
  if (userName) {
    let userTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      if (tweets[i].username === userName) {
        userTweets.push(tweets[i]);
      }
    }
    return userTweets;
  } else {
    return tweets;
  }
};

export const getTweetsById = async (tweetsId) => {
  let userTweets = [];
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].id === tweetsId) {
      userTweets.push(tweets[i]);
    };
  };
  return userTweets;
};

export const postTweet = async (tweet) => {
  tweets.push(tweet);
};

export const updateTweet = async (tweetsId, tweet) => {
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].id === tweetsId) {
      tweets[i] = tweet;
    };
  };
};

export const deleteTweet = async (tweetsId) => {
  for (let i = 0; i < tweets.length; i++) {
    if (tweets[i].id === tweetsId) {
      tweets.splice(i, 1);
      i--;
    };
  }
};
