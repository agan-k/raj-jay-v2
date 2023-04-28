import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
import Masonry from 'react-masonry-css';
import {masonryBreakpoints} from '../constants';
import {FeedItemWrapper, FeedWrapper, MasonryWrapper} from './styled';
import {Box, Flex} from '../../shared';

export default function News() {
  const feedData = useAllPrismicDocumentsByType('feed_item', 
    {
      orderings: [
        {
          field: 'my.feed_item.date',
          direction: 'desc',
        },
      ],
    });

  const filteredFeedData = feedData[0]?.filter((item, index) => index > 2);
  const firstThreeItems = feedData[0]?.filter((item, index) => index < 3);
  const topItems = firstThreeItems?.map((item, index) => {
    if(index > 0) {
      return(
        <FeedItemWrapper key={item.id} flex={'1 0 10%'}>
          <Box maxHeight={'300px'} overflow={'hidden'}>
            <img src={item.data.image.url} width={'100%'} />
          </Box>
          <Box p={4} pt={0}>
            <h3>{item.data.date}</h3>
            <h2>{item.data.title}</h2>
            <PrismicRichText field={item.data.description}/>
          </Box>
        </FeedItemWrapper>
      );
    }
    return(
      <FeedItemWrapper key={item.id} display={'flex'} flex={'1 0 60%'} >
        <Box maxHeight={'300px'} overflow={'hidden'}>
          <img src={item.data.image.url} width={'100%'} />
        </Box>
        <Box p={4} pt={0}>
          <h3>{item.data.date}</h3>
          <h2>{item.data.title}</h2>
          <PrismicRichText field={item.data.description}/>
        </Box>
      </FeedItemWrapper>
    );
  }
  );
  const TopFeedRow = () => {
    return (
      <Flex className="top-feed">
        {topItems}
      </Flex>
    );
  };

  const feed = filteredFeedData?.map((item) =>
    <FeedItemWrapper key={item.id}>
      <img src={item.data.image.url} width={'100%'} />
      <Box p={4} pt={0}>
        <h3>{item.data.date}</h3>
        <h2>{item.data.title}</h2>
        <PrismicRichText field={item.data.description}/>
      </Box>
    </FeedItemWrapper>
  );
  
  return (
    <FeedWrapper>
      <h1>News:</h1>
      <TopFeedRow />
      <MasonryWrapper>
        <Masonry
          breakpointCols={masonryBreakpoints(6)}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {feed}
          {/* {feed} */}
        </Masonry>
      </MasonryWrapper>
    </FeedWrapper>
  ); 
}
