import DS from 'ember-data';
import config from 'hacker-news/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase(config.firebase)
});
