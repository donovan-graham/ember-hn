import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  let escaped = Ember.Handlebars.Utils.escapeExpression(value);
  return new Ember.Handlebars.SafeString('' + escaped);
});