import { getClientsFromRoom } from '../services/socket.js';

const listRoomParticipantsHandler = async (request, response) => {
  try {
    const roomName  = request.params.roomName;

    const rooms = await getClientsFromRoom(roomName);
    const userlist = rooms.map(socket => [socket.data.username, socket.id]);
    const userToSocketIdMap = Object.fromEntries(userlist);
    return response.json(userToSocketIdMap);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { listRoomParticipantsHandler };
