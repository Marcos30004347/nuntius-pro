import { getClientsFromRoom } from '../services/socket.js';

const listRoomParticipantsHandler = async (request, response) => {
  try {
    const { access_token, data: { roomName} } = request.body;

    const rooms = await getClientsFromRoom(roomName);
    const userlist = rooms.map(socket => socket.data.username);

    return response.json(userlist);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { listRoomParticipantsHandler };
