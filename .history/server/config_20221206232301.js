import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue
  if (value == null) {
    throw new Error (`key ${key} is undefined`);
  }
}

export const config = {
  jwt : {
    secretKey : process.env.JWT_SECRET,
    expiresInSec : process.env.JWT_EXPIRES_SEC,
  },
  bcrypt : {
    saltRounds : process.env.BCRYPT_SALT_ROUNDS,
  }
}