import { Color, Spacing } from '../../tokens';

export const ButtonSizes = {
  small: {
    padding: Spacing.SquishSuperMedium
  },
  medium: { padding: Spacing.SquishMedium },
  large: { padding: Spacing.SquishExtraLarge }
};

export const ButtonColors = {
  primary: {
    enabled: {
      bgColor: Color.Brand600,
      color: Color.White
    },
    hovered: {
      bgColor: Color.Brand700,
      color: Color.White
    },
    disabled: {
      bgColor: Color.Neutral100,
      color: Color.Neutral400
    }
  },
  secondary: {
    enabled: {
      bgColor: Color.Neutral100,
      color: Color.Neutral900
    },
    hovered: {
      bgColor: Color.Neutral200,
      color: Color.Neutral900
    },
    disabled: {
      bgColor: Color.Neutral100,
      color: Color.Neutral400
    }
  },
  tertiary: {
    enabled: {
      bgColor: 'transparent',
      color: Color.Neutral600
    },
    hovered: {
      bgColor: Color.Neutral100,
      color: Color.Neutral600
    },
    disabled: {
      bgColor: 'transparent',
      color: Color.Neutral400
    }
  }
};
