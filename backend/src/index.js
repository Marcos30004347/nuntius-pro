import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import { routes } from "./routes.js";
import { authCheckerMiddleware } from "./middlewares/auth.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(authCheckerMiddleware);
app.use(routes);


io.on("connection", (socket) => {
  console.log("user connected");
});

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
});