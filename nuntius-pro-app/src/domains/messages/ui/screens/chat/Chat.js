import { useEffect, useState } from 'react';
import { PageWrapper } from '../../../../../shared/ui/components/PageWrapper';
import io from 'socket.io-client';

const BACKEND_URL = 'http://localhost:8000';
const ROOM = 'MyAwesomeRoom';
const USERNAME = 'MyUser';

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
  }, []);

  return (
    <PageWrapper style={{ flexDirection: 'column' }}>
      <div style={{ height: '100%', width: '100%' }}>Hello From Chat!</div>

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
    </PageWrapper>
  );
};
