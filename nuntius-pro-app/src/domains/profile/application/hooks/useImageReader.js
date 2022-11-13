import * as React from 'react';

export const useImageReader = () => {
  const [imgUrl, setImgUrl] = React.useState(null);

  const readImage = (event) => {
    const file = event.target.files[0];

    if (file.type && !file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      setImgUrl(event.target.result);
    });
    reader.readAsDataURL(file);
  };

  return {
    readImage,
    imgUrl
  };
};
