import styled from 'styled-components';
import { Spacing } from '../../../../../design-system/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${Spacing.SuperLarge};
  gap: ${Spacing.SuperSmall};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: ${Spacing.Micro};
`;
