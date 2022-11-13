import styled from 'styled-components';
import { MessageBox } from 'react-chat-elements';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { InputText } from '../../../../../design-system/components/Inputs';

const ChatHolder = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 0px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const ActionHolder = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatContainer = () => {
  return (
    <>
      <ChatHolder>
        <MessageBox position="left" type="text" title="Luiz" text="Olá" />
        <MessageBox
          position="right"
          type="text"
          title="Aline"
          titleColor="#27c241"
          text="Oii"
        />
      </ChatHolder>
      <ActionHolder>
        <InputText placeholder="Type here..." multiline={true} />
        <Button style={{ width: '10%' }} icon={Icons.Eye} />
      </ActionHolder>
    </>
  );
};
