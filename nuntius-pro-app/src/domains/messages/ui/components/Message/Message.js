import { MessageBox } from 'react-chat-elements';

export const Message = ({ name, text, position, type }) => {
  if (type === 'anonymous')
    return (
      <MessageBox
        title={'Anonymous'}
        position={position}
        type="text"
        text={text}
      />
    );
  else if (type === 'direct')
    return (
      <MessageBox
        title={name + ' (direct)'}
        position={position}
        type="text"
        text={text}
      />
    );
  else if (type === 'direct_anonymous')
    return (
      <MessageBox
        title={'Anonymous (direct)'}
        position={position}
        type="text"
        text={text}
      />
    );
  else
    return (
      <MessageBox title={name} position={position} type="text" text={text} />
    );
};
