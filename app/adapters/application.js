import DS from 'ember-data';
import ENV from 'hacker-news/config/environment';

// https://github.com/firebase/emberfire#what-if-my-data-is-named-differently
export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://' + ENV.firebase_instace + '.firebaseio.com/' + ENV.api_version)
});
