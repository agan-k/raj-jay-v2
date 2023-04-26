import PropTypes from 'prop-types';
import {MenuIconWrapper} from './styled';

export default function NavMenuIcon({toggleNav}) {
  return (
    <MenuIconWrapper onClick={() => toggleNav()}>
      <div></div>
      <div></div>
      <div></div>
    </MenuIconWrapper>
  );
};
NavMenuIcon.propTypes = {
  toggleNav: PropTypes.func,
};
