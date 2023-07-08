import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { MainApp } from '../pages/MainApp';

import { routes } from './routes';
import { Suspense } from 'react';

const browserRouter = createBrowserRouter([
   {
      element: <MainApp />,
      children: routes.map(({ path, element: Element }) => ({
         path,
         element: <Element />
      }))
   },
   {
      path: '/*',
      element: <Navigate to={ routes[0].to } replace/>
   }
]);

export const AppRouter = () => {
   return (
      <Suspense fallback={ <span>Loading...</span> }>
         <RouterProvider router={browserRouter} />
      </Suspense>
   );
};