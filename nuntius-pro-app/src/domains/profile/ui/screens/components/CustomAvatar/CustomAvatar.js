import { Avatar } from '../../../../../../design-system/components/Avatar';

export const CustomAvatar = ({ src, onChange }) => {
  return (
    <label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{ display: 'none' }}
        onChange={(event) => onChange(event)}
      />
      <Avatar size="large" src={src} />
    </label>
  );
};
