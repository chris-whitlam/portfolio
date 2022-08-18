import { FC, useCallback, useState } from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay as swipeableAutoPlay } from 'react-swipeable-views-utils';

import { Image, Dots } from '@atoms';
import { Image as ImageType } from '@types';
import { theme } from '@styles';

const AutoPlaySwipeableViews = swipeableAutoPlay(SwipeableViews);

const useStyles = makeStyles(
  () => ({
    container: {
      display: 'flex',
      justifyContent: 'center'
    },
    control: {
      height: 40,
      width: 40,
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))',
      [theme.breakpoints.up('md')]: {
        height: 60,
        width: 60
      }
    },
    imageContainer: {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      overflow: 'hidden',
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))',
      backgroundColor: theme.palette.grey[900],

      '& div': {
        height: '100%'
      },

      [theme.breakpoints.up('md')]: {
        height: '400px',
        maxHeight: '500px',
        borderRadius: '10px'
      }
    },
    slide: {
      display: 'flex',
      flexDirection: 'column'
    }
  }),
  { name: 'Carousel' }
);

interface CarouselProps {
  images: ImageType[];
  initialImageIndex?: number;
  autoPlay?: boolean;
  onClick?: (index?: number) => void;
}

const Carousel: FC<CarouselProps> = ({
  images,
  initialImageIndex = 0,
  autoPlay = true,
  onClick
}) => {
  const styles = useStyles();
  const [imageIndex, setImageIndex] = useState(initialImageIndex);
  const [autoplay, setAutoPlay] = useState(autoPlay);
  const showControls =
    useMediaQuery(theme.breakpoints.up('md')) && images.length > 1;

  const incrementImageIndex = useCallback(() => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex((currentIndex) => currentIndex + 1);
    setAutoPlay(false);
  }, [imageIndex, images.length]);

  const decrementImageIndex = useCallback(() => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
      return;
    }
    setImageIndex((currentIndex) => currentIndex - 1);
    setAutoPlay(false);
  }, [imageIndex, images.length]);

  const handleAutoplay = useCallback(
    (index: number) => setImageIndex(index),
    []
  );

  const handleClick = (index: number) => {
    setAutoPlay(false);
    if (onClick) onClick(index);
  };

  return (
    <Box data-test-id="carousel">
      <Box className={styles.container}>
        {showControls && (
          <Button
            onClick={decrementImageIndex}
            data-test-id="previous-slide-button"
          >
            <ChevronLeftIcon className={styles.control} />
          </Button>
        )}
        <AutoPlaySwipeableViews
          axis="x"
          index={imageIndex}
          onChangeIndex={handleAutoplay}
          enableMouseEvents
          animateTransitions
          autoplay={autoplay}
          className={styles.imageContainer}
          slideClassName={styles.slide}
          data-test-id="carousel-swipeable-views"
        >
          {images.map((image, index) => (
            <Image
              priority={index === 0}
              image={image}
              layout="responsive"
              objectFit="contain"
              onClick={() => handleClick(index)}
              data-test-id="carousel-slide-image"
            />
          ))}
        </AutoPlaySwipeableViews>
        {showControls && (
          <Button
            onClick={incrementImageIndex}
            data-test-id="next-slide-button"
          >
            <ChevronRightIcon className={styles.control} />
          </Button>
        )}
      </Box>
      <Dots totalDots={images.length} currentIndex={imageIndex} />
    </Box>
  );
};

export default Carousel;
