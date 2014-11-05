import DS from 'ember-data';
import ENV from 'hacker-news/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('https://' + ENV.firebase_instace + '.firebaseio.com/' + ENV.api_version)
});
