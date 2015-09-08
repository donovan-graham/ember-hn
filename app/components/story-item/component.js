import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: [':news-item', 'loaded'],

  item: null,
  rank: null,

  loaded: computed.alias('item.isLoaded'),

  actions: {
    open() {
      let ref = window.open(this.get('item.url'), '_blank', 'location=yes,toolbar=yes,closebuttoncaption=☒,toolbarposition=bottom,clearcache=yes,clearsessioncache=yes,hardwareback=yes,transitionstyle=fliphorizontal');
      // ref.addEventListener('loadstop', () => {
      //   ref.insertCSS({code: ".inAppBrowserWrap { background-color: green; color: pink; }"});
      // });
      return false;
    }
  }
});