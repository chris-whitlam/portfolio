import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';

import Footer from './Footer';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true) // Default to desktop view
}));

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Footer />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Footer', () => {
  it('should render component correctly', () => {
    const { getByTestId } = render();

    expect(getByTestId('footer')).toBeInTheDocument();
    expect(getByTestId('footer-socials')).toBeInTheDocument();
  });
});
