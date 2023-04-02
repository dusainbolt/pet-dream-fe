import { PetNewCard } from '@common/Card/PetNewCard';
import FieldUpload from '@common/Form/FieldUpload';
import UserAuthenticationLayout from '@common/Layout/UserAuthenticationLayout';
import PhotoViewComponent from '@common/PhotoView';
import { AvatarUpload } from '@components/PetProfile/AvatarUpload';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { openDrawerApp } from '@redux/slices/layoutSlice';
import { getPetSlice, updateAvatarPetStart, updateCoverPetStart } from '@redux/slices/petSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { DEFAULT_STYLE } from '@styles/theme';
import Helper from '@utils/helper';
import { Formik } from 'formik';
import { FC } from 'react';
import { CoverUpload } from './CoverUpload';
import { FormEditProfile } from './FormEditProfile';

const PetProfileComponent: FC<any> = () => {
  const dispatch = useAppDispatch();
  const { petInfo } = useAppSelector(getPetSlice);

  const onSaveAvatar = (values: any) => {
    const formData = new FormData();
    formData.append('avatar', values[0].file);
    dispatch(updateAvatarPetStart({ petId: petInfo?.id, body: formData as any }));
  };

  const onSaveCover = (values: any) => {
    const formData = new FormData();
    formData.append('cover', values[0].file);
    dispatch(updateCoverPetStart({ petId: petInfo?.id, body: formData as any }));
  };

  const onClickEditProfile = () => {
    // console.log('12312312312');
    dispatch(
      openDrawerApp({
        title: 'Chỉnh sửa thông tin pet',
        content: (
          <Formik initialValues={{ password: '' }} validationSchema={null} onSubmit={null}>
            <FormEditProfile
              avatarComponent={
                <FieldUpload
                  callbackSave={onSaveAvatar}
                  Component={AvatarUpload}
                  baseValue={[Helper.genPetAvatar(petInfo?.avatar)]}
                />
              }
              coverComponent={
                <FieldUpload
                  callbackSave={onSaveCover}
                  Component={CoverUpload}
                  baseValue={[Helper.genPetCover(petInfo?.cover)]}
                />
              }
            />
          </Formik>
        ),
        width: 500,
      })
    );
  };
  return (
    <UserAuthenticationLayout background={DEFAULT_STYLE.primaryColorLight}>
      <section style={{ marginTop: 26, background: 'white', overflow: 'hidden', borderRadius: 12 }}>
        <Box sx={{ minHeight: 210, maxHeight: 210, overflow: 'hidden' }}>
          <PhotoViewComponent src={Helper.genPetCover(petInfo?.cover)}>
            <img style={{ width: '100%' }} alt="pet profile" src={Helper.genPetCover(petInfo?.cover)} />
          </PhotoViewComponent>
        </Box>
        <Box sx={{ p: 3 }}>
          <Stack justifyContent="space-between" direction="row">
            <Stack direction="row" spacing={2}>
              <Box sx={{ width: 164, height: 164, marginTop: -10, zIndex: 4 }}>
                <Box sx={{ background: 'white', width: '100%', height: '100%', padding: 0.4, borderRadius: 100 }}>
                  <PhotoViewComponent src={Helper.genPetAvatar(petInfo?.avatar)}>
                    <img
                      style={{ width: '100%', height: '100%', borderRadius: 100 }}
                      alt="pet profile"
                      src={Helper.genPetAvatar(petInfo?.avatar)}
                    />
                  </PhotoViewComponent>
                </Box>
              </Box>
              <Box sx={{ mt: `-8px !important` }}>
                <Typography variant="h1" sx={{ fontSize: 26, fontWeight: 600 }}>
                  {petInfo?.name}
                </Typography>
                <Typography variant="h2" sx={{ fontSize: 20 }}>
                  ({Helper.display(petInfo?.nickName)}) - 3 tuoi
                </Typography>
              </Box>
            </Stack>
            <Box>
              <Button onClick={onClickEditProfile} startIcon={<ModeEditIcon />}>
                Chỉnh sửa thông tin
              </Button>
            </Box>
          </Stack>

          <Typography sx={{ mt: 2, mb: 2 }}>{Helper.display(petInfo?.bio)}</Typography>
          <Divider textAlign="left">
            <Chip style={{ background: DEFAULT_STYLE.primaryColorLight }} label="Thong tin ca nhan" />
          </Divider>

          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={4} sm={4} lg={6} md={6}>
              <ImageList sx={{ width: '100%', maxHeight: 300 }} variant="masonry" cols={4} gap={8}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <PhotoViewComponent src={Helper.genPetCover(petInfo?.cover)}>
                    <ImageListItem key="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c">
                      <img
                        src={`'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        // alt={item.title}

                        loading="lazy"
                      />
                    </ImageListItem>
                  </PhotoViewComponent>
                ))}
              </ImageList>
              {/* <ListItemText primary="Ngày tạo" secondary={'Date.toDateHoursStr(account?.createdOn)'} /> */}
            </Grid>
            <Grid item xs={4} sm={4} lg={6} md={6}>
              <Grid container spacing={1}>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Gioi tinh" secondary={petInfo?.gender} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Mat" secondary={Helper.display(petInfo?.eye)} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Tai" secondary={Helper.display(petInfo?.ear)} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Mau" secondary={Helper.display(petInfo?.petColor?.value)} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Long" secondary={Helper.display(petInfo?.hair)} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Duoi" secondary={Helper.display(petInfo?.tail)} />
                </Grid>
                <Grid item xs={4} sm={4} lg={4} md={6}>
                  <ListItemText primary="Chung loai" secondary={Helper.display(petInfo?.petSpecialType?.value)} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section style={{ marginTop: 26 }}>
        <Grid container style={{ margin: 'auto' }} item xs={12} md={8} lg={6} spacing={2}>
          <Grid item xs={12}>
            <PetNewCard pet={petInfo as any} />
          </Grid>{' '}
          <Grid item xs={12}>
            <PetNewCard pet={petInfo as any} />
          </Grid>
          {/* <Grid item xs={4} sm={4} lg={6} md={6}>
            <PetNewCard pet={petInfo as any} />
          </Grid> */}
        </Grid>
      </section>
    </UserAuthenticationLayout>
  );
};

export default PetProfileComponent;
