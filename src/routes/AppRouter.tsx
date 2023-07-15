import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { MainApp } from '../pages/MainApp';
import { ShoppingPage } from '../02-component-patterns/pages';
  
const browserRouter = createBrowserRouter([
  {
    element: <MainApp />,
    children: [
      {
        path: '/',
        element: <ShoppingPage />,
      },
      {
        path: '/about',
        element: <h1 className='text-white'>About page</h1>,
      },
      {
        path: '/users',
        element: <h1 className='text-white'>Users page</h1>,
      },
      {
        path: '/*',
        element: <ErrorPage />
      },
    ],
  },
  // {
  //   path: '/*',
  //   element: <Navigate to='/' replace/>
  // }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={browserRouter} />
  );
};
