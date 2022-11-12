import { Button } from '../../../../../design-system/components/Button';
import {
  InputText,
  InputPassword
} from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container, FormWrapper } from './Login.styles';
import { HyperLink } from '../../../../../design-system/components/HyperLink';

export const Login = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <FormWrapper>
          <InputGroup label="Email" htmlFor="">
            <InputText placeholder="Digite seu email" name="email" />
          </InputGroup>
        </FormWrapper>
        <FormWrapper>
          <InputGroup label="Senha" htmlFor="">
            <InputPassword placeholder="Digite a sua senha" htmlFor="" />
            <Button variant="primary">Entrar</Button>
          </InputGroup>
        </FormWrapper>
        <Typography variant="paragraphRegular" textAlign="center">
          Ainda não possuo cadastro.{' '}
          <HyperLink text={'Cadastrar'} route={'/home'} />
        </Typography>
        <HyperLink text={'Esqueci a Senha'} route={'/home'} />
      </Container>
    </Wrapper>
  );
};
