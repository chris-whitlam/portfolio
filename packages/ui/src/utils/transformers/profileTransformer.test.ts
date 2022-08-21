import { GraphQLProfileFactory } from '@test/factories';
import { transformProfile } from './profileTransformer';

describe('Utils -> Transformers -> Profile Transformer', () => {
  describe('transformProfile', () => {
    it('should transform profile from api to profile', async () => {
      const profile = GraphQLProfileFactory.build();

      const result = transformProfile(profile);

      expect(result).toStrictEqual({
        ...profile,
        bio: profile.bio.raw,
        image: {
          alt: profile.image.alt,
          ...profile.image.image
        }
      });
    });
  });
});
