import {useState} from 'react';
import PropTypes from 'prop-types';
import {Nav, NavMenuIcon} from '../components/nav';
import {MailingListForm} from '../components/forms';
import {Flex, Box} from '../shared';
import {HeaderWrapper} from './styled';

export default function Header({location}) {
  const [isOpenNav, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpenNav);
  }

  return (
    <HeaderWrapper location={location}>
      <Box 
        display={['block', 'block', 'flex']} 
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          RAJIV JAYAWEERA
          <NavMenuIcon location={location} toggleNav={toggleNav} />
        </Flex>
        <Nav isOpenNav={isOpenNav} toggleNav={toggleNav} />
      </Box>
      <Flex justifyContent={'end'}>
      </Flex>
      <MailingListForm isOpenNav={isOpenNav} />
    </HeaderWrapper>
  );
}

Header.propTypes = {
  location: PropTypes.string,
};
