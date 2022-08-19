import { FC } from 'react';

import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ScrollToTop, Socials } from '@atoms';

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto',
      width: '200px',
      textAlign: 'center',
      paddingBottom: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(3)
      }
    },
    socialsContainer: {
      paddingTop: theme.spacing(2),
      display: 'flex',
      width: '100%',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    icon: {
      margin: `0 ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
      transition: 'all .1s ease-in-out',

      '&:hover': {
        color: theme.palette.primary.main,
        transform: 'scale(1.5)'
      }
    }
  }),
  { name: 'Footer' }
);

const Footer: FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container} data-test-id="footer">
      <ScrollToTop />
      <Typography variant="body2" sx={{ marginTop: 2 }}>
        Created by Chris Whitlam
      </Typography>
      <Socials />
    </Box>
  );
};

export default Footer;
