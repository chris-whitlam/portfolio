import preloadAll from 'jest-next-dynamic';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';

import Home, { HomePageProps, getStaticProps } from '@pages/index.page';
import { PostFactory, ProfileFactory, ProjectFactory } from '@test/factories';
import { getHomepageData } from '@graphql';

jest.mock('@graphql', () => ({
  getHomepageData: jest.fn()
}));

const defaultProps: HomePageProps = {
  profile: ProfileFactory.build(),
  projects: ProjectFactory.buildList(3),
  posts: PostFactory.buildList(3)
};

const render = (props: HomePageProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Home {...props} />
    </ThemeProvider>
  );

describe('Pages -> Index', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  describe('Component', () => {
    it('should render page correctly', () => {
      const { getByTestId, getAllByTestId } = render();

      expect(getByTestId('hero')).toBeInTheDocument();
      expect(getByTestId('quote')).toBeInTheDocument();
      expect(getByTestId('quote-body')).toHaveTextContent(
        'Make it work, make it right, make it fast.'
      );
      expect(getByTestId('quote-speaker')).toHaveTextContent('Kent Beck');
      expect(getByTestId('projects')).toBeInTheDocument();
      expect(getAllByTestId('project-card')).toHaveLength(3);
      expect(getByTestId('posts')).toBeInTheDocument();
      expect(getAllByTestId('post-card')).toHaveLength(3);
    });
  });

  describe('getStaticProps', () => {
    it('should fetch homepage data correctly', async () => {
      const getHomepageDataMock = getHomepageData as jest.Mock;
      getHomepageDataMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps();

      expect(getHomepageDataMock).toBeCalledWith({ numOfFeaturedProjects: 5 });

      expect(result).toStrictEqual({ props: defaultProps });
    });
  });
});
