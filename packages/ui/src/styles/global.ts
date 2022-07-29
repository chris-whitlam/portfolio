import { GlobalStylesProps } from "@mui/material";
import { theme } from '.';

const globalStyles: GlobalStylesProps['styles'] = {
  html: {
    padding: 0,
    margin: 0,
  },
  body: {
    padding: 0,
    margin: 0,
    color: '#e7e1e1',
    fontFamily: `"Roboto","Helvetica","Arial", sans-serif;`,
    lineHeight: '1.5em'
  },
  h1: {
    fontFamily: `'Bungee Hairline', cursive;`,
    fontSize: '1rem',
    zIndex: 1
  },
  h2: {
    fontFamily: `'Bungee Hairline', cursive;`,
    fontSize: '2rem',
    zIndex: 100
  },
  h3: {
    fontFamily: `'Bungee Hairline', cursive;`,
    fontSize: '1.7rem',
    zIndex: 1
  },
  span: {
    zIndex: 1
  },
  p: {
    lineHeight: '1.7em',
    zIndex: 1
  },
  a: {
    color: 'white',
    textDecoration: 'none',
    zIndex: 1,

    '&:hover': {
      textDecoration: 'underline',
    }
  },
}

export default globalStyles;