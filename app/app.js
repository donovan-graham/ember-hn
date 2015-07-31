import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import ENV from 'hacker-news/config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: ENV.modulePrefix,
  podModulePrefix: ENV.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, ENV.modulePrefix);

/*
Ember.deprecate = function(){};
Ember.warn = function(){};
*/

export default App;
