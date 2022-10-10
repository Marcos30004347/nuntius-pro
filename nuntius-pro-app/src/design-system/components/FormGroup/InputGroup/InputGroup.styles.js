import styled from 'styled-components';
import { FontWeights, Spacing } from '../../../tokens';

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: ${FontWeights.Bold};
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${Spacing.Nano};
`;
