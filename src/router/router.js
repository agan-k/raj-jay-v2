import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {
  Bio,
  Contact,
  Discography,
  Home,
  Links,
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
        element: <Home name={'Home'}/>,
      },
      {
        path: '/bio',
        element: <Bio name={'Bio'}/>,
      },
      {
        path: '/discography',
        element: <Discography name={'Discography'}/>,
      },
      {
        path: '/shows',
        element: <Shows name={'Shows'}/>,
      },
      {
        path: '/photos',
        element: <Photos name={'Photos'}/>,
      },
      {
        path: '/videos',
        element: <Videos name={'Videos'}/>,
      },
      {
        path: '/press',
        element: <Press name={'Press'}/>,
      },
      {
        path: '/contact',
        element: <Contact name={'Contact'}/>,
      },
      {
        path: '/links',
        element: <Links name={'Links'}/>,
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
