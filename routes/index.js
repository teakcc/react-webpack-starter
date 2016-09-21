/**
 * route config
 */

const routes = {
  childRoutes: [{
    path: '/',
    component: require('../pages/App').default,
    childRoutes: [{
      path: 'page1',
      getComponent: (location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../pages/page1').default);
        });
      }
    }, {
      path: 'page2',
      getComponent: (location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../pages/page2').default);
        });
      }
    }, {
      path: 'login',
      getComponent: (location, callback) => {
        require.ensure([], (require) => {
          callback(null, require('../pages/login').default);
        });
      }
    }]
  }]
};

export default routes;
