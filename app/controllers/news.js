import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  limit: 30,

  stories: Ember.computed.alias('model'),

  totalPages: function() {
    if (this.get('stories.length')) {
      return Math.ceil(this.get('stories.length') / this.get('limit'));
    } else {
      return 1;
    }
  }.property('stories.length', 'limit'),

  pagination: function() {
    var pages = [];
    for (var i=1; i <= this.get('totalPages'); i++) {
      pages.push(i);
    }
    return pages;
  }.property('totalPages'),

  prevPage: function() {
    var prev = parseInt(this.get('page'), 10) - 1;
    return (1 <= prev && prev < this.get('totalPages')) ? prev : null;
  }.property('totalPages', 'page'),

  nextPage: function() {
    var next = parseInt(this.get('page'), 10) + 1;
    return (1 < next && next <= this.get('totalPages')) ? next : null;
  }.property('totalPages', 'page'),

  paginatedStories: function() {
    var page = parseInt(this.get('page'), 10);
    var start = Math.max(0, (page - 1) * this.get('limit'));
    var end = start + this.get('limit');
    return this.get('stories').slice(start, end);     
  }.property('stories.@each', 'page', 'limit'),

});
