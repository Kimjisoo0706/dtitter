import * as createdApp from "./app.js"





// app.get('/tweets/:id', async (req, res, next) => {
//   try {
//     const tweetsId = parseInt(req.params.id);
//     let userTweets = [];
//     for (let i = 0; i < tweets.length; i++) {
//       if (tweets[i].id === tweetsId) {
//         userTweets.push(tweets[i]);
//       };
//     };
//     res.status(200).json(userTweets);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   };
// });

// app.post('/tweets', async (req, res, next) => {
//   const tweet = req.body
//   tweets.push(tweet);
//   res.status(201).json({ message: 'tweet post!' })
//   console.log(tweets)
// })

// app.put('/tweets/:id', async (req, res, next) => {
//   try {
//     const tweetsId = parseInt(req.params.id);
//     const updateTweet = req.body
//     for (let i = 0; i < tweets.length; i++) {
//       if (tweets[i].id === tweetsId) {
//         tweets[i] = updateTweet;
//       };
//     };
//     res.status(200).json({ message: 'tweet update!' })
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   };
// });

// app.delete('/tweets/:id', async (req, res, next) => {
//   try {
//     const tweetsId = parseInt(req.params.id);
//     for (let i = 0; i < tweets.length; i++) {
//       if (tweets[i].id === tweetsId) {
//         tweets.splice(i, 1);
//         i--;
//       };
//     };
//     res.status(200).json({ message: 'tweet delete!' })
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   };
// });

const startServer = async () => {
  const app = createdApp();
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server Running! PORT:${PORT}`)
  })
};

startServer();