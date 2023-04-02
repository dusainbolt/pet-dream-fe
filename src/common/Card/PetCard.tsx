import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Pet } from '@type/pet';
import Constant from '@utils/constant';
import Helper from '@utils/helper';
import Link from 'next/link';

export const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Link href={`/pet/${pet.id}`}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia component="img" height="140" image={Helper.genPetAvatar(pet?.avatar)} alt="green iguana" />
          <CardContent sx={{ height: '100%' }}>
            <Typography gutterBottom variant="h5" component="div">
              {pet?.name} | {pet?.nickName}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              {pet.favorite}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              <b>Giới tính: </b>
              {pet?.gender}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              <b>Tuổi: </b>
              {pet?.birthday}
            </Typography>
            <Typography variant="inherit" color="text.secondary">
              <b>Loại: </b>
              {pet?.petSpecialType?.value}
            </Typography>
            {/* <Typography variant="inherit" color="text.secondary">
            <b>Tai: </b>
            {pet?.ear}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            <b>Lông: </b>
            {pet?.hair}
          </Typography> */}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
