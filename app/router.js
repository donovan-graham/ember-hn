import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('news', { path: 'news' });
  this.route('item', { path: "item/:item_id" });
  this.route('user', { path: "user/:user_id" });
});




export default Router;



