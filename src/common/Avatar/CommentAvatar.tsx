import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { DEFAULT_STYLE } from '@styles/theme';
import React from 'react';

export const CommentAvatar = () => {
  return (
    <ListItem sx={{ p: 0 }} alignItems="flex-start">
      <ListItemAvatar sx={{ minWidth: 36 }}>
        <Avatar sx={{ width: 32, height: 32 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        sx={{ p: 1, background: DEFAULT_STYLE.primaryColorLight, borderRadius: 2 }}
        primary={
          <Typography
            sx={{ display: 'inline', fontWeight: 'bold' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            Sandra Adams
          </Typography>
        }
        secondary={
          // <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">
          //   Sandra Adams
          // </Typography>
          <Typography sx={{ fontSize: 15 }}>
            — Do you have Paris recommendations? Have you ever… — Do you have Paris recommendations? Have you ever… — Do
            you have Paris recommendations? Have you ever…
          </Typography>
        }
      />
    </ListItem>
  );
};
