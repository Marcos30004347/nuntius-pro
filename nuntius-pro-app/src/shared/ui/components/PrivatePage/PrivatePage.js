import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '../Wrapper';
import { NavGlobal } from '../../../../design-system/components/Navigation';
import { messagesPageRoutes } from '../../../../domains/messages/application/routes';
import { profilePageRoutes } from '../../../../domains/profile/application/routes';
import { storageService } from '../../../../shared/application/services/storageService';
import { authenticationPageRoutes } from '../../../../domains/authentication/application/routes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const PrivatePage = ({ children }) => {
  const history = useNavigate();

  return (
    <Container>
      <NavGlobal
        homeRoute={messagesPageRoutes.HOME}
        onAvatarClick={() => history(profilePageRoutes.EDIT)}
        onLogOut={() => {
          storageService.clear();
          history(authenticationPageRoutes.LOGIN);
        }}
      />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
