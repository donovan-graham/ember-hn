import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.View.extend({
  templateName: 'views/news-item',
  classNameBindings: [':news-item', 'loaded'],
  loaded: alias('content.item.isLoaded'),
});