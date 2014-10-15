import Ember from 'ember';
import DS from 'ember-data';

// https://github.com/HackerNews/API

export default DS.Model.extend({     
  type: DS.attr('string'),      // "job", "story", "comment", "poll", or "pollopt"
  title: DS.attr('string'),
  url: DS.attr('string'),  
  by: DS.belongsTo('user', { async: true }),
  text: DS.attr('string'),   
  score: DS.attr('number'),  
  time: DS.attr('number'),
  dead: DS.attr('boolean', { defaultValue: false }),  
  deleted: DS.attr('boolean', { defaultValue: false }),  
  
  parent: DS.belongsTo('item', { inverse: 'kids', async: true }),     // story, comment or poll   
  kids: DS.hasMany('item', { inverse: 'parent', async: true }),       // comments
  // parts: DS.belongsTo('item', { inverse: 'root', async: true }),     // pollopts


  username: function() {
    return this.get('data.by.id');
  }.property('data.by.id'),

  numKids: function() {
    return this.get('data.kids.length');
  }.property('data.kids.length'),

  hasKids: Ember.computed.bool('numKids'),
  isParent: Ember.computed.alias('hasKids'),

  isJob: Ember.computed.equal('type', 'job'),
  isStory: Ember.computed.equal('type', 'story'),
  isComment: Ember.computed.equal('type', 'comment'),
  isPoll: Ember.computed.equal('type', 'poll'),
  isPollOpt: Ember.computed.equal('type', 'pollopt'),


});