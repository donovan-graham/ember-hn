import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  limit: 30,

  nextPage: function() {
    var next = this.get('page');
    next =  parseInt(next, 10) + 1;
    return (0 < next && next < 5) ? next : null;
  }.property('page'),

  pageOffset: function() {
    return (this.get('page') - 1) * this.get('limit');
  }.property('page', 'limit')

});
