import { useEffect, useState } from 'react';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import io from 'socket.io-client';
import { Container } from './Chat1.styles';

const BACKEND_URL = 'http://localhost:8000';
const ROOM = 'MyAwesomeRoom';

// generate a random username just for tests
const USERNAME = (Math.random() + 1).toString(36).substring(7);

export const Chat = () => {
  const [socket, setSocket] = useState(undefined);
  const [messages, setMessages] = useState([]);

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

    socketClient.on('anonymous_message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  return (
    <Wrapper style={{ flexDirection: 'column' }}>
      <Container>
        <div>
          {messages.map((msg, idx) => {
            return (
              <div key={idx}>
                <span>{`${msg.username}: ${msg.value}`}</span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            socket.emit('message', 'my message');
          }}
        >
          Click me!
        </button>
        <button
          onClick={() => {
            socket.emit('anonymous_message', 'my message');
          }}
        >
          Click me Anonymous!
        </button>
      </Container>
    </Wrapper>
  );
};
