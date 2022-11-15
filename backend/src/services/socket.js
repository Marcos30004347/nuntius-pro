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

const getSocketIdFromUsernameAndRoom = async (roomName, usernamesMap) => {
  const userSockets = await getClientsFromRoom(roomName);
  const socketIDs = []
  for (sock of userSockets) {
    if (sock.data.username in usernamesMap) {
      socketIDs.push(sock.id);
    }
  }
  return socketIDs;
}

const onSimpleMessage = (socket, msgString) => {
  io.to(socket.data.room).emit("message", createMsg(msgString, socket.data.username));
};

const onAnonymousMessage = (socket, msgString) => {
  io.to(socket.data.room).emit("anonymous_message", createMsg(msgString, undefined));
};

const onDirectMessage = (socket, msgDataObj) => {
  const receiverUsers = Object.fromEntries(msgDataObj.usernames)
  const socketIDs = getSocketIdFromUsernameAndRoom(socket.data.room, username);
  for (id of socketIDs) {
    io.to(id).emit("direct_message", createMsg(msgDataObj.text, socket.data.username));
  }
};

const onDirectAnonymousMessage = (msgDataObj) => {
  const receiverUsers = Object.fromEntries(msgDataObj.usernames)
  const socketIDs = getSocketIdFromUsernameAndRoom(socket.data.room, username);
  for (id of socketIDs) {
    io.to(id).emit("direct_message", createMsg(msgDataObj.text, undefined));
  }
};

const onDisconnect = (socket, reason) => {
  console.log("user disconnected: ", reason);
};

const registerSocketConn = (server) => {
  if (!io) io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.data.room = socket.handshake.query.room;
    socket.data.username = socket.handshake.query.username;

    console.log("user connected: ", socket.data.username);

    socket.join(socket.data.room);
    socket.on("message", (msgString) => onSimpleMessage(socket, msgString));
    socket.on("anonymous_message", (msgString) => onAnonymousMessage(socket, msgString));
    socket.on("direct_message", (msgDataObj) => onDirectMessage(socket, msgDataObj));
    socket.on("direct_anonymous_message", onDirectAnonymousMessage);
    socket.on("disconnect", onDisconnect);
  });

};

const getClientsFromRoom = async (roomName) => {
  if (!io) throw new Error("Error: The server socket has not been started");
  return io.in(roomName).fetchSockets();
}

export { registerSocketConn, getClientsFromRoom };