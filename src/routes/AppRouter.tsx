import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { MainApp, ErrorPage } from '../pages/';
import { RegisterFormikHook } from '../03-forms/pages/RegisterFormikHook';
import {
   RegisterPage,
   FormikBasicPage,
   FormikComponents,
   FormikYupPage,
   FormikAbstractation,
   RegisterFormikPage,
   DynamicForm,
} from '../03-forms/pages';

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
            path: '/formik-yup',
            element: <FormikYupPage />,
         },
         {
            path: '/formik-components',
            element: <FormikComponents />,
         },
         {
            path: '/formik-abstractation',
            element: <FormikAbstractation />,
         },
         {
            path: '/formik-register',
            element: <RegisterFormikPage />,
         },
         {
            path: '/formik-abstractation-hook',
            element: <RegisterFormikHook />,
         },
         {
            path: '/dynamic-form',
            element: <DynamicForm />,
         },
         {
            path: '/users',
            element: <h1 className="text-white">Users page</h1>,
         },
         {
            path: '/',
            element: <Navigate to='/register' />,
         },
         {
            path: '/*',
            element: <ErrorPage />,
         },
      ],
   },
   // {
   //   path: '/*',
   //   element: <Navigate to='/' replace/>
   // }
]);

export const AppRouter = () => {
   return <RouterProvider router={browserRouter} />;
};
