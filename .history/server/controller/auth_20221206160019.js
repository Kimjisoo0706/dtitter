import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js"

const jwtSecretKey = 'F2fghslaef';
const jwtExpriresInDays = '2d';
const bcryptSaltRounds = 12;

export async function signup (req, res, next) => {
  const { username, password, name, email, url } = req.body;
  const found = await userRepository.findByUsername(username);
  if(found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, bcryptSaltRounds);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
    name,
    email,
    url,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}