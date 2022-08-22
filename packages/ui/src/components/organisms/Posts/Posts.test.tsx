import preloadAll from 'jest-next-dynamic';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { PostFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';

import Posts from './Posts';

const render = (posts = PostFactory.buildList(2)) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Posts posts={posts} />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Posts', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('should render component correctly', () => {
    const numOfPosts = 3;
    const posts = PostFactory.buildList(numOfPosts);
    const { getByTestId, getAllByTestId } = render(posts);

    expect(getByTestId('posts')).toBeInTheDocument();
    expect(getByTestId('all-posts-link')).toBeInTheDocument();
    expect(getAllByTestId('post-card')).toHaveLength(numOfPosts);
  });
});
