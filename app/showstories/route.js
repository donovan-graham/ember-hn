import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    // https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty
    return this.store.find('showstories');
  }

});