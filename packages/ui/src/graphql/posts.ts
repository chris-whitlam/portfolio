import { gql } from '@apollo/client';
import { Post } from '@types';
import { transformPost, transformPosts } from '@utils/transformers';
import apolloClient from './apolloClient';

export const getPost = async (slug: string): Promise<Post> => {
  const {
    data: { posts }
  } = await apolloClient.query({
    query: gql`
      query {
        posts(where: {slug: "${slug}"}) {
          title
          tags
          date
          content {
            raw
          }
          readTime
          coverImage {
            alt
            image {
              url
              height
              width
            }
          }
        }
      }
    `
  });
  return transformPost(posts[0]);
};

export const getPosts = async (): Promise<Post[]> => {
  const {
    data: { posts }
  } = await apolloClient.query({
    query: gql`
      query {
        posts {
          title
          tags
          date
          readTime
          slug
          coverImage {
            alt
            image {
              url
              height
              width
            }
          }
        }
      }
    `
  });
  return transformPosts(posts);
};

export const getPostPaths = async () => {
  const {
    data: { posts }
  } = await apolloClient.query({
    query: gql`
      query {
        posts(orderBy: publishedAt_DESC) {
          slug
        }
      }
    `
  });

  return posts.map((post: Post) => ({
    params: {
      slug: post.slug
    }
  }));
};
