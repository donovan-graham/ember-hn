import ApplicationAdapter from 'hacker-news/application/adapter';

export default ApplicationAdapter.extend({
  pathForType() {
    return "user";
  }
});