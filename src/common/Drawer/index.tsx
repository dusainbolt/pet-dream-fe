import XMaxIcon from '@asset/icons/XMarkIcon';
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from '@mui/material';
import { closeDrawerApp, getLayoutSlice } from '@redux/slices/layoutSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useTheme } from '@mui/material/styles';

export const AppDrawer = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { drawer } = useAppSelector(getLayoutSlice);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeDrawerApp());
  };

  return (
    <Drawer
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: fullScreen ? '100%' : drawer?.width || 'unset' },
      }}
      anchor={drawer?.anchor || 'right'}
      open={drawer?.open || false}
      onClose={handleClose}
    >
      <Stack sx={{ height: 64, padding: 2 }} direction="row" justifyContent="space-between" alignItems="center">
        <Typography>{drawer?.title}</Typography>
        <IconButton onClick={handleClose}>
          <XMaxIcon />
        </IconButton>
      </Stack>
      <Box style={{ padding: 16, maxHeight: 'calc(100% - 64px)', overflow: 'overlay' }}>{drawer?.content}</Box>
    </Drawer>
  );
};
