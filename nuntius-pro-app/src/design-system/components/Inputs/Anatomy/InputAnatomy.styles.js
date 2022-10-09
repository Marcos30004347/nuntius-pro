import styled from 'styled-components';
import { BorderRadius, Spacing } from '../../../tokens';
import { activeMixin, enabledMixin, errorMixin } from './InputAnatomy.mixins';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${BorderRadius.Small};
  padding: ${Spacing.None} ${Spacing.InsetSuperSmall};

  input,
  textarea {
    padding: ${Spacing.InsetSuperSmall} ${Spacing.None};
  }

  &[aria-invalid='false'] {
    ${enabledMixin}

    &:focus-within {
      ${activeMixin}
    }
  }

  &[aria-invalid='true'] {
    ${errorMixin}

    &:focus-within {
      ${activeMixin}
    }
  }
`;

export const Input = styled.input`
  padding: ${Spacing.None};
  border: none;
  width: 100%;
  appearance: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
