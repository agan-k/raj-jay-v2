import {createGlobalStyle} from 'styled-components';
import {theme} from './theme';
import banner from '../assets/images/gallery-02.jpeg';

export const GlobalStyle = createGlobalStyle(
  {
    body: {
      background: theme.colors.background,
      backgroundImage: `url('${banner}')`,
      backgroundSize: 'contain',
      backgroundPosition: '0 -400px',
      backgroundRepeat: 'no-repeat',
      fontFamily: `${theme.fonts.main}, -apple-system, sans-serif`,
      color: theme.colors.muted,
      letterSpacing: '2px',
      padding: '10px',
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
