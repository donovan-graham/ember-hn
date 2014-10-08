import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
     // return this.store.find('item', params.item_id)
    return this.store.find('item', 8422599);
  }

  // https://news.ycombinator.com/item?id=8422599
  // https://hacker-news.firebaseio.com/v0/item/8422599
  // https://hacker-news.firebaseio.com/v0/item/8422599.json?print=pretty
});
