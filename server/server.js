import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js"
import { config } from "./config.js";
import { initSocket } from "./connection/socket.js";
import { db } from "./db/dabase.js";
import { csrfCheck } from "./middleware/csrf.js";



const app = express();

const corsOption = {
  origin: config.cors.allowerOrigin,
  optionSuccessStatus: 200,
  credential: true
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use(morgan('combined'));
app.use(helmet());

app.use(csrfCheck);
app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);


app.use((req, res, next) => {
  res.sendStatus(404);
});


app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

db.getConnection().then(connection => console.log('db connection!'));

const server = app.listen(config.port, () => {
  console.log(`Server Running! localhost:${config.host.port}`)
});

initSocket(server)