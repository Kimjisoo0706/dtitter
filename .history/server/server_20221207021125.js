import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js"
import dotenv from "dotenv";
import { config } from "./config.js";
import { Server } from "socket.io";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

app.use('/tweets', tweetsRouter);
app.use('/auth', authRouter);


app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

const server = app.listen(config.host.port, () => {
  console.log(`Server Running! localhost:${config.host.port}`)
});

const socketIO = new Server(server, {
  cors: {
    origin: '*',
  },
});

socketIO.on('connection', (socket) => {
  console.log('Client is here!');
  socketIO.emit('dwiter', 'Hello!');

})

setInterval(() => {
  socketIO.emit('dwiter', 'Hello!');
}, 1000);