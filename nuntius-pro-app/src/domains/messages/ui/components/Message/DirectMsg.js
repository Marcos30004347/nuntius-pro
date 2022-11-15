import { MessageBox } from 'react-chat-elements';

const DirectMsg = ({ name, text, position }) => {
  return (
    <MessageBox
      title={name + ' (direct)'}
      position={position}
      type="text"
      text={text}
    />
  );
};

export default DirectMsg;
