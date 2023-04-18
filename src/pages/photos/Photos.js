import {useAllPrismicDocumentsByType} from '@prismicio/react';
import{Box} from '../../shared';

export default function Photos() {
  const photosData = useAllPrismicDocumentsByType('photo');
  const photos = photosData[0]?.map((photo) =>
    <img key={photo.id} src={photo.data.image.url} width="300px"/>
  );
  return (
    <Box mt={5}>{photos}</Box>
  );
}
