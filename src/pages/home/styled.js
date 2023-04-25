import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const HomeWrapper = styled(Box)(
  {
    color: theme.colors.muted,
  },
  mediaQuery(
    {
      minHeight: ['', '', '100vh'],
    }
  )
);
export const CTAWrapper = styled(Box)(
  {
    'a:any-link': {
      color: 'white',
      textDecoration: 'none',
    },
    'a:hover': {
      color: 'black',
    },
  },
  mediaQuery(
    {
      display: ['unset', 'unset', 'flex'],
      gap: ['', '', theme.space[5]],
      width: ['', '', '70%'],
      margin: [theme.space[6], theme.space[6], theme.space[6]],
      img: {
        width: ['80%', '', '100%'],
      },
    }
  )
);
