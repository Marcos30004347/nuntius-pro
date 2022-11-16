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
import { storageService } from '../../../../../shared/application/services/storageService';
import { useUserUpdate } from '../../../application/hooks/useUserUpdate';

export const EditProfile = () => {
  const user = storageService.getItem('user');

  const [edit, setEdit] = React.useState(false);
  const [username, setUsername] = React.useState(user.username);
  const [about, setAbout] = React.useState(user.about);

  const [base64, setBase64] = React.useState(user.image_url);
  const [displayDataURL, setDisplayDataURL] = React.useState(user.image_url);

  const [wasImageUpdated, setWasImageUpdated] = React.useState(false);

  const { updateUser } = useUserUpdate();

  console.log(user);

  const onImageLoaded = (event) => {
    const file = event.target.files[0];

    if (file.type && !file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      setWasImageUpdated(true);
      const imageData = event.target.result;

      setBase64(imageData.replace('data:', '').replace(/^.+,/, ''));
      setDisplayDataURL(event.target.result);
    });

    reader.readAsDataURL(file);
  };

  const onSubmit = () => {
    const doUpdate = async () => {
      await updateUser({
        image_base64: wasImageUpdated ? base64 : undefined,
        username: username,
        about: about
      });

      setEdit(false);
    };
    doUpdate();
  };

  return (
    <PrivatePage>
      <Container>
        {!edit ? (
          <Avatar src={displayDataURL} size="large" />
        ) : (
          <CustomAvatar src={displayDataURL} onImageLoaded={onImageLoaded} />
        )}
        <FistSection>
          <Typography variant="paragraphRegular">@{user.username}</Typography>
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
          <CustomLabel icon={Icons.User} label="Nome" value={username} />
        ) : (
          <InputGroup label="Nome" htmlFor="nome">
            <InputText
              name="nome"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        )}
        {!edit ? (
          <CustomLabel icon={Icons.Sparkles} label="Sobre" value={about} />
        ) : (
          <InputGroup label="Sobre" htmlFor="sobre">
            <InputText
              name="sobre"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
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
              <Button onClick={onSubmit}>Salvar</Button>
            </div>
          </ActionHolder>
        )}
      </Container>
    </PrivatePage>
  );
};
