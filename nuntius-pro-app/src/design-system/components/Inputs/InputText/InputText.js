import { InputBase } from '../Anatomy/InputBase';

export const InputText = ({ error, ...props }) => {
  return <InputBase {...props} type="text" error={error} />;
};
