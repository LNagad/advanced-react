import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    name: string,
    path: string,
    element: JSXComponent | LazyExoticComponent<JSXComponent>
}

const LazyLayout = lazy(() => import(/* webpackChunkName: LazyPage1 */'../01-lazyload/layout/LazyLayout'));
// const Lazy1 = lazy(() => import(/* webpackChunkName: LazyPage1 */'../01-lazyload/pages/LazyPage1'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: LazyPage2 */'../01-lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: LazyPage3 */'../01-lazyload/pages/LazyPage3'));


export const routes: Route[] = [
   {
      path: '/lazyload/*',
      to: '/lazyload/',
      name: 'Lazy layout',
      element: LazyLayout
   },
   {
      path: 'no-lazy',
      to: '/no-lazy',
      name: 'No lazy',
      element: NoLazy
   },
//    {
//       to: '/*',
//       name: 'Error',
//       path: '/*',
//       element: ErrorPage
//    },
];