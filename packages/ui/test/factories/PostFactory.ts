import { Post } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import ImageFactory from './ImageFactory';

class PostDataObjectFactory extends Factory<Post> {}

const PostFactory = PostDataObjectFactory.define(() => ({
  title: faker.lorem.words(5),
  slug: faker.lorem.words(1),
  date: faker.date.past().toISOString(),
  tags: faker.helpers.arrayElements(['Typescript', 'Database', 'Unity'], 2),
  readTime: faker.datatype.number(20),
  coverImage: ImageFactory.build(),
  content: {
    children: [
      {
        type: 'heading-three' as const,
        children: [
          {
            text: faker.lorem.words(3)
          }
        ]
      },
      {
        type: 'paragraph' as const,
        children: [
          {
            text: faker.lorem.paragraph()
          }
        ]
      }
    ]
  }
}));

export default PostFactory;
