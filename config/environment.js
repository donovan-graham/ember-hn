/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hacker-news',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },


    // https://github.com/rwjblue/ember-cli-content-security-policy
    // http://content-security-policy.com/

    contentSecurityPolicy: {
      // 'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://cdn.firebase.com https://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseio.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' https://*.firebaseio.com wss://*.firebaseio.com",
      'img-src': "'self' res.cloudinary.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
    },
 
    firebase_instace: 'hacker-news',
    api_version: 'v0',
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  }

  return ENV;
};
