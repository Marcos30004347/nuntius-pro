import { MessageBox } from 'react-chat-elements';

const SimpleMsg = ({ name, text, position }) => {
  return (
    <MessageBox title={name} position={position} type="text" text={text} />
  );
};

export default SimpleMsg;
