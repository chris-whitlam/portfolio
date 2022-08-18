import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { ProjectFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';

import Projects from './Projects';

const render = (projects = ProjectFactory.buildList(2)) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Projects projects={projects} />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Projects', () => {
  it('should render component correctly', () => {
    const numOfProjects = 3;
    const projects = ProjectFactory.buildList(numOfProjects);
    const { getByTestId, getAllByTestId } = render(projects);

    expect(getByTestId('projects')).toBeInTheDocument();
    expect(getByTestId('all-projects-link')).toBeInTheDocument();
    expect(getAllByTestId('project-card')).toHaveLength(numOfProjects);
  });
});
