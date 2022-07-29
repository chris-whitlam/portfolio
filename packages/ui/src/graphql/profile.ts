import apolloClient from './apolloClient';
import { gql } from '@apollo/client';
import { transformProfile } from '@utils/transformers';

export const getProfile = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        profiles {
          name
          roles
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
      }
    `
  })

  
  return transformProfile(data.profiles[0]);
}