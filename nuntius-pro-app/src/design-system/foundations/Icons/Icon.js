import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconsMapper } from './Icon.mapper';
import { Sizing } from '../../tokens';

const Container = styled.svg`
  width: ${Sizing.HyperSmall};
`;

export const Icon = ({ icon, variant, ...props }) => {
  const svg = IconsMapper[icon][variant];

  return <Container as={svg.icon} title={svg.title} icon={icon} {...props} />;
};

Icon.propTypes = {
  variant: PropTypes.oneOf(['outline', 'solid'])
};
