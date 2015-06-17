import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return "topstories";
  },

  _assignIdToPayload: function(snapshot) {
    var payload = {
      id: snapshot.key(),
      item: snapshot.val()
    };
    return payload;
  },
});