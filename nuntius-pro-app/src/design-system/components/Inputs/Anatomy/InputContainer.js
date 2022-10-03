import { Container } from './InputAnatomy.styles';

export const InputContainer = ({ error = false, children, endAdornment }) => {
  return (
    <Container aria-invalid={error}>
      {children}
      {endAdornment}
    </Container>
  );
};
