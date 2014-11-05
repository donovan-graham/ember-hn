import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.belongsTo('item', { async: true }),

  rank: function() {
    return parseInt(this.get('id'), 10) + 1;
  }.property('id'),

});


