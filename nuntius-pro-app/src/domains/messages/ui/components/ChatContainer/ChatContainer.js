import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { InputText } from '../../../../../design-system/components/Inputs';
import { FormWrapper } from '../../screens/home/Home.styles';
import { messageFunctions } from '../../../application/hooks/useParticipantsList';
import { Message } from '../Message';
import { storageService } from '../../../../../shared/application/services/storageService';
import { ActionHolder, ChatBox, ChatHolder } from './ChatContainer.styles';

export const ChatContainer = ({ messages, socketContext }) => {
  const { sendMsg } = messageFunctions();

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
            <Button
              style={{ width: '20%', height: '100%' }}
              icon={Icons.PaperAirplane}
            />
          </ActionHolder>
        </FormWrapper>
      </ChatBox>
    </>
  );
};
