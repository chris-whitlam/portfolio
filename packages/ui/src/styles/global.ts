import { GlobalStylesProps } from '@mui/material';

const globalStyles: GlobalStylesProps['styles'] = {
  html: {
    padding: 0,
    margin: 0
  },
  body: {
    padding: 0,
    margin: 0,
    color: '#e7e1e1',
    fontFamily: `"Roboto","Helvetica","Arial", sans-serif;`,
    lineHeight: '1.5em',
    backgroundImage: 'url(background.svg)',
    backgroundSize: '350px 350px'
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
    zIndex: 1,
    marginBottom: 0
  },
  h4: {
    fontFamily: `'Bungee Hairline', cursive;`,
    fontSize: '1.2rem',
    zIndex: 1,
    marginBottom: 0
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
      textDecoration: 'underline'
    }
  }
};

export default globalStyles;
