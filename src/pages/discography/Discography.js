import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';

export default function Discography() {
  const discographyData = useAllPrismicDocumentsByType('album', {
    orderings: [
      {
        field: 'my.album.release_date',
        direction: 'desc',
      },
    ],
  });
  
  return (
    <h1>Discography</h1>
  );
}
