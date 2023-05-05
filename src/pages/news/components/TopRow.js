import {PrismicRichText} from '@prismicio/react';
import PropTypes from 'prop-types';
import {theme} from '../../../theme';
import {Box, SmallHeading, LargeHeading} from '../../../shared';
import {FeedItemWrapper} from '../styled';
import {pickRandomItem as pickRandomColor} from '../../../utils';

export default function TopRow({feedData}) {
  const firstTwoItems = feedData[0]?.filter((item, index) => index < 2);

  let RECORD_LAST_BACKGROUND_COLOR = [''];
  const topItems = firstTwoItems?.map((item, index) => {
    RECORD_LAST_BACKGROUND_COLOR.unshift(pickRandomColor({
      arr: theme.masonryBackgrounds, 
      avoidConsecutive: RECORD_LAST_BACKGROUND_COLOR[0]}));
    RECORD_LAST_BACKGROUND_COLOR.pop();

    const backgroundColor = RECORD_LAST_BACKGROUND_COLOR[0];
    if(index === 0) {
      return(
        <FeedItemWrapper 
          className='first-feed-item'
          key={item.id} 
          flex={'1 0 60%'}
          backgroundColor={backgroundColor}
        >
          <Box display={['', '', 'flex']} alignSelf={'center'}>
            <Box p={[2, '', '']} className='first-feed-item-img'>
              <img src={item.data.image.url} width={'100%'} />
            </Box>
            <Box p={4} pt={0}>
              <SmallHeading>{item.data.date}</SmallHeading>
              <LargeHeading>{item.data.title}</LargeHeading>
              <PrismicRichText field={item.data.description}/>
            </Box>
  
          </Box>
        </FeedItemWrapper>
      );
    }

    return(
      <FeedItemWrapper 
        key={item.id} 
        flex={'1 0 10%'}
        backgroundColor={backgroundColor}
      >
        <Box p={4}>
          <Box maxHeight={'300px'} overflow={'hidden'}>
            <img src={item.data.image.url} width={'100%'} />
          </Box>
          <SmallHeading>{item.data.date}</SmallHeading>
          <SmallHeading>{item.data.title}</SmallHeading>
          <PrismicRichText field={item.data.description}/>
        </Box>
      </FeedItemWrapper>
    );
  });
  
  return (
    <Box display={['', '', 'flex']} className='top-feed'>
      {topItems}
    </Box>
  );
}

TopRow.propTypes = {
  feedData: PropTypes.array,
};
