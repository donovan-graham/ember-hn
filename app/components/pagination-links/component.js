import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  // classNameBindings: [':pagination', 'isVisible::hide'],

  page: 1,
  itemsPerPage: 30,
  totalItems: null,
  routeName: '',

  totalPages: Ember.computed('totalItems', 'itemsPerPage', function() {
    if (this.get('totalItems')) {
      return Math.ceil(this.get('totalItems') / this.get('itemsPerPage'));
    } else {
      return 1;
    }
  }),

  // isVisible: Ember.computed.gte('totalPages', 2),

  prevPage: Ember.computed('totalPages', 'page', function() {
    var prev = parseInt(this.get('page'), 10) - 1;
    return (1 <= prev && prev < this.get('totalPages')) ? prev : null;
  }),

  disablePrevPage: Ember.computed.none('prevPage'),

  nextPage: Ember.computed('totalPages', 'page', function() {
    var next = parseInt(this.get('page'), 10) + 1;
    return (1 < next && next <= this.get('totalPages')) ? next : null;
  }),

  disableNextPage: Ember.computed.none('nextPage'),

  pages: Ember.computed('totalPages', function() {
    var pages = [];
    for (var i=1; i <= this.get('totalPages'); i++) {
      pages.push(i);
    }
    return pages;
  })
});
