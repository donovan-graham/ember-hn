import Ember from 'ember';
import DS from 'ember-data';

// https://github.com/HackerNews/API

const ITEM_TYPE_JOB = 'job',
  ITEM_TYPE_STORY = 'story',
  ITEM_TYPE_COMMENT = 'comment',
  ITEM_TYPE_POLL = 'poll',
  ITEM_TYPE_POLLOPT = 'pollopt';

export { ITEM_TYPE_JOB, ITEM_TYPE_STORY, ITEM_TYPE_COMMENT, ITEM_TYPE_POLL, ITEM_TYPE_POLLOPT };


var alias = Ember.computed.alias,
  equal = Ember.computed.equal,
  bool = Ember.computed.bool;

export default DS.Model.extend({
  type: DS.attr('string'),      // "job", "story", "comment", "poll", or "pollopt"
  title: DS.attr('string'),     // The title of the story, poll or job; not for comment
  url: DS.attr('string'),

  // by: DS.belongsTo('user', { async: true }),
  by: DS.attr('string'),

  text: DS.attr('string'),
  score: DS.attr('number'),
  time: DS.attr('number'),

  dead: DS.attr('boolean', { defaultValue: false }),
  deleted: DS.attr('boolean', { defaultValue: false }),

  parent: DS.belongsTo('item', { inverse: 'kids', async: true }),     // story, comment or poll
  kids: DS.hasMany('item', { inverse: 'parent', async: true }),       // the ids of the item's comments, in ranked display order
  // parts: DS.belongsTo('item', { inverse: 'root', async: true }),     // pollopts

  // top level, recursive
  descendants: DS.attr('number'),  //  In the case of stories or polls, the total comment count.
  hasDescendants: bool('descendants'),

  // username: Ember.computed('data.by', function() {
  //   return this.get('data.by');
  // }),
  username: alias('by'),

  //numKids: alias('data.kids.length'),
  numKids: alias('kids.length'),

  hasKids: bool('numKids'),
  isParent: alias('hasKids'),

  isJob: equal('type', ITEM_TYPE_JOB),
  isStory: equal('type', ITEM_TYPE_STORY),
  isComment: equal('type', ITEM_TYPE_COMMENT),
  isPoll: equal('type', ITEM_TYPE_POLL),
  isPollOpt: equal('type', ITEM_TYPE_POLLOPT),

});