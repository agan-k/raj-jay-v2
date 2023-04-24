import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const HomeWrapper = styled(Box)(
  {
    minHeight: '100vh',
    color: theme.colors.muted,
  },
  mediaQuery(
    {
    }
  )
);
export const CTAWrapper = styled(Box)(
  {
    img: {
      width: theme.space[8],
    },
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
      width: ['', '', '50%'],
      padding: ['', '', theme.space[6]],
    }
  )
);
