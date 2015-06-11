import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.Controller.extend({
  item: alias('model')
});
