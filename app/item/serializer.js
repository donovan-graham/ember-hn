import Ember from 'ember';
import DS from 'ember-data';

export default DS.FirebaseSerializer.extend({

  /*
    Relationships `hasMany` are already in array format. E.g.
    {
      "kids" : [ 9707750, 9708001 ],
    }
  */
  normalizeRelationships(modelClass, payload) {
    modelClass.eachRelationship((key, meta) => {
      if (meta.kind === 'hasMany') {
        if (!payload.hasOwnProperty(key)) {
          payload[key] = [];
        }
      }
      if (meta.kind === 'belongsTo') {
        if (!payload.hasOwnProperty(key)) {
          payload[key] = null;
        }
      }
    });
  }

});