import preloadAll from 'jest-next-dynamic';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { theme } from '@styles';
import { fireEvent, render as rtlRender } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import Header from './Header';

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  useMediaQuery: jest.fn().mockReturnValue(true) // Default to desktop view
}));

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

describe('Components -> Organisms -> Header', () => {
  beforeAll(async () => {
    await preloadAll();
  });
  afterEach(jest.resetAllMocks);
  afterAll(jest.restoreAllMocks);

  describe('Desktop', () => {
    it('should render component correctly', () => {
      const { getByTestId, queryByTestId } = render();

      expect(getByTestId('header')).toBeInTheDocument();
      expect(getByTestId('header-desktop-nav')).toBeInTheDocument();
      expect(queryByTestId('header-mobile-nav')).not.toBeInTheDocument();
    });
  });

  describe('Mobile', () => {
    beforeAll(() => {
      (useMediaQuery as jest.Mock).mockReturnValue(false);
    });

    it('should render component correctly', () => {
      const { getByTestId, queryByTestId } = render();

      expect(getByTestId('header')).toBeInTheDocument();
      expect(queryByTestId('header-desktop-nav')).not.toBeInTheDocument();
      expect(getByTestId('header-mobile-nav')).toBeInTheDocument();
    });

    it('should toggle nav when menu button pressed', async () => {
      const { getByTestId } = render();

      expect(getByTestId('header-mobile-nav')).toHaveAttribute(
        'aria-hidden',
        'true'
      );

      const menuButton = getByTestId('header-menu-button');

      act(() => {
        fireEvent.click(menuButton);
      });

      expect(getByTestId('header-mobile-nav')).toHaveAttribute(
        'aria-hidden',
        'false'
      );

      act(() => {
        fireEvent.click(menuButton);
      });

      expect(getByTestId('header-mobile-nav')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });
  });
});
