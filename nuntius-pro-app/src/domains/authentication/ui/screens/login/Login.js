import { Formik } from 'formik';
import { Button } from '../../../../../design-system/components/Button';
import { InputText } from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container, Form, FormWrapper } from './Login.styles';
import { HyperLink } from '../../../../../design-system/components/HyperLink';
import { useAuthentation } from '../../../application/hooks/useAuthenticaton';

export const Login = () => {
  const { login } = useAuthentation();
  const initialValues = { email: '', password: '' };

  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <Formik initialValues={initialValues} onSubmit={login}>
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <FormWrapper>
                <InputGroup label="Email" htmlFor="email">
                  <InputText
                    placeholder="Digite seu email"
                    id="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                  />
                </InputGroup>
              </FormWrapper>
              <FormWrapper>
                <InputGroup label="Senha" htmlFor="password">
                  {/* <InputPassword
                    placeholder="Digite a sua senha"
                    id="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  /> */}
                  <InputText
                    placeholder="Digite a sua senha"
                    id="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                  />
                </InputGroup>
              </FormWrapper>
              <FormWrapper>
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </FormWrapper>
            </Form>
          )}
        </Formik>
        <Typography variant="paragraphRegular" textAlign="center">
          Ainda não possuo cadastro.{' '}
          <HyperLink text={'Cadastrar'} route={'/home'} />
        </Typography>
        <HyperLink text={'Esqueci a Senha'} route={'/home'} />
      </Container>
    </Wrapper>
  );
};
