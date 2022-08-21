import { Theme, Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Skill as SkillType } from '@types';
import { FC } from 'react';

const useStyles = makeStyles(
  (theme: Theme) => ({
    card: {
      transition: 'all .1s ease-in-out',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(1),
      minWidth: '100px',
      maxWidth: '130px',
      '&:hover': {
        transform: 'scale(1.1)'
      }
    },
    icon: {
      width: '100%',
      height: '100%',
      color: theme.palette.grey[400],
      '&:hover': {
        color: theme.palette.grey[100]
      }
    },
    text: {
      marginTop: '1em',
      textAlign: 'center',
      fontSize: '0.8rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '0.9rem'
      }
    }
  }),
  { name: 'Skill' }
);

interface SkillProps {
  skill: SkillType;
}

const Skill: FC<SkillProps> = ({ skill: { label, Icon } }) => {
  const styles = useStyles();

  return (
    <Card className={styles.card} data-test-id="skill">
      <Icon className={styles.icon} data-test-id="skill-icon" />
      <Typography className={styles.text} data-test-id="skill-label">
        {label}
      </Typography>
    </Card>
  );
};

export default Skill;
