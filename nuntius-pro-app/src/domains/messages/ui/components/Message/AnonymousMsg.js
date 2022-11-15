import { MessageBox } from 'react-chat-elements';

const AnonymousMsg = ({ text, position }) => {
  return (
    <MessageBox
      title={'Anonymous'}
      position={position}
      type="text"
      text={text}
    />
  );
};

export default AnonymousMsg;
