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
  const { updateUser } = useUserUpdate();
  const user = storageService.getItem('user');

  const [edit, setEdit] = React.useState(false);
  const [username, setUsername] = React.useState(user.username);
  const [about, setAbout] = React.useState(user.about);
  const [base64, setBase64] = React.useState(user.image_url);
  const [image, setIamge] = React.useState(user.image_url);
  const [hasImageChanged, setHasImageChanged] = React.useState(false);

  const readImage = (event) => {
    const file = event.target.files[0];

    if (file.type && !file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      setIamge(event.target.result);
      setBase64(event.target.result.replace(/^data:(.*,)?/, ''));
      setHasImageChanged(true);
    });

    reader.readAsDataURL(file);
  };

  const onSubmit = async () => {
    setEdit(false);

    updateUser({
      username: username,
      about: about,
      base64: hasImageChanged ? base64 : undefined
    });

    setHasImageChanged(false);
  };

  return (
    <>
      {user && (
        <PrivatePage>
          <Container>
            {!edit ? (
              <Avatar src={image} size="large" />
            ) : (
              <CustomAvatar src={image} onChange={readImage} />
            )}
            <FistSection>
              <Typography variant="paragraphRegular">
                @{user.username}
              </Typography>
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
              <CustomLabel
                icon={Icons.User}
                label="Nome"
                value={user.username}
              />
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
              <CustomLabel
                icon={Icons.Sparkles}
                label="Sobre"
                value={user.about}
              />
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
              <CustomLabel
                icon={Icons.Envelope}
                label="Email"
                value={user.email}
              />
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
      )}
    </>
  );
};
