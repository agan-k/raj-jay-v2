import {useState, useEffect} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from './theme';
import {Footer, Header} from './layout';
import {GlobalStyle} from './theme';
import {Wrapper} from './styled';

export default function App() {
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper location={path}>
        <Header />
        <Outlet />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}
