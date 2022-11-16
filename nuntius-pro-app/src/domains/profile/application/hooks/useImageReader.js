import * as React from 'react';

export const useImageReader = (url) => {
  const [imgUrl, setImgUrl] = React.useState(url);

  const readImage = (data) => {
    setImgUrl(data);
  };

  return {
    readImage,
    imgUrl
  };
};
