import { Button } from '@common/Button';
import { PetCard } from '@common/Card/PetCard';
import UserAuthenticationLayout from '@common/Layout/UserAuthenticationLayout';
import { Grid } from '@mui/material';
import { openDrawerApp } from '@redux/slices/layoutSlice';
import { addPetStart, getPetSlice } from '@redux/slices/petSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { AppDrawer } from '@type/layout';
import { InputPet } from '@type/pet';
import { Formik } from 'formik';
import { FC } from 'react';
import { validateCreatePet, valuesCreatePet } from 'src/yup/validatePet';
import { FormAddPet } from './FormAddPet';

const DashboardComponent: FC<any> = () => {
  const { myPets } = useAppSelector(getPetSlice);
  const dispatch = useAppDispatch();

  const onSubmitAddPet = (values: InputPet) => {
    dispatch(addPetStart({ ...values, birthday: (values as any).birthday.unix() }));
  };

  const onClickAddPet = () => {
    dispatch(
      openDrawerApp({
        title: 'Thêm pet mới',
        width: 500,
        content: (
          <Formik onSubmit={onSubmitAddPet} validationSchema={validateCreatePet} initialValues={valuesCreatePet}>
            <FormAddPet />
          </Formik>
        ),
      } as AppDrawer)
    );
  };
  return (
    <UserAuthenticationLayout>
      <Button onClick={onClickAddPet}>Thêm pet mới</Button>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
        {myPets?.map((_, index) => (
          <Grid item xs={4} sm={4} lg={4} md={4} key={index}>
            <PetCard pet={_} />
          </Grid>
        ))}
      </Grid>
    </UserAuthenticationLayout>
  );
};

export default DashboardComponent;
