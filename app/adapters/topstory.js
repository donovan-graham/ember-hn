import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return "topstories";
  },

  _assignIdToPayload: function(snapshot) {
    var payload = {
      id: snapshot.name(),
      item: snapshot.val()
    };
    return payload;
  },

  _findAllAddEventListeners: function(store, type, ref) {
    this._findAllMapForType[type] = true;

    var adapter = this;
    var serializer = store.serializerFor(type);

    ref.on('child_changed', function(snapshot) {
      var record = store.getById(type, snapshot.name());
      record.setProperties({
        item: null,
        item_id: snapshot.val()
      });
    });

    ref.on('child_added', function(snapshot) {
      if (!store.hasRecordForId(type, snapshot.name())) {
        adapter._handleChildValue(store, type, serializer, snapshot);
      }
    });
  }

});