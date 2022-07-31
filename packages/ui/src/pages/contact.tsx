import { PageTitle } from '@atoms';
import { Box, Theme } from '@mui/material';
import { ContactForm } from '@organisms';
import { FC } from 'react';
import { makeStyles } from '@mui/styles';
import { getProfile } from '@graphql';
import { Profile } from '@types';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

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

interface ContactPageProps {
  profile: Profile;
}

const Contact: FC<ContactPageProps> = ({ profile }) => {
  const styles = useStyles();

  if (!profile) {
    return null;
  }

  const {
    socials: { githubUrl, linkedInUrl, email }
  } = profile;

  return (
    <>
      <PageTitle>Lets get in contact</PageTitle>
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
      <ContactForm />
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await getProfile();

  return { props: { profile } };
};

export default Contact;
