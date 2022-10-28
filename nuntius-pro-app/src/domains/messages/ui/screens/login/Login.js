import { Button } from '../../../../../design-system/components/Button';
import {
  InputText,
  InputPassword
} from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { PageWrapper } from '../../../../../shared/ui/components/PageWrapper';
import { Container, FormWrapper } from './Login.styles';

export const Login = () => {
  return (
    <PageWrapper>
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
        <Typography variant="paragraphRegular">
          Ainda não possuo cadastro. Cadastrar
        </Typography>
        <Typography variant="paragraphRegular">Esqueci a senha</Typography>
      </Container>
    </PageWrapper>
  );
};
