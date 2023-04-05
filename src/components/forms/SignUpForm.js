import {Text} from '../../shared';

export default function SignUpForm() {
  return(
    <>
      <Text>mailing list:</Text>
      <form 
        name='signup' 
        action='/formSubmission' 
        method='POST' 
        data-netlify='true'>
        <input type='hidden' name='form-name' value='signup' />
        <label htmlFor='yourcity' />
        <input type='text' name='city' id='yourcity' placeholder='city' />
        <label htmlFor='email' />
        <input type='email' name='email' id='youremail' placeholder='e-mail' />
        <button type='submit'>join</button>
      </form>
    </>
  );
}
