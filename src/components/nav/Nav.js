import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavItem} from './styled';
import {Box} from '../../shared-primitives';

export default function Nav() {
  const navigation = routes.map((route) => 
    <NavItem key={route.id}>
      <Link to={route.path}>{route.element.props.name}</Link>
    </NavItem>
  );

  return(
    <Box>{navigation}</Box>
  );
}
