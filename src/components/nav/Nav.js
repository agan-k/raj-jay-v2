import {Link} from 'react-router-dom';
import {routes} from '../../router';
import {NavItem} from './styled';
import {Box} from '../../shared';
import {SOCIAL_LINKS, STORE_URL} from '../../constants';

export default function Nav() {
  const pageNavigation = routes.map((route) => 
    <NavItem key={route.id}>
      <Link to={route.path}>{route.name}</Link>
    </NavItem>
  );
  const social = SOCIAL_LINKS.map((item) => 
    <NavItem key={item.name}>
      <Link to={item.url} className={item.faClassName}>
        <span className='screen-reader'>{item.name}</span>
      </Link>
    </NavItem>
  );

  return(
    <Box display={['block', 'block', 'flex']} flexWrap={'wrap'}>
      <Box display={['block', 'block', 'flex']}>
        {pageNavigation}
        <NavItem>
          <Link to={STORE_URL}>store</Link>
        </NavItem>
      </Box>
      <Box display={'flex'} justifyContent={'end'}>
        {social}
      </Box>
    </Box>
  );
}
