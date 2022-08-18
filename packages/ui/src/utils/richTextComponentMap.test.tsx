import { componentMap } from '@utils';
import { render } from '@testing-library/react';

describe('Utils -> Rich Text Component Map', () => {
  describe('img', () => {
    it('should map images to Image component', () => {
      const image = {
        width: 1920,
        height: 1080,
        altText: 'Hi',
        src: 'myImage',
        title: 'Image Title'
      };
      const { img } = componentMap;

      const component = img && img(image);

      if (!component) {
        throw new Error('Component is undefined');
      }

      const { getByRole } = render(component);

      const imageComponent = getByRole('img');
      expect(imageComponent).toBeInTheDocument();
      expect(imageComponent).toHaveAttribute('alt', image.altText);
    });

    it('should use title if no alt text', () => {
      const image = {
        width: 1920,
        height: 1080,
        src: 'myImage',
        title: 'Image Title'
      };
      const { img } = componentMap;

      const component = img && img(image);

      if (!component) {
        throw new Error('Component is undefined');
      }

      const { getByRole } = render(component);

      const imageComponent = getByRole('img');
      expect(imageComponent).toBeInTheDocument();
      expect(imageComponent).toHaveAttribute('alt', image.title);
    });

    it('should use empty string if no alt text or title', () => {
      const image = {
        width: 1920,
        height: 1080,
        src: 'myImage'
      };
      const { img } = componentMap;

      const component = img && img(image);

      if (!component) {
        throw new Error('Component is undefined');
      }

      const { getByRole } = render(component);

      const imageComponent = getByRole('img');
      expect(imageComponent).toBeInTheDocument();
      expect(imageComponent).toHaveAttribute('alt', '');
    });

    it('should return empty div if no image src defined', () => {
      const image = {
        width: 1920,
        height: 1080
      };
      const { img } = componentMap;

      const component = img && img(image);

      if (!component) {
        throw new Error('Component is undefined');
      }

      const { queryByRole } = render(component);

      const imageComponent = queryByRole('img');
      expect(imageComponent).not.toBeInTheDocument();
    });
  });
});
