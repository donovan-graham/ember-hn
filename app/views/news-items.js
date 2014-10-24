import Ember from 'ember';
import NewsItemView from 'hacker-news/views/news-item';
 
export default Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['news-items'],
  itemViewClass: NewsItemView
});

