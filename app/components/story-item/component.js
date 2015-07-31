import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
 tagName: 'li',
 classNameBindings: [':news-item', 'loaded'],

 item: null,
 rank: null,

 loaded: computed.alias('item.isLoaded'),
});