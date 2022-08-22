import { Skill, SubSectionHeading } from '@atoms';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { theme } from '@styles';
import { FC } from 'react';
import { Skill as SkillType } from '@types';

const useStyles = makeStyles(
  () => ({
    container: {
      paddingBottom: theme.spacing(8)
    },
    skillsContainer: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: 'repeat(3, 1fr)',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(4, 1fr)'
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(6, 1fr)'
      }
    }
  }),
  { name: 'SkillList' }
);

export interface SkillListProps {
  heading: string;
  skills: SkillType[];
}

const SkillList: FC<SkillListProps> = ({ heading, skills, ...rest }) => {
  const styles = useStyles();

  return (
    <Box data-test-id="skill-list" className={styles.container} {...rest}>
      <SubSectionHeading sx={{ marginTop: theme.spacing(3) }}>
        {heading}
      </SubSectionHeading>
      <Box className={styles.skillsContainer}>
        {skills.map((skill) => (
          <Skill key={skill.label} skill={skill} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillList;
