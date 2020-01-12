import React from 'react';
import Home from './pages/home';
// import Components from './pages/components';
// import Documents from './pages/documents';
// import Contact from './pages/contact';
import Login from './pages/login';
import DynamicImport from './components/DynamicImport';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/components',
    // component: Components,
    component: () => (
      <DynamicImport
        loader={() =>
          import(/* webpackChunkName: "components" */ './pages/components')
        }
        loading={<>loading...</>}
      />
    ),
  },
  {
    path: '/documents',
    // component: Documents,
    component: () => (
      <DynamicImport
        loader={() =>
          import(/* webpackChunkName: "documents" */ './pages/documents')
        }
        loading={<>loading...</>}
      />
    ),
  },
  {
    path: '/login',
    component: Login,
  },
];

export default routes;
