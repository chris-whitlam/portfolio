import { ImageFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { Image } from '@types';
import { useMediaQuery } from '@mui/material';
import Carousel from './Carousel';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true)
}));

const render = (images: Image[] = ImageFactory.buildList(3), autoPlay = true) =>
  rtlRender(<Carousel images={images} autoPlay={autoPlay} />);

describe('Components -> Molecules -> Carousel', () => {
  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  it('should render component', () => {
    const { getByTestId, debug } = render();

    debug();

    expect(getByTestId('carousel')).toBeInTheDocument();
    expect(getByTestId('previous-slide-button')).toBeInTheDocument();
    expect(getByTestId('next-slide-button')).toBeInTheDocument();
  });

  it('should not show controls if one image', () => {
    const { queryByTestId } = render(ImageFactory.buildList(1));

    expect(queryByTestId('previous-slide-button')).not.toBeInTheDocument();
    expect(queryByTestId('next-slide-button')).not.toBeInTheDocument();
  });

  it('should not show if on small screen', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { queryByTestId } = render();

    expect(queryByTestId('previous-slide-button')).not.toBeInTheDocument();
    expect(queryByTestId('next-slide-button')).not.toBeInTheDocument();
  });

  // Want to add more tests here but I can't get it to show more than one slide
});
