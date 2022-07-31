import { Palette as MUIPalette } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    tertiary: MUIPalette['primary'];
    danger: MUIPalette['primary'];
  }
  interface PaletteOptions {
    tertiary: MUIPalette['primary'];
    danger: MUIPalette['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    danger: true;
  }

  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    danger: true;
  }
}
