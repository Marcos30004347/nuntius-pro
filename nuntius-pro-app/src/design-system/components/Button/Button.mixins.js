import { css } from 'styled-components';
import { ButtonColors, ButtonSizes } from './Button.mappers';

const stateMixin = ({ variant, state }) => css`
  background-color: ${ButtonColors[variant][state].bgColor};
  color: ${ButtonColors[variant][state].color};
`;

export const ButtonSizeMixin = css`
  padding: ${({ size }) => ButtonSizes[size].padding};
`;

export const ButtonStateMixin = css`
  ${({ variant }) => stateMixin({ variant, state: 'enabled' })};

  :hover {
    cursor: pointer;
    ${({ variant }) => stateMixin({ variant, state: 'hovered' })};
  }

  ${({ variant, disabled }) =>
    disabled &&
    css`
      &:hover,
      &:active,
      &:focus,
      &:focus-visible,
      &:not(:hover, :active, :focus, :focus-visible) {
        cursor: not-allowed;
        ${stateMixin({ variant, state: 'disabled' })};
      }
    `};
`;
