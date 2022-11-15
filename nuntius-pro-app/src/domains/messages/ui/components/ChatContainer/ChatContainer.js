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
  // const [users, setUsers] = useState({});

  const [participants, setParticipants] = useState({});

  useEffect(() => {
    const socketClient = io(BACKEND_URL, {
      query: { room: ROOM, username: USERNAME }
    });

    socketClient.on('connect', () => {
      console.log('Web socket connected!');
      setSocket(socketClient);
    });

    socketClient.on('message', (msg) => {
      const message = Object.assign({ type: 'simple' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('direct_message', (msg) => {
      const message = Object.assign({ type: 'direct' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('direct_anonymous_message', (msg) => {
      const message = Object.assign({ type: 'direct_anonymous' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('anonymous_message', (msg) => {
      const message = Object.assign({ type: 'anonymous' }, msg);
      setMessages((prev) => [...prev, message]);
    });

    socketClient.on('add_participant', (msg) => {
      setParticipants((prev) => {
        prev[msg.name] = msg.socketID;
        return prev;
      });
    });

    socketClient.on('remove_participant', (msg) => {
      setParticipants((prev) => {
        delete prev[msg.name];
        return prev;
      });
    });
  }, []);

  return (
    <>
      <ChatHolder>
        {messages.map((msg, idx) => {
          console.log(msg);
          if (msg.username === USERNAME)
            return (
              <Message
                key={idx}
                name={msg.username}
                position={'right'}
                type={'user'}
                text={msg.value.toString()}
              />
            );
          else
            return (
              <Message
                key={idx}
                name={msg.username}
                position={'left'}
                type={msg.type}
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
            if (message === '') return;

            var anonPrefix = '';
            if (message[0] === '!') {
              anonPrefix = 'anonymous_';
            }
            const regex = '(?:^|\\s)(?:@)(?<username>[a-zA-Z_]\\w+)';
            const users = [...message.matchAll(regex)];

            if (users === undefined) {
              socket.emit('direct_' + anonPrefix + 'message', {
                socketIDs: users.map(
                  (user) => participants[user.groups?.username]
                ),
                text: message
              });
            } else {
              console.log('aqui');
              socket.emit(anonPrefix + 'message', message);
            }
            setMessage('');
          }}
        />
      </ActionHolder>
    </>
  );
};
