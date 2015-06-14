import Ember from 'ember';

var alias = Ember.computed.alias;

export default Ember.Component.extend({
 tagName: 'li',
 classNameBindings: [':news-item', 'loaded'],

 item: null,
 rank: null,

 loaded: alias('item.isLoaded'),
});