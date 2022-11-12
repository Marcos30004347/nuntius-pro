import { css } from 'styled-components';
import { Breakpoints, FontWeights, Sizing } from '../../tokens';

const mixin = (smallStyles, largeStyles) =>
  css({
    ...smallStyles,
    [`@media (min-width: ${Breakpoints.Medium})`]: {
      ...largeStyles
    }
  });

export const heading1Mixin = mixin(
  {
    fontSize: Sizing.Small,
    fontWeight: FontWeights.Bold,
    lineHeight: Sizing.Small
  },
  { fontSize: Sizing.Medium, lineHeight: Sizing.Medium }
);

export const heading2Mixin = mixin(
  {
    fontSize: Sizing.SuperSmall,
    fontWeight: FontWeights.Bold,
    lineHeight: Sizing.SuperSmall
  },
  { fontSize: Sizing.Small, lineHeight: Sizing.Small }
);

export const heading3Mixin = mixin(
  {
    fontSize: Sizing.HyperSmall,
    fontWeight: FontWeights.Bold,
    lineHeight: Sizing.HyperSmall
  },
  { fontSize: Sizing.SuperSmall, lineHeight: Sizing.SuperSmall }
);

export const paragraphRegular = mixin(
  {
    fontSize: Sizing.UltraSmall,
    fontWeight: FontWeights.Regular,
    lineHeight: Sizing.UltraSmall
  },
  { fontSize: Sizing.HyperSmall, lineHeight: Sizing.HyperSmall }
);

export const paragraphBold = mixin(
  {
    fontSize: Sizing.UltraSmall,
    fontWeight: FontWeights.Bold,
    lineHeight: Sizing.UltraSmall
  },
  { fontSize: Sizing.HyperSmall, lineHeight: Sizing.HyperSmall }
);

export const spanRegular = mixin(
  {
    fontSize: Sizing.UltraSmall,
    fontWeight: FontWeights.Regular,
    lineHeight: Sizing.UltraSmall
  },
  { fontSize: Sizing.HyperSmall, lineHeight: Sizing.HyperSmall }
);
