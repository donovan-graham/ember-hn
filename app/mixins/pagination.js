import Ember from 'ember';

const { observer, computed, run, $ } = Ember;

export default Ember.Mixin.create({

  queryParams: ['page'],

  page: 1,
  itemsPerPage: 30,

  paginate: null,

  observePage: observer('page', function() {
    run.scheduleOnce('afterRender', this, this.scrollTop);
  }),

  scrollTop() {
    let timing = this.get('paginated.length') * 8;
    $('html,body').animate({ scrollTop: 0 }, timing);
  },

  resultsForPage: computed('paginate.[]', 'page', 'itemsPerPage', function() {
    let page = parseInt(this.get('page'), 10);
    let start = Math.max(0, (page - 1) * this.get('itemsPerPage'));
    let end = Math.min(start + this.get('itemsPerPage'), this.get('paginate.length'));
    return this.get('paginate').slice(start, end);
  }),

});