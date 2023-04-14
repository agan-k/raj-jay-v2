import {useAllPrismicDocumentsByType, PrismicRichText} from '@prismicio/react';
import {Box, SmallHeading} from '../../shared';

export default function Discography() {
  const discographyData = useAllPrismicDocumentsByType('album', {
    orderings: [
      {
        field: 'my.album.release_date',
        direction: 'desc',
      },
    ],
  });

  const albums = discographyData[0]?.map((album) => {
    const lineup = album.data.lineup.map((l, index) =>
      <li key={l.name + index}>
        <span>{l.name}&nbsp;-&nbsp;</span>
        <span>{l.instrument}</span>
      </li>
    );
    const hasLineup = Boolean(album.data.lineup.length !== 0);
    const label = album.data.label || null;
    const notes = album.data.notes || null;
    const hasLabel = Boolean(album.data.label !== null);
    const hasNotes = Boolean(album.data.notes !== null);

    return (
      <Box key={album.id} mb={6} borderBottom={'1px solid grey'}>
        <img src={album.data.artwork.url}  width='200px'/>
        <SmallHeading mb={0}>{album.data.artist}</SmallHeading>
        <span>{album.data.title}</span>
        {hasLabel ?  <span>&nbsp;-&nbsp;{label}</span> : ''}
       
        {hasLineup ? <ul>{lineup}</ul> : ''}
        {hasNotes ? <PrismicRichText field={notes} /> : ''}
      </Box>
    );
  });
  
  return (
    <>
      <h1>Discography</h1>
      {albums}
    </>
  );
}
