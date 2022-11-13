import * as React from 'react';
import { Avatar } from '../../../../../design-system/components/Avatar';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { Typography } from '../../../../../design-system/components/Typography';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { InputText } from '../../../../../design-system/components/Inputs';
import { InputGroup } from '../../../../../design-system/components/FormGroup/InputGroup';
import { CustomLabel } from '../components/CustomLabel';
import { CustomAvatar } from '../components/CustomAvatar';
import { ActionHolder, Container, FistSection } from './EditProfile.styles';

export const EditProfile = () => {
  const [edit, setEdit] = React.useState(false);
  // get from context
  const user = {
    name: 'Aline',
    about: 'When will you realize Vienna waits for you?',
    email: 'email@email.com'
  };

  return (
    <PrivatePage>
      <Container>
        {!edit ? <Avatar size="large" /> : <CustomAvatar />}
        <FistSection>
          <Typography variant="paragraphRegular">@{user.name}</Typography>
          {!edit && (
            <div>
              <Button
                size="small"
                variant="tertiary"
                onClick={() => setEdit(!edit)}
              >
                Editar perfil
              </Button>
            </div>
          )}
        </FistSection>
        {!edit ? (
          <CustomLabel icon={Icons.User} label="Nome" value={user.name} />
        ) : (
          <InputGroup label="Nome" htmlFor="nome">
            <InputText name="nome" value={user.name} />
          </InputGroup>
        )}
        {!edit ? (
          <CustomLabel icon={Icons.Sparkles} label="Sobre" value={user.about} />
        ) : (
          <InputGroup label="Sobre" htmlFor="sobre">
            <InputText name="sobre" value={user.about} />
          </InputGroup>
        )}

        {!edit && (
          <CustomLabel icon={Icons.Envelope} label="Email" value={user.email} />
        )}

        {edit && (
          <ActionHolder>
            <div>
              <Button variant="tertiary" onClick={() => setEdit(!edit)}>
                Cancelar
              </Button>
            </div>
            <div>
              <Button>Salvar</Button>
            </div>
          </ActionHolder>
        )}
      </Container>
    </PrivatePage>
  );
};
