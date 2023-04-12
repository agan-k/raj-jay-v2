import {useAllPrismicDocumentsByType} from '@prismicio/react';
import {Box, Text} from '../../shared';

export default function Shows() {
  const showsData = useAllPrismicDocumentsByType('event', {
    orderings: [
      {
        field: 'my.event.timestamp',
        direction: 'asc',
      },
    ],
  });
  //TODO: validate fields
  //TODO: Render automatically upcoming events in one component and
  // past (expired) in separate component below
  const events = showsData[0]?.map((event) => {
    const lineup = event.data.lineup.map((l, index) => 
      <li key={l.name + index}>
        <span>{l.name}&nbsp;-&nbsp;</span>
        <span>{l.instrument}</span>
      </li>
    );
    const hasLineup = Boolean(event.data.lineup.length !== 0);
    const hasMap = Boolean(event.data.map.url !== null);
    return (
      <Box 
        key={event.id} 
        pb={4} 
        maxWidth={'300px'} 
        borderBottom={'1px solid grey'}
      >
        <Text my={2}>{event.data.timestamp}</Text>
        <Text my={2}>{event.data.venue}</Text>
        <Text my={2}>{event.data.headliner}</Text>
        {hasLineup ? lineup : ''}
        <Box mt={4}>
          <span>{event.data.city},&nbsp;</span>
          <span>{event.data.country}</span>
        </Box>
        {hasMap ? <a href={event.data.map.url}>map</a> : ''}
      </Box>
    );
  });

  return (
    <>
      <h1>Shows</h1>
      {events}
    </>
  );
}
