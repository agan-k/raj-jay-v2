import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const FormWrapper = styled(Box)(
  {
    gap: '5px',
    justifyContent: 'end',
    input: {
      border: 'none',
      outline: 'none',
      color: theme.colors.dimGray,
      fontStyle: 'italic',
      background: theme.colors.lightGray,
    },
    'input::placeholder': {
      color: theme.colors.dimGray,
      fontStyle: 'italic',
    },
    button: {
      background: theme.colors.lightGray,
      border: 'none',
      color: theme.colors.dimGray,
    },
    form: {
      display: 'flex',
      alignItems: 'end',
      gap: '5px',
    },
  },
  mediaQuery({
    display: [
      props => (props.isOpenNav ? 'flex' : 'none'), 
      'block', 
      'flex',
    ],
    form: {
      flexDirection: ['column', 'column', 'row'],
    },
  })
);
