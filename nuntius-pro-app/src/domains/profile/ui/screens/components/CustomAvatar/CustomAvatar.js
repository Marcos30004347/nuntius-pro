import { Avatar } from '../../../../../../design-system/components/Avatar';
import { useImageReader } from '../../../../application/hooks/useImageReader';

export const CustomAvatar = () => {
  const { readImage, imgUrl } = useImageReader();

  return (
    <label>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        style={{ display: 'none' }}
        onChange={(event) => readImage(event)}
      />
      <Avatar size="large" src={imgUrl} />
    </label>
  );
};
