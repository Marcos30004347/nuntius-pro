import styled from 'styled-components';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';
import {
  messageFunctions,
  useParticipantsList
} from '../../../application/hooks/useParticipantsList';
import { Header } from '../../components/Header';
import { ChatContainer } from '../../components/ChatContainer';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { messagesPageRoutes } from '../../../application/routes';
import { storageService } from '../../../../../shared/application/services/storageService';
import { io } from 'socket.io-client';

const BACKEND_URL = 'http://localhost:8000'; //'//https://nuntiusback.herokuapp.com/';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Room = () => {
  const navigate = useNavigate();
  const room = storageService.getItem('room');
  const username = storageService.getItem('user').username;
  const { state } = useLocation();
  const { users } = state; // Read values passed on state

  const { isOpen, toggleDrawer } = useParticipantsList();

  const { registerSocketFunctions } = messageFunctions();
  const [socket, setSocket] = useState(undefined);
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState(users);

  useEffect(() => {
    if (!room) {
      toast.error('Você precisa se conectar a uma sala!');
      navigate(messagesPageRoutes.HOME);
      return;
    }

    const socketClient = io(BACKEND_URL, {
      query: { username: username }
    });

    socketClient.on('connect', () => {
      console.log('Web socket connected!');
      // if (participants.length <= 1) {
      //   socketClient.emit('create_room', room);
      //   return;
      // }
      socketClient.emit('connect_to_room', room);
    });

    socketClient.on('disconnect', () => {
      toast.error('Não foi possível se conectar à sala.');
      navigate(messagesPageRoutes.HOME);
      return;
    });

    registerSocketFunctions(socketClient, setMessages, setParticipants);
    setSocket(socketClient);
  }, []);

  return (
    <>
      {socket && (
        <PrivatePage>
          <Container>
            <Header name={room} toggleDrawer={toggleDrawer} />
            <ParticipantsListDrawer
              isOpen={isOpen}
              close={toggleDrawer}
              participants={participants}
            />
            <ChatContainer messages={messages} socketContext={socket} />
          </Container>
        </PrivatePage>
      )}
    </>
  );
};
