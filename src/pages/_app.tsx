import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme/light';
import GlobalStyle from '../components/styles/GlobalStyles';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
