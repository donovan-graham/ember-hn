import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/news-item',
  // TODO render deleted template for item.deleted === true
  // example: https://hacker-news.firebaseio.com/v0/item/8505603.json?print=pretty
  classNames: ['news-item'],
});