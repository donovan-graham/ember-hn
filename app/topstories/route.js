import Ember from 'ember';

export default Ember.Route.extend({

  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

  model: function() {
    return this.store.findAll('topstories');
  },

  setupController(controller, model) {
    this._super(controller, {});
    controller.set('stories', model);
  }

});