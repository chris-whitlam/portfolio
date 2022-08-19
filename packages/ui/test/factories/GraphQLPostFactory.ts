import { GraphQLPost } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import GraphQLImageFactory from './GraphQLImageFactory';
import RichContentFactory from './RichContentFactory';

class GraphQLPostDataObjectFactory extends Factory<GraphQLPost> {}

const GraphQLPostFactory = GraphQLPostDataObjectFactory.define(() => ({
  title: faker.lorem.words(5),
  slug: faker.internet.url(),
  summary: faker.lorem.paragraph(),
  content: {
    raw: RichContentFactory.build()
  },
  date: faker.date.past().toISOString(),
  tags: faker.helpers.arrayElements(['Typescript', 'Database', 'Unity']),
  readTime: faker.datatype.number(20),
  coverImage: GraphQLImageFactory.build()
}));

export default GraphQLPostFactory;
