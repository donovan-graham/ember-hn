import Ember from 'ember';

export default Ember.Route.extend({
 // https://hacker-news.firebaseio.com/v0/item/8434128
  model: function(params) {
    return this.store.find('item', params.item_id);
  }
});