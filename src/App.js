import {Outlet} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {Footer, Header} from './layout';
import {GlobalStyle} from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}
