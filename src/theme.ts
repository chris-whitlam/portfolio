import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    text: string;
    background: string;
    primary: string;
    secondary: string;
  },
  spacing: {
    small: string;
    medium: string;
    large: string;
  },
  breakpoints: {
    small: string;
    medium: string;
    large: string;
  }
}

const theme: Theme = {
  colors: {
    text: '#e7e1e1',
    background: '#1d1d1d',
    primary: '#295951',
    secondary: '#FFB800'
  },
  spacing: {
    small: '10px',
    medium: '20px',
    large: '3rem',
  },
  breakpoints: {
    small: '480px',
    medium: '768px',
    large: '1200px'
  }
};

export default theme;