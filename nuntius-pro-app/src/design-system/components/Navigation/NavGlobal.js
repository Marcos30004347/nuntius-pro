import { Avatar } from '../Avatar';
import { ItemsWrapper, Navigation } from './NavGlobal.styles';
import { Typography } from '../Typography';

// const src =
//   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cdq5KaEAvBv24Ki_prmX3CV660Fl7Qrs0Q&usqp=CAU';

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
