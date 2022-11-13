import styled from 'styled-components';
import { Color, BorderWidth } from '../../tokens';

export const DividerContainer = styled.div`
  background-color: ${Color.Neutral300};
  height: ${BorderWidth.Hairline};
  width: 100%;
`;

export const Divider = () => {
  return <DividerContainer role="separator" />;
};
