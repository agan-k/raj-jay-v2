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
      background: 'black',
      color: theme.colors.muted,
      fontStyle: 'italic',
    },
    'input::placeholder': {
      color: theme.colors.dimGray,
      fontStyle: 'italic',
    },
    button: {
      background: theme.colors.dimGray,
      border: 'none',
      color: theme.colors.muted,
    },
    form: {
      display: 'flex',
      alignItems: 'end',
      gap: '5px',
    },
  },
  mediaQuery({
    display: ['flex', 'block', 'flex'],
    form: {
      flexDirection: ['column', 'column', 'row'],
    },
  })
);
