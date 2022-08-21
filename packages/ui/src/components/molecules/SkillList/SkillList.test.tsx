import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';
import { Skill as SkillType } from '@types';
import { SiJavascript, SiTypescript } from 'react-icons/si';

import SkillList from './SkillList';

const mockSkillList: SkillType[] = [
  {
    label: 'Typescript',
    Icon: SiTypescript
  },
  {
    label: 'Javascript',
    Icon: SiJavascript
  }
];

const render = (skills = mockSkillList, heading = 'Front-end') =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <SkillList skills={skills} heading={heading} />
    </ThemeProvider>
  );

describe('Components -> Atoms -> Skill', () => {
  it('should render component correctly', () => {
    const { getByTestId, getAllByTestId } = render();

    const skillLabels = getAllByTestId('skill-label');
    expect(getByTestId('skill-list')).toBeInTheDocument();
    expect(skillLabels).toHaveLength(mockSkillList.length);

    mockSkillList.forEach((skill, index) => {
      expect(skillLabels[index]).toHaveTextContent(skill.label);
    });
  });
});
