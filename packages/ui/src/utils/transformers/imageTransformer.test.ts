import { GraphQLImageFactory } from '@test/factories';
import transformImage from './imageTransformer';

describe('Utils -> Transformers -> Image Transformer', () => {
  it('should transform api fetched image to image', async () => {
    const image = GraphQLImageFactory.build();

    const result = transformImage(image);

    expect(result).toStrictEqual({
      alt: image.alt,
      url: image.image.url,
      height: image.image.height,
      width: image.image.width
    });
  });
});
