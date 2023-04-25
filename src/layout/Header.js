import PropTypes from 'prop-types';
import {Nav} from '../components/nav';
import {MailingListForm} from '../components/forms';
import {Flex, Box} from '../shared';
import {HeaderWrapper, MenuIconWrapper} from './styled';

export default function Header({location}) {

  const MenuIcon = () => {
    return (
      <MenuIconWrapper>
        <div></div>
        <div></div>
        <div></div>
      </MenuIconWrapper>
    );
  };

  return (
    <HeaderWrapper location={location}>
      <Box 
        display={['block', 'block', 'flex']} 
        justifyContent={'space-between'}
      >
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          RAJIV JAYAWEERA
          <MenuIcon />
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
