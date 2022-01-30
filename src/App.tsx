import { ThemeProvider } from 'styled-components';
import { getConfig } from './utils/config';
import theme from './theme';
import Page from './components/Page';
import UnderConstruction from './components/UnderConstruction';

const App = () => {
  const { isUnderConstruction } = getConfig();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {isUnderConstruction ? <UnderConstruction /> : <Page />}
      </ThemeProvider>
    </div>
  );
};

export default App;
