import { Avatar } from '../../../../../design-system/components/Avatar';
import { Button } from '../../../../../design-system/components/Button';
import { Typography } from '../../../../../design-system/components/Typography';
import { PrivatePage } from '../../../../../shared/ui/components/PrivatePage';
import { Container, FistSection } from './EditProfile.styles';

export const EditProfile = () => {
  // get from context
  const name = 'Aline';
  return (
    <PrivatePage>
      <Container>
        <Avatar size="large" />
        <FistSection>
          <Typography variant="paragraphRegular">@{name}</Typography>
          <div>
            <Button size="small" variant="tertiary">
              Editar perfil
            </Button>
          </div>
        </FistSection>
      </Container>
    </PrivatePage>
  );
};
