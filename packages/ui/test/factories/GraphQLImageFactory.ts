import { GraphQLImage } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

class GraphQLImageDataObjectFactory extends Factory<GraphQLImage> {}

const GraphQLImageFactory = GraphQLImageDataObjectFactory.define(() => ({
  image: {
    url: faker.image.abstract(1920, 1080),
    height: 1920,
    width: 1080
  },
  alt: faker.lorem.words(5)
}));

export default GraphQLImageFactory;
