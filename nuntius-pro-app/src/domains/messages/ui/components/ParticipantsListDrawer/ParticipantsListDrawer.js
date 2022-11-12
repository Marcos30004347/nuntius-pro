import Drawer from 'react-modern-drawer';
import { Typography } from '../../../../../design-system/components/Typography';
import { Icon, Icons } from '../../../../../design-system/foundations/Icons';
import { TitleHolder } from './ParticipantsListDrawer.styles';
import { ParticipantItem } from '../../components/ParticipantItem';

export const ParticipantsListDrawer = ({ isOpen, close, participants }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      direction="right"
      enableOverlay={false}
    >
      <TitleHolder>
        <Icon icon={Icons.Eye} variant="solid" />
        <Typography variant="paragraphBold">Pessoas na sala</Typography>
      </TitleHolder>
      {participants.map((participant, idx) => {
        return <ParticipantItem key={idx} name={participant.name} />;
      })}
    </Drawer>
  );
};
