import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const FormWrapper = styled(Box)(
  {
    display: 'flex',
    flex: '1 0 50%',
    justifyContent: 'end',
    input: {
      border: 'none',
      background: 'black',
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
  },
  mediaQuery({

  })
);
