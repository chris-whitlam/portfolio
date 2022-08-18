import { GraphQLProfile } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import GraphQLImageFactory from './GraphQLImageFactory';

class GraphQLProfileDataObjectFactory extends Factory<GraphQLProfile> {}

const GraphQLProfileFactory = GraphQLProfileDataObjectFactory.define(() => ({
  name: faker.name.fullName(),
  roles: faker.helpers.arrayElements([
    'Full-Stack Engineer',
    'Guitarist',
    'Song Writer'
  ]),
  bio: faker.lorem.lines(3),
  socials: {
    githubUrl: faker.internet.url(),
    linkedInUrl: faker.internet.url(),
    email: faker.internet.url()
  },
  image: GraphQLImageFactory.build()
}));

export default GraphQLProfileFactory;
