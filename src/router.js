import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '/contact',
    component: Contact
  }
];

export default routes;
