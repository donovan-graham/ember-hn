import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['comment-item'],

  comment: null,
  isExpanded: true,

  actions: {
    toggleExpanded: function() {
      this.toggleProperty('isExpanded');
    }
  }
});