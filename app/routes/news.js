import Ember from 'ember';
import ENV from 'hacker-news/config/environment';

export default Ember.Route.extend({
  // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

  
  model: function(params) {
    var _this = this;    
    var page = params.page || 1;
    var limit = 30;

    return this.store.findAll('topstory');
  }


  // model: function(params) {
  //   var _this = this;    
  //   var url = 'https://hacker-news.firebaseio.com/v0/topstories.json';

  //   var page = params.page || 1;
  //   var limit = 30;

  //   return Ember.$.getJSON(url).then(function(data) {
  //     var promises = [];

  //     data = data.slice(0, limit);

  //     data.forEach(function(item) {
  //       promises.push(_this.store.find('item', item));
  //     });
      
  //     return Ember.RSVP.Promise.all(promises);
  //   });    
  // }


});


