import styled from 'styled-components';
import { Sizing } from '../../../../../design-system/tokens';
import { Typography } from '../../../../../design-system/components/Typography';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: ${Sizing.Large};
  gap: ${Sizing.UltraSmall};
`;

const ButtonHolder = styled.div``;

export const Header = ({ name, toggleDrawer }) => {
  return (
    <Container>
      <Typography variant="heading3">{name}</Typography>
      <ButtonHolder>
        <Button size="small" icon={Icons.UerGroup} onClick={toggleDrawer} />
      </ButtonHolder>
    </Container>
  );
};
