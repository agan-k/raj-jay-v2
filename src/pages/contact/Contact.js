import {useAllPrismicDocumentsByType} from "@prismicio/react";
import {Box} from "../../shared";

export default function Contact() {
  const publicityData = useAllPrismicDocumentsByType('publicist');

  const publicists = publicityData[0]?.map((publicist) =>
    <Box key={publicist.id}>
      <span>{publicist.data.name}</span>
      <span>{publicist.data.region}&nbsp;publicity:&nbsp;</span>
      <a href={publicist.data.url}>contact</a>
    </Box>
  );
  return (
    <>
      <h1>Contact</h1>
      <Box m={4}>
        {publicists}
      </Box>
    </>
  );
}
