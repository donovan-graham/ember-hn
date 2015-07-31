import Ember from 'ember';

export default Ember.Route.extend({
  /*
    Reference:
    https://news.ycombinator.com/user?id=agumonkey
    https://hacker-news.firebaseio.com/v0/user/agumonkey
    https://hacker-news.firebaseio.com/v0/user/agumonkey.json?print=pretty
  */

  model: function(params) {
    return this.store.find('user', params.user_id);
  },

  setupController(controller, model) {
    this._super(controller, {});
    controller.set('user', model);
  }

});
