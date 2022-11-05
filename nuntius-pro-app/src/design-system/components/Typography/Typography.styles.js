import styled from 'styled-components';
import { Color, Spacing } from '../../tokens';
import {
  heading1Mixin,
  heading2Mixin,
  heading3Mixin,
  paragraphRegular,
  paragraphBold,
  spanRegular
} from './Typography.mixins';

const Base = styled.span`
  color: ${({ color }) => color || Color.Neutral900};
  text-align: ${({ textAlign }) => textAlign};
  text-transform: ${({ textTransform }) => textTransform};
  margin: ${Spacing.None};
`;

export const Heading1 = styled(Base).attrs({ as: 'h1' })`
  ${heading1Mixin}
`;

export const Heading2 = styled(Base).attrs({ as: 'h2' })`
  ${heading2Mixin}
`;

export const Heading3 = styled(Base).attrs({ as: 'h3' })`
  ${heading3Mixin}
`;

export const ParagraphRegular = styled(Base).attrs({ as: 'p' })`
  ${paragraphRegular}
`;

export const ParagraphBold = styled(Base).attrs({ as: 'p' })`
  ${paragraphBold}
`;

export const SpanRegular = styled(Base).attrs({ as: 'span' })`
  ${spanRegular}
`;
