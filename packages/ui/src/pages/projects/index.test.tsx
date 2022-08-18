import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { ProjectFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { getProjects } from '@graphql';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import ProjectPage, { getStaticProps, ProjectPageProps } from './index';

jest.mock('@graphql', () => ({
  getProjects: jest.fn()
}));

const defaultProps: ProjectPageProps = {
  projects: ProjectFactory.buildList(3)
};

const render = (props: ProjectPageProps = defaultProps) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <RouterContext.Provider value={createMockRouter()}>
        <ProjectPage {...props} />
      </RouterContext.Provider>
    </ThemeProvider>
  );

describe('Pages -> Projects -> Index', () => {
  describe('Component', () => {
    it('should render page correctly', () => {
      const { getByTestId, getAllByTestId } = render();

      expect(getByTestId('back-link')).toBeInTheDocument();
      expect(getByTestId('page-title')).toHaveTextContent('Projects');
      expect(getAllByTestId('project-card')).toHaveLength(3);
    });
  });

  describe('getStaticProps', () => {
    it('should fetch projects correctly', async () => {
      const getProjectsMock = getProjects as jest.Mock;
      getProjectsMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps();

      expect(result).toStrictEqual({ props: { projects: defaultProps } });
    });
  });
});
