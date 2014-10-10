import Ember from 'ember';
import ENV from 'hacker-news/config/environment';

export default Ember.Route.extend({
  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

  model: function() {
    var _this = this;    
    var url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

    return Ember.$.getJSON(url).then(function(data) {
      var promises = [];

      var data = data.slice(0, 29);

      data.forEach(function(item) {
        promises.push(_this.store.find('item', item));
      });
      
      return Ember.RSVP.Promise.all(promises);
    });
    
  }
});


