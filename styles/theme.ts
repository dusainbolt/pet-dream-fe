import createCache from '@emotion/cache';
import { PaletteMode } from '@mui/material';
import Constant from '@utils/constant';

type DefaultStyle = {
  primaryColor: string;
  primaryColorLight: string;
  ellipseText: (row: number) => any;
  btnStyle: (color?: string) => any;
  otpStyle: () => any;
  scrollBar: any;
};

export const DEFAULT_STYLE: DefaultStyle = {
  primaryColor: '#6959CC',
  primaryColorLight: '#F5F4F6',
  // primaryColorLight: '#E9E7F8',
  ellipseText: (row: number) => ({
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitBoxAlign: 'start',
    WebkitLineClamp: row,
  }),
  btnStyle: (color: string = DEFAULT_STYLE.primaryColor) => ({
    borderColor: color,
    background: color,
    borderRadius: '24px',
    fontWeight: 500,

    '&:hover': {
      borderColor: color,
      background: color,
      opacity: 0.7,
    },
  }),
  otpStyle: () => ({
    width: '95% !important',
    height: '45px',
    borderRadius: '4px',
    border: 0,
    background: '#f0f0f0',
    fontSize: 20,
    fontWeight: 500,
  }),
  scrollBar: {
    scrollbarWidth: 'thin',
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
};

// Create a theme instance.
// const theme = createTheme({

// });
export const getThemeConfig = (mode: PaletteMode) => ({
  mode,
  palette: {
    common: {
      black: mode === Constant.theme.LIGHT ? '#19192B' : '#ffffff',
      white: mode === Constant.theme.LIGHT ? '#ffffff' : '#19192B',
    },
    primary: {
      light: DEFAULT_STYLE.primaryColorLight,
      main: DEFAULT_STYLE.primaryColor,
      // dark: '#0288D1',
      // contrastText: '#ffffff',
    },
    secondary: {
      main: '#607D8B', // omitting light and dark will calculate from main
      contrastText: '#757575',
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#79797a',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#00d589',
    },
    error: {
      main: '#ff4263',
    },
    background: {
      default: '#fff',
    },
    text: {
      blackLight: '#D6D7E0',
      primary: '#2E2E31',
    },
  },
  typography: {
    fontFamily: `Roboto`,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },
});

export function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

// export default theme;
