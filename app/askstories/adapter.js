import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return "askstories";
  },

  _assignIdToPayload: function(snapshot) {
    var payload = {
      id: snapshot.key(),
      item: snapshot.val()
    };
    return payload;
  },
});