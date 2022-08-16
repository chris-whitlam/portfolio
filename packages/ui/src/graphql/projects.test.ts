import { getProject, getProjects } from '@graphql';
import { GraphQLProjectFactory } from '@test/factories';
import { GraphQLProject } from '@types';
import apolloClient from './apolloClient';

jest.mock('./apolloClient', () => ({
  query: jest.fn()
}));

const getData = (numOfProjects = 1) => ({
  projects: GraphQLProjectFactory.buildList(numOfProjects)
});

const getExpectedProjectOutput = (project: GraphQLProject) => ({
  ...project,
  description: project.description.raw,
  images: [
    {
      ...project.images[0].image,
      alt: project.images[0].alt
    },
    {
      ...project.images[1].image,
      alt: project.images[1].alt
    }
  ]
});

describe('GraphQL -> projects', () => {
  const slug = 'mySlug';
  const mockQuery = apolloClient.query as jest.Mock;

  afterEach(() => {
    jest.resetAllMocks();
    mockQuery.mockReset();
  });

  afterAll(jest.restoreAllMocks);

  describe('getProject', () => {
    it('should successfully retrieve project data', async () => {
      const { projects } = getData();

      mockQuery.mockResolvedValue({
        data: { projects }
      });

      const result = await getProject(slug);

      expect(result).toStrictEqual(getExpectedProjectOutput(projects[0]));
    });
  });

  describe('getProjects', () => {
    it('should successfully retrieve projects data', async () => {
      const { projects } = getData(2);
      mockQuery.mockResolvedValue({
        data: { projects }
      });

      const result = await getProjects();

      expect(result).toStrictEqual([
        getExpectedProjectOutput(projects[0]),
        getExpectedProjectOutput(projects[1])
      ]);
    });
  });
});
