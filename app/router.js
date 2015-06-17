import Ember from 'ember';
import config from 'hacker-news/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('topstories', { path: "new" });
  this.route('askstories', { path: "ask" });
  this.route('jobstories', { path: "job" });
  this.route('showstories', { path: "show" });

  this.route('item', { path: "item/:item_id" });
  this.route('user', { path: "user/:user_id" });

  this.route('info');
});

export default Router;