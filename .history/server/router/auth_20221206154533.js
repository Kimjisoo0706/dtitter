import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";

const router = express.Router();

const valdateCredential = [
  body('username')
    .trim()
    .not
]