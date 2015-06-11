import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType: function() {
    return "item";
  }
});