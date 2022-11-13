import styled from 'styled-components';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';
import { useParticipantsList } from '../../../application/hooks/useParticipantsList';
import { Header } from '../../components/Header';
import { ChatContainer } from '../../components/ChatContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Room = () => {
  const { isOpen, toggleDrawer, participants } = useParticipantsList();

  return (
    <PrivatePage>
      <Container>
        <Header name="Nome da sala" toggleDrawer={toggleDrawer} />
        <ParticipantsListDrawer
          isOpen={isOpen}
          close={toggleDrawer}
          participants={participants}
        />
        <ChatContainer />
      </Container>
    </PrivatePage>
  );
};
