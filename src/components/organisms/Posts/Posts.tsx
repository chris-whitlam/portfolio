import { FC } from "react";
import { Box, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import NextLink from 'next/link';

import { Button, SectionHeading } from '@atoms';
import { PostCard } from '@molecules';
import { Post } from "@/types";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
  }
}), { name: 'Posts' });

interface PostsProps {
  posts: Post[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <SectionHeading href='/blog'>Recent Posts</SectionHeading>
      <Box>
        {posts.map(post => <PostCard key={post.title} post={post} />)}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 3 }}>
        <NextLink passHref href='/blog'>
          <Button variant='secondary'>View all</Button>
        </NextLink>
      </Box>
    </Box>
  )

}

export default Posts;