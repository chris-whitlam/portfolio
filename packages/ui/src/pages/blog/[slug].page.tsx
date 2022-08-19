import Head from 'next/head';
import { PageTitle, Image, BackLink } from '@atoms';
import { FC } from 'react';

import { RichText } from '@graphcms/rich-text-react-renderer';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Post } from '@types';
import { getPost, getPostPaths } from '@graphql';
import { componentMap } from '@utils';

export interface BlogPostProps {
  post: Post;
}

const useStyles = makeStyles(
  (theme: Theme) => ({
    container: {
      maxWidth: '100%',
      overflow: 'clip',
      margin: '0 auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: '70%'
      }
    },
    content: {
      textAlign: 'left'
    },
    link: {
      color: theme.palette.secondary.main,
      textDecoration: 'underline'
    },
    coverImage: {
      maxHeight: 440,
      width: '100%',
      overflow: 'hidden',
      borderRadius: '8px'
    }
  }),
  { name: 'BlogPost' }
);

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const styles = useStyles();

  const { title, coverImage, content, summary = '' } = post;

  return (
    <>
      <Head>
        <title>{title} - Chris Whitlam</title>
        <meta name="description" content={summary} />
      </Head>
      <Box className={styles.container} data-test-id="blog-post-page">
        <BackLink />
        <PageTitle>{title}</PageTitle>
        <Box className={styles.coverImage}>
          <Image image={coverImage} />
        </Box>
        <Box className={styles.content}>
          <RichText content={content} renderers={componentMap} />
        </Box>
      </Box>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostPaths();

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
  const post = await getPost(slug);

  return {
    props: {
      post
    }
  };
};

export default BlogPost;
