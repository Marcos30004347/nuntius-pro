import { ReactComponent as EyeOutline } from './assets/outline/eye.outline.svg';
import { ReactComponent as EyeSolid } from './assets/solid/eye.solid.svg';
import { ReactComponent as EyeSlashOutline } from './assets/outline/eye-slash.outline.svg';
import { ReactComponent as EyeSlashSolid } from './assets/solid/eye-slash.solid.svg';
import { ReactComponent as UserGroupOutline } from './assets/outline/user-group.svg';
import { ReactComponent as UserGroupSolid } from './assets/solid/user-group.svg';

//assets: https://heroicons.com/

export const Icons = {
  Eye: 'Eye',
  EyeSlash: 'EyeSlash',
  UerGroup: 'UserGroup'
};

export const IconsMapper = {
  [Icons.Eye]: {
    title: 'Eye icon',
    outline: { icon: EyeOutline },
    solid: { icon: EyeSolid }
  },
  [Icons.EyeSlash]: {
    title: 'Eye slash icon',
    outline: { icon: EyeSlashOutline },
    solid: { icon: EyeSlashSolid }
  },
  [Icons.UerGroup]: {
    title: 'User group icon',
    outline: { icon: UserGroupOutline },
    solid: { icon: UserGroupSolid }
  }
};
