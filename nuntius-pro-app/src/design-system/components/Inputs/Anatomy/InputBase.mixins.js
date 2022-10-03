import { css } from 'styled-components';
import { BorderWidth, Color } from '../../../tokens';

const borderMixin = ({ color }) =>
  css`
    border: ${BorderWidth.Hairline} solid ${color};
  `;

const placeholderMixin = ({ color }) => css`
  input {
    &::placeholder {
      color: ${color};
      opacity: 1;
    }

    &::placeholder,
    &:-ms-input-placeholder,
    &::-ms-input-placeholder {
      color: ${color};
    }
  }
`;

export const enabledMixin = css`
  ${borderMixin({ color: Color.Neutral600 })};
  ${placeholderMixin({ color: Color.Neutral400 })}
`;

export const activeMixin = css`
  ${borderMixin({ color: Color.Brand700 })}
  ${placeholderMixin({ color: Color.Neutral100 })}
`;

export const errorMixin = css`
  ${borderMixin({ color: Color.Rose600 })}
  ${placeholderMixin({ color: Color.Neutral400 })}
`;
