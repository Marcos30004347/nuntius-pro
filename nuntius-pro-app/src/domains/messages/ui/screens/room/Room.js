import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';
import { useParticipantsList } from '../../../application/hooks/useParticipantsList';

export const Room = () => {
  const { isOpen, toggleDrawer, participants } = useParticipantsList();

  return (
    <PrivatePage>
      <div>Room</div>
      <button onClick={toggleDrawer}>Show</button>
      <ParticipantsListDrawer
        isOpen={isOpen}
        close={toggleDrawer}
        participants={participants}
      />
    </PrivatePage>
  );
};
