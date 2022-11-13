import styled from 'styled-components';
import { Avatar } from '../../../../../design-system/components/Avatar';
import { Sizing } from '../../../../../design-system/tokens';

const Container = styled.div`
  display: flex;
  gap: ${Sizing.UltraSmall};
`;

export const ParticipantItem = ({ name }) => {
  return (
    <Container>
      <Avatar size="small" />
      <p>{name}</p>
    </Container>
  );
};
