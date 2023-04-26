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
    position: 'fixed',
    left: '10px',
    right: '10px',
    top: '0',
  },
  mediaQuery({
    background: [
      props => (props.location === '/' ? 'black' : 'white'),
      props => (props.location === '/' ? 'black' : 'white'),
      'none',
    ],
    'a:hover': {
      color: ['', '', theme.colors.primary],
    },
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
