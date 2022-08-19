import { Box, useMediaQuery } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FC } from 'react';
import Typed from 'react-typed';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { Image } from '@atoms';
import { theme } from '@styles';
import { Profile } from '@/types';

const useStyles = makeStyles(
  () => ({
    '@keyframes spin': {
      '0%': { transform: 'rotate(0)' },
      '50%': { transform: 'rotate(180deg)' },
      '100%': { transform: 'rotate(360deg)' }
    },
    container: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100%',
      maxWidth: '100vw'
    },
    imageContainer: {
      display: 'flex',
      background: `linear-gradient(
        -30deg,
        #0f3912 0%,
        #0f3912 20%,
        #377e45 100%
      )`,
      width: 'clamp(130px, 60vw, 300px)',
      height: 'clamp(130px, 60vw, 300px)',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '70px',
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))',
      boxSizing: 'border-box',
      position: 'relative'
    },
    image: {
      filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.584))',
      width: 'clamp(130px, 60vw, 300px)'
    },
    headline: {
      paddingLeft: '0.5em',
      marginTop: '1em',
      fontSize: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: `Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
  Bitstream Vera Sans Mono, Courier New, monospace;`
    },
    buttonsContainer: {
      marginTop: theme.spacing(3),
      display: 'flex',
      justifyContent: 'space-between'
    },
    button: {
      margin: theme.spacing(1)
    },
    socialsContainer: {
      marginTop: theme.spacing(1),
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    socialIcon: {
      margin: `${theme.spacing(2)} ${theme.spacing(2)} 0  ${theme.spacing(2)}`,
      transition: 'all .1s ease-in-out',

      '&:hover': {
        color: theme.palette.primary.main,
        transform: 'scale(1.5)'
      }
    },
    centerSvg: {
      position: 'absolute',
      height: 450,
      top: '-80px',
      left: '-70px',
      maxWidth: '100vw',
      animation: '$spin 60s linear infinite',
      animationFillMode: 'forwards'
    },
    topLeft: {
      position: 'absolute',
      width: '40%',
      maxWidth: '800px',
      left: 0,
      top: 0
    },
    topRight: {
      position: 'absolute',
      width: '40%',
      maxWidth: '800px',
      right: 0,
      top: 0
    }
  }),
  { name: 'Hero' }
);

interface HeroProps {
  profile: Profile;
}

const Hero: FC<HeroProps> = ({ profile }) => {
  const styles = useStyles();
  const showCornerImages = useMediaQuery(theme.breakpoints.up('md'));

  const {
    image,
    roles,
    socials: { githubUrl, linkedInUrl, email }
  } = profile;

  return (
    <Box className={styles.container} data-test-id="hero">
      {showCornerImages && (
        <div data-test-id="hero-corner-images">
          <img src="/img/topLeftBurst.svg" className={styles.topLeft} alt="" />
          <img
            src="/img/topRightBurst.svg"
            className={styles.topRight}
            alt=""
          />
        </div>
      )}

      <Box sx={{ position: 'relative' }}>
        <img src="/img/centerBurst.svg" className={styles.centerSvg} alt="" />
        <Box className={styles.imageContainer}>
          <Image
            image={image}
            className={styles.image}
            layout="fill"
            sizes="320px"
            priority
          />
        </Box>
      </Box>
      <Typed
        className={styles.headline}
        strings={roles}
        typeSpeed={40}
        backSpeed={50}
        backDelay={2000}
        loop
      />
      <Box className={styles.socialsContainer}>
        <a
          href={githubUrl}
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <GitHubIcon />
        </a>
        <a
          href={linkedInUrl}
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <LinkedInIcon />
        </a>
        <a
          href={`mailto:${email}`}
          aria-label="Email"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
        >
          <EmailIcon />
        </a>
      </Box>
    </Box>
  );
};

export default Hero;
