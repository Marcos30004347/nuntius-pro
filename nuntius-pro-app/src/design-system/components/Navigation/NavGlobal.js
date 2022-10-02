import { Avatar } from '../Avatar';
import { ItemsWrapper, Navigation } from './NavGlobal.styles';
import { Typography } from '../Typography';

// TODO: add src to Avatar and link to home in the heading
export const NavGlobal = () => {
  return (
    <Navigation role="navigation">
      <ItemsWrapper>
        <Typography variant="heading2">NUNTIUS</Typography>
        <Avatar size="small" />
      </ItemsWrapper>
    </Navigation>
  );
};
