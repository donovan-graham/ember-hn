import Ember from 'ember';
import DS from 'ember-data';

export default DS.FirebaseSerializer.extend({
  normalizeHasMany: function(typeClass, hash, relationship) {
    // we sometimes get an empty dict for kids and we want an array, 'kids' : {}
    var key = relationship.key;
    if (!Ember.isArray(hash[key])) {
      hash[key] = [];
    }
  }
});