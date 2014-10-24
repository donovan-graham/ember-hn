import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/news-item',  
  item: Ember.computed.alias('content'),
  classNames: ['news-item'],

  pageOffset: Ember.computed.oneWay('parentView.pageOffset'),

  itemIndex: function() {
    return (this.get('contentIndex') + this.get('pageOffset')) + 1;
  }.property('contentIndex', 'pageOffset'),
});