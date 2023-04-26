import PropTypes from 'prop-types';
import {Nav, NavMenuIcon} from '../components/nav';
import {MailingListForm} from '../components/forms';
import {Flex, Box} from '../shared';
import {HeaderWrapper} from './styled';

export default function Header({location}) {

  return (
    <HeaderWrapper location={location}>
      <Box 
        display={['block', 'block', 'flex']} 
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          RAJIV JAYAWEERA
          <NavMenuIcon />
        </Flex>
        <Nav />
      </Box>
      <Flex justifyContent={'end'}>
      </Flex>
      <MailingListForm />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  location: PropTypes.string,
};
