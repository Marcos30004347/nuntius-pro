import { css } from 'styled-components';
import { sizingMap } from './Avatar.mappers';

export const sizingMixin = css`
  width: ${({ $sizing }) => sizingMap[$sizing].width};
  height: ${({ $sizing }) => sizingMap[$sizing].height};
`;

export const sizingSVGMixin = css`
  height: ${({ $sizing }) => sizingMap[$sizing].height};
`;
