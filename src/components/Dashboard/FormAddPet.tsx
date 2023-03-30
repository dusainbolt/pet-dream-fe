import { Button } from '@common/Button';
import FieldDate from '@common/Form/FieldDate';
import FieldText from '@common/Form/FieldInput';
import FieldSelect from '@common/Form/FieldSelect';
import { Stack } from '@mui/material';
import { getPetSlice } from '@redux/slices/petSlice';
import { useAppSelector } from '@redux/store';
import { OptionSelect } from '@type/field';
import { PetGender } from '@type/pet';
import { Field, useFormikContext } from 'formik';
import { AlertErrorApp } from 'src/shared/Alert/AlertErrorApp';

const optionsGender: OptionSelect[] = [
  {
    label: 'Đực',
    value: PetGender.MALE,
  },
  {
    label: 'Cái',
    value: PetGender.FEMALE,
  },
];

export const FormAddPet = () => {
  const { handleSubmit } = useFormikContext();
  const { loadingAddPet, errorAddPet } = useAppSelector(getPetSlice);

  return (
    <Stack>
      <AlertErrorApp error={errorAddPet} />
      <>
        <Field name="name" label="Tên pet" fieldProps={{ placeholder: 'Nhập tên pet của bạn' }} component={FieldText} />
        <Field name="nickname" label="Biệt danh" fieldProps={{ placeholder: 'Nhập biệt danh' }} component={FieldText} />
        <Field name="gender" label="Giới tính" options={optionsGender} component={FieldSelect} />
        <Field name="birthday" label="Sinh nhật" component={FieldDate} />

        <Button loading={loadingAddPet} onClick={handleSubmit as any} sx={{ mt: 3, mb: 3 }} variant="contained">
          Hoàn tất
        </Button>
      </>
    </Stack>
  );
};
