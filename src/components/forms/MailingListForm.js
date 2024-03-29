import PropTypes from 'prop-types';
import {Flex} from '../../shared';
import {FormWrapper} from './styled';

export default function MailingListForm({isOpenNav}) {
  return(
    <FormWrapper isOpenNav={isOpenNav}>
      <Flex justifyContent={'end'}>mailing list:</Flex>
      <form 
        name='mailing-list' 
        method='POST' 
        data-netlify='true'
      >
        <input type='hidden' name='form-name' value='mailing-list' />
        <input 
          type='text' 
          name='city' 
          placeholder='your city' 
          required />
        <input 
          type='email' 
          name='email' 
          placeholder='your@e-mail' 
          required />
        <button type='submit'>join</button>
      </form>
    </FormWrapper>
  );
}

MailingListForm.propTypes = {
  isOpenNav: PropTypes.bool,
};
