import jwt from "jsonwebtoken";
import { Server } from "socket.io";
import { config } from "../config.js"

class Soket {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: '*',
      },
    });

    this.io.use((socket, next) => {
      const token = socket.handshake.auth.token;
      if(!token) {
        return next(new Error('Authenication error'));
      }
      jwt.verify
    })
  }
}