import DS from 'ember-data';

// https://github.com/HackerNews/API

export default DS.Model.extend({     
  deleted: DS.attr('boolean', { defaultValue: false }),  
  type: DS.attr('string'),    // "job", "story", "comment", "poll", or "pollopt"
  by: DS.belongsTo('user', { async: true }),
  time: DS.attr('date'),   // TODO serialize, deserialize momentjs
  text: DS.attr('string'),   
  dead: DS.attr('boolean', { defaultValue: false }),  
  parent: DS.belongsTo('item', { inverse: 'kids', async: true }),    
  kids: DS.hasMany('item', { inverse: 'parent', async: true }),      
  url: DS.attr('string'),  
  score: DS.attr('number'), 
  title: DS.attr('string'),
  // parts: DS.belongsTo('item', { inverse: 'root', async: true }),

  username: function() {
    return this.get('data.by.id');
  }.property('data.id'),

});