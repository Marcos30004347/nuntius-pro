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

const onAnonymousMessage = (socket, msg) => {
  io.to(socket.data.room).emit("anonymous_message", createMsg(msg, undefined));
};

const onDirectMessage = (socket, msgData) => {
  const ids = msgData.sockeIDs;
  for(id of ids) {
    io.to(id).emit("direct_message", createMsg(msgData.text, socket.data.username));
  }
};

const onDirectAnonymousMessage = (msgData) => {
  const ids = msgData.sockeIDs;
  for(id of ids) {
    io.to(id).emit("direct_anonymous_message", createMsg(msgData.text, undefined));
  }
};

const onDisconnect = (reason) => {
  console.log("user disconnected: ", reason);
};

const registerSocketConn = (server) => {
  if (!io) io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.data.room = socket.handshake.query.room;
    socket.data.username = socket.handshake.query.username;

    console.log("user connected: ", socket.data.username);

    socket.join(socket.data.room);
    socket.on("message", (msg) => onSimpleMessage(socket, msg));
    socket.on("anonymous_message", (msg) => onAnonymousMessage(socket, msg));
    socket.on("direct_message", (msgData) => onDirectMessage(socket, msgData));
    socket.on("direct_anonymous_message", (msgData) => onDirectAnonymousMessage(msgData));
    socket.on("disconnect", onDisconnect);
  });

};

const getClientsFromRoom = async (roomName) => {
  if (!io) throw new Error("Error: The server socket has not been started");
  return io.in(roomName).fetchSockets();
}

export { registerSocketConn, getClientsFromRoom };