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

export const NavGlobal = ({ homeRoute, onLogOut, onAvatarClick }) => {
  return (
    <Navigation role="navigation">
      <ItemsWrapper>
        <a href={homeRoute} style={{ textDecoration: 'none' }}>
          <Typography variant="heading2">NUNTIUS</Typography>
        </a>
        <ActionableItemsWrapper>
          <Avatar
            size="small"
            src={storageService.getItem('user').image_url}
            onClick={onAvatarClick}
          />
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
