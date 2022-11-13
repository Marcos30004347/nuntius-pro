import { Wrapper } from '../Wrapper';
import { NavGlobal } from '../../../../design-system/components/Navigation';
import { messagesPageRoutes } from '../../../../domains/messages/application/routes';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const PrivatePage = ({ children }) => {
  return (
    <Container>
      <NavGlobal homeRoute={messagesPageRoutes.HOME} />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};
