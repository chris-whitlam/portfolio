import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';

const useStyles = makeStyles(
  () => ({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }),
  { name: 'Spinner' }
);

const Spinner: FC = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container} data-test-id="spinner">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
