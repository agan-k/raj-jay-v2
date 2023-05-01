import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
import Masonry from 'react-masonry-css';
import {masonryBreakpoints} from '../../constants';
import {FeedItemWrapper, FeedWrapper, MasonryWrapper} from '../styled';
import {Box, SmallHeading} from '../../../shared';
import {theme} from '../../../theme';
import {pickRandomItem as pickRandomColor} from '../../../utils';
import TopRow from './TopRow';

export default function Feed() {
  const feedData = useAllPrismicDocumentsByType('feed_item', 
    {
      orderings: [
        {
          field: 'my.feed_item.date',
          direction: 'desc',
        },
      ],
    });
  
  const filteredFeedData = feedData[0]?.filter((item, index) => index > 1);

  let RECORD_LAST_BACKGROUND_COLOR = [''];

  const feed = filteredFeedData?.map((item) => {
    RECORD_LAST_BACKGROUND_COLOR.unshift(pickRandomColor({
      arr: theme.masonryBackgrounds, avoid: RECORD_LAST_BACKGROUND_COLOR[0]}));
    RECORD_LAST_BACKGROUND_COLOR.pop();
    const backgroundColor = RECORD_LAST_BACKGROUND_COLOR[0];

    return(
      <FeedItemWrapper 
        key={item.id} 
        backgroundColor={backgroundColor}
      >
        <Box p={2}>
          <img src={item.data.image.url} width={'100%'} />
          <SmallHeading>{item.data.date}</SmallHeading>
          <SmallHeading>{item.data.title}</SmallHeading>
          <PrismicRichText field={item.data.description}/>
        </Box>
      </FeedItemWrapper>
    );
  });
  
  return (
    <FeedWrapper>
      <TopRow feedData={feedData} />
      <MasonryWrapper>
        <Masonry
          breakpointCols={masonryBreakpoints(6)}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {feed}
        </Masonry>
      </MasonryWrapper>
    </FeedWrapper>
  ); 
}
