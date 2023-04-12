import {Text} from '../../shared';

export default function MailingListForm() {
  return(
    <>
      <Text>mailing list:</Text>
      <form 
        name='mailing-list' 
        method='POST' 
        data-netlify='true'>
        <input type='hidden' name='form-name' value='mailing-list' />
        <input 
          type='text' 
          name='city' 
          placeholder='your city - required' 
          required />
        <input 
          type='email' 
          name='email' 
          placeholder='your@e-mail - required' 
          required />
        <button type='submit'>join</button>
      </form>
    </>
  );
}
