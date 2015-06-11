import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return "jobstories";
  },

  _assignIdToPayload: function(snapshot) {
    var payload = {
      id: snapshot.key(),
      item: snapshot.val()
    };
    return payload;
  },
});