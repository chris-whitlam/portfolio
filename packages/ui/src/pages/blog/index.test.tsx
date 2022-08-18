import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';
import { getPosts } from '@graphql';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import { PostFactory } from '@test/factories';
import BlogPage, { getStaticProps, BlogPageProps } from './index';

jest.mock('@graphql', () => ({
  getPosts: jest.fn()
}));

const defaultProps: BlogPageProps = {
  posts: PostFactory.buildList(3)
};

const render = (props: BlogPageProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter()}>
        <BlogPage {...props} />
      </RouterContext.Provider>
    </ThemeProvider>
  );

describe('Pages -> Blog -> Index', () => {
  describe('Component', () => {
    it('should render page correctly', () => {
      const { getByTestId, getAllByTestId } = render();

      expect(getByTestId('back-link')).toBeInTheDocument();
      expect(getByTestId('page-title')).toHaveTextContent('Blog Posts');
      expect(getAllByTestId('post-card')).toHaveLength(3);
    });
  });

  describe('getStaticProps', () => {
    it('should fetch posts correctly', async () => {
      const getPostsMock = getPosts as jest.Mock;
      getPostsMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps();

      expect(result).toStrictEqual({ props: { posts: defaultProps } });
    });
  });
});
