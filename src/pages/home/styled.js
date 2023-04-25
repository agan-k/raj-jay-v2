import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const HomeWrapper = styled(Box)(
  {
    color: theme.colors.muted,
  },
  mediaQuery(
    {
      // height: ['', '', '80vh'],
    }
  )
);
export const CTAWrapper = styled(Box)(
  {
    'a:any-link': {
      color: 'white',
    },
    'a:hover': {
      color: 'black',
    },
  },
  mediaQuery(
    {
      background: ['rgba(0, 0, 0, 0.7)', 'black', 'none'],
      display: ['', '', 'flex'],
      gap: ['', '', theme.space[5]],
      width: ['100%', '', '70%'],
      margin: ['', '', theme.space[6]],
      paddingTop: [theme.space[6], theme.space[6], ''],
      paddingBottom: [theme.space[6], theme.space[6], ''],
      img: {
        width: ['60%', '', '100%'],
      },
    }
  )
);
