import { InputBase } from '../Anatomy/InputBase';

export const InputText = ({ error = false, ...props }) => {
  return <InputBase {...props} type="text" error={error} />;
};
