import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType() {
    return "showstories";
  },

  _assignIdToPayload(snapshot) {
    let payload = {
      id: snapshot.key(),
      item: snapshot.val()
    };
    return payload;
  },
});