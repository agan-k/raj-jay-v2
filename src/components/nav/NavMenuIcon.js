import PropTypes from 'prop-types';
import {MenuIconWrapper} from './styled';

export default function NavMenuIcon({toggleNav, location}) {
  return (
    <MenuIconWrapper location={location} onClick={() => toggleNav()}>
      <div></div>
      <div></div>
      <div></div>
    </MenuIconWrapper>
  );
};
NavMenuIcon.propTypes = {
  toggleNav: PropTypes.func,
  location: PropTypes.string,
};
