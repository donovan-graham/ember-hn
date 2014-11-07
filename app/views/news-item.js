import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/news-item',
  classNameBindings: [':news-item', 'loaded'],
  loaded: Ember.computed.alias('content.item.isLoaded'),
});