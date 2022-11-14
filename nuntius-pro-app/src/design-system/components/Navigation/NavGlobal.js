import { Avatar } from '../Avatar';
import {
  ActionableItemsWrapper,
  ItemsWrapper,
  Navigation
} from './NavGlobal.styles';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { Icons } from '../../foundations/Icons';

// TODO: add src to Avatar and link to home in the heading
export const NavGlobal = ({ homeRoute, onLogOut }) => {
  return (
    <Navigation role="navigation">
      <ItemsWrapper>
        <a href={homeRoute} style={{ textDecoration: 'none' }}>
          <Typography variant="heading2">NUNTIUS</Typography>
        </a>
        <ActionableItemsWrapper>
          <Avatar size="small" />
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
