import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import {mediaQuery} from '../utils';

export const HeaderWrapper = styled(Box)(
  {
    'a:any-link': {
      color: theme.colors.muted,
      textDecoration: 'none',
      padding: theme.space[1],
    },
    'a:hover': {
      color: theme.colors.primary,
      background: 'black',
    },
  },
  mediaQuery({

  })
);
