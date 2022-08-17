import { Post } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';

class PostDataObjectFactory extends Factory<Post> {}

const PostFactory = PostDataObjectFactory.define(() => ({
  title: faker.lorem.words(5),
  slug: faker.lorem.words(1),
  content: faker.lorem.lines(10),
  date: faker.date.past().toISOString(),
  tags: faker.helpers.arrayElements(['Typescript', 'Database', 'Unity']),
  readTime: faker.datatype.number(20),
  coverImage: ImageFactory.build()
}));

export default PostFactory;
