import {createRoot} from 'react-dom/client';
import {RouterProvider} from 'react-router-dom';
import {PrismicProvider} from '@prismicio/react';
import {client} from './prismic';
import {router} from './router';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <PrismicProvider client={client}>
    <RouterProvider router={router} />
  </PrismicProvider>
);

//live reloading
if (module.hot) {
  module.hot.accept(function() {
    window.location.reload();
  });
}
