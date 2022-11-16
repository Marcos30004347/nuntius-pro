import { Formik } from 'formik';
import { Button } from '../../../../../design-system/components/Button';
import {
  InputText,
  InputPassword
} from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { Wrapper } from '../../../../../shared/ui/components/Wrapper';
import { Container, Form, FormWrapper } from './SignUp.styles';
import { HyperLink } from '../../../../../design-system/components/HyperLink';
import { useAuthentation } from '../../../application/hooks/useAuthenticaton';
import { signUpSchema } from '../../../application/validations/singUpSchema';
// import { CustomAvatar } from '../../../../profile/ui/screens/components/CustomAvatar';

export const SignUp = () => {
  const { signup } = useAuthentation();
  const initialValues = {
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
    username: '',
    about: ''
  };
  return (
    <Wrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpSchema}
          onSubmit={signup}
          validateOnMount
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit}>
              <FormWrapper>
                <InputGroup label="Nome *" htmlFor="name">
                  <InputText
                    placeholder="Digite seu nome"
                    id="name"
                    name="name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    error={props.touched.name && Boolean(props.errors.name)}
                  />
                </InputGroup>

                <InputGroup label="Username *" htmlFor="username">
                  <InputText
                    placeholder="Digite seu username"
                    id="username"
                    name="username"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.username}
                    error={
                      props.touched.username && Boolean(props.errors.username)
                    }
                  />
                </InputGroup>

                <InputGroup label="Email *" htmlFor="email">
                  <InputText
                    placeholder="Digite seu email"
                    id="email"
                    name="email"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    error={props.touched.email && Boolean(props.errors.email)}
                  />
                  {props.errors.email &&
                    props.touched.email &&
                    props.errors.email}
                </InputGroup>

                <InputGroup label="Senha *" htmlFor="password">
                  <InputPassword
                    placeholder="Digite a sua senha"
                    id="password"
                    name="password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.password}
                    error={
                      props.touched.password && Boolean(props.errors.password)
                    }
                  />
                  {props.errors.password &&
                    props.touched.password &&
                    props.errors.password}
                </InputGroup>

                <InputGroup label="Confirme sua Senha *" htmlFor="">
                  <InputPassword
                    placeholder="Confirme a sua senha"
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.confirmPassword}
                    error={
                      props.touched.confirmPassword &&
                      Boolean(props.errors.confirmPassword)
                    }
                  />
                  {props.errors.confirmPassword &&
                    props.touched.confirmPassword &&
                    props.errors.confirmPassword}
                </InputGroup>

                <InputGroup label="Biografia *" htmlFor="about">
                  <InputText
                    placeholder="Conte um pouco sobre você"
                    id="about"
                    name="about"
                    multiline={true}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.about}
                    error={props.touched.about && Boolean(props.errors.about)}
                  />
                  {props.errors.about &&
                    props.touched.about &&
                    props.errors.about}
                </InputGroup>

                <Button
                  variant="primary"
                  disabled={!props.isValid}
                  type="submit"
                >
                  Entrar
                </Button>
              </FormWrapper>
            </Form>
          )}
        </Formik>

        <Typography variant="paragraphRegular" textAlign="center">
          Já possuo cadastro. <HyperLink text={'Voltar'} route={'/'} />
        </Typography>
      </Container>
    </Wrapper>
  );
};
