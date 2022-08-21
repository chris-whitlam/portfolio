import { FC } from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import NextLink from 'next/link';

import { SectionHeading, Button } from '@atoms';
import { ProjectCard } from '@molecules';
import { Project } from '@types';

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      marginTop: theme.spacing(6),
      width: '100%'
    },
    grid: {
      gridGap: theme.spacing(4),
      display: 'grid',
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'repeat(1, 1fr)'
      },
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      },
      paddingBottom: theme.spacing(0.5)
    }
  }),
  { name: 'Projects' }
);

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container} data-test-id="projects">
      <SectionHeading href="/projects">Projects</SectionHeading>
      <Box className={styles.grid}>
        {projects.map((project: Project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 3
        }}
      >
        <NextLink passHref href="/projects">
          <div>
            <Button variant="secondary" data-test-id="all-projects-link">
              View all
            </Button>
          </div>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Projects;
