import DS from 'ember-data';

// https://github.com/HackerNews/API

export default DS.Model.extend({
  // dueTask:    DS.belongsTo('task', { inverse: 'dueFrequency', async: true }),
   
  deleted: DS.attr('boolean', { defaultValue: false }),  
  type: DS.attr('string'),  // "job", "story", "comment", "poll", or "pollopt"
  by: DS.attr('string'),  
  time: DS.attr('date'),  
  text: DS.attr('string'),   
  dead: DS.attr('boolean', { defaultValue: false }),  
  // parent:   
  // kids:    
  url: DS.attr('string'),  
  score: DS.attr('number'), 
  title: DS.attr('string'),
  // parts: 
});
 
/*
## STORY
{
  "by" : "dhouston",
  "id" : 8863,
  "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
  "score" : 111,
  "time" : 1175714200,
  "title" : "My YC app: Dropbox - Throw away your USB drive",
  "type" : "story",
  "url" : "http://www.getdropbox.com/u/2/screencast.html"
}

## COMMENT
{
  "by" : "norvig",
  "id" : 2921983,
  "kids" : [ 2922097, 2922429, 2924562, 2922709, 2922573, 2922140, 2922141 ],
  "parent" : 2921506,
  "text" : "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?",
  "time" : 1314211127,
  "type" : "comment"
}


## POLL
{
  "by" : "pg",
  "id" : 126809,
  "kids" : [ 126822, 126823, 126993, 126824, 126934, 127411, 126888, 127681, 126818, 126816, 126854, 127095, 126861, 127313, 127299, 126859, 126852, 126882, 126832, 127072, 127217, 126889, 127535, 126917, 126875 ],
  "parts" : [ 126810, 126811, 126812 ],
  "score" : 46,
  "text" : "",
  "time" : 1204403652,
  "title" : "Poll: What would happen if News.YC had explicit support for polls?",
  "type" : "poll"
}

## POLL OPTION
{
  "by" : "pg",
  "id" : 160705,
  "parent" : 160704,
  "score" : 335,
  "text" : "Yes, ban them; I'm tired of seeing Valleywag stories on News.YC.",
  "time" : 1207886576,
  "type" : "pollopt"
}

*/