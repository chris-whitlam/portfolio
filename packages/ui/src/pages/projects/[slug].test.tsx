import { ThemeProvider, useMediaQuery } from '@mui/material';
import { theme } from '@styles';
import { ProjectFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import { getProject, getProjectPaths } from '@graphql';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import createMockRouter from '@test/utils/createMockRouter';

import ProjectPage, {
  getStaticProps,
  getStaticPaths,
  ProjectPageProps
} from './[slug]';

jest.mock('@graphql', () => ({
  getProject: jest.fn(),
  getProjectPaths: jest.fn()
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

describe('Pages -> Projects -> Slug (Individual Projects)', () => {
  fdescribe('Component', () => {
    const project = ProjectFactory.build();

    fdescribe('Desktop', () => {
      it('should render page correctly', () => {
        const { getByTestId, queryByTestId } = render({ project });

        expect(getByTestId('project-page')).toBeInTheDocument();
        expect(getByTestId('page-title')).toHaveTextContent(project.name);
        expect(getByTestId('carousel')).toBeInTheDocument();
        expect(getByTestId('product-summary')).toHaveTextContent(
          project.summary
        );
        expect(getByTestId('product-type')).toHaveTextContent(
          project.projectType
        );
        expect(getByTestId('product-tech-stack')).toHaveTextContent(
          project.tags.join(', ')
        );
        expect(getByTestId('source-code-link')).toBeInTheDocument();
        expect(getByTestId('demo-link')).toBeInTheDocument();
        expect(
          queryByTestId('scroll-to-content-button')
        ).not.toBeInTheDocument();
        expect(queryByTestId('fixed-source-code-link')).not.toBeInTheDocument();
        expect(queryByTestId('fixed-demo-link')).not.toBeInTheDocument();
      });
    });

    describe('Mobile', () => {
      it('should render page correctly', () => {
        (useMediaQuery as jest.Mock).mockReturnValue(true);
        const { getByTestId, queryByTestId } = render({ project });

        expect(queryByTestId('source-code-link')).not.toBeInTheDocument();
        expect(queryByTestId('demo-link')).not.toBeInTheDocument();

        expect(getByTestId('scroll-to-content-button')).toBeInTheDocument();
        expect(getByTestId('fixed-source-code-link')).toBeInTheDocument();
        expect(getByTestId('fixed-demo-link')).toBeInTheDocument();
      });
    });
  });

  describe('getStaticProps', () => {
    it('should fetch project data correctly', async () => {
      const slug = 'MyProject';
      const getProjectMock = getProject as jest.Mock;
      getProjectMock.mockResolvedValue(defaultProps);

      const result = await getStaticProps({ params: { slug } });

      expect(getProjectMock).toBeCalledWith(slug);

      expect(result).toStrictEqual({ props: { project: defaultProps } });
    });
  });

  describe('getStaticPaths', () => {
    it('should fetch paths correctly', async () => {
      const projects = ProjectFactory.buildList(3);
      const paths = projects.map((project) => ({
        params: { slug: project.slug }
      }));

      const getProjectPathsMock = getProjectPaths as jest.Mock;
      getProjectPathsMock.mockResolvedValue(paths);

      const result = await getStaticPaths();

      expect(result).toStrictEqual({ paths, fallback: false });
    });
  });
});
