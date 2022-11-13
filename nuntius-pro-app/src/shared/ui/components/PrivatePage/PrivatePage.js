import { Wrapper } from '../Wrapper';
import { NavGlobal } from '../../../../design-system/components/Navigation';
import { messagesPageRoutes } from '../../../../domains/messages/application/routes';

export const PrivatePage = ({ children }) => {
  return (
    <>
      <NavGlobal homeRoute={messagesPageRoutes.HOME} />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
