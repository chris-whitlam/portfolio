import { Image } from '@types';
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

class ImageDataObjectFactory extends Factory<Image> {}

const ImageFactory = ImageDataObjectFactory.define(() => ({
  url: faker.image.abstract(1920, 1080),
  height: 1920,
  width: 1080,
  alt: faker.lorem.words(5)
}));

export default ImageFactory;
