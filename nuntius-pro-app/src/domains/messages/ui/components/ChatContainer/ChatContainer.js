import styled from 'styled-components';
import { MessageBox } from 'react-chat-elements';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { InputText } from '../../../../../design-system/components/Inputs';
import { Spacing } from '../../../../../design-system/tokens/';
import { FormWrapper } from '../../screens/home/Home.styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Context from '../../../application/contexts/context.js';
import { toast } from 'react-toastify';
import { messagesPageRoutes } from '../../../application/routes';

const ChatHolder = styled.div`
  flex-grow: 1;
  height: 0px;
  overflow-y: auto;
  margin-top: ${Spacing.Micro};

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const ActionHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${Spacing.Medium};
  width: 100%;
`;

const ChatBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 80%;
`;

export const ChatContainer = () => {
  const navigate = useNavigate();
  const [socketContext] = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socketContext) {
      toast.error('Entre em uma sala');
      navigate(messagesPageRoutes.HOME);
      return;
    }

    socketContext.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, [socketContext, navigate]);

  return (
    <>
      <ChatBox>
        <ChatHolder>
          {messages.map((msg, idx) => {
            return (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <MessageBox
                  position="left"
                  type="text"
                  title={msg.username}
                  text={msg.value}
                />
              </div>
            );
          })}
        </ChatHolder>
        <FormWrapper
          onSubmit={(e) => {
            e.preventDefault();
            socketContext.emit('message', e.target[0].value);
          }}
          style={{ width: '100%' }}
        >
          <ActionHolder>
            <InputText placeholder="Digite uma mensagem" multiline={true} />
            <Button style={{ width: '10%' }} icon={Icons.PaperAirplane} />
          </ActionHolder>
        </FormWrapper>
      </ChatBox>
    </>
  );
};
