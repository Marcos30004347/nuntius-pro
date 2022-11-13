import { Avatar } from '../../../../../design-system/components/Avatar';
import { Button } from '../../../../../design-system/components/Button';
import { Icons } from '../../../../../design-system/foundations/Icons';
import { Typography } from '../../../../../design-system/components/Typography';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { CustomLabel } from '../components/CustomLabel';
import { Container, FistSection } from './EditProfile.styles';

export const EditProfile = () => {
  // get from context
  const user = {
    name: 'Aline',
    about: 'When will you realize Vienna waits for you?',
    email: 'email@email.com'
  };

  return (
    <PrivatePage>
      <Container>
        <Avatar size="large" />
        <FistSection>
          <Typography variant="paragraphRegular">@{user.name}</Typography>
          <div>
            <Button size="small" variant="tertiary">
              Editar perfil
            </Button>
          </div>
        </FistSection>
        <CustomLabel icon={Icons.User} label="Nome" value={user.name} />
        <CustomLabel icon={Icons.Sparkles} label="Sobre" value={user.about} />
        <CustomLabel icon={Icons.Envelope} label="Email" value={user.email} />
      </Container>
    </PrivatePage>
  );
};
