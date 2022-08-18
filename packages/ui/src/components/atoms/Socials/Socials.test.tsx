import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { SocialsFactory } from '@test/factories';
import { render as rtlRender, screen } from '@testing-library/react';

import { Socials as SocialsType } from '@types';
import Socials from './Socials';

const render = (socials?: SocialsType) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Socials socials={socials} />
    </ThemeProvider>
  );

const assertLink = (dataTestId: string, expectedLink: string) => {
  const gitHubLink = screen.getByTestId(dataTestId);
  expect(gitHubLink).toBeInTheDocument();
  expect(gitHubLink).toHaveAttribute('href', expectedLink);
};

describe('Components -> Atoms -> Socials', () => {
  it('should render component correctly', () => {
    const socials = SocialsFactory.build();
    const { getByTestId } = render(socials);

    expect(getByTestId('socials')).toBeInTheDocument();

    assertLink('socials-github', socials.githubUrl);
    assertLink('socials-linkedIn', socials.linkedInUrl);
    assertLink('socials-email', `mailto:${socials.email}`);
  });

  it('should use default links if none provided', () => {
    const { getByTestId } = render();

    expect(getByTestId('socials')).toBeInTheDocument();

    assertLink('socials-github', 'https://github.com/chris-whitlam');
    assertLink(
      'socials-linkedIn',
      'https://www.linkedin.com/in/christopher-whitlam'
    );
    assertLink('socials-email', 'mailto:contact@chriswhitlam.dev');
  });
});
