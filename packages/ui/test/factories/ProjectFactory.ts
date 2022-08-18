import { Project, ProjectType } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import ImageFactory from './ImageFactory';
import RichContentFactory from './RichContentFactory';

class ProjectDataObjectFactory extends Factory<Project> {}

const ProjectFactory = ProjectDataObjectFactory.define(() => ({
  name: faker.lorem.words(3),
  slug: faker.lorem.words(1),
  tags: faker.helpers.arrayElements(['Typescript', 'Javascript', 'C#'], 2),
  summary: faker.lorem.paragraph(),
  projectType: 'Personal' as ProjectType,
  demo: faker.internet.url(),
  sourceCode: faker.internet.url(),
  isApp: false,
  description: RichContentFactory.build(),
  images: ImageFactory.buildList(2)
}));

export default ProjectFactory;
