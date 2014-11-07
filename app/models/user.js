// import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  delay: DS.attr('number'),
  created: DS.attr('date'),
  karma: DS.attr('number'),
  about: DS.attr('string'),
  submitted: DS.hasMany('item', { async: true }),

  username: function() {
    return this.get('data.id');
  }.property('data.id'),

  numSubmissions: function() {
    // some are comments ...
    // some are stories ...
    return this.get('data.submitted.length');
  }.property('data.submitted.length'),

 });
