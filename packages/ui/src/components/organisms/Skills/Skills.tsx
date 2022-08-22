import { SectionHeading } from '@atoms';
import { SkillList } from '@molecules';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@styles';
import { FC } from 'react';
import { backEnd, frontEnd, devOps, other } from './data/skillList';

const useStyles = makeStyles(
  () => ({
    container: {
      marginTop: theme.spacing(5),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '80%'
      }
    },
    skillsContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  }),
  { name: 'Skills' }
);

const Skills: FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container} data-test-id="skills">
      <SectionHeading>My Skills</SectionHeading>
      <SkillList
        heading="Front-end"
        skills={frontEnd}
        data-test-id="front-end-skills"
      />
      <SkillList
        heading="Back-end"
        skills={backEnd}
        data-test-id="back-end-skills"
      />
      <SkillList
        heading="DevOps"
        skills={devOps}
        data-test-id="devops-skills"
      />
      <SkillList heading="Other" skills={other} data-test-id="other-skills" />
    </Box>
  );
};

export default Skills;
