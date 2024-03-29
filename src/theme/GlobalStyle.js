import {createGlobalStyle} from 'styled-components';
import {theme} from './theme';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      position: 'relative',
      fontFamily: theme.fonts.main,
      letterSpacing: '2px',
      margin: '0 auto',
      'a:any-link': {
        color: theme.colors.primary,
        textDecoration: 'none',
      },
      'a:hover': {
        color: theme.colors.muted,
      },
    },
  }
);
