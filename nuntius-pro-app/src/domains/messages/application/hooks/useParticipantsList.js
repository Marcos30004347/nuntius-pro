import * as React from 'react';
//import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { io } from 'socket.io-client';
import { storageService } from '../../../../shared/application/services/storageService';
//import { messagesPageRoutes } from '../routes';

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
  //const navigate = useNavigate();

  const joinRoom = (roomName) => {
    try {
      const username = storageService.getItem('user').username;
      const socketClient = io(BACKEND_URL, {
        query: { room: roomName, username: username }
      });

      socketClient.on('connect', () => {
        console.log('Web socket connected!');
        // redirect to chat page with the socket client as props
        // navigate(messagesPageRoutes.CHAT, { state: { socket: socketClient } });
        // return socketClient;
      });

      socketClient.on('disconnect', () => {});
    } catch (e) {
      console.log('unable to join room');
      toast.error('Não foi possível se juntar a sala');
    }
  };

  return {
    joinRoom
  };
};
