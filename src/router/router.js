import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import {
  Bio,
  Contact,
  Discography,
  Home,
  Links,
  Photos,
  Press,
  Videos
} from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/bio',
        element: <Bio name={'Bio'}/>,
      },
      {
        path: '/contact',
        element: <Contact name={'Contact'}/>,
      },
      {
        path: '/discography',
        element: <Discography name={'Disco'}/>,
      },
      {
        path: '/',
        element: <Home name={'Home'}/>,
      },
      {
        path: '/links',
        element: <Links name={'Links'}/>,
      },
      {
        path: '/photos',
        element: <Photos name={'Photos'}/>,
      },
      {
        path: '/press',
        element: <Press name={'Press'}/>,
      },
      {
        path: '/videos',
        element: <Videos name={'Videos'}/>,
      },
    ],
  }
])
export const routes = router.routes[0].children
export default router;