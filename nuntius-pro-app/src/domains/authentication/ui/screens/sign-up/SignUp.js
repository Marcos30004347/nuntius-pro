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
import { useAuthentation } from '../../../application/hooks/useAuthenticaton';

export const SignUp = () => {
  const { signup } = useAuthentation();

  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <FormWrapper
          onSubmit={async (e) => {
            try {
              e.preventDefault();
              const username = e.target[0].value;
              const email = e.target[1].value;
              const password = e.target[2].value;
              //const confirmed = e.target[3].value;

              await signup({
                username,
                email,
                password
              });
            } catch (e) {
              console.log('Não foi possível criar usuário');
            }
          }}
        >
          {/* <InputGroup label="Nome" htmlFor="">
            <InputText placeholder="Digite seu nome" name="nome" />
          </InputGroup> */}
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
          </InputGroup>
          <Button type="submit" variant="primary">
            Cadastrar
          </Button>
        </FormWrapper>
        <Typography variant="paragraphRegular" textAlign="center">
          Já possuo cadastro. <HyperLink text={'Voltar'} route={'/'} />
        </Typography>
      </Container>
    </Wrapper>
  );
};
