import { Button } from '../../../../../design-system/components/Button';
import {
  InputText,
  InputPassword
} from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container, FormWrapper } from './SignUp.styles';
import { HyperLink } from '../../../../../design-system/components/HyperLink';

export const SignUp = () => {
  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <FormWrapper>
          <InputGroup label="Nome" htmlFor="">
            <InputText placeholder="Digite seu nome" name="nome" />
          </InputGroup>
          <InputGroup label="Username" htmlFor="">
            <InputText placeholder="Digite seu username" name="username" />
          </InputGroup>
          <InputGroup label="Email" htmlFor="">
            <InputText placeholder="Digite seu email" name="email" />
          </InputGroup>
          <InputGroup label="Senha" htmlFor="">
            <InputPassword placeholder="Digite a sua senha" htmlFor="" />
          </InputGroup>
          <InputGroup label="Confirme sua Senha" htmlFor="">
            <InputPassword
              placeholder="Digite a sua senha novamente"
              htmlFor=""
            />
            <Button variant="primary">Entrar</Button>
          </InputGroup>
        </FormWrapper>
        <Typography variant="paragraphRegular" textAlign="center">
          Já possuo cadastro. <HyperLink text={'Voltar'} route={'/'} />
        </Typography>
      </Container>
    </Wrapper>
  );
};
