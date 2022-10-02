import styled from 'styled-components';
import { sizingMixin } from './Avatar.mixins';
import { Color } from '../../tokens';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  ${sizingMixin}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

export const Fallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-color: ${Color.Neutral200};
`;
