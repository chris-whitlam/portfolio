import Head from 'next/head';
import { Box, Theme } from '@mui/material';
import { FC } from 'react';
import { makeStyles } from '@mui/styles';

import { BackLink, PageTitle } from '@atoms';
import { ProjectCard } from '@molecules';
import { Project } from '@types';
import { getProjects } from '@graphql';

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      marginTop: theme.spacing(6),
      width: '100%'
    },
    grid: {
      gridGap: '50px',
      display: 'grid',
      [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'repeat(1, 1fr)'
      },
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)'
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3, 1fr)'
      }
    }
  }),
  { name: 'Projects' }
);

export interface ProjectPageProps {
  projects: Project[];
}

const ProjectsPage: FC<ProjectPageProps> = ({ projects }) => {
  const styles = useStyles();

  return (
    <>
      <Head>
        <title>Projects - Chris Whitlam</title>
        <meta
          name="description"
          content="A collection of programming projects created by Chris Whitlam."
        />
      </Head>
      <Box>
        <BackLink href="/" />
        <PageTitle>Projects</PageTitle>
        <Box className={styles.grid}>
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await getProjects();

  return { props: { projects } };
};

export default ProjectsPage;
