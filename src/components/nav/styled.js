import styled from 'styled-components';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';
import {Box} from '../../shared';

export const NavWrapper = styled(Box)(
  {
    height: props => (props.isOpen ? '100%' : '0px'),
    overflow: 'hidden',
  },
  mediaQuery({
    display: ['block', 'block', 'flex'],
    flexWrap: 'wrap',
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
