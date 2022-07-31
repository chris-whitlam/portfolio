import { FC, useMemo } from 'react';
import Link from 'next/link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box, CardActions, SxProps, Theme, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { makeStyles } from '@mui/styles';

import { Button, Image } from '@atoms';
import { Project } from '@/types';

const useStyles = makeStyles(
  (theme: Theme) => ({
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
      color: theme.palette.grey[500]
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
    projectType: {
      color: theme.palette.secondary.main
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

  const {
    summary,
    tags,
    projectType,
    name,
    images,
    isApp,
    demo,
    sourceCode,
    slug
  } = project;
  const [image] = images;

  const tagsString = useMemo(
    () =>
      tags?.reduce(
        (acc, item, count) =>
          `${acc}${item}${count < tags.length - 1 ? ', ' : ''}`,
        ''
      ),
    [tags]
  );

  const defaultStyle = isApp
    ? {
        gridRow: 'span 2',
        gridColumn: 'span 1'
      }
    : {};

  const link = `/projects/${slug}`;

  return (
    <Box className={styles.container} sx={{ ...defaultStyle, ...sx }}>
      <Card className={styles.card}>
        <Box className={styles.link}>
          <Link passHref href={link}>
            <Image image={image} sizes="370px" />
          </Link>
        </Box>
        <CardContent className={styles.content}>
          <Typography variant="overline" className={styles.projectType}>
            <i>{projectType} Project</i>
          </Typography>
          <Typography variant="h5" component="div">
            <Link passHref href={link}>
              {name}
            </Link>
          </Typography>
          <Typography gutterBottom className={styles.techStack}>
            <i>{tagsString}</i>
          </Typography>
          <Typography variant="body2" className={styles.summary}>
            {summary}
          </Typography>
        </CardContent>
        <CardActions className={styles.buttonsContainer}>
          {demo && (
            <Button
              size="medium"
              variant="tertiary"
              endIcon={<OpenInNewIcon />}
            >
              Go to
            </Button>
          )}
          {sourceCode && (
            <Button size="medium" variant="tertiary" endIcon={<GitHubIcon />}>
              Code
            </Button>
          )}
        </CardActions>
        <Link passHref href={link}>
          <Button size="medium">More details</Button>
        </Link>
      </Card>
    </Box>
  );
};

export default ProjectCard;
