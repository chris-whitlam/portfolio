import { GraphQLPostFactory } from '@test/factories';
import { transformPost, transformPosts } from './postTransformer';

describe('Utils -> Transformers -> Post Transformer', () => {
  describe('transformPost', () => {
    it('should transform post from api to post', async () => {
      const post = GraphQLPostFactory.build();

      const result = transformPost(post);

      expect(result).toStrictEqual({
        ...post,
        content: post.content.raw,
        coverImage: {
          alt: post.coverImage.alt,
          ...post.coverImage.image
        }
      });
    });
  });

  describe('transformPosts', () => {
    it('should transform multiple posts from api to post', async () => {
      const posts = GraphQLPostFactory.buildList(2);

      const result = transformPosts(posts);

      const getExpected = (index: number) => ({
        ...posts[index],
        content: posts[index].content.raw,
        coverImage: {
          alt: posts[index].coverImage.alt,
          ...posts[index].coverImage.image
        }
      });

      expect(result).toStrictEqual([getExpected(0), getExpected(1)]);
    });
  });
});
