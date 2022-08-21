import { gql } from '@apollo/client';
import {
  transformPosts,
  transformProjects,
  transformProfile
} from '@utils/transformers';
import apolloClient from './apolloClient';

interface fetchHomepageDataOptions {
  numOfFeaturedProjects?: number;
}

const fetchHomepageData = async ({
  numOfFeaturedProjects = 5
}: fetchHomepageDataOptions) => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        profiles {
          name
          roles
          bio {
            raw
          }
          image {
            alt
            image {
              url
              height
              width
            }
          }
          socials {
            githubUrl
            linkedInUrl
            email
          }
        }
        projects(first: ${numOfFeaturedProjects}) {
          name
          slug
          tags
          summary
          images {
            alt
            image {
              url
              height
              width
            }
          }
          projectType
          demo
          sourceCode
          isApp
        }
        posts(orderBy: publishedAt_DESC) {
          title
          tags
          date
          slug
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

  const homepageData = {
    profile: transformProfile(data.profiles[0]),
    projects: transformProjects(data.projects),
    posts: transformPosts(data.posts)
  };

  return homepageData;
};

export default fetchHomepageData;
