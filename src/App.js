import {Outlet} from 'react-router-dom';
import {Footer, Header} from './layout';
import {GlobalStyle} from './theme';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
