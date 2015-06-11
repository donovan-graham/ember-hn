import Ember from 'ember';

export default Ember.Mixin.create({

  queryParams: ['page'],

  page: 1,
  itemsPerPage: 30,

  paginate: null, // over-ride on controller

  observePage: Ember.observer('page', function() {
    Ember.run.scheduleOnce('afterRender', this, this.scrollTop);
  }),

  scrollTop: function() {
    // window.scrollTo(0,0);
    var timing = this.get('paginated.length') * 8;
    Ember.$('html,body').animate({ scrollTop: 0 }, timing); // 'swing'
  },

  resultsForPage: Ember.computed('paginate.[]', 'page', 'itemsPerPage', function() {
    var page = parseInt(this.get('page'), 10);
    var start = Math.max(0, (page - 1) * this.get('itemsPerPage'));
    var end = Math.min(start + this.get('itemsPerPage'), this.get('paginate.length'));
    return this.get('paginate').slice(start, end);
  }),

});