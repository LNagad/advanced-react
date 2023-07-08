import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;
interface Route {
    to: string,
    name: string,
    path: string,
    element: JSXComponent | LazyExoticComponent<JSXComponent>
}

export const routes: Route[] = [
   {
      to: '/lazy1',
      path: 'lazy1',
      name: 'Lazy 1',
      element: lazy(() => import(/* webpackChunkName: LazyPage1 */'../01-lazyload/pages/LazyPage1'))
   },
   {
      to: '/lazy2',
      path: 'lazy2',
      name: 'Lazy 2',
      element: lazy(() => import(/* webpackChunkName: LazyPage2 */'../01-lazyload/pages/LazyPage2'))
   },
   {
      to: '/lazy3',
      path: 'lazy3',
      name: 'Lazy 3',
      element: lazy(() => import(/* webpackChunkName: LazyPage3 */'../01-lazyload/pages/LazyPage3'))
   },   
//    {
//       to: '/*',
//       name: 'Error',
//       path: '/*',
//       element: ErrorPage
//    },
];