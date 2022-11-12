import { Server } from "socket.io";

var io = undefined;

const createMsg = (value, username) => {
  const message = {
    value: value,
    sentIn: new Date().toISOString(),
    username: username,
  };

  return message;
};

const onSimpleMessage = (socket, msg) => {
  io.to(socket.data.room).emit("message", createMsg(msg, socket.data.username));
};

const onDisconnect = (reason) => {
  console.log("user disconnected: ", reason);
};

export const registerSocketConn = (server) => {
  if (!io) io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.data.room = socket.handshake.query.room;
    socket.data.username = socket.handshake.query.username;

    console.log("user connected: ", socket.data.username);

    socket.join(socket.data.room);
    socket.on("message", (msg) => onSimpleMessage(socket, msg));
    socket.on("disconnect", onDisconnect);
  });
};
