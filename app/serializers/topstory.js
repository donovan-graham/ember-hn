import DS from 'ember-data';

export default DS.FirebaseSerializer.extend({

  // normalize: function(type, hash) {
  //   return this._super(type, hash);
  // },

  // extractSingle: function(store, type, payload) {
  //   return this._super(store, type, payload);
  // },

  extractArray: function(store, type, payload) {
    var _this = this;
    return payload.map(function(item, index, enumerable) {
      var obj = {
        id: (index + 1),
        item: item,
      };

      return _this.extractSingle(store, type, obj);
    });
  },

});