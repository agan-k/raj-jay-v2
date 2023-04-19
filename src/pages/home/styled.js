import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';
export const MasonryWrapper = styled(Box)(
  {
    '.my-masonry-grid': {
      display: '-webkit-box',
      display: '-ms-flexbox',
      display: 'flex',
      marginLeft: - theme.space[4], /* gutter size offset */
      width: 'auto',
    },
    '.my-masonry-grid_column': {
      paddingLeft: theme.space[4], /* gutter size */
      backgroundClip: 'padding-box',
    },

  },
  mediaQuery(
    {}
  )
);
export const FeedItemWrapper = styled(Box)(
  {},
  mediaQuery(
    {
      background: theme.colors.dimGray,
      border: `1px solid ${theme.colors.muted}`,
      // borderRadius: '5px',
      marginBottom: theme.space[4],
      padding: theme.space[2],
    }
  )
);
export const FeedWrapper = styled(Box)(
  {
  },
  mediaQuery(
    {
    }
  )
);
