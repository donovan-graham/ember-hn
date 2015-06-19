/* jshint node: true */

module.exports = function(environment) {
  var config = {
    modulePrefix: 'hacker-news',
    environment: environment,
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://cdn.firebase.com https://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseio.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' https://*.firebaseio.com wss://*.firebaseio.com",
      'img-src': "'self' res.cloudinary.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
    },

    firebase: 'https://hacker-news.firebaseio.com/v0',

    baseURL: '/ember-hn/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // 'ember-routing-htmlbars-improved-actions': true,
        // 'ember-views-component-block-info': true,
        // 'ember-htmlbars-component-generation': true,
      }
    },

    APP: {
    },

  };

  config.stubFirebase = false;

  if (environment === 'development') {
     // config.stubFirebase = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    config.baseURL = '/';
    config.locationType = 'auto';

    // keep test console output quieter
    config.APP.LOG_ACTIVE_GENERATION = false;
    config.APP.LOG_VIEW_LOOKUPS = false;

    config.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return config;
};
