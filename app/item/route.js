import Ember from 'ember';

export default Ember.Route.extend({
  /*
    Reference:
    https://news.ycombinator.com/item?id=8434128
    https://hacker-news.firebaseio.com/v0/item/8434128
    https://hacker-news.firebaseio.com/v0/item/8434128.json?print=pretty
  */

  model(params) {
    return this.store.find('item', params.item_id);
  },

  setupController(controller, model) {
    this._super(controller, {});
    controller.set('item', model);
  }

});