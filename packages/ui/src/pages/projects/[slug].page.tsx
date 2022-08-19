import Head from 'next/head';
import { FC, useCallback, useMemo, useRef } from 'react';

import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import Card from '@mui/material/Card';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { RichText } from '@graphcms/rich-text-react-renderer';

import { BackLink, PageTitle, Button } from '@atoms';
import { Project } from '@types';
import { getProjectPaths, getProject } from '@graphql';
import { makeStyles } from '@mui/styles';
import { theme } from '@styles';
import { Carousel } from '@molecules';
import { componentMap } from '@utils';

const useStyles = makeStyles(
  () => ({
    mobileButtonsContainer: {
      display: 'flex',
      borderRadius: '20px 20px 0 0 ',
      alignItems: 'center',
      padding: theme.spacing(1.5),
      justifyContent: 'space-evenly',
      position: 'fixed',
      bottom: '0',
      width: '100%',
      zIndex: 10,
      background: theme.palette.background.default
    },
    topContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      width: '100%',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      }
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
      color: theme.palette.secondary.main
    },
    techStack: {
      fontSize: 12,
      marginBottom: theme.spacing(2),
      color: theme.palette.grey[500]
    }
  }),
  { name: 'Project' }
);

export interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({ project }) => {
  const styles = useStyles();
  const showFixedButtons = useMediaQuery(() => theme.breakpoints.down('md'));
  const contentRef = useRef<HTMLDivElement>();

  const {
    name,
    summary,
    images,
    demo,
    sourceCode,
    projectType,
    description,
    tags
  } = project;

  const tagsString = useMemo(() => tags.join(', '), [tags]);

  const scrollToContent = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const pageTitle = `${name} - Chris Whitlam`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={summary} />
      </Head>
      <Container data-test-id="project-page">
        <BackLink />
        <PageTitle>{name}</PageTitle>
        <Box className={styles.topContainer}>
          <Box className={styles.carouselContainer}>
            <Carousel images={images} />
          </Box>
          <Box className={styles.summaryContainer}>
            <Card sx={{ padding: theme.spacing(2) }}>
              <Typography
                variant="body2"
                gutterBottom
                data-test-id="product-summary"
              >
                {summary}
              </Typography>
            </Card>
            <Card sx={{ padding: theme.spacing(2) }}>
              <Typography
                gutterBottom
                variant="caption"
                className={styles.projectType}
              >
                Project Type
              </Typography>
              <Typography
                sx={{ marginBottom: theme.spacing(2) }}
                data-test-id="product-type"
              >
                {projectType}
              </Typography>
              <Typography
                gutterBottom
                variant="caption"
                className={styles.projectType}
              >
                Tech Stack
              </Typography>
              <Typography data-test-id="product-tech-stack">
                {tagsString}
              </Typography>
            </Card>
            {!showFixedButtons && (
              <>
                {sourceCode && (
                  <a href={sourceCode}>
                    <Button
                      fullWidth
                      size="medium"
                      variant="secondary"
                      endIcon={<GitHubIcon />}
                      sx={{ height: 50 }}
                      data-test-id="source-code-link"
                    >
                      Source Code
                    </Button>
                  </a>
                )}
                {demo && (
                  <a href={demo}>
                    <Button
                      fullWidth
                      size="medium"
                      variant="primary"
                      endIcon={<OpenInNewIcon />}
                      sx={{ height: 50 }}
                      data-test-id="demo-link"
                    >
                      Go to Site
                    </Button>
                  </a>
                )}
              </>
            )}
          </Box>
          {showFixedButtons && (
            <ExpandMoreIcon
              sx={{ margin: '0 auto', height: 40, width: 40 }}
              onClick={scrollToContent}
              data-test-id="scroll-to-content-button"
            />
          )}
        </Box>
        <Box
          ref={contentRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <RichText
            data-test-id="project-description"
            content={description}
            renderers={componentMap}
          />
        </Box>
      </Container>
      {showFixedButtons && (
        <Box className={styles.mobileButtonsContainer}>
          {sourceCode && (
            <a href={sourceCode}>
              <Button
                size="medium"
                variant="secondary"
                endIcon={<GitHubIcon />}
                sx={{ height: 40 }}
                data-test-id="fixed-source-code-link"
              >
                Source Code
              </Button>
            </a>
          )}
          {demo && (
            <a href={demo}>
              <Button
                size="medium"
                variant="primary"
                endIcon={<OpenInNewIcon />}
                sx={{ height: 40 }}
                data-test-id="fixed-demo-link"
              >
                Go to Site
              </Button>
            </a>
          )}
        </Box>
      )}
    </>
  );
};

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
  };
}

export const getStaticProps = async ({
  params: { slug }
}: StaticPropsParams) => {
  const project = await getProject(slug);

  return { props: { project } };
};

export default ProjectPage;
