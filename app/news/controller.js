import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.ArrayController.extend({
  queryParams: ['page'],
  page: 1,
  limit: 30,

  stories: alias('model'),

  observePage: Ember.observer('page', function() {
    window.scrollTo(0,0);
    // Ember.run.next(this, this._scrollTop);
  }),

  // _scrollTop: function() {
  //   var timing = this.get('paginatedStories.length') * 50;
  //   Ember.$('html,body').animate({ scrollTop: 0 }, timing, 'swing');
  // },

  totalPages: Ember.computed('stories.length', 'limit', function() {
    if (this.get('stories.length')) {
      return Math.ceil(this.get('stories.length') / this.get('limit'));
    } else {
      return 1;
    }
  }),

  pagination: Ember.computed('totalPages', function() {
    var pages = [];
    for (var i=1; i <= this.get('totalPages'); i++) {
      pages.push(i);
    }
    return pages;
  }),

  prevPage: Ember.computed('totalPages', 'page', function() {
    var prev = parseInt(this.get('page'), 10) - 1;
    return (1 <= prev && prev < this.get('totalPages')) ? prev : null;
  }),

  nextPage: Ember.computed('totalPages', 'page', function() {
    var next = parseInt(this.get('page'), 10) + 1;
    return (1 < next && next <= this.get('totalPages')) ? next : null;
  }),

  paginatedStories: Ember.computed('stories.@each', 'page', 'limit', function() {
    var page = parseInt(this.get('page'), 10);
    var start = Math.max(0, (page - 1) * this.get('limit'));
    var end = Math.min(start + this.get('limit'), this.get('stories.length'));
    return this.get('stories').slice(start, end);
  }),

});
