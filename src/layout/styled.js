import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import {mediaQuery} from '../utils';

export const HeaderWrapper = styled(Box)(
  {
    color: props => (props.location === '/' ? theme.colors.muted : 'black'),
    'a:any-link': {
      color: props => (props.location === '/' ? theme.colors.muted : 'black'),
      textDecoration: 'none',
      padding: theme.space[1],
    },
    'a:hover': {
      color: theme.colors.primary,
    },
  },
  mediaQuery({

  })
);
