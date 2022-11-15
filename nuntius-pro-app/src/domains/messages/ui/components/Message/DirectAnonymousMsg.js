import { MessageBox } from 'react-chat-elements';

const DirectAnonymousMsg = ({ text, position }) => {
  return (
    <MessageBox
      title={'Anonymous (direct)'}
      position={position}
      type="text"
      text={text}
    />
  );
};

export default DirectAnonymousMsg;
