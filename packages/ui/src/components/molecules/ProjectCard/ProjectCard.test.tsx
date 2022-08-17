import { ProjectFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';
import ProjectCard from './ProjectCard';

// TODO: Not ideal button was having issues with the buttons
jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  Button: ({ fullWidth, endIcon, ...rest }: any) => <div {...rest} />
}));

const render = (project = ProjectFactory.build()) =>
  rtlRender(<ProjectCard project={project} />);

describe('Components -> Molecules -> Project Card', () => {
  it('should render component', () => {
    const project = ProjectFactory.build();
    const { getByTestId } = render(project);

    expect(getByTestId('project-card')).toBeInTheDocument();
    expect(getByTestId('project-card-demo-link')).toBeInTheDocument();
    expect(getByTestId('project-card-code-link')).toBeInTheDocument();
    expect(getByTestId('project-card-tags')).toHaveTextContent(
      project.tags.join(', ')
    );
  });

  it('should not show demo or code buttons if no link provided', () => {
    const project = ProjectFactory.build();
    const { queryByTestId } = render({
      ...project,
      sourceCode: '',
      demo: ''
    });

    expect(queryByTestId('project-card-demo-link')).not.toBeInTheDocument();
    expect(queryByTestId('project-card-code-link')).not.toBeInTheDocument();
  });
});
