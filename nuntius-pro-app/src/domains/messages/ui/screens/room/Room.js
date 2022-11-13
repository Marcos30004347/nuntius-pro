import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';
import { useParticipantsList } from '../../../application/hooks/useParticipantsList';
import { Header } from '../../components/Header';

export const Room = () => {
  const { isOpen, toggleDrawer, participants } = useParticipantsList();

  return (
    <PrivatePage>
      <Header name="Nome da sala" toggleDrawer={toggleDrawer} />
      <ParticipantsListDrawer
        isOpen={isOpen}
        close={toggleDrawer}
        participants={participants}
      />
    </PrivatePage>
  );
};
