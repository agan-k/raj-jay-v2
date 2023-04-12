import {useSinglePrismicDocument, PrismicRichText} from '@prismicio/react';

export default function Bio() {
  //TODO: Validate fields
  const bioData = useSinglePrismicDocument('bio');
  const imageUrl = bioData[0]?.data.bio_image.url;
  const bio = bioData[0]?.data.bio;
  return (
    <>
      <h1>Bio</h1>
      <img src={imageUrl} width='100px' />
      <PrismicRichText field={bio} />
    </>

  );
}
