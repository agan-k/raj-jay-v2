import styled from 'styled-components';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

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
