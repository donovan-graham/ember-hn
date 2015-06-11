import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.belongsTo('item', { async: true }),

  rank: Ember.computed('id', function() {
    return parseInt(this.get('id'), 10) + 1;
  }),

});