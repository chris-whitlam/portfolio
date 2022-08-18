import { useMediaQuery } from '@mui/material';
import { PostFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';

import PostCard from './PostCard';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true)
}));

const render = (post = PostFactory.build()) =>
  rtlRender(<PostCard post={post} />);

describe('Components -> Molecules -> Post Card', () => {
  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  it('should render component', () => {
    const post = PostFactory.build();

    const { getByTestId } = render(post);

    expect(getByTestId('post-card')).toBeInTheDocument();
    expect(getByTestId('post-card-image')).toBeInTheDocument();
    expect(getByTestId('post-card-tags')).toHaveTextContent(
      post.tags.join(', ')
    );
  });

  it('should not show image if on small screen', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { queryByTestId } = render();

    expect(queryByTestId('post-card-image')).not.toBeInTheDocument();
  });
});
