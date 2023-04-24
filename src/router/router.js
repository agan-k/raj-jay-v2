import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {
  Bio,
  Contact,
  Discography,
  Home,
  Links,
  News,
  Photos,
  Press,
  Shows,
  Videos,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home name={'home'}/>,
      },
      {
        path: '/news',
        element: <News name={'news'}/>,
      },
      {
        path: '/bio',
        element: <Bio name={'bio'}/>,
      },
      {
        path: '/shows',
        element: <Shows name={'shows'}/>,
      },
      {
        path: '/discography',
        element: <Discography name={'discography'}/>,
      },
      {
        path: '/photos',
        element: <Photos name={'photos'}/>,
      },
      {
        path: '/videos',
        element: <Videos name={'videos'}/>,
      },
      {
        path: '/press',
        element: <Press name={'press'}/>,
      },
      {
        path: '/contact',
        element: <Contact name={'contact'}/>,
      },
      {
        path: '/links',
        element: <Links name={'links'}/>,
      },
    ],
  },
]);
export const routes = router.routes[0].children.map((item) => {
  return {
    path: item.path,
    id: item.id,
    name: item.element.props.name,
  };
});
export default router;
