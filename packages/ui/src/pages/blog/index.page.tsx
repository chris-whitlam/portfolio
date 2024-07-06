import Head from 'next/head';
import { Post } from '@types';
import { getPosts } from '@graphql';
import { Box } from '@mui/material';
import { FC } from 'react';
import { PostCard } from '@molecules';
import { BackLink, PageTitle } from '@atoms';

export interface BlogPageProps {
  posts: Post[];
}

const BlogPage: FC<BlogPageProps> = ({ posts }) => (
  <>
    <Head>
      <title>Blog - Chris Whitlam</title>
      <meta
        name="description"
        content="A collection of blog posts on what I've learnt throughout my career as a developer and my general thoughts on all things programming related"
      />
    </Head>
    <Box>
      <BackLink href="/" />
      <PageTitle>Blog Posts</PageTitle>
      <Box>
        {posts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </Box>
    </Box>
  </>
);

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  };
};

export default BlogPage;
