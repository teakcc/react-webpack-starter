import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/login',
    component: Login
  }
];

export default routes;
