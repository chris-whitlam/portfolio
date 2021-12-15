import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Page from './components/Page';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    </div>
  );
};

export default App;
