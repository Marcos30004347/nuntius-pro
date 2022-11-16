var io = undefined;

const createMsg = (value, username) => {
  const message = {
    value: value,
    sentIn: new Date().toISOString(),
    username: username,
  };

  return message;
};

const getSocketIdsFromUsernames = async (roomName, usernamesMap) => {
  const userSockets = await getClientsFromRoom(roomName);
  const socketIDs = [];
  for (const sock of userSockets) {
    if (sock.data.username in usernamesMap) {
      socketIDs.push(sock.id);
    }
  }
  return socketIDs;
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

const onDirectMessage = async (socket, msgDataObj) => {
  const receiverUsers = Object.fromEntries(msgDataObj.usernames.map(user => [user, true]));
  const socketIDs = await getSocketIdsFromUsernames(socket.data.room, receiverUsers);
  for (const id of socketIDs) {
    io.to(id).emit(
      "direct_message",
      createMsg(msgDataObj.text, socket.data.username)
    );
  }
};

const onDirectAnonymousMessage = async (socket, msgDataObj) => {
  const receiverUsers = Object.fromEntries(msgDataObj.usernames.map(user => [user, true]));
  const socketIDs = await getSocketIdsFromUsernames(socket.data.room, receiverUsers);
  for (const id of socketIDs) {
    io.to(id).emit(
      "direct_anonymous_message",
      createMsg(msgDataObj.text, undefined)
    );
  }
};

const onDisconnect = (socket, reason) => {
  console.log("user disconnected: ", reason);
  io.to(socket.data.room).emit("remove_participant", socket.data.username);
};

const onConnectToRoom = async (socket, room) => {
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
  const roomSockets = await getClientsFromRoom(room);
  const userNames = roomSockets.map((socket) => socket.data.username);

  socket.emit("joined_room", userNames);
  io.to(room).emit("add_participant", socket.data.username);
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
  if (!io) io = server;

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
    socket.on("direct_anonymous_message", (msgDataObj) => onDirectAnonymousMessage(socket, msgDataObj));
    socket.on("disconnect", (reason) => onDisconnect(socket, reason));
  });
};

const getClientsFromRoom = async (roomName) => {
  if (!io) throw new Error("Error: The server socket has not been started");
  return await io.in(roomName).fetchSockets();
};

export { registerSocketConn, getClientsFromRoom };
