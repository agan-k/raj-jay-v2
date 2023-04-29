import styled from 'styled-components';
import {Box} from '../../shared';
import {mediaQuery} from '../../utils';
import {theme} from '../../theme';

export const MasonryWrapper = styled(Box)(
  {
    marginBottom: theme.space[7],
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
    color: 'black',
    marginBottom: theme.space[1],
    p: {
      fontFamily: 'Open Sans',
      fontSize: theme.fontSizes[0],
    },
  },
  mediaQuery(
    {
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
      '.first-feed-item': {
        display: ['', '', 'flex'],
        padding: ['', '', theme.space[5]],
        p: {
          fontSize: ['', '', theme.fontSizes[3]],
        },
        h1: {
          fontSize: ['', '', theme.fontSizes[5]],
        },
        h2: {
          fontSize: ['', '', theme.fontSizes[4]],
        },
        '.first-feed-item-img': {
          maxHeight: ['', '', '400px'],
          overflow: 'hidden',
        },
      },
    }
  )
);
