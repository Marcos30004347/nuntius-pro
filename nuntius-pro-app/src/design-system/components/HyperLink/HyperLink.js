import { Typography } from '../Typography';
import { A } from './HyperLink.styles';

export const HyperLink = ({ text, route, ...props }) => {
  return (
    <A href={route} {...props}>
      <Typography variant="spanRegular" text-decoration={'none'} color={'blue'}>
        {text}
      </Typography>
    </A>
  );
};
