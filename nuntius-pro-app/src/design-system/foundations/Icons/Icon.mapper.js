import { ReactComponent as EyeOutline } from './assets/outline/eye.outline.svg';
import { ReactComponent as EyeSolid } from './assets/solid/eye.solid.svg';
import { ReactComponent as EyeSlashOutline } from './assets/outline/eye-slash.outline.svg';
import { ReactComponent as EyeSlashSolid } from './assets/solid/eye-slash.solid.svg';
import { ReactComponent as UserGroupOutline } from './assets/outline/user-group.svg';
import { ReactComponent as UserGroupSolid } from './assets/solid/user-group.svg';
import { ReactComponent as PaperAirplaneOutline } from './assets/outline/paper-airplane.svg';
import { ReactComponent as PaperAirplaneSolid } from './assets/solid/paper-airplane.svg';

//assets: https://heroicons.com/

export const Icons = {
  Eye: 'Eye',
  EyeSlash: 'EyeSlash',
  UserGroup: 'UserGroup',
  PaperAirplane: 'PaperAirplane'
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
  [Icons.UserGroup]: {
    title: 'User group icon',
    outline: { icon: UserGroupOutline },
    solid: { icon: UserGroupSolid }
  },
  [Icons.PaperAirplane]: {
    title: 'Paper airplane icon',
    outline: { icon: PaperAirplaneOutline },
    solid: { icon: PaperAirplaneSolid }
  }
};
