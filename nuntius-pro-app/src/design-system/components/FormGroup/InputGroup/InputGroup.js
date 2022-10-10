import { InputGroupContainer, Label } from './InputGroup.styles';

export const InputGroup = ({ children, htmlFor, label, ...props }) => {
  return (
    <InputGroupContainer>
      <Label {...props} htmlFor={htmlFor}>
        {label}
      </Label>
      {children}
    </InputGroupContainer>
  );
};
