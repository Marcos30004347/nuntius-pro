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
import { useGetUser } from '../../../application/hooks/useGetUser';

import { useEffect } from 'react';

export const EditProfile = () => {
  const [edit, setEdit] = React.useState(false);
  const [user, setUser] = React.useState({});
  const { getUser } = useGetUser();

  useEffect(() => {
    const get = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (e) {
        console.log(e);
      }
    };
    get();
  }, [user]);

  return (
    <>
      {user && (
        <PrivatePage>
          <Container>
            {!edit ? <Avatar size="large" /> : <CustomAvatar />}
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
                <InputText name="nome" value={user.username} />
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
                <InputText name="sobre" value={user.about} />
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
                  <Button>Salvar</Button>
                </div>
              </ActionHolder>
            )}
          </Container>
        </PrivatePage>
      )}
    </>
  );
};
