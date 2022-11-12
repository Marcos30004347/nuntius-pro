import * as React from 'react';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { ParticipantsListDrawer } from '../../components/ParticipantsListDrawer';

export const Room = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const participants = [{ name: 'Aline' }, { name: 'Luiz' }];

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
