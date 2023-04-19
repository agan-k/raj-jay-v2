import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
import Masonry from 'react-masonry-css';
import {masonryBreakpoints} from '../constants';
import {FeedItemWrapper, FeedWrapper, MasonryWrapper} from './styled';
import {Box} from '../../shared';

export default function Home() {
  const feedData = useAllPrismicDocumentsByType('feed_item', 
    {
      orderings: [
        {
          field: 'my.feed_item.date',
          direction: 'desc',
        },
      ],
    });
  const feed = feedData[0]?.map((item) =>
    <FeedItemWrapper key={item.id} className='feed-item'>
      <img src={item.data.image.url} width={'100%'} />
      <Box p={4} pt={0}>
        <h3>{item.data.date}</h3>
        <h2>{item.data.title}</h2>
        <PrismicRichText field={item.data.description}/>

      </Box>
    </FeedItemWrapper>
  );
  
  return (
    <FeedWrapper pt={'250px'}>
      <MasonryWrapper>
        <Masonry
          breakpointCols={masonryBreakpoints(6)}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {feed}
          {feed}
        </Masonry>
      </MasonryWrapper>
    </FeedWrapper>
  ); 
}
