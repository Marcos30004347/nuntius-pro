import React from 'react';
import { InputBase, InputContainer } from '../Anatomy';
import { IconButton } from './InputPassword.styles';
import { Icon, Icons } from '../../../foundations/Icons';

const ToggleButton = ({ showPassword, onClick }) => {
  return (
    <IconButton type="button" onClick={onClick}>
      <Icon icon={!showPassword ? Icons.EyeSlash : Icons.Eye} variant="solid" />
    </IconButton>
  );
};

export const InputPassword = ({ name, error, ...props }) => {
  const [inputType, setInputType] = React.useState('password');

  const handleToggle = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  return (
    <InputContainer
      aria-invalid={error}
      endAdornment={
        <ToggleButton
          showPassword={inputType === 'text'}
          onClick={handleToggle}
        />
      }
    >
      <InputBase {...props} type={inputType} error={error} />
    </InputContainer>
  );
};
