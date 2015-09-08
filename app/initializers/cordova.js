import Ember from 'ember';
import config from 'hacker-news/config/environment';

const { run, warn } = Ember;

export default {
  name: 'cordova',
  fallbackTimer: null,

  initialize(container, application) {
    if (config.environment === 'test') {
      return;
    }
    if (!cordova) {
      return;
    }

    application.deferReadiness();
    this.fallbackTimer = run.later(this, this.fallbackEvent.bind(this), 3000);
    document.addEventListener('deviceready', this.deviceReady.bind(this, application), false);
  },

  fallbackEvent() {
    let evt = new Event('deviceready');
    document.dispatchEvent(evt);
  },

  deviceReady(application) {
    run.cancel(this.fallbackTimer);
    if (cordova && cordova.InAppBrowser && cordova.InAppBrowser.open) {
      window.open = cordova.InAppBrowser.open;
    }
    application.advanceReadiness();
  }

};
