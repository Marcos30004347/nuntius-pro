import PropTypes from 'prop-types';
import { Container } from './Button.styles';
import { IconColor } from './Button.mappers';
import { Icon } from '../../foundations/Icons';

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon,
  children,
  ...props
}) => {
  const iconColor = disabled
    ? IconColor[variant].disabled
    : IconColor[variant].enabled;

  return (
    <Container {...props} variant={variant} size={size} disabled={disabled}>
      {children}
      {icon && <Icon icon={icon} variant="outline" color={iconColor} />}
    </Container>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};
