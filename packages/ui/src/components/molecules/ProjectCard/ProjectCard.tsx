import { FC, useMemo } from 'react';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardActions, SxProps, Theme, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { makeStyles } from '@mui/styles';

import { theme } from '@styles';
import { Button, Image } from '@atoms';
import { Project } from '@types';

const useStyles = makeStyles(
  () => ({
    container: {
      position: 'relative',
      transition: 'all .1s ease-in-out',

      '&:hover': {
        transform: 'scale(1.03)'
      }
    },
    card: {
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column'
    },
    techStack: {
      fontSize: 12,
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.main
    },
    content: {
      flex: '0 0 auto'
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
      padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(
        1
      )} ${theme.spacing(2)}`
    },
    summary: {
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 3,
      overflow: 'hidden'
    },
    link: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }),
  { name: 'ProjectCard' }
);

interface ProjectCardProps {
  project: Project;
  sx?: SxProps<Theme>;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, sx }) => {
  const styles = useStyles();

  const { summary, tags, name, images, isApp, demo, sourceCode, slug } =
    project;

  const [image] = images;

  const tagsString = useMemo(() => tags.join(', '), [tags]);

  const defaultStyle = isApp
    ? {
        gridRow: 'span 2',
        gridColumn: 'span 1'
      }
    : {};

  const link = `/projects/${slug}`;

  return (
    <Box
      className={styles.container}
      sx={{ ...defaultStyle, ...sx }}
      data-test-id="project-card"
    >
      <Card className={styles.card}>
        <Box className={styles.link}>
          <Link href={link}>
            <Box>
              <Image image={image} sizes="370px" />
            </Box>
          </Link>
        </Box>
        <CardContent className={styles.content}>
          <Typography variant="h5" component="div">
            <Link href={link}>{name}</Link>
          </Typography>
          <Typography
            gutterBottom
            className={styles.techStack}
            data-test-id="project-card-tags"
          >
            <i>{tagsString}</i>
          </Typography>
          <Typography variant="body2" className={styles.summary}>
            {summary}
          </Typography>
        </CardContent>
        <CardActions className={styles.buttonsContainer}>
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <Button
                size="medium"
                variant="tertiary"
                endIcon={<OpenInNewIcon />}
                data-test-id="project-card-demo-link"
              >
                Go to
              </Button>
            </a>
          )}
          {sourceCode && (
            <a href={sourceCode} target="_blank" rel="noopener noreferrer">
              <Button
                size="medium"
                variant="tertiary"
                endIcon={<GitHubIcon />}
                data-test-id="project-card-code-link"
              >
                Code
              </Button>
            </a>
          )}
        </CardActions>
        <Link href={link}>
          <Box>
            <Button size="medium" fullWidth>
              More details
            </Button>
          </Box>
        </Link>
      </Card>
    </Box>
  );
};

export default ProjectCard;
