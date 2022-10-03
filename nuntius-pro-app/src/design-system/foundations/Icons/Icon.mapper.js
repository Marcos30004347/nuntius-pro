import { ReactComponent as EyeOutline } from './assets/outline/eye.outline.svg';
import { ReactComponent as EyeSolid } from './assets/solid/eye.solid.svg';
import { ReactComponent as EyeSlashOutline } from './assets/outline/eye-slash.outline.svg';
import { ReactComponent as EyeSlashSolid } from './assets/solid/eye-slash.solid.svg';

//assets: https://heroicons.com/

export const Icons = {
  Eye: 'Eye',
  EyeSlash: 'EyeSlash'
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
  }
};
