import Ember from 'ember';
import DS from 'ember-data';

// https://github.com/HackerNews/API

var alias = Ember.computed.alias,
  equal = Ember.computed.equal,
  bool = Ember.computed.bool;


export default DS.Model.extend({
  type: DS.attr('string'),      // "job", "story", "comment", "poll", or "pollopt"
  title: DS.attr('string'),
  url: DS.attr('string'),

  // by: DS.belongsTo('user', { async: true }),
  by: DS.attr('string'),

  text: DS.attr('string'),
  score: DS.attr('number'),
  time: DS.attr('number'),

  dead: DS.attr('boolean', { defaultValue: false }),
  deleted: DS.attr('boolean', { defaultValue: false }),

  parent: DS.belongsTo('item', { inverse: 'kids', async: true }),     // story, comment or poll
  kids: DS.hasMany('item', { inverse: 'parent', async: true }),       // comments
  // parts: DS.belongsTo('item', { inverse: 'root', async: true }),     // pollopts

  // username: Ember.computed('data.by', function() {
  //   return this.get('data.by');
  // }),
  username: alias('by'),

  //numKids: alias('data.kids.length'),
  numKids: alias('kids.length'),

  hasKids: bool('numKids'),
  isParent: alias('hasKids'),

  isJob: equal('type', 'job'),
  isStory: equal('type', 'story'),
  isComment: equal('type', 'comment'),
  isPoll: equal('type', 'poll'),
  isPollOpt: equal('type', 'pollopt'),


});