import { GraphQLPostFactory } from '@test/factories';
import { GraphQLPost } from '@types';
import apolloClient from './apolloClient';
import { getPost, getPosts } from './posts';

jest.mock('./apolloClient', () => ({
  query: jest.fn()
}));

const getData = (numOfPosts = 1) => ({
  posts: GraphQLPostFactory.buildList(numOfPosts)
});

const getExpectedPostOutput = (post: GraphQLPost) => ({
  ...post,
  content: post.content.raw,
  coverImage: {
    ...post.coverImage.image,
    alt: post.coverImage.alt
  }
});

describe('GraphQL -> posts', () => {
  const slug = 'mySlug';
  const mockQuery = apolloClient.query as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
    mockQuery.mockReset();
  });

  afterAll(jest.restoreAllMocks);

  describe('getPost', () => {
    it('should successfully retrieve post data', async () => {
      const { posts } = getData();

      mockQuery.mockResolvedValue({
        data: { posts }
      });

      const result = await getPost(slug);

      expect(result).toStrictEqual(getExpectedPostOutput(posts[0]));
    });
  });

  describe('getPosts', () => {
    it('should successfully retrieve posts data', async () => {
      const { posts } = getData(2);
      mockQuery.mockResolvedValue({
        data: { posts }
      });

      const result = await getPosts();

      expect(result).toStrictEqual([
        getExpectedPostOutput(posts[0]),
        getExpectedPostOutput(posts[1])
      ]);
    });
  });
});
