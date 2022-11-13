import styled from 'styled-components';
import { Spacing } from '../../../../../design-system/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${Spacing.Large};
  gap: ${Spacing.SuperSmall};
`;

export const FistSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Spacing.Quarck};
`;
