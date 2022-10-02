import styled from 'styled-components';
import { BoxShadow, Container, Breakpoints, Spacing } from '../../tokens';

export const Navigation = styled.nav`
  display: flex;
  top: 0;
  left: 0;
  height: auto;
  box-shadow: ${BoxShadow.Floating};
  position: sticky;
  padding: ${Spacing.UltraSmall} ${Spacing.HyperSmall};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing.None};
  margin: ${Spacing.None};
  width: 100%;

  @media (min-width: ${Breakpoints.Large}) {
    margin: auto;
    max-width: ${Container.Large};
  }
`;
