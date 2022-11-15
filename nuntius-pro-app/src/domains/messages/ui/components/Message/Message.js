import { MessageBox } from 'react-chat-elements';

export const Message = ({ name, text, position }) => {
  return (
    <>
      <MessageBox title={name} position={position} type="text" text={text} />
    </>
  );
};
