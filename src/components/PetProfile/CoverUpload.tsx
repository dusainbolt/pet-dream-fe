// eslint-disable-next-line import/namespace
import { Button } from '@common/Button';
import { IComponentUpload } from '@common/Form/FieldUpload';
import PhotoViewComponent from '@common/PhotoView';
import { Avatar, Box, Stack } from '@mui/material';
import { getPetSlice } from '@redux/slices/petSlice';
import { useAppSelector } from '@redux/store';
import { FC } from 'react';
import { AlertErrorApp } from 'src/shared/Alert/AlertErrorApp';

export const CoverUpload: FC<IComponentUpload> = ({
  imageList,
  onImageUpload,
  //   onImageRemoveAll,
  //   onImageUpdate,
  //   onImageRemove,
  //   isDragging,
  //   dragProps,
  onReset,
  onSave,
}) => {
  const coverUrl = imageList[0]?.dataURL || imageList[0];
  const { loadingUpdateAvatarPet, errorUpdateAvatarPet } = useAppSelector(getPetSlice);
  return (
    <Box>
      <PhotoViewComponent src={coverUrl as any}>
        <img src={coverUrl as any} style={{ width: '100%' }} alt="cover" />
      </PhotoViewComponent>
      <AlertErrorApp error={errorUpdateAvatarPet} />
      <Stack spacing={1} direction="row">
        <Button size="small" variant="contained" onClick={onImageUpload}>
          Sửa ảnh bìa
        </Button>
        <Button
          size="small"
          loading={loadingUpdateAvatarPet}
          disabled={!imageList[0]?.dataURL}
          color="success"
          variant="contained"
          onClick={() => onSave(imageList)}
        >
          Lưu lại
        </Button>
        <Button disabled={!imageList[0]?.dataURL} size="small" color="error" variant="contained" onClick={onReset}>
          Huỷ
        </Button>
      </Stack>
    </Box>
    // <div className="upload__image-wrapper">
    //   <button style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
    //     Click or Drop here
    //   </button>
    //   &nbsp;
    //   <button onClick={onImageRemoveAll}>Remove all images</button>
    //   {imageList.map((image, index) => (
    //     <div key={index} className="image-item">
    //       <img src={image.dataURL} alt="" width="100" />
    //       <div className="image-item__btn-wrapper">
    //         <button onClick={() => onImageUpdate(index)}>Update</button>
    //         <button onClick={() => onImageRemove(index)}>Remove</button>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};
