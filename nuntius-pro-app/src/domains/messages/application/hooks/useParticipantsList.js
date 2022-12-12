import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { storageService } from '../../../../shared/application/services/storageService';
import { messagesPageRoutes } from '../routes';

const BACKEND_URL = 'http://localhost:8000/';

export const useParticipantsList = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // mock
  const participants = [{ name: 'Aline' }, { name: 'Luiz' }];

  return {
    isOpen,
    toggleDrawer,
    participants
  };
};

export const useRooms = () => {
  const navigate = useNavigate();

  const joinRoom = (roomName) => {
    const username = storageService.getItem('user').username;

    // pass access token here
    const socketClient = io(BACKEND_URL, {
      query: { username: username }
    });

    socketClient.on('connect', () => {
      console.log('Web socket connected!');
      socketClient.emit('connect_to_room', roomName);
    });

    socketClient.on('joined_room', (users) => {
      toast.success('Sala ingressada com sucesso!');
      storageService.saveItem('room', roomName);
      navigate(messagesPageRoutes.ROOM, { state: { users: users } });
    });

    socketClient.on('disconnect', (msg) => {
      toast.error('Não foi possível encontrar a sala.');
    });
  };

  const createRoom = (roomName) => {
    const username = storageService.getItem('user').username;
    const socketClient = io(BACKEND_URL, {
      query: { username: username }
    });

    socketClient.on('connect', () => {
      console.log('Web socket connected!');
      socketClient.emit('create_room', roomName);
    });

    socketClient.on('room_created', () => {
      toast.success('Sala criada com sucesso!');
      storageService.saveItem('room', roomName);
      navigate(messagesPageRoutes.ROOM, { state: { users: [] } });
    });

    socketClient.on('disconnect', () => {
      toast.error('Não foi criar a sala.');
    });
  };

  return {
    joinRoom,
    createRoom
  };
};

export const messageFunctions = () => {
  const registerSocketFunctions = (
    socketClient,
    setMessages,
    setParticipants
  ) => {
    socketClient.on('message', (msg) => {
      const message = Object.assign({ type: 'simple' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('direct_message', (msg) => {
      const message = Object.assign({ type: 'direct' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('direct_anonymous_message', (msg) => {
      const message = Object.assign({ type: 'direct_anonymous' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('anonymous_message', (msg) => {
      const message = Object.assign({ type: 'anonymous' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('add_participant', (user) => {
      setParticipants((prev) => [...prev, user]);
    });

    socketClient.on('remove_participant', (user) => {
      setParticipants((prev) => {
        return prev.filter((curr) => curr !== user);
      });
    });
  };

  const sendMsg = (socketClient, msg) => {
    let anonPrefix = '';
    if (msg[0] === '!') {
      anonPrefix = 'anonymous_';
    }

    const regex = '(?:^|\\s)(?:@)(?<username>[a-zA-Z_]\\w*)';
    const users = [...msg.matchAll(regex)];

    if (users.length > 0) {
      socketClient.emit(`direct_${anonPrefix}message`, {
        usernames: users.map((user) => user.groups?.username),
        text: msg
      });
    } else {
      socketClient.emit(`${anonPrefix}message`, msg);
    }
  };

  return {
    registerSocketFunctions,
    sendMsg
  };
};
