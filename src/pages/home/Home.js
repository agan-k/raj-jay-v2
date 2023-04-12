import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
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
  const feed = feedData[0]?.map(item =>
    <Box key={item.id}>
      <h3>{item.data.date}</h3>
      <h2>{item.data.title}</h2>
      <img src={item.data.image.url} width={'200px'} />
      <PrismicRichText field={item.data.description} />
      <hr></hr>
    </Box>
  );
  return (
    <>
      <h1>Home</h1>
      <h2>News:</h2>
      <hr></hr>
      {feed}
    </>
  ); 
}
