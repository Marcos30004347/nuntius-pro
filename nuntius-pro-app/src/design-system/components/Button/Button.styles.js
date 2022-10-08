import styled from 'styled-components';
import {
  BorderRadius,
  BorderWidth,
  Color,
  FontWeights,
  Sizing
} from '../../tokens';
import { ButtonSizeMixin, ButtonStateMixin } from './Button.mixins';

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${BorderWidth.None};
  width: fit-content;
  font-size: ${Sizing.UltraSmall};
  font-weight: ${FontWeights.Bold};
  border-radius: ${BorderRadius.Small};

  &:focus,
  &:focus-visible {
    outline: 0.125rem solid ${Color.Brand400};
  }

  ${ButtonSizeMixin};
  ${ButtonStateMixin};
`;
