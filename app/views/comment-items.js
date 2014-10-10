 import Ember from 'ember';
import CommentItemView from 'hacker-news/views/comment-item';
 
export default Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['comment-items'],
  itemViewClass: CommentItemView
});

