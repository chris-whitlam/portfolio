import { GraphQLProject, ProjectType } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import GraphQLImageFactory from './GraphQLImageFactory';
import RichContentFactory from './RichContentFactory';

class GraphQLProjectDataObjectFactory extends Factory<GraphQLProject> {}

const GraphQLProjectFactory = GraphQLProjectDataObjectFactory.define(() => ({
  name: faker.commerce.product(),
  slug: faker.internet.url(),
  tags: faker.helpers.arrayElements(['Typescript', 'Unity', 'AWS']),
  summary: faker.lorem.lines(4),
  projectType: 'Personal' as ProjectType,
  demo: faker.internet.url(),
  sourceCode: faker.internet.url(),
  isApp: false,
  description: {
    raw: RichContentFactory.build()
  },
  images: GraphQLImageFactory.buildList(2)
}));

export default GraphQLProjectFactory;
