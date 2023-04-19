import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import banner from '../assets/images/home-banner.jpg';
import {mediaQuery} from '../utils';

export const HeaderWrapper = styled(Box)(
  {
    zIndex: -999,
    backgroundImage: `url('${banner}')`,
    backgroundSize: '',
    // backgroundPosition: '-100px -680px',
    backgroundRepeat: 'no-repeat',
    'a:any-link': {
      color: theme.colors.muted,
      textDecoration: 'none',
    },
    'a:hover': {
      color: theme.colors.primary,
    },
  },
  mediaQuery({
    position: ['unset', 'unset', 'fixed'],
    top: ['unset', 'unset', '0'],
    left: ['unset', 'unset', '0'],
    width: '100%',
    backgroundPosition: ['-600px -680px', '-600px -680px', '-100px -680px'],

  })
);
