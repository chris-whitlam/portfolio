import { Post } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';
import RichContentFactory from './RichContentFactory';

class PostDataObjectFactory extends Factory<Post> {}

const PostFactory = PostDataObjectFactory.define(() => ({
  title: faker.lorem.words(5),
  summary: faker.lorem.paragraph(1),
  slug: faker.lorem.words(1),
  date: faker.date.past().toISOString(),
  tags: faker.helpers.arrayElements(['Typescript', 'Database', 'Unity'], 2),
  readTime: faker.datatype.number(20),
  coverImage: ImageFactory.build(),
  content: RichContentFactory.build()
}));

export default PostFactory;
