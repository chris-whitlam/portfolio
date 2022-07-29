import { FC, useMemo } from 'react';

import { Box, Theme, Typography, Container, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { RichText, NodeRendererType } from '@graphcms/rich-text-react-renderer';

import { BackLink, PageTitle, Button, SectionHeading, Image } from '@atoms'
import { Project } from '@types'
import { getProjectPaths, getProject } from '@graphql/projects';
import { makeStyles } from '@mui/styles';
import { theme } from '@styles'
import { Carousel } from '@molecules';

const useStyles = makeStyles((theme: Theme) => ({
  mobileButtonsContainer: {
    display: 'flex',
    borderRadius: '20px 20px 0 0 ',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    justifyContent: 'space-evenly',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',

    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  carouselContainer: {
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '67%'
    }
  },
  summaryContainer: {
    width: '100%',
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(3),
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginTop: 0
    }
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'space-evenly',
    gap: theme.spacing(3)
  },
  projectType: {
    color: theme.palette.secondary.main,
  },
  techStack: {
    fontSize: 12,
    marginBottom: theme.spacing(2),
    color: theme.palette.grey[500]
  },
}), { name: 'Project' });

interface ProjectPageProps {
  project: Project
}

const getComponents = (styles: any): NodeRendererType => ({
  img: ({ width, height, altText, src, title }) => {
    const image = {
      alt: altText || title || '',
      height,
      width,
      url: src || ''
    }
    return <Image image={image} style={{ borderRadius: '8px' }} />
  },
})


const ProjectPage: FC<ProjectPageProps> = ({ project }) => {
  const styles = useStyles();
  const showFixedButtons = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const {
    name,
    summary,
    images,
    demo,
    sourceCode,
    projectType,
    description,
    tags,
    isApp
  } = project;

  const tagsString = useMemo(
    () => tags?.reduce(
      (acc, item, count) => `${acc}${item}${count < tags.length - 1 ? ', ' : ''}`
      , ''
    ),
    [tags]
  );


  return (
    <>
      <Container>
        <BackLink />
        <PageTitle>{name}</PageTitle>
        <Box className={styles.topContainer}>
          <Box className={styles.carouselContainer}>
            <Carousel images={images} isApp={isApp} />
          </Box>
          <Box className={styles.summaryContainer}>
            <Card sx={{ padding: theme.spacing(2) }}>
              <Typography variant='body2' gutterBottom>{summary}</Typography>
            </Card>
            <Card sx={{ padding: theme.spacing(2) }}>
              <Typography gutterBottom variant="caption" className={styles.projectType}>
                Project Type
              </Typography>
              <Typography sx={{ marginBottom: theme.spacing(2) }}>
                {projectType}
              </Typography>
              <Typography gutterBottom variant="caption" className={styles.projectType}>
                Tech Stack
              </Typography>
              <Typography>
                {tagsString}
              </Typography>
            </Card>
            {!showFixedButtons && <>
              {sourceCode && <Button size='medium' variant='secondary' endIcon={<GitHubIcon />} sx={{ height: 50 }}>Source Code</Button>}
              {demo && <Button size='medium' variant='primary' endIcon={<OpenInNewIcon />} sx={{ height: 50 }}>Go to Site</Button>}
            </>}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 2 }}>
          <RichText content={description} renderers={getComponents(styles)} />
        </Box>

      </Container>
      {showFixedButtons && <Box className={styles.mobileButtonsContainer}>
        {sourceCode && <Button size='medium' variant='secondary' endIcon={<GitHubIcon />} sx={{ height: 40 }}>Source Code</Button>}
        {demo && <Button size='medium' variant='primary' endIcon={<OpenInNewIcon />} sx={{ height: 40 }}>Go to Site</Button>}
      </Box>}
    </>
  )
}

export const getStaticPaths = async () => {
  const paths = await getProjectPaths();

  return {
    paths,
    fallback: false
  };
};

interface StaticPropsParams {
  params: {
    slug: string;
  }
}

export const getStaticProps = async ({ params: { slug } }: StaticPropsParams) => {
  const project = await getProject(slug)


  return { props: { project } }
};

export default ProjectPage;