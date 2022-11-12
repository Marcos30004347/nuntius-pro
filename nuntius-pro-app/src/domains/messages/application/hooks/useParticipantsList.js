import * as React from 'react';

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
