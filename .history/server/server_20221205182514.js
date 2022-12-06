import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

app.use('/tweets', tweetsRoute);

app.use((req, res, next) => {
  res.sendStatus(404).json
})

app.listen(8080, () => {
  console.log('Server Running!')
})