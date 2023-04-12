import {useAllPrismicDocumentsByType} from '@prismicio/react';
import {Box, Text} from '../../shared';

export default function Contact() {
  const publicityData = useAllPrismicDocumentsByType('publicist');
  const publicists = publicityData[0]?.map((publicist) =>
    <Box key={publicist.id}>
      <span>{publicist.data.name}</span>
      <span>{publicist.data.region}&nbsp;publicity:&nbsp;</span>
      <a href={publicist.data.link.url}>contact</a>
    </Box>
  );
  return (
    <>
      <h1>Contact</h1>
      <Box my={4}>
        {publicists}
      </Box>
      <Box my={4}>
        <Text mb={1}>Contact Rajiv Jayaweera:</Text>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact'/>
          <input 
            type='text' 
            name='name' 
            placeholder='your name - required'
            required 
            style={{width: '200px'}} />      
          <br/>   
          <br/>   
          <input 
            type='email' 
            name='email' 
            placeholder='your@e-mail - required'
            required 
            style={{width: '200px'}}/>     
          <br/>   
          <br/>   
          <textarea 
            name='message' 
            placeholder='your message - required'
            required 
            style={{width: '300px', height: '150px'}}></textarea>
          <br/>   
          <button type='submit'>Send</button>
        </form>
      </Box>
    </>
  );
}
