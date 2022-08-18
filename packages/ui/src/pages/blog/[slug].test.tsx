import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { PostFactory, ProjectFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { getPost, getPostPaths } from '@graphql';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import ProjectPage, {
  getStaticProps,
  getStaticPaths,
  ProjectPageProps
} from './[slug]';

jest.mock('@graphql', () => ({
  getPost: jest.fn(),
  getPostPaths: jest.fn()
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(false)
}));

const defaultProps: ProjectPageProps = {
  project: ProjectFactory.build()
};

const render = (props: ProjectPageProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter()}>
        <ProjectPage {...props} />
      </RouterContext.Provider>
    </ThemeProvider>
  );

describe('Pages -> Blog -> Slug (Individual Blog Post)', () => {
  describe('Component', () => {
    const post = PostFactory.build();

    it('should render page correctly', () => {
      const { getByTestId } = render({ post });

      expect(getByTestId('blog-post-page')).toBeInTheDocument();
      expect(getByTestId('back-link')).toBeInTheDocument();
      expect(getByTestId('image')).toBeInTheDocument();
      expect(getByTestId('page-title')).toHaveTextContent(post.title);
    });
  });

  describe('getStaticProps', () => {
    it('should fetch post data correctly', async () => {
      const slug = 'MyPost';
      const getPostMock = getPost as jest.Mock;
      getPostMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps({ params: { slug } });

      expect(getPostMock).toBeCalledWith(slug);

      expect(result).toStrictEqual({ props: { post: defaultProps } });
    });
  });

  describe('getStaticPaths', () => {
    it('should fetch paths correctly', async () => {
      const posts = PostFactory.buildList(3);
      const paths = posts.map((post) => ({
        params: { slug: post.slug }
      }));

      const getPostPathsMock = getPostPaths as jest.Mock;
      getPostPathsMock.mockResolvedValue(paths);

      const result = await getStaticPaths();

      expect(result).toStrictEqual({ paths, fallback: false });
    });
  });
});