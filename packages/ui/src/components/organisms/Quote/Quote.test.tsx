import preloadAll from 'jest-next-dynamic';
import { ThemeProvider } from '@mui/material';
import { theme } from '@styles';
import { render as rtlRender } from '@testing-library/react';
import Quote from './Quote';

const render = (speaker: string, quote: string) =>
  rtlRender(
    <ThemeProvider theme={theme}>
      <Quote speaker={speaker}>{quote}</Quote>
    </ThemeProvider>
  );

describe('Components -> Organisms -> Quote', () => {
  beforeAll(async () => {
    await preloadAll();
  });

  it('should render component', () => {
    const speaker = 'Bob Bobson';
    const quote = 'Coding is cool';
    const { getByTestId } = render(speaker, quote);

    expect(getByTestId('quote')).toBeInTheDocument();
    expect(getByTestId('quote-body')).toHaveTextContent(quote);
    expect(getByTestId('quote-speaker')).toHaveTextContent(speaker);
  });
});
