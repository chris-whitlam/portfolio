import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { ProfileFactory } from '@test/factories';
import { RichTextContent } from '@test/types';
import { render as rtlRender } from '@testing-library/react';

import About from './About';

const render = (profile = ProfileFactory.build()) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <About profile={profile} />
    </ThemeProvider>
  );

describe('Components -> Organisms -> About', () => {
  it('should render component correctly', () => {
    const profile = ProfileFactory.build();
    const bio = profile.bio as RichTextContent;
    const { getByTestId, container } = render(profile);

    const bioTitle = container.querySelector('h3');
    const paragraph = container.querySelector('p');
    expect(getByTestId('section-heading')).toHaveTextContent('About');
    expect(getByTestId('bio')).toBeInTheDocument();

    expect(bioTitle).toHaveTextContent(bio.children[0].children[0].text);
    expect(paragraph).toHaveTextContent(bio.children[1].children[0].text);
  });
});
