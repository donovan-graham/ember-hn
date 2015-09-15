import Ember from 'ember';

export default Ember.Route.extend({

  // https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty

  model() {
    return this.store.findAll('showstories');
  },

  setupController(controller, model) {
    this._super(controller, {});
    controller.set('stories', model);
  }

});