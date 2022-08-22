import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender, waitFor } from '@testing-library/react';
import LazyLoader from './LazyLoader';

jest.mock('@molecules', () => ({
  ...jest.requireActual('@molecules')
}));

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <LazyLoader>
        <div data-test-id="child-component" />
      </LazyLoader>
    </ThemeProvider>
  );

describe('Components -> Molecules -> LazyLoader', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  it('should render child component if visible', () => {
    const { getByTestId } = render();

    waitFor(() => {
      expect(getByTestId('child-component')).toBeInTheDocument();
      expect(getByTestId('lazy-loader-container')).toBeInTheDocument();
    });
  });

  it('should render spinner if not visible', () => {
    const { getByTestId } = render();

    waitFor(() => {
      expect(getByTestId('spinner')).toBeInTheDocument();
      expect(getByTestId('lazy-loader-container')).toBeInTheDocument();
    });
  });
});
