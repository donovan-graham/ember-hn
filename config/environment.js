/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
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

    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: { }
    },

    APP: { },
  };

  ENV.stubFirebase = true;

  if (environment === 'development') {
    // ENV.stubFirebase = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/ember-hn/';
  }

  return ENV;
};
