import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { InputText } from '../../../../../design-system/components/Inputs';
import { Spacing } from '../../../../../design-system/tokens/';
import { Message } from '../Message/Message';
import io from 'socket.io-client';

const ChatHolder = styled.div`
  flex-grow: 1;
  width: 100%;
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
  margin-bottom: ${Spacing.Nano};
`;

const BACKEND_URL = 'http://localhost:8000';
const ROOM = 'MyAwesomeRoom';

// generate a random username just for tests
const USERNAME = (Math.random() + 1).toString(36).substring(7);

export const ChatContainer = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(undefined);

  useEffect(() => {
    const socketClient = io(BACKEND_URL, {
      query: { room: ROOM, username: USERNAME }
    });

    socketClient.on('connect', () => {
      console.log('Web socket connected!');
      setSocket(socketClient);
    });

    socketClient.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  return (
    <>
      <ChatHolder>
        {messages.map((msg, idx) => {
          if (msg.username == USERNAME)
            return (
              <Message
                key={idx}
                name={msg.username}
                position={'right'}
                text={msg.value.toString()}
              />
            );
          else
            return (
              <Message
                key={idx}
                name={msg.username}
                position={'left'}
                text={msg.value.toString()}
              />
            );
        })}
      </ChatHolder>
      <ActionHolder>
        <InputText
          id="message"
          name="message"
          placeholder="Digite uma mensagem"
          multiline={true}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          style={{ width: '10%' }}
          icon={Icons.PaperAirplane}
          onClick={() => {
            socket.emit('message', message);
            setMessage('');
          }}
        />
      </ActionHolder>
      <Button
        style={{ width: '10%' }}
        icon={Icons.PaperAirplane}
        onClick={() => {
          socket.emit('message', 'teste');
        }}
      />
    </>
  );
};
