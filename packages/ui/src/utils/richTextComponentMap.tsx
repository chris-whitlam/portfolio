import { NodeRendererType } from '@graphcms/rich-text-react-renderer';
import { Image } from '@atoms';

const components: NodeRendererType = {
  img: ({ width, height, altText, src, title }) => {
    if (!src) {
      return <div />;
    }

    const image = {
      alt: altText || title || '',
      height,
      width,
      url: src
    };
    return <Image image={image} style={{ borderRadius: '8px' }} />;
  }
};

export default components;
