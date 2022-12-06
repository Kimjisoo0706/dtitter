import { createdApp } from "./app.js"

const startServer = async () => {
  const app = createdApp();
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server Running! PORT:${PORT}`)
  })
};

startServer();