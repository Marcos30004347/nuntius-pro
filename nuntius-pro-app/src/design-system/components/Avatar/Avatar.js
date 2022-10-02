import PropTypes from 'prop-types';
import { Container, Image, Fallback } from './Avatar.styles';
import { FallbackUser } from './FallbackUser';

// TODO: add context to get user pallete color to FallbackUser
export const Avatar = ({ src, size = 'medium', onClick }) => {
  return (
    <Container $sizing={size} onClick={onClick}>
      {src ? (
        <Image src={src} alt="User's profile" />
      ) : (
        <Fallback>
          <FallbackUser color="#27c241" size={size} />
        </Fallback>
      )}
    </Container>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func
};
