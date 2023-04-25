import styled from 'styled-components';
import {Box} from '../shared';
import {theme} from '../theme';
import {mediaQuery} from '../utils';

export const HeaderWrapper = styled(Box)(
  {
    color: props => (props.location === '/' ? theme.colors.muted : 'black'),
    'a:any-link': {
      color: props => (props.location === '/' ? theme.colors.muted : 'black'),
    },
    'a:hover': {
      color: theme.colors.primary,
    },
  },
  mediaQuery({

  })
);
export const FooterWrapper = styled(Box)(
  {
    padding: theme.space[4],
  },
  mediaQuery({
    position: ['', '', 'absolute'],
    bottom: ['', '', '0px'],
    right: ['', '', '0px'],
    justifyContent: ['center', 'center', 'end'], 
    display: ['', '', 'flex'], 
    maxHeight: ['200px', '200px', '100px'], 
    marginTop: [theme.space[6], theme.space[6], 'unset'],
  })
);
export const MenuIconWrapper = styled(Box)(
  {
    'div': {
      width: '20px',
      height: '2px',
      background: 'white',
      margin: theme.space[1],
    },
  },
  mediaQuery({
    display: ['', '', 'none'],

  })
);
