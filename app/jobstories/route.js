import Ember from 'ember';

export default Ember.Route.extend({

  // https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty

  model: function() {
    return this.store.findAll('jobstories');
  },

  setupController(controller, model) {
    this._super(controller, {});
    controller.set('stories', model);
  }

});