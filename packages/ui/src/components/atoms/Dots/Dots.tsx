import { FC } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@styles';
import CircleIcon from '@mui/icons-material/Circle';

const useStyles = makeStyles(
  () => ({
    dotContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.spacing(1),
      marginTop: theme.spacing(1)
    },
    dot: {
      height: 10,
      width: 10,
      color: theme.palette.grey[600],
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))'
    },
    selectedDot: {
      height: 10,
      width: 10,
      color: theme.palette.primary.main,
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))'
    }
  }),
  { name: 'Dots' }
);

export interface DotsProps {
  totalDots: number;
  currentIndex: number;
}

const Dots: FC<DotsProps> = ({ totalDots, currentIndex, ...rest }) => {
  const styles = useStyles();

  const array = Array.from(Array(totalDots));

  return (
    <Box className={styles.dotContainer} {...rest}>
      {array.map((item, index) => {
        if (currentIndex === index) {
          return (
            <CircleIcon
              key={`${index}`}
              data-test-id={`dot-${index}`}
              aria-current="true"
              className={styles.selectedDot}
            />
          );
        }
        return (
          <CircleIcon
            key={`${index}`}
            data-test-id={`dot-${index}`}
            className={styles.dot}
          />
        );
      })}
    </Box>
  );
};

export default Dots;
