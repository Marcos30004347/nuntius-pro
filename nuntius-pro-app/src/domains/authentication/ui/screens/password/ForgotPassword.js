import { Button } from '../../../../../design-system/components/Button';
import { InputText } from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container, FormWrapper } from './ForgotPassword.styles';
import { HyperLink } from '../../../../../design-system/components/HyperLink';

export const ForgotPassword = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <FormWrapper>
          <Typography variant="heading3" textAlign="center">
            Encontre sua conta.
          </Typography>
          <InputGroup label="Email" htmlFor="">
            <InputText placeholder="Digite seu email" name="email" />
          </InputGroup>
          <Button variant="primary">Recuperar</Button>
        </FormWrapper>
        <Typography variant="paragraphRegular" textAlign="center">
          <HyperLink text={'Retornar'} route={'/'} />
        </Typography>
      </Container>
    </Wrapper>
  );
};
