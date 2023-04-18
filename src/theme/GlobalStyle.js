import {createGlobalStyle} from 'styled-components';
import {theme} from './theme';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      background: '#FFFF',
      fontFamily: `${theme.fonts.main}, -apple-system, sans-serif`,
      letterSpacing: '2px',
      padding: '10px',
      // maxWidth: '800px',
      margin: '0 auto',
    },
  }
);
