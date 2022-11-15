import * as React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { storageService } from '../../../../shared/application/services/storageService';
import Context from '../contexts/context.js';
import { messagesPageRoutes } from '../routes';

const BACKEND_URL = 'http://localhost:8000';

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
  const [, setSocketContext] = useContext(Context);

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

    socketClient.on('joined_room', () => {
      toast.success('Sala ingressada com sucesso!');
      setSocketContext(socketClient);
      navigate(messagesPageRoutes.ROOM);
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
      setSocketContext(socketClient);
      navigate(messagesPageRoutes.ROOM);
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
