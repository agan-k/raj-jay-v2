import styled from 'styled-components';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const NavItem = styled('span')( 
  //https://css-tricks.com/navigation-in-lists-to-be-or-not-to-be/
  {
    padding: '5px',
    display: 'block',
    '.screen-reader': {
      display: 'none',
    },
  },
  mediaQuery({
    textAlign: ['right', 'right', 'unset'],
    a: {
      padding: [theme.space[2], theme.space[2], 'unset'],
    },
  })
);
