import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return moment.unix(value).fromNow();
  //  return new Ember.Handlebars.SafeString('' + escaped);
 });
