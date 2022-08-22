import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';

import Spinner from './Spinner';

const render = () =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>
  );

describe('Components -> Atoms -> Spinner', () => {
  it('should render component correctly', () => {
    const { getByTestId } = render();

    expect(getByTestId('spinner')).toBeInTheDocument();
  });
});
