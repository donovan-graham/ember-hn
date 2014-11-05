import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'views/news-item',
  // TODO render deleted template for item.deleted === true
  // example: https://hacker-news.firebaseio.com/v0/item/8505603.json?print=pretty
  classNameBindings: [':news-item', 'itemLoaded:loaded'],

  itemLoaded: false,

  observeLoading: function() {
		var _this = this;
		if (this.get('content.item.isLoaded')) {
			Ember.run.once(_this, function() {
				_this.set('itemLoaded', true);
			}, 100);
		}
  }.observes('content.item.isLoaded'),


});