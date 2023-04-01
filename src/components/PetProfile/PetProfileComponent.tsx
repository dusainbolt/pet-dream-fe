import { PetCard } from '@common/Card/PetCard';
import { PetNewCard } from '@common/Card/PetNewCard';
import UserAuthenticationLayout from '@common/Layout/UserAuthenticationLayout';
import { Box, Chip, Divider, Grid, ImageList, ImageListItem, ListItemText, Stack, Typography } from '@mui/material';
import { getPetSlice } from '@redux/slices/petSlice';
import { useAppSelector } from '@redux/store';
import { DEFAULT_STYLE } from '@styles/theme';
import Helper from '@utils/helper';
import { FC } from 'react';

const PetProfileComponent: FC<any> = () => {
  const { petInfo } = useAppSelector(getPetSlice);
  return (
    <UserAuthenticationLayout background={DEFAULT_STYLE.primaryColorLight}>
      <section style={{ marginTop: 26, background: 'white', overflow: 'hidden', borderRadius: 12 }}>
        <Box sx={{ minHeight: 210, maxHeight: 210, overflow: 'hidden' }}>
          <img
            style={{ width: '100%' }}
            alt="pet profile"
            src="https://media.licdn.com/dms/image/C5616AQFg9-eEDwqRMg/profile-displaybackgroundimage-shrink_350_1400/0/1668475337250?e=1684972800&v=beta&t=zWrnQuEbKvmeEctCIly4maXv-cB4h6QT3YQgSo1LBkE"
          />
        </Box>
        <Box sx={{ p: 3 }}>
          <Stack justifyContent="space-between" direction="row">
            <Stack direction="row" spacing={2}>
              <Box sx={{ width: 164, height: 164, marginTop: -10, zIndex: 4 }}>
                <Box sx={{ background: 'white', width: '100%', height: '100%', padding: 0.4, borderRadius: 100 }}>
                  <img
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    alt="pet profile"
                    src="https://media.licdn.com/dms/image/C5616AQFg9-eEDwqRMg/profile-displaybackgroundimage-shrink_350_1400/0/1668475337250?e=1684972800&v=beta&t=zWrnQuEbKvmeEctCIly4maXv-cB4h6QT3YQgSo1LBkE"
                  />
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
            <Box>EDIT ICON</Box>
          </Stack>
          <Typography sx={{ mt: 2, mb: 2 }}>{Helper.display(petInfo?.bio)}</Typography>
          <Divider textAlign="left">
            <Chip style={{ background: DEFAULT_STYLE.primaryColorLight }} label="Thong tin ca nhan" />
          </Divider>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={4} sm={4} lg={6} md={6}>
              <ImageList sx={{ width: '100%', maxHeight: 300 }} variant="masonry" cols={4} gap={8}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <ImageListItem key="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c">
                    <img
                      src={`${'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      // alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
              {/* <ListItemText primary="Ngày tạo" secondary={'Date.toDateHoursStr(account?.createdOn)'} /> */}
            </Grid>
            <Grid item xs={4} sm={4} lg={6} md={6}>
              <Grid container spacing={{ xs: 1 }}>
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
        <Grid container style={{ margin: 'auto' }} xs={12} md={8} lg={6} spacing={{ xs: 2, md: 3 }}>
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
