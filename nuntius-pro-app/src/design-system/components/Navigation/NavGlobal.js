import { Avatar } from '../Avatar';
import {
  ActionableItemsWrapper,
  ItemsWrapper,
  Navigation
} from './NavGlobal.styles';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Icons } from '../../foundations/Icons';
import { storageService } from '../../../shared/application/services/storageService';

// TODO: add src to Avatar and link to home in the heading
export const NavGlobal = ({ homeRoute, onLogOut, onAvatarClick }) => {
  return (
    <Navigation role="navigation">
      <ItemsWrapper>
        <a href={homeRoute} style={{ textDecoration: 'none' }}>
          <Typography variant="heading2">NUNTIUS</Typography>
        </a>
        <ActionableItemsWrapper>
          <Button variant="tertiary" onClick={onAvatarClick}>
            <Avatar
              src={storageService.getItem('user').image_url}
              size="small"
            />
          </Button>
          <div>
            <Button
              variant="tertiary"
              size="small"
              icon={Icons.LogOut}
              onClick={onLogOut}
            />
          </div>
        </ActionableItemsWrapper>
      </ItemsWrapper>
    </Navigation>
  );
};
