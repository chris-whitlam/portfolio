import { gql } from '@apollo/client';
import { transformProfile } from '@utils/transformers';
import apolloClient from './apolloClient';

export const getProfile = async () => {
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
          }
        }
      }
    `
  });

  return transformProfile(data.profiles[0]);
};
