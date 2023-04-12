import {useAllPrismicDocumentsByType} from '@prismicio/react';
import {Box} from '../../shared';

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
      <Box m={4}>{publicists}</Box>
      <Box m={4}>
        <form name='contact' method='POST' data-netlify='true'>
          <input type="hidden" name="form-name" value="contact" />
          <input type='text' name='name' placeholder='name' />      
          <input type='email' name='email' placeholder='e-mail' />      
          <textarea name='message'></textarea>
          <br/>     
          <button type='submit'>Send</button>
        </form>
      </Box>
    </>
  );
}
