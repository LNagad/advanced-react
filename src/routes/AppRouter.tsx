import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainApp } from '../pages/MainApp';
import { RegisterPage, FormikBasicPage } from '../03-forms/pages';
import { ErrorPage } from '../pages/ErrorPage';
  
const browserRouter = createBrowserRouter([
   {
      element: <MainApp />,
      children: [
         {
            path: '/register',
            element: <RegisterPage />,
         },
         {
            path: '/formik-basic',
            element: <FormikBasicPage />,
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
