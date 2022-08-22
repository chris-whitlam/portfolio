import preloadAll from 'jest-next-dynamic';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { PostFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { getPost, getPostPaths } from '@graphql';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import { RichTextContent } from '@test/types';
import ProjectPage, {
  getStaticProps,
  getStaticPaths,
  BlogPostProps
} from './[slug].page';

jest.mock('@graphql', () => ({
  getPost: jest.fn(),
  getPostPaths: jest.fn()
}));

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(false)
}));

const defaultProps: BlogPostProps = {
  post: PostFactory.build()
};

const render = (props: BlogPostProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter()}>
        <ProjectPage {...props} />
      </RouterContext.Provider>
    </ThemeProvider>
  );

describe('Pages -> Blog -> Slug (Individual Blog Post)', () => {
  describe('Component', () => {
    beforeAll(async () => {
      await preloadAll();
    });

    const post = PostFactory.build();
    const postContent = post.content as RichTextContent;

    it('should render page correctly', () => {
      const { getByTestId, container } = render({ post });
      const contentTitle = container.querySelector('h3');
      const paragraph = container.querySelector('p');

      expect(getByTestId('blog-post-page')).toBeInTheDocument();
      expect(getByTestId('back-link')).toBeInTheDocument();
      expect(getByTestId('image')).toBeInTheDocument();
      expect(getByTestId('page-title')).toHaveTextContent(post.title);

      expect(contentTitle).toHaveTextContent(
        postContent.children[0].children[0].text
      );
      expect(paragraph).toHaveTextContent(
        postContent.children[1].children[0].text
      );
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
