import { Avatar } from '../../../../../../design-system/components/Avatar';

export const CustomAvatar = (props) => {
  return (
    <label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{ display: 'none' }}
        onChange={(event) => props.onImageLoaded(event)}
      />
      <Avatar size="large" src={props.src} />
    </label>
  );
};
