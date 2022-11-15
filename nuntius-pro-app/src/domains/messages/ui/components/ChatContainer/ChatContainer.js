import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { InputText } from '../../../../../design-system/components/Inputs';
import { FormWrapper } from '../../screens/home/Home.styles';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Context from '../../../application/contexts/context.js';
import { toast } from 'react-toastify';
import { messagesPageRoutes } from '../../../application/routes';
import { messageFunctions } from '../../../application/hooks/useParticipantsList';
import { Message } from '../Message';
import { storageService } from '../../../../../shared/application/services/storageService';
import { ActionHolder, ChatBox, ChatHolder } from './ChatContainer.styles';

export const ChatContainer = () => {
  const navigate = useNavigate();
  const { registerSocketFunctions, sendMsg } = messageFunctions();
  const [socketContext] = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!socketContext) {
      toast.error('Entre em uma sala');
      navigate(messagesPageRoutes.HOME);
      return;
    }

    registerSocketFunctions(socketContext, setMessages);
  }, [socketContext, navigate]);

  return (
    <>
      <ChatBox>
        <ChatHolder>
          {messages.map((msg, idx) => {
            const username = storageService.getItem('user').username;
            return (
              <div key={idx} style={{ marginBottom: '15px' }}>
                <Message
                  position={msg.username === username ? 'right' : 'left'}
                  type={msg.type}
                  name={msg.username}
                  text={msg.value}
                />
              </div>
            );
          })}
        </ChatHolder>
        <FormWrapper
          onSubmit={(e) => {
            e.preventDefault();
            let msg = e.target[0].value;

            if (!msg) return;
            sendMsg(socketContext, msg);
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
