import Ember from 'ember';
import config from 'hacker-news/config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news', { path: 'news' });
  this.route('item', { path: "item/:item_id" });
  this.route('user', { path: "user/:user_id" });

  this.route('askstories');
  this.route('jobstories');
  this.route('showstories');
  this.route('topstories');
});

export default Router;