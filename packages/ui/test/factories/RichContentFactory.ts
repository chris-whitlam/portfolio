import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { RichTextContent } from '@graphcms/rich-text-types';

class RichContentDataObjectFactory extends Factory<RichTextContent> {}

const RichContentFactory = RichContentDataObjectFactory.define(() => ({
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
}));

export default RichContentFactory;
