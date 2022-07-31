import { GraphQLImage, Image } from '@types';

const transformImage = (image: GraphQLImage): Image => ({
  alt: image.alt,
  ...image.image
});

export default transformImage;
