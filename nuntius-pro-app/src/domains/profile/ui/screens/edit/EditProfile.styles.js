import styled from 'styled-components';
import { Spacing } from '../../../../../design-system/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${Spacing.Large};
  gap: ${Spacing.SuperSmall};
  padding: 20px;
`;

export const FistSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${Spacing.Quarck};
`;

export const ActionHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: ${Spacing.Quarck};
`;
