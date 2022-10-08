import PropTypes from 'prop-types';
import { CustomButton } from './Button.styles';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <CustomButton {...props} variant={variant} size={size} disabled={disabled}>
      {children}
    </CustomButton>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};
