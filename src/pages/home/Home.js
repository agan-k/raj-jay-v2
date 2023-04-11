import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
import {Box} from '../../shared';

export default function Home() {
  const feedData = useAllPrismicDocumentsByType('feed_item');
  console.log(feedData);
  const feed = feedData[0]?.map(item =>
    <Box key={item.id}>
      <p>{item.data.date}</p>
      <img src={item.data.image.url} width={'200px'} />
      <h2>{item.data.title}</h2>
      <PrismicRichText field={item.data.description} />
    </Box>
  );
  return (
    <>
      <h1>Home</h1>
      {feed}
    </>
  ); 
}
