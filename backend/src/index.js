import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import routes from "./routes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(routes);

const createMsg = (value, username) => {
  const message = {
    value: value,
    sentIn: new Date().toISOString(),
    username: username,
  };

  return message;
};

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);

  const room = socket.handshake.query.room;
  socket.data.username = socket.handshake.query.username;

  socket.join(room);

  socket.on("message", (msg) => {
    io.to(room).emit("message", createMsg(msg, socket.data.username));
  });

  socket.on("disconnect", (reason) => {
    console.log("user disconnected: ", reason);
  });
});

server.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
