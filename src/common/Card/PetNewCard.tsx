import { ChildBadgeAvatars } from '@common/Avatar/BadgeAvatar';
import { CommentAvatar } from '@common/Avatar/CommentAvatar';
import FieldText from '@common/Form/FieldInput';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import { Avatar, Divider, List, Stack, TextFieldProps } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { DEFAULT_STYLE } from '@styles/theme';
import { Field, Formik } from 'formik';
import * as React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PetNewCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader
        avatar={<ChildBadgeAvatars />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
      // component="div"
      // height="194"
      // image="https://images.unsplash.c om/photo-1444418776041-9c7e33cc5a9c"
      // alt="Paella dish"
      >
        <Carousel dynamicHeight showThumbs={false} showArrows>
          <div>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/338384082_452339490393135_2977046467931624385_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JmIwf5Z2ZjAAX9-uW10&_nc_ht=scontent.fhan2-4.fna&oh=00_AfB1RNUwhxFvEfQ9q_JVVOV7300AWVSYMFiMlKBv5sYqyQ&oe=64292F5F" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/338213031_1154664965205846_3286554557070220037_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=eXpYhqXyDAIAX9AH5K4&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAA35z134Hx369aASnK4hO5sBFe2BOiuMDQyaqU8VcIUA&oe=6429E863" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/338003359_958300178501644_848639670850308737_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=Vko2OFKrvOsAX-rGbRU&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCY5t0BI-JEwVYJG9vcOdOA1o8lE3TTNynk13ua4n8xYw&oe=6429F073" />
            <p className="legend">Legend 4</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" />
            <p className="legend">Legend 5</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" />
            <p className="legend">Legend 6</p>
          </div>
        </Carousel>
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0, pb: 0 }} disableSpacing>
        {/* <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between"> */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{ color: 'red' }} />
          <Typography>1</Typography>
        </IconButton>
        <IconButton aria-label="share">
          <ModeCommentIcon />
          <Typography>2</Typography>
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
        {/* </Stack> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pb: `8px !important` }}>
          <Divider />
          <List>
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
            <CommentAvatar />
          </List>
        </CardContent>
      </Collapse>

      <Formik initialValues={{ password: '' }} validationSchema={null} onSubmit={null}>
        {(formik) => (
          <CardContent sx={{ pt: 0, pb: `8px !important` }}>
            <Divider sx={{ mb: 1.5 }} />
            <Stack spacing={0.7} direction="row" alignItems="flex-start">
              <Avatar sx={{ width: 32, height: 32 }} src="https://cdn-icons-png.flaticon.com/512/168/168726.png" />
              <Field
                name="password"
                fieldProps={
                  {
                    placeholder: 'Nhập bình luận',
                    multiline: true,
                    sx: {
                      '& .MuiInputBase-multiline': {
                        p: 0.75,
                        pl: 1.3,
                        pr: 1.3,
                        borderRadius: 3,
                        fontSize: 14,
                        border: 'none',
                        background: DEFAULT_STYLE.primaryColorLight,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                      },
                    },
                  } as TextFieldProps
                }
                // label="Mật khẩu"
                component={FieldText}
              />
            </Stack>

            {/* <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography> */}
          </CardContent>
        )}
      </Formik>
    </Card>
  );
};
