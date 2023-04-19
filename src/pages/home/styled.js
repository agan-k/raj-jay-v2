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
      paddingLeft: theme.space[1], /* gutter size */
      backgroundClip: 'padding-box',
    },

  },
  mediaQuery(
    {}
  )
);
export const FeedItemWrapper = styled(Box)(
  {
    p: {
      fontFamily: 'Open Sans',
      fontSize: theme.fontSizes[0],
    },
  },
  mediaQuery(
    {
      background: theme.colors.muted,
      color: 'black',
      // border: `1px solid ${theme.colors.muted}`,
      marginBottom: theme.space[1],
      // padding: theme.space[4],
      // paddingTop: theme.space[1],
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
