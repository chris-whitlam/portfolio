import preloadAll from 'jest-next-dynamic';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { theme } from '@styles';
import { ProfileFactory } from '@test/factories';
import { render as rtlRender } from '@testing-library/react';

import Hero from './Hero';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true)
}));

const render = (profile = ProfileFactory.build()) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Hero profile={profile} />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Quote', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  it('should render component', () => {
    const { getByTestId } = render();

    expect(getByTestId('hero')).toBeInTheDocument();
    expect(getByTestId('hero-corner-images')).toBeInTheDocument();
  });

  it('should not show corner pieces on small screen', () => {
    (useMediaQuery as jest.Mock).mockReturnValue(false);

    const { queryByTestId } = render();

    expect(queryByTestId('hero-corner-images')).not.toBeInTheDocument();
  });
});
