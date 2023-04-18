import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavItem} from './styled';
import {Flex} from '../../shared';
import {externalLinks} from '../../constants';

export default function Nav() {
  const pageNavigation = routes.map((route) => 
    <NavItem key={route.id}>
      <Link to={route.path}>{route.name}</Link>
    </NavItem>
  );
  const externalNavigation = externalLinks.map((item) => 
    <NavItem key={item.name}>
      <Link to={item.url}>{item.name}</Link>
    </NavItem>
  );

  return(
    <Flex flexWrap={'wrap'}>
      {pageNavigation}
      {externalNavigation}
    </Flex>
  );
}
