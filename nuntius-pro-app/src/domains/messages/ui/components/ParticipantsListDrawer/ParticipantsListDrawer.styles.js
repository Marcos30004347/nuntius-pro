import styled from 'styled-components';
import { Spacing } from '../../../../../design-system/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${Spacing.SuperSmall};
  gap: ${Spacing.UltraSmall};
`;

export const TitleHolder = styled.div`
  display: flex;
  gap: ${Spacing.UltraSmall};
  margin-bottom: ${Spacing.UltraSmall};
`;
