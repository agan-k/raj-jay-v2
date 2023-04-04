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
        element: <Bio />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/discography',
        element: <Discography />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/links',
        element: <Links />,
      },
      {
        path: '/photos',
        element: <Photos />,
      },
      {
        path: '/press',
        element: <Press />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
    ],
  }
])
export const routes = router.routes[0].children
export default router;