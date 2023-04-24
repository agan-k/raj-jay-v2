import {createGlobalStyle} from 'styled-components';
import {theme} from './theme';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      fontFamily: `${theme.fonts.main}, -apple-system, sans-serif`,
      letterSpacing: '2px',
      margin: '0 auto',
      'a:any-link': {
        color: theme.colors.primary,
      },
      'a:hover': {
        color: theme.colors.muted,
      },
    },
  }
);
