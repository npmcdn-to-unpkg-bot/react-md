import App from 'containers/App';

export default {
  path: '/',
  component: App,
  getIndexRoute(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, {
          component: require('containers/Home').default,
        });
      });
    } else {
      cb(null, {
        component: require('containers/Home').default,
      });
    }
  },
  getChildRoutes(location, cb) {
    if (__CLIENT__) {
      require.ensure([], require => {
        cb(null, [
          require('./GettingStarted').default,
          require('./Customization').default,
          require('./DiscoverMore').default,
          require('./Components').default,
          require('./NotFoundRoute').default,
        ]);
      });
    } else {
      cb(null, [
        require('./GettingStarted').default,
        require('./Customization').default,
        require('./DiscoverMore').default,
        require('./Components').default,
        require('./NotFoundRoute').default,
      ]);
    }
  },
};
