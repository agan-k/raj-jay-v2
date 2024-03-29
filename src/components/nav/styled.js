import styled from 'styled-components';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';
import {Box} from '../../shared';

export const NavWrapper = styled(Box)(
  {
    height: props => (props.isOpen ? '100%' : '0px'),
  },
  mediaQuery({
    display: ['block', 'block', 'flex'],
    flexWrap: 'wrap',
    height: [
      props => (props.isOpen ? '100%' : '0px'),
      props => (props.isOpen ? '100%' : '0px'),
      '100%',
    ],
    overflow: ['hidden', 'hidden', ''],
  })
);

export const NavItem = styled('span')( 
  //https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/
  {
    padding: '5px',
    paddingRight: '0',
    display: 'block',
    '.screen-reader': {
      display: 'none',
    },
    a: {
      padding: theme.space[1],
      paddingRight: '0',
    },
  },
  mediaQuery({
    textAlign: ['right', 'right', 'unset'],
  })
);

export const MenuIconWrapper = styled(Box)(
  {
    marginRight: -theme.space[1],
    marginTop: theme.space[1] -1,
    'div': {
      width: '20px',
      height: '1px',
      background: props => 
        (props.location === '/' ? theme.colors.muted : 'black'),
      margin: theme.space[2] -2,
    },
  },
  mediaQuery({
    display: ['', '', 'none'],

  })
);
