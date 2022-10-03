import { Container, Input } from './InputBase.styles';

export const InputBase = ({ name, error, endAdornment, ...props }) => {
  return (
    <Container aria-invalid={error}>
      <Input {...props} id={name} name={name} />
      {endAdornment}
    </Container>
  );
};
