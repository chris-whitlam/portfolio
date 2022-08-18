import { FC, ReactNode } from 'react';
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Header, Footer } from '@organisms';
import { theme } from '@styles';

interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles(
  () => ({
    container: {
      minHeight: '100vh',
      maxWidth: '100vw',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(10)
      }
    }
  }),
  { name: 'Layout' }
);

const Layout: FC<LayoutProps> = ({ children }) => {
  const styles = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={styles.container}>
        <Header />
        <Container sx={{ flex: '1 1 auto' }}>
          <Box className={styles.mainContent} data-test-id="main-content">
            {children}
          </Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
