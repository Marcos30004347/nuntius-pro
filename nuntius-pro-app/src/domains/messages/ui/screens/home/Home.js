import { Button } from '../../../../../design-system/components/Button';
import { InputText } from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { Typography } from '../../../../../design-system/components/Typography';
import { PageWrapper } from '../../../../../shared/ui/components/PageWrapper';
import { Container, FormWrapper } from './Home.styles';

export const Home = () => {
  return (
    <PageWrapper>
      <Container>
        <Typography variant="heading1" textAlign="center">
          NUNTIUS
        </Typography>
        <FormWrapper>
          <InputGroup label="Entrar em uma sala" htmlFor="entrar">
            <InputText placeholder="Nome da sala" name="entrar" />
          </InputGroup>
          <Button variant="primary">Entrar</Button>
        </FormWrapper>
        <FormWrapper>
          <InputGroup label="Criar uma sala" htmlFor="criar">
            <InputText placeholder="Nome da sala" name="criar" />
          </InputGroup>
          <Button variant="primary">Criar</Button>
        </FormWrapper>
      </Container>
    </PageWrapper>
  );
};
