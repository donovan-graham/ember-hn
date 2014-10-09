import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('news', { path: 'news' }, function() {
    // this.route('index');
    this.route('item', { path: ":item_id" });
  });

  this.route('news/item');
});




export default Router;



