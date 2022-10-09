import { Input } from './InputAnatomy.styles';

export const InputBase = ({ name, error, endAdornment, ...props }) => {
  return <Input {...props} id={name} name={name} />;
};
