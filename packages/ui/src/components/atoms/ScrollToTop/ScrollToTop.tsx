import { FC } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Box, SxProps, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  (theme: Theme) => ({
    '@keyframes bounce': {
      '0%': { transform: 'translateY(3px)' },
      '25%': { transform: 'translateY(-3px)' },
      '100%': { transform: 'translateY(3px)' }
    },
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      color: theme.palette.secondary.main
    },
    icon: {
      animationName: '$bounce',
      animationDuration: '1500ms',
      animationFillMode: 'forwards',
      animationIterationCount: 'infinite'
    }
  }),
  { name: 'ScrollToTop' }
);

interface ScrollToTopProps {
  sx?: SxProps<Theme>;
}

const ScrollToTop: FC<ScrollToTopProps> = ({ sx }) => {
  const styles = useStyles();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box className={styles.container} sx={sx} onClick={scrollToTop}>
      <KeyboardDoubleArrowUpIcon className={styles.icon} />
      <Typography>Back to Top</Typography>
    </Box>
  );
};

export default ScrollToTop;
