import { SectionHeading } from '@atoms';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Theme, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Profile } from '@types';
import { componentMap } from '@utils';
import { FC } from 'react';

interface AboutProps {
  profile: Profile;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      width: '80%',
      [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(5),
        width: '100%'
      }
    }
  }),
  { name: 'Dots' }
);

const About: FC<AboutProps> = ({ profile }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <SectionHeading>About</SectionHeading>
      <Box data-test-id="bio">
        <RichText content={profile.bio} renderers={componentMap} />
      </Box>
    </Box>
  );
};

export default About;
