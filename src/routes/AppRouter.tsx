import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ErrorPage } from '../pages/ErrorPage';
import { MainApp } from '../pages/MainApp';
  
const browserRouter = createBrowserRouter([
   {
      element: <MainApp />,
      children: [
         {
            path: '/',
            element: <h1 className='text-white'>Home page</h1>,
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
