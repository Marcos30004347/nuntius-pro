import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import routes from "./routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
