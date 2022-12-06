import express from "express";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet"
import route from "./routes/index.js"

const createdApp = () => {
  const app = express();
  app.use(express.json())
  app.use(cors());
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(route);
};

export { createdApp }