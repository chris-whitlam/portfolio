import { render } from '@testing-library/react';
import { Image as ImageType } from '@types';
import Image from './Image';

describe('Components -> Atoms -> Image', () => {
  const testId = 'image';
  const mockImage: ImageType = {
    url: 'my-image.com',
    width: 200,
    height: 200
  };

  it('should render component', () => {
    const { getByTestId } = render(
      <Image data-test-id={testId} image={mockImage} />
    );

    expect(getByTestId(testId)).toBeInTheDocument();
  });
});
