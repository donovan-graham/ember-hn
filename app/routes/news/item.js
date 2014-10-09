import Ember from 'ember';

export default Ember.Route.extend({

  // Reference 
  // http://insin.github.io/react-hn/#/story/8434128
  // https://news.ycombinator.com/item?id=8434128
  // https://hacker-news.firebaseio.com/v0/item/8434128.json?print=pretty

  // TODO Need to work on the comments link url ... slightly different content than story ?
  // TODO Need to work on the user link url ... slightly different content than story ?

  model: function(params) {
    return this.store.find('item', params.item_id);
  }
});
