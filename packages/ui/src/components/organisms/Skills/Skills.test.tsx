import preloadAll from 'jest-next-dynamic';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';

import Skills from './Skills';

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Skills />
    </ThemeProvider>
  );

describe('Components -> Atoms -> Skill', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('should render component correctly', () => {
    const { getByTestId, getAllByTestId } = render();

    const subSectionHeadings = getAllByTestId('sub-section-heading');

    expect(getByTestId('section-heading')).toHaveTextContent('My Skills');
    expect(subSectionHeadings[0]).toHaveTextContent('Front-end');
    expect(subSectionHeadings[1]).toHaveTextContent('Back-end');
    expect(subSectionHeadings[2]).toHaveTextContent('DevOps');
    expect(subSectionHeadings[3]).toHaveTextContent('Other');
    expect(getByTestId('front-end-skills')).toBeInTheDocument();
    expect(getByTestId('back-end-skills')).toBeInTheDocument();
    expect(getByTestId('devops-skills')).toBeInTheDocument();
    expect(getByTestId('other-skills')).toBeInTheDocument();
  });
});
