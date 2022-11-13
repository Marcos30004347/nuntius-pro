import { Avatar } from '../Avatar';
import { ItemsWrapper, Navigation } from './NavGlobal.styles';
import { Typography } from '../Typography';

// TODO: add src to Avatar and link to home in the heading
export const NavGlobal = ({ homeRoute, onAvatarClick }) => {
  return (
    <Navigation role="navigation">
      <ItemsWrapper>
        <a href={homeRoute} style={{ textDecoration: 'none' }}>
          <Typography variant="heading2">NUNTIUS</Typography>
        </a>
        <Avatar size="small" onClick={onAvatarClick} />
      </ItemsWrapper>
    </Navigation>
  );
};
