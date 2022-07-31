import { createTheme, colors } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#191A19',
      paper: '#141414'
    },
    primary: {
      light: colors.green[800],
      main: '#1E5128',
      dark: '#124015'
    },
    secondary: {
      main: colors.deepPurple[300]
    },
    tertiary: {
      light: colors.grey[500],
      main: colors.grey[500],
      dark: colors.grey[500],
      contrastText: '#000000'
    },
    danger: {
      light: colors.red[400],
      main: colors.red[500],
      dark: colors.red[600],
      contrastText: '#FFFFFF'
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: () => ({
          background: `linear-gradient(
            -0deg,
            #0f3912 0%,
            #1E5128 20%,
            #1E5128 100%
          )`,
          fontFamily: `Bungee Hairline`
        })
      }
    }
  }
});

export default theme;
