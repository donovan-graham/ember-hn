import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  delay: DS.attr('number'),
  created: DS.attr('date'),
  karma: DS.attr('number'),
  about: DS.attr('string'),
  submitted: DS.hasMany('item', { async: true }),
 });
