import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  // classNameBindings: [':pagination', 'isVisible::hide'],

  page: 1,
  itemsPerPage: 30,
  totalItems: null,
  routeName: '',

  totalPages: computed('totalItems', 'itemsPerPage', function() {
    if (this.get('totalItems')) {
      return Math.ceil(this.get('totalItems') / this.get('itemsPerPage'));
    } else {
      return 1;
    }
  }),

  // isVisible: computed.gte('totalPages', 2),

  prevPage: computed('totalPages', 'page', function() {
    let prev = parseInt(this.get('page'), 10) - 1;
    return (1 <= prev && prev < this.get('totalPages')) ? prev : null;
  }),

  disablePrevPage: computed.none('prevPage'),

  nextPage: computed('totalPages', 'page', function() {
    let next = parseInt(this.get('page'), 10) + 1;
    return (1 < next && next <= this.get('totalPages')) ? next : null;
  }),

  disableNextPage: computed.none('nextPage'),

  pages: computed('totalPages', function() {
    let pages = [];
    for (let i=1; i <= this.get('totalPages'); i++) {
      pages.push(i);
    }
    return pages;
  })
});
