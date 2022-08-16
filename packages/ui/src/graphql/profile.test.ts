import { GraphQLProfileFactory } from '@test/factories';
import { GraphQLProfile } from '@types';
import apolloClient from './apolloClient';
import { getProfile } from './profile';

jest.mock('./apolloClient', () => ({
  query: jest.fn()
}));

const getExpectedProfileOutput = (profile: GraphQLProfile) => ({
  ...profile,
  image: {
    ...profile.image.image,
    alt: profile.image.alt
  }
});

describe('GraphQL -> profile', () => {
  const mockQuery = apolloClient.query as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
    mockQuery.mockReset();
  });

  afterAll(jest.restoreAllMocks);

  it('should successfully retrieve profile data', async () => {
    const mockData = GraphQLProfileFactory.buildList(1);

    mockQuery.mockResolvedValue({ data: { profiles: mockData } });

    const result = await getProfile();

    expect(result).toStrictEqual(getExpectedProfileOutput(mockData[0]));
  });
});
