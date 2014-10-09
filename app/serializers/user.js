import DS from 'ember-data';

export default DS.FirebaseSerializer.extend({
  normalizeHasMany: function(type, hash, relationship) {
     return;
  }
});