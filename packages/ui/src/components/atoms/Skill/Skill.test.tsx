import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';
import { Skill as SkillType } from '@types';
import { SiTypescript } from 'react-icons/si';

import Skill from './Skill';

const mockSkill: SkillType = {
  label: 'Typescript',
  Icon: SiTypescript
};

const render = (skill = mockSkill) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Skill skill={skill} />
    </ThemeProvider>
  );

describe('Components -> Atoms -> Skill', () => {
  it('should render component correctly', () => {
    const { getByTestId } = render();

    expect(getByTestId('skill')).toBeInTheDocument();
    expect(getByTestId('skill-icon')).toBeInTheDocument();
    expect(getByTestId('skill-label')).toHaveTextContent(mockSkill.label);
  });
});
