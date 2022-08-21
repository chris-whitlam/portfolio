import { GraphQLProfile, Profile } from '@types';
import transformImage from './imageTransformer';

export const transformProfile = (profile: GraphQLProfile): Profile => ({
  ...profile,
  bio: profile.bio?.raw ?? null,
  image: transformImage(profile.image)
});
