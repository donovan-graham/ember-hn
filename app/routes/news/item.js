import Ember from 'ember';

export default Ember.Route.extend({
  // https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
  model: function(params) {
    return this.store.find('item', params.item_id);
    // .then(function(item) {  
    //   return item.get('by').then(function(user){
    //     return item;
    //   });
    // });
  }
});
