import styled from 'styled-components';
import { Color, BorderRadius } from '../../../tokens';

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  border-radius: ${BorderRadius.Medium};

  &:hover {
    cursor: pointer;
    background-color: ${Color.Neutral100};
  }

  &:active,
  &:focus,
  &:focus-visible {
    outline: 0.125rem solid ${Color.Brand400};
  }
`;
