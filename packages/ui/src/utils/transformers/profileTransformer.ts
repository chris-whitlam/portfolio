import { GraphQLProfile, Profile } from '@types';
import transformImage from './imageTransformer'

export const transformProfile =  (profile: GraphQLProfile): Profile => ({
  ...profile,
  image: transformImage(profile.image)
})
