import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';

export const HeaderWrapper = styled(Box)(
  {
    'a:any-link': {
      color: theme.colors.muted,
      textDecoration: 'none',
    },
    'a:hover': {
      color: theme.colors.primary,
    },
  }
);
