import { FC } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const PhotoViewComponent: FC<any> = ({ src, children }) => {
  return (
    <PhotoProvider>
      <PhotoView src={src as any}>{children}</PhotoView>
    </PhotoProvider>
  );
};

export default PhotoViewComponent;
