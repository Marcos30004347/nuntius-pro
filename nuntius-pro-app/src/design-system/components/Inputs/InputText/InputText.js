import { InputBase, InputContainer } from '../Anatomy';

export const InputText = ({ error = false, ...props }) => {
  return (
    <InputContainer aria-invalid={error}>
      <InputBase {...props} type="text" error={error} />
    </InputContainer>
  );
};
