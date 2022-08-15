import { GraphQLProjectFactory } from '@test/factories';
import { transformProject, transformProjects } from './projectTransformer';

describe('Utils -> Transformers -> Project Transformer', () => {
  describe('transformProject', () => {
    it('should transform project from api to project', async () => {
      const project = GraphQLProjectFactory.build();

      const result = transformProject(project);

      expect(result).toStrictEqual({
        ...project,
        description: project.description.raw,
        images: [
          {
            alt: project.images[0].alt,
            ...project.images[0].image
          },
          {
            alt: project.images[1].alt,
            ...project.images[1].image
          }
        ]
      });
    });
  });

  describe('transformProjects', () => {
    it('should transform multiple projects from api to project', async () => {
      const projects = GraphQLProjectFactory.buildList(2);

      const result = transformProjects(projects);

      const getExpected = (index: number) => ({
        ...projects[index],
        description: projects[index].description.raw,
        images: [
          {
            alt: projects[index].images[0].alt,
            ...projects[index].images[0].image
          },
          {
            alt: projects[index].images[1].alt,
            ...projects[index].images[1].image
          }
        ]
      });

      expect(result).toStrictEqual([getExpected(0), getExpected(1)]);
    });
  });
});
