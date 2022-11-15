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

const onSimpleMessage = (socket, msgString) => {
  io.to(socket.data.room).emit(
    "message",
    createMsg(msgString, socket.data.username)
  );
};

const onAnonymousMessage = (socket, msgString) => {
  io.to(socket.data.room).emit(
    "anonymous_message",
    createMsg(msgString, undefined)
  );
};

const onDirectMessage = (socket, msgDataObj) => {
  const ids = msgDataObj.sockeIDs;
  for (id of ids) {
    io.to(id).emit(
      "direct_message",
      createMsg(msgDataObj.text, socket.data.username)
    );
  }
};

const onDirectAnonymousMessage = (msgDataObj) => {
  const ids = msgDataObj.sockeIDs;
  for (id of ids) {
    io.to(id).emit(
      "direct_anonymous_message",
      createMsg(msgDataObj.text, undefined)
    );
  }
};

const onDisconnect = (reason) => {
  console.log("user disconnected: ", reason);
};

const onConnectToRoom = (socket, room) => {
  const r = io.sockets.adapter.rooms.get(room);
  if (!r) {
    console.log(
      "Cannot find room. Availabe rooms",
      io.sockets.adapter.rooms.keys()
    );
    socket.disconnect(true);
    return;
  }

  socket.data.room = room;
  socket.join(room);
  socket.emit("joined_room");
};

const onCreateRoom = (socket, room) => {
  const r = io.sockets.adapter.rooms.get(room);
  if (r) {
    console.log("Room already exists");
    socket.disconnect(true);
    return;
  }

  socket.data.room = room;
  socket.join(room);
  socket.emit("room_created");
};

const registerSocketConn = (server) => {
  if (!io) io = new Server(server, { cors: { origin: "*" } });

  io.on("connection", (socket) => {
    socket.data.username = socket.handshake.query.username;

    console.log("user connected: ", socket.data.username);

    socket.on("connect_to_room", (room) => onConnectToRoom(socket, room));
    socket.on("create_room", (room) => onCreateRoom(socket, room));
    socket.on("message", (msg) => onSimpleMessage(socket, msg));
    socket.on("anonymous_message", (msgString) =>
      onAnonymousMessage(socket, msgString)
    );
    socket.on("direct_message", (msgDataObj) =>
      onDirectMessage(socket, msgDataObj)
    );
    socket.on("direct_anonymous_message", (msgDataObj) =>
      onDirectAnonymousMessage(msgDataObj)
    );
    socket.on("disconnect", onDisconnect);
  });
};

const getClientsFromRoom = async (roomName) => {
  if (!io) throw new Error("Error: The server socket has not been started");
  return io.in(roomName).fetchSockets();
};

export { registerSocketConn, getClientsFromRoom };
