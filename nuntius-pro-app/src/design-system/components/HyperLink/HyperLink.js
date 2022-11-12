import { Typography } from '../Typography';
import { A } from './HyperLink.styles';

export const HyperLink = ({ text, route }) => {
  return (
    <A href={route}>
      <Typography variant="spanRegular" text-decoration={'none'} color={'blue'}>
        {text}
      </Typography>
    </A>
  );
};
