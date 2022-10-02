import PropTypes from 'prop-types';
import {
  Heading1,
  Heading2,
  Heading3,
  ParagraphRegular,
  ParagraphBold
} from './Typography.styles';

const typographyVariantMap = {
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  paragraphRegular: ParagraphRegular,
  paragraphBold: ParagraphBold
};

export const Typography = ({
  children,
  variant,
  color,
  textAlign = 'left',
  textTransform = 'none',
  ...props
}) => {
  const Variant = typographyVariantMap[variant];

  return (
    <Variant
      color={color}
      textAlign={textAlign}
      textTransform={textTransform}
      {...props}
    >
      {children}
    </Variant>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    'heading1',
    'heading2',
    'heading3',
    'paragraphRegular',
    'paragraphBold'
  ])
};
