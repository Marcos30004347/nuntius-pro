import Drawer from 'react-modern-drawer';
import { Divider } from '../../../../../design-system/components//Divider';
import { Typography } from '../../../../../design-system/components/Typography';
import { Icon, Icons } from '../../../../../design-system/foundations/Icons';
import { Container, TitleHolder } from './ParticipantsListDrawer.styles';
import { ParticipantItem } from '../../components/ParticipantItem';

export const ParticipantsListDrawer = ({ isOpen, close, participants }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={close}
      direction="right"
      size="20vw"
      overlayOpacity={0}
    >
      <Container>
        <TitleHolder>
          <Icon icon={Icons.UerGroup} variant="solid" />
          <Typography variant="paragraphBold">Pessoas na sala</Typography>
        </TitleHolder>
        {participants.map((participant, index) => {
          return (
            <>
              <ParticipantItem key={index} name={participant.name} />
              <Divider />
            </>
          );
        })}
      </Container>
    </Drawer>
  );
};
