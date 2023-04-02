import { AvatarUpload } from '@components/PetProfile/AvatarUpload';
import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import ImageUploading, { ErrorsType, ImageListType } from 'react-images-uploading';

export type IComponentUpload = FieldUploadChildType & {
  onReset: any;
  onSave: any;
};

export interface FieldUploadType {
  label?: string;
  className?: string;
  Component?: FC<IComponentUpload>;
  baseValue?: any;
  multiple?: boolean;
  callbackSave?: any;
  //   field?: FieldInputProps<any>;
  //   child?: any;
  //   meta?: FieldMetaProps<any>;
  //   fieldProps?: TextFieldProps;
  //   block?: ValidateBlock;
  //   onPressSubmitEnter?: any;
  //   enableSubmit?: boolean;
  //   showError?: boolean;
}

export interface FieldUploadChildType {
  imageList: ImageListType;
  onImageUpload: () => void;
  onImageRemoveAll: () => void;
  errors: ErrorsType;
  onImageUpdate: (index: number) => void;
  onImageRemove: (index: number) => void;
  isDragging: boolean;
  dragProps: {
    onDrop: (e: any) => void;
    onDragEnter: (e: any) => void;
    onDragLeave: (e: any) => void;
    onDragOver: (e: any) => void;
    onDragStart: (e: any) => void;
  };
}

const FieldUpload: FC<FieldUploadType> = ({ className, Component, baseValue, multiple = false, callbackSave }) => {
  const [images, setImages] = useState([]);

  const maxNumber = 69;

  useEffect(() => {
    setImages(baseValue);
  }, [baseValue]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  const onReset = () => {
    setImages(baseValue);
  };

  const onSave = (values: ImageListType) => {
    callbackSave(values);
    setImages(values.map((item) => item?.dataURL || item) as any);
  };

  return (
    <Box className={className}>
      <ImageUploading
        // eslint-disable-next-line react/no-children-prop
        multiple={multiple}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {(props) => {
          return Component && <Component onSave={onSave} onReset={onReset} {...props} />;
        }}
      </ImageUploading>
    </Box>
  );
};

export default FieldUpload;
