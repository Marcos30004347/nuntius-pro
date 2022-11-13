import styled from 'styled-components';
import { Spacing } from '../../../../../../design-system/tokens';
import { Icon } from '../../../../../../design-system/foundations/Icons';
import { Divider } from '../../../../../../design-system/components/Divider';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${Spacing.UltraSmall};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${Spacing.Nano};
`;

export const CustomLabel = ({ icon, label, value }) => {
  return (
    <Container>
      <Wrapper>
        <Icon icon={icon} variant="solid" />
        <label>{label}</label>
      </Wrapper>
      <Divider />
      <p>{value}</p>
    </Container>
  );
};
