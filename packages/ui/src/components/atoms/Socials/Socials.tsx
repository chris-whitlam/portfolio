import { Box, Theme } from '@mui/material';
import { FC } from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { makeStyles } from '@mui/styles';

import { Socials as SocialsType } from '@types';

interface SocialsProps {
  socials?: SocialsType;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    socialsContainer: {
      marginTop: theme.spacing(1),
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    socialIcon: {
      margin: `0 ${theme.spacing(2)} 0  ${theme.spacing(2)}`,
      transition: 'all .1s ease-in-out',

      '&:hover': {
        color: theme.palette.primary.main,
        transform: 'scale(1.5)'
      }
    }
  }),
  { name: 'ContactPage' }
);

const defaultSocials: SocialsType = {
  linkedInUrl: 'https://www.linkedin.com/in/christopher-whitlam',
  githubUrl: 'https://github.com/chris-whitlam'
};

const Socials: FC<SocialsProps> = ({
  socials: { linkedInUrl, githubUrl } = defaultSocials,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <Box className={styles.socialsContainer} data-test-id="socials" {...rest}>
      <a
        href={githubUrl}
        aria-label="Github"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
        data-test-id="socials-github"
      >
        <GitHubIcon />
      </a>
      <a
        href={linkedInUrl}
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
        data-test-id="socials-linkedIn"
      >
        <LinkedInIcon />
      </a>
    </Box>
  );
};

export default Socials;
