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
      marginLeft: - theme.space[1], /* gutter size offset */
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
      marginBottom: theme.space[1],
    }
  )
);
    
export const FeedWrapper = styled(Box)(
  {
    '.top-feed': {
      gap: theme.space[1],
    },
  },
  mediaQuery(
    {
    }
  )
);
