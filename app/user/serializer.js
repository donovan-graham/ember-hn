import DS from 'ember-data';

export default DS.FirebaseSerializer.extend({
  normalizeHasMany: function() {
    var key = relationship.key;
    if (!Ember.isArray(hash[key])) {
      hash[key] = [];
    }
  }
});