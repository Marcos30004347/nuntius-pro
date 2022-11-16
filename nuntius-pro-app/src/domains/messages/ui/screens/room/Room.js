import styled from 'styled-components';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';
import {
  messageFunctions,
  useParticipantsList
} from '../../../application/hooks/useParticipantsList';
import { Header } from '../../components/Header';
import { ChatContainer } from '../../components/ChatContainer';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import Context from '../../../application/contexts/context';
import { messagesPageRoutes } from '../../../application/routes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Room = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { users } = state; // Read values passed on state

  const { isOpen, toggleDrawer } = useParticipantsList();

  const { registerSocketFunctions } = messageFunctions();
  const [socketContext] = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [participants, setParticipants] = useState(users);

  useEffect(() => {
    if (!socketContext) {
      toast.error('Entre em uma sala');
      navigate(messagesPageRoutes.HOME);
      return;
    }

    registerSocketFunctions(socketContext, setMessages, setParticipants);
  }, [socketContext, navigate]);

  return (
    <PrivatePage>
      <Container>
        <Header name="Nome da sala" toggleDrawer={toggleDrawer} />
        <ParticipantsListDrawer
          isOpen={isOpen}
          close={toggleDrawer}
          participants={participants}
        />
        <ChatContainer messages={messages} socketContext={socketContext} />
      </Container>
    </PrivatePage>
  );
};
