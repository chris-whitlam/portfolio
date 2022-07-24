import { FC, useMemo } from "react";
import Link from 'next/link'
import { Card, Typography, CardContent, Box, Theme, useMediaQuery, useTheme } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from "@mui/styles";

import { Image } from '@atoms';
import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginBottom: theme.spacing(2),
    position: 'relative',
    width: '100%',
    transition: 'all .1s ease-in-out',

    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  content: {
    display: 'flex',
    flex: '1 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  date: {
    color: theme.palette.secondary.main
  },
  tags: {
    fontSize: 12,
    marginTop: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    paddingRight: theme.spacing(3),
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    padding: `${theme.spacing(1)} ${theme.spacing(4)}`
  },
  image: {
    maxHeight: '110px',
    minWidth: '280px',

    '&:hover': {
      cursor: 'pointer',
    }
  },
  readTimeContainer: {
    display: 'flex',
    position: 'absolute',
    top: theme.spacing(1),
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    height: '1.5rem',
    fontStyle: 'italic',
    padding: theme.spacing(1)
  }
}), { name: 'PostCard' });

const PostCard: FC<PostCardProps> = ({ post }) => {
  const styles = useStyles();
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('md'));

  const {
    title,
    tags,
    date,
    coverImage,
    readTime,
    slug
  } = post;

  const tagsString = useMemo(
    () => tags.reduce(
      (acc, item, count) => `${acc}${item}${count < tags.length - 1 ? ', ' : ''}`
      , ''
    ),
    [tags]
  );


  return (
    <Box className={styles.container}>
      <Card sx={{ display: 'flex' }}>
        {showImage &&
          <Box className={styles.image}>
            <Link passHref href={`blog/${slug}`}>
              <Image image={coverImage} sizes='280px' objectFit="cover" objectPosition='0 -25px' />
            </Link>
          </Box>
        }
        <CardContent className={styles.content} data-test-id='test'>
          <Box>
            <Typography variant="overline" className={styles.date}>
              <i>{date}</i>
            </Typography>

            <Typography variant="h5" component="div" className={styles.title}>
              <Link passHref href={`blog/${slug}`}>
                {title}
              </Link>
            </Typography>

            <Typography gutterBottom className={styles.tags}>
              <i>{tagsString}</i>
            </Typography>
          </Box>
        </CardContent>
        <Box className={styles.readTimeContainer}>
          <Typography variant="body2" sx={{ marginRight: 1 }}>{readTime} min read</Typography>
          <AccessTimeIcon />
        </Box>
      </Card>
    </Box>
  )
}

export default PostCard;