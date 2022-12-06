import express from "express";
import cors from "cors";
import morgan from "morgan"
import helmet from "helmet"

const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(helmet());

app.listen(8080, () => {
  console.log('Server Running!')
})