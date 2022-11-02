import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";

import routes from "./routes.js";
import { registerSocketConn } from "./services/socket.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(routes);

registerSocketConn(server);

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
