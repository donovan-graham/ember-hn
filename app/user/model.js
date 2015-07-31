// import Ember from 'ember';
import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;

export default DS.Model.extend({
  delay: DS.attr('number'),
  created: DS.attr('date'),
  karma: DS.attr('number'),
  about: DS.attr('string'),

  submitted: DS.hasMany('item', { async: true }),

  username: computed.alias('id'),

  numSubmissions: computed.alias('submitted.length'),
});