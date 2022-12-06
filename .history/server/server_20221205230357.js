import { createdApp } from "./app.js"




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