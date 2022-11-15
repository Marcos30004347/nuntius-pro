import AnonymousMsg from './AnonymousMsg';
import DirectMsg from './DirectMsg';
import DirectAnonymousMsg from './DirectAnonymousMsg';
import SimpleMsg from './SimpleMsg';

export const Message = ({ name, text, position, type }) => {
  switch (type) {
    case 'anonymous':
      return <AnonymousMsg text={text} position={position} />;
    case 'direct':
      return <DirectMsg name={name} text={text} position={position} />;
    case 'direct_anonymous':
      return <DirectAnonymousMsg name={name} text={text} position={position} />;
    default:
      return <SimpleMsg name={name} text={text} position={position} />;
  }
};
