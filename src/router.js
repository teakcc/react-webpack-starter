import Home from './pages/home';
import Components from './pages/components';
import Documents from './pages/documents';
// import Contact from './pages/contact';
import Login from './pages/login';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/components',
    component: Components,
  },
  {
    path: '/documents',
    component: Documents,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default routes;
