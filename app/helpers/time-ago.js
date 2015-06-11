import Ember from 'ember';
import moment from 'moment';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return (value) ? moment.unix(value).fromNow() : '';
  //  return new Ember.Handlebars.SafeString('' + escaped);
 });
