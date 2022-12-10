import styled from 'styled-components';
import { Sizing } from '../../../../../design-system/tokens';
import { Typography } from '../../../../../design-system/components/Typography';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { useNavigate } from 'react-router-dom';
import { messagesPageRoutes } from '../../../application/routes';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${Sizing.Large};
  gap: ${Sizing.UltraSmall};
`;

const TitleHolder = styled.div``;

const ButtonHolder = styled.div``;

export const Header = ({ name, toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleHolder>
        <Typography variant="heading3">{name}</Typography>
        <ButtonHolder>
          <Button
            onClick={() => navigate(messagesPageRoutes.HOME)}
            size="small"
            variant="tertiary"
          >
            Sair da sala
          </Button>
        </ButtonHolder>
      </TitleHolder>

      <ButtonHolder>
        <Button size="small" icon={Icons.UserGroup} onClick={toggleDrawer} />
      </ButtonHolder>
    </Container>
  );
};
