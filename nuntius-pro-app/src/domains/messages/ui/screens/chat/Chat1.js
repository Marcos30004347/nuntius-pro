import { useEffect, useState } from 'react';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container } from './Chat1.styles';
import Context from '../../../application/contexts/context.js';
import { useContext } from 'react';

export const Chat = () => {
  const [socketContext] = useContext(Context);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socketContext.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, [socketContext]);

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
            socketContext.emit('message', 'my message');
          }}
        >
          Click me!
        </button>
      </Container>
    </Wrapper>
  );
};
