import {
  GraphQLPostFactory,
  GraphQLProfileFactory,
  GraphQLProjectFactory
} from '@test/factories';
import fetchHomepageData from './homepage';
import apolloClient from './apolloClient';

jest.mock('./apolloClient', () => ({
  query: jest.fn()
}));

const getMockHompageData = () => ({
  profiles: GraphQLProfileFactory.buildList(1),
  projects: GraphQLProjectFactory.buildList(1),
  posts: GraphQLPostFactory.buildList(1)
});

describe('GraphQL -> homepage', () => {
  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  it('should successfully retrieve homepage data', async () => {
    const mockData = getMockHompageData();
    (apolloClient.query as jest.Mock).mockResolvedValue({
      data: mockData
    });

    const result = await fetchHomepageData({ numOfFeaturedProjects: 1 });

    expect(result).toStrictEqual({
      profile: {
        ...mockData.profiles[0],
        bio: mockData.profiles[0].bio.raw,
        image: {
          ...mockData.profiles[0].image.image,
          alt: mockData.profiles[0].image.alt
        }
      },
      posts: [
        {
          ...mockData.posts[0],
          content: mockData.posts[0].content.raw,
          coverImage: {
            ...mockData.posts[0].coverImage.image,
            alt: mockData.posts[0].coverImage.alt
          }
        }
      ],
      projects: [
        {
          ...mockData.projects[0],
          description: mockData.projects[0].description.raw,
          images: [
            {
              ...mockData.projects[0].images[0].image,
              alt: mockData.projects[0].images[0].alt
            },
            {
              ...mockData.projects[0].images[1].image,
              alt: mockData.projects[0].images[1].alt
            }
          ]
        }
      ]
    });
  });
});
