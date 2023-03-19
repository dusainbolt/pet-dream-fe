import { Theme } from '@mui/material';
import { CSSProperties, makeStyles } from '@mui/styles';
import { DEFAULT_STYLE } from '@styles/theme';

export const userAuthenticationLayoutStyles = (drawerWidth: number) =>
  makeStyles((theme: Theme) => ({
    boxMain: {
      // background: DEFAULT_STYLE.primaryColorLight,
      flexGrow: 1,
      padding: theme.spacing(3),
      height: 'calc(calc(var(--vh, 1vh) * 100))',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      } as CSSProperties,
    },
    navDrawer: {
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
    },
    appBar: {
      background: 'white',
      boxShadow: '0 0 15px 0 rgba(0,0,0,.1)',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
      } as CSSProperties,
    },
    // toolbar: {
    //   padding: theme.spacing(1),
    //   position: 'fixed',
    //   width: drawerWidth,
    //   height: 64,

    // },
    // buttonAddTopic: { height: 34, borderRadius: theme.spacing(4), width: '100%' },
    // boxChatList: {
    //   padding: theme.spacing(1),
    //   position: 'absolute',
    //   top: 110,
    //   maxHeight: 'calc(100% - 110px)',
    //   height: '100%',
    //   overflow: 'auto',
    //   width: '100%',
    // },
    // appBar: {
    //   background: 'white',
    //   boxShadow: '0 2px 2px rgba(114,114,114,0.168627)',

    // },
    // boxMain: {
    //   overflow: 'hidden',
    //   position: 'relative',
    //   top: 64,
    //   flexGrow: 1,
    //   height: 'calc(calc(var(--vh, 1vh) * 100) - 64px)',
    // },
  }));
